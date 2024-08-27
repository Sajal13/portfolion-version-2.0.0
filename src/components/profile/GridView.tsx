"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { portfolioItems } from "@/utils/data/Portfolio";

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
        item.language.some(
          (item) => item.toLowerCase() === filterKey.toLocaleLowerCase()
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
      {filteredItems.length > 0 ? (
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
      ) : (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: 100,
            opacity: 0,
            transition: {
              delay: 0.2,
              duration: 0.5,
            },
          }}
          transition={{
            duration: 0.5,
          }}
          className=""
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-lightSecondary dark:text-darkSecondary capitalize py-10 md:py-14 lg:py-20">
            No Project To Show related to this language.
          </h3>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GridView;
