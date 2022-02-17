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
          950: '#0B0B0D',
          900: '#0B0B0D',
          800: '#0B0B0D',
          700: '#2A2A32',
          600: '#3B3B46',
          500: '#4f4d55',
          400: '#999cb4',
          300: '#C2C6DD',
          200: '#d3d2d4',
          100: '#e9e9ea',
        },
        'black': {
          950: '#0B0B0D',
          900: '#0B0B0D',
          800: '#1F1E25',
          700: '#2A2A32',
          600: '#3B3B46',
          500: '#535362',
          400: '#747489',
          300: '#A2A2C0',
          200: '#E3E3FF',
          100: '#ffffff',
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
