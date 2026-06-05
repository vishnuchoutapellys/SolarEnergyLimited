import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        solar: {
          blue: {
            DEFAULT: "#1A3C6E", // Deep Navy
            light: "#2563EB",   // Bright Blue
            dark: "#0F172A",    // Slate Dark
            soft: "#EFF6FF",    // Soft blue background
          },
          orange: {
            DEFAULT: "#F97316", // Vibrant Orange
            dark: "#EA580C",    // Rich dark orange
            light: "#FFEDD5",   // Soft orange highlight
          },
          green: {
            DEFAULT: "#10B981", // Accent Green (Eco status)
            dark: "#059669",
          }
        }
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-ring": "pulse-ring 1.25s cubic-bezier(0.215, 0.610, 0.355, 1) infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(249, 115, 22, 0.4)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 12px rgba(249, 115, 22, 0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(249, 115, 22, 0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
