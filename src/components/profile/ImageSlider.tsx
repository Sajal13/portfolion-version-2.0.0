"use client";

import React, { useState, useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

type Props = {
  imageItems: Array<Images>;
};

const ImageSlider = ({ imageItems }: Props) => {
  const imagePrevRef = useRef<HTMLButtonElement | null>(null);
  const imageNextRef = useRef(null);
  const imageSwiperRef = useRef<SwiperType | null>(null);

  const nextButtonClicked = () => {
    if (imageSwiperRef.current) {
      imageSwiperRef.current.slideNext();
    }
  };
  const prevButtonClicked = () => {
    if (imageSwiperRef.current) {
      imageSwiperRef.current?.slidePrev();
    }
  };

  return (
    <div className="">
      <div className="relative rounded-[10px] overflow-hidden shadow-lg">
        <Swiper
          onBeforeInit={(swiperSlider) =>
            (imageSwiperRef.current = swiperSlider)
          }
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          navigation={{
            nextEl: imageNextRef.current,
            prevEl: imagePrevRef.current,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false
          }}
          loop={true}
          pagination={true}
        >
          {imageItems.map((image) => (
            <SwiperSlide key={image.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.imageSrc} alt="" className="min-h-[25rem] h-full object-fit"/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10">
            <button
              className="text-xl text-lightPrimary dark:text-tertiary font-bold shadow-lg bg-white p-2 flex items-center justify-center rounded-full"
              type="button"
              onClick={prevButtonClicked}
              ref={imagePrevRef}
            >
              <span>
                <FaChevronLeft />
              </span>
            </button>
          </div>
          <div className="absolute right-1 top-1/2 -translate-y-1/2 z-10">
            <button
              className="text-xl text-lightPrimary dark:text-tertiary font-bold shadow-lg bg-white p-2 flex items-center justify-center rounded-full"
              type="button"
              onClick={nextButtonClicked}
              ref={imageNextRef}
            >
              <span>
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
