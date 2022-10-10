const colors = require('./colors');
const borderRadius = require('./border-radius');
const boxShadow = require('./box-shadow');
const fontSize = require('./font-size');
const fontFamily = require('./font-family');
const variables = require('./variables');
const {toVars} = require('./to-vars');

module.exports = {
    colors: toVars(colors),
    fontSize,
    fontFamily,
    borderRadius: toVars(borderRadius, 'radius'),
    boxShadow: toVars(boxShadow, 'shadow'),
    variables,
};
