import BlogsContainer from "@/components/pages/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read my latest articles and insights"
}

const Page = () => {
  return (
    <BlogsContainer />
  );
};

export default Page;
