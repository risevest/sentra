import preset from "./dist";
/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ["./src/**/*.ts", "./README.md"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {},
      darkColors: {},
      typography: {},
    },
  },
};
