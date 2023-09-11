/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      earlgrey: 'rgb(85, 83, 83)',
      mickeygrey: 'rgb(193, 193, 193)',
      cheeseyellow: 'rgb(253, 204, 75)'
    }
  },
  plugins: [],
}

