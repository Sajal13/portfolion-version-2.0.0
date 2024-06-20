import type { Config } from "tailwindcss";
import { colors } from "./colors.config";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { ...colors },
    },
    keyframes: {
      slideup: {
        '0%': {
          bottom: '0%',
        },
        '100%': {
          bottom: '110%'
        }
      }
    },
    animation: {
      slideup: "slideup 10s linear infinite"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '5rem',
      }
    }
  },
  plugins: [],
};
export default config;
