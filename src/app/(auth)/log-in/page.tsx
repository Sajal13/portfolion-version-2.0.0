"use client";

import React, { useState } from "react";
import TextInput from "@/components/admin/inputs/TextInput";
import { loginSchema } from "@/utils/schema/Schema";
import { useFormik } from "formik";
import Button from "@/components/admin/Button";
import { AiOutlineSwap } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [isRight, setIsRight] = useState(false);

  const handleSwapButtonClick = () => {
    setIsRight(!isRight);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      router.push("/admin");
    },
    validationSchema: loginSchema,
  });
  return (
    <div className="flex justify-between items-center min-h-screen">
      <div
        className={`hidden md:block md:w-1/2 px-3 relative overflow-visible
        ${isRight ? "order-1" : ""}
        `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/illustration/mobile-login.svg"
          alt=""
          className="h-full w-full"
        />
        <button
          className={`border-2 text-2xl text-tertiary p-2 hover:scale-105 border-tertiary rounded-full w-fit bg-white absolute
         top-1/2 -translate-y-1/2 ${isRight ? "-left-5" : "-right-5"}
        `}
          onClick={handleSwapButtonClick}
        >
          <AiOutlineSwap />
        </button>
      </div>
      <div className="bg-darkPrimary md:bg-darkSecondary shadow-md md:border-l md:border-l-tertiary w-full flex flex-col justify-center items-center h-screen md:w-1/2 px-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/illustration/login.svg"
          alt=""
          className="w-1/3 mb-3 "
        />
        <h4 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-lightPrimary dark:text-tertiary mb-8 md:mb-10 font-semibold">
          Log In
        </h4>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="email"
            label="Email Address"
            labelClass="ext-lightPrimary dark:text-tertiary "
            type="email"
            changeHandler={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            placeholder="Enter email address..."
            error={touched.email && errors.email}
          />
          <TextInput
            name="password"
            label="Password"
            labelClass="ext-lightPrimary dark:text-tertiary "
            type="password"
            changeHandler={handleChange}
            handleBlur={handleBlur}
            value={values.password}
            placeholder="Enter password..."
            error={touched.password && errors.password}
          />
          <div className="mt-4">
            <Button title="Submit" type="submit" buttonSize="large" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
