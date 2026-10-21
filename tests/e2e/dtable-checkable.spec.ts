import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

const rows = [
    {id: 'r1', name: 'Alpha'},
    {id: 'r2', name: 'Beta'},
    {id: 'r3', name: 'Gamma'},
];

async function mountCheckableTable(page: Page, localPager = false): Promise<void> {
    const data = localPager ? Array.from({length: 12}, (_, index) => ({id: `r${index + 1}`, name: `Row ${index + 1}`})) : rows;
    await page.goto('/dtable/');
    // Wait for the playground to finish rendering so the dtable styles are applied.
    await page.locator('#datatableExample .dtable-header').first().waitFor({timeout: 60_000});
    await page.evaluate(async ({data, mainPath, localPager}) => {
        document.documentElement.classList.remove('dark');
        document.body.className = '';
        document.body.innerHTML = '<main id="e2e-dtable-contract"><div id="e2e-dtable"></div></main>';

        // Reference the plugin by name: re-importing its module would register it a second time.
        const {DTable} = await (import(mainPath) as Promise<{DTable: new (selector: string, options: Record<string, unknown>) => unknown}>);
        new DTable('#e2e-dtable', {
            cols: [
                {name: 'id', title: 'ID', width: 80, checkbox: true},
                {name: 'name', title: 'Name', minWidth: 160, flex: 1},
            ],
            data,
            height: 240,
            lang: 'zh_cn',
            footer: ['checkbox', 'checkedInfo', 'flex', 'pager'],
            plugins: ['checkable', 'pager'],
            localPager,
            footPager: localPager ? {
                recPerPage: 5,
                items: [
                    {type: 'link', page: 'prev', text: 'Previous page'},
                    {type: 'info', text: '{page}/{pageTotal}'},
                    {type: 'link', page: 'next', text: 'Next page'},
                ],
            } : undefined,
            onCheckChange(this: {getChecks: () => string[]}) {
                document.getElementById('e2e-dtable')!.dataset.checks = JSON.stringify(this.getChecks());
            },
        });
    }, {data, mainPath: '/lib/dtable/src/main.ts', localPager});

    await page.locator('#e2e-dtable .dtable-header .dtable-checkbox').waitFor();
    await page.locator('#e2e-dtable .dtable-footer .dtable-checkbox').waitFor();
    await expect(page.locator('#e2e-dtable .dtable-block:not(.dtable-header) .dtable-checkbox')).toHaveCount(localPager ? 5 : rows.length);
}

function readChecks(page: Page) {
    return page.evaluate(() => ({
        header: (document.querySelector('#e2e-dtable .dtable-header .dtable-checkbox input') as HTMLInputElement | null)?.checked,
        footer: (document.querySelector('#e2e-dtable .dtable-footer .dtable-checkbox input') as HTMLInputElement | null)?.checked,
        rows: [...document.querySelectorAll('#e2e-dtable .dtable-block:not(.dtable-header) .dtable-checkbox input')].map(input => (input as HTMLInputElement).checked),
    }));
}

const headerLabel = (page: Page) => page.locator('#e2e-dtable .dtable-header .dtable-checkbox label');
const footerLabel = (page: Page) => page.locator('#e2e-dtable .dtable-footer .dtable-checkbox label');
const rowLabel = (page: Page, index: number) => page.locator('#e2e-dtable .dtable-block:not(.dtable-header) .dtable-checkbox label').nth(index);

test.describe('DTable checkable', () => {
    test.describe.configure({mode: 'serial'});
    test.setTimeout(90_000);

    test('checks and unchecks every row from the header checkbox', async ({page}) => {
        await mountCheckableTable(page);
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, false, false]});

        await headerLabel(page).click();
        expect(await readChecks(page)).toEqual({header: true, footer: true, rows: [true, true, true]});

        await headerLabel(page).click();
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, false, false]});
    });

    test('checks and unchecks every row from the footer checkbox', async ({page}) => {
        await mountCheckableTable(page);

        await footerLabel(page).click();
        expect(await readChecks(page)).toEqual({header: true, footer: true, rows: [true, true, true]});

        await footerLabel(page).click();
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, false, false]});
    });

    test('toggles once when the footer checkbox wrapper itself is clicked', async ({page}) => {
        await mountCheckableTable(page);

        // Clicking beside the checkbox is not relayed by a label, so the wrapper handler owns the toggle.
        await page.locator('#e2e-dtable .dtable-footer .dtable-checkbox').locator('..').click({position: {x: 2, y: 2}});
        expect(await readChecks(page)).toEqual({header: true, footer: true, rows: [true, true, true]});
    });

    test('checks and unchecks a single row from its own checkbox', async ({page}) => {
        await mountCheckableTable(page);

        await rowLabel(page, 1).click();
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, true, false]});

        await rowLabel(page, 1).click();
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, false, false]});
    });

    test('reflects the header checkbox once every row is checked one by one', async ({page}) => {
        await mountCheckableTable(page);

        for (let index = 0; index < rows.length; index++) {
            await rowLabel(page, index).click();
        }

        expect(await readChecks(page)).toEqual({header: true, footer: true, rows: [true, true, true]});
    });

    test('keeps the keyboard activation working on the underlying input', async ({page}) => {
        await mountCheckableTable(page);

        await page.locator('#e2e-dtable .dtable-header .dtable-checkbox input').focus();
        await page.keyboard.press('Space');

        expect(await readChecks(page)).toEqual({header: true, footer: true, rows: [true, true, true]});
    });

    test('limits header and footer select-all to the current page and keeps the count accurate', async ({page}) => {
        await mountCheckableTable(page, true);
        const table = page.locator('#e2e-dtable');
        const info = table.locator('.dtable-check-info');
        const selected = ['r1', 'r2', 'r3', 'r4', 'r5'];

        await headerLabel(page).click();
        await expect(info).toHaveText('已选择 5 项, 共 12 项');
        await expect(table).toHaveAttribute('data-checks', JSON.stringify(selected));
        expect(await readChecks(page)).toEqual({header: true, footer: true, rows: Array(5).fill(true)});

        await page.getByText('Next page', {exact: true}).click();
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: Array(5).fill(false)});
        await expect(info).toHaveText('已选择 5 项, 共 12 项');
        await footerLabel(page).click();
        await expect(info).toHaveText('已选择 10 项, 共 12 项');
        await expect(table).toHaveAttribute('data-checks', JSON.stringify([...selected, 'r6', 'r7', 'r8', 'r9', 'r10']));
        await footerLabel(page).click();
        await expect(table).toHaveAttribute('data-checks', JSON.stringify(selected));
        await expect(info).toHaveText('已选择 5 项, 共 12 项');

        await page.getByText('Next page', {exact: true}).click();
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, false]});
        await headerLabel(page).click();
        await expect(info).toHaveText('已选择 7 项, 共 12 项');
        await rowLabel(page, 0).click();
        await expect(info).toHaveText('已选择 6 项, 共 12 项');
        await expect(table).toHaveAttribute('data-checks', JSON.stringify([...selected, 'r12']));
        expect(await readChecks(page)).toEqual({header: false, footer: false, rows: [false, true]});
    });
});
