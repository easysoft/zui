import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';
import type {List, NestedList} from '@zui/list';

type ListWindow = Window & {zui: {List: typeof List; NestedList: typeof NestedList}};

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/list/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const ids = ['documentList', 'largeDocumentList', 'autoDocumentList', 'checkableDocuments', 'nestedDocuments'];
const initialCounts = [3, 3, 20, 2, 2];

function listRoot(page: Page, id: string) {
    return page.locator(`ul#${id}, #${id} > ul`);
}

async function expectInitial(page: Page, index: number) {
    const list = listRoot(page, ids[index]);
    await expect(list).toBeVisible();
    await expect(list.locator(':scope > [z-item]')).toHaveCount(initialCounts[index]);
    if (index === 3) {
        await expect(page.locator('#checkedDocumentsStatus')).toHaveText('已勾选：无');
        for (const input of await list.getByRole('checkbox').all()) await expect(input).not.toBeChecked();
    } else if (index === 4) {
        await expect(list.locator('[z-list="docs"]')).not.toBeVisible();
    }
}

async function exercise(page: Page, index: number) {
    const list = listRoot(page, ids[index]);
    const items = list.locator(':scope > [z-item]');
    const scroller = page.getByRole('region', {name: '自动分批显示的客户工单', exact: true});
    await expectInitial(page, index);
    await (index === 2 ? scroller : list).scrollIntoViewIfNeeded();
    expect(await list.evaluate((element) => {
        const box = element.getBoundingClientRect();
        return box.left >= 0 && box.right <= innerWidth && element.scrollWidth <= element.clientWidth;
    })).toBe(true);

    if (index === 0) {
        await expect(items.locator('.item-title')).toHaveText(['使用指南', '设置', '归档']);
        await expect(items.last().locator('.listitem')).toHaveClass(/disabled/);
        await expect(list.locator('.icon-book')).toBeVisible();
        await expect(list.locator('.icon-cog')).toBeVisible();
    } else if (index === 1) {
        const more = list.getByRole('button');
        await expect(more).toHaveText('还有 4 项，点击继续显示');
        await more.focus();
        await page.keyboard.press('Enter');
        await expect(items).toHaveCount(6);
        await expect(more).toHaveText('还有 1 项，点击继续显示');
        await expect(items.nth(3)).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(more).toBeFocused();
        await page.keyboard.press('Space');
        await expect(items).toHaveCount(7);
        await expect(more).toHaveCount(0);
        await expect(items.last()).toBeFocused();
        await expect(items.last()).toHaveText('贡献指南');
    } else if (index === 2) {
        await expect(scroller).toHaveCSS('overflow', 'auto');
        await expect(scroller).toHaveAttribute('tabindex', '0');
        await scroller.focus();
        await page.keyboard.press('End');
        await expect(items).toHaveCount(30);
        await expect(scroller).toBeFocused();
        await scroller.evaluate(element => element.scrollTop = element.scrollHeight);
        await expect(items).toHaveCount(40);
        await expect(scroller).toBeFocused();
        await expect(items.first()).toContainText('工单 #10001');
        await expect(items.last()).toContainText('工单 #10040');
    } else if (index === 3) {
        const inputs = list.getByRole('checkbox');
        const status = page.locator('#checkedDocumentsStatus');
        await list.locator('.item-checkbox label').first().click();
        await expect(inputs.first()).toBeChecked();
        await expect(status).toHaveText('已勾选：docs');
        await list.locator('.item-title').first().click();
        await expect(inputs.first()).toBeChecked();
        await inputs.last().focus();
        await page.keyboard.press('Space');
        await expect(inputs.last()).toBeChecked();
        await expect(status).toHaveText('已勾选：docs、build');
        await page.keyboard.press('Space');
        await expect(status).toHaveText('已勾选：docs');
        await inputs.first().focus();
        await page.keyboard.press('Space');
        await expect(status).toHaveText('已勾选：无');
        await list.locator('.item-checkbox label').first().click();
        await expect(status).toHaveText('已勾选：docs');
    } else {
        const toggle = items.first().locator('.nested-toggle-icon').first();
        const children = list.locator('[z-list="docs"]');
        await toggle.click();
        await expect(children).toBeVisible();
        await expect(children.locator(':scope > [z-item]')).toHaveText(['介绍', 'API']);
        await toggle.click();
        await expect(children).not.toBeVisible();
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`List ${mode}: complete examples, keyboard and scrolling at ${width}px`, async ({page, baseURL}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
            });
            await page.setViewportSize({width, height: 900});
            expect(snippets).toHaveLength(ids.length);
            if (mode === 'preview') {
                await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
                await page.goto('lib/components/list/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(ids.length);
            }

            async function openCopied(code: string, name: string) {
                const url = new URL(`__list_${name}__.html`, baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (const [index, id] of ids.entries()) {
                await test.step(id, async () => {
                    if (mode === 'copied') await openCopied(snippets[index], id);
                    await exercise(page, index);
                    if (mode === 'preview') {
                        const previous = await page.evaluateHandle(id => id === 'nestedDocuments'
                            ? (window as unknown as ListWindow).zui.NestedList.get(`#${id}`)!
                            : (window as unknown as ListWindow).zui.List.get(`#${id}`)!, id);
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        if (index === 3) await tabs.screenshot({path: testInfo.outputPath(`checked-${width}.png`)});
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.$ && !instance.element.isConnected)).toBe(true);
                        await previous.dispose();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.locator('button.copy').click();
                        await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                        await expectInitial(page, index);
                    }
                });
            }
            if (mode === 'copied') {
                await openCopied(snippets.join('\n'), 'combined');
                for (let index = 0; index < ids.length; index++) await expectInitial(page, index);
                expect(await page.locator('[id]').evaluateAll((elements) => {
                    const ids = elements.map(element => element.id);
                    return new Set(ids).size === ids.length;
                })).toBe(true);
            } else {
                const previous = await page.evaluateHandle(ids => ids.map(id => id === 'nestedDocuments'
                    ? (window as unknown as ListWindow).zui.NestedList.get(`#${id}`)!
                    : (window as unknown as ListWindow).zui.List.get(`#${id}`)!), ids);
                await page.locator('.VPDocFooter a.pager-link').first().click();
                await expect.poll(() => previous.evaluate(instances => instances.every(instance => instance.destroyed && !instance.$ && !instance.element.isConnected))).toBe(true);
                await previous.dispose();
            }
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}
