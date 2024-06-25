"use client";

import React, { useRef, useEffect, useState, Fragment } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { portfolioItems } from "@/utils/constants";
import ProjectModal from "./ProjectModal";
import MasonryCard from "./MasonryCard";

type Props = {
  filterKey: string;
};

const MasonryView = ({ filterKey }: Props) => {
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

  useEffect(() => {}, []);

  useEffect(() => {}, [filterKey]);

  return (
    <Fragment>
      <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 768: 2, 1024: 3 }}>
        <Masonry style={{ gap: 15 }}>
          {filteredItems.map((item, index) => (
            <div key={item.id} className={`mt-4`}>
              <MasonryCard
                item={item}
                clickHandler={() => handleCardClick(index)}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {modalOpen && (
        <ProjectModal
          projects={filteredItems}
          selectedProjectIndex={selectedProjectIndex}
          onClose={handleModalClose}
        />
      )}
    </Fragment>
  );
};

export default MasonryView;
