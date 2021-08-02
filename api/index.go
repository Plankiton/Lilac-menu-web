package handler
import (
	"github.com/Plankiton/PraAmar-back"
	"net/http"
)

var handler http.Handler = api.Setup()
func Handler(w http.ResponseWriter, r *http.Request) {
	handler.ServeHTTP(w, r)
}
