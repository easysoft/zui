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

test('custom pager changes pages through the keyboard and reports the current state', async ({page}) => {
    await page.goto('/pager/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async (modulePath) => {
        const {Pager, ZuiPagerElement} = await import(modulePath);
        if (customElements.get('zui-pager') !== ZuiPagerElement) {
            throw new Error('Pager import did not register its configured element');
        }
        Pager.register();
        document.body.innerHTML = '<zui-pager rec-total="120" rec-per-page="20" aria-label="分页"></zui-pager><output></output>';
        document.querySelector('zui-pager')!.addEventListener('zui-change', (event) => {
            document.querySelector('output')!.textContent = String((event as CustomEvent).detail.page);
        });
    }, '/lib/pager/src/main.ts');
    await expect(page.locator('zui-pager')).toHaveCSS('display', 'block');
    await expect(page.locator('zui-pager > .zui-webc-mount')).toHaveCSS('display', 'contents');
    const second = page.getByRole('button', {name: '2', exact: true});
    await second.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('output')).toHaveText('2');
    await expect(page.locator('zui-pager')).toHaveAttribute('page', '2');
    await expect(second).toBeDisabled();
});
