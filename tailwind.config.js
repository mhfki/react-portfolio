/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "logo-spin": "logo-spin 5s linear infinite",
      },
      keyframes: {
        "logo-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "radial-custom": "radial-gradient(circle, #0C2149, #211F3B)",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        exo: ["Exo_2 variant0", "Tofu"],
      },
      colors: {
        primary: "#2FB595",
        secondary: "#040818",
      },
    },
  },
  plugins: [],
}
