const colors = require('./colors.cjs');
const darkColors = require('./dark-colors.cjs');
const borderRadius = require('./border-radius.cjs');
const boxShadow = require('./box-shadow.cjs');
const fontSize = require('./font-size.cjs');
const screens = require('./screens.cjs');

// see https://github.com/mertasan/tailwindcss-variables
module.exports = {
    variables: {
        DEFAULT: {
            screen: screens,
            color: colors,
            radius: borderRadius,
            shadow: boxShadow,
            space: '0.25rem',
            'font-size-root': fontSize.root,
            'font-size-page': fontSize.page[1],
        },
        '.dark': {
            color: darkColors,
        },
        '.light-in-dark': {
            color: colors,
        },
    },
    darkVariables: {
        '.dark-auto': {
            color: darkColors,
        },
    },
};
