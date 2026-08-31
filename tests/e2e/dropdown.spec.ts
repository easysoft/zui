import {expect, test} from '@playwright/test';
import {mountDropdownFixture} from './fixtures/component-fixtures';

test.describe('Dropdown browser behavior', () => {
    test('opens and closes from its trigger', async ({page}) => {
        const {menu, trigger} = await mountDropdownFixture(page, {open: false});

        await trigger.click();
        await expect(menu).toBeVisible();
        await expect(trigger).toHaveClass(/\bwith-popover-show\b/);

        await trigger.click();
        await expect(menu).toBeHidden();
        await expect(trigger).not.toHaveClass(/\bwith-popover-show\b/);
    });

    test('opens a nested menu without dismissing the Dropdown', async ({page}) => {
        const {menu} = await mountDropdownFixture(page);
        const nestedItem = menu.locator('[z-key-path="export"]');

        await nestedItem.locator('.nested-toggle-icon').click();

        await expect(menu).toBeVisible();
        await expect(nestedItem).toHaveClass(/\bis-nested-show\b/);
        await expect(menu.locator('.dropdown-menu[z-key="export"]')).toBeVisible();
        await expect(menu.getByText('Export as PDF')).toBeVisible();
    });

    test('keeps an edge-anchored menu inside the viewport', async ({page}) => {
        const {menu} = await mountDropdownFixture(page, {viewportEdge: true});
        const viewport = page.viewportSize();
        const bounds = await menu.boundingBox();

        expect(viewport).not.toBeNull();
        expect(bounds).not.toBeNull();
        expect(bounds!.x).toBeGreaterThanOrEqual(0);
        expect(bounds!.y).toBeGreaterThanOrEqual(0);
        expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(viewport!.width);
        expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(viewport!.height);
    });

    test('supports the native keyboard activation of its button trigger', async ({page}) => {
        const {menu, trigger} = await mountDropdownFixture(page, {open: false});

        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(menu).toBeVisible();
        await expect(trigger).toBeFocused();

        await page.keyboard.press('Space');
        await expect(menu).toBeHidden();
        await expect(trigger).toBeFocused();
    });
});
