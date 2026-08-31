import {defineConfig} from 'vitest/config';
import {mergeConfig} from 'vite';
import {getLibs} from './scripts/libs/query';
import {createSharedViteConfig} from './vite.shared';

export default defineConfig(async () => {
    const libsCache = await getLibs('buildIn', {cache: false});
    const sharedConfig = createSharedViteConfig({mode: 'test', libsCache});

    return mergeConfig(sharedConfig, {
        test: {
            coverage: {
                provider: 'v8',
                reportsDirectory: 'coverage',
                reporter: ['text', 'json-summary', 'html', 'lcov'],
                include: ['lib/*/src/**/*.{ts,tsx}'],
                exclude: [
                    '**/*.d.ts',
                    '**/*.{test,spec}.{ts,tsx}',
                    '**/{__tests__,tests}/**',
                ],
            },
            projects: [
                {
                    extends: true,
                    test: {
                        name: 'unit',
                        environment: 'node',
                        env: {TZ: 'UTC'},
                        include: ['tests/unit/**/*.test.ts'],
                        exclude: ['tests/build/**', 'tests/dom/**', 'tests/e2e/**'],
                    },
                },
                {
                    extends: true,
                    test: {
                        name: 'dom',
                        environment: 'jsdom',
                        setupFiles: ['tests/setup/dom-environment.ts', 'tests/setup/dom.ts'],
                        sequence: {setupFiles: 'list'},
                        include: ['tests/dom/**/*.test.{ts,tsx}'],
                        exclude: ['tests/build/**', 'tests/e2e/**', 'tests/unit/**'],
                    },
                },
                {
                    extends: true,
                    test: {
                        name: 'build',
                        environment: 'node',
                        include: ['tests/build/**/*.test.ts'],
                        exclude: ['tests/dom/**', 'tests/e2e/**', 'tests/unit/**'],
                        testTimeout: 120_000,
                        hookTimeout: 120_000,
                        pool: 'forks',
                        maxWorkers: 1,
                        fileParallelism: false,
                    },
                },
            ],
        },
    });
});
