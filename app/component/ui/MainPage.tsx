import Main_Greeting from "../mainPageComponent/Main_Greeting";
import MainActivities from "../mainPageComponent/Main_Activities";
import Main_Content from "../mainPageComponent/Main_Content";
import classes from "./MainPage.module.css";
import { useState } from "react";
import CompassComponent from "../animation/graphic-animation/Compass";
import CursorSparkleEffect from "../animation/graphic-animation/CursorSparkle";

const MainPageLayout = () => {
  const [rotation, setRotation] = useState(0);

  const contents = [<Main_Greeting key="main-greeting" />, <MainActivities key="main-activities" />, <Main_Content key="main-content" />];
  const handleRotate = () => {
    // Old code reference
    // setRotation(rotation + 360 / contents.length);
    animateRotation(360 / contents.length, 0.15, false);
  };
  const handleCounterRotate = () => {
    // Old code reference
    // setRotation(rotation - 360 / contents.length);
    animateRotation(360 / contents.length, 0.15, true);
  };

  // direciton true means to Left, false is to Right.
  function animateRotation(targetDelta: number, easing: number, direction: boolean = true) {
    let startTime = performance.now();
    let startRotation = rotation;
    let signedTargetDelta = targetDelta * (direction ? 1 : -1);

    function step(currentTime: number) {
      let elapsed = (currentTime - startTime) / 1000;
      let progress = 1 - Math.pow(1 - easing, elapsed * 60);

      let newRotation = startRotation + signedTargetDelta * progress;
      setRotation(newRotation);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setRotation(startRotation + signedTargetDelta);
      }
    }

    requestAnimationFrame(step);
  }

  const radius = 250;

  const items = contents.map((content, index) => {
    const angle = index * (360 / contents.length) + rotation;
    return (
      <div
        key={index}
        style={{
          transform: `rotate(${angle}deg) translateY(-${radius}px)`,
          transformOrigin: "bottom",
          position: "absolute",
          height: "100vh",
        }}
      >
        {content}
      </div>
    );
  });
  return (
    <>
      <div className={`${classes.rotationContainer} flex items-center justify-center h-screen`}>
        <div className="absolute left-0 z-10">
          <button onClick={handleCounterRotate}>Left</button>
        </div>
        <div className={`flex w-full justify-center max-h-screen overflow-hidden`}>{items}</div>
        <div className="absolute right-0 z-10">
          <button onClick={handleRotate}>Right</button>
        </div>
        <CursorSparkleEffect />
        <CompassComponent />
      </div>
    </>
  );
};

export default MainPageLayout;
