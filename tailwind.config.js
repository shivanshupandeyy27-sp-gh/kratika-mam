export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: '#0a0d1f', wine: '#5b1230', blush: '#f4b6c2', gold: '#d4af6a', cream: '#f7efe6' },
    fontFamily: { serif: ['"Playfair Display"', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    keyframes: {
      float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
      glow: { '0%,100%': { opacity: '.2' }, '50%': { opacity: '.9' } },
    },
    animation: { float: 'float 6s ease-in-out infinite', glow: 'glow 4s ease-in-out infinite' },
  } },
  plugins: [],
}
