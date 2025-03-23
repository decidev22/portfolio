import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";
import MainActivities from "../pages/mainPageComponent/Main_Activities";
import Main_Content from "../pages/mainPageComponent/Main_Content";
import classes from "./MainPage.module.css";
import { useState } from "react";

const MainPageLayout = () => {
  const [rotation, setRotation] = useState(0);

  const contents = [<Main_Greeting key="main-greeting" />, <MainActivities key="main-activities" />, <Main_Content key="main-content" />];
  const handleRotate = () => {
    console.log("Rotating!", rotation);
    setRotation(rotation + 360 / contents.length); // change this later
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
      <div className={`${classes.rotationContainer}`}>
        <div className={`flex w-full justify-center max-h-screen overflow-hidden`}>{items}</div>
        <div className="absolute right-0 z-10">
          <button onClick={handleRotate}>Rotate</button>
        </div>
      </div>
    </>
  );
};

export default MainPageLayout;
