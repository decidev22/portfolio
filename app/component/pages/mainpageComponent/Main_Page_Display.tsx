"use client";

import { useEffect, useState } from "react";
import classes from "./Main_Page_Display.module.css";

type ScreenSize = {
  width: number;
  height: number;
};

const MainPageDisplay = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>();
  const [xMid, setXMid] = useState<number>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      if (screenSize?.width) {
        setXMid(screenSize?.width / 2);
      }
    }
  }, [screenSize]);
  return (
    <div className="h-dvh w-full text-white">
      {/* Place holding div */}
      <div className="h-80"></div>
      {/* Infinity Line */}
      <div className={`h-48 ${classes.infinityLine}`}>
        <svg
          height="10"
          width={screenSize?.width}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Infinite Line */}
          <line
            x1="0"
            y1="0"
            x2={xMid}
            y2="0"
            style={{
              strokeWidth: 2,
              strokeDasharray: "100 10",
              strokeDashoffset: "70",
            }}
            className={`${classes[`left-Infinity-line`]}`}
          />
          {/* Right Infinite Line */}
          <line
            x1={xMid}
            y1="0"
            x2={screenSize?.width}
            y2="0"
            style={{
              strokeWidth: 2,
              strokeDasharray: "100 10",
              strokeDashoffset: "70",
            }}
            className={`${classes[`right-Infinity-line`]}`}
          />
        </svg>
      </div>
    </div>
  );
};

export default MainPageDisplay;
