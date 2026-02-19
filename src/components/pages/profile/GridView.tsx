"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 transition-transform duration-1000 ease-linear">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <Card item={item} clickHandler={() => handleCardClick(index)} />
          </motion.div>
        ))}
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
      </div>
    </AnimatePresence>
  );
};

export default GridView;
