"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { IoIosClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImageSlider from "./ImageSlider";

type Props = {
  projects: Array<PortfolioItem>;
  selectedProjectIndex: number | null;
  onClose: () => void;
};

const ProjectModal = ({ projects, selectedProjectIndex, onClose }: Props) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const projectPrevNav = useRef<HTMLButtonElement | null>(null);
  const projectNextRef = useRef(null);
  const projectSwiperRef = useRef<SwiperType | null>(null);

  const nextButtonClicked = () => {
    if (projectSwiperRef.current) {
      projectSwiperRef.current.slideNext();
    }
  };
  const prevButtonClicked = () => {
    if (projectSwiperRef.current) {
      projectSwiperRef.current?.slidePrev();
    }
  };

  useEffect(() => {
    if (swiper && selectedProjectIndex !== null) {
      swiper.slideTo(selectedProjectIndex, 0);
    }
  }, [swiper, selectedProjectIndex]);

  return (
    <div
      id="project-modal"
      className="block overflow-y-scroll scrollbar-custom overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0  bg-white/90 dark:bg-black/90 backdrop-blur-[10px] duration-300 ease-in-out"
    >
      <div className="relative w-full max-w-[90vw] h-full mx-auto ">
        {/* Modal content */}
        <div className={`relative h-full mx-2 lg:mx-6 my-4  rounded-[10px]`}>
          {/* Modal header */}
          <div className="flex items-center justify-between px-2 pb-5 md:p-5  rounded-t ">
            <button
              type="button"
              className="end-2 rounded-lg text-5xl md:text-6xl ms-auto inline-flex justify-center items-center text-lightPrimary dark:text-tertiary"
              onClick={onClose}
            >
              <IoIosClose />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="px-4  md:p-4">
            <Swiper
              onSwiper={setSwiper}
              onBeforeInit={(swiperSlider) =>
                (projectSwiperRef.current = swiperSlider)
              }
              grabCursor={true}
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
              navigation={{
                nextEl: projectNextRef.current,
                prevEl: projectPrevNav.current,
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="md:px-2">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 text-start mb-5 md:mb-7 lg:mb-9">
                    <ImageSlider imageItems={project.images} />
                    <div>
                      <h2 className="text-lightSecondary dark:text-darkSecondary font-bold text-2xl md:text-[1.85rem] lg:text-[2rem] md:leading-[1.5] mb-4 md:mb-5 lg:mb-6">
                        {project.projectTitle}
                      </h2>
                      <div className="mb-5 md:mb-6 lg:mb-7 grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-[#495057]/90 dark:text-[#f2f2f2]/90 text-lg md:text-xl lg:text-2xl mb-1.5">
                            Project Title
                          </h4>
                          <p className="text-lightSecondary dark:text-darkSecondary md:text-lg lg:text-xl font-semibold">
                            {project.title}
                          </p>
                        </div>
                        <div className="">
                          <h4 className="text-[#495057]/90 dark:text-[#f2f2f2]/90 text-lg md:text-xl lg:text-2xl mb-1">
                            Project Link
                          </h4>
                          <Link
                            href={project.link}
                            target="_blank"
                            className="text-lightPrimary dark:text-tertiary hover:underline py-2 font-semibold"
                          >
                            {project.title}
                          </Link>
                        </div>
                      </div>
                      <div className="mb-4 md:mb-5 lg:mb-6">
                        <h4 className="text-[#495057]/90 dark:text-[#f2f2f2]/90 text-lg md:text-xl lg:text-2xl mb-2">
                          Languages
                        </h4>
                        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
                          {project.language.map((item, index) => (
                            <div
                              className=" bg-lightPrimary dark:bg-tertiary rounded-[1.25rem] px-4 py-2 text-lightSecondary dark:text-darkSecondary "
                              key={index}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-start md:pb-3">
                    <h4 className="text-[#495057]/90 dark:text-[#f2f2f2]/90 text-lg font-medium md:text-xl lg:text-2xl lg:leading-[1.5] mb-2 md:mb-2.5 lg:mb-3">
                      Description
                    </h4>
                    <ul className="px-3 list-inside list-disc">
                      {project.description.map((decriptionItem) => (
                        <li
                          key={decriptionItem.id}
                          className="text-lightSecondary dark:text-darkSecondary md:text-lg lg:text-xl py-1.5"
                        >
                          {decriptionItem.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="absolute -left-3 md:-left-5 lg:-left-10 top-1/2 -translate-y-1/2 z-10">
          <button
            className="text-2xl lg:text-4xl text-lightPrimary dark:text-tertiary font-bold p-2 flex items-center justify-center rounded-full"
            type="button"
            onClick={prevButtonClicked}
            ref={projectPrevNav}
          >
            <span>
              <FaChevronLeft />
            </span>
          </button>
        </div>
        <div className="absolute -right-3 md:-right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-10">
          <button
            className="text-2xl lg:text-4xl text-lightPrimary dark:text-tertiary font-bold p-2 flex items-center justify-center rounded-full"
            type="button"
            onClick={nextButtonClicked}
            ref={projectNextRef}
          >
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
