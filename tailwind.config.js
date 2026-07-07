/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#060816',
        'secondary': '#0B1120',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#22d3ee',
        'accent-blue': '#3b82f6',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
        'gradient-dark': 'linear-gradient(135deg, #060816, #0B1120)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(34, 211, 238, 0.8)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
}
