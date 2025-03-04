import Main_Content from "../pages/mainPageComponent/Main_Content";
import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";
import classes from "./MainPage.module.css";

const MainPageLayout = () => {
  return (
    <>
      <div className="grid grid-col grid-cols-5 w-full h-full px-5">
        <div className="col-span-2 grid grid-row z-10 min-w-max">
          <Main_Greeting />
        </div>
        <div className="col-span-3 border border-1 border-white">
          <div className={`absolute ${classes.activityBox}`}></div>
        </div>

        <div>
          <p>Sample</p>
        </div>
      </div>
      <div>
        <Main_Content />
      </div>
    </>
  );
};

export default MainPageLayout;
