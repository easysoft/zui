const theme = require('./theme/');

module.exports = {
    darkMode: 'class',
    theme,
    plugins: [
        require('@mertasan/tailwindcss-variables')({
            colorVariables: true,
        }),
    ],
};
