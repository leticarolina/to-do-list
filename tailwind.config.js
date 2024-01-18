/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      backgroundImage: {
        colorful: "url('../public/images/color.avif')",
      },
      colors: {
        buttons: "#a855f7",
      },
      screens: {
        md: "641px",
      },
    },
  },
  plugins: [],
};
