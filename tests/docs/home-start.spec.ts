import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

for (const colorScheme of ['light', 'dark'] as const) {
    test(`hero demo and install section stay readable in ${colorScheme}`, async ({page}) => {
        await page.emulateMedia({colorScheme, reducedMotion: 'reduce'});
        await page.goto('./');
        for (const selector of ['.home-hero', '.home-start']) {
            await page.locator(selector).scrollIntoViewIfNeeded();
            // The demo button shows ZUI's unmodified default skin, whose contrast belongs to the framework.
            const result = await new AxeBuilder({page}).include(selector).exclude('.home-demo-result > .btn').withRules(['color-contrast']).analyze();
            expect(result.violations, `${selector} text must meet the contrast ratio`).toEqual([]);
        }
    });
}

test('hero demo runs its code and applies site-wide theme presets', async ({page}) => {
    await page.goto('./');
    await expect(page.getByRole('link', {name: '浏览组件', exact: true})).toHaveAttribute('href', /\/lib\/components\/$/);
    await expect(page.locator('.home-demo code')).toContainText('zui.Messager.show(\'你好，ZUI！\')');

    await page.getByRole('group', {name: '运行效果'}).getByRole('button', {name: '显示消息', exact: true}).click();
    await expect(page.locator('.messager').filter({hasText: '你好，ZUI！'})).toBeVisible();

    const themes = page.getByRole('group', {name: '换个主题试试'});
    await expect(themes.getByRole('button', {name: '应用ZUI 蓝主题'})).toHaveAttribute('aria-pressed', 'true');
    await themes.getByRole('button', {name: '应用落日橙主题'}).click();
    await expect(themes.getByRole('button', {name: '应用落日橙主题'})).toHaveAttribute('aria-pressed', 'true');
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('zui-docs-theme-v1')!).settings.preset)).toBe('sunset');
    await expect(page.locator('.home-feature-theme')).toHaveCSS('border-radius', '0px');

    await page.getByRole('button', {name: '主题', exact: true}).click();
    await expect(page.getByRole('region', {name: '主题设置'}).getByRole('button', {name: /落日橙/})).toHaveAttribute('aria-pressed', 'true');
});

test('install tabs switch by keyboard and copy the visible code', async ({page}) => {
    await page.addInitScript(() => {
        const calls: string[] = [];
        Object.assign(window, {copyCalls: calls});
        Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async (text: string) => {
            calls.push(text);
        }}});
    });
    await page.goto('./');
    const tabs = page.getByRole('tablist', {name: '接入方式'});
    const download = tabs.getByRole('tab', {name: '下载构建'});
    await expect(download).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('tabpanel')).toHaveCount(1);
    await expect(page.getByRole('link', {name: /^下载 zui-.+\.zip$/})).toHaveAttribute('href', /\/zui-[\d.]+\.zip$/);

    await download.focus();
    await page.keyboard.press('ArrowRight');
    const cdn = tabs.getByRole('tab', {name: 'CDN'});
    await expect(cdn).toBeFocused();
    await expect(cdn).toHaveAttribute('aria-selected', 'true');
    await expect(download).toHaveAttribute('tabindex', '-1');
    await page.keyboard.press('End');
    const npm = tabs.getByRole('tab', {name: 'npm'});
    await expect(npm).toBeFocused();
    const panel = page.getByRole('tabpanel', {name: 'npm'});
    await expect(panel).toBeVisible();
    await page.keyboard.press('ArrowRight');
    await expect(download).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(npm).toBeFocused();

    const copy = panel.getByRole('button', {name: '复制入口模块'});
    await copy.click();
    await expect(panel.getByRole('status').last()).toHaveText('已复制入口模块');
    const copied = await page.evaluate(() => (window as unknown as {copyCalls: string[]}).copyCalls);
    expect(copied).toEqual([await panel.locator('.home-code').last().locator('code').textContent().then(text => text!.trimEnd())]);
    expect(copied[0]).toContain('import \'zui/css\';');
    for (const button of await page.locator('.home-code-body button.copy').all()) await expect(button).toBeHidden();
});

test('home install code and share metadata stay available without JavaScript', async ({browser, baseURL}) => {
    const context = await browser.newContext({javaScriptEnabled: false});
    const page = await context.newPage();
    try {
        await page.goto(baseURL!);
        await expect(page.getByRole('tablist')).toHaveCount(0);
        for (const label of ['下载构建', 'CDN', 'npm 安装', '入口模块']) {
            await expect(page.locator('.home-code-label', {hasText: label}).first()).toBeVisible();
        }
        await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
        const image = await page.locator('meta[property="og:image"]').getAttribute('content');
        expect(image).toMatch(/^https:\/\/.+\/og-image\.png$/);
        await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', image!);
        const response = await page.request.get(new URL('og-image.png', baseURL).href);
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toBe('image/png');
    } finally {
        await context.close();
    }
});
