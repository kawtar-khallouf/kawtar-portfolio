/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#070a13", // Very dark deep space blue-black
          card: "rgba(13, 18, 33, 0.7)", // Transparent glassmorphic card base
          input: "rgba(20, 27, 47, 0.5)",
        },
        brand: {
          indigo: "#6366f1", // Sleek indigo accent
          violet: "#8b5cf6", // Purple/violet highlight
          teal: "#0d9488", // Teal/emerald for stats and highlights
          slate: "#f1f5f9", // Crisp text
          muted: "#64748b", // Muted text
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-inset": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        glow: "0 0 40px rgba(99, 102, 241, 0.12)",
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}
