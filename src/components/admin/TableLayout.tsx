"use client";

import React, { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { ITEMS_PER_PAGE } from "@/utils/constants";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  searchQuery: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  tableHeader: string;
  handlePrevious: () => void;
  handleNext: () => void;
  currentPage: number;
  totalPages: number;
  length: number;
  headers: string[];
  handleAddButtonClick: () => void;
};

const TableLayout = ({
  children,
  searchQuery,
  handleSearchChange,
  tableHeader,
  handleNext,
  handlePrevious,
  currentPage,
  length,
  totalPages,
  headers,
  handleAddButtonClick,
}: Props) => {
  return (
    <>
      {/* Table Header Start */}
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="pt-2 mb-3 md:mb-4 lg:mb-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5"
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl text-lightSecondary dark:text-darkSecondary font-bold capitalize">
          {tableHeader}
        </h3>
        <div className="flex items-center justify-between md:justify-end gap-2 md:gap-3 lg:gap-4">
          <div className="relative z-0">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              name="search"
              className="w-[10rem] block py-2 px-4 text-lightSecondary dark:text-darkSecondary placeholder:text-lightSecondary dark:placeholder:text-darkSecondary border rounded-lg"
            />
            <div className="absolute top-1/2 inline-block right-2 bg-white/5 -translate-y-1/2 z-10">
              <CiSearch />
            </div>
          </div>
          <div>
            <button
              className={`w-full overflow-hidden bg-lightPrimary dark:bg-tertiary hover:bg-transparent 
            dark:hover:bg-transparent border border-lightPrimary dark:border-tertiary text-white rounded-lg 
            font-bold text-sm lg:text-base py-[0.65rem] px-[0.9rem] flex justify-center items-center transition-all 
            duration-200`}
              onClick={handleAddButtonClick}
            >
              Add New
            </button>
          </div>
        </div>
      </motion.div>
      {/* Table Header end */}

      {/* Table Goes Here */}

      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
        className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full"
      >
        <table className="w-full text-sm text-lightSecondary dark:text-darkSecondary">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-f]">
            <tr>
              {headers.map((header, index) => (
                <th scope="col" key={index} className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </motion.div>
      {/* Table Ends Here */}

      {/* Pagination Start */}
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1.3,
        }}
        className="flex justify-between mt-4"
      >
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-lightPrimary dark:bg-tertiary border border-lightPrimary dark:border-tertiary
             rounded-lg text-white transition-all duration-300 ease-linear ${
               currentPage === 1
                 ? "cursor-not-allowed opacity-50"
                 : "hover:bg-transparent dark:hover:bg-transparent dark:hover:text-tertiary"
             }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || length < ITEMS_PER_PAGE}
          className={`px-4 py-2 bg-lightPrimary dark:bg-tertiary border border-lightPrimary dark:border-tertiary
             rounded-lg text-white transition-all duration-300 ease-linear  ${
               currentPage === totalPages || length < ITEMS_PER_PAGE
                 ? "cursor-not-allowed opacity-50"
                 : "hover:bg-transparent dark:hover:bg-transparent dark:hover:text-tertiary"
             }`}
        >
          Next
        </button>
      </motion.div>
      {/* Pagination End */}
    </>
  );
};

export default TableLayout;
