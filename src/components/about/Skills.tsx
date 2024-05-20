'use client'

import React, { Fragment } from "react";
import { skills } from "@/utils/constant";
import SkillCard from "./SkillCard";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Fragment>
      <section className="container mx-auto mt-16 md:mt-28 py-6 md:py-8 lg:py-10 relative ">
        <div className="text-center uppercase  text-darkPrimary dark:text-darkSecondary text-xl md:text-4xl font-light  leading-[21px] md:pt-2">
          Skills
        </div>
        <p className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/10 dark:text-white/10 -z-10 text-6xl md:text-9xl">
          Profile
        </p>
      </section>
      <section className="container mx-auto mt-16 md:mt-20">
          {skills.map((item) => (
            <SkillCard key={item.id} item={item}/>
          ))}
      </section>
    </Fragment>
  );
};

export default Skills;
