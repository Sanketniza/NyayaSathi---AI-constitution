/**** Tailwind CSS Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        accent: '#6366f1',
        'accent-secondary': '#a5b4fc',
        'surface-primary': '#22223b',
        'surface-secondary': '#2a2a40',
        border: '#3f3f46',
        'text-primary': '#f3f4f6',
        'text-secondary': '#a1a1aa',
        amoled: '#000000',
        sepia: '#f4ecd8',
      },
    },
  },
  plugins: [],
};
