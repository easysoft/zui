import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/color-picker/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]);

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
            await expect(page.locator('.plugin-tabs')).toHaveCount(7);
            expect(snippets).toHaveLength(7);

            for (let index = 0; index < snippets.length; index++) {
                await test.step(`Example ${index + 1}`, async () => {
                    let root: Locator;
                    if (mode === 'preview') {
                        const tabs = page.locator('.plugin-tabs').nth(index);
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
    }
}
