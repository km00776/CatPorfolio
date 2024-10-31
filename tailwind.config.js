/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to your components where Tailwind classes are used
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}, // Use this to extend Tailwind's default theme
  },
  plugins: [], // Any additional plugins can be added here
};
