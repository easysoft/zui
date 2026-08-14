/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './_/.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}',
        './_/.vitepress/*.{js,ts}',
        './_/**/*.md',
    ],
    theme: require('../config/tailwind-theme/index.cjs'),
    prefix: '-',
};
