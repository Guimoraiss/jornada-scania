/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scania: {
          blue:       '#041E42',
          red:        '#C00000',
          gray:       '#C3CAD4',
          white:      '#FFFFFF',
          yellow:     '#FFC000',
          green:      '#2C5234',
          'green-light': '#94A596',
          beige:      '#CEB888',
          orange:     '#E35205',
          'blue-mid': '#0D3B7A',
          'blue-light':'#1A5FAD',
          'gray-dark': '#4A5568',
          'gray-mid':  '#8A9BB0',
          'bg-dark':   '#020F22',
          'bg-mid':    '#061830',
        }
      },
      fontFamily: {
        'scania': ['ScaniaSans', 'system-ui', 'sans-serif'],
        'scania-headline': ['ScaniaSansHeadline', 'ScaniaSans', 'system-ui', 'sans-serif'],
        'scania-condensed': ['ScaniaSansCondensed', 'ScaniaSans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'truck-move': 'truckMove 0.8s ease-in-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        truckMove: {
          '0%': { transform: 'translateX(-10px)', opacity: '0.5' },
          '60%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(255,192,0,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255,192,0,0.6)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        'factory-gradient': 'linear-gradient(135deg, #020F22 0%, #041E42 50%, #0D3B7A 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
