import {expect, test} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('DTable exposes complete logical rows across fixed sections and supports keyboard scrolling', async ({page}) => {
    await page.goto('/dtable/');
    await page.locator('#datatableExample .dtable-header').first().waitFor({timeout: 60_000});
    await page.evaluate(async () => {
        document.body.innerHTML = '<main><div id="a11y-table" style="width: 400px"></div></main>';
        const path = '/lib/dtable/src/main.ts';
        const {DTable} = await import(path);
        new DTable('#a11y-table', {
            'aria-label': 'Projects',
            height: 140,
            scrollbarHover: false,
            cols: [
                {name: 'id', title: 'ID', width: 60, fixed: 'left'},
                {name: 'name', title: 'Name', width: 300},
                {name: 'notes', title: 'Notes', width: 200},
                {name: 'action', title: 'Action', width: 80, fixed: 'right', onRenderCell: () => [{html: '<a href="#edit">Edit</a>'}]},
            ],
            data: Array.from({length: 20}, (_, index) => ({id: String(index), name: `Project ${index}`, notes: `Notes ${index}`})),
        });
    });
    const table = page.getByRole('table', {name: 'Projects'});
    await expect(table).toHaveAttribute('aria-rowcount', '21');
    const snapshot = await table.ariaSnapshot();
    expect(snapshot).toContain('row "ID Name Notes Action"');
    expect(snapshot).toContain('row "0 Project 0 Notes 0 Edit"');
    expect(snapshot).toContain('columnheader "Name"');
    expect(snapshot).toContain('cell "Project 0"');
    expect(snapshot.match(/cell "Project 0"/g)).toHaveLength(1);

    await table.focus();
    await page.keyboard.press('PageDown');
    await expect(table.locator('[role="rowgroup"]').last().locator('[role="row"]').first()).toHaveAttribute('aria-rowindex', '5');
    await page.keyboard.press('End');
    await expect(page.locator('#a11y-table .dtable')).toHaveClass(/dtable-scrolled-end/);
    await page.keyboard.press('Tab');
    await expect(page.locator('#a11y-table').getByRole('link', {name: 'Edit'}).first()).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#edit$/);
    const accessibility = await new AxeBuilder({page}).include('#a11y-table').withRules(['aria-required-children', 'aria-required-parent', 'aria-valid-attr', 'aria-valid-attr-value', 'aria-allowed-attr']).analyze();
    expect(accessibility.violations).toEqual([]);
});
