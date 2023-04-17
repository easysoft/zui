module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-typescript', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.root.json', './lib/*/tsconfig.json', './docs/tsconfig.json', './exts/*/*/tsconfig.json', './exts/*/tsconfig.json'],
    },
    plugins: ['import', '@typescript-eslint'],
    rules: {
        'indent': ['error', 4, {'SwitchCase': 1}],
        'object-curly-spacing': ['error', 'never'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/jsx-filename-extension': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-fallthrough': 'off',
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            rules: {
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/indent': ['error', 4, {'SwitchCase': 1}],
                '@typescript-eslint/object-curly-spacing': ['error', 'never'],
                '@typescript-eslint/no-use-before-define': ['error', {functions: false}],
                '@typescript-eslint/ban-types': ['error', {types: {'{}': false}}],
            },
        },
    ],
};
