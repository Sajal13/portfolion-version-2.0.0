"use client";

import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { CgClose, CgMenuRight } from "react-icons/cg";
import NavItem from "./NavItem";

type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const [mounted, setMounted] = useState(false);
  const handleClickOnIcon = () => {
    if (window.innerWidth < 992) {
      setIsOpen(false);
    }
  };
  const handleMenuClose = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768); 
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Fragment>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.2
        }}
        className="md:hidden z-50 bg-gray-600 backdrop-blur-[6px] flex justify-between items-center p-4  text-white fixed top-0 right-0 w-screen md:w-[calc(100vw-12rem)] lg:w-[calc(100vw-16rem)]"
      >
        <div className=" container mx-auto flex items-center justify-between h-full">
          <Link href={"/"} className="text-xl md:text-2xl font-medium">
            Sajal Das.
          </Link>
          <button
            onClick={handleMenuClose}
            className="text-2xl lg:text-3xl w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-gray-700 flex items-center justify-center transition-all duration-1000 ease-linear overflow-hidden"
          >
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  <CgClose />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  <CgMenuRight />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>
      {isMediumScreen ? (
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: -100,
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          transition={{
            duration: 0.5,
          }}
          className={`md:w-48 lg:w-64 h-screen bg-gray-700 text-white fixed md:top-0 left-0 pt-8 z-20 overflow-hidden`}
        >
          <NavItem />
        </motion.div>
      ) : (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: isOpen ? 0 : -100,
                opacity: 1,
              }}
              exit={{
                x: -100,
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              className={`w-56 h-screen bg-gray-700 text-white fixed top-[calc(10%-1rem)] left-0 pt-8 z-20 overflow-hidden`}
            >
              <NavItem />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Fragment>
  );
};

export default Sidebar;
