import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbBriefcase } from "react-icons/tb";
import { MdMiscellaneousServices, MdPermContactCalendar } from "react-icons/md";
import { ImBlogger } from "react-icons/im";



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
    link: "/portfolio",
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
    label: "Blogs",
    link: "/blogs",
    icon: <ImBlogger />,
  },
  {
    id: 6,
    label: "Contact",
    link: "/contact",
    icon: <MdPermContactCalendar />,
  },
];






