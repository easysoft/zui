const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');
const loadConfig = require('tailwindcss/loadConfig');
const defaultTheme = require('../../config/tailwind-theme/index.cjs');

/** Copy config data without losing functions used by Tailwind presets. */
function copyConfig(value) {
    if (Array.isArray(value)) {
        return value.map(copyConfig);
    }
    if (value && Object.getPrototypeOf(value) === Object.prototype) {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, copyConfig(item)]));
    }
    return value;
}

function colorToVars(colorObject, parentName = 'color', vars = {}) {
    Object.keys(colorObject).forEach((name) => {
        const value = colorObject[name];
        if (!value || ['transparent', 'inherit', 'currentColor'].includes(value)) {
            return;
        }
        const varName = String(name).replace(/([A-Z])/g, '-$1').toLowerCase();
        vars[name] = typeof value === 'object'
            ? colorToVars(value, `${parentName}-${varName}`)
            : value.startsWith('#') ? colorVariable(`--${parentName}-${varName}`) : `var(--${parentName}-${varName})`;
    });
    return vars;
}

/** Each call owns its theme and presets, including mutations made by preset functions. */
function createTailwindConfig({development = false, preflight = true, tailwindConfigs = []} = {}) {
    const config = {
        darkMode: 'media',
        content: development ? [
            './index.html',
            './index.md',
            './src/**/*.{vue,js,ts,jsx,tsx}',
            './lib/*/index.html',
            './lib/*/README.md',
            './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
            './exts/*/*/src/**/*.{vue,js,ts,jsx,tsx}',
        ] : [{raw: ''}],
        safelist: ['dark'],
        theme: copyConfig(defaultTheme),
        plugins: [require('@mertasan/tailwindcss-variables')({colorVariables: true, darkToRoot: false})],
        prefix: '-',
    };

    const mergePreset = (preset) => {
        if (typeof preset === 'function') {
            mergePreset(preset({config, colorToVars}));
        } else if (Array.isArray(preset)) {
            preset.forEach(mergePreset);
        } else if (preset && typeof preset === 'object') {
            if (!config.presets) {
                config.presets = [];
            }
            config.presets.push(copyConfig(preset));
        }
    };
    tailwindConfigs.forEach(path => mergePreset(loadConfig(path)));
    if (!preflight) {
        config.corePlugins = {preflight: false};
    }
    [config.theme, config.theme.extend].forEach((theme) => {
        ['variables', 'darkVariables'].forEach((key) => {
            const variables = theme?.[key];
            if (variables && typeof variables === 'object') {
                config.safelist.push(...Object.keys(variables).filter(name => name.startsWith('.')).map(name => name.substring(1)));
            }
        });
    });
    config.safelist = [...new Set(config.safelist)];
    return config;
}

function createPostcssConfig({minify = false, remToPx = false, ...tailwindOptions} = {}) {
    return {
        plugins: [
            require('postcss-import')(),
            require('tailwindcss')(createTailwindConfig(tailwindOptions)),
            require('postcss-inset')(),
            require('autoprefixer')(),
            ...(minify ? [require('cssnano')()] : []),
            ...(remToPx ? [require('postcss-rem-to-pixel')({propList: ['*']})] : []),
        ],
    };
}

module.exports = {createTailwindConfig, createPostcssConfig};
