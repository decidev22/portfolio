import Image from "next/image";
// import classes from "./MainPage.module.css";
import TextFlip from "../animation/TextFlip";
import AnimationText from "../animation/AnimationText";
import Main_Greeting from "../pages/mainpageComponent/Main_Greeting";
import Main_Content from "../pages/mainpageComponent/Main_Content";

const MainPageLayout = () => {
  return (
    <>
      <div className="grid grid-rows w-full h-full">
        <Main_Greeting />

        <Main_Content />
      </div>
    </>
  );
};

export default MainPageLayout;
