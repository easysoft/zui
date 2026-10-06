import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test as baseTest} from '@playwright/test';

import type {Page} from '@playwright/test';

type TableInstance = {
    element: HTMLElement;
    destroyed: boolean;
    options: {plugins?: string[]; getCellSpan?: unknown};
};
type RegressionWindow = Window & {
    zui: {
        DTable: {getAll: () => TableInstance[]; get: (selector: string) => TableInstance};
        Dashboard: new (selector: string, options: Record<string, unknown>) => unknown;
    };
    docsRegression?: {previous: TableInstance[]};
};

const test = baseTest.extend({
    page: async ({page, baseURL}, use) => {
        const errors: string[] = [];
        const origin = new URL(baseURL!).origin;
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', (response) => {
            if (response.url().startsWith(origin) && response.status() >= 400) {
                errors.push(`${response.status()} ${response.url()}`);
            }
        });
        page.on('requestfailed', (request) => {
            const error = request.failure()?.errorText;
            if (request.url().startsWith(origin) && error !== 'net::ERR_ABORTED') {
                errors.push(`${error} ${request.url()}`);
            }
        });
        await use(page);
        expect(errors, 'Page errors and failed same-origin resources').toEqual([]);
    },
});

async function switchTablePage(page: Page, title: string) {
    await page.evaluate(() => {
        const target = window as unknown as RegressionWindow;
        target.docsRegression = {previous: target.zui.DTable.getAll()};
    });
    await page.locator('.VPSidebar').getByRole('link', {name: title, exact: true}).click();
    await expect(page.locator('h1')).toHaveText(title);
    await expect.poll(() => page.evaluate(() => {
        const target = window as unknown as RegressionWindow;
        // Keeping this object proves navigation stayed in the same document.
        return !!target.docsRegression && target.docsRegression.previous.length > 0
            && target.docsRegression.previous.every(instance => instance.destroyed && !instance.element.isConnected)
            && target.zui.DTable.getAll().every(instance => instance.element.isConnected);
    }), {message: 'Client-side navigation must destroy every previous DTable instance'}).toBe(true);
}

test('F04: DTable examples release instances on tab and page changes while plugin examples initialize lazily', async ({page}) => {
    await page.goto('lib/components/dtable/');
    for (let visit = 0; visit < 2; visit++) {
        const basic = page.locator('#dtable-basic');
        await basic.scrollIntoViewIfNeeded();
        await expect(basic).toContainText('客户服务门户');
        const checkable = page.locator('#dtable-checkable');
        await checkable.locator('.dtable-body [data-row="1"][data-col="project"]').click({position: {x: 150, y: 15}});
        await expect(page.locator('#dtable-checkable-status')).toHaveText('已选行：1');
        const checkAll = checkable.locator('.dtable-header').getByRole('checkbox');
        await checkAll.press('Space');
        await expect(page.locator('#dtable-checkable-status')).toHaveText('已选行：1、2、3、4、5');
        await checkAll.press('Space');
        await expect(page.locator('#dtable-checkable-status')).toHaveText('已选行：无');

        const nested = page.locator('#dtable-nested');
        const parentToggle = nested.locator('[data-row="1"] .dtable-nested-toggle');
        await parentToggle.click();
        await expect(page.locator('#dtable-nested-status')).toHaveText('已折叠父行：1');
        await expect(nested.locator('.dtable-body [data-row="2"]')).toHaveCount(0);
        await parentToggle.click();
        await expect(page.locator('#dtable-nested-status')).toHaveText('所有父行已展开');

        const renderCell = page.locator('#dtable-render-cell');
        await expect(renderCell.locator('.icon-pencil').first()).toBeVisible();
        const close = renderCell.getByRole('button', {name: '关闭', exact: true});
        await expect(close).toHaveAttribute('title', '关闭');
        await close.press('Enter');
        await expect(page.locator('#dtable-render-cell-status')).toHaveText('第 1 行：关闭');

        for (const [id, initialStatus] of [
            ['dtable-checkable', '已选行：无'],
            ['dtable-nested', '所有父行已展开'],
            ['dtable-render-cell', '请点击操作按钮'],
        ]) {
            const table = page.locator(`#${id}`);
            const tabIndex = await table.evaluate(element => [...document.querySelectorAll('.plugin-tabs')].indexOf(element.closest('.plugin-tabs')!));
            const tabs = page.locator('.plugin-tabs').nth(tabIndex);
            const previous = await page.evaluateHandle(id => (window as unknown as RegressionWindow).zui.DTable.get(`#${id}`), id);
            await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
            await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.element.isConnected)).toBe(true);
            await previous.dispose();
            await expect(table).toHaveCount(0);
            await tabs.getByRole('tab', {name: '示例', exact: true}).click();
            await expect(table.locator('.dtable-cell').first()).toBeVisible();
            await expect(page.locator(`#${id}-status`)).toHaveText(initialStatus);
            await expect.poll(() => page.evaluate(id => (window as unknown as RegressionWindow).zui.DTable.getAll().filter(instance => instance.element.id === id).length, id)).toBe(1);
        }

        await switchTablePage(page, '数据表格插件');
        const cellspan = page.locator('#dtable-cellspan');
        await expect(cellspan.locator('.dtable-cell')).toHaveCount(0);
        await cellspan.scrollIntoViewIfNeeded();
        await expect(cellspan).toContainText('客户服务门户');
        const merged = cellspan.locator('.dtable-cell[data-row="2"][data-col="progress"]');
        const options = await page.evaluate(() => {
            const table = (window as unknown as RegressionWindow).zui.DTable.get('#dtable-cellspan');
            return {plugins: table.options.plugins, getCellSpan: typeof table.options.getCellSpan};
        });
        expect(options.plugins).toContain('cellspan');
        expect(options.getCellSpan).toBe('function');
        const rowHeight = await cellspan.locator('.dtable-cell[data-row="1"][data-col="progress"]').evaluate(element => element.getBoundingClientRect().height);
        await expect(merged).toHaveCSS('height', `${rowHeight * 2}px`);
        await expect(cellspan.locator('.dtable-cell[data-row="3"][data-col="progress"]')).toBeHidden();
        await expect(cellspan.locator('.dtable-cell[data-col="manager"]')).toHaveCount(0);
        await page.locator('#dtable-sortable').scrollIntoViewIfNeeded();
        await expect(page.locator('#dtable-sortable .dtable-cell').first()).toBeVisible();
        expect(await page.evaluate(() => (window as unknown as RegressionWindow).zui.DTable.get('#dtable-sortable').options.plugins)).toContain('sortable');
        await switchTablePage(page, '数据表格');
    }
    await page.locator('#dtable-basic').scrollIntoViewIfNeeded();
    await expect(page.locator('#dtable-basic')).toContainText('客户服务门户');
    await switchTablePage(page, '树形菜单');
    await expect.poll(() => page.evaluate(() => (window as unknown as RegressionWindow).zui.DTable.getAll().length)).toBe(0);
});

