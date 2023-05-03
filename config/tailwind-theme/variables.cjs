const colors = require('./colors.cjs');
const darkColors = require('./dark-colors.cjs');
const borderRadius = require('./border-radius.cjs');
const boxShadow = require('./box-shadow.cjs');
const fontSize = require('./font-size.cjs');

// see https://github.com/mertasan/tailwindcss-variables
module.exports = {
    DEFAULT: {
        color: colors,
        radius: borderRadius,
        shadow: boxShadow,
        space: '0.25rem',
        'font-size-root': fontSize.root,
        'font-size-page': fontSize.page,
    },
    '.dark': {
        color: darkColors,
    },
};
