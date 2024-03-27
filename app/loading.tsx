"use client";
import { useState, useEffect } from "react";
import classes from "./loading.module.css";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${classes["background-change"]}`}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className={`${classes.box} ${classes["glassy-background"]}`}
          animate={{
            scale: [1, 2, 2.5, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 4,
          }}
        />
      </motion.div>
      <div className="grid place-content-center absolute text-[20px]">
        Loading my page...
      </div>
    </div>
  );
};

export default Loading;
