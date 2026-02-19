import ContactContainer from "@/components/pages/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me"
};

const Page = () => {
  return <ContactContainer />;
};

export default Page;
