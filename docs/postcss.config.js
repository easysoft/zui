module.exports = {
    plugins: {
        tailwindcss: {
            config: require('./tailwind.config'),
        },
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
    },
};
