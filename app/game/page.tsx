"use client";

import { useEffect, useState } from "react";

export default function Game() {
  const [gameState, setGameState] = useState(null);
  useEffect(() => {
    async function fetchGameState() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_GAME_API_URL}/game`);
        console.log("res", res);
        const data = await res.json();
        console.log("data state", data);
        setGameState(data);
      } catch (error) {
        console.error("Failed to load game state", error);
      }
    }
    fetchGameState();
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="top-1 text-center">Title: Node War!</div>
        <div className="w-[500px] h-[500px] border border-1 border-white">
          {" "}
          {gameState ? JSON.stringify(gameState) : <div className="h-full flex justify-center items-center">Loading...</div>}{" "}
        </div>
      </div>
    </div>
  );
}
