import {readFile} from 'node:fs/promises';
import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

const route = 'guide/config/theme.html';
const storageKey = 'zui-docs-theme-v1';

async function openEditor(page: Page) {
    await page.goto(route);
    await expect(page.getByTestId('theme-editor')).toBeVisible();
}

async function cssVariable(page: Page, name: string) {
    return page.evaluate(variable => getComputedStyle(document.documentElement).getPropertyValue(variable).trim(), name);
}

async function savedTheme(page: Page) {
    return page.evaluate(key => localStorage.getItem(key), storageKey);
}

function rgbColor(hex: string) {
    return `rgb(${[1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16)).join(', ')})`;
}

async function expectPrimaryPreview(page: Page, primary: string) {
    for (const selector of ['.theme-preview-actions .btn.primary', '.theme-preview-mark', '.theme-export-actions .btn.primary']) {
        await expect(page.locator(selector)).toHaveCSS('background-color', rgbColor(primary));
        await expect(page.locator(selector)).toHaveCSS('color', 'rgb(255, 255, 255)');
    }
    await expect(page.locator('.theme-preview progress')).toHaveCSS('color', rgbColor(primary));
}

async function exportedBrandColor(page: Page) {
    const exported = await page.getByRole('textbox', {name: '主题 CSS', exact: true}).inputValue();
    return rgbColor(exported.match(/--color-primary-600:\s*(#[\da-f]{6});/i)![1]);
}

test.beforeEach(async ({page}) => {
    await page.emulateMedia({colorScheme: 'light'});
});

test('theme: documentation navigation exposes the editor and all presets apply', async ({page}, testInfo) => {
    await openEditor(page);
    await expect(page.locator('h1')).toHaveText('主题');
    await expect(page.locator('.VPNavBar').getByRole('link', {name: '文档', exact: true})).toHaveClass(/\bactive\b/);
    const navigation = page.locator('.VPSidebar');
    await expect(navigation.getByRole('link', {name: '主题', exact: true})).toHaveAttribute('href', /\/guide\/config\/theme\.html$/);

    const colors = [];
    for (const name of ['ZUI 蓝', '森林绿', '海湾青', '鸢尾紫', '落日橙', '玫瑰红']) {
        const preset = page.getByTestId('theme-editor').getByRole('button', {name: `应用${name}主题`, exact: true});
        await preset.focus();
        await preset.press('Enter');
        const value = await page.getByTestId('theme-color-primary').inputValue();
        await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe(value);
        await expectPrimaryPreview(page, value);
        await expect(page.locator('.VPNavBar').getByRole('link', {name: '文档', exact: true})).toHaveCSS('color', await exportedBrandColor(page));
        colors.push(value);
    }
    expect(new Set(colors).size).toBe(6);

    await page.getByTestId('theme-editor').getByRole('button', {name: '应用鸢尾紫主题', exact: true}).click();
    const primary = await page.getByTestId('theme-color-primary').inputValue();
    await expectPrimaryPreview(page, primary);
    await page.locator('.theme-workbench').evaluate(element => window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 100));
    await expect(page.getByTestId('theme-color-primary')).toBeInViewport({ratio: 1});
    await expect(page.locator('.theme-preview-actions .btn.primary')).toBeInViewport({ratio: 1});
    const editorScreenshot = testInfo.outputPath('theme-iris-editor.png');
    await page.screenshot({path: editorScreenshot});
    await testInfo.attach('鸢尾紫主题编辑器', {path: editorScreenshot, contentType: 'image/png'});

    await page.locator('.VPNavBar').getByRole('link', {name: '组件', exact: true}).click();
    await page.getByRole('main').getByRole('link', {name: '按钮', exact: true}).click();
    await expect(page.locator('.example .btn.primary').first()).toHaveCSS('background-color', rgbColor(primary));
    const buttonsScreenshot = testInfo.outputPath('theme-iris-buttons.png');
    await page.screenshot({path: buttonsScreenshot});
    await testInfo.attach('鸢尾紫按钮文档', {path: buttonsScreenshot, contentType: 'image/png'});
});

test('theme: edits apply to the whole site and survive navigation, reload and reopening', async ({page, context}) => {
    await openEditor(page);
    const primary = '#6d28d9';
    await page.getByTestId('theme-color-primary').fill(primary);
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe(primary);
    await expectPrimaryPreview(page, primary);
    const brandColor = await exportedBrandColor(page);
    await expect.poll(() => savedTheme(page)).toContain(primary);
    const saved = await savedTheme(page);

    // VitePress dev may append the real ZUI stylesheet after saved theme rules.
    await page.locator('#zui-stylesheet').evaluate(element => document.head.appendChild(element));
    await expectPrimaryPreview(page, primary);
    await page.getByTestId('theme-editor').getByRole('button', {name: '深色', exact: true}).click();
    await expectPrimaryPreview(page, primary);
    await page.getByTestId('theme-editor').getByRole('button', {name: '浅色', exact: true}).click();
    await expectPrimaryPreview(page, primary);

    await page.locator('.VPNavBar').getByRole('link', {name: '组件', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('组件总览');
    await expect(page.getByTestId('theme-editor')).toHaveCount(0);
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe(primary);
    await expect(page.locator('.VPNavBar').getByRole('link', {name: '组件', exact: true})).toHaveCSS('color', brandColor);
    await page.getByRole('main').getByRole('link', {name: '按钮', exact: true}).click();
    const exampleButton = page.locator('.example .btn.primary').first();
    await expect(exampleButton).toHaveCSS('background-color', rgbColor(primary));
    await expect(exampleButton).toHaveCSS('color', 'rgb(255, 255, 255)');
    await page.reload();
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe(primary);
    await expect(exampleButton).toHaveCSS('background-color', rgbColor(primary));
    expect(await savedTheme(page)).toBe(saved);

    const reopened = await context.newPage();
    await openEditor(reopened);
    await expect(reopened.getByTestId('theme-color-primary')).toHaveValue(primary);
    await expect.poll(() => cssVariable(reopened, '--color-primary-500')).toBe(primary);
    await expectPrimaryPreview(reopened, primary);

    await reopened.getByTestId('theme-color-primary').fill('#8142a1');
    await expectPrimaryPreview(reopened, '#8142a1');
    await expect(exampleButton).toHaveCSS('background-color', 'rgb(129, 66, 161)');

    await openEditor(page);
    await expect(page.locator('#zui-custom-theme')).toHaveCount(1);
    await page.getByTestId('theme-color-primary').fill('#25734c');
    await expect(reopened.getByTestId('theme-color-primary')).toHaveValue('#25734c');
    await expect(reopened.locator('#zui-custom-theme')).toHaveCount(1);
    await expect.poll(() => cssVariable(reopened, '--color-primary-500')).toBe('#25734c');
    await expectPrimaryPreview(reopened, '#25734c');
});

test('theme: production head restores saved colors before application hydration', async ({page, context}) => {
    const response = await page.request.get('lib/components/button/');
    test.skip((await response.text()).includes('src="/@vite/client"'), 'VitePress development HTML has no rendered head; first-paint restoration requires a production build.');
    await openEditor(page);
    await page.getByTestId('theme-color-primary').fill('#25734c');
    const reopened = await context.newPage();

    // The inline head script must restore the theme before the application can hydrate.
    let blockedScripts = 0;
    await reopened.route('**/*', (request) => {
        if (request.request().resourceType() === 'script') {
            blockedScripts++;
            return request.abort();
        }
        return request.continue();
    });
    await reopened.goto('lib/components/button/', {waitUntil: 'domcontentloaded'});
    await expect.poll(() => cssVariable(reopened, '--color-primary-500')).toBe('#25734c');
    expect(blockedScripts).toBeGreaterThan(0);
});

test('theme: semantic colors reach the preview labels without overriding native solid text', async ({page}) => {
    await openEditor(page);
    const colors = [['success', '#237341'], ['warning', '#a56b14'], ['danger', '#b1354b']] as const;
    for (const [key, value] of colors) {
        await expect(page.locator(`.theme-preview .label.${key}`).first()).toHaveCSS('color', 'rgb(255, 255, 255)');
        await page.getByTestId(`theme-color-${key}`).fill(value);
        await expect(page.locator(`.theme-preview .label.${key}`).first()).toBeVisible();
        for (const label of await page.locator(`.theme-preview .label.${key}`).all()) {
            await expect(label).toHaveCSS('background-color', rgbColor(value));
            await expect(label).toHaveCSS('color', 'rgb(255, 255, 255)');
        }
    }
    await page.reload();
    for (const [key, value] of colors) {
        for (const label of await page.locator(`.theme-preview .label.${key}`).all()) {
            await expect(label).toHaveCSS('background-color', rgbColor(value));
            await expect(label).toHaveCSS('color', 'rgb(255, 255, 255)');
        }
    }
});

test('theme: header controls and the editor share theme and appearance state', async ({page}) => {
    await openEditor(page);
    const editor = page.getByTestId('theme-editor');
    const dark = editor.getByRole('button', {name: '深色', exact: true});
    const light = editor.getByRole('button', {name: '浅色', exact: true});
    const trigger = page.locator('.nav-theme').getByRole('button', {name: '主题', exact: true});
    const panel = page.getByRole('region', {name: '主题设置', exact: true});
    const defaultColor = await editor.getByTestId('theme-color-primary').inputValue();
    await editor.getByTestId('theme-color-primary').fill('#xyz');
    await expect(editor.getByTestId('theme-color-primary')).toHaveAttribute('aria-invalid', 'true');
    await trigger.click();
    await panel.getByRole('button', {name: '应用ZUI 蓝主题', exact: true}).click();
    await expect(editor.getByTestId('theme-color-primary')).toHaveValue(defaultColor);
    await expect(editor.getByTestId('theme-color-primary')).toHaveAttribute('aria-invalid', 'false');
    await page.keyboard.press('Escape');
    await dark.click();
    await expect(page.locator('html')).toHaveClass(/\bdark\b/);
    await expect(dark).toHaveAttribute('aria-pressed', 'true');
    await expect(light).toHaveAttribute('aria-pressed', 'false');
    await trigger.click();
    await expect(panel.getByRole('button', {name: '深色', exact: true})).toHaveAttribute('aria-pressed', 'true');

    await panel.getByRole('button', {name: '浅色', exact: true}).click();
    await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
    await expect(light).toHaveAttribute('aria-pressed', 'true');
    await panel.getByRole('button', {name: '应用鸢尾紫主题', exact: true}).click();
    await expect(editor.getByTestId('theme-color-primary')).toHaveValue('#8b5cf6');
    await expectPrimaryPreview(page, '#8b5cf6');
    await page.locator('h1').click();
    await expect(panel).toBeHidden();

    await editor.getByTestId('theme-color-primary').fill('#6d28d9');
    await trigger.click();
    await expect(panel.getByRole('button', {name: /^应用.+主题$/, pressed: true})).toHaveCount(0);
    await page.reload();
    await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
    await expect(light).toHaveAttribute('aria-pressed', 'true');
    await expect(editor.getByTestId('theme-color-primary')).toHaveValue('#6d28d9');
});

test('theme: header customizes an ordinary document and persists through the editor link', async ({page}, testInfo) => {
    await page.goto('lib/components/button/');
    const trigger = page.locator('.nav-theme').getByRole('button', {name: '主题', exact: true});
    const panel = page.getByRole('region', {name: '主题设置', exact: true});
    await expect(trigger).toHaveCount(1);
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('switch')).toHaveCount(0);
    await expect(panel).toBeHidden();
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(panel).toHaveAttribute('id', (await trigger.getAttribute('aria-controls'))!);
    await expect(panel.getByRole('button', {name: /^应用.+主题$/})).toHaveCount(6);
    await panel.getByRole('button', {name: '应用森林绿主题', exact: true}).click();
    await expect(panel.getByRole('button', {name: '应用森林绿主题', exact: true})).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.example .btn.primary').first()).toHaveCSS('background-color', 'rgb(16, 185, 129)');
    const lightScreenshot = testInfo.outputPath('nav-theme-light.png');
    await page.screenshot({path: lightScreenshot, animations: 'disabled'});
    await testInfo.attach('顶部主题面板（浅色）', {path: lightScreenshot, contentType: 'image/png'});
    await panel.getByRole('group', {name: '主题外观', exact: true}).getByRole('button', {name: '深色', exact: true}).click();
    await expect(page.locator('html')).toHaveClass(/\bdark\b/);
    const darkScreenshot = testInfo.outputPath('nav-theme-dark.png');
    await page.screenshot({path: darkScreenshot, animations: 'disabled'});
    await testInfo.attach('顶部主题面板（深色）', {path: darkScreenshot, contentType: 'image/png'});

    await page.reload();
    await expect(page.locator('html')).toHaveClass(/\bdark\b/);
    await expect(page.locator('.example .btn.primary').first()).toHaveCSS('background-color', 'rgb(16, 185, 129)');
    await trigger.click();
    await expect(panel.getByRole('button', {name: '深色', exact: true})).toHaveAttribute('aria-pressed', 'true');
    const customize = panel.getByRole('link', {name: '自定义主题', exact: true});
    await expect(customize).toHaveAttribute('href', /\/guide\/config\/theme\.html$/);
    await customize.click();
    await expect(page.getByTestId('theme-editor')).toBeVisible();
    await expect(panel).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByTestId('theme-color-primary')).toHaveValue('#10b981');
});

test('theme: header panel closes accessibly and stays inside a narrow viewport', async ({page}, testInfo) => {
    await page.goto('lib/components/button/');
    const trigger = page.locator('.nav-theme').getByRole('button', {name: '主题', exact: true});
    const panel = page.getByRole('region', {name: '主题设置', exact: true});
    await trigger.focus();
    await trigger.press('Enter');
    await expect(panel).toBeVisible();
    await panel.getByRole('button', {name: '应用森林绿主题', exact: true}).focus();
    await page.keyboard.press('Escape');
    await expect(panel).toBeHidden();
    await expect(trigger).toBeFocused();

    await trigger.press('Space');
    await expect(panel).toBeVisible();
    const home = page.locator('.VPNavBarTitle a');
    await home.focus();
    await expect(panel).toBeHidden();
    await expect(home).toBeFocused();
    // Some browsers dispatch button clicks without transferring focus first.
    await trigger.evaluate((element: HTMLButtonElement) => element.click());
    await expect(panel).toBeVisible();
    await expect(trigger).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(panel).toBeHidden();
    await expect(trigger).toBeFocused();
    await trigger.click();
    await page.locator('h1').click();
    await expect(panel).toBeHidden();

    await page.setViewportSize({width: 320, height: 640});
    await expect(trigger).toBeVisible();
    await trigger.click();
    await expect(panel).toBeInViewport({ratio: 1});
    const box = await panel.boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(320);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
    const screenshot = testInfo.outputPath('nav-theme-narrow.png');
    await page.screenshot({path: screenshot, animations: 'disabled'});
    await testInfo.attach('顶部主题面板（320px）', {path: screenshot, contentType: 'image/png'});
});

test('theme: geometry controls update CSS and exported values', async ({page}) => {
    await openEditor(page);
    for (const [label, property] of [['圆角', '--radius'], ['基础字号', '--font-size-root']] as const) {
        const control = page.getByRole('slider', {name: new RegExp(`^${label}(?: |$)`)});
        const before = await cssVariable(page, property);
        await control.focus();
        await control.press('ArrowRight');
        await expect.poll(() => cssVariable(page, property)).not.toBe(before);
        const value = await cssVariable(page, property);
        expect(await page.getByRole('textbox', {name: '主题 CSS', exact: true}).inputValue()).toContain(`${property}: ${value};`);
    }
});

test('theme: malformed colors never replace the last valid theme or export', async ({page}) => {
    await openEditor(page);
    const color = page.getByTestId('theme-color-primary');
    const defaultColor = await color.inputValue();
    await color.fill('#xyz');
    await expect(color).toHaveAttribute('aria-invalid', 'true');
    await page.getByTestId('theme-editor').getByRole('button', {name: '应用ZUI 蓝主题', exact: true}).click();
    await expect(color).toHaveValue(defaultColor);
    await expect(color).toHaveAttribute('aria-invalid', 'false');
    await color.fill('#365fc7');
    await expect.poll(() => savedTheme(page)).toContain('#365fc7');
    const saved = await savedTheme(page);
    const exported = await page.getByRole('textbox', {name: '主题 CSS', exact: true}).inputValue();
    await color.fill('#xyz123');
    await expect(color).toHaveAttribute('aria-invalid', 'true');
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe('#365fc7');
    expect(await savedTheme(page)).toBe(saved);
    await expect(page.getByRole('textbox', {name: '主题 CSS', exact: true})).toHaveValue(exported);
    await page.reload();
    await expect(color).toHaveValue('#365fc7');
});

test('theme: short hex colors normalize and light and dark surfaces remain independent', async ({page}) => {
    await openEditor(page);
    const editor = page.getByTestId('theme-editor');
    const primary = page.getByTestId('theme-color-primary');
    await primary.fill('');
    await primary.pressSequentially('#123456');
    await expect(primary).toHaveValue('#123456');
    await expect(primary).toBeFocused();
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe('#123456');
    await primary.fill('#369');
    await primary.press('Tab');
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe('#336699');
    await expect.poll(() => savedTheme(page)).toContain('#336699');

    const canvas = page.getByTestId('theme-color-canvas');
    await canvas.fill('#f7f8fa');
    await editor.getByRole('button', {name: '深色', exact: true}).click();
    await expect(canvas).not.toHaveValue('#f7f8fa');
    await canvas.fill('#151b25');
    await editor.getByRole('button', {name: '浅色', exact: true}).click();
    await expect(canvas).toHaveValue('#f7f8fa');
    await page.reload();
    await expect(canvas).toHaveValue('#f7f8fa');
    await editor.getByRole('button', {name: '深色', exact: true}).click();
    await expect(canvas).toHaveValue('#151b25');
});

test('theme: CSS remains available for manual export after clipboard failure', async ({page}) => {
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {
            writeText: () => Promise.reject(new Error('Permission denied')),
        }});
    });
    await openEditor(page);
    await page.getByTestId('theme-editor').getByRole('button', {name: '应用森林绿主题', exact: true}).click();
    const code = page.getByRole('textbox', {name: '主题 CSS', exact: true});
    const exported = await code.inputValue();
    expect(exported).toContain('--color-primary-500:');
    expect(exported).toContain(':root');
    expect(exported).toContain('.dark');
    await expect(code).toHaveAttribute('readonly', '');
    await page.getByRole('button', {name: '复制 CSS', exact: true}).click();
    await expect(page.getByText('复制失败，请重试', {exact: true})).toBeVisible();
    await expect(code).toHaveValue(exported);
    await code.focus();
    await code.selectText();
    expect(await code.evaluate((element: HTMLTextAreaElement) => element.selectionEnd - element.selectionStart)).toBe(exported.length);
});

