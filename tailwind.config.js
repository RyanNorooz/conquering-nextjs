module.exports = {
  mode: 'jit',
  darkMode: 'media', // or false or 'class'

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // ...
  ],

  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
