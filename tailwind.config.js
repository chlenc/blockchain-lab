module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },

      colors: {
        'dark': {
          950: '#0e1012',
          900: '#19181F',
          800: '#1E1B24',
          700: '#23202A',
          600: '#333139',
          500: '#4f4d55',
          400: '#999cb4',
          300: '#C2C6DD',
          200: '#d3d2d4',
          100: '#e9e9ea',
        }
      },

      width: {
        '18': '4.5rem',
        '9/10': '90%',
      },

      height: {
        '18': '4.5rem',
      },

      inset: {
        '-25': '-6.25rem',
      },

      padding: {
        '18': '4.5rem',
        '23/50': '46%',
        '11/12': '91.666667%',
        '3/2': '150%',
      },

      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  variants: {
    width: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
}
