import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0a",
        "bg-secondary": "#111111",
        "bg-card": "#1a1a1a",
        "bg-card-hover": "#222222",
        "text-primary": "#f0f0f0",
        "text-secondary": "#a0a0a0",
        "text-muted": "#666666",
        "brand-accent": "#00bcd4",
        "brand-accent-hover": "#00e5ff",
        "spartan-bronze": "#b8860b",
        "spartan-red": "#8b2500",
        "spartan-stone": "#1c1917",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1100px",
        narrow: "720px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "spartan-gradient": "spartanGradientShift 18s ease-in-out infinite alternate",
        "spartan-pattern": "spartanPatternMove 40s linear infinite",
        "spartan-glow": "spartanGlowFloat 20s ease-in-out infinite",
        "spartan-shape": "spartanShapeFloat 22s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
      },
      keyframes: {
        spartanGradientShift: {
          "0%": { transform: "scale(1) translate(0, 0) rotate(0deg)" },
          "100%": { transform: "scale(1.1) translate(2%, -2%) rotate(2deg)" },
        },
        spartanPatternMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
        spartanGlowFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "33%": { transform: "translate(3%, 5%) scale(1.05)", opacity: "0.4" },
          "66%": { transform: "translate(-2%, -3%) scale(0.95)", opacity: "0.35" },
        },
        spartanShapeFloat: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(8px, -12px) rotate(5deg)" },
          "50%": { transform: "translate(-5px, 8px) rotate(-3deg)" },
          "75%": { transform: "translate(10px, 5px) rotate(2deg)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "1", top: "6px" },
          "50%": { opacity: "0.3", top: "18px" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
