/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      header: ['Mulish', 'sans-serif'],
      body: ['Space Mono', 'monospace'],
    },
    colors: {
      'deep': '#222831',
      'shallow': '#393E46',
      'accent': '#FFD369',
      'white': '#EEEEEE'
    },
    extend: {},
  },
  plugins: [],
}

