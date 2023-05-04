const colors = require('./colors.cjs');
const borderRadius = require('./border-radius.cjs');
const boxShadow = require('./box-shadow.cjs');
const fontSize = require('./font-size.cjs');
const fontFamily = require('./font-family.cjs');
const variables = require('./variables.cjs');
const screens = require('./screens.cjs');
const {toVars} = require('./to-vars.cjs');

module.exports = {
    extend: {
        colors: toVars(colors),
        fontSize,
        fontFamily,
        borderRadius: toVars(borderRadius, 'radius'),
        boxShadow: toVars(boxShadow, 'shadow'),
        screens: toVars(screens, 'screen'),
        variables,
    },
};
