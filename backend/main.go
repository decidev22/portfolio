package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
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

	// Game route
	r.GET("/game", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "welcome to node war"})
	})

	r.Run(":8080") // Start server on port 8080
}
