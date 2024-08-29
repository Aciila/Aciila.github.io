import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': ' linear-gradient(to bottom, rgba(83,236,203,0.8071603641456583) 0%, rgba(122,231,207,0.7567401960784313) 21%, rgba(255,255,255,1) 100%);',
      },
    },
    screens: {
      'mobile': {
        max: "768px"
      },
      'tablets': '769px',
      ...defaultTheme.screens,
    }
  },
  darkMode: 'media',
  plugins: [],
};
export default config;
