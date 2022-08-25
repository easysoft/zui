const {tailwind: zuiTailwindConfig} = require('zui-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './_/**/*.{vue,js,ts,jsx,tsx,md}',
        './_/.vitepress/**/*.{vue,js,ts,jsx,tsx,md}',
        '!node_modules',
        '!public',
    ],
    presets: [
        zuiTailwindConfig,
    ],
    prefix: '-',
};
