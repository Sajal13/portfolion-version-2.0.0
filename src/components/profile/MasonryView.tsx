"use client";

import React, { useRef, useEffect, useState } from "react";
import Isotope from "isotope-layout";


import { portfolioItems } from "@/utils/constants";
import ProjectModal from "./ProjectModal";
import Card from "./Card";

type Props = {
  filterKey: string;
};

const MasonryView = ({ filterKey }: Props) => {
  const filterContainer = useRef<HTMLDivElement | null>(null);
  const isotope = useRef<Isotope | null>(null);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("isotope-layout").then((Isotope) => {
        isotope.current = new Isotope.default(filterContainer.current!, {
          itemSelector: ".filter-item",
          layoutMode: "packery",
          packery: {
            gutter: 10
          }
        });
      });
    }

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    const filteredKey = filterKey ? `.${filterKey}` : "*";
    if (isotope.current) {
      isotope.current.arrange({ filter: filteredKey });
    }
  }, [filterKey]);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      ref={filterContainer}
    >
      {portfolioItems.map((item, index) => (
        <div className={`filter-item ${item.category.join(" ")}`} key={item.id}>
          <Card item={item} clickHandler={() => handleCardClick(index)} />
        </div>
      ))}
      {modalOpen && (
        <ProjectModal
          projects={portfolioItems}
          selectedProjectIndex={selectedProjectIndex}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default MasonryView;
