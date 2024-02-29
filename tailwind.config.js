/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      backgroundImage: {
        'wallpaper-1': "url('img/wallpaper.jpg')",
      },
      boxShadow: {
        'inner-wallpaper': 'inset 0 0px 64px rgba(0, 0, 0, 1)',
      },
    }
  },
  plugins: [],
}