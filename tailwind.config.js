/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E6E7ED',
          100: '#C2C4D1',
          200: '#9A9DB5',
          300: '#727699',
          400: '#4A4F7D',
          500: '#1B1464',
          600: '#161153',
          700: '#110E42',
          800: '#0C0A31',
          900: '#070620',
        },
        flame: {
          50: '#FFF5F5',
          100: '#FFE9E9',
          200: '#FFD3D3',
          300: '#FFB6B6',
          400: '#FF8F8F',
          500: '#FF6B6B',
          600: '#FF4242',
          700: '#FF1919',
          800: '#EF0000',
          900: '#C60000',
        },
        sun: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FFD93D',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        grass: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#6AB04A',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
