package route

import (
	controller "WeatherApp/Controller"

	"github.com/labstack/echo/v5"
)

func WeatherRoutes(e *echo.Echo) {

	e.GET("/weather", controller.GetWeather)

}
