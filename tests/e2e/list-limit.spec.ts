import {expect, test} from '@playwright/test';

test('shows a large list in batches with keyboard focus and a wrapping footer', async ({page}, testInfo) => {
    await page.goto('/list/');
    const list = page.locator('#largeList > .list');
    const items = list.locator(':scope > [z-item]');
    await expect(items).toHaveCount(100);
    const more = list.getByRole('button', {name: '剩余 9900 项，点击再显示 50 项'});
    await more.focus();
    await more.press('Enter');
    await expect(items).toHaveCount(150);
    await expect(list.locator(':scope > [z-item="100"]')).toBeFocused();

    await page.setViewportSize({width: 390, height: 844});
    const nextMore = list.getByRole('button', {name: '剩余 9850 项，点击再显示 50 项'});
    await nextMore.scrollIntoViewIfNeeded();
    const overflow = await nextMore.evaluate(button => button.scrollWidth > button.clientWidth);
    expect(overflow).toBe(false);
    await nextMore.press('Space');
    await expect(items).toHaveCount(200);
    await expect(list.locator(':scope > [z-item="150"]')).toBeFocused();
    await list.locator('.list-show-more').scrollIntoViewIfNeeded();
    await page.screenshot({path: testInfo.outputPath('list-limit-narrow.png')});
});

test('records browser rendering cost for 10,000 items and a 100-item batch', async ({page}, testInfo) => {
    await page.goto('/list/');
    await expect(page.locator('#largeList [z-item]')).toHaveCount(100);
    const measurements = await page.evaluate(async ({corePath, listPath}) => {
        const {h, render} = await import(corePath) as typeof import('@zui/core');
        const {List} = await import(listPath) as typeof import('@zui/list/react');
        const data = Array.from({length: 10_000}, (_, index) => ({id: String(index), text: `Item ${index}`}));
        const results: {limit: number; renderMs: number; layoutMs: number; items: number; elements: number; appendMs?: number; appendedItems?: number}[] = [];
        for (const limit of [100, 0, 100]) {
            const host = document.createElement('div');
            document.body.append(host);
            const start = performance.now();
            render(h(List as unknown as import('preact').ComponentType<import('@zui/list').ListProps>, {items: data, maxVisibleItems: limit}), host);
            const rendered = performance.now();
            host.getBoundingClientRect();
            const laidOut = performance.now();
            const result: typeof results[number] = {
                limit,
                renderMs: rendered - start,
                layoutMs: laidOut - rendered,
                items: host.querySelectorAll('[z-item]').length,
                elements: host.querySelectorAll('*').length,
            };
            if (limit) {
                const appendStart = performance.now();
                host.querySelector<HTMLButtonElement>('.list-show-more button')!.click();
                await new Promise(requestAnimationFrame);
                host.getBoundingClientRect();
                result.appendMs = performance.now() - appendStart;
                result.appendedItems = host.querySelectorAll('[z-item]').length;
            }
            results.push(result);
            render(null, host);
            host.remove();
        }
        return results;
    }, {corePath: '/lib/core/src/main.ts', listPath: '/lib/list/src/main-react.ts'});
    await testInfo.attach('list-render-measurements', {body: JSON.stringify(measurements, null, 2), contentType: 'application/json'});
    console.log('List browser measurements:', JSON.stringify(measurements));
    expect(measurements.map(result => result.items)).toEqual([100, 10_000, 100]);
    expect(measurements.filter(result => result.limit).map(result => result.appendedItems)).toEqual([200, 200]);
});

