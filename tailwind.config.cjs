const minimist = require('minimist');
const {tailwind: zuiTailwindConfig} = require('zui-config');

/** @type {import('tailwindcss').Config} */
const config = {
    content: process.env.NODE_ENV === 'development' ? [
        './index.html',
        './index.md',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/README.md',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ] : [{raw: ''}],
    presets: [
        zuiTailwindConfig,
    ],
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
    prefix: '-',
};

const argv = minimist(process.argv.slice(4));
if (argv.noPreflightStyle) {
    config.corePlugins = {
        preflight: false,
    };
}

module.exports = config;
