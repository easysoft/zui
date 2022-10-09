/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './_/**/*.{vue,js,ts,jsx,tsx,md}',
        './_/.vitepress/**/*.{vue,js,ts,jsx,tsx,md}',
        '!node_modules',
        '!public',
    ],
    presets: [
        require('../lib/base/tailwind.cjs'),
    ],
    prefix: '-',
};
