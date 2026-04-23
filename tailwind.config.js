export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#746e30ff",
      },
    },
  },
 plugins: [require('tailwind-scrollbar-hide')],
};