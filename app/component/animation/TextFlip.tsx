import { useState, useEffect } from "react";
import classes from "./TextFlip.module.css";
interface TextFlipProp {
  text: string[];
  className?: string;
  size?: "small" | "medium" | "large";
  loadingMessage: string;
}

const TextFlip: React.FC<TextFlipProp> = ({
  text,
  className,
  size,
  loadingMessage,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [key, setKey] = useState(0);

  let sizeClasses = "";
  if (!size) {
    sizeClasses += "";
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text[key]);
      if (key > text.length || key + 1 === text.length) {
        setKey(0);
      } else {
        setKey((prev) => prev + 1);
      }
    }, 4000);
    return () => clearTimeout(intervalId);
  }, [key]);

  return (
    <>
      {(!size || size === "large") && (
        <div
          key={key}
          className={`${className} ${classes.textflipBox}`}
        >
          <p
            className={`${classes["text-flip-large"]} ${classes["text-bounce"]}`}
          >
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
      {size === "medium" && (
        <div
          key={key}
          className={`${className} ${classes.textflipBox}`}
        >
          <p
            className={`inline-flex ${classes["text-flip-medium"]} ${classes["text-bounce"]} `}
          >
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
      {size === "small" && (
        <div
          key={key}
          className={`${className} ${classes.textflipBox}`}
        >
          <p
            key={key}
            className={`inline-flex ${classes["text-flip-small"]} ${classes["text-bounce"]} `}
          >
            {!displayText ? loadingMessage : displayText}
          </p>
        </div>
      )}
    </>
  );
};

export default TextFlip;
