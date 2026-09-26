import {existsSync} from 'node:fs';
import {defineConfig, devices} from '@playwright/test';

const base = process.env.BASE_PATH ?? '/';
const externalURL = process.env.PLAYWRIGHT_DOCS_BASE_URL;
const baseURL = externalURL ?? `http://127.0.0.1:4174${base}`;

if (!externalURL && !existsSync('docs/_/.vitepress/dist/index.html')) {
    throw new Error('Documentation build missing. Run pnpm docs:build with the same BASE_PATH first.');
}

export default defineConfig({
    testDir: './tests/docs',
    outputDir: 'test-results/docs',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    timeout: 30_000,
    reporter: [['list'], ['html', {open: 'never', outputFolder: 'playwright-report/docs'}]],
    use: {
        baseURL,
        locale: 'zh-CN',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        viewport: {width: 1280, height: 900},
    },
    projects: [{name: 'chromium', use: {...devices['Desktop Chrome']}}],
    webServer: externalURL ? undefined : {
        command: 'pnpm --dir docs exec vitepress preview _ --host 127.0.0.1 --port 4174 --strictPort',
        url: baseURL,
        reuseExistingServer: false,
        timeout: 30_000,
        stdout: 'pipe',
        stderr: 'pipe',
    },
});
