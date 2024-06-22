/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          animation: {
              fadeIn: "fadeIn 1.5s ease-in-out",
              fadeLeft: "fadeLeft 2s ease-in-out",
          },
          keyframes: {
              wiggle: {
                  "0%, 100%": { transform: "rotate(-3deg)" },
                  "50%": { transform: "rotate(3deg)" },
              },
              fadeIn: {
                  "0%": {
                      opacity: "0",
                  },
                  "100%": {
                      opactiy: "1",
                  },
              },
              fadeLeft: {
                "0%":{
                  opacity: "0",
                  transform: "translate(-50px)",
                },
                "100%":{
                  opacity: "1",
                  transform: "translate(0)",
                }
              }
          },
      },
  },
  plugins: [],
};
