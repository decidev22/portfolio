import { useEffect, useRef, useState } from "react";

const CursorTrailEffect = () => {
  const [coordinates, setCoordinates] = useState<{ x: number; y: number; time: number }[]>([]);
  const [mounted, setMounted] = useState(false); // Track if the component has mounted
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true); // Set mounted to true after the component is mounted in the browser

      const updateMousePosition = (event: MouseEvent) => {
        const currentTime = Date.now();

        setCoordinates((prev) =>
          [...prev, { x: event.clientX, y: event.clientY, time: currentTime }].filter((point) => currentTime - point.time < 2000)
        );
      };

      const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const currentTime = Date.now();

        // Draw independent lines with fading effect
        coordinates.forEach(({ x, y, time }, index) => {
          const age = currentTime - time;
          const opacity = 1 - age / 1500;

          if (index > 0 && opacity > 0) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 57, 100, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(coordinates[index - 1].x, coordinates[index - 1].y);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        });

        requestAnimationFrame(draw);
      };

      window.addEventListener("mousemove", updateMousePosition);
      draw();

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [coordinates]);

  if (!mounted) {
    return null; // Return null during SSR or before the component is mounted
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CursorTrailEffect;
