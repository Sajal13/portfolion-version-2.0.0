"use client";

import Preloader from "@/components/shared/Preloader";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    document.title = pageTitle || "Algo Kids | Home";
  }, [pageTitle]);
  return (
    <>
      <Head>
        <title>{pageTitle || "Algo Kids | Home"}</title>
      </Head>
      {isLoading && <Preloader />}
      {!isLoading && children}
    </>
  );
}
