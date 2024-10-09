/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'my-grey': '#d4be98',
        'my-red': '#ea6962',
        'my-green': '#a9b665',
        'my-blue': '#7daea3',
        'my-orange': '#d8a657',
        'my-pink': '#d3869b',
        'my-teal': '#89b482',
        'light-bg': '#e2d3ba',
        'dark-bg': '#282828',
      },
    },
  },
  plugins: [],
}

