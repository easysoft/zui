import {expect, test} from '@playwright/test';

for (const mode of ['preview', 'copied']) {
    test(`DTable custom actions use CSS and embedded SVG icons in ${mode} examples`, async ({page, baseURL}) => {
        await page.goto('lib/components/dtable/');
        const table = page.locator('#dtable-render-cell');
        await table.scrollIntoViewIfNeeded();
        if (mode === 'copied') {
            const tabIndex = await table.evaluate(element => [...document.querySelectorAll('.plugin-tabs')].indexOf(element.closest('.plugin-tabs')!));
            const tabs = page.locator('.plugin-tabs').nth(tabIndex);
            await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
            const code = await tabs.locator('pre code').innerText();
            const url = new URL('__dtable_custom_actions__.html', baseURL).href;
            await page.route(url, route => route.fulfill({
                contentType: 'text/html; charset=utf-8',
                body: `<!doctype html><html><head><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body>${code}</body></html>`,
            }));
            await page.goto(url);
        }
        await expect(table.locator('.i-edit').first()).toBeVisible();
        const close = table.getByRole('button', {name: '关闭', exact: true});
        await expect(close.locator('svg path')).toHaveAttribute('d', 'M12 2v10M7 5a9 9 0 1 0 10 0');
        await expect(close.locator('svg')).toBeVisible();
        expect(await table.locator('.icon').evaluateAll(elements => elements
            .flatMap(element => [...element.classList].filter(name => name.startsWith('icon-'))))).toEqual([]);
        await close.click();
        await expect(page.locator('#dtable-render-cell-status')).toHaveText('第 1 行：关闭');
    });
}

for (const width of [390, 1280]) {
    test(`DTable overview tabs copy complete working examples at ${width}px`, async ({page, baseURL}) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', (response) => {
            if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
        });
        await page.setViewportSize({width, height: 900});
        await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
        for (const [index, id] of ['dtable-basic', 'dtable-advanced'].entries()) {
            await page.goto('lib/components/dtable/');
            const tabs = page.locator('.plugin-tabs').nth(index);
            const host = page.locator(`#${id}`);
            await host.scrollIntoViewIfNeeded();
            await expect(host.getByRole('table')).toBeVisible();
            await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
            await expect(host).toHaveCount(0);
            const snippet = tabs.locator('.language-html');
            const code = await snippet.locator('pre code').innerText();
            expect(code).toContain(`new zui.DTable('#${id}'`);
            expect(code).not.toContain('withBase');
            expect(code).not.toContain('onZUIReady');
            await snippet.locator('button.copy').click();
            await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(code);

            // The preview is remounted by the tab; keyboard navigation must restore a live table.
            await tabs.getByRole('tab', {name: '完整代码', exact: true}).focus();
            await page.keyboard.press('ArrowLeft');
            await expect(host.getByRole('table')).toBeVisible();
            await expect(host.getByRole('table')).toHaveAttribute('aria-rowcount', '13');
            await expect.poll(() => page.evaluate(() => {
                const tables = (window as unknown as {zui: {DTable: {getAll: () => {element: HTMLElement}[]}}}).zui.DTable.getAll();
                return tables.every(table => table.element.isConnected);
            })).toBe(true);

            const url = new URL(`__${id}_copy__.html`, baseURL).href;
            await page.route(url, route => route.fulfill({
                contentType: 'text/html; charset=utf-8',
                body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="${new URL('zui/zui.css', baseURL).href}"><script src="${new URL('zui/zui.js', baseURL).href}"></script></head><body>${code}</body></html>`,
            }));
            await page.goto(url);
            await expect(host.getByRole('table')).toBeVisible();
            await expect(host.getByRole('table')).toHaveAttribute('aria-rowcount', '13');
            await expect(host).toContainText('客户服务门户');
            if (id === 'dtable-advanced') {
                await host.locator('[data-row="1"][data-col="id"] .dtable-checkbox label').click();
                await expect(host.locator('[data-row="1"][data-col="id"] .dtable-checkbox input')).toBeChecked();
                const toggle = host.getByRole('button', {name: '客户服务门户'});
                await toggle.click();
                await expect(host.getByRole('table')).toHaveAttribute('aria-rowcount', '10');
            }
            await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
            if (width === 390) {
                await host.getByRole('table').focus();
                await page.keyboard.press('End');
                await expect(host.locator('[data-row="1"][data-col="actions"] a').first()).toBeInViewport();
            }
        }
        expect(errors).toEqual([]);
    });
}

for (const initialWidth of [390, 1440]) {
    test(`DTable examples fit on initial load and after resizing from ${initialWidth}px`, async ({page}) => {
        await page.setViewportSize({width: initialWidth, height: 900});
        await page.goto('lib/components/dtable/');
        for (const id of ['dtable-basic', 'dtable-advanced']) {
            await page.locator(`#${id}`).scrollIntoViewIfNeeded();
            await expect(page.locator(`#${id} .dtable-cell`).first()).toBeVisible();
        }
        for (const width of [initialWidth, 390, 1440, 390]) {
            await page.setViewportSize({width, height: 900});
            for (const id of ['dtable-basic', 'dtable-advanced']) {
                const host = page.locator(`#${id}`);
                await expect.poll(() => host.evaluate(element => Math.abs(element.clientWidth - element.querySelector('.dtable')!.getBoundingClientRect().width))).toBeLessThanOrEqual(1);
                await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
                if (width === 390) {
                    await expect(host.locator('.dtable-fixed-left, .dtable-fixed-right')).toHaveCount(0);
                    const columns = await host.locator('.dtable-header .dtable-cell').evaluateAll(cells => cells.map(cell => ({left: cell.getBoundingClientRect().left, right: cell.getBoundingClientRect().right, width: cell.getBoundingClientRect().width})));
                    columns.forEach((col, index) => {
                        expect(col.width).toBeGreaterThanOrEqual(24);
                        if (index) {
                            expect(col.left).toBeGreaterThanOrEqual(columns[index - 1].right - 1);
                        }
                    });
                } else {
                    await expect(host.locator('.dtable-header .dtable-fixed-left')).toHaveCount(1);
                }
            }
        }
        const basic = page.locator('#dtable-basic .dtable');
        await basic.getByRole('table').focus();
        await page.keyboard.press('End');
        await expect(basic).toHaveClass(/dtable-scrolled-end/);
        await expect(basic.locator('[data-row="1"][data-col="actions"] a').first()).toBeInViewport();
        await page.keyboard.press('Home');
        await expect(basic).not.toHaveClass(/dtable-scrolled-right/);
    });
}

test('DTable accessibility tree groups the real cells into rows and exposes disclosure controls', async ({page}) => {
    await page.goto('lib/components/dtable/');
    const host = page.locator('#dtable-advanced');
    await host.scrollIntoViewIfNeeded();
    const table = host.getByRole('table', {name: '项目计划示例'});
    await expect(table).toBeVisible();
    const snapshot = await table.ariaSnapshot();
    expect(snapshot).toContain('columnheader "负责人"');
    expect(snapshot).toMatch(/row "1 客户服务门户[^"\n]* 陈晨 /);
    expect(snapshot).toContain('cell "陈晨"');
    const toggle = host.getByRole('button', {name: '客户服务门户'});
    await toggle.focus();
    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(table).toHaveAttribute('aria-rowcount', '10');
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(table).toHaveAttribute('aria-rowcount', '13');
});
