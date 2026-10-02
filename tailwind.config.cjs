const minimist = require('minimist');
const {createTailwindConfig} = require('./scripts/build/css-config.cjs');

// Compatibility entry for tools that load Tailwind independently of PostCSS.
const argv = minimist(process.argv.slice(4));
const tailwind = argv.tailwind || process.env.TAILWIND_CONFIG;

module.exports = createTailwindConfig({
    development: process.env.NODE_ENV === 'development',
    preflight: !(argv.noPreflightStyle || process.env.TAILWIND_NO_PREFLIGHT),
    tailwindConfigs: typeof tailwind === 'string' ? tailwind.split(',') : tailwind || [],
});
