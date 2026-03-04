import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15803d",
        "dark-green": "#064e3b",
        accent: "#10b981",
        "pale-green": "#f0fdf4",
        "light-gray": "#f8fafc",
      },
    },
  },
  plugins: [],
} satisfies Config;
