import { v4 as uuid } from "uuid";

export const timelineItems: Array<Timelines> = [
  {
    id: 1,
    title: "Saint Philip's High School & Collage, Dinajpur",
    duration: "2014-2016",
    description:
      "Completed Higher Secondary Certificate from here in 2016. Major Science.",
    type: 1,
  },
  {
    id: 2,
    title: "Maharishi Markandeshwar (deemed to be) University, India",
    duration: "2018-2022",
    description:
      "Graduated from here in 2022. Completed Bachelor in Technology major in Computer Science and Engineering.",
    type: 1,
  },
  {
    id: 3,
    title: "InNeed Intelligence Cloud, Dhaka",
    duration: "Jan 2023 - Dec 2023",
    description: `Joined InNeed Intelligence Cloud as a Junior Front-End Developer. Worked on different client.
    Technology used (Svelte, Sveltkit, Astro, VueJs, TailwindCSS, Vuetify).
    `,
    type: 2,
  },
  {
    id: 4,
    title: "Technext It Limited",
    duration: "Jan 2024 - Present",
    description: `Joined TechnextIt as a Junior Front-End Developer. Working on Template Designing for Bootstrap Marketplace.
    Technology uses (Pug, Bootstrap 5, ReactJs)`,
    type: 2,
  },
  {
    id: 5,
    title: "Evocation IT",
    duration: "Contractual (Part time)",
    description: `Working Contractually on different project for clients as a Front-End Developer. Technology used 
    (ReactJs, Nextjs, TailwindCSS, MaterialUI).`,
    type: 2,
  },
];

export const services: Array<Service> = [
  {
    id: 1,
    title: "Responsive Web Design",
    description: `Crafting responsive web designs that seamlessly adapt to all devices. Let's 
    elevate your online presence with stunning websites that engage users and drive results.`,
    imageSrc: "/assets/images/service/css.jpeg",
  },
  {
    id: 2,
    title: "Web Application Development",
    description: `
    I specialize in crafting powerful web applications using React, Next.js, Svelte, Astro, and Vue.js. 
    Let's turn your ideas into innovative web solutions that drive success..`,
    imageSrc: "/assets/images/service/fetching.jpeg",
  },
  {
    id: 3,
    title: "Template Designing",
    description: `Crafting sleek templates for Bootstrap marketplaces using Pug and Bootstrap, prioritizing usability 
    and aesthetics. Let's collaborate to bring your vision to life and elevate your marketplace with visually stunning 
    templates that set you apart.`,
    imageSrc: "/assets/images/service/template.jpeg",
  },
  {
    id: 4,
    title: "Wordpress Website Design",
    description: `Specializing in WordPress website design, I craft visually appealing websites tailored to your brand. Let's collaborate 
    to build a stunning WordPress website that represents your brand and achieves your goals.`,
    imageSrc: "/assets/images/service/wordpress.webp",
  },
];

export const ITEMS_PER_PAGE: number = 10;

export const adminSideNavItems: AdminSideNavItem[] = [
  {
    id: uuid(),
    label: "dashboard",
    link: "/admin",
  },
  {
    id: uuid(),
    label: "skills",
    link: "/admin/skills",
  },
  {
    id: uuid(),
    label: "experience",
    link: "/admin/experience",
  },
  {
    id: uuid(),
    label: "portfolio",
    link: "/admin/portfolio",
  },
  {
    id: uuid(),
    label: "blogs",
    link: "/admin/blogs",
  },
];
