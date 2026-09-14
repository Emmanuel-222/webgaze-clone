/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-brand': '#E01B24',
        'red-dark': '#c4161e',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#101010',
        'dark-elevated': '#111',
        'dark-muted': '#9a9a92',
        'dark-border': '#292929',
        'light-bg': '#f4f4f1',
        'light-muted': '#b0b0a8',
        'light-border': '#cfcfca',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
      },
      maxWidth: {
        'wide': '1320px',
      },
    },
  },
  plugins: [],
}
