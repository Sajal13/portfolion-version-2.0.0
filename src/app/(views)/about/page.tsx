"use client";
import React from "react";
import Objective from "@/components/about/Objective";
import EducationAndExperience from "@/components/about/EducationAndExperience";
import Skills from "@/components/about/Skills";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="mb-6 md:mb-10">
      <Objective />
      <Skills />
      <EducationAndExperience />
    </main>
  );
};

export default Page;
