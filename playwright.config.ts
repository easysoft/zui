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
    projects.push(
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
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
    timeout: 30_000,
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
        command: 'pnpm exec vite --host 127.0.0.1 --port 4173 --strictPort',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
        stdout: 'pipe',
        stderr: 'pipe',
    },
});
