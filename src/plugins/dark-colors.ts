import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin.js";

const darkColors = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      bg(value) {
        return {
          "&:is(.dark *)": {
            backgroundColor: value,
          },
        };
      },
      text(value) {
        return {
          "&:is(.dark *)": {
            color: value,
          },
        };
      },
      border(value) {
        return {
          "&:is(.dark *)": {
            borderColor: value,
          },
        };
      },
      outline(value) {
        return {
          "&:is(.dark *)": {
            outlineColor: value,
          },
        };
      },
      ring(value) {
        return {
          "&:is(.dark *)": {
            "--tw-ring-color": value,
          },
        };
      },
      "ring-offset": (value) => ({
        "&:is(.dark *)": {
          "--tw-ring-offset-color": value,
        },
      }),
      accent(value) {
        return {
          "&:is(.dark *)": {
            accentColor: value,
          },
        };
      },
      caret(value) {
        return {
          "&:is(.dark *)": {
            caretColor: value,
          },
        };
      },
      shadow(value) {
        return {
          "&:is(.dark *)": {
            "--tw-shadow-color": value,
          },
        };
      },
      fill(value) {
        return {
          "&:is(.dark *)": {
            fill: value,
          },
        };
      },
      stroke(value) {
        return {
          "&:is(.dark *)": {
            stroke: value,
          },
        };
      },
      decoration(value) {
        return {
          "&:is(.dark *)": {
            textDecorationColor: value,
          },
        };
      },
    },
    {
      values: flattenColorPalette(theme("darkColors")),
      type: "color",
    }
  );
});

export default darkColors;
