import type { Metadata } from "next";
import "../globals.css";
import "../themes.css"
import Header from "@/components/shared/Header";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import Preloader from "@/components/shared/Preloader";
export const metadata: Metadata = {
  title: "Sajal Das || Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" type="image/png" href="/assets/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/assets/favicon_io/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <Header />
          <Suspense fallback={<Preloader />}>
          {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
