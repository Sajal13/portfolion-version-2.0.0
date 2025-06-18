"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import Link from "next/link";
import useLightbox from "@/utils/useLightboxProps";
import Lightbox from "../Lightbox";

type Props = {
  viewItem: PortfolioItem;
  handleViewModalClose: () => void;
  isViewModalOpen: boolean;
};

const PortfolioViewModal = ({
  viewItem,
  handleViewModalClose,
  isViewModalOpen,
}: Props) => {
  const [items] = useState(viewItem.images);
  const [index, setIndex] = useState(1);

  const { lightboxProps, openLightbox } = useLightbox(
    items.map((item: Images) => item.imageSrc)
  );

  const handleItemClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
    openLightbox(clickedIndex);
  };

  return (
    <>
      {/* View Modal start */}
      <Modal
        onClose={handleViewModalClose}
        headerColor="text-lightPrimary dark:text-tertiary"
        headerText={"View Experience"}
        modalType="medium"
        isOpen={isViewModalOpen}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12 px-6 pb-8">
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Title
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary break-all">
              {viewItem.title}
            </h3>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Project Title
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary break-all">
              {viewItem.projectTitle}
            </h3>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Thumbnail
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary break-all">
              {viewItem.thumbnail}
            </h3>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Masonry Image
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary break-all">
              {viewItem.masonryImage}
            </h3>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Images
            </h5>
            <div className="text-xl font-medium text-darkPrimary grid grid-cols-3 gap-3 md:gap-4 px-2 bg-black/10 rounded-lg py-4">
              {viewItem.images.map((image: Images, idx) => (
                <div key={image.id} onClick={() => handleItemClick(idx + 1)}>
                  <img
                    src={image.imageSrc}
                    alt=""
                    className="object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div>
              <Lightbox {...lightboxProps} key={index} />
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Description
            </h5>
            <ul className="text-xl font-medium text-darkPrimary space-y-3 md:space-y-4 px-2 list-inside list-decimal">
              {viewItem.description.map((desc: Description) => (
                <li
                  className="text-xl font-medium text-darkPrimary"
                  key={desc.id}
                >
                  {desc.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Languages
            </h5>
            <ul className="text-xl flex flex-wrap gap-3 md:gap-4 font-medium text-darkPrimary px-2 list-decimal list-inside">
              {viewItem.language.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Project Link
            </h5>
            <Link
              href={viewItem.link}
              className="text-xl font-medium text-darkPrimary hover:underline"
            >
              {viewItem.link}
            </Link>
          </div>
        </div>
      </Modal>
      {/* View Modal end */}
    </>
  );
};

export default PortfolioViewModal;
