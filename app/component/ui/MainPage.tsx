import Main_Content from "../pages/mainPageComponent/Main_Content";
import Main_Greeting from "../pages/mainPageComponent/Main_Greeting";

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
