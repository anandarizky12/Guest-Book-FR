// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'bps_login' : "url('https://webapi.bps.go.id/consumen/assets/img/login-desktop.svg')",
        'bps_about' : "url('/about.jpg')",
        'wave' : "url('/svg.png')",
      }},
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}