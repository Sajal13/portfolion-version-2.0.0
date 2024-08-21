import { v4 as uuid } from "uuid";

export interface ExperienceList {
  id: string;
  title: string;
  type: "1" | "2";
  start: string;
  end: string;
  description: string;
}

export interface Option {
  id: string;
  value: string;
  label: string;
}

export const categoriesOptions: Option[] = [
  {
    id: "1",
    value: "",
    label: "Select Category",
  },
  {
    id: "2",
    value: "1",
    label: "Education",
  },
  {
    id: "3",
    value: "2",
    label: "Experience",
  },
];

export const experienceLists: ExperienceList[] = [
  {
    id: uuid(),
    title: `Baliadangi Pilot High School, Thakurgaon`,
    type: "1",
    start: "Jan 2010",
    end: "May 2014",
    description:
      "Completed Secondary Secondary Certificate from here in 2014. Major Science.",
  },
  {
    id: uuid(),
    title: `Saint Philip's High School & Collage, Dinajpur`,
    type: "1",
    start: "June 2014",
    end: "July 2016",
    description:
      "Completed Higher Secondary Certificate from here in 2016. Major Science.",
  },
  {
    id: uuid(),
    title: `Maharishi Markandeshwar (deemed to be) University, India`,
    type: "1",
    start: "June 2018",
    end: "July 2024",
    description:
      "Completed Higher Secondary Certificate from here in 2016. Major Science.",
  },
  {
    id: uuid(),
    title: `InNeed Intelligence Cloud, Dhaka`,
    type: "2",
    start: "Jan 2023",
    end: "Dec 2023",
    description:
      "Joined InNeed Intellignece Cloud as a Junior Front-End Developer. Worked on different client. Technology used (Svelte, Sveltkit, Astro, VueJs, TailwindCSS, Vuetify).",
  },
  {
    id: uuid(),
    title: `Technext It Limited`,
    type: "2",
    start: "Jan 2024",
    end: "Present",
    description:
      "Joined TechnextIt as a Junior Front-End Developer. Working on Template Designing for Bootstrap Marketplace. Technology uses (Pug, Bootstrap 5, ReactJs).",
  },
  {
    id: uuid(),
    title: `Evocation IT`,
    type: "2",
    start: "Contractual",
    end: "Present",
    description:
      "Working Contractually on different project for clients as a Front-End Developer. Technology used (ReactJs, Nextjs, TailwindCSS, MaterialUI).",
  },
];