test('theme: downloaded CSS matches the visible standalone export', async ({page}) => {
    await openEditor(page);
    await page.getByTestId('theme-color-primary').fill('#7b3891');
    const exported = await page.getByRole('textbox', {name: '主题 CSS', exact: true}).inputValue();
    const pendingDownload = page.waitForEvent('download');
    await page.getByRole('button', {name: '下载 CSS', exact: true}).click();
    const download = await pendingDownload;
    expect(download.suggestedFilename()).toMatch(/\.css$/);
    const file = await download.path();
    expect(file).not.toBeNull();
    expect(await readFile(file!, 'utf8')).toBe(exported);
});

test('theme: exported CSS themes standalone ZUI with system and explicit appearance', async ({page, context}) => {
    await openEditor(page);
    const editor = page.getByTestId('theme-editor');
    await page.getByTestId('theme-color-primary').fill('#123456');
    await page.getByTestId('theme-color-canvas').fill('#f7f8fa');
    await page.getByTestId('theme-color-surface').fill('#e8edf3');
    await editor.getByRole('button', {name: '深色', exact: true}).click();
    await page.getByTestId('theme-color-canvas').fill('#151b25');
    await page.getByTestId('theme-color-surface').fill('#243040');
    const exported = await page.getByRole('textbox', {name: '主题 CSS', exact: true}).inputValue();
    const stylesheet = new URL((await page.locator('#zui-stylesheet').getAttribute('href'))!, page.url()).href;

    const standalone = await context.newPage();
    await standalone.setContent('<!DOCTYPE html><html lang="zh-CN"><head><title>导出的 ZUI 主题</title></head><body><main><button class="btn primary" type="button">创建项目</button><div id="panel" class="surface">面板</div><section class="light-in-dark"><div id="light-panel" class="surface">浅色面板</div></section></main></body></html>');
    await standalone.addStyleTag({url: stylesheet});
    await standalone.addStyleTag({content: exported});
    await standalone.emulateMedia({colorScheme: 'dark'});
    await expect.poll(() => cssVariable(standalone, '--color-canvas')).toBe('#151b25');
    await expect(standalone.locator('#panel')).toHaveCSS('background-color', 'rgb(36, 48, 64)');
    await expect(standalone.locator('#light-panel')).toHaveCSS('background-color', 'rgb(232, 237, 243)');
    await expect(standalone.getByRole('button', {name: '创建项目'})).toHaveCSS('background-color', 'rgb(18, 52, 86)');

    await standalone.locator('html').evaluate(element => element.setAttribute('class', 'light'));
    await expect.poll(() => cssVariable(standalone, '--color-canvas')).toBe('#f7f8fa');
    await expect(standalone.locator('#panel')).toHaveCSS('background-color', 'rgb(232, 237, 243)');
    await standalone.emulateMedia({colorScheme: 'light'});
    await standalone.locator('html').evaluate(element => element.setAttribute('class', 'dark'));
    await expect.poll(() => cssVariable(standalone, '--color-canvas')).toBe('#151b25');
    await expect(standalone.locator('#panel')).toHaveCSS('background-color', 'rgb(36, 48, 64)');
    await expect(standalone.locator('#light-panel')).toHaveCSS('background-color', 'rgb(232, 237, 243)');

    await standalone.locator('html').evaluate(element => element.removeAttribute('class'));
    await expect.poll(() => cssVariable(standalone, '--color-canvas')).toBe('#f7f8fa');
    await expect(standalone.locator('#panel')).toHaveCSS('background-color', 'rgb(232, 237, 243)');
});

