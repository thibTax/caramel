/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {colors: {
      'Primary': 'black',
      'PrimaryHover': '#141414',
      'PrimaryActive':'white', /* 272727 */
      'Light' : '#EFF0F9',
     
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },},
  },
  plugins: [],

}
