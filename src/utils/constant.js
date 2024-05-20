import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbBriefcase } from "react-icons/tb";
import { MdMiscellaneousServices, MdPermContactCalendar } from "react-icons/md";
import { ImBlogger } from "react-icons/im";

{
  /* Skills import begin here */
}

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

{
  /* Skills import end here */
}

export const navItems = [
  {
    id: 1,
    label: "Home",
    link: "/",
    icon: <IoHome />,
  },
  {
    id: 2,
    label: "About",
    link: "/about",
    icon: <FaUser />,
  },
  {
    id: 3,
    label: "Protfolio",
    link: "#",
    icon: <TbBriefcase />,
  },
  {
    id: 4,
    label: "Service",
    link: "/service",
    icon: <MdMiscellaneousServices />,
  },
  {
    id: 5,
    label: "Blog",
    link: "#",
    icon: <ImBlogger />,
  },
  {
    id: 6,
    label: "Contact",
    link: "/contact",
    icon: <MdPermContactCalendar />,
  },
];



export const skills = [
  {
    id: 1,
    header: 'Experienced With',
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
        icon: <SiTailwindcss/>,
      },
      {
        id: 7,
        title: "SCSS",
        icon: <BsFiletypeScss/>,
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
        icon: <RiSvelteLine/>,
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
        icon: <SiMongodb/>,
      },
      {
        id: 16,
        title: "Redux",
        icon: <SiRedux />,
      },
    ]
  }, 
  {
    id:221,
    header: "Familiar With",
    skillSet: [
      {
        id: 3213,
        title: "Php",
        icon: <FaPhp />
      },
      {
        id: 3423,
        title: 'Laraval',
        icon: <FaLaravel />
      },
      {
        id: 5245234,
        title: 'Python',
        icon: <AiOutlinePython />
      },
      {
        id: 454425,
        title: 'Figma',
        icon: <FaFigma />
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
    ]
  }
];