test('theme: restoring defaults removes prior edits and stays restored after reload', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await openEditor(page);
    const primary = page.getByTestId('theme-color-primary');
    const defaultColor = await primary.inputValue();
    const defaultRadius = await cssVariable(page, '--radius');
    await primary.fill('#xyz');
    await expect(primary).toHaveAttribute('aria-invalid', 'true');
    await page.getByRole('button', {name: '恢复默认', exact: true}).click();
    await expect(primary).toHaveValue(defaultColor);
    await expect(primary).toHaveAttribute('aria-invalid', 'false');
    await primary.fill('#804c25');
    await page.getByRole('slider', {name: /^圆角(?: |$)/}).focus();
    await page.keyboard.press('ArrowRight');
    await page.getByRole('button', {name: '恢复默认', exact: true}).click();
    await expect(primary).toHaveValue(defaultColor);
    await expect.poll(() => cssVariable(page, '--radius')).toBe(defaultRadius);
    expect(await savedTheme(page)).toBeNull();
    await page.reload();
    await expect(primary).toHaveValue(defaultColor);
    await expect.poll(() => cssVariable(page, '--radius')).toBe(defaultRadius);
    expect(await savedTheme(page)).toBeNull();
    expect(errors).toEqual([]);
});

test('theme: corrupt saved data is ignored without breaking the editor', async ({page}) => {
    await page.addInitScript(key => localStorage.setItem(key, '{invalid JSON'), storageKey);
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await openEditor(page);
    await expect(page.getByTestId('theme-color-primary')).toHaveValue(/^#[\da-f]{6}$/i);
    await expect(page.getByTestId('theme-editor').getByRole('status').filter({hasText: /(?:无法读取|损坏|无效|已忽略)/})).toBeVisible();
    await page.getByTestId('theme-color-primary').fill('#4255b8');
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe('#4255b8');
    expect(errors).toEqual([]);
});

test('theme: denied local storage keeps the live customization and export usable', async ({page}) => {
    await page.addInitScript(() => {
        const setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function (key, value) {
            if (key === 'zui-docs-theme-v1') {
                throw new DOMException('Storage denied', 'QuotaExceededError');
            }
            return setItem.call(this, key, value);
        };
    });
    await openEditor(page);
    await page.getByTestId('theme-color-primary').fill('#3656b2');
    await expect.poll(() => cssVariable(page, '--color-primary-500')).toBe('#3656b2');
    await expect(page.getByText('无法保存到本地，本次修改仍会生效；请导出 CSS 保存。', {exact: true})).toBeVisible();
    expect(await page.getByRole('textbox', {name: '主题 CSS', exact: true}).inputValue()).toContain('--color-primary-500: #3656b2;');
    expect(await savedTheme(page)).toBeNull();
});

for (const mode of ['浅色', '深色']) {
    test(`theme: ${mode} editor remains accessible on a narrow screen`, async ({page}, testInfo) => {
        await page.setViewportSize({width: 390, height: 844});
        await openEditor(page);
        await page.getByTestId('theme-editor').getByRole('button', {name: mode, exact: true}).click();
        await page.getByRole('textbox', {name: '主题 CSS', exact: true}).scrollIntoViewIfNeeded();
        expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
        const accessibility = await new AxeBuilder({page}).include('[data-testid="theme-editor"]').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        // Preserve ZUI's native solid white text. These exact existing contrasts are
        // recorded as a baseline, not a WCAG pass; any additional failure still fails.
        expect(accessibility.violations.filter(violation => violation.id !== 'color-contrast')).toEqual([]);
        const contrast = accessibility.violations.filter(violation => violation.id === 'color-contrast').flatMap(violation => violation.nodes.map((node) => {
            const data = node.any.find(check => check.id === 'color-contrast')!.data;
            return {selector: node.target.join(' '), foreground: data.fgColor, background: data.bgColor, ratio: data.contrastRatio};
        })).sort((a, b) => a.selector.localeCompare(b.selector));
        expect(contrast).toEqual([
            {selector: '.theme-preview-top > .success.label', foreground: '#ffffff', background: '#22c55e', ratio: 2.27},
            {selector: '.theme-preview-actions > .primary.btn[type="button"]', foreground: '#ffffff', background: '#3b82f6', ratio: 3.67},
            {selector: '.theme-preview-labels > .success.label', foreground: '#ffffff', background: '#22c55e', ratio: 2.27},
            {selector: '.warning', foreground: '#ffffff', background: '#f59e0b', ratio: 2.14},
            {selector: '.danger', foreground: '#ffffff', background: '#ef4444', ratio: 3.76},
            {selector: '.theme-export-actions > .primary.btn[type="button"]', foreground: '#ffffff', background: '#3b82f6', ratio: 3.67},
        ].sort((a, b) => a.selector.localeCompare(b.selector)));
        testInfo.annotations.push({type: 'accessibility-baseline', description: 'Six native ZUI solid skin nodes retain known white-text contrast failures (2.14–3.76:1). No new violations allowed; this is not full WCAG conformance.'});
        await testInfo.attach('原生 ZUI 对比度基线', {body: JSON.stringify(accessibility.violations, null, 2), contentType: 'application/json'});
        await page.setViewportSize({width: 1440, height: 1000});
        await page.evaluate(() => window.scrollTo(0, 0));
        await expect(page.locator('.VPSidebar').getByRole('link', {name: '主题', exact: true})).toBeInViewport({ratio: 1});
        const screenshot = testInfo.outputPath(`theme-${mode === '深色' ? 'dark' : 'light'}.png`);
        await page.screenshot({path: screenshot, fullPage: true});
        await testInfo.attach(`${mode}主题编辑器`, {path: screenshot, contentType: 'image/png'});
    });
}
