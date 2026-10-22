import {existsSync} from 'node:fs';
import {defineConfig} from '@playwright/test';

const externalURL = process.env.PLAYWRIGHT_STORYBOOK_BASE_URL;
const baseURL = externalURL ?? 'http://127.0.0.1:6007/';

if (!existsSync('dist/storybook/index.html') || !existsSync('dist/storybook/index.json')) {
    throw new Error('Storybook build missing. Run pnpm storybook:build first; an external URL must serve the same stories.');
}

export default defineConfig({
    testDir: './tests/storybook',
    outputDir: 'test-results/storybook',
    snapshotPathTemplate: '{testDir}/__screenshots__/{projectName}/{platform}/{testFilePath}/{arg}{ext}',
    updateSnapshots: 'none',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    timeout: process.env.CI ? 60_000 : 30_000,
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            maxDiffPixels: 0,
            scale: 'css',
        },
    },
    reporter: [['list'], ['html', {open: 'never', outputFolder: 'playwright-report/storybook'}]],
    use: {
        baseURL,
        colorScheme: 'light',
        locale: 'zh-CN',
        contextOptions: {reducedMotion: 'reduce'},
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        viewport: {width: 1440, height: 1000},
    },
    projects: [{name: 'chromium', use: {browserName: 'chromium'}}],
    webServer: externalURL ? undefined : {
        command: 'pnpm exec vite preview --config tests/storybook/vite.config.ts',
        url: baseURL,
        reuseExistingServer: false,
        timeout: 30_000,
        stdout: 'pipe',
        stderr: 'pipe',
    },
});
