interface Timelines {
  id: number;
  title: string;
  duration: string;
  description: string;
  type: number;
}

interface Service {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface Images {
  id: string;
  imageSrc: string;
}

interface Description {
  id: string;
  text: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  thumbnail: string;
  masonryImage: string;
  images: Array<Images>;
  projectTitle: string;
  language: Array<string>;
  description: Array<Description>;
  link: string;
}

interface AdminSideNavItem {
  id: string;
  label: string;
  link: string;
}
