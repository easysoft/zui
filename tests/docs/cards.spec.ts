import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';
import type {Card, CardList} from '@zui/cards';

type CardsWindow = Window & {zui: {Card: typeof Card; CardList: typeof CardList}};

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/cards/docs/lib/components/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const ids = ['projectCardStructure', 'projectCard', 'projectActionCard', 'releaseChecklistCard', 'projectCardSelection', 'projectCards'];
const instanceIds = ['projectCard', 'projectActionCard', 'releaseChecklistCard', 'selectedProjectCard', 'projectCards'];

function cardRoot(page: Page, id: string) {
    return page.locator(`.card#${id}, #${id} > .card`);
}

async function expectInitial(page: Page, index: number) {
    const root = page.locator(`#${ids[index]}`);
    await expect(root).toBeVisible();
    if (index < 2) {
        await expect(root.locator('.card-header')).toHaveText('迭代计划');
        await expect(root.locator('.card-title')).toHaveText('客户门户升级');
        await expect(root.locator('.card-subtitle')).toHaveText('客户服务 · 九月迭代');
        await expect(root.locator('.card-content')).toContainText('支持客户自助查询工单进展，减少重复咨询。');
        await expect(root.locator('.card-footer')).toHaveText('负责人：林悦');
    } else if (index === 2) {
        await expect(root.getByRole('button', {name: '关注项目', exact: true})).toBeVisible();
        await expect(root.getByRole('button', {name: '查看进展', exact: true})).toBeVisible();
        await expect(page.locator('#projectCardAction')).toHaveText('点击卡片上的按钮查看操作结果。');
    } else if (index === 3) {
        await expect(root.locator('.card-title')).toHaveText('发布前检查');
        await expect(root.locator('.card-list > [z-item]')).toHaveText(['完成附件预览验收', '检查移动端上传', '确认消息通知范围']);
        await expect(root.locator('.card-footer')).toHaveText('共 3 项检查');
    } else if (index === 4) {
        await expect(root.locator('.card')).toHaveCount(2);
        await expect(root.locator('.card').first()).not.toHaveClass(/selected/);
        await expect(cardRoot(page, 'selectedProjectCard')).toHaveClass(/selected/);
        await expect(cardRoot(page, 'selectedProjectCard').locator('.card-content')).toHaveText('已选择');
        await expect(root.getByRole('button')).toBeEnabled();
        await expect(root.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    } else {
        await expect(root.locator('.card-list-item')).toHaveCount(4);
        await expect(root.locator('.card-title')).toHaveText(['客户门户', '团队知识库', '移动端工单', '服务报表']);
        await expect(root.locator('.card.selected')).toHaveCount(1);
        await expect(root.locator('.card.selected .card-title')).toHaveText('客户门户');
    }
}

async function expectGrid(page: Page, columns: number) {
    const boxes = await page.locator('#projectCards .card').evaluateAll(elements => elements.map((element) => {
        const {x, y, width, height} = element.getBoundingClientRect();
        return {x, y, width, height};
    }));
    expect(boxes).toHaveLength(4);
    if (columns === 2) {
        expect(Math.abs(boxes[0].y - boxes[1].y)).toBeLessThan(1);
        expect(Math.abs(boxes[0].height - boxes[1].height)).toBeLessThan(1);
        expect(Math.abs(boxes[0].width - boxes[1].width)).toBeLessThan(1);
        expect(boxes[1].x - boxes[0].x - boxes[0].width).toBeCloseTo(16, 0);
        expect(boxes[2].y).toBeGreaterThan(boxes[0].y + boxes[0].height);
    } else {
        for (let index = 1; index < boxes.length; index++) {
            expect(boxes[index].x).toBeCloseTo(boxes[0].x, 0);
            expect(boxes[index].y).toBeGreaterThan(boxes[index - 1].y + boxes[index - 1].height);
        }
    }
}

async function exercise(page: Page, index: number) {
    await expectInitial(page, index);
    const root = page.locator(`#${ids[index]}`);
    await root.scrollIntoViewIfNeeded();
    expect(await root.evaluate((element) => {
        const elements = [element, ...element.querySelectorAll('.card')];
        return elements.every((item) => {
            const box = item.getBoundingClientRect();
            return box.left >= 0 && box.right <= innerWidth && item.scrollWidth <= item.clientWidth;
        });
    })).toBe(true);

    if (index < 4) {
        const card = index === 0 ? root.locator('.card') : cardRoot(page, ids[index]);
        expect(await card.evaluate(element => element.getBoundingClientRect().width <= 16 * parseFloat(getComputedStyle(document.documentElement).fontSize))).toBe(true);
    }
    if (index === 2) {
        const follow = root.getByRole('button', {name: '关注项目', exact: true});
        const progress = root.getByRole('button', {name: '查看进展', exact: true});
        const result = page.locator('#projectCardAction');
        await follow.focus();
        await page.keyboard.press('Enter');
        await expect(result).toHaveText('已点击“关注项目”。');
        await expect(follow).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(progress).toBeFocused();
        await page.keyboard.press('Space');
        await expect(result).toHaveText('当前进展：正在验收附件预览功能。');
        await follow.click();
        await expect(result).toHaveText('已点击“关注项目”。');
    } else if (index === 4) {
        const card = cardRoot(page, 'selectedProjectCard');
        const toggle = root.getByRole('button', {name: '切换选中状态', exact: true});
        await card.locator('.card-title').click();
        await expect(card).toHaveClass(/selected/);
        await toggle.click();
        await expect(card).not.toHaveClass(/selected/);
        await expect(card.locator('.card-content')).toHaveText('待选择');
        await expect(toggle).toHaveAttribute('aria-pressed', 'false');
        await toggle.focus();
        await page.keyboard.press('Enter');
        await expect(card).toHaveClass(/selected/);
        await expect(card.locator('.card-content')).toHaveText('已选择');
        await expect(toggle).toHaveAttribute('aria-pressed', 'true');
        await page.keyboard.press('Space');
        await expect(card).not.toHaveClass(/selected/);
        await expect(toggle).toHaveAttribute('aria-pressed', 'false');
        await expect(toggle).toBeFocused();
        await expect(root.locator('.card').first()).not.toHaveClass(/selected/);
    } else if (index === 5) {
        await expectGrid(page, 2);
        await page.evaluate(() => (window as unknown as CardsWindow).zui.CardList.get('#projectCards')!.render({countPerRow: 1}));
        await expectGrid(page, 1);
        await page.evaluate(() => (window as unknown as CardsWindow).zui.CardList.get('#projectCards')!.render({countPerRow: 2}));
        await expectGrid(page, 2);
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Cards ${mode}: complete examples, actions and selection at ${width}px`, async ({page, baseURL}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
            });
            await page.setViewportSize({width, height: 900});
            expect(snippets).toHaveLength(ids.length);
            if (mode === 'preview') {
                await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
                await page.goto('lib/components/cards/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(ids.length);
            }

            async function openCopied(code: string, name: string) {
                const url = new URL(`__cards_${name}__.html`, baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (const [index, id] of ids.entries()) {
                await test.step(id, async () => {
                    if (mode === 'copied') await openCopied(snippets[index], id);
                    const url = page.url();
                    await exercise(page, index);
                    expect(page.url(), 'Card actions must stay on the page').toBe(url);
                    if (mode === 'preview') {
                        const previous = index ? await page.evaluateHandle(({id, list}) => {
                            const {zui} = window as unknown as CardsWindow;
                            return list ? zui.CardList.get(`#${id}`)! : zui.Card.get(`#${id}`)!;
                        }, {id: instanceIds[index - 1], list: index === 5}) : undefined;
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        if ([2, 4, 5].includes(index)) await tabs.screenshot({path: testInfo.outputPath(`${id}-${width}.png`), animations: 'disabled'});
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        if (previous) {
                            await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.$ && !instance.element.isConnected)).toBe(true);
                            await previous.dispose();
                        }
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
                await exercise(page, 2);
                await exercise(page, 4);
                await expectInitial(page, 1);
                await expectInitial(page, 5);
            }
            expect(await page.locator('[id]').evaluateAll((elements) => {
                const ids = elements.map(element => element.id);
                return new Set(ids).size === ids.length;
            })).toBe(true);
            const previous = await page.evaluateHandle(ids => ids.map((id) => {
                const {zui} = window as unknown as CardsWindow;
                return id === 'projectCards' ? zui.CardList.get(`#${id}`)! : zui.Card.get(`#${id}`)!;
            }), instanceIds);
            if (mode === 'preview') {
                await page.locator('.VPDocFooter a.pager-link').first().click();
            } else {
                await previous.evaluate(instances => instances.forEach(instance => instance.destroy()));
                await expect(page.locator('#toggleProjectCard')).toBeDisabled();
                await expect(page.locator('#toggleProjectCard')).toHaveJSProperty('onclick', null);
            }
            await expect.poll(() => previous.evaluate(instances => instances.every(instance => instance.destroyed && !instance.$))).toBe(true);
            await previous.dispose();
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}