test('keeps nested search results and the show-more control visible', async ({page}) => {
    await page.goto('/menu/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async ({corePath, menuPath}) => {
        const {h, render} = await import(corePath) as typeof import('@zui/core');
        const {SearchMenu} = await import(menuPath) as typeof import('@zui/menu/react');
        const host = document.createElement('div');
        host.id = 'search-limit-fixture';
        document.body.append(host);
        render(h(SearchMenu, {
            search: 'Needle',
            underlineKeys: false,
            maxVisibleItems: 1,
            showMoreText: 'More {count}',
            items: [
                {id: 'excluded', text: 'Excluded', items: [{id: 'none', text: 'Other'}]},
                {id: 'first', text: 'First group', items: [{id: 'a', text: 'Needle A'}, {id: 'b', text: 'Needle B'}]},
                {id: 'second', text: 'Second group', items: [{id: 'c', text: 'Needle C'}]},
            ],
        }), host);
    }, {corePath: '/lib/core/src/main.ts', menuPath: '/lib/menu/src/main-react.ts'});
    const fixture = page.locator('#search-limit-fixture');
    await expect(fixture.getByText('First group', {exact: true})).toBeVisible();
    await expect(fixture.getByText('Needle A', {exact: true})).toBeVisible();
    await expect(fixture.getByText('Second group', {exact: true})).toHaveCount(0);
    const rootMore = fixture.locator(':scope > .menu-wrapper > .menu > .list-show-more button');
    await rootMore.click();
    await expect(fixture.getByText('Second group', {exact: true})).toBeVisible();
    await expect(fixture.getByText('Needle C', {exact: true})).toBeVisible();
});

test('places the shared footer below horizontal navigation and card grids', async ({page}) => {
    await page.goto('/nav/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async ({corePath, navPath, cardsPath, cardsStylePath}) => {
        const {h, render} = await import(corePath) as typeof import('@zui/core');
        const {Nav} = await import(navPath) as typeof import('@zui/nav/react');
        const {CardList} = await import(cardsPath) as typeof import('@zui/cards/react');
        await import(cardsStylePath);
        for (const [name, View] of [['nav', Nav], ['cards', CardList]] as const) {
            const host = document.createElement('div');
            host.id = `${name}-limit-fixture`;
            document.body.append(host);
            render(h(View as unknown as import('preact').ComponentType<Record<string, unknown>>, {
                maxVisibleItems: 1,
                countPerRow: 2,
                showMoreText: 'More {count}',
                items: [{id: 'first', text: 'First', title: 'First'}, {id: 'second', text: 'Second', title: 'Second'}],
            }), host);
        }
    }, {corePath: '/lib/core/src/main.ts', navPath: '/lib/nav/src/main-react.ts', cardsPath: '/lib/cards/src/main-react.ts', cardsStylePath: '/lib/cards/src/main.ts'});
    for (const name of ['nav', 'cards']) {
        const root = page.locator(`#${name}-limit-fixture > .list-limited`);
        const item = root.locator(':scope > [z-item]');
        const footer = root.locator(':scope > .list-show-more');
        await expect(footer).toBeVisible();
        const itemBox = await item.boundingBox();
        const footerBox = await footer.boundingBox();
        expect(footerBox!.y).toBeGreaterThanOrEqual(itemBox!.y + itemBox!.height - 1);
        await footer.getByRole('button').click();
        await expect(item).toHaveCount(2);
        await expect(footer).toHaveCount(0);
    }
});

test('keeps the footer below CSS grid rows with valid list semantics', async ({page}) => {
    await page.goto('/list/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async ({corePath, listPath}) => {
        const {h, render} = await import(corePath) as typeof import('@zui/core');
        const {List} = await import(listPath) as typeof import('@zui/list/react');
        const host = document.createElement('div');
        host.id = 'grid-list-limit-fixture';
        document.body.append(host);
        render(h(List as unknown as import('preact').ComponentType<import('@zui/list').ListProps>, {
            component: 'ol',
            style: {display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'},
            maxVisibleItems: 2,
            items: [{id: 'first', text: 'First'}, {id: 'second', text: 'Second'}, {id: 'third', text: 'Third'}],
        }), host);
    }, {corePath: '/lib/core/src/main.ts', listPath: '/lib/list/src/main-react.ts'});
    const root = page.locator('#grid-list-limit-fixture > ol');
    const footer = root.locator(':scope > .list-show-more');
    await expect(root.locator(':scope > li')).toHaveCount(3);
    const rootBox = await root.boundingBox();
    const itemBox = await root.locator(':scope > [z-item]').last().boundingBox();
    const footerBox = await footer.boundingBox();
    expect(footerBox!.y).toBeGreaterThanOrEqual(itemBox!.y + itemBox!.height - 1);
    expect(footerBox!.width).toBeCloseTo(rootBox!.width, 0);
    await footer.getByRole('button').click();
    await expect(root.locator(':scope > [z-item]')).toHaveCount(3);
    await expect(footer).toHaveCount(0);
});
