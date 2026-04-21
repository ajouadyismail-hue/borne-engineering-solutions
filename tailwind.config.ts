import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terracotta Claude
        primary: {
          DEFAULT: "#D97757",
          dark:    "#C4623C",
          light:   "#FEF4EF",
          mid:     "#FCE0D0",
          border:  "#F8C4AE",
        },
        // Vert validation (inchangé)
        green: {
          DEFAULT: "#10B981",
          light:   "#ECFDF5",
          mid:     "#D1FAE5",
          border:  "#6EE7B7",
        },
        // Palette fond chaud — style Claude
        navy:      "#1C1917",   // warm black
        ink:       "#292524",   // légèrement chaud
        muted:     "#78716C",   // warm gray
        soft:      "#A8A29E",   // lighter warm gray
        border:    "#E7E5E4",   // warm border
        surface:   "#F5F2ED",   // crème léger
        "surface-2":"#EDE9E3", // crème plus marqué
        cream:     "#FAF9F7",   // fond principal off-white
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        syne:    ["var(--font-poppins)", "sans-serif"],
        dm:      ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card:        "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":"0 6px 24px rgba(217,119,87,0.14)",
        btn:         "0 2px 6px rgba(217,119,87,0.35)",
        "btn-green": "0 2px 6px rgba(16,185,129,0.3)",
      },
      animation: {
        "float":     "float 4s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":      { transform: "scale(1.4)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
