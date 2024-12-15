import { v4 as uuid } from "uuid";

export interface Option {
  id: string;
  value: string;
  label: string;
}

export const skillCategories: Option[] = [
  {
    id: uuid(),
    value: "",
    label: "Select Category",
  },
  {
    id: uuid(),
    value: "1",
    label: "experienced with",
  },
  {
    id: uuid(),
    value: "2",
    label: "Familiar with",
  },
];

export const experienceOptions: Option[] = [
  {
    id: uuid(),
    value: "",
    label: "Select Category",
  },
  {
    id: uuid(),
    value: "1",
    label: "Education",
  },
  {
    id: uuid(),
    value: "2",
    label: "Experience",
  },
];

// export const portfolioOptions: Option[] = [
//   {
//     id: uuid(),
//     value: "",
//     label: "Select Options",
//   },
//   {
//     id: uuid(),
//     value: "bootstrap",
//     label: "Bootstrap",
//   },
//   {
//     id: uuid(),
//     value: "javascript",
//     label: "JavaScript",
//   },
//   {
//     id: uuid(),
//     value: "nextjs",
//     label: "Nextjs",
//   },
//   {
//     id: uuid(),
//     value: "pug",
//     label: "Pug",
//   },
//   {
//     id: uuid(),
//     value: "reactjs",
//     label: "ReactJs",
//   },
//   {
//     id: uuid(),
//     value: "svelte",
//     label: "Svelte",
//   },
//   {
//     id: uuid(),
//     value: "tailwindcss",
//     label: "TailwindCSS",
//   },
//   {
//     id: uuid(),
//     value: "typescript",
//     label: "TypeScript",
//   },
//   {
//     id: uuid(),
//     value: "vuejs",
//     label: "VueJS",
//   },
//   {
//     id: uuid(),
//     value: "vuetify",
//     label: "Vuetify",
//   },
// ];

export const skillsOptions: Option[] = [
  { id: uuid(), value: "", label: "Select Language" },
  { id: uuid(), value: "html", label: "HTML" },
  { id: uuid(), value: "css", label: "CSS" },
  { id: uuid(), value: "javascript", label: "JavaScript" },
  { id: uuid(), value: "typescript", label: "TypeScript" },
  { id: uuid(), value: "reactjs", label: "React" },
  { id: uuid(), value: "nextjs", label: "Next.js" },
  { id: uuid(), value: "vuejs", label: "Vue.js" },
  { id: uuid(), value: "angular", label: "Angular" },
  { id: uuid(), value: "svelte", label: "Svelte" },
  { id: uuid(), value: "astro", label: "Astro" },
  { id: uuid(), value: "redux", label: "Redux" },
  { id: uuid(), value: "tailwindcss", label: "Tailwind CSS" },
  { id: uuid(), value: "bootstrap", label: "Bootstrap" },
  { id: uuid(), value: "scss", label: "SCSS" },
  { id: uuid(), value: "nodejs", label: "Node.js" },
  { id: uuid(), value: "express", label: "Express.js" },
  { id: uuid(), value: "mongodb", label: "MongoDB" },
  { id: uuid(), value: "firebase", label: "Firebase" },
  // { id: uuid(), value: "graphql", label: "GraphQL" },
  // { id: uuid(), value: "restapi", label: "REST API" },
  // { id: uuid(), value: "docker", label: "Docker" },
  // { id: uuid(), value: "nginx", label: "Nginx" },
  // { id: uuid(), value: "git", label: "Git" },
  // { id: uuid(), value: "github", label: "GitHub" },
  // { id: uuid(), value: "aws", label: "AWS" },
  // { id: uuid(), value: "webpack", label: "Webpack" },
  // { id: uuid(), value: "babel", label: "Babel" },
  // { id: uuid(), value: "jest", label: "Jest" },
  // { id: uuid(), value: "cypress", label: "Cypress" },
];
