"use client";

import React, { useEffect, useState, Fragment } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 375: 1, 768: 2, 1024: 3 }}
        >
          <Masonry style={{ gap: 15 }}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.2, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`mt-4`}
              >
                <MasonryCard
                  item={item}
                  clickHandler={() => handleCardClick(index)}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {modalOpen && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 bottom-0 left-0 right-0 z-50"
          >
            <ProjectModal
              projects={filteredItems}
              selectedProjectIndex={selectedProjectIndex}
              onClose={handleModalClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MasonryView;
