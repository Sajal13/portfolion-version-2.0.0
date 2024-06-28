"use client";

import React from "react";
import Intro from "@/components/service/Intro";
import Services from "@/components/service/Services";
import Layout from "@/layouts/Layout";

type Props = {};

const Page = (props: Props) => {
  return (
    <Layout pageTitle="Sajal Das || Services">
      <main className="container mx-auto">
      <Intro />
      <Services />
    </main>
    </Layout>
  );
};

export default Page;
