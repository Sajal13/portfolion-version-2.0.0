"use client";

import React from "react";
import { FaPen } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

type Props = {
  editButtonClickHandler: () => void;
  deleteButtonClickHandler: () => void;
  view?: boolean;
  viewButtonClickHandler?: () => void;
};

const ActionButton = ({
  editButtonClickHandler,
  deleteButtonClickHandler,
  view,
  viewButtonClickHandler,
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {view && (
        <div className="relative group">
          <button
            className="p-2 bg-lightPrimary hover:bg-darkPrimary text-white rounded-lg "
            onClick={viewButtonClickHandler}
          >
            <span>
              <FaEye />
            </span>
          </button>
          <div className="absolute bottom-full left-0 mb-2  px-2 py-1 bg-darkPrimary text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View
            <div className="absolute bottom-[-4px] left-2 w-2 h-2 bg-darkPrimary rotate-45"></div>
          </div>
        </div>
      )}
      <div className="relative group">
        <button
          className="p-2 bg-tertiary hover:bg-success text-white rounded-lg "
          onClick={editButtonClickHandler}
        >
          <span>
            <FaPen />
          </span>
        </button>
        <div className="absolute bottom-full left-0 mb-2  px-2 py-1 bg-success text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Edit
          <div className="absolute bottom-[-4px] left-2 w-2 h-2 bg-success rotate-45"></div>
        </div>
      </div>
      <div className="relative group">
        <button
          className="p-2 bg-red-700 hover:bg-red-800 text-white rounded-lg "
          onClick={deleteButtonClickHandler}
        >
          <span>
            <IoTrashBin />
          </span>
        </button>
        <div className="absolute bottom-full left-0 mb-2  px-2 py-1 bg-red-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Delete
          <div className="absolute bottom-[-4px] left-2 w-2 h-2 bg-red-800 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default ActionButton;
