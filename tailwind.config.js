/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kuadra: {
          naranja: '#FF6435',
          rojo: '#A2003C',
          negro: '#0C0C0C',
          blanco: '#FFFFFF',
        },
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}