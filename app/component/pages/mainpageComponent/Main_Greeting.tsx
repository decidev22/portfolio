import { useEffect, useRef, useState } from "react";
import AnimationText from "../../animation/AnimationText";
import TextFlip from "../../animation/TextFlip";
import classes from "./Main_Greeting.module.css";
import NewZealandMap from "../../common_components/NewZealandMap";

const Main_Greeting = () => {
  const [width, setWidth] = useState(0);
  const observedDiv = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      if (!observedDiv.current) {
        // we do not initialize the observer unless the ref has
        // been assigned
        return;
      }
      // we also instantiate the resizeObserver and we pass
      // the event handler to the constructor
      const resizeObserver = new ResizeObserver(() => {
        if (observedDiv.current) {
          if (observedDiv.current.offsetWidth !== width) {
            setWidth(observedDiv.current.offsetWidth);
          }
        }
      });
      // the code in useEffect will be executed when the component
      // has mounted, so we are certain observedDiv.current will contain
      // the div we want to observe
      resizeObserver.observe(observedDiv.current);
      // if useEffect returns a function, it is called right before the
      // component unmounts, so it is the right place to stop observing
      // the div
      return function cleanup() {
        resizeObserver.disconnect();
      };
    },
    // only update the effect if the ref element changed
    [width]
  );

  return (
    <>
      <div className="largeText mt-10">
        <div className="inline-block">
          G Day,
          <br />
          My name is Andy, a{" "}
        </div>
      </div>
      <AnimationText
        text="SOFTWARE ENGINEER"
        className="stressText"
        hoverColor="#8b5cf6"
      />
      <div className="flex-col w-full largeText">
        From
        <span className="italic"> New Zealand</span>
        <div
          className={`absolute left-[50%] top-[20%] ${classes.mapContainer}`}
        >
          <NewZealandMap />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="largeText">I am interested in... </span>
        </div>

        <div className={`flex-col w-min h-[300px]`} ref={observedDiv}>
          <TextFlip
            text={[
              "Software Engineering",
              "Artificial Intelligence",
              "Problem Solving",
              "Innovation and Start-ups",
            ]}
            className="whitespace-nowrap px-2 bg-gradient-to-r from-blue-500 to-violet-400 rounded-lg"
            size="large"
            loadingMessage="Loading interests..."
          />
        </div>
      </div>
    </>
  );
};

export default Main_Greeting;
