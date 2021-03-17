module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-img': "url('./img/bg-main-img.png')",
        'img-1': "url('./img/img-1.png')",
      }),
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      transitionProperty: {
        'left': 'left',
        'top': 'top',
        'right': 'right',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
