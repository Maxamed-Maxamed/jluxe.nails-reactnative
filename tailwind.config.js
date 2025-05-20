/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/expo-linear-gradient/*.{js,ts,jsx,tsx}",
    "..*/..{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:
      {
         jluxe: {
          pink: '#F8D4E0',       // Soft blush pink
          lavender: '#D4C2FC',   // Light lavender
          purple: '#B28DFF',     // Main purple accent
          plum: '#5C2A72',       // Deep plum for contrast
          rose: '#B76E79',       // Rose gold accent
          white: '#FDFBFB',      // Soft white background
          dark: '#2D1E2F',  
               // Dark purple text
        },
      
        // 'jluxe-purple': '#9C6AFF', // Update with your actual color
        // 'jluxe-dark': '#333333',
        gradientStart: '#F8D4E0',
        gradientEnd: '#B28DFF',
      }
    },
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "..*/..{js,ts,jsx,tsx}",
//     "./public/**/*.{html,js}",

//   ],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {
//       colors:
//       {
//          jluxe: {
//           pink: '#F8D4E0',       // Soft blush pink
//           lavender: '#D4C2FC',   // Light lavender
//           purple: '#B28DFF',     // Main purple accent
//           plum: '#5C2A72',       // Deep plum for contrast
//           rose: '#B76E79',       // Rose gold accent
//           white: '#FDFBFB',      // Soft white background
//           dark: '#2D1E2F',       // Dark purple text
//         },
//         gradientStart: '#F8D4E0',
//         gradientEnd: '#B28DFF',
//       }
//     },
//   },
//   plugins: [],
// }

