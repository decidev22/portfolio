import ActivityBox from "../github_components/activityBox";
import Main_Content from "../pages/mainPageComponent/Main_Content";
import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";
import classes from "./MainPage.module.css";

const MainPageLayout = () => {
  return (
    <>
      <div className="grid grid-col grid-cols-5 w-full h-screen px-5">
        <div className="col-span-2 grid grid-row z-10 min-w-max">
          <Main_Greeting />
        </div>
        <div className="col-span-3">
          <div className={`absolute ${classes.activityBox}`}>
            <ActivityBox type="CreateEvent" />
          </div>
        </div>
      </div>
      <div>
        <Main_Content />
      </div>
    </>
  );
};

export default MainPageLayout;
