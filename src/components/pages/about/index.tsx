import React from "react";
import Objective from "./Objective";
import Skills from "./Skills";
import EducationAndExperience from "./EducationAndExperience";

const AboutContainer = () => {
  return (
    <main className="mb-6 md:mb-10">
      <Objective />
      <Skills />
      <EducationAndExperience />
    </main>
  );
};

export default AboutContainer;
