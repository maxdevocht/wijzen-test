/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wijzen: ["Wijzen", "sans-serif"],
      },
      colors: {
        //   white: '#',
        //   grey: '#',
        //   black: '#',
        // blue: '#0046C8',
        lightBlue: "#4074d6",
        //   red: '#',
        //   yellow: '#',
        //   green: '#',
        //   orange: '#',
        //   purple: '#',
        //   pink: '#',
      },
      backgroundImage: {
        bgImg: "url('.assets/bg-img.svg')",
      },
    },
  },
  plugins: [],
};
