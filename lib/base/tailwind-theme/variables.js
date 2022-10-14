const colors = require('./colors');
const borderRadius = require('./border-radius');
const boxShadow = require('./box-shadow');
const fontSize = require('./font-size');

// see https://github.com/mertasan/tailwindcss-variables
module.exports = {
    DEFAULT: {
        color: colors,
        radius: borderRadius,
        shadow: boxShadow,
        space: '0.25rem',
        'root-font-size': fontSize.root,
    },
};
