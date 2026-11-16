import {expect, test} from '@playwright/test';

for (const theme of ['light', 'dark']) {
    test(`segmented buttons keep HTML and Preact layout and keyboard feedback in ${theme}`, async ({page}, testInfo) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto('/btn-group/');
        await page.locator('#libPage.is-loaded').waitFor();
        await page.evaluate(async ({corePath, componentPath, theme}) => {
            const [{h, render}, {BtnGroup, BtnSegmented}] = await Promise.all([
                import(corePath) as Promise<typeof import('@zui/core')>,
                import(componentPath) as Promise<typeof import('@zui/btn-group/react')>,
            ]);
            document.documentElement.classList.toggle('dark', theme === 'dark');
            document.body.className = '';
            document.body.innerHTML = `
                <main class="p-4">
                    <h1>Segmented buttons</h1>
                    <div id="static" class="btn-segmented" role="group" aria-label="Static view">
                        <button type="button" class="btn" aria-pressed="false">列表</button>
                        <button type="button" class="btn active" aria-pressed="true">卡片</button>
                        <button type="button" class="btn" aria-pressed="false">看板</button>
                        <button type="button" class="btn" aria-pressed="false" disabled>禁用</button>
                    </div>
                    <div id="preact" class="mt-4"></div>
                    <div id="baseline" class="mt-4"></div>
                </main>
            `;
            const host = document.querySelector('#preact')!;
            const labels = ['列表', '卡片', '看板', '禁用'];
            const items = (selected: number) => labels.map((text, index) => ({
                text,
                active: index === selected,
                disabled: index === 3,
                attrs: {'aria-pressed': index === selected},
            }));
            function showView(selected: number) {
                render(h(BtnSegmented, {
                    tag: 'div',
                    attrs: {role: 'group', 'aria-label': 'Preact view'},
                    items: items(selected),
                    onClickItem: ({index}) => showView(index),
                }), host);
            }
            showView(1);
            render(h(BtnGroup, {items: items(1)}), document.querySelector('#baseline')!);
        }, {corePath: '/lib/core/src/main.ts', componentPath: '/lib/btn-group/src/main-react.ts', theme});

        const staticGroup = page.locator('#static');
        const preactGroup = page.locator('#preact .btn-segmented');
        await expect(page.locator('#baseline .btn-group')).toHaveCSS('display', 'flex');
        for (const width of [1280, 375]) {
            await page.setViewportSize({width, height: 900});
            const widths: number[] = [];
            for (const group of [staticGroup, preactGroup]) {
                await expect(group).toHaveCSS('display', 'inline-flex');
                const geometry = await group.evaluate((element) => {
                    const bounds = element.getBoundingClientRect();
                    return {
                        width: bounds.width,
                        right: bounds.right,
                        buttons: [...element.children].map((button) => {
                            const rect = button.getBoundingClientRect();
                            return {left: rect.left, right: rect.right, top: rect.top};
                        }),
                    };
                });
                widths.push(geometry.width);
                expect(geometry.right).toBeLessThanOrEqual(width);
                for (let index = 1; index < geometry.buttons.length; index++) {
                    expect(geometry.buttons[index].top).toBe(geometry.buttons[0].top);
                    expect(geometry.buttons[index].left - geometry.buttons[index - 1].right).toBeCloseTo(4, 1);
                }
            }
            expect(widths[0]).toBeCloseTo(widths[1], 1);
        }

        const canvas = await staticGroup.evaluate(element => `rgb(${getComputedStyle(element).getPropertyValue('--color-canvas-rgb').split(',').map(value => value.trim()).join(', ')})`);
        for (const group of [staticGroup, preactGroup]) {
            const selected = group.getByRole('button', {name: '卡片'});
            await group.getByRole('button', {name: '列表'}).focus();
            await page.keyboard.press('Tab');
            await expect(selected).toBeFocused();
            expect(await selected.evaluate(element => element.matches(':focus-visible'))).toBe(true);
            await expect.poll(() => selected.evaluate((element) => {
                const focus = getComputedStyle(element, '::before');
                return focus.display !== 'none' && Number(focus.opacity) > 0 && focus.boxShadow.includes('3px');
            })).toBe(true);
            await expect(selected).toHaveCSS('background-color', canvas);
            await expect(group.getByRole('button', {name: '禁用'})).toBeDisabled();
        }

        await page.keyboard.press('Tab');
        await expect(preactGroup.getByRole('button', {name: '看板'})).toBeFocused();
        await page.keyboard.press('Enter');
        await expect(preactGroup.getByRole('button', {name: '看板'})).toHaveAttribute('aria-pressed', 'true');
        await expect(preactGroup.getByRole('button', {name: '卡片'})).toHaveAttribute('aria-pressed', 'false');
        await expect(preactGroup.locator('.active')).toHaveCount(1);
        await page.screenshot({path: testInfo.outputPath(`segmented-${theme}.png`)});
        expect(errors).toEqual([]);
    });
}
