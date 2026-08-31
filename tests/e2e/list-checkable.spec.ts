import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';

async function openPlayground(page: Page, path: string, checkbox: string): Promise<Locator> {
    await page.goto(path);
    const label = page.locator(checkbox).first();
    await label.waitFor({timeout: 60_000});
    return label;
}

function readChecks(root: Locator) {
    return root.locator('.item-checkbox input').evaluateAll(inputs => inputs.map(input => (input as HTMLInputElement).checked));
}

test.describe('List-family checkable', () => {
    test.describe.configure({mode: 'serial'});
    test.setTimeout(90_000);

    test('checks and unchecks a list item from its checkbox label', async ({page}) => {
        const label = await openPlayground(page, '/list/', '#simpleList .item-checkbox label');
        const list = page.locator('#simpleList');

        const before = await readChecks(list);
        expect(before[0]).toBe(false);

        await label.click();
        expect((await readChecks(list))[0]).toBe(true);

        await label.click();
        expect((await readChecks(list))[0]).toBe(false);
    });

    test('does not toggle a list item when clicking its title', async ({page}) => {
        await openPlayground(page, '/list/', '#simpleList .item-checkbox label');
        const list = page.locator('#simpleList');
        const before = await readChecks(list);

        await list.locator('.item-title').first().click();
        expect(await readChecks(list)).toEqual(before);
    });

    test('checks and unchecks a menu item from its checkbox label', async ({page}) => {
        const label = await openPlayground(page, '/menu/', '#checkableMenu .item-checkbox label');
        const menu = page.locator('#checkableMenu');

        const before = await readChecks(menu);
        expect(before[0]).toBe(false);

        await label.click();
        expect((await readChecks(menu))[0]).toBe(true);

        await label.click();
        expect((await readChecks(menu))[0]).toBe(false);
    });

    test('checks and unchecks a tree node from its checkbox label', async ({page}) => {
        const label = await openPlayground(page, '/tree/', '#tree .item-checkbox label');
        const tree = page.locator('#tree');

        const before = await readChecks(tree);
        expect(before[0]).toBe(false);

        await label.click();
        expect((await readChecks(tree))[0]).toBe(true);

        await label.click();
        expect((await readChecks(tree))[0]).toBe(false);
    });
});
