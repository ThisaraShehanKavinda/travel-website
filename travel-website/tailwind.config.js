/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure that Tailwind CSS looks at your JSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5733',
        secondary: '#4caf50',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}

