"use client";

import FileInput from "@/components/admin/inputs/FileInput";
import TextInput from "@/components/admin/inputs/TextInput";
import React, { useState } from "react";
import ActionButton from "@/components/admin/ActionButton";
import TableLayout from "@/components/admin/TableLayout";
import { TableContextProvider } from "@/utils/useTableProvider";
import Modal from "@/components/admin/Modal";

import { blogSchema } from "@/utils/schema/Schema";
import { blogs, type Blogs } from "@/utils/data/Blogs";
import { skillsOptions, type Option } from "@/utils/data/SelectOptions";

import { useFormik } from "formik";
import Button from "@/components/admin/Button";
import DeleteModal from "@/components/admin/modal/DeleteModal";
import ReactSelectInput from "@/components/admin/inputs/ReactSelectInput";

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
  } = TableContextProvider<Blogs>({
    tableItems: blogs,
    sortBy: "title",
  });

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Blogs | null>(null);
  const [deleteItem, setDeleteItem] = useState<string | null>(null);

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
      title: "" as string,
      file: null as unknown as File,
      tags: [] as unknown as string,
    },
    onSubmit: (value) => {
      console.log(value);
      resetForm();
    },
    validationSchema: blogSchema,
  });

  const handleClose = () => {
    setModalOpen(false);
    resetForm();
  };
  const addButtonClickHandler = () => {
    setModalOpen(true);
  };
  const editHandler = (item: Blogs) => {
    setFieldValue("title", item.title);
    setFieldValue("file", item.file);
    setFieldValue("tags", item.tags);
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

  const handleSingleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    console.log(selectedFile);
    if (selectedFile && selectedFile.type === "text/markdown") {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setFieldValue("file", formData);
    }
  };

  console.log(values.file);

  return (
    <section className="px-2">
      <TableLayout
        tableHeader="Blogs"
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
        length={paginatedData.length}
        headers={["#", "Title", "File", "Tags", "Action"]}
        handleAddButtonClick={addButtonClickHandler}
      >
        {paginatedData.length > 0 ? (
          paginatedData.map((blog, index) => (
            <tr
              key={blog.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 capitalize text-center"
            >
              <td className="px-6 py-4">{startIndex + index + 1}</td>
              <td className="px-6 py-4">{blog.title}</td>
              <td className="px-6 py-4">{blog.file.name}</td>
              <td className="px-6 py-4">
                <ul className="px-2 space-y-2 capitalize">
                  {blog.tags.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4">
                <ActionButton
                  editButtonClickHandler={() => editHandler(blog)}
                  deleteButtonClickHandler={() => deleteHandler(blog.id)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center py-4">
              No data available.
            </td>
          </tr>
        )}
      </TableLayout>

      {/* Add and Edit Modal start */}
      <Modal
        onClose={handleClose}
        headerColor="text-lightPrimary dark:text-tertiary"
        headerText={editItem ? "Edit Item" : "Add Item"}
        modalType="simple"
        isOpen={isModalOpen}
      >
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 pb-8"
          onSubmit={handleSubmit}
        >
          <div>
            <TextInput
              name="title"
              label="Title"
              type="text"
              changeHandler={handleChange}
              handleBlur={handleBlur}
              value={values.title}
              placeholder="Enter title..."
              error={touched.title && errors.title}
            />
          </div>
          <div>
            <FileInput
              name="file"
              label="Upload Markdown File"
              changeHandler={handleSingleFileChange}
              handleBlur={handleBlur}
              error={""}
              accept=".md"
            />
            {values.file && (
              <div className="mt-2">
                <h5 className="text-sm font-medium text-darkPrimary mb-2">
                  Selected Image
                </h5>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <h3 className="text-sm font-bold text-darkPrimary ">
                  {values.file.name}
                </h3>
              </div>
            )}
          </div>
          <div>
            <ReactSelectInput
              name="tags"
              label="Tags"
              placeholder="Select tags..."
              onChange={(selectedOptions) => {
                const value = Array.isArray(selectedOptions)
                  ? selectedOptions.map((option) => option.value)
                  : (selectedOptions as Option)?.value;
                setFieldValue("tags", value);
              }}
              options={skillsOptions}
              value={
                Array.isArray(values.tags)
                  ? values.tags
                      .map((tag) =>
                        skillsOptions.find((option) => option.value === tag)
                      )
                      .filter(
                        (option): option is Option => option !== undefined
                      )
                  : skillsOptions.find(
                      (option) => option.value === values.tags
                    ) || null
              }
              error={touched.tags && errors.tags}
              isMultiple={true}
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
        title="blog"
      />
      {/* Delete Modal end*/}
    </section>
  );
};

export default Page;
