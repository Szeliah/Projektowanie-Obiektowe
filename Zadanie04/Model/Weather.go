package model

import "gorm.io/gorm"

type Weather struct {
	gorm.Model
	City         string  `json:"city"`
	Temp         float64 `json:"temp"`
	DayOrNight   int     `json:"day_or_night"`
	WindSpeed10m float64 `json:"wind_speed_10m"`
}
