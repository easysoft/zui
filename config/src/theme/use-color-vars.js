const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');
const colors = require('./colors');

function convertColorToVariabels(colorObject, parentName = 'color', vars = {}) {
    Object.keys(colorObject).forEach(name => {
        const value = colorObject[name];
        if (!value) {
            return;
        }
        const varName = String(name).replace(/([A-Z])/g, '-$1').toLowerCase();
        if (typeof value === 'object') {
            vars[name] = convertColorToVariabels(value, `${parentName}-${varName}`);
        } else {
            vars[name] = colorVariable(`--${parentName}-${varName}`);
        }
    });
    return vars;
}

function useColorVars() {
    return convertColorToVariabels(colors);
}

module.exports = {
    useColorVars,
};
