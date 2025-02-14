// import Image from "next/image";
// import classes from "./SydneyOperaHouse.module.css";

// const SydneyOperaHouse = ({ className = "" }: { className?: string }) => {
//   return <Image src={"/SydneyOperaHouse.svg"} alt="Sydney Opera House" width={120} height={50} />;
// };

// export default SydneyOperaHouse;

import { useEffect } from "react";
import classes from "./SydneyOperaHouse.module.css";

const SydneyOperaHouse = ({ className = "" }: { className?: string }) => {
  useEffect(() => {
    const paths = document.querySelectorAll("path");
    paths.forEach((path, index) => {
      path.style.animationDelay = `${index * 0.5}s`; // Delay each path drawing
    });
  }, []);

  return (
    <div className={`${classes.sydneyOperaHouse} ${className}`}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <g>
          <path
            d="M1230 2299 c0 -13 20 -103 45 -198 24 -96 42 -178 39 -182 -2 -4 3 -10 12 -13 8 -3 13 -2 11 2 -8 12 -98 394 -94 398 7 7 111 -24 172 -51 33 -15 56 -22 50 -16 -14 14 -161 72 -201 78 -31 5 -34 3 -34 -18z"
            className={classes.strokePath}
          />
          <path
            d="M1302 2264 c57 -62 204 -296 274 -439 116 -237 204 -540 191 -658 -4 -29 -4 -45 0 -37 3 8..."
            className={classes.strokePath}
          />
        </g>
      </svg>
    </div>
  );
};

export default SydneyOperaHouse;
