# Sentra

The Design tokens for The Rise Design System 3.0

## Getting Started

To install:

```bash
bun install @risemaxi/sentra
```

Then,

in your `tailwind.config.js`, add it as a preset:

```js
import sentra from "@risemaxi/sentra";

module.exports = {
  presets: [sentra],
};
```

## Usage

```jsx
<View className="text-body-large bg-black-to-white text-white-to-black py-xs px-xl rounded-lg">Hello, world!</View>
```

## Colors

Sentra includes the color token from the design system. To add more colors include it in the `extend` property in your `tailwind.config.js`.
To add dark theme variant of a color token, add a `darkColors` property in the `extend` property.

```js
import sentra from "@risemaxi/sentra";
/** @type {import('tailwindcss').Config} */
export default {
  presets: [sentra],
  content: ["./src/**/*.ts", "./README.md"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "green-to-blue": "#0f0",
      },
      darkColors: {
        "green-to-blue": "#00f",
      },
    },
  },
};
```

In React Native where styles are not inherited and you don't have access to the `currentColor` keyword in CSS. You can use the `text-var-[color]` utility to make the color available to the children. The children can then style based on that.

Example:

```jsx
<View className="text-var-grey-50-700">
  <SVG className="fill-var" />
  <Text className="text-var">I'm Grey!</Text>
</View>
```

## Typography

Sentra includes the RDS typography. It does this by stripping off the font details (family, size, weight, style) and duplicate identifiers on the token.

For example, `Body/Worksans/L/Large 16 Medium` token becomes `text-body-large` after because we've stripped off the `Worksans` (font family), L (duplicate identifier), 16 (font size), medium (font weight).

`Alt-Body/Tomato/Large/Large 16 Medium Slanted` becomes `text-alt-body-large`.

To specify the font weight for a typography variant, use the forward slash modifier to include the font family. For example `Alt-Body/Tomato/Large/Large 16 Medium` becomes `text-alt-body-large/medium`.

And for slanted/italicised variants, use the `italic` utility.

`Alt-Body/Tomato/Large/Large 16 Slanted Semibold` would be represented as `"text-alt-body-large/semibold italic"`.

> Note that the typography uses `Tomato Grotesk` for the headline, display and alt-body tokens and `Work Sans` for other body typography. You need to have these set up in your project or configure the font family of the typography as described below.

To change the default font families for the typography, add a `typography` field to your `theme.extend`, then include the `bodyFont`, `headingFont` and `altBodyFont` fields with the font family to use.

```js
import sentra from "@risemaxi/sentra";
/** @type {import('tailwindcss').Config} */
export default {
  presets: [sentra],
  content: ["./src/**/*.ts"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        bodyFont: '"Work Sans"',
        headingFont: '"Clash Grotesk"',
        altBodyFont: '"Work Sans"',
      },
    },
  },
};
```
