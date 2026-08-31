import {expect, test} from '@playwright/test';
import {mountModalFixture} from './fixtures/component-fixtures';

test.describe('Modal browser behavior', () => {
    test('Escape closes the active keyboard-enabled Modal', async ({page}) => {
        const {modal} = await mountModalFixture(page);

        await page.keyboard.press('Escape');

        await expect(modal).toBeHidden();
    });

    test('moves focus into the dialog and returns it to the trigger when closed', async ({page}) => {
        const {modal, trigger} = await mountModalFixture(page);
        const closeButton = modal.getByRole('button', {name: 'Close'});

        await expect(closeButton).toBeFocused();
        await closeButton.click();

        await expect(modal).toBeHidden();
        await expect(trigger).toBeFocused();
    });

    test('stacks dialogs and restores the previous layer', async ({page}) => {
        const {modal, secondModal} = await mountModalFixture(page, {stacked: true});
        const firstZIndex = Number(await modal.evaluate(element => getComputedStyle(element).zIndex));
        const secondZIndex = Number(await secondModal.evaluate(element => getComputedStyle(element).zIndex));

        await expect(modal).toHaveClass(/\bmodal-hide\b/);
        expect(secondZIndex).toBeGreaterThan(firstZIndex);

        await secondModal.getByRole('button', {name: 'Close second modal'}).click();
        await expect(secondModal).toBeHidden();
        await expect(modal).toBeVisible();
        await expect(modal).not.toHaveClass(/\bmodal-hide\b/);
    });
});
