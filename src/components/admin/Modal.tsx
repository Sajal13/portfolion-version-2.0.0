"use client";

import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import classNames from "classNames";
import { AnimatePresence, motion } from "framer-motion";

type ModalType = "delete" | "simple";
type Props = {
  onClose: () => void;
  children: React.ReactNode;
  classes?: string;
  headerColor: string;
  headerText: string;
  modalType: ModalType;
  isOpen: boolean;
};

const Modal = ({
  onClose,
  children,
  classes,
  headerColor,
  headerText,
  modalType,
  isOpen,
}: Props) => {
  const modalClass = twMerge(
    "relative",
    classes,
    classNames({
      "bg-white rounded-lg min-w-[20rem] md:min-w-[26rem] lg:min-w-[35rem]":
        modalType === "delete",
      "bg-white rounded-lg min-w-[20rem] md:min-w-[35rem] lg:min-w-[calc(100vw-100px)]":
        modalType === "simple",
    })
  );

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <div className="overflow-y-scroll scrollbar-custom overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 shadow-lg  bg-black/50 backdrop-blur-[3px] duration-300 ease-in-out">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-4 w-fit mx-auto "
            >
              {/* Modal content */}
              <div className={`relative ${modalClass}`}>
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5  rounded-t ">
                  <h3
                    className={`text-lg md:text-xl lg:text-2xl font-medium ${headerColor}`}
                  >
                    {headerText}
                  </h3>
                  <button
                    type="button"
                    className={`end-2.5 rounded-lg text-3xl ms-auto inline-flex justify-center items-center
                transition-colors duration-150 ease-linear ${
                  modalType === "delete"
                    ? "text-darkPrimary hover:text-danger"
                    : "text-tertiary hover:text-lightSecondary"
                }`}
                    onClick={onClose}
                  >
                    <IoIosCloseCircle />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body  */}
                {children}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Modal;
