
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { color: '#ff0000' }, // Red
          '25%': { color: '#00ff00' }, // Green
          '50%': { color: '#0000ff' }, // Blue
          '75%': { color: '#FFFF00' }, // Yellow
          '100%': { color: '#ff0000' } // Back to Red
        }
      },
      animation: {
        colorChange: 'colorChange 5s linear infinite'
      }
    }
  },
  plugins: [],
}

