package db

import (
	model "WeatherApp/Model"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func Connect() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("data.db"))

	if err != nil {
		panic("Failed to connect with database")
	}

	db.AutoMigrate(&model.Weather{})

	return db
}
