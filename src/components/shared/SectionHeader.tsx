import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  sectionText: string;
  absoluteText: string;
};

const SectionHeader = ({ sectionText, absoluteText }: Props) => {
  return (
    <AnimatePresence>
      <section className="container mx-auto mt-3 py-6 md:py-8 lg:py-10 relative ">
        <motion.div
          initial={{ y: 100, opacity: 0 , transform: 'translate(0%)'}}
          whileInView={{ y: 0, opacity: 1, transform: 'translateX(0%)' }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
          className="text-center uppercase  text-lightPrimary dark:text-tertiary text-2xl md:text-4xl font-medium  leading-[21px] md:pt-2"
        >
          {sectionText}
        </motion.div>
        <motion.p
          initial={{
            y: 100,
            scale: 0.5,
            opacity: 0,
            top: 50,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            top: 4,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          exit={{ scale: 0.5, opacity: 0, left: 100 }}
          transition={{
            duration: 0.3,
          }}
          className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/5 dark:text-white/5 -z-10 text-6xl md:text-9xl"
        >
          {absoluteText}
        </motion.p>
      </section>
    </AnimatePresence>
  );
};

export default SectionHeader;
