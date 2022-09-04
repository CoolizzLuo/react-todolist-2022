/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'linear-gradient(172.7deg, #ffd370 5.12%, #ffd370 53.33%, #ffd370 53.44%, #ffffff 53.45%, #ffffff 94.32%)'
      }
    },
  },
  plugins: [],
}
