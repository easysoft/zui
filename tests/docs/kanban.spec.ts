import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';
import type {Kanban} from '@zui/kanban';

type KanbanWindow = Window & {zui: {Kanban: typeof Kanban}};

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/kanban/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const ids = ['releaseKanban', 'kanbanReleaseDemo'];

async function expectInitial(page: Page, index: number) {
    const board = page.locator(`#${ids[index]}`);
    await expect(board.locator('.kanban-item')).toHaveCount(index === 0 ? 2 : 6);
    if (index === 0) {
        await expect(board.locator('.kanban-lane-col[z-col="todo"] .kanban-item')).toHaveAttribute('z-key', 'docs');
    } else {
        await expect(page.locator('#kanbanDemoSummary')).toHaveText('待处理 2 · 进行中 2 · 已完成 2');
        await expect(page.getByLabel('任务名称', {exact: true})).toBeEnabled();
        await expect(page.getByLabel('任务名称', {exact: true})).toHaveValue('');
        await expect(page.getByRole('button', {name: '新增任务', exact: true})).toBeDisabled();
        await expect(page.getByRole('button', {name: '重置', exact: true})).toBeEnabled();
    }
}

async function exercise(page: Page, index: number, width: number) {
    const board = page.locator(`#${ids[index]}`);
    const scroller = page.getByRole('region', {name: index === 0 ? '基础发布看板，可横向滚动' : '客户门户发布看板，可横向滚动', exact: true});
    await expectInitial(page, index);
    await scroller.scrollIntoViewIfNeeded();
    await expect(scroller).toHaveCSS('height', index === 0 ? '192px' : '400px');
    await expect(scroller).toHaveCSS('overflow', 'auto');
    expect(await scroller.evaluate((element) => {
        const box = element.getBoundingClientRect();
        return box.left >= 0 && box.right <= innerWidth;
    })).toBe(true);
    if (width === 320) {
        await scroller.focus();
        await page.keyboard.press('ArrowRight');
        await expect.poll(() => scroller.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
        await expect(scroller).toBeFocused();
        await scroller.evaluate(element => element.scrollLeft = 0);
    }

    if (index === 0) {
        const status = page.locator('#releaseKanbanStatus');
        const card = board.locator('.kanban-item[z-key="docs"]');
        await card.click();
        await expect(status).toHaveText('已选择：docs');
        await status.click();
        await expect(status).toHaveText('未选择卡片');
        if (width === 1280) {
            await card.dragTo(board.locator('.kanban-lane-col[z-col="done"] .kanban-items'));
            await expect(board.locator('.kanban-lane-col[z-col="done"] .kanban-item')).toHaveAttribute('z-key', 'docs');
            await expect(status).toHaveText('已移动：docs');
        }
        return;
    }

    const title = page.getByLabel('任务名称', {exact: true});
    const add = page.getByRole('button', {name: '新增任务', exact: true});
    const status = page.locator('#kanbanDemoStatus');
    await title.fill('   ');
    await expect(add).toBeDisabled();
    await title.press('Enter');
    await expect(board.locator('.kanban-item')).toHaveCount(6);
    await title.fill('  补充上传失败提示  ');
    await title.press('Enter');
    await expect(board.locator('.kanban-item')).toHaveCount(7);
    await expect(board.locator('.kanban-lane-col[z-lane="web"][z-col="todo"] [z-key="demo-task-1"]')).toContainText('补充上传失败提示');
    await expect(page.locator('#kanbanDemoSummary')).toHaveText('待处理 3 · 进行中 2 · 已完成 2');
    await expect(status).toHaveText('已新增「补充上传失败提示」，位于「前端 / 待处理」。');
    await expect(title).toHaveValue('');
    await expect(add).toBeDisabled();

    const card = board.locator('.kanban-item[z-key="preview"]');
    await card.getByRole('button', {name: '开始处理：补充附件预览入口', exact: true}).focus();
    for (const [key, action, col] of [['Enter', '标记完成', '进行中'], ['Space', '重新打开', '已完成'], ['Enter', '开始处理', '待处理']]) {
        await page.keyboard.press(key);
        await expect(card.getByRole('button', {name: `${action}：补充附件预览入口`, exact: true})).toBeFocused();
        await expect(status).toHaveText(`已将「补充附件预览入口」移至「${col}」。`);
    }

    const targetCol = width === 1280 ? 'doing' : 'todo';
    const target = board.locator(`.kanban-lane-col[z-lane="api"][z-col="${targetCol}"] .kanban-items`);
    await card.dragTo(target, {targetPosition: {x: 24, y: 24}});
    await expect(board.locator(`.kanban-lane-col[z-lane="api"][z-col="${targetCol}"] .kanban-item[z-key="preview"]`)).toBeVisible();
    await expect(status).toHaveText(`已将「补充附件预览入口」移至「服务端 / ${targetCol === 'doing' ? '进行中' : '待处理'}」。`);
    await expect(page.locator('#kanbanDemoSummary')).toHaveText(targetCol === 'doing' ? '待处理 2 · 进行中 3 · 已完成 2' : '待处理 3 · 进行中 2 · 已完成 2');

    const previous = await page.evaluateHandle(() => (window as unknown as KanbanWindow).zui.Kanban.get('#kanbanReleaseDemo')!);
    await page.getByRole('button', {name: '重置', exact: true}).click();
    await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.$)).toBe(true);
    await previous.dispose();
    await expectInitial(page, index);
    await expect(status).toHaveText('已恢复初始的 6 项任务。');
    await title.fill('检查权限提示');
    await add.click();
    await expect(board.locator('.kanban-item')).toHaveCount(7);
    await expect(board.locator('[z-key="demo-task-1"]')).toContainText('检查权限提示');
    await expect(status).toHaveText('已新增「检查权限提示」，位于「前端 / 待处理」。');
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Kanban ${mode}: complete examples, dragging, keyboard and reset at ${width}px`, async ({page, baseURL}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
            });
            await page.setViewportSize({width, height: 900});
            expect(snippets).toHaveLength(2);
            if (mode === 'preview') {
                await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
                await page.goto('lib/components/kanban/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(2);
            }

            async function openCopied(code: string, name: string) {
                const url = new URL(`__kanban_${name}__.html`, baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (const [index, id] of ids.entries()) {
                await test.step(id, async () => {
                    if (mode === 'copied') await openCopied(snippets[index], id);
                    await exercise(page, index, width);
                    if (mode === 'preview') {
                        const previous = await page.evaluateHandle(id => (window as unknown as KanbanWindow).zui.Kanban.get(`#${id}`)!, id);
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        await tabs.screenshot({path: testInfo.outputPath(`${id}-${width}.png`)});
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.$ && !instance.element.isConnected)).toBe(true);
                        await previous.dispose();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.locator('button.copy').click();
                        await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                        await expectInitial(page, index);
                        await expect(page.locator(index === 0 ? '#releaseKanbanStatus' : '#kanbanDemoStatus')).toHaveText(index === 0 ? '点击或拖动卡片' : '可拖动卡片，或使用卡片下方的按钮。');
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
                await page.evaluate(() => (window as unknown as KanbanWindow).zui.Kanban.get('#kanbanReleaseDemo')!.destroy());
                await expect(page.getByLabel('任务名称', {exact: true})).toBeDisabled();
                expect(await page.locator('#kanbanDemoForm').evaluate(element => (element as HTMLFormElement).onsubmit)).toBeNull();
                await expectInitial(page, 0);
            } else {
                const previous = await page.evaluateHandle(ids => ids.map(id => (window as unknown as KanbanWindow).zui.Kanban.get(`#${id}`)!), ids);
                await page.locator('.VPDocFooter a.pager-link').first().click();
                await expect.poll(() => previous.evaluate(instances => instances.every(instance => instance.destroyed && !instance.$ && !instance.element.isConnected))).toBe(true);
                await previous.dispose();
            }
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}
