"use client";

import { useState, Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CgClose, CgMenuRight } from "react-icons/cg";
import { navItems } from "@/utils/constant";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { PiSunFill } from "react-icons/pi";
import { AiFillMoon } from "react-icons/ai";
import { useTheme } from "next-themes";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean | null>(false);

  const { theme, setTheme } = useTheme();

  const handleMenuClose = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const resizer = window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    });
    return () => resizer;
  }, [isOpen]);

  return (
    <Fragment>
      <div className="w-full h-16 sticky top-0 left-0 z-50 bg-white/60 backdrop-blur-[6px]  md:hidden shadow-sm dark:shadow-lightSecondary">
        <div className=" container mx-auto flex items-center justify-between h-full">
          <h3 className="text-lightSecondary dark:text-darkSecondary text-xl md:text-2xl font-medium">
            Sajal Das.
          </h3>
          <button
            onClick={handleMenuClose}
            className="text-2xl lg:text-3xl w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-lightPrimary dark:bg-darkSecondary flex items-center justify-center transition-all duration-1000 ease-linear"
          >
            {isOpen ? (
              <CgClose className="text-white dark:text-darkPrimary" />
            ) : (
              <CgMenuRight className="text-white dark:text-darkPrimary" />
            )}
          </button>
        </div>
      </div>
      <header
        className={`${
          isOpen ? "left-1 flex flex-col justify-center" : "hidden"
        } md:left-2 md:flex top-20 my-auto   z-50 duration-1000 ease-in-out fixed w-fit md:flex-col md:justify-center h-[calc(100%-200px)] `}
      >
        <ul className="bg-black/30 dark:bg-white/30 px-1 py-3 backdrop-blur-[5px] rounded-[50px] md:bg-transparent dark:md:bg-transparent md:backdrop-blur-none">
          {navItems.map((item) => (
            <li key={item.id} className={`group relative  mb-4 last:mb-0 `}>
              <Link
                href={item.link}
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full  flex items-center justify-center hover:bg-tertiary dark:hover:bg-tertiary
                  ${
                    pathname === item.link
                      ? "bg-tertiary"
                      : "bg-lightPrimary dark:bg-darkSecondary "
                  }
                `}
              >
                <span
                  className={`text-xl lg:text-2xl text-white dark:text-darkPrimary `}
                >
                  {item.icon}
                </span>
              </Link>
              <div className="absolute hidden group-hover:block top-1/2 z-20 -translate-y-1/2 left-full translate-x-3 lg:translate-x-1 px-5 lg:px-3 py-2 border-primary group-hover:bg-tertiary  backdrop-blur-[5px] rounded-[50px] lg:bg-transparent dark:lg:bg-transparent lg:backdrop-blur-none">
                <p className="text-lg text-white">
                  {item.label}
                </p>
              </div>
            </li>
          ))}
          <li className="relative group">
            <button
              onClick={handleClick}
              className="text-2xl lg:text-3xl w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-lightPrimary dark:bg-darkSecondary flex items-center justify-center transition-all duration-200 ease-linear hover:bg-tertiary dark:hover:bg-tertiary text-white dark:text-darkPrimary"
            >
              {theme && theme === "dark" ? (
                <i>
                  <PiSunFill />
                </i>
              ) : (
                <i>
                  <AiFillMoon />
                </i>
              )}
            </button>
            <div className="absolute hidden group-hover:block top-1/2 z-20 -translate-y-1/2 left-full translate-x-2 lg:translate-x-1 px-5 lg:px-3 py-2 border-primary group-hover:bg-tertiary  backdrop-blur-[5px] rounded-[50px] lg:bg-transparent dark:lg:bg-transparent lg:backdrop-blur-none">
              <p className="text-lg text-white">
                Theme
              </p>
            </div>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
