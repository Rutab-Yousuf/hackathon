import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'mob': '0px',
      'tab': '481px',
      'lap': '769px',
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'grey-text': '#737373',
        'dark-blue': '#252B42',
        'sky-blue' : '#23A6F0',
        'light-grey': '#ECECEC',
        'green' : '#14AE5C',
        'off-white': '#FAFAFA',
        'dark-green': '#23856D',
        'orange': '#E77C40',
        
      },
    },
  },
  plugins: [],
} satisfies Config;
