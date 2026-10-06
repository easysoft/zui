import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';
import type {Sortable, SortableList} from '@zui/sortable';

type SortableWindow = Window & {zui: {Sortable: typeof Sortable; SortableList: typeof SortableList}};

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/sortable/docs/lib/helpers/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const selectors = ['#priorityTasks', '#taskList .sortable-list'];
const initialOrder = ['docs', 'export', 'preview'];

async function openCopied(page: Page, baseURL: string, code: string, name: string) {
    const url = new URL(`__sortable_${name}__.html`, baseURL).href;
    await page.route(url, route => route.fulfill({
        contentType: 'text/html; charset=utf-8',
        body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
    }));
    await page.goto(url);
}

async function expectOrder(page: Page, index: number, order: string[]) {
    const list = page.locator(selectors[index]);
    const attr = index === 0 ? 'data-id' : 'z-key';
    await expect.poll(() => list.locator(`:scope > [${attr}]`).evaluateAll((items, attribute) => items.map(item => item.getAttribute(attribute)), attr)).toEqual(order);
    await expect(page.locator(index === 0 ? '#priorityTasksStatus' : '#taskListStatus')).toHaveText(`当前顺序：${order.join(' → ')}`);
}

async function exercise(page: Page, index: number) {
    const selector = selectors[index];
    const list = page.locator(selector);
    await expect.poll(() => page.evaluate(selector => !!(window as unknown as SortableWindow).zui.Sortable.get(selector)?.module, selector)).toBe(true);
    await expectOrder(page, index, initialOrder);
    await list.scrollIntoViewIfNeeded();
    expect(await list.evaluate((element) => {
        const box = element.getBoundingClientRect();
        return box.left >= 0 && box.right <= innerWidth && element.scrollWidth <= element.clientWidth;
    })).toBe(true);
    await expect(list).toHaveAttribute('aria-label', index === 0 ? '需求优先级' : '待办需求列表');
    const handles = list.locator(index === 0 ? '.drag-handle' : '.list-item');
    const first = (await handles.first().boundingBox())!;
    const target = (await list.locator(index === 0 ? ':scope > [data-id]' : ':scope > .list-item').nth(1).boundingBox())!;
    await page.mouse.move(first.x + first.width / 2, first.y + first.height / 2);
    await page.mouse.down();
    await page.mouse.move(first.x + first.width / 2, target.y + target.height - 2, {steps: 15});
    await page.mouse.up();
    await expectOrder(page, index, ['export', 'docs', 'preview']);
    if (index === 0) {
        await expect(list.getByRole('button', {name: '上移修复报表导出', exact: true})).toBeDisabled();
        await expect(list.getByRole('button', {name: '下移支持附件预览', exact: true})).toBeDisabled();
        const up = list.getByRole('button', {name: '上移补充使用指南', exact: true});
        const down = list.getByRole('button', {name: '下移补充使用指南', exact: true});
        await up.focus();
        await page.keyboard.press('Tab');
        await expect(down).toBeFocused();
        await page.keyboard.press('Shift+Tab');
        await expect(up).toBeFocused();
        await page.keyboard.press('Enter');
        await expectOrder(page, index, initialOrder);
        await expect(up).toBeDisabled();
        await expect(down).toBeFocused();
        await page.keyboard.press('Space');
        await expectOrder(page, index, ['export', 'docs', 'preview']);
        await expect(down).toBeFocused();
        await page.keyboard.press('Enter');
        await expectOrder(page, index, ['export', 'preview', 'docs']);
        await expect(down).toBeDisabled();
        await expect(up).toBeFocused();
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Sortable ${mode}: dragging, visible order and keyboard controls at ${width}px`, async ({page, baseURL}) => {
            const errors: string[] = [];
            const resources: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                const url = new URL(response.url());
                if (url.pathname.endsWith('/sortable/sortable.min.js')) resources.push(url.origin + url.pathname);
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) {
                    errors.push(`${response.status()} ${response.url()}`);
                }
            });
            await page.setViewportSize({width, height: 900});
            expect(snippets).toHaveLength(2);
            if (mode === 'preview') {
                await page.goto('lib/helpers/sortable/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(2);
            } else {
                await page.route('**/assets/zui/sortable/sortable.min.js*', async (route) => {
                    const response = await route.fetch({url: new URL('zui/sortable/sortable.min.js', baseURL).href});
                    await route.fulfill({response});
                });
            }
            for (let index = 0; index < snippets.length; index++) {
                await test.step(selectors[index], async () => {
                    if (mode === 'preview') {
                        await expect.poll(() => page.evaluate(selector => !!(window as unknown as SortableWindow).zui.Sortable.get(selector)?.module, selectors[index])).toBe(true);
                        const previous = await page.evaluateHandle(selector => (window as unknown as SortableWindow).zui.Sortable.get(selector)!, selectors[index]);
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.module && !instance.element.isConnected)).toBe(true);
                        await previous.dispose();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                    } else {
                        await openCopied(page, baseURL!, snippets[index], String(index));
                    }
                    await exercise(page, index);
                });
            }
            if (mode === 'copied') {
                await openCopied(page, baseURL!, snippets.join('\n'), 'combined');
                await expect.poll(() => page.evaluate(() => (window as unknown as SortableWindow).zui.Sortable.getAll().filter(instance => instance.module).length)).toBe(2);
                await page.getByRole('button', {name: '下移补充使用指南', exact: true}).click();
                await expectOrder(page, 0, ['export', 'docs', 'preview']);
                await expectOrder(page, 1, initialOrder);
            }
            expect(resources).toContain(new URL(`${mode === 'preview' ? 'zui' : 'assets/zui'}/sortable/sortable.min.js`, baseURL).href);
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}

test('Sortable: leaving a loading example cleans up and allows reinitialization', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    let release!: () => void;
    const ready = new Promise<void>((resolve) => {
        release = resolve;
    });
    await page.route('**/sortable/sortable.min.js*', async (route) => {
        await ready;
        await route.continue();
    });
    await page.goto('lib/helpers/sortable/', {waitUntil: 'domcontentloaded'});
    await expect(page.locator('#priorityTasksStatus')).toHaveText('正在加载排序功能…');
    await expect(page.locator('#priorityTasks button:disabled')).toHaveCount(6);
    await expect.poll(() => page.evaluate(() => (window as unknown as SortableWindow).zui.Sortable.getAll().length)).toBe(2);
    const previous = await page.evaluateHandle(() => (window as unknown as SortableWindow).zui.Sortable.get('#priorityTasks')!);
    const tabs = page.locator('.plugin-tabs').first();
    await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
    release();
    await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.module)).toBe(true);
    await previous.dispose();
    await tabs.getByRole('tab', {name: '示例', exact: true}).click();
    await exercise(page, 0);
    const instances = await page.evaluateHandle(() => [...(window as unknown as SortableWindow).zui.Sortable.getAll(), ...(window as unknown as SortableWindow).zui.SortableList.getAll()]);
    await page.locator('.VPDocFooter a.pager-link').first().click();
    await expect.poll(() => instances.evaluate(previous => previous.length === 3 && previous.every(instance => instance.destroyed && !instance.element.isConnected))).toBe(true);
    await instances.dispose();
    expect(errors).toEqual([]);
});

test('Sortable: a missing module leaves keyboard controls disabled with a visible error', async ({page, baseURL}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('**/assets/zui/sortable/sortable.min.js*', route => route.fulfill({status: 404, body: ''}));
    await openCopied(page, baseURL!, snippets[0], 'missing_module');
    await expect(page.locator('#priorityTasksStatus')).toHaveText('排序功能加载失败，请检查资源路径后刷新页面。');
    await expect(page.locator('#priorityTasks button:disabled')).toHaveCount(6);
    expect(errors).toEqual([]);
});
