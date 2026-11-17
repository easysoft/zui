import {mkdirSync} from 'node:fs';
import Path from 'node:path';
import {defineConfig, devices} from '@playwright/test';

import type {PlaywrightTestConfig} from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4173';
const runAllBrowsers = process.env.PLAYWRIGHT_ALL_BROWSERS === '1';

const projects: NonNullable<PlaywrightTestConfig['projects']> = [
    {
        name: 'chromium',
        use: {...devices['Desktop Chrome']},
    },
];

if (runAllBrowsers) {
    const firefoxAppData = process.platform === 'darwin'
        ? Path.resolve(import.meta.dirname, '.cache/playwright-firefox')
        : undefined;
    if (firefoxAppData) {
        // macOS protects Firefox's default app data even with a temporary -profile.
        mkdirSync(firefoxAppData, {recursive: true});
    }

    projects.push(
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                launchOptions: firefoxAppData ? {
                    env: {...process.env, MOZ_APP_DATA: firefoxAppData},
                } : undefined,
            },
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
    );
}

export default defineConfig({
    testDir: './tests/e2e',
    outputDir: 'test-results/playwright',
    snapshotPathTemplate: '{testDir}/__screenshots__/{projectName}/{platform}/{testFilePath}/{arg}{ext}',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    // A cold Vite transform competes with the browser on the small CI runner.
    timeout: process.env.CI ? 90_000 : 30_000,
    expect: {
        timeout: 5_000,
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            maxDiffPixelRatio: 0.005,
            scale: 'css',
        },
    },
    reporter: process.env.CI
        ? [['line'], ['html', {open: 'never', outputFolder: 'playwright-report'}]]
        : [['list'], ['html', {open: 'never', outputFolder: 'playwright-report'}]],
    use: {
        baseURL,
        colorScheme: 'light',
        contextOptions: {
            reducedMotion: 'reduce',
        },
        locale: 'zh-CN',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        viewport: {width: 1280, height: 900},
    },
    projects,
    webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
        command: 'pnpm dev --host 127.0.0.1 --port 4173',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
        stdout: 'pipe',
        stderr: 'pipe',
    },
});
