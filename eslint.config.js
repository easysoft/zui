import stylistic from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import {globalIgnores} from 'eslint/config';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    stylistic.configs.customize({
        semi: true,
        indent: 4,
        blockSpacing: false,
        braceStyle: '1tbs',
        quoteProps: 'as-needed',
    }),
    {
        files: ['**/*.{js,cjs,mjs,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 13,
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                project: [
                    './tsconfig.root.json',
                    './lib/*/tsconfig.json',
                    './docs/tsconfig.json',
                    './exts/*/*/tsconfig.json',
                    './exts/*/tsconfig.json',
                ],
            },
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
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/no-multi-spaces': ['error', {ignoreEOLComments: true}],
            '@stylistic/multiline-ternary': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-dynamic-delete': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
    globalIgnores([
        './build/**/*',
        './dist/**/*',
        './docs/_/**/*',
        './lib/*/public/**/*',
        './exts/*/*/public/**/*',
    ]),
);
