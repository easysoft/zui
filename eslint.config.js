import stylistic from '@stylistic/eslint-plugin';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import {globalIgnores} from 'eslint/config';

const jsFiles = ['**/*.{js,cjs,mjs}'];
const tsFiles = ['**/*.{ts,tsx}'];
const sourceFiles = [...jsFiles, ...tsFiles];
const unusedVarsOptions = {
    args: 'all',
    argsIgnorePattern: '^_',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^_',
    destructuredArrayIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    ignoreRestSiblings: true,
};
const typescriptConfigs = [
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
].map(config => ({...config, files: tsFiles}));

export default tseslint.config(
    eslint.configs.recommended,
    ...typescriptConfigs,
    stylistic.configs.customize({
        semi: true,
        indent: 4,
        blockSpacing: false,
        braceStyle: '1tbs',
        quoteProps: 'as-needed',
    }),
    {
        files: sourceFiles,
        languageOptions: {
            ecmaVersion: 13,
            sourceType: 'module',
            globals: {
                console: 'readonly',
                Buffer: 'readonly',
                window: 'readonly',
                document: 'readonly',
                process: 'readonly',
                require: 'readonly',
                module: 'readonly',
                requestAnimationFrame: 'readonly',
                cancelAnimationFrame: 'readonly',
                onZUIReady: 'readonly',
            },
        },
        rules: {
            'no-useless-assignment': 'off',
            'preserve-caught-error': 'off',
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/no-multi-spaces': ['error', {ignoreEOLComments: true}],
            '@stylistic/multiline-ternary': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-dynamic-delete': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        files: jsFiles,
        rules: {
            'no-unused-vars': ['warn', unusedVarsOptions],
        },
    },
    {
        files: tsFiles,
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                unusedVarsOptions,
            ],
        },
    },
    globalIgnores([
        './build/**/*',
        './coverage/**/*',
        './dist/**/*',
        './docs/_/**/*',
        './exts/**/*',
        './lib/*/public/**/*',
        './lib/*/dev/**/*',
        './playwright-report/**/*',
        './publish/**/*',
        './skills-exts/**/*',
        './skills/*/assets/vendor/**/*',
        './test-results/**/*',
    ]),
);
