import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';
import type {Page} from '@playwright/test';

async function openPage(page: Page) {
    await page.goto('/segmented/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page).toHaveTitle(/ZUI/);
    await expect(page.locator('vite-error-overlay')).toHaveCount(0);
}

async function mount(page: Page, variant: 'html' | 'vanilla' | 'preact', theme: string) {
    await openPage(page);
    const markup = await page.locator('#segmentedNative').evaluate(element => element.outerHTML);
    await page.evaluate(async ({variant, theme, markup, corePath, componentPath, vanillaPath}) => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.className = '';
        document.body.innerHTML = `<main class="p-4"><h1>分段选择器</h1>
            <button id="before" class="btn" type="button">开始</button>
            <form id="form" class="my-4"><fieldset id="fields"><legend>视图</legend><div id="host"></div></fieldset>
            <button id="reset" type="reset" class="btn mt-4">重置</button></form></main>`;
        const host = document.getElementById('host')!;
        if (variant === 'html') {
            host.innerHTML = markup;
            return;
        }
        const options = {
            name: 'view',
            items: [{value: 'list', text: '列表'}, {value: 'board', text: '看板', disabled: true}, {value: 'card', text: '卡片'}],
            attrs: {'aria-label': '视图'},
            onChange: () => {host.dataset.changes = String(Number(host.dataset.changes ?? 0) + 1);},
        };
        if (variant === 'vanilla') {
            const {Segmented} = await import(vanillaPath) as typeof import('@zui/segmented');
            new Segmented(host, options);
        } else {
            const [{h, render}, {Segmented}] = await Promise.all([
                import(corePath) as Promise<typeof import('@zui/core')>,
                import(componentPath) as Promise<typeof import('@zui/segmented/react')>,
            ]);
            render(h(Segmented, options), host);
        }
    }, {variant, theme, markup, corePath: '/lib/core/src/main.ts', componentPath: '/lib/segmented/src/main-react.ts', vanillaPath: '/lib/segmented/src/main.ts'});
}

for (const theme of ['light', 'dark']) {
    for (const variant of ['html', 'vanilla', 'preact'] as const) {
        test(`${variant} segmented keyboard, native forms and disabled states in ${theme}`, async ({page}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            await mount(page, variant, theme);
            const group = page.getByRole('radiogroup', {name: '视图'});
            const list = group.getByRole('radio', {name: '列表'});
            const card = group.getByRole('radio', {name: '卡片'});
            const cardLabel = group.locator('.segmented-label').last();
            await expect(list).toBeChecked();
            await expect(group).toHaveCSS('display', 'inline-flex');
            for (const width of [1280, 375]) {
                await page.setViewportSize({width, height: 700});
                const bounds = await group.locator('.segmented-item').evaluateAll(items => items.map((item) => {
                    const rect = item.getBoundingClientRect();
                    return {top: rect.top, right: rect.right};
                }));
                expect(new Set(bounds.map(rect => rect.top)).size).toBe(1);
                expect(bounds.at(-1)!.right).toBeLessThanOrEqual(width);
            }
            await page.locator('#before').focus();
            await page.keyboard.press('Tab');
            await expect(list).toBeFocused();
            await page.keyboard.press('ArrowRight');
            await expect(card).toBeFocused();
            await expect(card).toBeChecked();
            await expect(cardLabel).toHaveCSS('outline-style', 'solid');
            await expect(cardLabel).toHaveCSS('outline-width', '2px');
            const canvas = await cardLabel.evaluate(element => `rgb(${getComputedStyle(element).getPropertyValue('--color-canvas-rgb').split(',').map(value => value.trim()).join(', ')})`);
            await expect(cardLabel).toHaveCSS('background-color', canvas);
            expect(await page.locator('#form').evaluate(form => [...new FormData(form as HTMLFormElement).values()])).toEqual(['card']);
            await page.keyboard.press('Space');
            await expect(card).toBeChecked();
            await page.keyboard.press('Tab');
            await expect(page.locator('#reset')).toBeFocused();
            await page.keyboard.press('Shift+Tab');
            await expect(card).toBeFocused();
            await page.screenshot({path: testInfo.outputPath(`${variant}-${theme}.png`)});
            await group.getByText('列表', {exact: true}).click();
            await group.getByText('卡片', {exact: true}).click();
            const changes = await page.locator('#host').getAttribute('data-changes');
            if (variant !== 'html') expect(changes).toBe('3');
            await page.locator('#reset').click();
            await expect(list).toBeChecked();
            if (variant !== 'html') await expect(page.locator('#host')).toHaveAttribute('data-changes', changes!);
            await page.locator('#fields').evaluate(fieldset => (fieldset as HTMLFieldSetElement).disabled = true);
            await expect(card).toBeDisabled();
            await expect(cardLabel).toHaveCSS('cursor', 'not-allowed');
            const idle = await cardLabel.evaluate(element => getComputedStyle(element).backgroundColor);
            await cardLabel.hover();
            await page.mouse.down();
            await expect(cardLabel).toHaveCSS('background-color', idle);
            await page.mouse.up();
            await expect(list).toBeChecked();
            expect(await page.locator('#form').evaluate(form => [...new FormData(form as HTMLFormElement).values()])).toEqual([]);
            expect(errors).toEqual([]);
            expect((await new AxeBuilder({page}).include('#form').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()).violations).toEqual([]);
        });
    }
}

