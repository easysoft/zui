import {expect, test} from '@playwright/test';

test('scrolls a 10,000 row list with bounded DOM and working index commands', async ({page}, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', (message) => {
        if (message.type() === 'error') {
            errors.push(message.text());
        }
    });
    await page.goto('/virtualize/');
    await page.locator('#libPage.is-loaded').waitFor();
    const list = page.locator('#virtualListFixed .virtual-list');
    const items = list.locator('.virtual-list-item');

    await expect(list.locator('[data-index="0"]')).toBeVisible();
    expect(await items.count()).toBeLessThan(40);
    await expect(list.locator('.virtual-list-content')).toHaveCSS('height', '360000px');

    await page.locator('#virtualListMiddle').click();
    await expect(list.locator('[data-index="5000"]')).toBeVisible();
    await expect(list.locator('[data-index="0"]')).toHaveCount(0);
    expect(await items.count()).toBeLessThan(40);
    await page.screenshot({path: testInfo.outputPath('virtual-list-middle.png')});

    await page.locator('#virtualListEnd').click();
    await expect(list.locator('[data-index="9999"]')).toBeVisible();
    expect(await items.count()).toBeLessThan(40);

    await page.locator('#virtualListStart').click();
    await expect(list.locator('[data-index="0"]')).toBeVisible();
    await expect.poll(() => list.evaluate(element => element.scrollTop)).toBe(0);
    expect(errors).toEqual([]);
});

test('replaces, clears and restores the fixed data set', async ({page}) => {
    await page.goto('/virtualize/');
    await page.locator('#libPage.is-loaded').waitFor();
    const list = page.locator('#virtualListFixed .virtual-list');
    const items = list.locator('.virtual-list-item');

    await page.locator('#virtualListEnd').click();
    await expect(list.locator('[data-index="9999"]')).toBeVisible();
    await page.locator('#virtualListReplace').click();
    await expect(list.getByText('替换条目 1', {exact: true})).toBeVisible();
    await expect(list.locator('.virtual-list-content')).toHaveCSS('height', '9000px');
    await expect(list.locator('[data-index="9999"]')).toHaveCount(0);

    await page.locator('#virtualListClear').click();
    await expect(items).toHaveCount(0);
    await expect(list.locator('.virtual-list-content')).toHaveCSS('height', '0px');

    await page.locator('#virtualListReset').click();
    await expect(list.getByText('条目 1', {exact: true})).toBeVisible();
    await expect(list.locator('.virtual-list-content')).toHaveCSS('height', '360000px');
    expect(await items.count()).toBeLessThan(40);
});

test('remeasures changed row content and keeps adjacent dynamic rows aligned', async ({page}) => {
    await page.goto('/virtualize/');
    await page.locator('#libPage.is-loaded').waitFor();
    const list = page.locator('#virtualListDynamic .virtual-list');
    const first = list.locator('[data-index="0"]');
    const second = list.locator('[data-index="1"]');
    await list.scrollIntoViewIfNeeded();
    await expect(first).toBeVisible();
    const initialHeight = await first.evaluate(element => element.getBoundingClientRect().height);
    const initialTotal = await list.locator('.virtual-list-content').evaluate(element => element.getBoundingClientRect().height);

    await page.locator('#virtualListDynamicExpand').click();

    await expect.poll(() => first.evaluate(element => element.getBoundingClientRect().height)).toBeGreaterThan(initialHeight);
    await expect.poll(() => list.locator('.virtual-list-content').evaluate(element => element.getBoundingClientRect().height)).toBeGreaterThan(initialTotal);
    await expect.poll(async () => {
        const firstBox = await first.boundingBox();
        const secondBox = await second.boundingBox();
        return Math.abs(secondBox!.y - firstBox!.y - firstBox!.height);
    }).toBeLessThan(1);
    expect(await list.locator('.virtual-list-item').count()).toBeLessThan(40);
});

test('virtualizes horizontal scrolling using actual browser dimensions', async ({page}) => {
    await page.goto('/virtualize/');
    await page.locator('#libPage.is-loaded').waitFor();
    const list = page.locator('#virtualListHorizontal .virtual-list');
    const itemWidth = 180;
    const gap = 8;
    const padding = 8;
    await list.scrollIntoViewIfNeeded();
    await expect(list.locator('[data-index="0"]')).toBeVisible();
    await expect(list.locator('.virtual-list-content')).toHaveCSS('width', `${1000 * itemWidth + 999 * gap + 2 * padding}px`);

    await list.evaluate((element, offset) => {
        element.scrollLeft = offset;
    }, padding + 20 * (itemWidth + gap));

    await expect(list.locator('[data-index="20"]')).toBeVisible();
    await expect(list.locator('[data-index="0"]')).toHaveCount(0);
    expect(await list.locator('.virtual-list-item').count()).toBeLessThan(30);
    const geometry = await list.locator('[data-index="20"]').evaluate((element) => {
        const row = element.getBoundingClientRect();
        const viewport = element.closest('.virtual-list')!.getBoundingClientRect();
        return {width: row.width, delta: row.left - viewport.left};
    });
    expect(geometry.width).toBe(itemWidth);
    expect(Math.abs(geometry.delta)).toBeLessThanOrEqual(2);
});

test('scrolls to the requested horizontal item in RTL mode', async ({page}) => {
    await page.goto('/virtualize/');
    await page.locator('#libPage.is-loaded').waitFor();
    const list = page.locator('#virtualListHorizontal .virtual-list');
    await list.scrollIntoViewIfNeeded();
    await expect(list.locator('[data-index="0"]')).toBeVisible();

    await page.evaluate(async (modulePath) => {
        const {VirtualList} = await import(modulePath) as typeof import('@zui/virtualize');
        const instance = VirtualList.get('#virtualListHorizontal')!;
        instance.render({isRtl: true});
        instance.scrollToIndex(500, {align: 'start'});
    }, '/lib/virtualize/src/main.ts');

    const target = list.locator('[data-index="500"]');
    await expect(list).toHaveCSS('direction', 'rtl');
    await expect(target).toBeVisible();
    await expect(list.locator('[data-index="0"]')).toHaveCount(0);
    await expect.poll(() => list.evaluate(element => element.scrollLeft)).toBeLessThan(0);
    await expect.poll(() => target.evaluate((element) => {
        const row = element.getBoundingClientRect();
        const viewport = element.closest('.virtual-list')!.getBoundingClientRect();
        return Math.abs(viewport.right - row.right);
    })).toBeLessThanOrEqual(2);
});
