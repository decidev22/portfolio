import { useEffect, useState } from "react";

interface CompassComponentInterface {
  componentName?: string;
}

const CompassComponent: React.FC<CompassComponentInterface> = ({ componentName }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const mouseTrack = (event: MouseEvent) => {
      const compass = document.getElementById("compass");
      if (!compass) return;

      const rect = compass.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      const radian = Math.atan2(deltaY, deltaX);
      const degree = radian * (180 / Math.PI);

      setAngle(degree);
    };

    // Add event listener on mount
    window.addEventListener("mousemove", mouseTrack);
    return () => {
      window.removeEventListener("mousemove", mouseTrack);
    };
  }, []);
  return (
    <>
      <div className="absolute bottom-[-300px] flex items-center justify-center  border border-1 border-white border-opacity-50 rounded-full w-[600px] h-[600px] z-10">
        <div
          className="xl:bottom-[-50%] border border-1 border-white border-opacity-70 rounded-full w-[400px] h-[400px] z-20 flex items-center justify-center"
          id="compass"
          style={{
            transform: `rotate(${angle}deg)`,
          }}
        >
          <div className="absolute w-[550px] h-[3px] bg-red-700 origin-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default CompassComponent;
