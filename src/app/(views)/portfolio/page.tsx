import ProfileContainer from "@/components/pages/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Works",
  description: "A showcase of my projects and achievements"
};

const Page = () => {
  return <ProfileContainer />;
};

export default Page;
