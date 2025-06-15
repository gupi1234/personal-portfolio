// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkTheme: 'var(--bg-color)',
        darkHover: 'var(--dark-hover)',
        lightHover: 'var(--light-hover)',
      },
      boxShadow: {
        blackCustom: 'var(--Black)',
        whiteCustom: 'var(--White)',
      },
    },
  },
  plugins: [],
};
