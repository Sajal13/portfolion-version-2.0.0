"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminSideNavItems } from "@/utils/constants";

type Props = {};

const NavItem = (props: Props) => {
  const pathName = usePathname();
  return (
    <Fragment>
      <div className="mb-3 md:mb-6 lg:mb-9 p-4 flex justify-center">
        <div className="w-28 h-28 md:w-36 md:h-36  rounded-full bg-white flex justify-center items-center">
          <p className="text-gray-700 font-bold text-3xl md:text-4xl lg:text-5xl">
            SD
          </p>
        </div>
      </div>
      <nav className="flex flex-col justify-center p-4 md:px-7 lg:px-12 space-y-4">
        {adminSideNavItems.map((navItem: AdminSideNavItem) => (
          <Link
            href={navItem.link}
            className={`hover:bg-gray-600 md:text-lg lg:text-xl  p-2 rounded capitalize tracking-wide ${
              pathName === navItem.link ? "text-success" : ""
            }`}
            key={navItem.id}
          >
            {navItem.label}
          </Link>
        ))}
        <button className="md:hidden flex items-center justify-center w-full py-2 bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-linear rounded capitalize">
          Log out
        </button>
      </nav>
    </Fragment>
  );
};

export default NavItem;
