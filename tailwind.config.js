/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      backgroundImage: {
        colorful: "url('../public/images/color.avif')",
      },
    },
  },
  plugins: [],
};
