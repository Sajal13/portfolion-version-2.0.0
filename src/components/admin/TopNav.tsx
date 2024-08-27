"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="hidden xl:flex justify-between items-center p-4 h-[4.5rem] bg-gray-800 text-white fixed top-0 right-0 w-screen xl:w-[calc(100vw-16rem)] z-50"
      >
        <div className="text-xl font-bold">My Dashboard</div>
        <button className="bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-linear px-4 py-2 rounded">
          Log Out
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopNav;
