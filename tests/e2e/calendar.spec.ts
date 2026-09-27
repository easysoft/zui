import {expect, test} from '@playwright/test';

test('keeps calendar navigation and event commands working after updates and reset', async ({page}) => {
    await page.goto('/calendar/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async () => {
        const modulePath = '/lib/calendar/src/main.ts';
        const {Calendar} = await import(modulePath) as typeof import('@zui/calendar');
        const calendar = Calendar.get('#calendar')!;
        calendar.render({
            date: '2026-09-27',
            events: [{id: 'meeting', title: 'September meeting', start: '2026-09-27'}],
            onClickEvent(event) {
                calendar.element.dataset.clickedEvent = event.id;
            },
        }, true);
    });

    const calendar = page.locator('#calendar');
    const navigation = calendar.locator('.calendar-header-nav');
    await expect(calendar.getByText('September meeting', {exact: true})).toBeVisible();
    await calendar.getByText('September meeting', {exact: true}).click();
    await expect(calendar).toHaveAttribute('data-clicked-event', 'meeting');
    await navigation.locator('.chevron-right').click();
    await expect(navigation.getByText('2026-10', {exact: true})).toBeVisible();
    await expect(calendar.getByText('September meeting', {exact: true})).toHaveCount(0);

    await page.evaluate(async () => {
        const modulePath = '/lib/calendar/src/main.ts';
        const {Calendar} = await import(modulePath) as typeof import('@zui/calendar');
        const calendar = Calendar.get('#calendar')!;
        calendar.render({events: [{id: 'updated', title: 'October meeting', start: '2026-10-27'}]});
        calendar.$!.modifyEvents([{id: 'local', title: 'Local meeting', start: '2026-10-27'}]);
    });
    await expect(calendar.getByText('October meeting', {exact: true})).toBeVisible();
    await expect(calendar.getByText('Local meeting', {exact: true})).toBeVisible();

    await page.evaluate(async () => {
        const modulePath = '/lib/calendar/src/main.ts';
        const {Calendar} = await import(modulePath) as typeof import('@zui/calendar');
        Calendar.get('#calendar')!.render({
            date: '2026-10-27',
            events: [{id: 'reset', title: 'Reset meeting', start: '2026-10-27'}],
        }, true);
    });
    await expect(calendar.getByText('Reset meeting', {exact: true})).toBeVisible();
    await expect(calendar.getByText('October meeting', {exact: true})).toHaveCount(0);
    await expect(calendar.getByText('Local meeting', {exact: true})).toHaveCount(0);
    await navigation.locator('.chevron-left').click();
    await expect(navigation.getByText('2026-09', {exact: true})).toBeVisible();
});
