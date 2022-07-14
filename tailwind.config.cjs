const {tailwind: zuiTailwindConfig} = require('@zui/config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: process.env.NODE_ENV === 'development' ? [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ] : [{raw: ''}],
    presets: [
        zuiTailwindConfig,
    ],
    plugins: [],
};
