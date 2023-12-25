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
        base: {
          400: "#0A070B",
          300: "#363536",
          200: "#4F4E50",
          100: "#E8ECEF",
        },
        brand: {
          red: "#F41B3B",
          green: "#1EBC99",
          yellow: "#F9CC0D",
          blue: "#1884F7",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
