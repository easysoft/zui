import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';
import type {Sidebar} from '@zui/sidebar';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/sidebar/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const examples = [
    [{id: 'projectSidebar', label: '项目导航', side: 'left'}],
    [
        {id: 'sharedSidebarLeft', label: '项目目录', side: 'left'},
        {id: 'sharedSidebarRight', label: '任务详情', side: 'right'},
    ],
];

async function expectWidths(sidebars: Locator[], width: number) {
    for (const sidebar of sidebars) {
        await expect.poll(async () => Math.abs((await sidebar.boundingBox())!.width - width)).toBeLessThan(1);
    }
}

async function drag(page: Page, sidebar: Locator, delta: number) {
    const gutter = sidebar.locator('.sidebar-gutter');
    await gutter.scrollIntoViewIfNeeded();
    const box = (await gutter.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + 16);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + delta, box.y + 16, {steps: 6});
    await page.mouse.up();
}

async function exercise(page: Page, index: number) {
    const group = examples[index];
    const sidebars = group.map(({id}) => page.locator(`#${id}`));
    const containerWidth = await sidebars[0].evaluate(element => element.parentElement!.clientWidth);
    const initial = Math.max(96, containerWidth * 0.4);
    const maximum = containerWidth * 0.65;
    await expectWidths(sidebars, initial);
    for (const [i, sidebar] of sidebars.entries()) {
        await expect(sidebar).toHaveClass(new RegExp(`sidebar-${group[i].side}`));
        await expect(page.getByRole('complementary', {name: group[i].label, exact: true})).toHaveCount(1);
        await expect(sidebar.getByRole('button', {name: `折叠或展开${group[i].label}`, exact: true})).toBeVisible();
        expect(await sidebar.evaluate((element) => {
            const row = element.parentElement!;
            const box = row.getBoundingClientRect();
            return box.left >= 0 && box.right <= innerWidth && row.scrollWidth <= row.clientWidth;
        })).toBe(true);
    }

    await drag(page, sidebars[0], 32);
    let resized = Math.min(initial + 32, maximum);
    await expectWidths(sidebars, resized);
    if (sidebars.length === 2) {
        await drag(page, sidebars[1], -24);
        resized = Math.min(resized + 24, maximum);
        await expectWidths(sidebars, resized);
    }
    await drag(page, sidebars[0], maximum - resized + 20);
    await expectWidths(sidebars, maximum);
    await sidebars.at(-1)!.locator('.sidebar-gutter').dblclick({position: {x: 6, y: 16}});
    await expectWidths(sidebars, initial);

    const firstButton = sidebars[0].getByRole('button');
    await firstButton.focus();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Tab');
    await expect(firstButton).toBeFocused();
    await page.keyboard.press('Enter');
    await expectWidths(sidebars, 0);
    for (const sidebar of sidebars) {
        await expect(sidebar.locator(':scope > .surface')).toBeHidden();
    }
    await sidebars.at(-1)!.getByRole('button').focus();
    await page.keyboard.press('Space');
    await expectWidths(sidebars, initial);
    for (const sidebar of sidebars) {
        await expect(sidebar.locator(':scope > .surface')).toBeVisible();
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Sidebar ${mode}: resize, sync and keyboard controls at ${width}px`, async ({page, baseURL}) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) {
                    errors.push(`${response.status()} ${response.url()}`);
                }
            });
            await page.setViewportSize({width, height: 900});
            expect(snippets).toHaveLength(examples.length);
            if (mode === 'preview') {
                await page.goto('lib/components/sidebar/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(examples.length);
            }

            async function openCopied(code: string, name: string) {
                const url = new URL(`__sidebar_${name}__.html`, baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (let index = 0; index < examples.length; index++) {
                await test.step(examples[index][0].id, async () => {
                    if (mode === 'preview') {
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        await expect(tabs.locator('.gutter-toggle')).toHaveCount(examples[index].length);
                        const previous = await page.evaluateHandle(ids => ids.map(id => (window as unknown as {zui: {Sidebar: typeof Sidebar}}).zui.Sidebar.get(`#${id}`)!), examples[index].map(({id}) => id));
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect.poll(() => previous.evaluate(instances => instances.every(instance => instance.destroyed && !instance.element.isConnected))).toBe(true);
                        await previous.dispose();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                    } else {
                        await openCopied(snippets[index], String(index));
                    }
                    await exercise(page, index);
                });
            }
            if (mode === 'copied') {
                await openCopied(snippets.join('\n'), 'combined');
                await expect(page.locator('.gutter-toggle')).toHaveCount(3);
                await page.locator('#sharedSidebarLeft .gutter-toggle').click();
                await expectWidths(examples[1].map(({id}) => page.locator(`#${id}`)), 0);
                await expect(page.locator('#projectSidebar')).toHaveClass(/is-expanded/);
            }
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}
