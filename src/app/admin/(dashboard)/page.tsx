"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Card from "@/components/admin/Card";
import { BsTools } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";
import { ImBlogger } from "react-icons/im";
import { BiSolidMessage } from "react-icons/bi";

import { tableData } from "@/utils/data/Skills";

type Props = {};

const Page = (props: Props) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const updateClock = () => {
      const today = new Date();
      const day = today.getDate(); // Get the day of the month (1-31)
      const month = monthList[today.getMonth()]; // Get the current month name
      const fullYear = today.getFullYear(); // Get the full year

      let hour = today.getHours(); // Get the current hour
      const minutes = today.getMinutes(); // Get the current minutes
      const seconds = today.getSeconds(); // Get the current seconds
      const ampm = hour >= 12 ? "PM" : "AM"; // Determine AM or PM

      // Convert to 12-hour format
      hour = hour % 12;
      hour = hour ? hour : 12; // '0' should be '12'

      // Pad minutes and seconds with leading zeros if needed
      const minutesString = minutes < 10 ? `0${minutes}` : minutes;
      const secondsString = seconds < 10 ? `0${seconds}` : seconds;

      // Format the time string
      const timeString = `${hour}:${minutesString}:${secondsString} ${ampm}`;
      setTime(timeString);

      // Format the date string
      const dateString = `${month} ${day}, ${fullYear}`;
      setDate(dateString);
    };

    // Update the clock immediately
    updateClock();

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="px-2">
      <div className="flex justify-end text-end mb-6 md:mb-9 lg:mb-12">
        <div className=" p-2 md:py-5 lg:py-6 rounded-lg">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-[1.75rem] lg:text-3xl text-darkSecondary mb-2 md:mb-2.5 lg:mb-3 font-semibold capitalize"
          >
            {" "}
            Welcome to the admin panel, Boss!
          </motion.h2>
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm md:text-base lg:text-lg text-darkSecondary font-medium mb-1"
          >
            Today is {date}
          </motion.h6>
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-sm md:text-base lg:text-lg text-darkSecondary font-medium mb-1"
          >
            It&apos;s {time}
          </motion.h6>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 ">
        <Card
          url="/admin/skills"
          length={tableData.length}
          title="Skills"
          bgColor="bg-[#DD1C5D]"
          icons={<BsTools />}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
        />
        <Card
          url="/admin/experience"
          length={4}
          title="Experiences"
          bgColor="bg-tertiary"
          icons={<MdOutlineWork />}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
        />
        <Card
          url="/admin/portfolio"
          length={4}
          title="Portfolios"
          bgColor="bg-success"
          icons={<TbBriefcase />}
          transition={{
            duration: 0.3,
            delay: 1.1,
          }}
        />
        <Card
          url="/admin/blogs"
          length={4}
          title="Blogs"
          bgColor="bg-[#F29000]"
          icons={<ImBlogger />}
          transition={{
            duration: 0.3,
            delay: 1.4,
          }}
        />
        <Card
          url="/admin/messages"
          length={0}
          title="Messages"
          bgColor="bg-[#5A72A0]"
          icons={<BiSolidMessage />}
          transition={{
            duration: 0.3,
            delay: 1.4,
          }}
        />
      </div>
    </section>
  );
};

export default Page;
