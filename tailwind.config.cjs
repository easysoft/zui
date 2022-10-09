const minimist = require('minimist');
const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: process.env.NODE_ENV === 'development' ? [
        './index.html',
        './index.md',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/README.md',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ] : [{raw: ''}],
    presets: process.env.NODE_ENV === 'development' ? [
        require('./lib/config/src/tailwind'),
    ] : [],
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@mertasan/tailwindcss-variables')({
            colorVariables: true,
        }),
    ],
    prefix: '-',
};

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

const argv = minimist(process.argv.slice(4));

if (argv.tailwind) {
    const extraPresets = require(argv.tailwind);
    const mergePresets = (preset) => {
        if (typeof preset === 'function') {
            mergePresets(preset({config, colorToVars}));
        } else if (Array.isArray(preset)) {
            preset.forEach(mergePresets);
        } else if (typeof preset === 'object') {
            if (!config.presets) {
                config.presets = [];
            }
            config.presets.push(preset);
        }
    };
    mergePresets(extraPresets);
}

if (argv.noPreflightStyle) {
    config.corePlugins = {
        preflight: false,
    };
}

module.exports = config;
