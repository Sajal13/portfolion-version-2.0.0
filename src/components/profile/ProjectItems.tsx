"use client";

import React, { useState, useEffect } from "react";
import GridView from "./GridView";
import MasonryView from "./MasonryView";

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
    if (value){
      setDefaultView(value)
    }else{
      setDefaultView('grid');
    }
  };

  return (
    <section className="py-10 md:py-12 text-center px-5 md:px-6">
      <div className="flex justify-between items-center gap-7 md:gap-10 lg:gap-14 mb-4 md:mb-6 lg:mb-8">
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-lightSecondary dark:text-darkSecondary mb-5 md:mb-6">
            Projects
          </h4>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-7">
          <div>
            <label htmlFor="view" className="sr-only">
              View
            </label>
            <select
              name="view"
              id="view"
              className={`w-full block px-4 py-2 bg-white dark:bg-[#393E56]/50 border dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]`}
              onChange={handleViewChange}
            >
              <option value={""}>Select View</option>
              <option value="grid">Gridbox</option>
              <option value={"masonry"}>Masonry</option>
            </select>
          </div>
          <div>
            <label htmlFor="view" className="sr-only">
              View
            </label>
            <select
              name="view"
              id="view"
              className={`w-full block px-4 py-2 bg-white dark:bg-[#393E56]/50 border dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]`}
              onChange={handleCategoryChange}
            >
              <option value={""}>Select Category</option>
              <option value="bootstrap">Bootstrap</option>
              <option value={"tailwindcss"}>Tailwindcss</option>
              <option value="javascript">JavaScript</option>
              <option value={"typescript"}>TypeScript</option>
              <option value="reactjs">Reactjs</option>
              <option value={"nextjs"}>NextJs</option>
              <option value="svelte">Svelte</option>
              <option value={"vuejs"}>VueJs</option>
              <option value="vuetify">Vuetify</option>
              <option value={"pug"}>Pug</option>
            </select>
          </div>
        </div>
      </div>
      {defaultView === "grid" ? (
        <GridView filterKey={filterKey} />
      ) : (
        <MasonryView filterKey={filterKey} />
      )}
    </section>
  );
};

export default ProjectItems;
