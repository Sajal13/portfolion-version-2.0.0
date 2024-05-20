"use client";

import React, { useRef } from "react";
import { SiMinutemailer } from "react-icons/si";

import * as yup from "yup";
import { useFormik } from "formik";

type Props = {};

const Form = (props: Props) => {
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  const schema = yup.object({
    name: yup.string().required("Name is requird."),
    email: yup
      .string()
      .email("Email must be a valid email.")
      .required("Email is required."),
    message: yup.string().required("Message is required."),
  });
  const { values, handleChange, handleBlur, handleSubmit, resetForm, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      onSubmit: (value) => {
        console.log(value);
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
        buttonRef.current?.classList.remove('rotate-[25deg]');
      }, 5000);
    }
  };

  return (
    <form className="w-full" onSubmit={handleFormSubmit}>
      <div className="mb-2 lg:mb-3">
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
            errors.name != null
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
          placeholder="Enter your name..."
        />
        {errors.name != null ? (
          <span className="py-2 text-red-500">{errors.name}</span>
        ) : (
          <span className="py-2"></span>
        )}
      </div>
      <div className="mb-2 lg:mb-3">
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
            errors.email != null
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
          placeholder="Enter your email address..."
        />
        {errors.email != null ? (
          <span className="py-2 text-red-500">{errors.email}</span>
        ) : (
          <span className="py-2"></span>
        )}
      </div>
      <div className="mb-5 lg:mb-6">
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
            errors.message != null
              ? "text-red-500 border-red-500 dark:border-red-500"
              : "text-lightSecondary dark:text-darkSecondary border-[#ced4da]"
          }`}
          placeholder="Enter your message..."
        />
        {errors.message != null ? (
          <span className="py-2 text-red-500">{errors.message}</span>
        ) : (
          <span className="py-2"></span>
        )}
      </div>
      <div>
        <button
          className="w-full overflow-hidden bg-lightPrimary dark:bg-tertiary text-white rounded-[3.125rem] font-bold text-sm lg:text-base py-[0.65rem] px-[0.9rem] flex justify-center items-center transition-all duration-200 group"
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
      </div>
    </form>
  );
};

export default Form;
