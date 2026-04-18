package controller

import (
	model "WeatherApp/Model"
	proxy "WeatherApp/Proxy"
	"net/http"

	"github.com/labstack/echo/v5"
	"gorm.io/gorm"
)

// GET
func GetWeather(c *echo.Context) error {
	db := c.Get("db").(*gorm.DB)
	weatherProxy := proxy.NewWeatherProxy(db)
	
	city := c.Param("city")
	weather, err := weatherProxy.GetWeatherByCityName(city)

	if err != nil {
		return c.JSON(http.StatusBadGateway, map[string]string{"error": "Nie udało się pobrać danych o pogodzie"})
	}

	return c.JSON(http.StatusOK, weather)
}

func GetAllWeatherFromDB(c *echo.Context) error {
	db := c.Get("db").(*gorm.DB)
	var data []model.Weather
	db.Find(&data)
	return c.JSON(200, data)
}
