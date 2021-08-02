package main
import (
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/Plankiton/SexPistol"
)

func cors(p *Sex.Pistol) http.Handler {
	corsConf := handlers.CORS(
		handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "OPTIONS"}),
		handlers.AllowedOrigins([]string{
			"*",
		}),
		handlers.AllowCredentials(),
		handlers.AllowedHeaders([]string{"Authorization", "Reset", "uuid", "Origin", "Content-Type"}),
	)

	return corsConf(p)
}
