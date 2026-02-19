import AboutContainer from "@/components/pages/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
}

const Page = () => {
  return (
    <AboutContainer />
  );
};

export default Page;
