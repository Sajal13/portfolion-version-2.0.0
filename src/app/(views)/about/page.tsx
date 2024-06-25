"use client";
import React from "react";
import Objective from "@/components/about/Objective";
import EducationAndExperience from "@/components/about/EducationAndExperience";
import Skills from "@/components/about/Skills";
import Layout from "@/layouts/Layout";

type Props = {};

const Page = (props: Props) => {
  return (
    <Layout pageTitle="Sajal Das || About">
      <main className="mb-6 md:mb-10">
        <Objective />
        <Skills />
        <EducationAndExperience />
      </main>
    </Layout>
  );
};

export default Page;
