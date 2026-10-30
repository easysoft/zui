import {expect, test} from '@playwright/test';
import type {Page} from '@playwright/test';

import type {VTable} from '@zui/vtable';
import type {TableFeatures} from '@tanstack/table-core';

type Demo = {
    table: VTable<Record<string, unknown>, TableFeatures>;
    setSize: (rows: number, columns: number) => void;
    clear: () => void;
    recreate: () => void;
    dispose: () => void;
    setLang: (lang: 'zh_cn' | 'zh_tw' | 'en') => void;
};
type DemoWindow = Window & {vtableDemo: Demo};
const pageErrors = new WeakMap<Page, string[]>();

test.beforeEach(async ({page}) => {
    const errors: string[] = [];
    pageErrors.set(page, errors);
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/vtable/');
    await page.locator('#vtableDemo [role="table"] [role="cell"]').first().waitFor({timeout: 60_000});
});

test.afterEach(async ({page}) => {
    expect(pageErrors.get(page)).toEqual([]);
});

test('bounds both axes, locates the last row and column, and aligns the sticky header', async ({page}, testInfo) => {
    await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.setSize(10000, 200));
    const table = page.locator('#vtableDemo [role="table"]');
    expect(await table.locator('[role="cell"]').count()).toBeLessThan(500);
    await page.evaluate(() => {
        const table = (window as unknown as DemoWindow).vtableDemo.table;
        table.scrollToRow('row-9999', {align: 'end'});
        table.scrollToColumn('field-199', {align: 'end'});
    });
    const cell = table.locator('[data-row="row-9999"] [data-col="field-199"]');
    await expect(cell).toBeVisible();
    expect(await table.locator('[role="cell"]').count()).toBeLessThan(500);
    const header = table.locator('[role="columnheader"][data-col="field-199"]');
    await expect.poll(async () => {
        const [headerBox, cellBox] = await Promise.all([header.boundingBox(), cell.boundingBox()]);
        return Math.abs(headerBox!.x - cellBox!.x);
    }).toBeLessThan(1);
    const viewportBox = await table.boundingBox();
    const headerBox = await header.boundingBox();
    expect(Math.abs(headerBox!.y - viewportBox!.y)).toBeLessThan(3);
    await page.screenshot({path: testInfo.outputPath('vtable-wide.png')});
});

test('recalculates column positions without changing the number of columns', async ({page}) => {
    const header = page.locator('#vtableDemo [role="columnheader"][data-col="field-0"]');
    await page.evaluate(() => {
        const table = (window as unknown as DemoWindow).vtableDemo.table;
        table.table!.setColumnSizing({['field-0']: 240});
    });
    await expect(header).toHaveCSS('width', '240px');
    const next = page.locator('#vtableDemo [role="columnheader"][data-col="field-1"]');
    await expect.poll(async () => {
        const [first, second] = await Promise.all([header.boundingBox(), next.boundingBox()]);
        return Math.abs(second!.x - first!.x - first!.width);
    }).toBeLessThan(1);
    const viewport = page.locator('#vtableDemo [role="table"]');
    await viewport.evaluate((element) => {
        element.style.width = '400px';
    });
    await expect(viewport).toHaveCSS('width', '400px');
    expect(await viewport.locator('[role="columnheader"]').count()).toBeLessThan(8);
});

test('keeps selection identity while sorting and supports keyboard controls', async ({page}) => {
    const table = page.locator('#vtableDemo [role="table"]');
    const rowCheckbox = table.locator('[data-row="row-1"] input[type="checkbox"]');
    await rowCheckbox.focus();
    await page.keyboard.press('Space');
    await expect(rowCheckbox).toBeChecked();
    const header = table.locator('[role="columnheader"][data-col="field-0"]');
    const sort = header.locator('button').first();
    await sort.focus();
    await page.keyboard.press('Enter');
    await expect(header).toHaveAttribute('aria-sort', 'ascending');
    await page.keyboard.press('Enter');
    await expect(header).toHaveAttribute('aria-sort', 'descending');
    const selected = await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.table.table!.store.state.rowSelection);
    expect(selected['row-1']).toBe(true);
    await page.keyboard.press('Enter');
    await expect(header).toHaveAttribute('aria-sort', 'none');
    await expect(table.locator('[data-row="row-1"] input[type="checkbox"]')).toBeChecked();
});

