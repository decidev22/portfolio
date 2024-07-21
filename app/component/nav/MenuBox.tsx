"use client";

import { useEffect, useState } from "react";
import classes from "./MenuBox.module.css";

const MenuBox = () => {
  useEffect(() => {
    const cubebox = Array.from(
      document.getElementsByClassName(
        `${classes.cube}`
      ) as HTMLCollectionOf<HTMLElement>
    );
    const handleMouseMove = (event: MouseEvent) => {
      const rotationValue = 270;
      let mouseX = 0;
      let mouseY = 0;
      mouseX = event.clientX;
      mouseY = event.clientY;
      let rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
      let rotateY = (mouseX / window.innerHeight - 0.5) * rotationValue;
      cubebox.forEach((box) => {
        box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`${classes.container} `}>
      <div className={`${classes[`cube-container`]}`}>
        <div className={`${classes[`cube`]}`}>
          <div
            className={`${classes[`cube-face`]} ${
              classes[`front`]
            }  border-white border-2 rounded-xl`}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <span className="w-[15px] grid place-items-center">M</span>
              <span className="w-[15px] grid place-items-center">E</span>
              <span className="w-[15px] grid place-items-center">N</span>
              <span className="w-[15px] grid place-items-center">U</span>
            </div>
          </div>
          <div className={`${classes[`cube-face`]} ${classes[`back`]}`}>
            HOME
          </div>
          <div className={`${classes[`cube-face`]} ${classes[`left`]}`}>
            PROJECTS
          </div>
          <div className={`${classes[`cube-face`]} ${classes[`right`]}`}>
            CONTACT
          </div>
          <div className={`${classes[`cube-face`]} ${classes[`top`]}`}>
            ABOUT
          </div>
          <div className={`${classes[`cube-face`]} ${classes[`bottom`]}`}>
            SHOUTOUTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBox;
