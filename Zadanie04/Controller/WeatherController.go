package controller

import (
	model "WeatherApp/Model"
	"net/http"

	"github.com/labstack/echo/v5"
)

// type Weather struct {
// 	City string
// 	Temp int
// }

var weather = []*model.Weather{
	{City: "Barcelona", Temp: 19, DayOrNight: 1, WindSpeed10m: 3.3},
	{City: "Madrid", Temp: 21, DayOrNight: 1, WindSpeed10m: 3.3},
	{City: "Krakow", Temp: 14, DayOrNight: 1, WindSpeed10m: 3.3},
}

// GET
func GetWeather(c *echo.Context) error {
	return c.JSON(http.StatusOK, weather)
}
