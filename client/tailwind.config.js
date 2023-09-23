/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: 'hsl(var(--color-accent1) / <alpha-value>)',
          2: 'hsl(var(--color-accent2) / <alpha-value>)',
        },
        button: {
          inactive: 'hsl(var(--color-buttoninactive) / <alpha-value>)',
          active: 'hsl(var(--color-buttonactive) / <alpha-value>)',
        },
        earlgrey: 'hsl(0 0% 32.9%)',
        mickeygrey: 'hsl(0 0% 75.7%)',
        cheeseyellow: 'hsl(43 97.8% 64.3%)',
        toothwhite: 'hsl(0 0% 98%)',
        backgroundgrey: 'hsl(0 0% 91.4%)',
        bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)',
        comp: 'hsl(var(--color-comp) / <alpha-value>)',
      },
      scale: {
        '-100': '-1',
    }
    }
  },
  plugins: [],
}

