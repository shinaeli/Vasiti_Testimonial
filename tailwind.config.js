module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222222',
        navlink: '#ff5c00',
        goldText: '#e5e5e5',
        blueText: '#0D019A',
        greenText: '#049a01',
      },
      screens: {
        'sm': {'min': '360px', 'max': '480px'},
        'md': {'min': '481px', 'max': '768px'},
        'lg': {'min': '769px', 'max': '1024px'},
        'xl': {'min': '1025px', 'max': '1200px'},
        '2xl': {'min': '1201px'},
      }
    },
  },
  plugins: [],
}
