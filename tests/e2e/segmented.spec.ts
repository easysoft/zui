import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';
import type {Page} from '@playwright/test';
import type {SegmentedOptions} from '@zui/segmented';

type BrowserOptions = Pick<SegmentedOptions, 'animation' | 'block' | 'vertical' | 'shape' | 'size' | 'value'> & {
    items?: (string | number | {value: string | number; text: string; style?: Record<string, string>})[];
    attrs?: Record<string, string>;
};

async function openPage(page: Page) {
    await page.goto('/segmented/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page).toHaveTitle(/ZUI/);
    await expect(page.locator('vite-error-overlay')).toHaveCount(0);
}

async function mount(page: Page, variant: 'html' | 'vanilla' | 'preact', theme: string, extraOptions: BrowserOptions = {}) {
    await openPage(page);
    const markup = await page.locator('#segmentedNative').evaluate(element => element.outerHTML);
    await page.evaluate(async ({variant, theme, markup, corePath, componentPath, vanillaPath, extraOptions}) => {
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
            ...extraOptions,
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
    }, {variant, theme, markup, extraOptions, corePath: '/lib/core/src/main.ts', componentPath: '/lib/segmented/src/main-react.ts', vanillaPath: '/lib/segmented/src/main.ts'});
}

async function expectThumbAligned(page: Page) {
    await expect.poll(() => page.locator('#host .segmented').evaluate((root) => {
        const thumb = root.querySelector<HTMLElement>('.segmented-thumb')!;
        const label = root.querySelector('.segmented-input:checked + .segmented-label')!;
        const actual = thumb.getBoundingClientRect();
        const expected = label.getBoundingClientRect();
        return Math.max(...(['left', 'top', 'width', 'height'] as const).map(key => Math.abs(actual[key] - expected[key])));
    })).toBeLessThan(1);
}

async function updateAnimation(page: Page, options: BrowserOptions) {
    await page.evaluate(async ({path, options}) => {
        const {Segmented} = await import(path) as typeof import('@zui/segmented');
        Segmented.get('#host')!.render(options);
    }, {path: '/lib/segmented/src/main.ts', options});
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

for (const theme of ['light', 'dark']) {
    for (const variant of ['vanilla', 'preact'] as const) {
        test(`${variant} animated segmented slides continuously without changing layout in ${theme}`, async ({page}) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            await page.emulateMedia({reducedMotion: 'no-preference'});
            await mount(page, variant, theme, {animation: true, items: ['日', '工作周', '整个月']});
            const group = page.locator('#host .segmented');
            const thumb = group.locator('.segmented-thumb');
            await expect(thumb).toBeVisible();
            await expectThumbAligned(page);
            await expect(thumb).not.toHaveClass(/is-animated/);
            const positions = await group.locator('.segmented-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().toJSON()));
            await group.getByText('整个月', {exact: true}).click();
            await expectThumbAligned(page);
            await expect(thumb).toHaveCSS('pointer-events', 'none');
            await expect(thumb).toHaveCSS('transition-duration', '0.2s, 0.2s, 0.2s');
            const canvas = await thumb.evaluate(element => getComputedStyle(element).getPropertyValue('--color-canvas-rgb').split(',').map(value => value.trim()).join(', '));
            await expect(thumb).toHaveCSS('background-color', `rgb(${canvas})`);
            expect(await group.locator('.segmented-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().toJSON()))).toEqual(positions);
            await group.getByRole('radio', {name: '整个月'}).focus();
            await page.keyboard.press('ArrowLeft');
            await expect(group.getByRole('radio', {name: '工作周'})).toBeChecked();
            await expect(group.locator('.segmented-input:focus + .segmented-label')).toHaveCSS('outline-width', '2px');
            await expectThumbAligned(page);

            // Sample the browser's real transition at its midpoint, then retarget it.
            const motion = await group.evaluate(async (root) => {
                const frame = () => new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
                const thumb = root.querySelector<HTMLElement>('.segmented-thumb')!;
                const inputs = root.querySelectorAll<HTMLInputElement>('input');
                const start = thumb.getBoundingClientRect().left;
                const target = inputs[2].nextElementSibling!.getBoundingClientRect().left;
                inputs[2].click();
                await frame();
                const animations = thumb.getAnimations();
                for (const animation of animations) {
                    animation.pause();
                    animation.currentTime = 100;
                }
                const midpoint = thumb.getBoundingClientRect().left;
                inputs[0].click();
                await frame();
                const nextAnimations = thumb.getAnimations();
                for (const animation of nextAnimations) {
                    animation.pause();
                    animation.currentTime = 0;
                }
                const retargeted = thumb.getBoundingClientRect().left;
                for (const animation of nextAnimations) animation.finish();
                return {start, target, midpoint, retargeted, count: animations.length};
            });
            expect(motion.count).toBeGreaterThan(0);
            expect(motion.midpoint).toBeGreaterThan(motion.start + 1);
            expect(motion.midpoint).toBeLessThan(motion.target - 1);
            expect(Math.abs(motion.retargeted - motion.midpoint)).toBeLessThan(1);
            await expect(group.getByRole('radio', {name: '日', exact: true})).toBeChecked();
            await expectThumbAligned(page);
            await group.getByText('整个月', {exact: true}).click();
            await expectThumbAligned(page);
            expect(await page.locator('#form').evaluate(form => new FormData(form as HTMLFormElement).get('view'))).toBe('整个月');
            await page.locator('#reset').click();
            await expectThumbAligned(page);
            await expect(group.getByRole('radio', {name: '日', exact: true})).toBeChecked();
            await expect(page.locator('#host')).toHaveAttribute('data-changes', '5');
            expect(errors).toEqual([]);
        });
    }
}

test('animated segmented follows layout, content, direction, media and runtime options', async ({page}, testInfo) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await mount(page, 'vanilla', 'light', {animation: true, items: ['日', '工作周', '整个月']});
    const group = page.locator('#host .segmented');
    const thumb = group.locator('.segmented-thumb');
    await expectThumbAligned(page);
    await group.getByText('整个月', {exact: true}).click();
    await expectThumbAligned(page);
    await group.locator('.segmented-text').first().evaluate((element) => {
        element.textContent = '前一个选项动态变长';
    });
    await expectThumbAligned(page);
    await expect(thumb).not.toHaveClass(/is-animated/);
    await group.locator('.segmented-text').first().evaluate((element) => {
        element.textContent = '日';
    });
    await expectThumbAligned(page);
    await updateAnimation(page, {block: true, shape: 'round', size: 'lg'});
    await expectThumbAligned(page);
    await expect(thumb).toHaveCSS('border-radius', '9999px');
    await page.setViewportSize({width: 375, height: 900});
    await expectThumbAligned(page);
    await expect(thumb).not.toHaveClass(/is-animated/);
    const widths = await group.locator('.segmented-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().width));
    expect(widths[0]).toBeCloseTo(widths[2], 1);
    await updateAnimation(page, {attrs: {'aria-label': '视图', dir: 'rtl'}});
    await expectThumbAligned(page);
    const lefts = await group.locator('.segmented-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().left));
    expect(lefts[0]).toBeGreaterThan(lefts[2]);
    await group.getByText('日', {exact: true}).click();
    await expectThumbAligned(page);

    await updateAnimation(page, {vertical: true, items: [
        {value: '日', text: '日', style: {minHeight: '40px'}},
        {value: '工作周', text: '工作周', style: {minHeight: '70px'}},
        {value: '整个月', text: '整个月', style: {minHeight: '50px'}},
    ]});
    await expectThumbAligned(page);
    await group.getByText('工作周', {exact: true}).click();
    await expectThumbAligned(page);
    await expect(thumb).toHaveCSS('height', '70px');
    await page.locator('#host').evaluate((element) => {
        element.style.transform = 'scale(0.8)';
    });
    await group.getByText('日', {exact: true}).click();
    await expectThumbAligned(page);
    await page.locator('#host').evaluate((element) => {
        element.style.transform = '';
    });
    await page.emulateMedia({reducedMotion: 'reduce'});
    await group.getByText('工作周', {exact: true}).click();
    await expectThumbAligned(page);
    await expect(thumb).toHaveCSS('transition-duration', '0s');
    await expect(group.locator('.segmented-label').first()).toHaveCSS('transition-property', 'none');
    await page.locator('#fields').evaluate((element) => {
        (element as HTMLFieldSetElement).disabled = true;
    });
    const disabledOpacity = await thumb.evaluate(element => String(Number(getComputedStyle(element).getPropertyValue('--opacity-disabled'))));
    await expect(thumb).toHaveCSS('opacity', disabledOpacity);
    await page.locator('#fields').evaluate((element) => {
        (element as HTMLFieldSetElement).disabled = false;
    });
    await page.screenshot({path: testInfo.outputPath('segmented-animation-mobile.png')});
    await page.emulateMedia({forcedColors: 'active'});
    await expect(thumb).toBeHidden();
    await expect(group.locator('.segmented-input:checked + .segmented-label')).toHaveCSS('outline-width', '2px');
    await page.emulateMedia({forcedColors: 'none'});
    await updateAnimation(page, {animation: false});
    await expect(thumb).toHaveCount(0);
    await updateAnimation(page, {animation: true});
    await expectThumbAligned(page);
    await expect(thumb).not.toHaveClass(/is-animated/);
    await updateAnimation(page, {items: []});
    await expect(thumb).toBeHidden();
    await updateAnimation(page, {items: ['日', '工作周', '整个月']});
    await expectThumbAligned(page);
    expect((await new AxeBuilder({page}).include('#form').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()).violations).toEqual([]);
});
