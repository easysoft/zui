import {expect, openStory, storyId, switchToLabel, test} from './fixtures';

import type {Locator} from '@playwright/test';

async function colors(element: Locator) {
    return element.evaluate((node) => {
        const style = getComputedStyle(node);
        return {background: style.backgroundColor, foreground: style.color, canvas: style.getPropertyValue('--color-canvas')};
    });
}

test('theme toolbar changes ZUI colors while preserving Controls and the preview document', async ({page}) => {
    const canvas = await openStory(page, 'button', 'preact');
    await page.locator('#control-text').fill('Theme regression');
    const body = canvas.locator('body');
    await body.evaluate(node => node.dataset.themeProbe = 'same-document');
    const light = await colors(body);
    const toolbar = page.getByRole('button', {name: /^ZUI 组件主题 /});
    await toolbar.click();
    await page.getByText('深色', {exact: true}).click();
    await expect(canvas.locator('html')).toHaveCSS('color-scheme', 'dark');
    const dark = await colors(body);
    expect(dark.background).not.toBe(light.background);
    expect(dark.foreground).not.toBe(light.foreground);
    expect(dark.canvas).not.toBe(light.canvas);
    await expect(canvas.getByRole('button', {name: 'Theme regression', exact: true})).toBeVisible();
    await expect(body).toHaveAttribute('data-theme-probe', 'same-document');
    await switchToLabel(page);
    await expect(canvas.locator('html')).toHaveCSS('color-scheme', 'dark');
    await toolbar.focus();
    await page.keyboard.press('Enter');
    await page.getByText('浅色', {exact: true}).click();
    await expect(canvas.locator('html')).toHaveCSS('color-scheme', 'light');
    await page.emulateMedia({colorScheme: 'dark'});
    await expect(canvas.locator('html')).toHaveCSS('color-scheme', 'light');
    await toolbar.click();
    await page.getByText('跟随系统', {exact: true}).click();
    await expect(canvas.locator('html')).toHaveCSS('color-scheme', 'dark');
    await page.emulateMedia({colorScheme: 'light'});
    await expect(canvas.locator('html')).toHaveCSS('color-scheme', 'light');
});

for (const scene of [
    {lib: 'dropdown', variant: 'nested', trigger: '导出菜单', surface: '.dropdown-menu'},
    {lib: 'modal', variant: 'confirmation', trigger: '打开确认对话框', surface: '.modal-dialog'},
]) {
    test(`system theme updates an open ${scene.lib} and its body portal`, async ({page}) => {
        await page.setViewportSize({width: 390, height: 844});
        await page.goto(`./iframe.html?id=${encodeURIComponent(storyId(scene.lib, scene.variant))}&viewMode=story&globals=theme:system`);
        await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
        await page.getByRole('button', {name: scene.trigger, exact: true}).click();
        const surface = page.locator(scene.surface).first();
        await expect(surface).toBeVisible();
        const light = await colors(surface);
        await page.emulateMedia({colorScheme: 'dark'});
        await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');
        await expect(surface).toBeVisible();
        await expect.poll(() => colors(surface)).not.toEqual(light);
        const dark = await colors(surface);
        expect(dark.background).not.toBe(light.background);
        expect(dark.foreground).not.toBe(light.foreground);
        await page.emulateMedia({colorScheme: 'light'});
        await expect.poll(() => colors(surface)).toEqual(light);
        expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
    });
}
