const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Ovo: ["Ovo", "serif"],
    },
  },
};

export default config;
