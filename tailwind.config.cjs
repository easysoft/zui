const colors = require('tailwindcss/colors');
const config = require('@zui/config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        colors: {
            transparent: colors.transparent,
            current: colors.current,
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            ...config.shades,
        },
    },
    plugins: [],
};
