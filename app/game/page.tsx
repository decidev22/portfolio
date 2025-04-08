"use client";

import { useEffect, useState } from "react";
import NavBar from "../component/nav/NavBar";
import MainBottom from "../component/mainPageComponent/Main_Bottom";

export default function Game() {
  const [gameState, setGameState] = useState<string | null>(null);
  useEffect(() => {
    async function fetchGameState() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_GAME_API_URL}/game`);
        const data = await res.json();
        setGameState(data.message);
      } catch (error) {
        console.error("Failed to load game state", error);
      }
    }
    fetchGameState();
  }, []);

  const gameStartHandler = () => {
    setGameState("game-start");
  };

  const gameEndHandler = () => {
    setGameState("game-ended");
    setTimeout(() => {
      setGameState("Welcome to Node War!");
    }, 5000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <NavBar />
      {/* Game Screen */}
      <div className="flex flex-col">
        <div className="top-1 text-center">Title: Node War!</div>
        <div className="w-[500px] h-[500px] border border-1 border-white flex justify-center items-center">
          {" "}
          {gameState ? (
            <div>{gameState}</div>
          ) : (
            <div className="h-full flex justify-center items-center">Connecting to Game Server...</div>
          )}{" "}
        </div>
      </div>
      <div className="grid grid-cols-2 w-[500px] py-5 justify-items-center">
        <div className="border border-1 rounded-lg h-[50px] w-[100px] text-center content-center" onClick={() => gameStartHandler()}>
          Start
        </div>
        <div className="border border-1 rounded-lg h-[50px] w-[100px] text-center content-center" onClick={() => gameEndHandler()}>
          Reset
        </div>
      </div>
      <MainBottom />
    </div>
  );
}
