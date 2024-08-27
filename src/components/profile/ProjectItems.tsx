"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GridView from "./GridView";
import MasonryView from "./MasonryView";
import { skillsOptions, type Option } from "@/utils/data/SelectOptions";

type Props = {};

const ProjectItems = (props: Props) => {
  const [filterKey, setFilterKey] = useState("");
  const [defaultView, setDefaultView] = useState("grid");

  const handleCategoryChange = (e: any) => {
    const { value } = e.target;
    setFilterKey(value);
  };

  const handleViewChange = (e: any) => {
    const { value } = e.target;
    if (value) {
      setDefaultView(value);
    } else {
      setDefaultView("grid");
    }
  };

  return (
    <AnimatePresence>
      <section className="py-8 md:py-10 lg:py-12 text-center px-5 md:px-6">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-7 md:gap-10 lg:gap-14 mb-4 md:mb-6 lg:mb-8">
          <div>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-lightSecondary dark:text-darkSecondary mb-2 sm:mb-0"
            >
              Projects
            </motion.h4>
          </div>
          <div className="flex sm:flex-wrap justify-center gap-3 md:gap-5 lg:gap-7">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="view" className="sr-only">
                View
              </label>
              <select
                name="view"
                id="view"
                className={`w-full block px-4 py-2   bg-white dark:bg-[#393E56]/50 border dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]`}
                onChange={handleViewChange}
              >
                <option value={""}>Select View</option>
                <option value="grid">Gridbox</option>
                <option value={"masonry"}>Masonry</option>
              </select>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="view" className="sr-only">
                View
              </label>
              <select
                name="view"
                id="view"
                className={`w-full capitalize block px-4 py-2 bg-white dark:bg-[#393E56]/50 border dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]`}
                onChange={handleCategoryChange}
              >
                {skillsOptions.map((option: Option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
        {defaultView === "grid" ? (
          <GridView filterKey={filterKey} />
        ) : (
          <MasonryView filterKey={filterKey} />
        )}
      </section>
    </AnimatePresence>
  );
};

export default ProjectItems;
