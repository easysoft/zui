const {tailwind: zuiTailwindConfig} = require('zui-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: process.env.NODE_ENV === 'development' ? [
        './index.html',
        './index.md',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/README.md',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
        ...(process.argv.includes('docs') ? [
            './docs/**/*.{vue,js,ts,jsx,tsx,md}',
            './lib/*/docs/**/*.{vue,js,ts,jsx,tsx,md}',
        ] : []),
    ] : [{raw: ''}],
    presets: [
        zuiTailwindConfig,
    ],
    plugins: [],
};
