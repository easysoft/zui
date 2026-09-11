import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

async function waitForObserverFrames(page: Page) {
    await page.evaluate(async () => {
        for (let index = 0; index < 8; index++) {
            await new Promise(requestAnimationFrame);
        }
    });
}

async function mountAutoList(page: Page, total: number, hidden = false) {
    await page.goto('/list/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async ({corePath, listPath, total, hidden}) => {
        const {h, render} = await import(corePath) as typeof import('@zui/core');
        const {List} = await import(listPath) as typeof import('@zui/list/react');
        const host = document.createElement('div');
        host.id = 'auto-more-fixture';
        Object.assign(host.style, {
            position: 'fixed', top: '20px', right: '20px', width: '320px', height: '240px', overflow: 'auto',
            display: hidden ? 'none' : 'block',
        });
        document.body.append(host);
        render(h(List as unknown as import('preact').ComponentType<import('@zui/list').ListProps>, {
            items: Array.from({length: total}, (_, index) => ({id: String(index), text: `Item ${index}`, style: {height: '40px'}})),
            maxVisibleItems: 1,
            showMoreStep: 1,
            autoShowMore: true,
        }), host);
    }, {corePath: '/lib/core/src/main.ts', listPath: '/lib/list/src/main-react.ts', total, hidden});
    return page.locator('#auto-more-fixture');
}

test('loads each visible batch inside a scroller without moving focus', async ({page}) => {
    await page.goto('/list/');
    const scroller = page.locator('#autoMoreList');
    const items = scroller.locator('.list > [z-item]');
    await expect(items).toHaveCount(20);
    await expect(scroller).not.toBeInViewport();
    await scroller.evaluate((element) => {
        element.scrollTop = element.scrollHeight;
    });
    await waitForObserverFrames(page);
    await expect(items).toHaveCount(20);

    await page.evaluate(() => {
        const input = document.createElement('input');
        input.id = 'auto-more-focus';
        Object.assign(input.style, {position: 'fixed', top: '0', left: '0'});
        document.body.append(input);
        input.focus({preventScroll: true});
    });
    await scroller.scrollIntoViewIfNeeded();
    await expect(items).toHaveCount(30);
    await waitForObserverFrames(page);
    await expect(items).toHaveCount(30);
    await expect(page.locator('#auto-more-focus')).toBeFocused();

    await scroller.evaluate((element) => {
        element.scrollTop = element.scrollHeight;
    });
    await expect(items).toHaveCount(40);
    await waitForObserverFrames(page);
    await expect(items).toHaveCount(40);
    await expect(page.locator('#auto-more-focus')).toBeFocused();
});

test('waits for a hidden list to become visible and fills only the visible area', async ({page}) => {
    const scroller = await mountAutoList(page, 40, true);
    const items = scroller.locator('.list > [z-item]');
    await waitForObserverFrames(page);
    await expect(items).toHaveCount(1);
    await scroller.evaluate((element) => {
        element.style.display = 'block';
    });
    await expect.poll(() => items.count()).toBeGreaterThan(1);
    await expect(scroller.locator('.list-show-more button')).not.toBeInViewport();
    const count = await items.count();
    expect(count).toBeLessThan(40);
    await waitForObserverFrames(page);
    await expect(items).toHaveCount(count);
});

test('stops observing when every item fits in the visible area', async ({page}) => {
    const scroller = await mountAutoList(page, 3);
    await expect(scroller.locator('.list > [z-item]')).toHaveCount(3);
    await expect(scroller.locator('.list-show-more')).toHaveCount(0);
    await waitForObserverFrames(page);
    await expect(scroller.locator('.list > [z-item]')).toHaveCount(3);
});
