/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
        bglow: [
          "0 0px 20px rgba(188, 83, 199, 0.8)",
          "0 0px 65px rgba(246, 172, 254, 0.8)"
        ]
      }    
    },
  },
  plugins: [],
}

