const colors = require('./colors');
const borderRadius = require('./border-radius');
const fontSize = require('./font-size');
const fontFamily = require('./font-family');
const variables = require('./variables');
const {colorToVars} = require('./color-to-vars');

module.exports = {
    colors: colorToVars(colors),
    fontSize,
    fontFamily,
    borderRadius,
    variables,
};
