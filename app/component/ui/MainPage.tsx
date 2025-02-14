import Main_Content from "../pages/mainPageComponent/Main_Content";
import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";
import classes from "./MainPage.module.css";

const MainPageLayout = () => {
  return (
    <>
      <div className="grid grid-col grid-cols-5 w-full h-full">
        <div className="border border-1 border-white">
          <p>Sample</p>
        </div>
        <div className="border border-1 border-white">
          <div className={`absolute ${classes.activityBox}`}>Status</div>
        </div>
        <div className="grid grid-row z-10 min-w-max border border-1 border-white">
          <Main_Greeting />
        </div>
      </div>
      <div>
        <Main_Content />
      </div>
    </>
  );
};

export default MainPageLayout;
