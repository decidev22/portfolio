import { useRef, useState } from "react";

type GameProps = {
  id?: string;
};

type Node = {
  x: number;
  y: number;
};

// what I expect entity to look like
// const entity = {name: "entity1", x: 10, y: 20}
type Entity = {
  name: string;
  currentX: number;
  currentY: number;
  radius: number;
};

const DATABASE_URL = process.env.NEXT_PUBLIC_GAME_API_URL;

const GameStart = ({ id }: GameProps) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const entitiesRef = useRef<Entity[]>([]);

  function isOccupied(x: number, y: number) {
    return entitiesRef.current.some((e) => {
      const dx = e.currentX - x;
      const dy = e.currentY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      console.log("dist: %d, e.radius: %d", dist, e.radius);
      return dist < e.radius;
    });
  }

  const createNodeHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if Node already in the proxy
    // if not, create node via api, or, display error
    console.log("checking the occupied space");
    if (isOccupied(x, y)) {
      console.log("OCCUPIED!");
    }
    if (!isOccupied(x, y)) {
      console.log("Is not occupied");
      await fetch(`${DATABASE_URL}/create-node`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ x, y }),
      });

      setNodes([...nodes, { x, y }]);
      entitiesRef.current.push({ name: `entity${entitiesRef.current.length + 1}`, currentX: x, currentY: y, radius: 20 });
      console.log("entities: ", entitiesRef);
    }
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
