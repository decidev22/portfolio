import ActivityBox from "../github_components/ActivityBox";
import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";
import classes from "./MainPage.module.css";

const MainPageLayout = () => {
  return (
    <>
      <div className="flex w-full px-5 2xl:!flex-row justify-center place-items-baseline mr-[100px] sm:flex-col">
        <div className="z-10 min-w-max">
          <Main_Greeting />
        </div>
        <div className="2xl:mt-0 ml-[100px]  sm: mt-10 w-min">
          <div className={`absolute ${classes.activityBoxContainer}`}>
            <div>
              <p>I am doing...</p>
              <ActivityBox type="PullRequestEvent" content="Portfolio" />
              <ActivityBox type="PushEvent" content="Portfolio" />
              <ActivityBox type="CreateEvent" content="Portfolio" />
              <ActivityBox type="WatchEvent" content="Portfolio" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageLayout;
