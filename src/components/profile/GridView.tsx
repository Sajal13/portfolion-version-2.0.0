"use client";

import React, { useState } from "react";

import { portfolioItems } from "@/utils/constants";
import Card from "./Card";
import ProjectModal from "./ProjectModal";

type Props = {
  filterKey: string;
};
const GridView = ({ filterKey }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const filteredItems = filterKey
    ? portfolioItems.filter((item) =>
        item.category.some(
          (category) => category.toLowerCase() === filterKey.toLocaleLowerCase()
        )
      )
    : portfolioItems;

  const handleCardClick = (index: number) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProjectIndex(null);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 transition-transform duration-1000 ease-linear">
      {filteredItems.map((item, index) => (
        <Card
          key={item.id}
          item={item}
          clickHandler={() => handleCardClick(index)}
        />
      ))}
      {modalOpen && (
        <ProjectModal
          projects={filteredItems}
          selectedProjectIndex={selectedProjectIndex}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default GridView;
