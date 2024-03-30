import AnimationText from "../../animation/AnimationText";
import TextFlip from "../../animation/TextFlip";

const Main_Greeting = () => {
  return (
    <>
      <div className="largeText mt-5">
        <div className="inline-block">
          {" "}
          <TextFlip
            text={["Kia Ora,", "Hello,", "안녕하세요,", "G'day,"]}
            size="large"
            loadingMessage="Greetings,"
          />
          My name is Andy,{" "}
        </div>
      </div>
      <AnimationText
        text="SOFTWARE ENGINEER"
        className="font-semibold largeText"
        hoverColor="#a78bfa"
      />
      <div className="flex flex-col">
        <span className="largeText">I am interested in... </span>
        <TextFlip
          text={[
            "BackEnd Engineering",
            "FrontEnd Engineering",
            "Artificial Intelligence",
            "Problem Solving",
            "Innovation and Start-ups",
          ]}
          className="bg-gradient-to-r from-blue-500 to-violet-400"
          size="large"
          loadingMessage="Loading interests..."
        />
      </div>
    </>
  );
};

export default Main_Greeting;
