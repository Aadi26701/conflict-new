/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: { "100": "#8e8e94", "200": "rgba(255, 255, 255, 0.2)" },
        whitesmoke: "#eaeaea",
        black: "#000",
        orange: "#f99a0e",
        darkgoldenrod: "#d7860e",
        slategray: "#576074",
        darkslategray: { "100": "#434343", "200": "#424242", "300": "#303030" },
        cornflowerblue: {
          "100": "#1262af",
          "200": "#1262ae",
          "300": "rgba(18, 98, 175, 0.05)",
        },
      },
      fontFamily: { roboto: "Roboto", "baloo-bhai": "'Baloo Bhai'" },
      borderRadius: { "3xs": "10px", "8xl": "27px" },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      sm: "14px",
      "3xl": "22px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "960px" },
      sm: { max: "420px" },
    },
  },
  corePlugins: { preflight: false },
};