async function expectDashboardTextLayout(page: Page) {
    const blocks = page.locator('#dashboardExample .dashboard-block');
    await expect(blocks).toHaveCount(4);
    for (const block of await blocks.all()) {
        const title = block.locator('.dashboard-block-title');
        const body = block.locator('.dashboard-block-body');
        await expect(title).not.toBeEmpty();
        await expect(body).not.toBeEmpty();
        const headerBox = await block.locator('.dashboard-block-header').boundingBox();
        const bodyBox = await body.boundingBox();
        expect(bodyBox!.y, await title.innerText()).toBeGreaterThanOrEqual(headerBox!.y + headerBox!.height - 1);
        expect(bodyBox!.height).toBeGreaterThan(0);
        await expect(body).toHaveCSS('overflow-y', 'auto');
    }
}

for (const width of [1280, 390]) {
    test(`F06: Dashboard preview and copied HTML preserve text and full-panel layout at ${width}px`, async ({page, baseURL}) => {
        await page.setViewportSize({width, height: 900});
        await page.goto('lib/components/dashboard/');
        await expectDashboardTextLayout(page);
        const snippet = page.locator('.language-html').first();
        const code = await snippet.locator('pre code').innerText();
        const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/dashboard/docs/lib/components/index.md'), 'utf8');
        expect(code.trim(), 'The published copyable code must match its source').toBe(source.match(/```html\n([\s\S]*?)\n```/)?.[1].trim());
        await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
        await snippet.locator('button.copy').click();
        await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(code);

        const url = new URL('__dashboard_example__.html', baseURL).href;
        await page.route(url, route => route.fulfill({
            contentType: 'text/html; charset=utf-8',
            body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body>${code}</body></html>`,
        }));
        await page.goto(url);
        await expectDashboardTextLayout(page);
        expect(await page.locator('script[src]').evaluateAll(nodes => nodes.map(node => (node as HTMLScriptElement).src))).toEqual([new URL('zui/zui.js', baseURL).href]);
        expect(await page.locator('link[rel="stylesheet"]').evaluateAll(nodes => nodes.map(node => (node as HTMLLinkElement).href))).toEqual([new URL('zui/zui.css', baseURL).href]);

        // Exercise the full-panel content contract described below the copied example.
        await page.evaluate(() => {
            const element = document.createElement('div');
            element.id = 'dashboardPanel';
            document.body.append(element);
            new (window as unknown as RegressionWindow).zui.Dashboard('#dashboardPanel', {
                grid: 1,
                blocks: [{id: 'panel', size: 'xs', content: {html: `<div class="panel"><div class="panel-heading"><div class="panel-title">完整面板</div></div><div class="panel-body">${'<p>面板中的详细内容</p>'.repeat(30)}</div></div>`}}],
            });
        });
        const panelBlock = page.locator('#dashboardPanel .dashboard-block');
        await panelBlock.scrollIntoViewIfNeeded();
        const panel = panelBlock.locator('.panel');
        await expect(panel).toBeVisible();
        await expect(panelBlock.locator('.dashboard-block-title')).toBeEmpty();
        const panelBox = (await panel.boundingBox())!;
        const blockBox = (await panelBlock.boundingBox())!;
        for (const dimension of ['x', 'y', 'width', 'height'] as const) {
            expect(panelBox[dimension], `Full panel ${dimension}`).toBeCloseTo(blockBox[dimension], 0);
        }
        const headingBox = (await panel.locator('.panel-heading').boundingBox())!;
        const bodyBox = (await panel.locator('.panel-body').boundingBox())!;
        expect(bodyBox.y).toBeGreaterThanOrEqual(headingBox.y + headingBox.height - 1);
        expect(await panel.locator('.panel-body').evaluate(element => element.scrollHeight > element.clientHeight)).toBe(true);
        await expect(panel.locator('.panel-body')).toHaveCSS('overflow-y', 'auto');
    });
}
