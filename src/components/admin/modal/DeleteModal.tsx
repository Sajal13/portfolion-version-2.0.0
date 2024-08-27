"use client";

import React from "react";
import Modal from "../Modal";

type Props = {
  isDeleteModalOpen: boolean;
  handleDeleteButtonClick: () => void;
  handleCancelButtonClick: () => void;
  title: string;
  setDeleteItem: (value: React.SetStateAction<string | null>) => void;
  setDeleteModalOpen: (value: React.SetStateAction<boolean>) => void;
};

const DeleteModal = ({
  isDeleteModalOpen,
  setDeleteItem,
  setDeleteModalOpen,
  handleCancelButtonClick,
  handleDeleteButtonClick,
  title,
}: Props) => {
  return (
    <Modal
      onClose={() => {
        setDeleteItem(null);
        setDeleteModalOpen(false);
      }}
      headerColor="text-darkPrimary"
      headerText={"Delete Item"}
      modalType="delete"
      isOpen={isDeleteModalOpen}
    >
      <div className="py-8 px-4 text-center border-t border-t-black/5">
        <h5 className="text-xl md:text-[22px] lg:text-2xl text-darkPrimary pt-2 pb-8">
          Are you want to delete this {title}?
        </h5>
        <div className="flex justify-end items-center gap-2 md:gap-3 lg:gap-5 pt-4 border-t border-t-black/5">
          <button
            className="px-5 py-2 bg-danger hover:bg-dangerSecondary text-white text-lg rounded-lg font-semibold transition-all duration-300 ease-linear"
            onClick={handleDeleteButtonClick}
          >
            Delete
          </button>
          <button
            className="px-5 py-2 bg-gray-700 hover:bg-gray-900 text-white text-lg rounded-lg font-semibold transition-all duration-300 ease-linear"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
