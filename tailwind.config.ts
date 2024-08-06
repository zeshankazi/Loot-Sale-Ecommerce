import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 colors:{
  primeColor:"#262626",
  lightText: "#6D6D6D"
 },
 boxShadow:{
  testShadow:"0px 0px 54px -13px rgb(0,0,0,0.7)"
 }
    },
  },
  plugins: [],
};
export default config;
