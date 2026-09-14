import {expect, test} from '@playwright/test';

test('custom button preserves native keyboard and form behavior', async ({page}) => {
    await page.goto('/button/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async (modulePath) => {
        const {defineButton} = await import(modulePath);
        defineButton();
        document.body.innerHTML = `
            <form>
                <zui-button text="Save" btn-type="submit" type="primary"></zui-button>
                <output aria-live="polite">Waiting</output>
            </form>
        `;
        document.querySelector('form')!.addEventListener('submit', (event) => {
            event.preventDefault();
            document.querySelector('output')!.textContent = 'Submitted';
        });
    }, '/lib/web-components/src/button.ts');

    const button = page.getByRole('button', {name: 'Save'});
    await expect(button).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('output')).toHaveText('Submitted');
    await page.evaluate(() => {
        document.querySelector('zui-button')!.disabled = true;
    });
    await expect(button).toBeDisabled();
    await page.setViewportSize({width: 375, height: 667});
    await expect(button).toBeVisible();
});
