/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",      // HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // JS and JSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#023c73",
        secondary: "#05669f",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
