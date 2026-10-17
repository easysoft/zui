import {expect, test} from '@playwright/test';

import type {Locator} from '@playwright/test';

async function expectSearchInside(control: Locator) {
    const bounds = await control.evaluate((element) => {
        const outer = element.getBoundingClientRect();
        return [...element.querySelectorAll('.picker-search-input, .magnifier, .picker-search-clear')].map((child) => {
            const inner = child.getBoundingClientRect();
            return {
                top: inner.top - outer.top,
                bottom: outer.bottom - inner.bottom,
                left: inner.left - outer.left,
                right: outer.right - inner.right,
            };
        });
    });
    expect(bounds.length).toBeGreaterThan(0);
    for (const bound of bounds) {
        for (const distance of Object.values(bound)) {
            expect(distance).toBeGreaterThanOrEqual(-0.5);
        }
    }
    await expect(control.locator('.picker-search-input')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
}

for (const placement of ['container', 'className']) {
    for (const [size, height] of [['sm', 24], ['md', 28], ['default', 32], ['lg', 40]] as const) {
        test(`picker ${size} sizes search and multiple selections through ${placement}`, async ({page}) => {
            await page.goto('/picker/');
            await page.locator('#libPage.is-loaded').waitFor();
            await page.evaluate(async ({modulePath, size, placement}) => {
                const {Picker} = await import(modulePath) as typeof import('@zui/picker');
                document.body.innerHTML = `
                    <main class="p-4 col gap-4">
                        <h1>Picker sizes</h1>
                        <div id="size-single" class="w-48"></div>
                        <div id="size-multi" class="w-48"></div>
                    </main>
                `;
                const sizeClass = size === 'default' ? '' : `size-${size}`;
                const items = ['Apple', 'Orange', 'Strawberries'].map(text => ({text, value: text.toLowerCase()}));
                for (const multiple of [false, true]) {
                    const element = document.querySelector<HTMLElement>(multiple ? '#size-multi' : '#size-single')!;
                    if (placement === 'container' && sizeClass) {
                        element.classList.add(sizeClass);
                    }
                    new Picker(element, {
                        items,
                        multiple,
                        defaultValue: multiple ? 'apple,orange' : 'apple',
                        placeholder: 'Choose fruit',
                        ...(placement === 'className' ? {className: sizeClass} : {}),
                    });
                }
            }, {modulePath: '/lib/picker/src/main.ts', size, placement});

            const single = page.locator('#size-single .picker-select');
            await expect(single).toHaveCSS('height', `${height}px`);
            await single.click();
            await expect(single.locator('input')).toBeVisible();
            await expectSearchInside(single);
            await single.locator('input').fill('Orange');
            await expect(single.locator('.picker-search-clear')).toBeVisible();
            await expectSearchInside(single);
            await single.locator('.picker-search-clear').click();
            await expect(single.locator('input')).toHaveValue('');
            await page.getByRole('link', {name: 'Orange', exact: true}).click();
            await expect(single).toContainText('Orange');
            await expect(single).toHaveCSS('height', `${height}px`);

            const multiple = page.locator('#size-multi .picker-select');
            await expect(multiple).toHaveCSS('height', `${height}px`);
            await multiple.locator('.picker-deselect-btn').first().click();
            await multiple.locator('.picker-deselect-btn').first().click();
            await expect(multiple).toContainText('Choose fruit');
            await expect(multiple).toHaveCSS('height', `${height}px`);
            await multiple.click();
            await expect(multiple.locator('input')).toBeVisible();
            await expectSearchInside(multiple);
            await expect(multiple).toHaveCSS('height', `${height}px`);
            await page.getByRole('link', {name: 'Apple', exact: true}).click();
            await page.getByRole('link', {name: 'Orange', exact: true}).click();
            await page.getByRole('heading', {name: 'Picker sizes'}).click();
            await expect(multiple.locator('.picker-multi-selection')).toHaveCount(2);
            await expect(multiple).toHaveCSS('height', `${height}px`);

            await multiple.click();
            await page.getByRole('link', {name: 'Strawberries', exact: true}).click();
            await page.getByRole('heading', {name: 'Picker sizes'}).click();
            expect((await multiple.boundingBox())!.height).toBeGreaterThan(height);
            await multiple.locator('.picker-deselect-btn[data-value="strawberries"]').click();
            await expect(multiple).toHaveCSS('height', `${height}px`);
        });
    }
}
