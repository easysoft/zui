const {useColorVars} = require('./use-color-vars');
const borderRadius = require('./border-radius');
const fontSize = require('./font-size');
const variables = require('./variables');

module.exports = {
    colors: useColorVars(),
    fontSize,
    borderRadius,
    variables,
};
