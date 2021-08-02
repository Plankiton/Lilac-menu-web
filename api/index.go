package handler
import api "github.com/Plankiton/PraAmar/api/PraAmar"

import (
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	handler := api.SetUp()
	handler.ServeHTTP(w, r)
}
