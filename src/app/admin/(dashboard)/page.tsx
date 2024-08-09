"use client";

import React from "react";
import Card from "@/components/admin/Card";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 ">
        <Card length={4} title="Skills" />
        <Card length={4} title="Experience" />
        <Card length={4} title="Portfolio" />
        <Card length={4} title="Blogs" />
      </div>
    </section>
  );
};

export default Page;
