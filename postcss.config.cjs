const minimist = require('minimist');
const {createPostcssConfig} = require('./scripts/build/css-config.cjs');

// Compatibility entry for the dev server and VitePress; builds pass options directly.
const argv = minimist(process.argv.slice(4));
const cssnano = argv.cssnano || process.env.POSTCSS_CSSNANO;
const tailwind = argv.tailwind || process.env.TAILWIND_CONFIG;

module.exports = createPostcssConfig({
    development: process.env.NODE_ENV === 'development',
    minify: cssnano !== 'no' && (process.env.NODE_ENV === 'production' || Boolean(cssnano)),
    remToPx: Boolean(argv.rem2px || process.env.POSTCSS_REM2PX),
    preflight: !(argv.noPreflightStyle || process.env.TAILWIND_NO_PREFLIGHT),
    tailwindConfigs: typeof tailwind === 'string' ? tailwind.split(',') : tailwind || [],
});
