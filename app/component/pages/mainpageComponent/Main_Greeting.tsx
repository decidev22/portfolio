import { useEffect, useRef, useState } from "react";
import AnimationText from "../../animation/AnimationText";
import TextFlip from "../../animation/TextFlip";
import classes from "./Main_Greeting.module.css";
import NewZealandMap from "../../common_components/NewZealandMap";
import SydneyOperaHouse from "../../common_components/SydneyOperaHouse";
import WavingIcon from "../../animation/WavingIcon";

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
    <div className="mt-[130px]">
      {/* <div className="flex-col largeText sm:text-[40px] lg:text-[55px] xl:text-[60px]">
        <div className="inline-block">G&apos;Day!</div>
        <div>My name is Andy Baeck, a</div>
      </div> */}
      <AnimationText
        text="A SOFTWARE ENGINEER"
        className="stressText z-50 sm:text-[40px] lg:text-[50px] xl:text-[50px]"
        hoverColor="#8489f6"
      />
      <div className="flex-col w-full largeText sm:text-[40px] lg:text-[50px xl:text-[50px]">
        In <div className="inline-flex">Sydney, Australia</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="largeText sm:text-[40px] lg:text-[50px] xl:text-[50px]">Interested & Experienced in... </span>
        </div>

        <div className={`flex-col w-min h-min`} ref={observedDiv}>
          <TextFlip
            text={["Fintech", "Start-up", "Artificial Intelligence", "LLM", "Productivity Application"]}
            className="whitespace-nowrap px-2 bg-gradient-to-r from-blue-500 to-violet-400 rounded-lg"
            size="large"
            loadingMessage="Loading interests..."
          />
        </div>
      </div>
    </div>
  );
};

export default Main_Greeting;
