import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/color-picker/docs/lib/components/index.md'), 'utf8');
const allSnippets = [...source.matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const snippets = allSnippets.filter(snippet => snippet.includes('zui-create="colorPicker"') && !snippet.includes('data-custom="true"'));
const customSnippet = allSnippets.find(snippet => snippet.includes('data-custom="true"'))!;
const inputSnippets = allSnippets.filter(snippet => snippet.includes('colorInput'));

async function expectSwatch(field: Locator, swatch: Locator, value: string, color: string) {
    await expect(field).toHaveCSS('--color-input-value', value);
    await expect(swatch).toHaveCSS('background-color', color, {pseudo: 'before'});
}

async function expectSynced(root: Locator, index: number, value: string, color: string) {
    if (index === 3) {
        await expect(root.locator('#syncText')).toHaveText(value);
        await expect(root.locator('#syncColor')).toHaveCSS('color', color);
        await expect(root.locator('#syncBackground')).toHaveCSS('background-color', color);
        await expect(root.locator('#syncBorder')).toHaveCSS('border-top-color', color);
    } else if (index === 5 || index === 6) {
        await expect(root.locator('input')).toHaveValue(value);
        await expect(root.locator('input')).toHaveCSS('color', color);
    }
}

async function exercise(page: Page, root: Locator, index: number) {
    const trigger = root.locator('.color-picker');
    const pop = page.locator('.color-picker-pop.in');
    await expect(trigger).toHaveCount(1);
    await expect(trigger).toBeVisible();
    if (index === 0 || index === 1 || index === 4 || index === 5) {
        await expect(trigger).toHaveCSS('color', index === 0 ? 'rgb(14, 165, 233)' : index === 1 ? 'rgb(59, 130, 246)' : 'rgb(249, 115, 22)');
    }
    if (index === 2) {
        await expect(trigger.locator('.icon-tint')).toBeVisible();
    } else if (index === 5) {
        await expect(root.locator('input')).toHaveValue('#f97316');
    } else if (index === 6) {
        await expect(root.locator('.input-control-suffix')).toHaveCSS('opacity', '1');
    }

    for (const [value, color] of [['#22c55e', 'rgb(34, 197, 94)'], ['#ef4444', 'rgb(239, 68, 68)']]) {
        await trigger.click();
        await expect(pop).toBeVisible();
        if (index === 1) {
            expect(await pop.locator('[data-pick-value]').evaluateAll(nodes => nodes.map(node => node.getAttribute('data-pick-value')))).toEqual(['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#64748b', '']);
        }
        await pop.getByRole('button', {name: value, exact: true}).click();
        await expect(pop).toHaveCount(0);
        await expect(trigger).not.toHaveClass(/\bis-open\b/);
        await expect(trigger).toHaveCSS('color', color);
        await expectSynced(root, index, value, color);
    }

    await expect.poll(() => root.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
    await trigger.click();
    await expect(pop).toBeVisible();
    if (index === 0 || index === 1 || index === 3) {
        await expect(pop.locator('.color-picker-heading')).toContainText(index === 3 ? '项目标签配色预览' : '项目标签颜色');
        await pop.locator('[data-dismiss="pick"]').click();
    } else {
        // Use the example padding, avoiding navigation controls outside the preview.
        await root.click({position: {x: 8, y: 8}});
    }
    await expect(pop).toHaveCount(0);
    await expect(trigger).not.toHaveClass(/\bis-open\b/);
    await expect(trigger).toHaveCSS('color', 'rgb(239, 68, 68)');

    await trigger.click();
    await pop.locator('[data-pick-value=""]').click();
    await expect(pop).toHaveCount(0);
    await expect(trigger).not.toHaveClass(/\bis-open\b/);
    if (index === 3) {
        await expect(root.locator('#syncText')).toBeEmpty();
        expect(await root.locator('#syncColor, #syncBackground, #syncBorder').evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.cssText))).toEqual(['', '', '']);
    } else if (index === 5 || index === 6) {
        await expect(root.locator('input')).toHaveValue('');
        expect(await root.locator('input').evaluate(element => element.style.color)).toBe('');
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`ColorPicker ${mode}: complete examples and color synchronization at ${width}px`, async ({page, baseURL}) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) {
                    errors.push(`${response.status()} ${response.url()}`);
                }
            });
            await page.setViewportSize({width, height: 900});
            await page.goto('lib/components/color-picker/');
            await expect(page.locator('.plugin-tabs')).toHaveCount(allSnippets.length);
            expect(snippets).toHaveLength(7);

            for (let index = 0; index < snippets.length; index++) {
                await test.step(`Example ${index + 1}`, async () => {
                    let root: Locator;
                    if (mode === 'preview') {
                        const tabs = page.locator('.plugin-tabs').nth(allSnippets.indexOf(snippets[index]));
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                        root = tabs.locator('.example');
                    } else {
                        const url = new URL(`__color_picker_${index}__.html`, baseURL).href;
                        await page.route(url, route => route.fulfill({
                            contentType: 'text/html; charset=utf-8',
                            body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${snippets[index]}</main></body></html>`,
                        }));
                        await page.goto(url);
                        root = page.locator('main');
                    }
                    await exercise(page, root, index);
                });
            }
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });

        test(`ColorInput ${mode}: color feedback and form values at ${width}px`, async ({page, baseURL}) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            await page.setViewportSize({width, height: 900});
            await page.goto('lib/components/color-picker/');
            expect(inputSnippets).toHaveLength(2);

            if (mode === 'copied') {
                const url = new URL('__color_input__.html', baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${inputSnippets.join('\n')}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (const [index, snippet] of inputSnippets.entries()) {
                const tabs = page.locator('.plugin-tabs').nth(allSnippets.indexOf(snippet));
                if (mode === 'preview') {
                    await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                    await expect(tabs.locator('pre code')).toHaveText(snippet);
                    await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                }
                const root = mode === 'preview' ? tabs.locator('.example') : page.locator('main');
                const input = root.getByLabel(index === 0 ? '选择项目标签颜色' : '选择主题颜色', {exact: true});
                const field = input.locator('..');
                const swatch = field.locator('label');
                const initialValue = index === 0 ? '#3b82f6' : '#0ea5e9';
                await expect(input).toHaveValue(initialValue);
                await expectSwatch(field, swatch, initialValue, index === 0 ? 'rgb(59, 130, 246)' : 'rgb(14, 165, 233)');
                if (index === 0) {
                    const emptyInput = root.getByLabel('选择可选颜色', {exact: true});
                    await expect(emptyInput.locator('..')).toHaveClass(/\bis-empty\b/);
                    await expect(emptyInput).toHaveValue('#000000');
                    await expect(emptyInput.locator('..').locator('label')).toHaveCSS('background-image', /conic-gradient/, {pseudo: 'before'});
                    const iconInput = root.getByLabel('选择带图标的颜色', {exact: true});
                    await expect(iconInput).toHaveValue('#f59e0b');
                    await expect(iconInput.locator('..').locator('.icon-check')).toBeVisible();
                }
                await input.focus();
                await expect(input).toBeFocused();

                // Native OS color dialogs are outside the page; exercise their DOM events.
                await input.evaluate((element) => {
                    (element as HTMLInputElement).value = '#22c55e';
                    element.dispatchEvent(new Event('input', {bubbles: true}));
                });
                await expectSwatch(field, swatch, '#22c55e', 'rgb(34, 197, 94)');
                if (index === 1) {
                    await expect(root.locator('#colorInputPreview')).toHaveText('#22c55e');
                    await expect(root.locator('#colorInputValue')).toHaveText(initialValue);
                    expect(await root.locator('form').evaluate(form => new FormData(form as HTMLFormElement).getAll('accentColor'))).toEqual(['#22c55e']);
                }
                await input.dispatchEvent('change');
                await expect(input).toHaveValue('#22c55e');
                if (index === 1) {
                    await expect(root.locator('#colorInputPreview')).toHaveText('#22c55e');
                    await expect(root.locator('#colorInputValue')).toHaveText('#22c55e');
                    expect(await root.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('accentColor'))).toBe('#22c55e');
                }
                await expect.poll(() => root.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);

                if (mode === 'preview') {
                    await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                    await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                    await expect(input).toHaveValue(initialValue);
                    if (index === 1) {
                        await expect(root.locator('#colorInputPreview')).toHaveText(initialValue);
                        await expect(root.locator('#colorInputValue')).toHaveText(initialValue);
                    }
                }
            }
            expect(errors, 'Page errors').toEqual([]);
        });

        test(`ColorPicker custom ${mode}: preset, custom and empty states at ${width}px`, async ({page, baseURL}) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            await page.setViewportSize({width, height: 900});
            await page.goto('lib/components/color-picker/');
            let root: Locator;
            if (mode === 'preview') {
                const tabs = page.locator('.plugin-tabs').nth(allSnippets.indexOf(customSnippet));
                await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                await expect(tabs.locator('pre code')).toHaveText(customSnippet);
                await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                root = tabs.locator('.example');
            } else {
                const url = new URL('__custom_color_picker__.html', baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${customSnippet}</main></body></html>`,
                }));
                await page.goto(url);
                root = page.locator('main');
            }
            const trigger = root.locator('.color-picker');
            const output = root.locator('#customColorValue');
            const pop = page.locator('.color-picker-pop.in');
            const row = pop.locator('.color-picker-row');
            const custom = pop.locator('.color-picker-custom');
            const input = custom.locator('input[type="color"]');
            await expect(output).toHaveText('#123456');
            await trigger.click();
            await expect(row).toHaveClass(/\bis-custom\b/);
            await expect(input).toHaveValue('#123456');
            await expect(custom.locator('.icon-check')).toHaveCSS('opacity', '1');
            await expect(custom.locator('label')).toHaveCSS('background-color', 'rgb(18, 52, 86)', {pseudo: 'after'});

            await pop.getByRole('button', {name: '#22c55e', exact: true}).click();
            await expect(pop).toHaveCount(0);
            await expect(output).toHaveText('#22c55e');
            await trigger.click();
            await expect(row).not.toHaveClass(/\bis-custom\b/);
            await expect(input).toHaveValue('#000000');
            await expect(custom.locator('.icon-check')).toHaveCSS('opacity', '0');
            await input.evaluate((element) => {
                (element as HTMLInputElement).value = '#abcdef';
                element.dispatchEvent(new Event('input', {bubbles: true}));
            });
            await expect(output).toHaveText('#22c55e');
            await input.dispatchEvent('change');
            await expect(pop).toHaveCount(0);
            await expect(output).toHaveText('#abcdef');
            await trigger.click();
            await expect(row).toHaveClass(/\bis-custom\b/);
            await expect(input).toHaveValue('#abcdef');
            await expect(custom.locator('label')).toHaveCSS('background-color', 'rgb(171, 205, 239)', {pseudo: 'after'});

            await pop.locator('[data-pick-value=""]').click();
            await expect(pop).toHaveCount(0);
            await expect(output).toBeEmpty();
            await trigger.click();
            await expect(row).not.toHaveClass(/\bis-custom\b/);
            await expect(custom).toHaveClass(/\bis-empty\b/);
            await expect(custom.locator('.icon-check')).toHaveCSS('opacity', '0');
            await expect(custom.locator('label')).toHaveCSS('background-image', /conic-gradient/, {pseudo: 'before'});
            await pop.locator('[data-dismiss="pick"]').click();
            await expect(pop).toHaveCount(0);
            await expect.poll(() => root.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
            expect(errors, 'Page errors').toEqual([]);
        });
    }
}
