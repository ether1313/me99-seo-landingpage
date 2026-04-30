/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          me99: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
            950: '#431407',
            gold: '#F59E0B',
            amber: '#D97706',
            deep: '#B45309',
          },
        },
        fontFamily: {
          display: ['Outfit', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
        animation: {
          'gradient-flow': 'gradientFlow 6s ease infinite',
          'float': 'float 6s ease-in-out infinite',
          'float-slow': 'floatSlow 8s ease-in-out infinite',
          'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
          'shimmer': 'shimmer 2.5s linear infinite',
          'light-trail': 'lightTrail 4s ease-in-out infinite',
          'spin-slow': 'spin 12s linear infinite',
        },
        keyframes: {
          gradientFlow: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          floatSlow: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-15px) rotate(3deg)' },
          },
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3), 0 0 60px rgba(249, 115, 22, 0.1)' },
            '50%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.5), 0 0 100px rgba(249, 115, 22, 0.2)' },
          },
          shimmer: {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
          lightTrail: {
            '0%': { transform: 'translateX(-100%) rotate(0deg)', opacity: '0' },
            '10%': { opacity: '1' },
            '90%': { opacity: '1' },
            '100%': { transform: 'translateX(100vw) rotate(360deg)', opacity: '0' },
          },
        },
      },
    },
    plugins: [],
  }