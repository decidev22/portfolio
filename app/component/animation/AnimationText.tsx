"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  hoverColor?: string;
}

// Takes two arguments, text and className prop, text: new line char with \n, className for styles
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  hoverColor = "",
}) => {
  const [displayText, setDisplayText] = useState<React.ReactNode[]>(
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const delay = setTimeout(() => {
        if (text[index] + text[index + 1] === "\\n") {
          setDisplayText((previous) => [
            ...previous,
            <br key={index} />,
          ]);
          setIndex((currentIndex) => currentIndex + 2);
        } else if (text[index] === " ") {
          setDisplayText((previous) => [...previous, " "]);
          setIndex((currentIndex) => currentIndex + 1);
        } else {
          setDisplayText((previous) => [
            ...previous,
            <motion.div
              whileHover={{ scale: 1.3, color: hoverColor }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className={`inline-block`}
              key={index}
            >
              {text[index]}
            </motion.div>,
          ]);
          setIndex((currentIndex) => currentIndex + 1);
        }
      }, 90);
      return () => clearTimeout(delay);
    }
  }, [index, text]);
  return <div className={`${className}`}>{displayText}</div>;
};

export default AnimatedText;
