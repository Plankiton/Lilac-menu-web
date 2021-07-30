package main
import SexDB "github.com/Plankiton/SexPistol/Cartridge"

type Category struct {
	SexDB.Model
	Name       string `json:"name,omitempty"`
	Meals      []Meal `json:"meals" gorm:"foreignKey:CatID"`
}

type Meal struct {
	SexDB.Model
	Name       string  `json:"Name,omitempty"`
	Desc       string  `json:"Desc,omitempty"`
	FullDesc   string  `json:"FullDesc,omitempty"`
	Price      float64 `json:"Price,omitempty"`

	CatID      uint
}

func(*Category) TableName() string{
	return "Categories"
}
func(*Meal) TableName() string{
	return "Meals"
}
