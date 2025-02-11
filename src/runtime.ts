import borderRadius from "./border-radius/index.js";
import darkThemeTokens from "./colors/dark.js";
import colors from "./colors/index.js";
import lightThemeTokens from "./colors/light.js";
import spacing from "./spacing/index.js";

const lightColors = {
  ...colors,
  ...lightThemeTokens,
  "error-color": colors.error,
};

const darkColors: Colors = {
  ...lightColors,
  ...darkThemeTokens,
  alpha: {
    ...colors.alpha,
    ...darkThemeTokens.alpha,
  },
};

function parseValue(value: string | number, rem: number) {
  if (typeof value === "number") return value;

  const numberValue = Number.parseFloat(value);
  if (Number.isNaN(numberValue)) {
    console.error("Error while parsing value", value);
    return 0;
  }

  return value.includes("rem") ? numberValue * rem : numberValue;
}

export function getSpacing(inlineRem = 16) {
  return Object.entries(spacing).reduce((acc, [key, value]) => {
    acc[key as keyof Spacing] = parseValue(value, inlineRem);
    return acc;
  }, {} as Spacing);
}

export function getBorderRadius(inlineRem = 16) {
  return Object.entries(borderRadius).reduce((acc, [key, value]) => {
    acc[key as keyof BorderRadius] = parseValue(value, inlineRem);
    return acc;
  }, {} as BorderRadius);
}

export function getColors(theme: SupportedTheme = "light"): Colors {
  return theme === "dark" ? darkColors : lightColors;
}

type SupportedTheme = "light" | "dark";
export type Colors = typeof lightColors;
export type Spacing = Record<keyof typeof spacing, number>;
export type BorderRadius = Record<keyof typeof borderRadius, number>;
