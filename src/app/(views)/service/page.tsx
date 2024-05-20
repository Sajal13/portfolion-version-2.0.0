"use client";

import React from "react";
import Intro from "@/components/service/Intro";
import Services from "@/components/service/Services";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="container mx-auto">
      <Intro />
      <Services />
    </main>
  );
};

export default Page;
