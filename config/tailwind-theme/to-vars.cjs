const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');

function toVars(colorObject, parentName = 'color', vars = {}) {
    Object.keys(colorObject).forEach(name => {
        const value = colorObject[name];
        if (!value) {
            return;
        }
        const varName = name === 'DEFAULT' ? '' : String(name).replace(/([A-Z])/g, '-$1').toLowerCase();
        const fullVarName = varName ? `${parentName}-${varName}` : parentName;
        if (typeof value === 'object') {
            vars[name] = toVars(value, `${fullVarName}`);
        } else {
            vars[name] = value.startsWith('#') ? colorVariable(`--${fullVarName}`) : `var(--${fullVarName})`;
        }
    });
    return vars;
}

module.exports = {
    toVars,
};
