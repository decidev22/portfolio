import classes from "./loading.module.css";

import AnimatedText from "./component/animation/AnimationText";
import Gauge from "./component/animation/Gauge";

const Loading = () => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center`}
    >
      <div className={`${classes.box}`}>
        <div
          className={`relative ${classes["background-change"]} ${classes.box} ${classes["glassy-background"]}`}
        />
        <AnimatedText
          text="Problem solver\nAndy Baeck\nFull-Stack Engineer"
          className="z-40 absolute top-3 left-4 text-[30px] font-bold"
        />
        <Gauge
          param={100}
          className="absolute z-20 bottom-3 right-3"
        />
      </div>
    </div>
  );
};

export default Loading;
