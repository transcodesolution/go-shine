tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#4E273A', // Main  purple
        pink: {
          950: '#4E273A', // Primary accents, highlights
          50: "#F6E4EB" // Light pink for backgrounds, borders
        },
        gray: {
          600: '#737373', // placeholder text,
          400: '#A0A0A0',
          300: '#EDEDED', // Light gray for backgrounds, borders
          200: "#C6C6C6", // Light gray for text disables
        },
        yellow: {
          700: '#EB9C73', // Accent button 
        },
        black: {
          900: '#190C12', // Strong body text
        },
        green: {
          500: "#00852C" // Success messages, notifications
        },
        red: {
          500: "#FF0004", // Error messages, notifications
        }
      },

      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1240px',
          xl: '1240px',
        },
      },
      fontsize: {
        '4xl': '32px',
      }
    },
    plugins: [],
  }
}
