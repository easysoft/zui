import {expect, openStory, storyId, switchToLabel, test} from './fixtures';

test.use({timezoneId: 'Asia/Shanghai'});
test.beforeEach(async ({page}) => {
    await page.clock.setFixedTime(new Date('2026-10-15T09:30:00+08:00'));
});

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} DatetimePicker stories`, () => {
        test('synchronizes Controls, calendar and time choices without feedback Actions', async ({page}) => {
            const canvas = await openStory(page, 'datetime-picker', 'playground', theme);
            const input = canvas.getByRole('textbox', {name: '计划开始时间', exact: true});
            await page.locator('#control-value').fill('2026-11-04 11:45');
            await expect(input).toHaveValue('2026-11-04 11:45');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('datetime change', {exact: true})).toHaveCount(0);
            await input.click();
            const popup = canvas.locator('.pick-pop');
            await expect(popup.locator('[data-date="2026-11-04"]')).toHaveClass(/\bselected\b/);
            await popup.locator('[data-date="2026-11-05"] button').click();
            await expect(input).toHaveValue('2026-11-05 11:45');
            await popup.locator('.time-picker-menu .menu').first().getByText('14', {exact: true}).click();
            await popup.locator('.time-picker-menu .menu').last().getByText('20', {exact: true}).click();
            await expect(input).toHaveValue('2026-11-05 14:20');
            await expect(popup).toBeVisible();
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(page.locator('#control-value')).toHaveValue('2026-11-05 14:20');
            expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()])).toEqual([['start', '2026-11-05 14:20']]);
        });

        test('commits complete manual input on blur, rejects invalid dates and submits after recovery', async ({page}) => {
            const canvas = await openStory(page, 'datetime-picker', 'playground', theme);
            const input = canvas.getByRole('textbox', {name: '计划开始时间', exact: true});
            await input.fill('2026-11-06 12:35');
            await expect(page.locator('#control-value')).toHaveValue('2026-10-15 09:30');
            await input.press('Tab');
            await expect(page.locator('#control-value')).toHaveValue('2026-11-06 12:35');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await input.fill('2026-13-06 12:35');
            await input.press('Tab');
            await expect(input).toHaveValue('');
            await expect(page.getByText('datetime invalid', {exact: true})).toHaveCount(1);
            await input.fill('2026-12-06 12:35');
            await canvas.getByRole('button', {name: '提交', exact: true}).focus();
            await page.keyboard.press('Enter');
            await expect(input).toHaveValue('2026-12-06 12:35');
            await expect(page.getByText('datetime submit', {exact: true})).toHaveCount(1);
            expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('start'))).toBe('2026-12-06 12:35');
        });

        test('selects from an empty value and clears the native submitted value', async ({page}) => {
            const canvas = await openStory(page, 'datetime-picker', 'empty', theme);
            const input = canvas.getByRole('textbox', {name: '计划开始时间', exact: true});
            await expect(input).toHaveValue('');
            await input.click();
            await canvas.locator('[data-date="2026-10-18"] button').click();
            await expect(input).toHaveValue('2026-10-18 09:30');
            await canvas.locator('.date-picker .input-control-suffix button').click();
            await expect(input).toHaveValue('');
            await expect(page.locator('#control-value')).toHaveValue('');
            expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('start'))).toBe('');
        });

        for (const state of [{variant: 'disabled', property: 'disabled'}, {variant: 'read-only', property: 'readonly'}]) {
            test(`${state.variant} prevents editing, preserves form semantics and can recover`, async ({page}) => {
                const canvas = await openStory(page, 'datetime-picker', state.variant, theme);
                const input = canvas.getByRole('textbox', {name: '计划开始时间', exact: true});
                await expect(input).not.toBeEditable();
                await input.click({force: true});
                await expect(canvas.locator('.pick-pop')).toHaveCount(0);
                expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()]))
                    .toEqual(state.property === 'disabled' ? [] : [['start', '2026-10-15 09:30']]);
                await page.locator(`#control-${state.property}`).focus();
                await page.keyboard.press('Space');
                await expect(input).toBeEditable();
                await input.click();
                await expect(canvas.locator('.pick-pop')).toBeVisible();
                await page.locator(`#control-${state.property}`).focus();
                await page.keyboard.press('Space');
                await expect(canvas.locator('.pick-pop')).toHaveCount(0);
            });
        }

        test('disables out-of-range calendar dates and clamps manually entered bounds', async ({page}) => {
            const canvas = await openStory(page, 'datetime-picker', 'date-range', theme);
            const input = canvas.getByRole('textbox', {name: '计划开始时间', exact: true});
            await input.click();
            await expect(canvas.locator('[data-date="2026-10-09"] button')).toBeDisabled();
            await expect(canvas.locator('[data-date="2026-10-21"] button')).toBeDisabled();
            await expect(canvas.locator('[data-date="2026-10-10"] button')).toBeEnabled();
            await input.fill('2026-10-01 09:30');
            await input.press('Tab');
            await expect(input).toHaveValue('2026-10-10 08:00');
            await input.fill('2026-10-30 09:30');
            await input.press('Tab');
            await expect(input).toHaveValue('2026-10-20 18:00');
            await expect(page.locator('#control-value')).toHaveValue('2026-10-20 18:00');
        });

        test('releases the open date and time popup when switching stories', async ({page}) => {
            const canvas = await openStory(page, 'datetime-picker', 'playground', theme);
            await canvas.getByRole('textbox', {name: '计划开始时间', exact: true}).click();
            await expect(canvas.locator('.datetime-picker-menu')).toBeVisible();
            await switchToLabel(page);
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
            await expect(canvas.locator('input[name="start"]')).toHaveCount(0);
        });

        test('keeps stepped time choices reachable within a phone viewport', async ({page}) => {
            await page.setViewportSize({width: 390, height: 844});
            const id = storyId('datetime-picker', 'minute-step');
            await page.goto(`./iframe.html?id=${encodeURIComponent(id)}&viewMode=story&globals=theme:${theme}`);
            await expect(page).toHaveTitle(id);
            await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
            const input = page.getByRole('textbox', {name: '计划开始时间', exact: true});
            await input.click();
            const popup = page.locator('.pick-pop');
            await expect(popup).toHaveClass(/\bin\b/);
            const minutes = popup.locator('.time-picker-menu .menu').last();
            await expect(minutes.locator('.menu-item')).toHaveText(['00', '15', '30', '45']);
            await minutes.getByText('45', {exact: true}).click();
            await expect(input).toHaveValue('2026-10-15 09:45');
            expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
            const bounds = await popup.boundingBox();
            expect(bounds!.x).toBeGreaterThanOrEqual(0);
            expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390);
        });
    });
}
