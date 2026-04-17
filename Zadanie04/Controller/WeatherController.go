package controller

import (
	proxy "WeatherApp/Proxy"
	"net/http"

	"github.com/labstack/echo/v5"
)

// GET
func GetWeather(c *echo.Context) error {
	city := "Helsinki"
	weather, err := proxy.GetWeatherByCityName(city)

	if err != nil {
		return c.JSON(http.StatusBadGateway, map[string]string{"error": "Nie udało się pobrać danych o pogodzie"})
	}

	return c.JSON(http.StatusOK, weather)
}