test('development examples cover updates, controlled values and FormBuilder', async ({page}) => {
    await openPage(page);
    await page.locator('#segmentedControlled').getByText('卡片').click();
    await expect(page.locator('#segmentedControlledValue')).toHaveText('card');
    await expect(page.locator('#segmentedDynamic input')).toHaveCount(0);
    await page.locator('#segmentedLoad').click();
    await page.locator('#segmentedDynamic').getByText('卡片').click();
    await page.locator('#segmentedLoad').click();
    await expect(page.locator('#segmentedDynamic').getByRole('radio', {name: '卡片'})).toBeChecked();
    await page.locator('#segmentedField').getByText('列表').click();
    await page.locator('#segmentedForm').getByRole('button', {name: '读取表单'}).click();
    await expect(page.locator('#segmentedForm output')).toHaveText('{"view":"list"}');
    await page.locator('#segmentedForm').getByRole('button', {name: '重置'}).click();
    await expect(page.locator('#segmentedField').getByRole('radio', {name: '卡片'})).toBeChecked();
    await page.locator('#segmentedBuilder').getByText('列表').click();
    await expect(page.locator('#segmentedBuilderValue')).toHaveText('{"view":"list"}');
});

test('block, vertical, round, icons, RTL and reduced motion retain layout', async ({page}, testInfo) => {
    await openPage(page);
    await page.setViewportSize({width: 375, height: 900});
    const block = page.locator('#segmentedBlock .segmented');
    const widths = await block.locator('.segmented-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().width));
    expect(widths[0]).toBeCloseTo(widths[2], 1);
    expect(await block.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
    await expect(page.locator('#segmentedVertical .segmented')).toHaveCSS('flex-direction', 'column');
    await expect(page.locator('#segmentedRound .segmented')).toHaveCSS('border-radius', '9999px');
    await expect(page.locator('#segmentedIcons').getByRole('radio', {name: '日历'})).toBeVisible();
    await page.emulateMedia({reducedMotion: 'reduce'});
    await expect(page.locator('#segmentedBasic .segmented-label').first()).toHaveCSS('transition-property', 'none');
    await page.locator('#segmentedBasic').evaluate(element => element.setAttribute('dir', 'rtl'));
    const rtlGroup = page.locator('#segmentedBasic');
    const positions = await rtlGroup.locator('.segmented-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().left));
    expect(positions[0]).toBeGreaterThan(positions[2]);
    const last = rtlGroup.getByRole('radio', {name: '卡片'});
    await rtlGroup.getByText('卡片', {exact: true}).click();
    await last.focus();
    // Both native RTL conventions can reach the other enabled item from this position.
    await page.keyboard.press('ArrowLeft');
    await expect(rtlGroup.getByRole('radio', {name: '列表'})).toBeChecked();
    await expect(rtlGroup.locator('input:checked')).toHaveCount(1);
    await expect(rtlGroup.locator('input:checked')).toBeFocused();
    await page.screenshot({path: testInfo.outputPath('segmented-mobile.png')});
    await page.emulateMedia({forcedColors: 'active'});
    expect(await page.evaluate(() => matchMedia('(forced-colors: active)').matches)).toBe(true);
    await expect(rtlGroup.locator('.segmented-input:focus + .segmented-label')).toHaveCSS('outline-style', 'dashed');
});
