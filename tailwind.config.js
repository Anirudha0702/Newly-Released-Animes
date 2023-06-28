// import {  Config } from "tailwindcss";
// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }