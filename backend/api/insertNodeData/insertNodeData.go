package insertNode

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Node struct {
	CurrX  int `bson:"currX"`
	CurrY  int `bson:"currY"`
	Power  int `bson:"power"`
	HP     int `bson:"hp"`
	MP     int `bson:"mp"`
	Hidden int `bson:"hidden"`
}

type GameHistory struct {
	GameStartDate string   `bson:"gameStartDate"`
	GameEndDate   string   `bson:"gameEndDate"`
	GameResult    bool     `bson:"gameResult"`
	PlayerList    []string `bson:"playerList"`
	TimeLine      []string `bson:"timeLine,omitempty"`
}

type CurrentGame struct {
	GameStartDate string `bson:"gameStartDate"`
	GameEndDate   *string `bson:"gameEndDate"` // nullable
	Resources     struct {
		Mineral int `bson:"mineral"`
		Gem     int `bson:"gem"`
	} `bson:"resources"`
	Nodes struct {
		NodeEntities []Node `bson:"nodeEntities"`
	} `bson:"nodes"`
}

type User struct {
	UserName     string        `bson:"userName"`
	AccountLevel string        `bson:"accountLevel"` // enum: user, admin, observer
	GameHistory  []GameHistory `bson:"gameHistory"`
	CurrentGame  CurrentGame   `bson:"currentGame"`
}


func init() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func InsertNodeData(x, y int) {
	port := os.Getenv("GAME_DB_PORT")
	mongoURI := os.Getenv("GAME_MONGO_USER_DB_URL")

	fmt.Println("Running on port:", port)
	fmt.Println("Mongo URI:", mongoURI)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		panic(err)
	}
	defer client.Disconnect(ctx)

	db := client.Database("node-war")
	userCollection := db.Collection("users")

	// Example insert
	endDate := "2025-04-08T12:00:00Z"
	user := User{
		UserName:     "player1",
		AccountLevel: "user",
		GameHistory: []GameHistory{
			{
				GameStartDate: "2025-04-01T10:00:00Z",
				GameEndDate:   "2025-04-01T11:00:00Z",
				GameResult:    true,
				PlayerList:    []string{"player1", "player2"},
			},
		},
		CurrentGame: CurrentGame{
			GameStartDate: "2025-04-08T11:00:00Z",
			GameEndDate:   &endDate,
			Resources: struct {
				Mineral int `bson:"mineral"`
				Gem     int `bson:"gem"`
			}{Mineral: 100, Gem: 50},
			Nodes: struct {
				NodeEntities []Node `bson:"nodeEntities"`
			}{NodeEntities: []Node{
				{CurrX: 10, CurrY: 20, Power: 5, HP: 100, MP: 50, Hidden: 0},
			}},
		},
	}

	_, err = userCollection.InsertOne(ctx, user)
	if err != nil {
		panic(err)
	}

	fmt.Println("User inserted")
}