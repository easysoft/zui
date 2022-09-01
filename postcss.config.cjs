const minimist = require('minimist');

const argv = minimist(process.argv.slice(4));
const extraPlugins = [];
if (argv.cssnano !== 'no' && (process.env.NODE_ENV === 'production' || argv.cssnano)) {
    extraPlugins.push(require('cssnano'));
}
if (argv.rem2px) {
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
