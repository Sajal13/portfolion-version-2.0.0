import React, {PropsWithChildren} from 'react'
import { Metadata } from 'next'

const metaData: Metadata = {
  title: "Sajal Das || Log in",
  description:
    "Explore the professional portfolio of Sajal Das, a skilled Front-End Developer with expertise in React, Next.js, JavaScript, and modern web technologies. Discover projects, case studies, and the creative journey of a developer passionate about building responsive, user-friendly web applications.",
  keywords:
    "Sajal Das, Front-End Developer, React Developer, Next.js, JavaScript, Portfolio, Web Development, Responsive Design, Modern Web Technologies, HTML, CSS, TypeScript, SCSS, Tailwind CSS, Git, GitHub, Node.js, MongoDB, Firebase",
};



const LoginLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default LoginLayout