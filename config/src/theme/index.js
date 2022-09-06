const {useColorVars} = require('./use-color-vars');
const borderRadius = require('./border-radius');
const fontSize = require('./font-size');
const fontFamily = require('./font-family');
const variables = require('./variables');

module.exports = {
    colors: useColorVars(),
    fontSize,
    fontFamily,
    borderRadius,
    variables,
};
