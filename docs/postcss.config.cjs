module.exports = {
    plugins: {
        tailwindcss: {
            config: require('./tailwind.config.cjs'),
        },
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
    },
};
