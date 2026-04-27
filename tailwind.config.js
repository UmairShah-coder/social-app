export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7e1f1fff",
      },
    },
  },
 plugins: [require('tailwind-scrollbar-hide')],
};