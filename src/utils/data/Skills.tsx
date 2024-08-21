import { v4 as uuid } from "uuid";

{
  /* Skills import begin here */
}

import React from "react";

import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaPhp, FaLaravel, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiSvelteLine, RiVuejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss, SiRedux } from "react-icons/si";
import {
  TbBrandAstro,
  TbBrandBootstrap,
  TbBrandTypescript,
} from "react-icons/tb";
import { BsFiletypeScss, BsTools } from "react-icons/bs";

export interface Option {
  id: string;
  value: string;
  label: string;
}

interface SkillSet {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export interface Skill {
  id: number;
  category: string;
  skillSet: SkillSet[];
}

export const skillCategories: Option[] = [
  {
    id: "1",
    value: "",
    label: "Select Category",
  },
  {
    id: "2",
    value: "1",
    label: "experienced with",
  },
  {
    id: "3",
    value: "2",
    label: "Familiar with",
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    category: "Experienced With",
    skillSet: [
      {
        id: 1,
        title: "HTML5",
        icon: <AiOutlineHtml5 />,
      },
      {
        id: 2,
        title: "CSS3",
        icon: <TiCss3 />,
      },
      {
        id: 3,
        title: "JavaScript",
        icon: <IoLogoJavascript />,
      },
      {
        id: 4,
        title: "TypeScript",
        icon: <TbBrandTypescript />,
      },
      {
        id: 5,
        title: "Bootstrap",
        icon: <TbBrandBootstrap />,
      },
      {
        id: 6,
        title: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        id: 7,
        title: "SCSS",
        icon: <BsFiletypeScss />,
      },
      {
        id: 8,
        title: "ReactJS",
        icon: <FaReact />,
      },
      {
        id: 9,
        title: "NextJS",
        icon: <RiNextjsLine />,
      },
      {
        id: 10,
        title: "VueJS",
        icon: <RiVuejsLine />,
      },
      {
        id: 11,
        title: "SvelteJS",
        icon: <RiSvelteLine />,
      },
      {
        id: 12,
        title: "Astro",
        icon: <TbBrandAstro />,
      },
      {
        id: 13,
        title: "NodeJS",
        icon: <IoLogoNodejs />,
      },
      {
        id: 14,
        title: "ExpressJS",
        icon: <SiExpress />,
      },
      {
        id: 15,
        title: "Mongodb",
        icon: <SiMongodb />,
      },
      {
        id: 16,
        title: "Redux",
        icon: <SiRedux />,
      },
    ],
  },
  {
    id: 221,
    category: "Familiar With",
    skillSet: [
      {
        id: 3213,
        title: "Php",
        icon: <FaPhp />,
      },
      {
        id: 3423,
        title: "Laraval",
        icon: <FaLaravel />,
      },
      {
        id: 5245234,
        title: "Python",
        icon: <AiOutlinePython />,
      },
      {
        id: 454425,
        title: "Figma",
        icon: <FaFigma />,
      },
      {
        id: 235213,
        title: "React Native",
        icon: <FaReact />,
      },
      {
        id: 235215343,
        title: "CMS",
        icon: <BsTools />,
      },
    ],
  },
];

export interface TableData {
  id: string;
  category: string;
  title: string;
  iconFamily: string;
  iconName: string;
}

export const tableData: TableData[] = [
  {
    id: uuid(),
    category: "1",
    title: "Html",
    iconFamily: "ai",
    iconName: "AiOutlineHtml5",
  },
  {
    id: uuid(),
    category: "1",
    title: "CSS3",
    iconFamily: "ti",
    iconName: "TiCss3",
  },
  {
    id: uuid(),
    category: "2",
    title: "CMS",
    iconFamily: "bs",
    iconName: "BsTools",
  },
  {
    id: uuid(),
    category: "1",
    title: "Html",
    iconFamily: "ai",
    iconName: "AiOutlineHtml5",
  },
  {
    id: uuid(),
    category: "1",
    title: "CSS3",
    iconFamily: "ti",
    iconName: "TiCss3",
  },
  {
    id: uuid(),
    category: "2",
    title: "CMS",
    iconFamily: "bs",
    iconName: "BsTools",
  },
  {
    id: uuid(),
    category: "1",
    title: "Html",
    iconFamily: "ai",
    iconName: "AiOutlineHtml5",
  },
  {
    id: uuid(),
    category: "1",
    title: "CSS3",
    iconFamily: "ti",
    iconName: "TiCss3",
  },
  {
    id: uuid(),
    category: "2",
    title: "CMS",
    iconFamily: "bs",
    iconName: "BsTools",
  },
  {
    id: uuid(),
    category: "1",
    title: "Html",
    iconFamily: "ai",
    iconName: "AiOutlineHtml5",
  },
  {
    id: uuid(),
    category: "1",
    title: "CSS3",
    iconFamily: "ti",
    iconName: "TiCss3",
  },
  {
    id: uuid(),
    category: "2",
    title: "CMS",
    iconFamily: "bs",
    iconName: "BsTools",
  },
];
