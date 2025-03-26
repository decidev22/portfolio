import Main_Greeting from "../mainPageComponent/Main_Greeting";
import MainActivities from "../mainPageComponent/Main_Activities";
import Main_Content from "../mainPageComponent/Main_Content";
import classes from "./MainPage.module.css";
import { useState } from "react";
import CompasComponent from "../animation/graphic-animation/Compas";

const MainPageLayout = () => {
  const [rotation, setRotation] = useState(0);

  const contents = [<Main_Greeting key="main-greeting" />, <MainActivities key="main-activities" />, <Main_Content key="main-content" />];
  const handleRotate = () => {
    setRotation(rotation + 360 / contents.length);
  };
  const handleCounterRotate = () => {
    setRotation(rotation - 360 / contents.length);
  };

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
        <CompasComponent />
      </div>
    </>
  );
};

export default MainPageLayout;
