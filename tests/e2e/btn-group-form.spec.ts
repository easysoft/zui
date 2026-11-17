import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';
import type {ComponentType} from 'preact';
import type {BtnGroupOptions} from '@zui/btn-group';

async function mountRadioComponent(page: Page, variant: 'BtnGroup' | 'BtnSegmented', theme = 'light', controlled = false) {
    await page.goto('/btn-group/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page).toHaveTitle(/ZUI/);
    await expect(page.locator('vite-error-overlay')).toHaveCount(0);
    await page.evaluate(async ({corePath, componentPath, variant, theme, controlled}) => {
        const [{h, render}, components] = await Promise.all([
            import(corePath) as Promise<typeof import('@zui/core')>,
            import(componentPath) as Promise<typeof import('@zui/btn-group/react')>,
        ]);
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.className = '';
        document.body.innerHTML = `
            <main class="p-4">
                <h1>按钮组表单</h1>
                <button id="before" class="btn" type="button">开始</button>
                <form id="radioForm" class="my-4">
                    <fieldset id="fields"><legend>视图</legend><div id="host"></div></fieldset>
                    <button id="reset" class="btn mt-4" type="reset">重置</button>
                </form>
                <button id="after" class="btn" type="button">结束</button>
            </main>`;
        const host = document.getElementById('host')!;
        const Component: ComponentType<BtnGroupOptions> = components[variant];
        const items = [
            {id: 'list', text: '列表'},
            {id: 'board', text: '看板', disabled: true},
            {id: 'card', text: '卡片'},
        ];
        const show = (value: string) => render(h(Component, {
            radio: true,
            name: 'view',
            required: true,
            defaultValue: 'card',
            value: controlled ? value : undefined,
            items,
            attrs: {'aria-label': '视图'},
            onChange: () => {host.dataset.changes = String(Number(host.dataset.changes ?? 0) + 1);},
            onClickItem: () => {host.dataset.clicks = String(Number(host.dataset.clicks ?? 0) + 1);},
        }), host);
        show(controlled ? 'list' : 'card');
        // Keep the test driver on this fixture's host rather than changing the app's global API.
        (host as HTMLElement & {show: typeof show}).show = show;
    }, {corePath: '/lib/core/src/main.ts', componentPath: '/lib/btn-group/src/main-react.ts', variant, theme, controlled});
}

async function submittedValue(page: Page) {
    return page.locator('#radioForm').evaluate(form => new FormData(form as HTMLFormElement).getAll('view'));
}

for (const variant of ['BtnGroup', 'BtnSegmented'] as const) {
    for (const theme of ['light', 'dark']) {
        test(`${variant} radios preserve keyboard, form and visual states in ${theme}`, async ({page}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            await mountRadioComponent(page, variant, theme);
            const group = page.getByRole('radiogroup', {name: '视图'});
            const list = page.getByRole('radio', {name: '列表'});
            const card = page.getByRole('radio', {name: '卡片'});
            await expect(card).toBeChecked();
            expect(await submittedValue(page)).toEqual(['card']);
            await expect(group.locator('button, a')).toHaveCount(0);
            await expect(group.locator('label').first()).not.toHaveAttribute('aria-pressed');

            for (const width of [1280, 375]) {
                await page.setViewportSize({width, height: 600});
                const bounds = await group.locator('label').evaluateAll(labels => labels.map((label) => {
                    const rect = label.getBoundingClientRect();
                    return {top: rect.top, right: rect.right};
                }));
                expect(new Set(bounds.map(rect => rect.top)).size).toBe(1);
                expect(bounds.at(-1)!.right).toBeLessThanOrEqual(width);
            }
            const radii = await group.locator('label').evaluateAll(labels => labels.map((label) => {
                const style = getComputedStyle(label);
                return {left: parseFloat(style.borderTopLeftRadius), right: parseFloat(style.borderTopRightRadius)};
            }));
            expect(radii[0].left).toBeGreaterThan(0);
            expect(radii[2].right).toBeGreaterThan(0);
            if (variant === 'BtnGroup') {
                expect(radii[0].right).toBe(0);
                expect(radii[1]).toEqual({left: 0, right: 0});
                expect(radii[2].left).toBe(0);
                await expect.poll(() => group.locator('label').last().evaluate(label => getComputedStyle(label, '::before').opacity)).toBe('1');
            }

            await page.locator('#before').focus();
            await page.keyboard.press('Tab');
            await expect(card).toBeFocused();
            await page.keyboard.press('ArrowLeft');
            await expect(list).toBeFocused();
            await expect(list).toBeChecked();
            await expect(group.locator('label').first()).toHaveCSS('outline-style', 'solid');
            await expect(group.locator('label').first()).toHaveCSS('outline-width', '2px');
            expect(await submittedValue(page)).toEqual(['list']);
            await page.keyboard.press('Space');
            await expect(list).toBeChecked();
            await page.screenshot({path: testInfo.outputPath(`${variant}-${theme}.png`)});
            await page.keyboard.press('Tab');
            await expect(page.locator('#reset')).toBeFocused();
            await page.keyboard.press('Shift+Tab');
            await expect(list).toBeFocused();

            const clicksBefore = Number(await page.locator('#host').getAttribute('data-clicks') ?? 0);
            const changesBefore = Number(await page.locator('#host').getAttribute('data-changes') ?? 0);
            await group.getByText('卡片').click();
            await expect(page.locator('#host')).toHaveAttribute('data-clicks', String(clicksBefore + 1));
            await expect(page.locator('#host')).toHaveAttribute('data-changes', String(changesBefore + 1));
            await group.getByText('列表').click();
            const changes = await page.locator('#host').getAttribute('data-changes');
            await page.locator('#reset').click();
            await expect(card).toBeChecked();
            expect(await submittedValue(page)).toEqual(['card']);
            await expect(page.locator('#host')).toHaveAttribute('data-changes', changes!);

            await page.locator('#fields').evaluate((fieldset) => {
                (fieldset as HTMLFieldSetElement).disabled = true;
            });
            await expect(list).toBeDisabled();
            await expect(group.locator('label').first()).toHaveCSS('cursor', 'not-allowed');
            expect(await submittedValue(page)).toEqual([]);
            await group.getByText('列表').click({force: true});
            await expect(card).toBeChecked();
            await expect(page.locator('#host')).toHaveAttribute('data-changes', changes!);
            expect(errors).toEqual([]);

            const results = await new AxeBuilder({page}).include('#radioForm').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
            expect(results.violations).toEqual([]);
        });
    }

    test(`${variant} controlled radios reject edits and retain the current value on reset`, async ({page}) => {
        await mountRadioComponent(page, variant, 'light', true);
        const list = page.getByRole('radio', {name: '列表'});
        const card = page.getByRole('radio', {name: '卡片'});
        await page.getByText('卡片', {exact: true}).click();
        await expect(list).toBeChecked();
        await expect(card).not.toBeChecked();
        await expect(page.locator('#host')).toHaveAttribute('data-changes', '1');
        await page.locator('#host').evaluate((host) => {
            (host as HTMLElement & {show: (value: string) => void}).show('card');
        });
        await expect(card).toBeChecked();
        await page.locator('#reset').click();
        await expect(card).toBeChecked();
        expect(await submittedValue(page)).toEqual(['card']);
        await expect(page.locator('#host')).toHaveAttribute('data-changes', '1');
    });
}

test('button group development examples wire native forms, controlled props and FormBuilder', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/btn-group/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page.locator('vite-error-overlay')).toHaveCount(0);
    await page.locator('#btnGroupRadio').getByText('列表').click();
    await page.locator('#btnGroupRadioForm').getByRole('button', {name: '读取表单'}).click();
    await expect(page.locator('#btnGroupRadioForm output')).toHaveText('{"view":"list","layout":"card"}');
    await page.locator('#btnGroupRadioForm').getByRole('button', {name: '重置'}).click();
    await expect(page.locator('#btnGroupRadio').getByRole('radio', {name: '卡片'})).toBeChecked();
    await page.locator('#btnSegmentedControlled').getByText('卡片').click();
    await expect(page.locator('#btnSegmentedControlledValue')).toHaveText('card');
    await page.locator('#btnGroupFormBuilder').getByText('列表').click();
    await expect(page.locator('#btnGroupFormBuilderValue')).toHaveText('{"view":"list"}');
    expect(errors).toEqual([]);
});
