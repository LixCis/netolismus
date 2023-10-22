/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tsm': '640px',
      'tmd': '768px',
      'tlg': '1024px',
      'txl': '1280px',
      't2xl': '1536px',
      't3xl': '1840px',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

