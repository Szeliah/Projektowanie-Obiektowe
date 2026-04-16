package controller

import (
	"net/http"

	"github.com/labstack/echo/v5"
)

type Weather struct {
	City string
	Temp int
}

// GET
func GetWeather(c *echo.Context) error {

	weather := Weather{City:"Barcelona", Temp: 19}
	return c.JSON(http.StatusOK, weather)
}
