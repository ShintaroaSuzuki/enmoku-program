module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  options: {
    whitelistPatterns: ["./node_modules/aos/dist/aos.css"]
  }
}
