import gridAreas from "@savvywombat/tailwindcss-grid-areas";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          "nav header header",
          "nav    main   task",
          "nav    main   task",
        ],
        countLayout: ["count     count", "count1     count2"],
      },
      gridTemplateColumns: {
        layout: "15rem 1fr 20rem",
        countLayout: "1fr 1fr",
      },
      gridTemplateRows: {
        layout: "5rem 85vh 2rem",
        countLayout: "1fr 1fr",
      },
    },
  },
  plugins: [
    gridAreas,
    plugin(function ({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.2xl"),
          // fontWeight: config("theme.fontWeight.700"),
        },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") },
      });
    }),
  ],
};
