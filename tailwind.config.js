/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        wine: { DEFAULT: "#4A0F1A", deep: "#320810" },
        envelope: { DEFAULT: "#58141F", dark: "#420D16", light: "#6B1D2C" },
        terra: { DEFAULT: "#9E242B", btn: "#A82833", light: "#C2454F" },
        gold: { DEFAULT: "#C49A4A", light: "#E2BC72", deep: "#A9772F" },
        blush: { 50: "#FFF8F4", 100: "#FEF4EE", 200: "#FCEEE3", 300: "#FDECE0", 400: "#F7EAE4" },
        cocoa: { DEFAULT: "#3D241E", soft: "#6B4436" },
        ivory: "#FFFEFC",
      },
      fontFamily: {
        names: ["var(--font-names)", "cursive"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        caps: ["var(--font-caps)", "Georgia", "serif"],
        deva: ["var(--font-deva)", "serif"],
      },
      boxShadow: {
        card: "0 18px 40px -18px rgba(120, 50, 30, 0.35)",
        soft: "0 8px 24px -10px rgba(120, 50, 30, 0.28)",
      },
    },
  },
  plugins: [],
};
