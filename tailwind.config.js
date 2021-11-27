module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        900: '#7180BF',
        100: '#7180BF',
      },
      black: {
        900: '#000000',
        600: '#4B4B4B',
      },
      gray: {
        600: '#D8D8D8',
        200: '#707070',
      },
      yellow: {
        900: '#D8BD5E',
      },
      indigo: {
        100: '#CBD0E1',
      },
      white: '#ffffff',
      green: '#4D8355',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        head: ['Manrope', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
