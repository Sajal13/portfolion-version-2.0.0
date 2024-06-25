"use client";

import Head from "next/head";
import React, { useEffect } from "react";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  useEffect(() => {
    document.title = pageTitle || "Algo Kids | Home";
  }, [pageTitle]);
  return (
    <>
      <Head>
        <title>{pageTitle || "Algo Kids | Home"}</title>
      </Head>
      {children}
    </>
  );
}
