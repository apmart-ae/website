import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Metallic Chic palette
        "apm-900":   "#3D52A0",
        "apm-600":   "#7091E6",
        "apm-400":   "#8697C4",
        "apm-200":   "#ADBBDA",
        "apm-050":   "#EDE8F5",
        "apm-ink":   "#11131A",
        "apm-bg":    "#FFFFFF",
        "apm-sale":  "#3D52A0",
        // Semantic aliases
        primary:     { DEFAULT: "#3D52A0", light: "#7091E6", muted: "#8697C4" },
        accent:      "#7091E6",
        surface:     "#F7F8FC",
        muted:       "#8697C4",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px 0 rgba(61,82,160,0.08), 0 4px 16px 0 rgba(61,82,160,0.06)",
        "card-hover": "0 4px 20px 0 rgba(61,82,160,0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
