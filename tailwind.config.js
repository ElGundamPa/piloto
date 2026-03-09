/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores: azules, naranjas y blanco
        primary: {
          50: '#eef2fa',
          100: '#c9d5f0',
          200: '#a4b8e5',
          300: '#7f9bdb',
          400: '#5a7ed0',
          500: '#2D4E9E',
          600: '#254080',
          700: '#1c3163',
          800: '#132245',
          900: '#0a1228',
        },
        secondary: {
          50: '#fef3ec',
          100: '#fcd9c4',
          200: '#fabe9b',
          300: '#f8a473',
          400: '#f6894a',
          500: '#E8722A',
          600: '#c45f22',
          700: '#9f4c1a',
          800: '#7b3a13',
          900: '#56280d',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'], // Unificar con Inter
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
