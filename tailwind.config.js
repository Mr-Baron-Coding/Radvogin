/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**.html",
  "./src/**/*.{html,js,tsx}",
  "./src/Comp/*.{html,js,tsx}",
],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'mike': {
        'bgLight': '#ffffff',
        'backgroundDark': '#111111',
        'fontLight': '#ffffff',
        'fontDark': '#111111'
      },
    },
    // fontFamily: {
    //   'fam': 'Noto Sans, sans-serif',
    //   'Radbo': 'Righteous, cursive',
    //   'RadboHeb': 'Varela Round, sans-serif'
    // },
    extend: {
      backgroundImage: {
        'articaleOne': "url('/src/Images/articaleOne.jpg')",
        'articaleTwo': "url('/src/Images/articaleTwo.jpg')",
        'articaleThree': "url('/src/Images/articaleThree.jpg')",
        'articaleFour': "url('/src/Images/articaleFour.jpg')",
      },
    },
  },
  plugins: [],
}
