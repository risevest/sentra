import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin.js";

const colorsPlugin = plugin(function ({ matchUtilities, theme, addUtilities }) {
  matchUtilities(
    {
      "text-var": (value) => {
        return {
          color: value,
          "--color": value,
        };
      },
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: "color",
    }
  );

  addUtilities({
    ".text-var": {
      color: "var(--color)",
    },
    ".fill-var": {
      fill: "var(--color)",
    },
    ".stroke-var": {
      stroke: "var(--color)",
    },
  });
});

export default colorsPlugin;
