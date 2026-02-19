import SectionHeader from "@/components/shared/SectionHeader";
import Hero from "./Hero";
import Form from "./Form";

const ContactContainer = () => {
  return (
    <main className="container mx-auto mb-8 md:mb-10 lg:mb-14">
      <SectionHeader sectionText="let's talk" absoluteText="contact" />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-14 lg:gap-16 xl:gap-24 min-h-[60vh] mt-8 md:mt-10 lg:mt-12 px-4 md:px-8 lg:px-6 xl:px-2">
        <Hero />
        <Form />
      </section>
    </main>
  );
};

export default ContactContainer;
