/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          glassBg: 'rgba(255, 255, 255, 0.3)',
          glassBorder: 'rgba(255, 255, 255, 0.18)',
      },
    },
  },
  plugins: [],
};
