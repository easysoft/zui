import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator} from '@playwright/test';
import type {VirtualList} from '@zui/virtualize';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/virtualize/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const examples = [
    {id: 'virtual-list-fixed', count: 10000, label: '待分派工单列表', text: '工单 #10001 · 待分派'},
    {id: 'virtual-list-dynamic', count: 500, label: '工单处理记录列表', text: '工单 #10001 处理记录'},
    {id: 'virtual-list-horizontal', count: 1000, label: '水平卡片列表', text: '客户档案 #1001'},
    {id: 'virtual-list-lanes', count: 600, label: '三列工单列表', text: '第 1 列 · 工单 #10001'},
];

async function exercise(list: Locator, index: number) {
    const first = list.locator('[data-index="0"]');
    const items = list.getByRole('listitem');
    await list.scrollIntoViewIfNeeded();
    await expect(first).toContainText(examples[index].text);
    await expect(first).toHaveAttribute('aria-setsize', String(examples[index].count));
    await expect(list).toHaveAttribute('aria-label', examples[index].label);
    await expect(list).toHaveAttribute('tabindex', '0');
    await expect(list).toHaveCSS('overflow', 'auto');
    expect(await items.count()).toBeLessThan(60);
    expect(await list.evaluate(element => element.getBoundingClientRect().right <= innerWidth)).toBe(true);

    if (index === 0) {
        await expect(first).toHaveCSS('height', '36px');
        await expect(list.locator('.virtual-list-content')).toHaveCSS('height', '360000px');
    } else if (index === 1) {
        const second = list.locator('[data-index="1"]');
        await expect(first).toHaveCSS('white-space', 'pre-wrap');
        await expect.poll(async () => {
            const a = await first.boundingBox();
            const b = await second.boundingBox();
            return Math.abs(b!.y - a!.y - a!.height);
        }).toBeLessThan(1);
        expect((await second.boundingBox())!.height).toBeGreaterThan((await first.boundingBox())!.height);
    } else if (index === 2) {
        await expect(first).toHaveCSS('width', '160px');
        await expect(list.locator('.virtual-list-content')).toHaveCSS('width', '168008px');
    } else {
        const boxes = await Promise.all([0, 1, 2].map(i => list.locator(`[data-index="${i}"]`).boundingBox()));
        for (let i = 0; i < boxes.length; i++) {
            expect(boxes[i]!.height).toBe(72 + i * 24);
            expect(Math.abs(boxes[i]!.width - boxes[0]!.width)).toBeLessThan(1);
            expect(Math.abs(boxes[i]!.x - boxes[0]!.x - i * boxes[0]!.width)).toBeLessThan(1);
            expect(Math.abs(boxes[i]!.y - boxes[0]!.y)).toBeLessThan(1);
        }
        expect(await items.evaluateAll(nodes => nodes.every(node => node.scrollWidth <= node.clientWidth && node.scrollHeight <= node.clientHeight))).toBe(true);
    }

    await list.evaluate((element, i) => {
        if (i === 2) {
            element.scrollLeft = 8 + 20 * 168;
        } else {
            element.scrollTop = i === 0 ? 5000 * 36 : 1200;
        }
    }, index);
    await expect(first).toHaveCount(0);
    if (index === 0 || index === 2) {
        await expect(list.locator(`[data-index="${index === 0 ? 5000 : 20}"]`)).toBeVisible();
    }
    expect(await items.count()).toBeGreaterThan(0);
    expect(await items.count()).toBeLessThan(60);
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Virtualize ${mode}: complete examples and scrolling at ${width}px`, async ({page, baseURL}) => {
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
                await page.goto('lib/components/virtualize/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(examples.length);
            }

            async function openCopied(code: string, name: string) {
                const url = new URL(`__virtualize_${name}__.html`, baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (let index = 0; index < examples.length; index++) {
                const {id} = examples[index];
                await test.step(id, async () => {
                    if (mode === 'preview') {
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        await expect(tabs.locator('.virtual-list')).toBeVisible();
                        const previous = await page.evaluateHandle(id => (window as unknown as {zui: {VirtualList: typeof VirtualList}}).zui.VirtualList.get(`#${id}`)!, id);
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.element.isConnected)).toBe(true);
                        await previous.dispose();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                    } else {
                        await openCopied(snippets[index], id);
                    }
                    await exercise(page.locator(`#${id} .virtual-list`), index);
                });
            }
            if (mode === 'copied') {
                await openCopied(snippets.join('\n'), 'combined');
                await expect(page.locator('.virtual-list')).toHaveCount(examples.length);
                for (const {id, text} of examples) {
                    await expect(page.locator(`#${id} [data-index="0"]`)).toContainText(text);
                }
            }
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}
