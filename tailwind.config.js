/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // background: "rgba(var(--background))",
        // text: "rgba(var(--text))",
        "custom-light": "rgb(var(--custom-light))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "--custom-light": "0,0,0", // Add your custom color
          ...require("daisyui/src/theming/themes")["light"], // Keep the default light theme colors
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "--custom-light": "255,255,255", // Add your custom color
        },
      },
    ],
  },
};
