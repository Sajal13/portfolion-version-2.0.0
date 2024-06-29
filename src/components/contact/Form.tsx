"use client";

import React, { Fragment, useRef, useState } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";

import { SiMinutemailer } from "react-icons/si";
import { TbFaceIdError } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaRegFaceLaughBeam } from "react-icons/fa6";

type Props = {};

const Form = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  const [modalText, setModalText] = useState<string>("sending");
  const [status, setStatus] = useState<number | null>(null);
  const schema = yup.object({
    name: yup.string().required("Name is requird."),
    email: yup
      .string()
      .email("Email must be a valid email.")
      .required("Email is required."),
    subject: yup.string().required("Subject is required."),
    message: yup.string().required("Message is required."),
  });
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (value) => {
      const data = {
        name: value.name,
        email: value.email,
        subject: value.subject,
        message: `${value.name}: ${value.message}`,
      };
      const response = await axios.post("/api", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setModalText(response.data.message);
      setStatus(response.status);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      resetForm();
    },
    validationSchema: schema,
  });

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(e);

    if (buttonRef.current && values.name && values.email && values.message) {
      buttonRef.current.classList.add("translate-x-64");
      setTimeout(() => {
        buttonRef.current?.classList.remove("translate-x-64");
        buttonRef.current?.classList.add("translate-x-0");
        buttonRef.current?.classList.remove("rotate-[25deg]");
      }, 5000);
    }
  };

  return (
    <Fragment>
      <form className="w-full" onSubmit={handleFormSubmit}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="mb-2 lg:mb-3"
        >
          <label
            htmlFor="name"
            className=" lg:text-lg font-medium text-lightSecondary dark:text-darkSecondary mb-3 block"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={`w-full block px-5 py-3 bg-white dark:bg-[#393E56]/50 border  dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]
          ${
            errors.name != null && touched.name
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
            placeholder="Enter your name..."
          />
          {errors.name != null && touched.name ? (
            <span className="py-2 text-red-500">{errors.name}</span>
          ) : (
            <span className="py-2"></span>
          )}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="mb-2 lg:mb-3"
        >
          <label
            htmlFor="email"
            className=" lg:text-lg font-medium text-lightSecondary dark:text-darkSecondary mb-3 block"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            id="email"
            className={`w-full block px-5 py-3 bg-white dark:bg-[#393E56]/50 border dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]
          ${
            errors.email != null && touched.email
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
            placeholder="Enter your email address..."
          />
          {errors.email != null && touched.email ? (
            <span className="py-2 text-red-500">{errors.email}</span>
          ) : (
            <span className="py-2"></span>
          )}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          className="mb-2 lg:mb-3"
        >
          <label
            htmlFor="subject"
            className=" lg:text-lg font-medium text-lightSecondary dark:text-darkSecondary mb-3 block"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            className={`w-full block px-5 py-3 bg-white dark:bg-[#393E56]/50 border  dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)]
          ${
            errors.subject != null && touched.subject
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
            placeholder="Enter your Subject..."
          />
          {errors.subject != null && touched.subject ? (
            <span className="py-2 text-red-500">{errors.subject}</span>
          ) : (
            <span className="py-2"></span>
          )}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="mb-5 lg:mb-6"
        >
          <label
            htmlFor="message"
            className="text-lg md:text-xl font-medium text-lightSecondary dark:text-darkSecondary mb-3 block"
          >
            Message
          </label>
          <textarea
            rows={8}
            onChange={handleChange}
            onBlur={handleBlur}
            name="message"
            id="message"
            value={values.message}
            className={`w-full block px-5 py-3 bg-white dark:bg-[#393E56]/50 border  dark:border-[#393E56]  
          outline-none rounded-lg focus:shadow-[0px_0px_0px_3px_rgba(255,122,87,0.25)] dark:focus:shadow-[0px_0px_0px_3px_rgba(8,_112,_184,_0.5)] 
          focus:border-[#ffdfd7] dark:focus:border-[rgba(8,_112,_184,_0.5)] resize-none
          ${
            errors.message != null && touched.message
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
            placeholder="Enter your message..."
          />
          {errors.message != null && touched.message ? (
            <span className="py-2 text-red-500">{errors.message}</span>
          ) : (
            <span className="py-2"></span>
          )}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.8,
          }}
        >
          <button
            className="w-full overflow-hidden bg-lightPrimary dark:bg-tertiary text-white rounded-[3.125rem] font-bold text-sm lg:text-base py-[0.65rem] px-[0.9rem] flex justify-center items-center transition-all duration-200 group relative"
            type="submit"
          >
            Send Message
            <span
              className="ms-2 text-2xl  group-hover:rotate-[25deg] active:translate-x-8 transition-all duration-500 ease-linear"
              ref={buttonRef}
            >
              <SiMinutemailer />
            </span>
          </button>
        </motion.div>
      </form>
      {isOpen && (
        <motion.div
          initial={{ x: 50, opacity: 0, top: 0, right: 0 }}
          whileInView={{ x: 0, opacity: 1, top: 20, right: 20 }}
          exit={{ x: 50, opacity: 0, top: 0, right: 0 }}
          transition={{
            duration: 0.4,
          }}
          className="fixed z-20 right-5 top-5 bg-white rounded-[1.25rem] py-1 px-4 flex justify-between items-center gap-2 md:gap-3 lg:gap-4 shadow-lg"
        >
          <div className="text-xl md:text-2xl">
            {status === 200 ? (
              <FaRegFaceLaughBeam className=" text-lightPrimary dark:text-tertiary" />
            ) : (
              <TbFaceIdError className="text-danger" />
            )}
          </div>
          <p
            className={`text-sm ${
              status === 200
                ? "text-lightPrimary dark:text-tertiary"
                : "text-danger"
            }`}
          >
            {modalText}
          </p>
          <button
            className={`ps-2 py-2  hover:text-secondary text-xl md:text-2xl ${
              status === 200
                ? "text-lightPrimary dark:text-tertiary"
                : "text-danger"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Form;
