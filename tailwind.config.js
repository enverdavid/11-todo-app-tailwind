module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      white: "#ffffff",
      black: "#000000",
      main_green: "#38A3A5",
      second_green: "#57CC99",
      third_green: "#80ED99",
      iron_blue: "#22577A",
      transparent: "transparent"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
