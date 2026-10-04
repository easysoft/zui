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

    test('restores keyboard focus and keeps focus inside an already open dialog', async ({page}) => {
        const {modal, trigger} = await mountModalFixture(page, {open: false});
        await trigger.focus();
        await page.keyboard.press('Enter');
        const closeButton = modal.getByRole('button', {name: 'Close'});
        await expect(closeButton).toBeFocused();

        await page.evaluate(async (modulePath) => {
            const {ModalTrigger} = await import(modulePath) as {
                ModalTrigger: {get: (selector: string) => {show: () => boolean}};
            };
            ModalTrigger.get('#e2e-modal-trigger').show();
        }, '/lib/modal/src/main.ts');
        await expect(closeButton).toBeFocused();

        await page.keyboard.press('Escape');
        await expect(modal).toBeHidden();
        await expect(trigger).toBeFocused();
    });

    test('restores the previous focus when opened programmatically', async ({page}) => {
        const {modal} = await mountModalFixture(page, {open: false});
        await page.evaluate(async (modulePath) => {
            const input = document.createElement('input');
            input.id = 'e2e-modal-previous-focus';
            document.querySelector('#e2e-modal-contract')!.prepend(input);
            input.focus();

            const {ModalBase} = await import(modulePath) as {
                ModalBase: {ensure: (selector: string, options: Record<string, unknown>) => {show: () => boolean}};
            };
            ModalBase.ensure('#e2e-modal', {animation: false, show: false}).show();
        }, '/lib/modal/src/main.ts');
        const closeButton = modal.getByRole('button', {name: 'Close'});
        await expect(closeButton).toBeFocused();
        await closeButton.click();

        await expect(modal).toBeHidden();
        await expect(page.locator('#e2e-modal-previous-focus')).toBeFocused();
    });

    test('lets onHidden choose a fallback when the trigger is unavailable', async ({page}) => {
        for (const state of ['removed', 'hidden', 'disabled']) {
            const {modal} = await mountModalFixture(page);
            await page.evaluate(async ({modulePath, state}) => {
                const trigger = document.querySelector<HTMLButtonElement>('#e2e-modal-trigger')!;
                const fallback = document.createElement('button');
                fallback.id = 'e2e-modal-fallback';
                fallback.textContent = 'Continue';
                document.querySelector('#e2e-modal-contract')!.append(fallback);

                const {ModalTrigger} = await import(modulePath) as {
                    ModalTrigger: {get: (element: HTMLElement) => {modal: {setOptions: (options: {onHidden: () => void}) => void}}};
                };
                ModalTrigger.get(trigger).modal.setOptions({onHidden: () => fallback.focus()});
                if (state === 'removed') {
                    trigger.remove();
                } else if (state === 'hidden') {
                    trigger.hidden = true;
                } else {
                    trigger.disabled = true;
                }
            }, {modulePath: '/lib/modal/src/main.ts', state});

            await modal.getByRole('button', {name: 'Close'}).click();
            await expect(modal).toBeHidden();
            await expect(page.locator('#e2e-modal-fallback')).toBeFocused();
        }
    });

    test('stacks dialogs and restores the previous layer', async ({page}) => {
        const {modal, secondModal, secondTrigger, trigger} = await mountModalFixture(page, {stacked: true});
        const firstZIndex = Number(await modal.evaluate(element => getComputedStyle(element).zIndex));
        const secondZIndex = Number(await secondModal.evaluate(element => getComputedStyle(element).zIndex));

        await expect(modal).toHaveClass(/\bmodal-hide\b/);
        expect(secondZIndex).toBeGreaterThan(firstZIndex);

        await secondModal.getByRole('button', {name: 'Close second modal'}).click();
        await expect(secondModal).toBeHidden();
        await expect(modal).toBeVisible();
        await expect(modal).not.toHaveClass(/\bmodal-hide\b/);
        await expect(secondTrigger).toBeFocused();

        await page.keyboard.press('Escape');
        await expect(modal).toBeHidden();
        await expect(trigger).toBeFocused();
    });
});
