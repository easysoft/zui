import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/messager/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]);

async function exercise(page: Page, root: Locator, index: number) {
    const buttons = root.getByRole('button');
    await expect(buttons).toHaveCount([1, 7, 11, 1, 1, 1, 1][index]);
    await root.scrollIntoViewIfNeeded();
    expect(await root.evaluate((element) => {
        const bounds = element.getBoundingClientRect();
        return [...element.querySelectorAll('button')].every((button) => {
            const rect = button.getBoundingClientRect();
            return rect.left >= bounds.left && rect.right <= bounds.right;
        });
    }), 'Every trigger fits inside the example').toBe(true);

    for (const button of await buttons.all()) {
        await button.click();
        const message = page.locator('.messager.in').first();
        await expect(message).toBeVisible();
        if (index === 1) {
            const placement = (await button.innerText()).trim();
            await expect(page.locator(`.messagers-${placement} .messager.in`)).toHaveCount(1);
        } else if (index === 2) {
            const classes = (await button.innerText()).trim().split(' ');
            for (const name of classes) {
                await expect(message).toHaveClass(new RegExp(`\\b${name}\\b`));
            }
        } else if (index === 3) {
            await expect(message.locator('.alert-close')).toHaveCount(0);
        } else if (index === 4) {
            await expect(message).toContainText('项目周报.pdf 已移至回收站。');
            await message.getByRole('button', {name: '撤销'}).click();
            await expect(page.locator('.messager.in').filter({hasText: '项目周报.pdf 已恢复。'})).toBeVisible();
        } else if (index === 5) {
            await expect(message).toContainText('连接已断开');
            // Wait beyond the documented default to distinguish time: 0 from auto-hide.
            await page.waitForTimeout(5500);
            await expect(message).toBeVisible();
        } else if (index === 6) {
            await expect(message).not.toHaveClass(/\bfade(?:-|\s|$)/);
        }
        if (index === 0 || index === 3) {
            await expect(page.locator('.messager')).toHaveCount(0, {timeout: 6500});
        } else {
            let remaining = await page.locator('.messager').count();
            while (remaining) {
                await page.locator('.messager.in .alert-close').first().press('Enter');
                await expect(page.locator('.messager')).toHaveCount(--remaining);
            }
            await expect(page.locator('.messager')).toHaveCount(0);
        }
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Messager ${mode}: complete examples and visible feedback at ${width}px`, async ({page, baseURL}) => {
            test.slow();
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) {
                    errors.push(`${response.status()} ${response.url()}`);
                }
            });
            await page.setViewportSize({width, height: 900});
            await page.goto('lib/components/messager/');
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
                        const url = new URL(`__messager_${index}__.html`, baseURL).href;
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
