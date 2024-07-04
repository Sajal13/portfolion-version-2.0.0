import Link from "next/link";
import React from "react";

import { GiReturnArrow } from "react-icons/gi";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="min-h-screen flex justify-center items-center px-5 md:px-7 lg:px-9">
      <div className="">
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/icons/404-error.png"
            alt=""
            className="w-1/3 md:w-1/2 hidden dark:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/icons/404-error_dark.png"
            alt=""
            className="w-1/3 md:w-1/2 dark:hidden"
          />
        </div>
        <div className="mt-8 md:mt-10 lg:mt-12 text-center italic">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-lightSecondary dark:text-darkSecondary mb-3 md:mb-4 lg:mb-5">
            Not Found! <span className="not-italic">🫥</span>
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl test-lightSecondary dark:text-darkSecondary mb-1.5 mb:mb-2 lg:mb-2.5">
            The Page you are looking for is not available
          </p>
          <Link href={'/'} className="flex justify-center items-center gap-2.5 hover:underline">
            <span>Go to Home page </span>
            <span className="-rotate-[150deg] text-lightSecondary dark:text-darkSecondary text-xl scale-x-[-1]"><GiReturnArrow /></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
