package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Starting server on :8080...") // Debugging message

	r := gin.Default()
	r.Use(cors.Default())

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	// Test route
	r.GET("/test", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "test"})
	})

	// Game server state
	r.GET("/game", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "welcome to node war"})
	})

	r.POST("/create-node", func(c *gin.Context) {
		var payload struct {
			X float64 `json:"x"`
			Y float64 `json:"y"`
		}
		if err := c.BindJSON(&payload); err != nil {
			c.JSON(400, gin.H{"error": "invalid payload"})
			return
		}
		fmt.Printf("New node created at X: %.2f, Y: %.2f\n", payload.X, payload.Y)
		c.JSON(200, gin.H{"message": "node created"})
	})


	r.Run(":8080") // Start server on port 8080
}
