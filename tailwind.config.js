/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumina: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9ccff',
          300: '#8aaaff',
          400: '#5a82ff',
          500: '#3a5bff',
          600: '#2238f5',
          700: '#1a28e0',
          800: '#1820b5',
          900: '#18208f',
          950: '#111455',
        },
        accent: {
          50:  '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc271',
          400: '#ff9e38',
          500: '#ff8010',
          600: '#f06406',
          700: '#c74a07',
          800: '#9e3b0e',
          900: '#7f320f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'lumina-gradient': 'linear-gradient(135deg, #111455 0%, #1a28e0 60%, #3a5bff 100%)',
        'hero-mesh': 'radial-gradient(at 30% 20%, #3a5bff33 0px, transparent 50%), radial-gradient(at 80% 80%, #ff801033 0px, transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
