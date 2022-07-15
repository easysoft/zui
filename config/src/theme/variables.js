const colors = require('./colors');
const borderRadius = require('./border-radius');
const fontSize = require('./font-size');

module.exports = {
    DEFAULT: {
        color: colors,
        radius: borderRadius,
        'root-font-size': fontSize.root,
    },
};
