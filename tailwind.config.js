/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom1': '#144EAC',
        'custom2' : '#F9F9FB',
        'custom3' : '#F4F4F4'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

