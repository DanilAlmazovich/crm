const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [],
  theme: {
    extend: {
      content: {
        star: "'*'",
      },
      width: {
        120: "30rem",
        "14/100": "14%",
        "86/100": "86%",
      },
      fontFamily: {
        sans: ["Inter", "Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          250: "#00c3ff",
          300: "#00acf3",
        },
        gray: {
          700: "#2b2b2b",
          800: "#2a2a2a",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
