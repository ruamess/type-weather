/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/Background.svg')",
      },
      colors: {
        'blue-light': '#8FB2F5',
        'gray-900': '#13131A',
        'gray-800': '#16161F',
        'gray-700': '#1C1C27',
        'gray-600': '#22222F',
        'gray-500': '#3B3B54',
        'gray-400': '#7F7F98',
        'gray-300': '#ABABC4',
        'gray-200': '#BFBFD4',
        'gray-100': '#FAFAFA'
      },
    }
  },
  plugins: [],
}