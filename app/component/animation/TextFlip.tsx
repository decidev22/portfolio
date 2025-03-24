import { useState, useEffect } from "react";
import classes from "./TextFlip.module.css";

interface TextFlipProp {
  text: string[];
  className?: string;
  size?: "small" | "medium" | "large" | "nav";
  loadingMessage: string;
}

const TextFlip: React.FC<TextFlipProp> = ({ text, className, size, loadingMessage }) => {
  const [displayText, setDisplayText] = useState("");
  const [key, setKey] = useState(0);

  let sizeClasses = "";
  if (!size) {
    sizeClasses += "";
  }

  useEffect(() => {
    const time = size === "nav" ? 10000 : 6000;
    const intervalId = setInterval(() => {
      setDisplayText(text[key]);
      if (key > text.length || key + 1 === text.length) {
        setKey(0);
      } else {
        setKey((prev) => prev + 1);
      }
    }, time);
    return () => clearTimeout(intervalId);
  }, [key]);

  return (
    <>
      {(!size || size === "large") && (
        <div key={key} className={`${className} ${classes.textflipBox} ${classes.transitionWidth}`}>
          <p className={`${classes["text-flip-large"]} ${classes["text-bounce"]} sm:!text-[35px] lg:!text-[50px] xl:!text-[55px]`}>
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
      {size === "medium" && (
        <div key={key} className={`${className} ${classes.textflipBox}`}>
          <p className={`inline-flex ${classes["text-flip-medium"]} ${classes["text-bounce"]}`}>
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
      {size === "small" && (
        <div key={key} className={`${className} ${classes.textflipBox}`}>
          <p key={key} className={`inline-flex ${classes["text-flip-small"]} ${classes["text-bounce"]}`}>
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
      {size === "nav" && (
        <div key={key} className={`${className} ${classes.textflipBox}`}>
          <p key={key} className={`inline-flex ${classes["text-flip-nav"]}} md:!text-[20px] sm:!text-[15px]`}>
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
    </>
  );
};

export default TextFlip;
