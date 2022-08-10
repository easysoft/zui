const {tailwind: zuiTailwindConfig} = require('zui-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{vue,js,ts,jsx,tsx,md}',
        './.vitepress/**/*.{vue,js,ts,jsx,tsx,md}',
        '!node_modules',
        '!public',
    ],
    presets: [
        zuiTailwindConfig,
    ],
    prefix: '-',
};
