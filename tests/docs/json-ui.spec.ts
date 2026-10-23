import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';
import type {JsonUI} from '@zui/json-ui';

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/json-ui/docs/lib/components/index.md'), 'utf8');
const snippet = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]).find(code => code.includes('jsonUIStateExample'))!;

for (const width of [1280, 360]) {
    for (const mode of ['preview', 'copied']) {
        test(`JSON UI ${mode}: state binding, visibility and reset at ${width}px`, async ({page, baseURL}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('console', (message) => {
                if (message.type() === 'error') errors.push(message.text());
            });
            await page.setViewportSize({width, height: 900});
            if (mode === 'preview') {
                await page.goto('lib/components/json-ui/');
                await expect(page.getByRole('heading', {name: /^JSON UI/, level: 1})).toBeVisible();
            } else {
                expect(snippet).toBeTruthy();
                const url = new URL('__json_ui_state__.html', baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${snippet}</main></body></html>`,
                }));
                await page.goto(url);
            }
            const input = page.getByRole('textbox', {name: '姓名'});
            const status = page.getByRole('status').filter({hasText: '你好，'});
            await expect(input).toHaveValue('');
            await input.fill('Ada');
            await expect(status).toHaveText('你好，Ada');
            await page.getByRole('checkbox', {name: '显示问候语'}).uncheck();
            await expect(status).toHaveCount(0);
            await page.getByRole('button', {name: '重置', exact: true}).click();
            await expect(input).toHaveValue('');
            await expect(status).toHaveText('你好，');
            await expect(page.getByRole('checkbox', {name: '显示问候语'})).toBeChecked();
            expect(await input.evaluate(element => element.getBoundingClientRect().right <= innerWidth)).toBe(true);
            await input.locator('..').screenshot({path: testInfo.outputPath(`json-ui-${mode}-${width}.png`)});
            if (mode === 'preview') {
                const tabs = page.locator('.plugin-tabs').nth(1);
                await input.fill('Transient');
                await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                await expect(tabs.locator('pre code')).toHaveText(snippet);
                await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                await expect(input).toHaveValue('');
            } else {
                await page.evaluate(() => {
                    (window as unknown as {zui: {JsonUI: typeof JsonUI}}).zui.JsonUI.get('#jsonUIStateExample')!.destroy();
                });
                await expect(input).toHaveCount(0);
            }
            expect(errors).toEqual([]);
        });
    }
}
