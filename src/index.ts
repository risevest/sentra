import type { Config } from "tailwindcss";
import borderRadius from "./border-radius/index.js";
import colors from "./colors/index.js";
import darkColors from "./plugins/dark-colors.js";
import darkThemeTokens from "./colors/dark.js";
import lightThemeTokens from "./colors/light.js";
import spacing from "./spacing/index.js";
import typography from "./plugins/typography.js";

const config: Partial<Config> = {
  theme: {
    typography: {
      bodyFont: '"Work Sans"',
      headingFont: '"Tomato Grotesk"',
      altBodyFont: '"Tomato Grotesk"',
    },
    colors,
    spacing,
    borderRadius,
    darkColors: darkThemeTokens,
    extend: {
      colors: {
        ...lightThemeTokens,
      },
    },
  },
  plugins: [darkColors, typography],
};

export default config;
