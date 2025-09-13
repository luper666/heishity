import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': '#0D1117',
        'surface': '#161B22',
        'primary': '#D4AF37',
        'primary-hover': '#EACD65',
        'text-main': '#E6EDF3',
        'text-secondary': '#8B949E',
        'border': '#30363D',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  // V-- 这里是新增的部分 --V
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // ^-- 这里是新增的部分 --^
};
export default config;