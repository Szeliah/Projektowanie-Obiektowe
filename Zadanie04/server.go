package main

import (
	model "WeatherApp/Model"
	route "WeatherApp/Route"

	"github.com/labstack/echo/v5"
	"github.com/labstack/echo/v5/middleware"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	e := echo.New()
	e.Use(middleware.RequestLogger())

	db, _ := gorm.Open(sqlite.Open("weather.db"), &gorm.Config{})
	db.AutoMigrate(&model.Weather{})

	route.WeatherRoutes(e)

	if err := e.Start(":8080"); err != nil {
		e.Logger.Error("failed to start server", "error", err)
	}
}
