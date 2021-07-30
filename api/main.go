package main

import (
	Sex "github.com/Plankiton/SexPistol"
	SexDB "github.com/Plankiton/SexPistol/Cartridge"
	mysql "gorm.io/driver/mysql"
)

func main() {
	driver, uri := mysql.Open, Sex.GetEnv("PREAMAR_DATABASE_URL", "test.db")
	if Sex.GetEnv("SEX_DEBUG", "false") != "false" {
		driver, uri = SexDB.Sqlite, "test.db"
	}

	db, err := SexDB.Open(uri, driver)
	if err != nil {
		Sex.Die(err)
	}

	db.AddModels(
		new(Category),
		new(Meal),
	)

	Sex.Err(Sex.NewPistol().
	Add("/", func (Sex.Request) Sex.Json {
		cats := [] Category {}

		if db.Find(&cats).Error != nil {
			return nil
		}

		for c, cat := range cats {
			db.Joins("join categories cat on cat.ID = CatID").Find(&cats[c].Meals)
			Sex.SuperPut(cat, cats[c])
		}

		return cats
	}).
	Run())
}
