"use client";

import React from "react";
import Intro from "@/components/profile/Intro";
import ProjectItems from "@/components/profile/ProjectItems";
import Layout from "@/layouts/Layout";

type Props = {};

const Page = (props: Props) => {
  return (
    <Layout pageTitle="Sajal Das || My Works">
      <main className="container mx-auto mb-6 md:mb-10 lg:mb-14">
        <Intro />
        <ProjectItems />
      </main>
    </Layout>
  );
};

export default Page;
