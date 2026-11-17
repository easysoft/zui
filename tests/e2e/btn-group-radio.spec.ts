import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

async function mountRadioFixture(page: Page, theme: string) {
    await page.goto('/btn-group/');
    await page.locator('#libPage.is-loaded').waitFor();
    const markup = await page.locator('#libPage #btnSegmentedNative').evaluate(element => element.outerHTML);
    await page.evaluate(({markup, theme}) => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.className = '';
        document.body.innerHTML = `
            <main class="p-4">
                <h1>Segmented radios</h1>
                <button id="before" type="button" class="btn">Before</button>
                <form id="radioForm" class="my-4">
                    <fieldset id="options">
                        ${markup}
                    </fieldset>
                    <button id="reset" type="reset" class="btn mt-4">Reset</button>
                </form>
                <button id="after" type="button" class="btn">After</button>
            </main>
        `;
    }, {markup, theme});
}

function formValue(page: Page) {
    return page.locator('#radioForm').evaluate(form => new FormData(form as HTMLFormElement).get('view'));
}

for (const theme of ['light', 'dark']) {
    test(`segmented radios retain native keyboard and form behavior in ${theme}`, async ({page}, testInfo) => {
        await mountRadioFixture(page, theme);
        const group = page.locator('.btn-segmented');
        const card = page.getByRole('radio', {name: '卡片'});
        const board = page.getByRole('radio', {name: '看板'});
        const cardLabel = group.locator('label[for="cardItem"]');
        const boardLabel = group.locator('label[for="boardItem"]');
        const canvas = await group.evaluate(element => `rgb(${getComputedStyle(element).getPropertyValue('--color-canvas-rgb').split(',').map(value => value.trim()).join(', ')})`);
        await expect(card).toBeChecked();
        expect(await formValue(page)).toBe('card');
        await expect(cardLabel).toHaveCSS('background-color', canvas);

        for (const width of [1280, 375]) {
            await page.setViewportSize({width, height: 900});
            const geometry = await group.evaluate((element) => {
                const bounds = element.getBoundingClientRect();
                return {
                    right: bounds.right,
                    tops: [...element.querySelectorAll('label')].map(label => label.getBoundingClientRect().top),
                };
            });
            expect(geometry.right).toBeLessThanOrEqual(width);
            expect(new Set(geometry.tops).size).toBe(1);
        }

        await page.locator('#before').focus();
        await page.keyboard.press('Tab');
        await expect(card).toBeFocused();
        expect(await card.evaluate(element => element.matches(':focus-visible'))).toBe(true);
        await expect(cardLabel).toHaveCSS('outline-style', 'solid');
        await expect(cardLabel).toHaveCSS('outline-width', '2px');
        expect(await cardLabel.evaluate(element => getComputedStyle(element).outlineColor)).not.toBe('rgba(0, 0, 0, 0)');
        await page.screenshot({path: testInfo.outputPath(`radio-focus-${theme}.png`)});

        await page.keyboard.press('ArrowRight');
        await expect(board).toBeFocused();
        await expect(board).toBeChecked();
        await expect(boardLabel).toHaveCSS('outline-style', 'solid');
        await expect(boardLabel).toHaveCSS('background-color', canvas);
        await expect(cardLabel).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
        expect(await formValue(page)).toBe('board');

        await page.keyboard.press('Tab');
        await expect(page.locator('#reset')).toBeFocused();
        await page.keyboard.press('Shift+Tab');
        await expect(board).toBeFocused();
        await page.keyboard.press('ArrowLeft');
        await expect(card).toBeChecked();

        await group.locator('label[for="listItem"]').click();
        await expect(page.getByRole('radio', {name: '列表'})).toBeChecked();
        expect(await formValue(page)).toBe('list');
        await page.locator('#reset').click();
        await expect(card).toBeChecked();
        await expect(cardLabel).toHaveCSS('background-color', canvas);
        expect(await formValue(page)).toBe('card');
    });

    test(`segmented radios reflect individual and fieldset disabling in ${theme}`, async ({page}, testInfo) => {
        await mountRadioFixture(page, theme);
        const card = page.getByRole('radio', {name: '卡片'});
        const board = page.getByRole('radio', {name: '看板'});
        const boardLabel = page.locator('label[for="boardItem"]');
        await board.evaluate(input => (input as HTMLInputElement).disabled = true);
        await expect(board).toBeDisabled();
        await expect(boardLabel).toHaveCSS('cursor', 'not-allowed');
        expect(await boardLabel.evaluate(element => Number(getComputedStyle(element).opacity))).toBeLessThan(1);
        const idle = await boardLabel.evaluate(element => ({background: getComputedStyle(element).backgroundColor, shadow: getComputedStyle(element).boxShadow}));
        await boardLabel.hover();
        expect(await boardLabel.evaluate(element => getComputedStyle(element, '::before').display)).toBe('none');
        await page.mouse.down();
        await expect(boardLabel).toHaveCSS('background-color', idle.background);
        await expect(boardLabel).toHaveCSS('box-shadow', idle.shadow);
        await page.mouse.up();
        await expect(card).toBeChecked();
        expect(await formValue(page)).toBe('card');
        await page.screenshot({path: testInfo.outputPath(`radio-disabled-${theme}.png`)});

        await board.evaluate(input => (input as HTMLInputElement).disabled = false);
        await expect(boardLabel).toHaveCSS('opacity', '1');
        await expect(boardLabel).toHaveCSS('cursor', 'pointer');
        await card.evaluate(input => (input as HTMLInputElement).disabled = true);
        await page.getByRole('radio', {name: '列表'}).focus();
        await page.keyboard.press('ArrowRight');
        await expect(board).toBeFocused();
        await expect(board).toBeChecked();
        expect(await formValue(page)).toBe('board');
        await page.keyboard.press('ArrowLeft');
        await expect(page.getByRole('radio', {name: '列表'})).toBeChecked();
        await expect(page.getByRole('radio', {name: '列表'})).toBeFocused();
        await expect(board).not.toBeChecked();
        expect(await formValue(page)).toBe('list');

        await card.evaluate(input => (input as HTMLInputElement).disabled = false);
        await boardLabel.click();
        await expect(board).toBeChecked();
        expect(await formValue(page)).toBe('board');
        await page.locator('#options').evaluate(element => (element as HTMLFieldSetElement).disabled = true);
        for (const input of await page.getByRole('radio').all()) {
            await expect(input).toBeDisabled();
        }
        await boardLabel.hover();
        expect(await boardLabel.evaluate(element => getComputedStyle(element, '::before').display)).toBe('none');
        expect(await formValue(page)).toBeNull();
        await page.locator('#before').focus();
        await page.keyboard.press('Tab');
        await expect(page.locator('#reset')).toBeFocused();
        await page.keyboard.press('Enter');
        await page.locator('#options').evaluate(element => (element as HTMLFieldSetElement).disabled = false);
        await expect(card).toBeChecked();
        await expect(boardLabel).toHaveCSS('opacity', '1');
        expect(await formValue(page)).toBe('card');
    });
}

test('segmented radios README example exposes valid native radio semantics', async ({page}) => {
    await mountRadioFixture(page, 'light');
    const results = await new AxeBuilder({page}).include('#radioForm').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations.map(({id, nodes}) => ({id, targets: nodes.map(node => node.target)}))).toEqual([]);
});
