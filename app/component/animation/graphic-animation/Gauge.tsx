"use client";

import { useState, useEffect } from "react";

interface Gauge {
  param: number;
  className?: string;
}

const Gauge: React.FC<Gauge> = ({ param, className }) => {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (number < param) {
      setTimeout(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 50);
    }
  }, [number]);
  return (
    <div className={`${className}`}>
      {number != 100 ? number : "Loading Complete"}
    </div>
  );
};

export default Gauge;
