"use client";

import SelectInput from "@/components/admin/inputs/SelectInput";
import TextInput from "@/components/admin/inputs/TextInput";
import React, { useState } from "react";
import { experienceLists, type ExperienceList } from "@/utils/data/Experience";
import { experienceOptions } from "@/utils/data/SelectOptions";
import ActionButton from "@/components/admin/ActionButton";
import TableLayout from "@/components/admin/TableLayout";
import { TableContextProvider } from "@/utils/useTableProvider";
import Modal from "@/components/admin/Modal";

import { experienceSchema } from "@/utils/schema/Schema";

import { useFormik } from "formik";

import Button from "@/components/admin/Button";
import DeleteModal from "@/components/admin/modal/DeleteModal";
import ExperienceViewModal from "@/components/admin/modal/ExperienceViewModal";
import Textarea from "@/components/admin/inputs/Textarea";
// import { useResponsiveMaxLength } from "@/utils/useResponsiveMaxLength";

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
  } = TableContextProvider<ExperienceList>({
    tableItems: experienceLists,
    sortBy: "type",
  });

  // const responsiveMaxLength = useResponsiveMaxLength(100);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<ExperienceList | null>(null);
  const [deleteItem, setDeleteItem] = useState<string | null>(null);
  const [viewItem, setViewItem] = useState<ExperienceList | null>(null);

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
      type: "",
      start: "",
      end: "",
      description: "",
    },
    onSubmit: (value) => {
      console.log(value);
      resetForm();
    },
    validationSchema: experienceSchema,
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

  const handleViewButtonClick = (item: ExperienceList) => {
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
  const editHandler = (item: ExperienceList) => {
    setFieldValue("title", item.title);
    setFieldValue("type", item.type);
    setFieldValue("start", item.start);
    setFieldValue("end", item.end);
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

  return (
    <section className="px-2 w-full overflow-hidden">
      <TableLayout
        tableHeader="Experiences"
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
        length={paginatedData.length}
        headers={[
          "#",
          "Title",
          "Type",
          "Start Date",
          "End Date",
          "Description",
          "Action",
        ]}
        handleAddButtonClick={addButtonClickHandler}
      >
        {paginatedData.map((experience, index) => (
          <tr
            key={experience.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 capitalize text-center"
          >
            <td className="px-6 py-4">{startIndex + index + 1}</td>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {truncateText({
                text: experience.title,
                maxLength: 10,
              })}
            </th>
            <td className="px-6 py-4">{experience.type}</td>
            <td className="px-6 py-4">{experience.start}</td>
            <td className="px-6 py-4">{experience.end}</td>
            <td className="px-6 py-4">
              {truncateText({
                text: experience.description,
                maxLength: 15,
              })}
            </td>
            <td className="px-6 py-4">
              <ActionButton
                editButtonClickHandler={() => editHandler(experience)}
                deleteButtonClickHandler={() => deleteHandler(experience.id)}
                view={true}
                viewButtonClickHandler={() => handleViewButtonClick(experience)}
              />
            </td>
          </tr>
        ))}
      </TableLayout>

      {viewItem && (
        <ExperienceViewModal
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
            <SelectInput
              name="type"
              label="Type"
              changeHandler={handleChange}
              options={experienceOptions}
              value={values.type}
              error={touched.type && errors.type}
            />
          </div>
          <div>
            <TextInput
              name="start"
              label="Star Date"
              type="text"
              handleBlur={handleBlur}
              changeHandler={handleChange}
              value={values.start}
              placeholder="Enter month (in short) and Full Year..."
              error={touched.start && errors.start}
            />
          </div>
          <div>
            <TextInput
              name="end"
              label="End Date"
              type="text"
              handleBlur={handleBlur}
              changeHandler={handleChange}
              value={values.end}
              placeholder="Enter month (in short) and Full Year..."
              error={touched.end && errors.end}
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              name="description"
              label="Description"
              handleBlur={handleBlur}
              changeHandler={handleChange}
              value={values.description}
              placeholder="Enter Description..."
              row={5}
              error={touched.description && errors.description}
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Button title="Submit" />
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
        title="experience"
      />
      {/* Delete Modal end*/}
    </section>
  );
};

export default Page;
