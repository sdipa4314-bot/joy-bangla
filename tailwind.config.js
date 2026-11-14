/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090d14',
        surface: {
          DEFAULT: '#0f1523',
          subtle: '#141c2e',
          elevated: '#1a243a',
          border: '#1f2a40',
        },
        shield: {
          emerald: '#10b981',
          danger: '#ef4444',
          warning: '#f59e0b',
          info: '#38bdf8',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
