import { useState, useEffect } from "react";
import classes from "./TextFlip.module.css";
interface TextFlipProp {
  text: string[];
  className?: string;
}

const TextFlip: React.FC<TextFlipProp> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [key, setKey] = useState(0);
  const randomIndex = () => Math.floor(Math.random() * text.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text[randomIndex()]);
      setKey((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(intervalId);
  }, [text]);

  return (
    <p key={key} className={`${classes["text-bounce"]} ${className}`}>
      {!displayText ? "Loading my interests..." : displayText}
    </p>
  );
};

export default TextFlip;
