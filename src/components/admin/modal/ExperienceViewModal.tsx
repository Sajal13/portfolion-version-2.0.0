"use client";

import React from "react";
import Modal from "../Modal";
import { type ExperienceList } from "@/utils/data/Experience";

type Props = {
  viewItem: ExperienceList;
  handleViewModalClose: () => void;
  isViewModalOpen: boolean;
};

const ExperienceViewModal = ({
  viewItem,
  handleViewModalClose,
  isViewModalOpen,
}: Props) => {
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
            <h3 className="text-xl font-medium text-darkPrimary">
              {viewItem.title}
            </h3>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Type
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary">
              Type: {viewItem.type} <br />
              Category: {viewItem.type === "1" ? "(Education)" : "(Experience)"}
            </h3>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Start Date
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary">
              {viewItem.start}
            </h3>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              End Date
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary">
              {viewItem.end}
            </h3>
          </div>
          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-darkPrimary mb-2">
              Description
            </h5>
            <h3 className="text-xl font-medium text-darkPrimary">
              {viewItem.description}
            </h3>
          </div>
        </div>
      </Modal>
      {/* View Modal end */}
    </>
  );
};

export default ExperienceViewModal;
