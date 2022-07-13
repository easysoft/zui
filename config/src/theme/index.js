const {useColorVars} = require('./use-color-vars');
const fontSize = require('./font-size');
const variables = require('./variables');

module.exports = {
    colors: useColorVars(),
    fontSize,
    variables,
};
