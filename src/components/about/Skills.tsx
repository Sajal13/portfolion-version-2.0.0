'use client'

import React, { Fragment } from "react";
import { skills } from "@/utils/data/Skills";
import SkillCard from "./SkillCard";
import SectionHeader from "../shared/SectionHeader";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Fragment>
      <SectionHeader sectionText="skills" absoluteText="profile"/>
      <section className="container mx-auto mt-8 md:mt-10 lg:mt-12">
          {skills.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
      </section>
    </Fragment>
  );
};

export default Skills;
