const {tailwind: zuiTailwindConfig} = require('@zui/config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    presets: [
        zuiTailwindConfig,
    ],
    plugins: [],
};
