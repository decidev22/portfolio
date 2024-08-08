import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";
import Main_Content from "../pages/mainPageComponent/Main_Content";
import MainPageDisplay from "../pages/mainPageComponent/Main_Page_Display";

const MainPageLayout = () => {
  return (
    <>
      <div className="grid grid-rows w-full h-full">
        <MainPageDisplay />
      </div>
    </>
  );
};

export default MainPageLayout;
