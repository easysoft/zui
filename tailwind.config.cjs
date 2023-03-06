const minimist = require('minimist');
const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');
const defaultTheme = require('./config/tailwind-theme/index.cjs');

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class', '[class="dark"]'],
    content: process.env.NODE_ENV === 'development' ? [
        './index.html',
        './index.md',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/README.md',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
        './exts/zentao/quick-menu/src/component/quick-menu.tsx',
    ] : [{raw: ''}],
    theme: defaultTheme,
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

let tailwind = argv.tailwind || process.env.TAILWIND_CONFIG;
if (tailwind) {
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
    if (typeof tailwind === 'string') {
        tailwind = tailwind.split(',');
    }
    if (Array.isArray(tailwind)) {
        tailwind.forEach(tailwindPath => {
            mergePresets(require(tailwindPath));
        });
    }
}

if (argv.noPreflightStyle || process.env.TAILWIND_NO_PREFLIGHT) {
    config.corePlugins = {
        preflight: false,
    };
}

module.exports = config;
