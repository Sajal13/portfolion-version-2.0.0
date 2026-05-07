import { v4 as uuid } from "uuid";

export const timelineItems: Array<Timelines> = [
  {
    id: 1,
    title: "Saint Philip's High School & Collage, Dinajpur",
    duration: "2014-2016",
    description:
      "Completed Higher Secondary Certificate from here in 2016. Major Science.",
    type: 1
  },
  {
    id: 2,
    title: "Maharishi Markandeshwar (demeed to be) University, India",
    duration: "2018-2022",
    description:
      "Graduated from here in 2022. Completed Bachelor in Technology major in Computer Sciecnce and Engineering.",
    type: 1
  },
  {
    id: 3,
    title: "Evocation IT",
    duration: "Oct 2022 - Jan 2023 (Contratual)",
    description: `Working Contractually on different project for clients as a Front-End Developer. Technology used 
    (ReactJs, Nextjs, TailwindCSS, MaterialUI).`,
    type: 2
  },
  {
    id: 4,
    title: "InNeed Intelligence Cloud, Dhaka",
    duration: "Jan 2023 - Dec 2023",
    description: `Joined InNeed Intellignece Cloud as a Junior Front-End Developer. Worked on different client.
    Technology used (Svelte, Sveltkit, Astro, VueJs, TailwindCSS, Vuetify).
    `,
    type: 2
  },
  {
    id: 5,
    title: "Technext It Limited",
    duration: "Jan 2024 - Mar 2026",
    description: `Joined TechnextIt as a Front-End Developer. Working on Template Designing for Bootstrap Marketplace.
    Technology uses (Pug, SCSS, Bootstrap 5, ReactJs, MaterialUI and Other technologies)`,
    type: 2
  },
  {
    id: 6,
    title: 'Rockstreamer',
    duration: 'April 2026 - Currently Working',
    description: `Currenlty working as a Software Engineer. The daily works involvs, videojs, OTT Platform 
    streaming, CMS Building for OTT Platform, using Nextjs, ReactJs, Tailwindcss, Styled Component and css.`,
    type: 2
  }
];

export const services: Array<Service> = [
  {
    id: 1,
    title: "Responsive Web Design",
    description: `Crafting responsive web designs that seamlessly adapt to all devices. Let's 
    elevate your online presence with stunning websites that engage users and drive results.`,
    imageSrc: "/assets/images/service/css.jpeg"
  },
  {
    id: 2,
    title: "Web Application Development",
    description: `
    I specialize in crafting powerful web applications using React, Next.js, Svelte, Astro, and Vue.js. 
    Let's turn your ideas into innovative web solutions that drive success..`,
    imageSrc: "/assets/images/service/javascript.jpeg"
  },
  {
    id: 3,
    title: "Template Designing",
    description: `Crafting sleek templates for Bootstrap marketplaces using Pug and Bootstrap, prioritizing usability 
    and aesthetics. Let's collaborate to bring your vision to life and elevate your marketplace with visually stunning 
    templates that set you apart.`,
    imageSrc: "/assets/images/service/template.jpeg"
  },
  {
    id: 4,
    title: "Wordpress Website Design",
    description: `Specializing in WordPress website design, I craft visually appealing websites tailored to your brand. Let's collaborate 
    to build a stunning WordPress website that represents your brand and achieves your goals.`,
    imageSrc: "/assets/images/service/wordpress.webp"
  },
  {
    id: 5,
    title: 'OTT Platform Design',
    description: `Building modern OTT platforms using Next.js, React.js, and Video.js with responsive UI, smooth video streaming, and scalable frontend architecture. Experienced in integrating Google Ads, content-focused layouts, and performance optimization to deliver seamless entertainment experiences across all devices.`,
    imageSrc: '/assets/images/service/ott.jpeg'
  }
];

