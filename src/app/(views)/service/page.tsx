
import ServiceContainer from "@/components/pages/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services"
}
const Page = () => {
  return (
    <ServiceContainer />
  );
};

export default Page;
