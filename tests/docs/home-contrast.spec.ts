import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

async function expectTextContrast(page: Page, selector: string) {
    const result = await new AxeBuilder({page}).include(selector).withRules(['color-contrast']).analyze();
    expect(result.violations, 'Text must meet the applicable contrast ratio').toEqual([]);
    expect(result.incomplete, 'Text contrast must be measurable').toEqual([]);
}

for (const colorScheme of ['light', 'dark'] as const) {
    for (const width of [390, 768, 1440]) {
        test(`ZUI-DOC-007: home action stays readable in ${colorScheme} at ${width}px`, async ({page}) => {
            await page.setViewportSize({width, height: 900});
            await page.emulateMedia({colorScheme});
            await page.goto('./');
            const action = page.getByRole('link', {name: '快速开始', exact: true});
            await expect(action).toBeVisible();
            const checkContrast = async () => {
                await action.evaluate(element => Promise.all(element.getAnimations().map(animation => animation.finished)));
                await expectTextContrast(page, '.VPButton.brand');
            };

            await checkContrast();
            await action.hover();
            await checkContrast();
            await page.mouse.down();
            await checkContrast();
            await page.mouse.move(0, 0);
            await page.mouse.up();

            await action.focus();
            await page.keyboard.press('Tab');
            await page.keyboard.press('Shift+Tab');
            await expect(action).toBeFocused();
            await expect(action).toHaveCSS('outline-style', 'solid');
            await expect(action).toHaveCSS('outline-width', '2px');
            await expect(action).toHaveCSS('outline-offset', '3px');
            await expect(action).not.toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)');
            await checkContrast();

            await page.keyboard.press('Enter');
            await expect(page).toHaveURL(/\/guide\/start\/$/);
        });
    }
}
