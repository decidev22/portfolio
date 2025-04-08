import { useState } from "react";

type GameProps = {
  id?: string;
};

type Node = {
  x: number;
  y: number;
};

const GameStart = ({ id }: GameProps) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const createNodeHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    await fetch("http://localhost:8080/create-node", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ x, y }),
    });

    setNodes([...nodes, { x, y }]);
  };

  return (
    <div className="w-full h-full relative" onClick={createNodeHandler}>
      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute w-[20px] h-[20px] bg-red-500 rounded-full"
          style={{
            left: node.x - 10,
            top: node.y - 10,
          }}
        />
      ))}
    </div>
  );
};

export default GameStart;
