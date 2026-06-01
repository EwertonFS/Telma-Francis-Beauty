import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#c6c6c6",
        "on-primary": "#4e2512",
        "on-surface": "#e5e2e1",
        "on-background": "#e5e2e1",
        "on-tertiary-fixed": "#1b1b1b",
        "surface-container": "#20201f",
        "primary-container": "#c4886e",
        "on-primary-fixed-variant": "#693b26",
        "surface-dim": "#131313",
        "secondary-fixed-dim": "#eabda8",
        "on-secondary-fixed-variant": "#5f4030",
        "primary-fixed": "#ffdbcd",
        "primary-fixed-dim": "#fab79b",
        "on-tertiary-container": "#2f2f2f",
        "surface-container-highest": "#353535",
        "surface-tint": "#fab79b",
        "on-tertiary-fixed-variant": "#474747",
        "error-container": "#93000a",
        "on-primary-container": "#4c2310",
        "on-secondary": "#452a1b",
        "surface-container-low": "#1c1b1b",
        "outline": "#9f8d86",
        "on-primary-fixed": "#341102",
        "secondary": "#eabda8",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "inverse-surface": "#e5e2e1",
        "primary": "#fab79b",
        "secondary-fixed": "#ffdbcb",
        "surface-variant": "#353535",
        "tertiary-container": "#969696",
        "tertiary-fixed": "#e2e2e2",
        "outline-variant": "#52443e",
        "inverse-primary": "#84523b",
        "surface-container-lowest": "#0e0e0e",
        "on-error-container": "#ffdad6",
        "on-secondary-container": "#dbaf9b",
        "surface": "#131313",
        "on-surface-variant": "#d6c2bb",
        "on-secondary-fixed": "#2d1509",
        "tertiary": "#c6c6c6",
        "surface-container-high": "#2a2a2a",
        "on-tertiary": "#303030",
        "background": "#131313",
        "surface-bright": "#393939",
        "inverse-on-surface": "#313030",
        "secondary-container": "#614232"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "base": "8px",
        "md": "24px",
        "xs": "4px",
        "sm": "12px",
        "xl": "80px",
        "gutter": "24px",
        "margin-desktop": "120px",
        "margin-mobile": "20px",
        "lg": "48px"
      },
      fontFamily: {
        "display-lg-mobile": ["var(--font-playfair)"],
        "headline-xl": ["var(--font-playfair)"],
        "body-lg": ["var(--font-manrope)"],
        "label-sm": ["var(--font-manrope)"],
        "body-md": ["var(--font-manrope)"],
        "headline-lg": ["var(--font-playfair)"],
        "display-lg": ["var(--font-playfair)"],
        "GreatVibes": ["var(--font-great-vibes)"],
        "Montserrat": ["var(--font-montserrat)"]
      },
      fontSize: {
        "display-lg-mobile": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "headline-xl": ["48px", { "lineHeight": "56px", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      }
    },
  },
  plugins: [],
};

export default config;
