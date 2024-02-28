/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxm: { max: "480px" },
      xsm: { min: "481px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      xxl: { min: "1536px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
        },
        secondary: {
          DEFAULT: "#509E2F",
        },
      },
    },
  },
  plugins: [],
};
