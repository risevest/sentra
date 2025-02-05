import plugin from "tailwindcss/plugin.js";

const typography = plugin(({ theme, matchUtilities }) => {
  matchUtilities(
    {
      "text-body": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.bodyFont", "'Work Sans'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1] + "rem",
          letterSpacing: value[2] + "em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: body,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-alt-body": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.altBodyFont", "'Tomato Grotesk'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1] + "rem",
          letterSpacing: "-0.01em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: altBody,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-headline": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.headingFont", "'Tomato Grotesk'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1] + "rem",
          letterSpacing: "-0.01em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: headline,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-display": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.headingFont", "'Tomato Grotesk'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1] + "rem",
          letterSpacing: "-0.01em",
          fontWeight: modifier || 500,
        };
      },
    },
    {
      values: display,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      text: (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.bodyFont", "'Work Sans'"),

          fontSize: value[0] + "rem",
          lineHeight: value[1] + "rem",
          letterSpacing: value[2] + "em",
          fontWeight: modifier || value[3],
        };
      },
    },
    {
      values: others,
      modifiers: theme("fontWeight"),
    }
  );
});

const body = {
  "button-text": [0.875, 1, -0.04],
  "paragraph-large": [1, 1.5, -0.04],
  "paragraph-medium": [0.875, 1.5, -0.04],
  large: [1, 1.5, -0.03],
  medium: [0.875, 1.25, -0.03],
  small: [0.75, 1, -0.02],
  "labels-large": [0.875, 1.25, 0.16],
  "labels-medium": [0.75, 1, 0.16],
  "labels-small": [0.625, 0.875, -0.02],
  "labels-alt-small": [0.625, 0.875, 0.16],
} as const;

const altBody = {
  large: [1, 1.875],
  "mid-weight": [0.875, 1],
  small: [0.75, 0.875],
  label: [0.625, 0.75],
};

const headline = {
  xxl: [3, 3.625],
  "mid-xl": [2.25, 2.625],
  xl: [2, 2.375],
  "mid-large": [1.75, 2.125],
  large: [1.5, 1.8125],
  mw: [1.25, 1.5],
  small: [1.125, 1.375],
};

const display = {
  small: [3.5, 67],
  md: [4, 77],
  large: [72, 86],
};

const others = {
  "tag-text": [0.75, 1.25, 0.1, 500],
  small: [0.75, 1.1875, -0.04, 400],
  caption: [0.75, 0.875, -0.03, 500],
};
export default typography;
