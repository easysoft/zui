const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');

function colorToVars(colorObject, parentName = 'color', vars = {}) {
    Object.keys(colorObject).forEach(name => {
        const value = colorObject[name];
        if (!value) {
            return;
        }
        const varName = String(name).replace(/([A-Z])/g, '-$1').toLowerCase();
        if (typeof value === 'object') {
            vars[name] = colorToVars(value, `${parentName}-${varName}`);
        } else {
            vars[name] = value.startsWith('#') ? colorVariable(`--${parentName}-${varName}`) : `var(--${parentName}-${varName})`;
        }
    });
    return vars;
}

module.exports = {
    colorToVars,
};
