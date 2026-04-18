package proxy

import (
	model "WeatherApp/Model"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strconv"

	"gorm.io/gorm"
)

type coordinates struct {
	Lat float64
	Lon float64
}

type apiResponseWeather struct {
	Current struct {
		Time      string  `json:"time"`
		Temp      float64 `json:"temperature_2m"`
		IsDay     int     `json:"is_day"`
		WindSpeed float64 `json:"wind_speed_10m"`
	} `json:"current"`
}

type apiResponseGeocoding struct {
	Results []struct {
		Name      string  `json:"name"`
		Latitude  float64 `json:"latitude"`
		Longitude float64 `json:"longitude"`
		Country   string  `json:"country"`
	} `json:"results"`
}

type WeatherProxy struct {
	db *gorm.DB
}

func NewWeatherProxy(db *gorm.DB) *WeatherProxy {
	return &WeatherProxy{db: db}
}

func convertCityNameToCoordinates(cityName string) (coordinates, error) {
	encoded := url.QueryEscape(cityName)
	url := "https://geocoding-api.open-meteo.com/v1/search?name=" + encoded + "&count=1&language=en&format=json"

	resp, err := http.Get(url)

	if err != nil {
		return coordinates{}, err
	}

	defer resp.Body.Close()

	var geocoding apiResponseGeocoding
	if err := json.NewDecoder(resp.Body).Decode(&geocoding); err != nil {
		return coordinates{}, err
	}

	if len(geocoding.Results) == 0 {
		return coordinates{}, fmt.Errorf("city not found")
	}

	return coordinates{Lat: geocoding.Results[0].Latitude, Lon: geocoding.Results[0].Longitude}, nil
}

func (w *WeatherProxy) updateDatabase(data *model.Weather) {
	w.db.Create(&data)
}

func (w *WeatherProxy) GetWeatherByCityName(cityName string) (model.Weather, error) {

	cord, err := convertCityNameToCoordinates(cityName)

	if err != nil {
		return model.Weather{}, err
	}

	lat := strconv.FormatFloat(cord.Lat, 'f', -1, 64)
	lon := strconv.FormatFloat(cord.Lon, 'f', -1, 64)

	url := "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m,is_day,wind_speed_10m"

	resp, err := http.Get(url)

	if err != nil {
		return model.Weather{}, err
	}

	defer resp.Body.Close()

	var weatherData apiResponseWeather
	if err := json.NewDecoder(resp.Body).Decode(&weatherData); err != nil {
		return model.Weather{}, err
	}

	data := model.Weather{Time: weatherData.Current.Time, City: cityName, Temp: weatherData.Current.Temp, DayOrNight: weatherData.Current.IsDay, WindSpeed10m: weatherData.Current.WindSpeed}

	w.updateDatabase(&data)

	return data, nil

}
