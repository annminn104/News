/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  theme: {
    typography: (theme) => ({}),
    extend: {
      dark: {
        css: {
          color: "white",
        },
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