test('commits resizing only on release and cancels with Escape', async ({page}) => {
    const header = page.locator('#vtableDemo [role="columnheader"][data-col="field-0"]');
    const handle = header.locator('[role="separator"]');
    const initial = (await header.boundingBox())!.width;
    const box = (await handle.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 40, box.y + box.height / 2);
    expect((await header.boundingBox())!.width).toBe(initial);
    await page.keyboard.press('Escape');
    await page.mouse.up();
    expect((await header.boundingBox())!.width).toBe(initial);
    await handle.focus();
    await page.keyboard.press('ArrowRight');
    await expect(header).toHaveCSS('width', `${initial + 10}px`);
    const nextBox = (await handle.boundingBox())!;
    await page.mouse.move(nextBox.x + nextBox.width / 2, nextBox.y + nextBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(nextBox.x + nextBox.width / 2 + 30, nextBox.y + nextBox.height / 2);
    await page.mouse.up();
    await expect(header).toHaveCSS('width', `${initial + 40}px`);
    await handle.focus();
    await page.keyboard.press('Home');
    await expect(header).toHaveCSS('width', '70px');
    await page.keyboard.press('End');
    await expect(header).toHaveCSS('width', '500px');
});

test('commits a real touch gesture and cancels a second one without changing width', async ({page, browserName}) => {
    test.skip(browserName !== 'chromium', 'Real touch injection uses Chromium CDP.');
    const session = await page.context().newCDPSession(page);
    try {
        await session.send('Emulation.setTouchEmulationEnabled', {enabled: true, maxTouchPoints: 1});
        const header = page.locator('#vtableDemo [role="columnheader"][data-col="field-0"]');
        const handle = header.locator('[role="separator"]');
        const guide = page.locator('#vtableDemo .vtable-resize-guide');
        const initial = (await header.boundingBox())!.width;
        const box = (await handle.boundingBox())!;
        const start = {x: box.x + box.width / 2, y: box.y + box.height / 2, id: 1};
        await session.send('Input.dispatchTouchEvent', {type: 'touchStart', touchPoints: [start]});
        await expect(guide).toHaveCount(1);
        await session.send('Input.dispatchTouchEvent', {type: 'touchMove', touchPoints: [{...start, x: start.x + 40}]});
        await expect(header).toHaveCSS('width', `${initial}px`);
        await session.send('Input.dispatchTouchEvent', {type: 'touchEnd', touchPoints: []});
        await expect(header).toHaveCSS('width', `${initial + 40}px`);
        await expect(guide).toHaveCount(0);

        const resizedBox = (await handle.boundingBox())!;
        const next = {x: resizedBox.x + resizedBox.width / 2, y: resizedBox.y + resizedBox.height / 2, id: 2};
        await session.send('Input.dispatchTouchEvent', {type: 'touchStart', touchPoints: [next]});
        await expect(guide).toHaveCount(1);
        await session.send('Input.dispatchTouchEvent', {type: 'touchMove', touchPoints: [{...next, x: next.x + 30}]});
        await expect(header).toHaveCSS('width', `${initial + 40}px`);
        await session.send('Input.dispatchTouchEvent', {type: 'touchCancel', touchPoints: []});
        await expect(guide).toHaveCount(0);
        await expect(header).toHaveCSS('width', `${initial + 40}px`);
    } finally {
        await session.detach();
    }
});

test('returns focus to the table when a focused virtual row leaves the viewport', async ({page}) => {
    const table = page.locator('#vtableDemo [role="table"]');
    const checkbox = table.locator('[data-row="row-1"] input[type="checkbox"]');
    await checkbox.focus();
    await expect(checkbox).toBeFocused();
    await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.table.scrollToRow('row-500', {align: 'start'}));
    await expect(checkbox).toHaveCount(0);
    await expect(table).toBeFocused();
});

test('recovers from empty data, switches language, and tears down without errors', async ({page}) => {
    await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.clear());
    await expect(page.locator('#vtableDemo')).toContainText('暂无数据');
    await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.setLang('en'));
    await expect(page.locator('#vtableDemo')).toContainText('No data');
    await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.setLang('zh_tw'));
    await expect(page.locator('#vtableDemo')).toContainText('暫無資料');
    await page.evaluate(() => {
        (window as unknown as DemoWindow).vtableDemo.setSize(1000, 20);
        (window as unknown as DemoWindow).vtableDemo.recreate();
    });
    await page.locator('#vtableDemo [role="cell"]').first().waitFor();
    const handle = page.locator('#vtableDemo [role="separator"]').first();
    const box = (await handle.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.evaluate(() => (window as unknown as DemoWindow).vtableDemo.dispose());
    await page.mouse.up();
    await expect(page.locator('#vtableDemo [role="table"]')).toHaveCount(0);
});

test('locates newly added rows and columns immediately after an engine options update', async ({page}) => {
    const target = await page.evaluate(() => {
        const table = (window as unknown as DemoWindow).vtableDemo.table;
        const engine = table.table!;
        const count = engine.options.data.length * 2;
        const rowId = `replacement-${count - 1}`;
        const columnId = 'added-19';
        engine.setOptions(previous => ({
            ...previous,
            data: Array.from({length: count}, (_, index) => ({
                ...previous.data[index % previous.data.length],
                id: `replacement-${index}`,
                tail: `New tail ${index}`,
            })),
            columns: [...previous.columns, ...Array.from({length: 20}, (_, index) => ({
                id: `added-${index}`,
                accessorKey: 'tail',
                header: `Added ${index}`,
                size: 140,
            }))],
        }));
        // Request both targets in the same stack as the options update.
        const rowAccepted = table.scrollToRow(rowId, {align: 'end', behavior: 'instant'});
        const columnAccepted = table.scrollToColumn(columnId, {align: 'end', behavior: 'instant'});
        return {rowId, columnId, count, rowAccepted, columnAccepted};
    });
    expect(target.rowAccepted).toBe(true);
    expect(target.columnAccepted).toBe(true);
    const table = page.locator('#vtableDemo [role="table"]');
    const cell = table.locator(`[data-row="${target.rowId}"] [data-col="${target.columnId}"]`);
    await expect(cell).toHaveText(`New tail ${target.count - 1}`);
    await expect(cell).toBeInViewport();
    await expect.poll(() => table.evaluate(element => Math.max(
        Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop),
        Math.abs(element.scrollWidth - element.clientWidth - element.scrollLeft),
    ))).toBeLessThanOrEqual(1);
});