export const portfolioItems: Array<PortfolioItem> = [
  {
    id: uuid(),
    category: ["nextjs", "tailwindcss", "reactjs", "html", "css", "typescript"],
    title: "BMTF",
    thumbnail: "/assets/images/projects/bmtf/bmtf_1.png",
    masonryImage: "/assets/images/projects/bmtf/bmtf.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf/bmtf_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf/bmtf_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf/bmtf_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf/bmtf_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf/bmtf_5.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf/bmtf_6.png"
      }
    ],
    projectTitle: "Bangladesh Machine Tools Factory(BMTF)",
    language: [
      "Html",
      "css",
      "tailwindcss",
      "javaScript",
      "nextjs",
      "Typescript"
    ],
    link: "https://bmtf.com.bd",
    description: [
      {
        id: uuid(),
        text: "BMTF is for Bangladeshi Army's. Where they have shown their different works and showcase their factory."
      },
      {
        id: uuid(),
        text: "Created fully dynamic responsive website using nextjs, typescript and tailwindcss."
      },
      {
        id: uuid(),
        text: "Worked on creating Next.js applications from development to deployment."
      },
      {
        id: uuid(),
        text: "Implemented Custom sliders."
      },
      {
        id: uuid(),
        text: "Implemented Animation using Framer motion."
      },
      {
        id: uuid(),
        text: "Implemented Form Validation using Formik and Yup."
      }
    ]
  },
  {
    id: uuid(),
    category: ["nextjs", "tailwindcss", "reactjs", "html", "css"],
    title: "BMTF Ecommerce",
    thumbnail: "/assets/images/projects/bmtf-ecom/1.webp",
    masonryImage: "/assets/images/projects/bmtf-ecom/large_1.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf-ecom/1.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf-ecom/2.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf-ecom/3.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf-ecom/4.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf-ecom/5.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/bmtf-ecom/6.webp"
      }
    ],
    projectTitle: "Bangladesh Machine Tools Factory(BMTF) Ecommerce",
    language: [
      "Html",
      "css",
      "tailwindcss",
      "javaScript",
      "nextjs",
      "reactjs"
    ],
    link: "https://shop.bmtf.com.bd/",
    description: [
      {
        id: uuid(),
        text: "Integrated product listing and detail pages."
      },
      {
        id: uuid(),
        text: "Developed reusable and maintainable UI components."
      },
      {
        id: uuid(),
        text: "Ensured cross-browser compatibility and mobile responsiveness."
      },
      {
        id: uuid(),
        text: "Implemented clean and user-friendly navigation."
      },
      {
        id: uuid(),
        text: "Managed responsive layouts for all device sizes."
      },
      {
        id: uuid(),
        text: "Structured the project using scalable folder architecture."
      }
    ]
  },
  {
    id: uuid(),
    category: ["nextjs", "tailwindcss", "reactjs", "html", "css"],
    title: "Algo Kids",
    thumbnail: "/assets/images/projects/algo_kids/algo_kids_1.png",
    masonryImage: "/assets/images/projects/algo_kids/algo_kids.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_5.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_6.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_7.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_8.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_9.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_10.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/algo_kids/algo_kids_11.png"
      }
    ],
    projectTitle: "Algo Kids",
    language: ["Html", "css", "tailwindcss", "javaScript", "nextjs"],
    link: "https://algo-kids-dev.vercel.app",
    description: [
      {
        id: uuid(),
        text: "Algo kids is for the Kids to Learning on different courses. Here they can open an account, try different courses. They can sess different event which will happend. They can give exams also. "
      },
      {
        id: uuid(),
        text: "Created fully dynamic responsive website using nextjs and tailwindcss."
      },
      {
        id: uuid(),
        text: "Worked on creating Next.js applications from development to deployment."
      },
      {
        id: uuid(),
        text: "Implemented SwiperJs for sliders."
      },
      {
        id: uuid(),
        text: "Implemented BigCalender for Calendars."
      },
      {
        id: uuid(),
        text: "Implemented Form Validation using Formik and Yup."
      },
      {
        id: uuid(),
        text: "Implemented Authentication using next-auth"
      },
      {
        id: uuid(),
        text: "Implemented Markdown rendering and slider using react-markdown and revealjs."
      }
    ]
  },
  {
    id: uuid(),
    category: ["html", "css", "pug", "bootstrap", "javascript", 'reactjs'],
    title: "Phoenix (HTML + ReactJS)",
    thumbnail: "/assets/images/projects/phoenix/1.webp",
    masonryImage: "/assets/images/projects/phoenix/large_1.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/1.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/2.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/3.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/4.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/5.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/6.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/7.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/phoenix/8.webp"
      }
    ],
    projectTitle: "Phoenix (HTML + ReactJS)",
    language: ["Html", "css", "Pug", "Bootstrap", "JavaScript", 'ReactJS'],
    link: "https://phoenix-react.prium.me/",
    description: [
      {
        id: uuid(),
        text: "Phoenix is a template for Bootstrap Template build on html and reactjs. Where a user can download this, use and modify the code to develop their own."
      },
      {
        id: uuid(),
        text: "Created Responsive Bootstrap Template using Bootstrap 5"
      },
      {
        id: uuid(),
        text: "Worked on creating Project using gulp and pug and reactjs."
      },
      {
        id: uuid(),
        text: "Implemented SwiperJs for sliders."
      },
    ]
  },
  {
    id: uuid(),
    category: ["html", "css", "pug", "bootstrap", "javascript", 'reactjs'],
    title: "Falcon (HTML + ReactJS)",
    thumbnail: "/assets/images/projects/falcon/1.webp",
    masonryImage: "/assets/images/projects/falcon/large_1.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/falcon/1.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/falcon/2.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/falcon/3.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/falcon/4.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/falcon/5.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/falcon/6.webp"
      }
    ],
    projectTitle: "Falcon (HTML + ReactJS)",
    language: ["Html", "css", "Pug", "Bootstrap", "JavaScript", 'ReactJS'],
    link: "https://falconreact.prium.me/",
    description: [
      {
        id: uuid(),
        text: "Falcon is a template for Bootstrap Template build on html and reactjs."
      },
      {
        id: uuid(),
        text: "Developed Multiple Module using ReactJS and Bootstrap 5"
      },
      {
        id: uuid(),
        text: "Maintained and updated the project using gulp and pug and reactjs."
      },
      {
        id: uuid(),
        text: "Implemented Full Calendar for Calendar view."
      },
    ]
  },
  {
    id: uuid(),
    category: ["html", "css", "pug", "bootstrap", "javascript"],
    title: "Sparrow",
    thumbnail: "/assets/images/projects/sparrow/1.webp",
    masonryImage: "/assets/images/projects/sparrow/large_1.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/sparrow/1.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/sparrow/2.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/sparrow/3.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/sparrow/4.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/sparrow/5.webp"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/sparrow/6.webp"
      }
    ],
    projectTitle: "Sparrow",
    language: ["Html", "css", "Pug", "Bootstrap", "JavaScript"],
    link: "https://prium.github.io/twbs-sparrow/v2.5.0/index.html",
    description: [
      {
        id: uuid(),
        text: "Sparrow is a template for Bootstrap Template."
      },
      {
        id: uuid(),
        text: "Developed Multiple Module using Html, Css, Pug and Bootstrap 5"
      },
      {
        id: uuid(),
        text: "Maintained and updated the project using gulp and pug."
      },
    ]
  },
  {
    id: uuid(),
    category: ["html", "css", "pug", "bootstrap", "javascript"],
    title: "POSH",
    thumbnail: "/assets/images/projects/posh/posh_1.png",
    masonryImage: "/assets/images/projects/posh/posh.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_5.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_6.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_7.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/posh/posh_8.png"
      }
    ],
    projectTitle: "POSH",
    language: ["Html", "css", "Pug", "Bootstrap", "JavaScript"],
    link: "https://prium.github.io/tryposh/index.html",
    description: [
      {
        id: uuid(),
        text: "Posh is a template for Bootstrap marketplace. Where a user can download this, use and modify the code to develop their own."
      },
      {
        id: uuid(),
        text: "Created Responsive Bootstrap Template for Bootstrap Market Place"
      },
      {
        id: uuid(),
        text: "Worked on creating Project using gulp and pug."
      },
      {
        id: uuid(),
        text: "Implemented SwiperJs for sliders."
      },
      {
        id: uuid(),
        text: "Implemented Bootstrap component classes for accordion, button and forms."
      },
      {
        id: uuid(),
        text: "Implemented Lightbox using BigPicture"
      },
      {
        id: uuid(),
        text: "Implemented Isotope-Layout for Masonry Layout"
      }
    ]
  },
  {
    id: uuid(),
    category: ["html", "css", "pug", "bootstrap", "javascript"],
    title: "BrainwaveIO",
    thumbnail: "/assets/images/projects/brainwave/brainwave_1.png",
    masonryImage: "/assets/images/projects/brainwave/brainwave.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_5.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_6.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/brainwave/brainwave_7.png"
      }
    ],
    projectTitle: "brainwaveIO",
    language: ["Html", "css", "Pug", "Bootstrap", "JavaScript"],
    link: "https://themewagon.github.io/brainwave-io/v1.0.0/",
    description: [
      {
        id: uuid(),
        text: "Brainwave is a template for Bootstrap marketplace. Where a user can download this, use and modify the code to develop their own."
      },
      {
        id: uuid(),
        text: "Created Responsive Bootstrap Template for Bootstrap Market Place"
      },
      {
        id: uuid(),
        text: "Worked on creating Project using gulp and pug."
      },
      {
        id: uuid(),
        text: "Implemented SwiperJs for sliders."
      },
      {
        id: uuid(),
        text: "Implemented Bootstrap component classes for accordion, button and forms."
      }
    ]
  },
  {
    id: uuid(),
    category: ["html", "css", "pug", "bootstrap", "javascript"],
    title: "Aranyak",
    thumbnail: "/assets/images/projects/aranyak/aranyak_1.png",
    masonryImage: "/assets/images/projects/aranyak/aranyak.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_5.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_6.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/aranyak/aranyak_7.png"
      }
    ],
    projectTitle: "Aranyak",
    language: ["Html", "css", "Pug", "Bootstrap", "JavaScript"],
    link: "https://themewagon.github.io/aranyak/v1.0.0/",
    description: [
      {
        id: uuid(),
        text: "Aranyak is a template for Bootstrap marketplace. Where a user can download this, use and modify the code to develop their own."
      },
      {
        id: uuid(),
        text: "Created Responsive Bootstrap Template for Bootstrap Market Place"
      },
      {
        id: uuid(),
        text: "Worked on creating Project using gulp and pug."
      },
      {
        id: uuid(),
        text: "Implemented SwiperJs for sliders."
      },
      {
        id: uuid(),
        text: "Implemented Bootstrap component classes for accordion, button and forms."
      }
    ]
  },
  {
    id: uuid(),
    category: [
      "svelte",
      "tailwindcss",
      "sveltekit",
      "html",
      "css",
      "typescript"
    ],
    title: "TrMIS",
    thumbnail: "/assets/images/projects/trmis/trmis_1.png",
    masonryImage: "/assets/images/projects/trmis/trmis.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_5.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_6.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_7.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_11.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/trmis/trmis_12.png"
      }
    ],
    projectTitle: "Training Management Information System(TrMIS)",
    language: [
      "Html",
      "css",
      "tailwindcss",
      "svelte",
      "sveltekit",
      "Typescript"
    ],
    link: "https://trmis.inneed.cloud/",
    description: [
      {
        id: uuid(),
        text: "TrMIS website is for Tuberculosis Disease patients awarness and training system. The client was National Tuberculosis Control Program (NTP) and USAID."
      },
      {
        id: uuid(),
        text: "Created fully dynamic responsive website using Svelte, typescript and tailwindcss."
      },
      {
        id: uuid(),
        text: "Worked on responsive design using tailwindcss and carbon-component-svelte."
      },
      {
        id: uuid(),
        text: "Implemented Charts using Chartjs"
      },
      {
        id: uuid(),
        text: "Implemented Maps using leafletjs."
      },
      {
        id: uuid(),
        text: "Implemented Form Validation using Felte and Yup."
      },
      {
        id: uuid(),
        text: "Implemented Svelte store but store management."
      }
    ]
  },
  {
    id: uuid(),
    category: ["vuejs", "vuetify", "html", "css"],
    title: "iPICS",
    thumbnail: "/assets/images/projects/ipics/ipics_1.png",
    masonryImage: "/assets/images/projects/ipics/ipics.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/ipics/ipics_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/ipics/ipics_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/ipics/ipics_3.png"
      }
    ],
    projectTitle: "INFORMATIVE WEBSITE FOR CANCER PATIENT",
    language: ["Html", "css", "vuetify", "vuejs"],
    link: "https://ipics.life/",
    description: [
      {
        id: uuid(),
        text: "iPICS website is for cancer patients awarness and training system. The client was University of North Carolina at Chapel Hill."
      },
      {
        id: uuid(),
        text: "Worked fully dynamic responsive website using VueJS and Vuetify."
      },
      {
        id: uuid(),
        text: "Implemented different module using vuejs"
      }
    ]
  },
  {
    id: uuid(),
    category: ["Astro", "tailwindcss", "html", "css", "typescript"],
    title: "Nokshasemi",
    thumbnail: "/assets/images/projects/nokshasemi/nokshasemi_1.png",
    masonryImage: "/assets/images/projects/nokshasemi/nokshasemi.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/nokshasemi/nokshasemi_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/nokshasemi/nokshasemi_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/nokshasemi/nokshasemi_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/nokshasemi/nokshasemi_4.png"
      }
    ],
    projectTitle: "Training Management Information System(TrMIS)",
    language: ["Html", "css", "tailwindcss", "Astro", "Typescript"],
    link: "https://nokshasemi.com/",
    description: [
      {
        id: uuid(),
        text: "Nokshasemi is a portfolio website for semiconductor design company named Nokhsasemi."
      },
      {
        id: uuid(),
        text: "Created  responsive website using Astro, typescript and tailwindcss."
      },
      {
        id: uuid(),
        text: "Implemented custom email server."
      },
      {
        id: uuid(),
        text: "Implemented Maps using leafletjs."
      },
      {
        id: uuid(),
        text: "Implemented custom form validation."
      }
    ]
  },
  {
    id: uuid(),
    category: ["svelte", "tailwindcss", "html", "css", "typescript"],
    title: "Biz-InNeed",
    thumbnail: "/assets/images/projects/biz_inneed/biz_inneed_1.png",
    masonryImage: "/assets/images/projects/biz_inneed/bizInneed.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/biz_inneed/biz_inneed_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/biz_inneed/biz_inneed_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/biz_inneed/biz_inneed_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/biz_inneed/biz_inneed_4.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/biz_inneed/biz_inneed_5.png"
      }
    ],
    projectTitle: "Business Management for InNeed Intelligence Cloud",
    language: ["Html", "css", "tailwindcss", "svelte", "Typescript"],
    link: "https://bizinneed.com/",
    description: [
      {
        id: uuid(),
        text: "Biz-InNeed is a Business website for InNeed Intelligence Cloud"
      },
      {
        id: uuid(),
        text: "Created  responsive website using svelte, typescript and tailwindcss."
      }
    ]
  },
  {
    id: uuid(),
    category: ["tailwindcss", "html", "css", "javascript"],
    title: "Jp-InNeed",
    thumbnail: "/assets/images/projects/jp_inneed/jp_inneed_1.png",
    masonryImage: "/assets/images/projects/jp_inneed/jpInneed.webp",
    images: [
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/jp_inneed/jp_inneed_1.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/jp_inneed/jp_inneed_2.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/jp_inneed/jp_inneed_3.png"
      },
      {
        id: uuid(),
        imageSrc: "/assets/images/projects/jp_inneed/jp_inneed_4.png"
      }
    ],
    projectTitle: "InNeed Intelligence Cloud for Japan",
    language: ["Html", "css", "tailwindcss", "Javscript"],
    link: "https://jp.inneed.cloud/",
    description: [
      {
        id: uuid(),
        text: "JpInNeed is a portfolio website for InNeed Intelligence cloud for Japan region."
      },
      {
        id: uuid(),
        text: "Created responsive website using html, css, javascript and tailwindcss."
      },
      {
        id: uuid(),
        text: "Implemented animation using wowjs and animateJs"
      },
      {
        id: uuid(),
        text: "Implemented custom email sertver"
      }
    ]
  }
];
