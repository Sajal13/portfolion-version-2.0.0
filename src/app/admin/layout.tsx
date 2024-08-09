import React, { Fragment } from "react";
import { type Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";
import TopNav from "@/components/admin/TopNav";

export const metadata: Metadata = {
  title: "Sajal Das || Admin",
  description:
    "Explore the professional portfolio of Sajal Das, a skilled Front-End Developer with expertise in React, Next.js, JavaScript, and modern web technologies. Discover projects, case studies, and the creative journey of a developer passionate about building responsive, user-friendly web applications.",
  keywords:
    "Sajal Das, Front-End Developer, React Developer, Next.js, JavaScript, Portfolio, Web Development, Responsive Design, Modern Web Technologies, HTML, CSS, TypeScript, SCSS, Tailwind CSS, Git, GitHub, Node.js, MongoDB, Firebase",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <TopNav />
      <div className="flex bg-darkPrimary">
        <Sidebar />
        <main className="md:ml-48 lg:ml-64 p-4 pt-24  w-full h-[calc(100vh-3rem)]">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
