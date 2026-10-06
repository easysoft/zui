import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/modal/docs/lib/components/trigger.md'), 'utf8');
const examples = [...source.matchAll(/::: tabs\n([\s\S]*?)\n:::/g)]
    .map(group => [...group[1].matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]));
const assets = ['ajax-modal.html', 'iframe-modal.html'];
const commands = [...source.matchAll(/```js\n([\s\S]*?)\n```/g)].map(match => match[1]);

async function expectDialog(page: Page, index: number) {
    const modal = page.locator('.modal.show');
    await expect(modal).toHaveCount(1);
    await expect(modal).toHaveClass(/\bin\b/);
    await expect(modal).not.toHaveClass(/\bloading\b/);
    await expect(modal.locator('.modal-dialog')).toBeVisible();
    const box = (await modal.locator('.modal-dialog').boundingBox())!;
    const viewport = page.viewportSize()!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
    expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 1);
    if (index === 0) {
        await expect(modal.locator('.modal-title')).toHaveText('客户门户 v1.2 发布说明');
        await expect(modal.locator('.modal-body')).toContainText('现有工单和附件将继续保留。');
    } else if (index === 1) {
        await expect(modal.locator('.modal-title')).toHaveText('发布计划');
        const frame = modal.frameLocator('iframe');
        await expect(frame.locator('html')).toHaveAttribute('lang', 'zh-CN');
        await expect(frame.getByRole('heading')).toHaveText('客户门户 v1.2 发布计划');
        await expect(frame.locator('body')).toContainText('汇总客户反馈');
        expect(await frame.locator('html').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
    } else if (index === 2) {
        await expect(modal.locator('.modal-title')).toHaveText('发布准备完成');
        await expect(modal.locator('.modal-body')).toContainText('客户门户 v1.2 已通过验收');
    } else {
        await expect(modal.locator('.modal-body')).toContainText(index === 3 ? '请先填写项目名称，再提交评审。' : '未保存的项目设置将丢失');
    }
    return modal;
}

async function exercise(page: Page, root: Locator, index: number) {
    const buttons = root.getByRole('button');
    await expect(buttons).toHaveCount(index < 3 ? 1 : 2);
    await root.scrollIntoViewIfNeeded();
    expect(await root.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
    if (index === 4) {
        await expect(root.getByRole('status')).toHaveText('请选择一种确认框，再选择确认或取消。');
    }
    for (const button of await buttons.all()) {
        for (const close of index === 4 ? ['confirm', 'cancel', 'close', 'escape'] : ['action', 'escape']) {
            await button.click();
            const modal = await expectDialog(page, index);
            if (close === 'escape') {
                await page.keyboard.press('Escape');
            } else if (close === 'confirm' || close === 'cancel' || (index === 3 && close === 'action')) {
                await modal.locator('.modal-footer').getByRole('button').nth(close === 'cancel' ? 1 : 0).click();
            } else if (index === 0) {
                await modal.getByRole('button', {name: '我已阅读'}).click();
            } else {
                await modal.locator('[data-dismiss="modal"]').click();
            }
            await expect(page.locator('.modal')).toHaveCount(0);
            if (index === 4) {
                await expect(root.getByRole('status')).toHaveText(close === 'confirm' ? '已确认：放弃本次修改。' : '已取消：继续编辑项目设置。');
            }
        }
    }
}

test('Modal trigger: imperative supplements render the documented content', async ({page, baseURL}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const url = new URL('__modal_commands__.html', baseURL).href;
    await page.route(url, route => route.fulfill({
        contentType: 'text/html; charset=utf-8',
        body: '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body></body></html>',
    }));
    await page.goto(url);
    expect(commands).toHaveLength(3);
    for (let index = 0; index < commands.length; index++) {
        await page.evaluate((code) => {
            new Function(code)();
        }, commands[index]);
        await expectDialog(page, index);
        await page.keyboard.press('Escape');
        await expect(page.locator('.modal')).toHaveCount(0);
    }
    expect(errors).toEqual([]);
});

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`Modal trigger ${mode}: content loading and visible results at ${width}px`, async ({page, baseURL}) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) {
                    errors.push(`${response.status()} ${response.url()}`);
                }
            });
            await page.setViewportSize({width, height: 900});
            expect(examples.map(blocks => blocks.length)).toEqual([2, 2, 1, 1, 1]);
            for (let index = 0; index < assets.length; index++) {
                const asset = readFileSync(Path.resolve(import.meta.dirname, '../../lib/modal/assets', assets[index]), 'utf8').trim();
                expect(examples[index][1]).toBe(asset);
                if (mode === 'copied') {
                    await page.route(new URL(`/assets/modal/${assets[index]}`, baseURL).href, route => route.fulfill({
                        contentType: 'text/html; charset=utf-8',
                        body: examples[index][1],
                    }));
                }
            }
            if (mode === 'preview') {
                await page.goto('lib/components/modal/trigger.html');
                await expect(page.locator('.plugin-tabs')).toHaveCount(examples.length);
            }
            for (let index = 0; index < examples.length; index++) {
                await test.step(`Example ${index + 1}`, async () => {
                    let root: Locator;
                    if (mode === 'preview') {
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect(tabs.locator('pre code')).toHaveText(examples[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                        root = tabs.locator('.example');
                    } else {
                        const url = new URL(`__modal_trigger_${index}__.html`, baseURL).href;
                        await page.route(url, route => route.fulfill({
                            contentType: 'text/html; charset=utf-8',
                            body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${examples[index][0]}</main></body></html>`,
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
