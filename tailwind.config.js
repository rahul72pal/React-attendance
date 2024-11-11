module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        title: ['Kadwa', 'sans-serif'] // Ensure 'Kadwa' is spelled correctly and includes a fallback
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1025px' },
      'md': { 'max': '770px' },
      'sm': { 'max': '639px' },
      'esm': { 'max': '380px' },
    }
  },
  plugins: [],
}
