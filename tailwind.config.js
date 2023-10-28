/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background': '#171925',
        'background-dark': '#13151F',
        'background-light': '#1E2239',
        'primary': {
          500: '#A86EFD',
          600: '#49109D',
        },
      },
      boxShadow: {
        'low': '0px 0px 25px 0px rgba(116, 41, 182, 0.39)',
      },
      dropShadow: {
        'low': '0px 0px 25px 0px rgba(116, 41, 182, 0.39)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };
      addUtilities(newUtilities)
    },
  ],
}
