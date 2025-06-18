"use client";

import TextInput from "@/components/admin/inputs/TextInput";
import React, { Fragment, MouseEventHandler, useState } from "react";
import { portfolioItems } from "@/utils/data/Portfolio";
import ActionButton from "@/components/admin/ActionButton";
import TableLayout from "@/components/admin/TableLayout";
import { TableContextProvider } from "@/utils/useTableProvider";
import Modal from "@/components/admin/Modal";

import { portfolioSchema } from "@/utils/schema/Schema";
import { type Option, skillsOptions } from "@/utils/data/SelectOptions";

import { useFormik } from "formik";

import Button from "@/components/admin/Button";
import DeleteModal from "@/components/admin/modal/DeleteModal";
import Textarea from "@/components/admin/inputs/Textarea";
import PortfolioViewModal from "@/components/admin/modal/PortfolioViewModal";
import FileInput from "@/components/admin/inputs/FileInput";
import ReactSelectInput from "@/components/admin/inputs/ReactSelectInput";
import { v4 as uuid } from "uuid";
import { IoAdd, IoTrashBin } from "react-icons/io5";

interface ThumbImage {
  id: string;
  imageSrc: string;
  file: File;
}

type Props = {};

const Page = (props: Props) => {
  const {
    searchQuery,
    handleSearchChange,
    currentPage,
    totalPages,
    startIndex,
    handleNext,
    handlePrevious,
    paginatedData,
  } = TableContextProvider<PortfolioItem>({
    tableItems: portfolioItems,
    sortBy: "title",
  });

  // const responsiveMaxLength = useResponsiveMaxLength(100);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [deleteItem, setDeleteItem] = useState<string | null>(null);
  const [viewItem, setViewItem] = useState<PortfolioItem | null>(null);
  const [descriptions, setDescriptions] = useState<string>("");
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      projectTitle: "",
      thumbnail: null,
      masonryImage: null,
      images: [] as unknown as ThumbImage[],
      language: [] as unknown as string,
      link: "",
      description: [],
    },
    onSubmit: (value) => {
      console.log(value);
      resetForm();
    },
    validationSchema: portfolioSchema,
  });

  const truncateText = ({
    text,
    maxLength = 100,
  }: {
    text: string;
    maxLength?: number;
  }): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const handleClose = () => {
    setModalOpen(false);
    resetForm();
  };

  const handleViewButtonClick = (item: PortfolioItem) => {
    setViewItem(item);
    setViewModalOpen(true);
  };

  const handleViewModalClose = () => {
    setViewModalOpen(false);
    setViewItem(null);
  };

  const addButtonClickHandler = () => {
    setModalOpen(true);
  };
  const editHandler = (item: PortfolioItem) => {
    setFieldValue("title", item.title);
    setFieldValue("projectTitle", item.projectTitle);
    setFieldValue("link", item.link);
    setFieldValue("language", item.language);
    setFieldValue("thumbnail", item.thumbnail);
    setFieldValue("masonryImage", item.masonryImage);
    setFieldValue("images", item.images);
    setFieldValue("description", item.description);
    setEditItem(item);
    setModalOpen(true);
  };

  const deleteHandler = (id: string) => {
    setDeleteItem(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteButtonClick = () => {
    console.log(deleteItem);
  };

  const handleCancelButtonClick = () => {
    setDeleteItem(null);
    setDeleteModalOpen(false);
  };

  const handleSingleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { files } = e.target;
    if (files) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      const fileObject = imageUrl;
      setFieldValue(`${fieldName}`, fileObject);
    }
  };

  const handleMultipleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const fileArray: ThumbImage[] = Array.from(files).map((file) => ({
        id: uuid(),
        imageSrc: URL.createObjectURL(file),
        file,
      }));
      setFieldValue("images", fileArray);
    }
  };

  const handleFileDelete = (id: string) => {
    const fileArray = values.images.filter((image) => image.id !== id);
    setFieldValue("images", fileArray);
  };

  const handleDescriptionAddButton = () => {
    const newDescription = [
      ...values.description,
      { id: uuid(), text: descriptions },
    ] as Array<Description>;
    setFieldValue("description", newDescription);
    setDescriptions("");
  };

  const editDescriptionHandler = (id: string) => {
    const editableDescription: Description[] = values.description.filter(
      (desc: Description) => desc.id === id
    );
    setDescriptions(editableDescription[0]?.text);

    const newDescription = values.description.filter(
      (desc: Description) => desc.id !== id
    );
    setFieldValue("description", newDescription);
  };

  const deleteDescriptionHandler = (id: string) => {
    const newDescription = values.description.filter(
      (desc: Description) => desc.id !== id
    );
    setFieldValue("description", newDescription);
  };
  return (
    <section className="px-2 w-full overflow-hidden">
      <TableLayout
        tableHeader="Portfolios"
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
        length={paginatedData.length}
        headers={["#", "Title", "Project Title", "Languages", "Link", "Action"]}
        handleAddButtonClick={addButtonClickHandler}
      >
        {paginatedData.map((portfolio, index) => (
          <tr
            key={portfolio.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 capitalize text-center"
          >
            <td className="px-6 py-4">{startIndex + index + 1}</td>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {truncateText({
                text: portfolio.title,
                maxLength: 10,
              })}
            </th>
            <td className="px-6 py-4">
              {truncateText({
                text: portfolio.projectTitle,
                maxLength: 10,
              })}
            </td>
            <td className="px-6 py-4">
              <ul className="px-2 space-y-2 capitalize">
                {portfolio.language.map((item, index) => (
                  <li key={index}>
                    {truncateText({
                      text: item,
                      maxLength: 15,
                    })}
                  </li>
                ))}
              </ul>
            </td>
            <td className="px-6 py-4 normal-case">
              {truncateText({
                text: portfolio.link,
                maxLength: 30,
              })}
            </td>
            <td className="px-6 py-4">
              <ActionButton
                editButtonClickHandler={() => editHandler(portfolio)}
                deleteButtonClickHandler={() => deleteHandler(portfolio.id)}
                view={true}
                viewButtonClickHandler={() => handleViewButtonClick(portfolio)}
              />
            </td>
          </tr>
        ))}
      </TableLayout>

      {viewItem && (
        <PortfolioViewModal
          isViewModalOpen={isViewModalOpen}
          handleViewModalClose={handleViewModalClose}
          viewItem={viewItem}
        />
      )}

      {/* Add and Edit Modal start */}
      <Modal
        onClose={handleClose}
        headerColor="text-lightPrimary dark:text-tertiary"
        headerText={editItem ? "Edit Item" : "Add Item"}
        modalType="simple"
        isOpen={isModalOpen}
      >
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-6 pb-8"
          onSubmit={handleSubmit}
        >
          <div>
            <TextInput
              name="title"
              label="name"
              type="text"
              changeHandler={handleChange}
              handleBlur={handleBlur}
              value={values.title}
              placeholder="Enter title..."
              error={touched.title && errors.title}
            />
          </div>
          <div>
            <TextInput
              name="projectTitle"
              label="Project Title"
              type="text"
              changeHandler={handleChange}
              handleBlur={handleBlur}
              value={values.projectTitle}
              placeholder="Enter project title..."
              error={touched.projectTitle && errors.projectTitle}
            />
          </div>
          <div>
            <ReactSelectInput
              name="language"
              label="Languages"
              placeholder="Select Language..."
              onChange={(selectedOptions) => {
                const value = Array.isArray(selectedOptions)
                  ? selectedOptions.map((option) => option.value)
                  : (selectedOptions as Option)?.value;
                setFieldValue("language", value);
              }}
              options={skillsOptions}
              value={
                Array.isArray(values.language)
                  ? values.language
                      .map((lang) =>
                        skillsOptions.find((option) => option.value === lang)
                      )
                      .filter(
                        (option): option is Option => option !== undefined
                      )
                  : skillsOptions.find(
                      (option) => option.value === values.language
                    ) || null
              }
              error={touched.language && errors.language}
              isMultiple={true}
            />
          </div>
          <div>
            <TextInput
              name="link"
              label="Link"
              type="text"
              handleBlur={handleBlur}
              changeHandler={handleChange}
              value={values.link}
              placeholder="Enter link..."
              error={touched.link && errors.link}
            />
          </div>
          <div>
            <FileInput
              name="thumb"
              label="Upload Thumb Images"
              changeHandler={(e) => handleSingleFileChange(e, "thumbnail")}
              handleBlur={handleBlur}
              error={
                touched.thumbnail && Array.isArray(errors.thumbnail)
                  ? errors.thumbnail.join(", ")
                  : errors.thumbnail
              }
            />
            {values.thumbnail && (
              <div className="mt-2">
                <h5 className="text-sm font-medium text-darkPrimary mb-2">
                  Selected Image
                </h5>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={values.thumbnail}
                  alt=""
                  className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          <div>
            <FileInput
              name="Masonry Image"
              label="Upload Images"
              changeHandler={(e) => handleSingleFileChange(e, "masonryImage")}
              handleBlur={handleBlur}
              error={
                touched.masonryImage && Array.isArray(errors.masonryImage)
                  ? errors.masonryImage.join(", ")
                  : errors.masonryImage
              }
            />
            {values.masonryImage && (
              <div className="mt-2">
                <h5 className="text-sm font-medium text-darkPrimary mb-2">
                  Selected Image
                </h5>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={values.masonryImage}
                  alt=""
                  className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <FileInput
              name="images"
              label="Upload Images"
              changeHandler={handleMultipleFileChange}
              handleBlur={handleBlur}
              isMultiple={true}
              error={
                touched.images && errors.images
                  ? Array.isArray(errors.images)
                    ? errors.images[0] && typeof errors.images[0] === "object"
                      ? (errors.images[0] as { imageSrc: string }).imageSrc ||
                        "Invalid image"
                      : "Invalid image"
                    : errors.images
                  : undefined
              }
            />
            {values.images && values.images.length > 0 && (
              <div className="mt-2">
                <h5 className="text-sm font-medium text-darkPrimary mb-2">
                  Selected Image
                </h5>
                <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
                  {values.images.map((image) => (
                    <div key={image.id} className="relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.imageSrc}
                        alt=""
                        className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg"
                      />
                      <div
                        className={`absolute left-0 top-0 bottom-0 right-0 -z-100 bg-black/85 rounded-lg
                        opacity-0 group-hover:opacity-100 group-hover:z-20  transition-all duration-200 ease-linear
                        flex justify-center items-center
                      `}
                      >
                        <button
                          type="button"
                          className="text-xl text-red-400 font-bold"
                          onClick={() => handleFileDelete(image.id)}
                        >
                          <IoTrashBin />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-2 relative z-0">
            <Textarea
              name={`description`}
              label={`Description`}
              handleBlur={handleBlur}
              changeHandler={(e) => setDescriptions(e.target.value)}
              value={descriptions}
              placeholder="Enter Description..."
              row={5}
              error={false}
            />
            <div className="flex justify-end">
              <button
                className={`uppercase relative  text-white font-bold bg-lightPrimary 
                border border-lightPrimary dark:bg-tertiary dark:border-tertiary transition-all 
                duration-200 ease-linear rounded-lg min-w-[9.688rem] max-w-[15rem] max-h-[3rem] 
                px-4 py-4 leading-[21px] overflow-hidden group flex flex-col justify-center items-center 
                mx-6 lg:mx-0`}
                onClick={handleDescriptionAddButton}
                type="button"
              >
                <span className="group-hover:translate-y-[-100px] duration-300 ease-linear transition-all group-hover:duration-300 group-hover:ease-linear group-hover:transition-all ">
                  Add Description
                </span>
                <span className="absolute bottom-0 translate-y-[50px] group-hover:translate-y-[-10px] duration-300 ease-linear transition-all group-hover:duration-300 group-hover:ease-linear group-hover:transition-all text-2xl overflow-hidden">
                  <IoAdd />
                </span>
              </button>
            </div>
            {values.description && values.description.length > 0 && (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full mt-3 md:mt-4 lg:mt-5">
                <table className="w-full text-sm text-lightSecondary dark:text-darkSecondary">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-f]">
                    <tr>
                      <th className="">#</th>
                      <th colSpan={3}>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.description.map((desc: Description, index) => (
                      <tr
                        key={desc.id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 capitalize text-center"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td
                          colSpan={3}
                          className="px-6 py-4 md:min-w-[10rem] md:max-w-[15rem]"
                        >
                          {desc.text}
                        </td>
                        <td className="px-6 py-4">
                          <ActionButton
                            editButtonClickHandler={() =>
                              editDescriptionHandler(desc.id)
                            }
                            deleteButtonClickHandler={() =>
                              deleteDescriptionHandler(desc.id)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Button title="Submit" type={"submit"} />
          </div>
        </form>
      </Modal>
      {/* Add and Edit Modal end */}

      {/* Delete Modal start*/}
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setDeleteItem={setDeleteItem}
        setDeleteModalOpen={setDeleteModalOpen}
        handleCancelButtonClick={handleCancelButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
        title="project item"
      />
      {/* Delete Modal end*/}
    </section>
  );
};

export default Page;
