/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earlgrey: 'rgb(85, 84, 82)',
        mickeygrey: 'rgb(193, 193, 193)',
        cheeseyellow: 'rgb(253, 204, 75)',
        toothwhite: 'rgb(250, 250, 250)',
        backgroundgrey: 'rgb(230, 233, 235)',
      }
    }
  },
  plugins: [],
}

