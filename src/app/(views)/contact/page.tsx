"use client";
import React from "react";
import Form from "@/components/contact/Form";
import Hero from "@/components/contact/Hero";
import Layout from "@/layouts/Layout";

type Props = {};

const Page = (props: Props) => {
  return (
    <Layout pageTitle="Sajal Das || Contact Me">
      <main className="container mx-auto mb-6 md:mb-10 lg:mb-14">
        <section className="mt-3 py-6 md:py-8 lg:py-10 relative">
          <div className="text-center uppercase  text-darkPrimary dark:text-darkSecondary text-xl md:text-4xl font-light  leading-[21px] md:pt-2">
            Let&apos;s Talk
          </div>
          <p className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/10 dark:text-white/10 -z-10 text-6xl md:text-9xl">
            Contact
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 place-items-center xl:gap-24 min-h-[60vh] mt-16 lg:mt-20 px-4 md:px-8 lg:px-6 xl:px-2">
          <Hero />
          <Form />
        </section>
      </main>
    </Layout>
  );
};

export default Page;
