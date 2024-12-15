"use client";

import React, { useState } from "react";
import { ITEMS_PER_PAGE } from "@/utils/constants";

interface Props<T extends Record<string, any>> {
  tableItems: T[];
  sortBy: keyof T;
}

interface ReturnType<T> {
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  startIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  paginatedData: T[];
}

export function TableContextProvider<T extends Record<string, any>>({
  tableItems,
  sortBy,
}: Props<T>): ReturnType<T> {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredData = tableItems.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const paginatedData = filteredData
    .slice(startIndex, startIndex + ITEMS_PER_PAGE)
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue == null || bValue == null) return 0;

      const aParsed = Number(aValue);
      const bParsed = Number(bValue);

      if (!isNaN(aParsed) && !isNaN(bParsed)) {
        return aParsed - bParsed;
      } else {
        return String(aValue).localeCompare(String(bValue));
      }
    });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return {
    searchQuery,
    handleSearchChange,
    currentPage,
    totalPages,
    startIndex,
    handleNext,
    handlePrevious,
    paginatedData,
  };
}
