package handler
import (
	api "github.com/Plankiton/PraAmar/back"
	"net/http"
)

var handler Http.Handler = api.Setup()
func Handler(w http.ResponseWriter, r *http.Request) {
	handler.ServeHTTP(w, r)
}
