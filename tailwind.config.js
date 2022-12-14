/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {colors: {
      'Primary': 'black',
      'PrimaryHover': '#141414',
      'PrimaryActive':'white', /* 272727 */
      'Light' : '#EFF0F9',
      'Danger':"#dc2626",
      'RedText' : "#660000"
     
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },},
  },
  plugins: [],

}
