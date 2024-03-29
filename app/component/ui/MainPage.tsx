import Image from "next/image";
// import classes from "./MainPage.module.css";
import TextFlip from "../animation/TextFlip";

const MainPageLayout = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-full h-full">
        <div className="col-span-2">
          <p className="largeText">Welcome to my website</p>
          <p className="mediumText">Welcome to my website</p>
          <p className="smallText">Welcome to my website</p>
          <TextFlip
            text={[
              "BackEnd Engineer",
              "FrontEnd Engineer",
              "Full Stack Engineer",
              "Problem Solver",
            ]}
            className="mediumText bg-gradient-to-r from-blue-500 to-violet-400 inline-flex h-auto"
          />
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default MainPageLayout;
