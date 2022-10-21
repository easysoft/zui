const minimist = require('minimist');

const argv = minimist(process.argv.slice(4));
const extraPlugins = [];
const cssnanoFlag = argv.cssnano || process.env.POSTCSS_CSSNANO;
if (cssnanoFlag !== 'no' && (process.env.NODE_ENV === 'production' || cssnanoFlag)) {
    extraPlugins.push(require('cssnano'));
}
if (argv.rem2px || process.env.POSTCSS_REM2PX) {
    extraPlugins.push(require('postcss-rem-to-pixel')({propList: ['*']}));
}

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...extraPlugins,
    ],
};
