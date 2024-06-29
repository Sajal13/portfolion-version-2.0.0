"use client";
import React from "react";
import Form from "@/components/contact/Form";
import Hero from "@/components/contact/Hero";
import Layout from "@/layouts/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { AnimatePresence } from "framer-motion";

type Props = {};

const Page = (props: Props) => {
  return (
    <Layout pageTitle="Sajal Das || Contact Me">
      <main className="container mx-auto mb-8 md:mb-10 lg:mb-14">
        <SectionHeader sectionText="let's talk" absoluteText="contact" />
        <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-14 lg:gap-16 xl:gap-24 min-h-[60vh] mt-8 md:mt-10 lg:mt-12 px-4 md:px-8 lg:px-6 xl:px-2">
          <AnimatePresence>
            <Hero />
            <Form />
          </AnimatePresence>
        </section>
      </main>
    </Layout>
  );
};

export default Page;
