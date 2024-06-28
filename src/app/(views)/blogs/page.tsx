"use client";

import Layout from "@/layouts/Layout";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Layout pageTitle="Sajal Das || Blogs">
      <main className="bg-[url('/assets/images/illustration/coming_soon.jpg')] bg-no-repeat bg-cover bg-center ">
        <section className="container mx-auto flex min-h-[95vh] md:min-h-screen  justify-center items-center py-8 md:py-10 lg:py-12 ">
          <div className="text-center uppercase relative z-0">
            <h2
              className={`text-white text-5xl md:text-7xl lg:text-9xl lg:!leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#B6F492] to-[#338B93] h-full
            `}
            >
              coming soon
            </h2>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Page;
