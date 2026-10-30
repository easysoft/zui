import {expect, test} from '@playwright/test';

test.use({launchOptions: {ignoreDefaultArgs: ['--hide-scrollbars']}});

for (const colorScheme of ['light', 'dark'] as const) {
    test(`scrollbar: documentation preserves ZUI styles in ${colorScheme} mode`, async ({page}, testInfo) => {
        await page.emulateMedia({colorScheme});
        await page.goto('lib/components/scrollbar/');
        await expect(page.locator('h1')).toContainText('滚动条');

        for (const width of [1280, 390]) {
            await page.setViewportSize({width, height: 900});
            const scrollers = page.locator('html, .VPSidebar, .vp-code, .example .overflow-scroll');
            for (const scroller of await scrollers.all()) {
                // Non-auto standard properties suppress ZUI's WebKit pseudo-element styling.
                await expect(scroller).toHaveCSS('scrollbar-color', 'auto');
                await expect(scroller).toHaveCSS('scrollbar-width', 'auto');
            }

            for (const scroller of await page.locator('.example .overflow-scroll').all()) {
                const sizes = await scroller.evaluate((element: HTMLElement) => {
                    const size = parseFloat(getComputedStyle(element).getPropertyValue('--scrollbar-size'));
                    return {
                        expected: element.classList.contains('scrollbar-thin') ? size / 2 : size,
                        horizontal: element.offsetHeight - element.clientHeight,
                        vertical: element.offsetWidth - element.clientWidth,
                        radius: getComputedStyle(element, '::-webkit-scrollbar-thumb').borderRadius,
                        trackRadius: getComputedStyle(element, '::-webkit-scrollbar-track').borderRadius,
                    };
                });
                expect(sizes.vertical).toBe(sizes.expected);
                expect(sizes.horizontal).toBe(sizes.expected);
                expect(sizes.trackRadius).toBe(sizes.radius);
            }
            await page.locator('.example .scrollbar-thin').scrollIntoViewIfNeeded();
            await page.screenshot({path: testInfo.outputPath(`scrollbars-${width}.png`)});
        }

        const thin = page.locator('.example .scrollbar-thin');
        await thin.hover();
        await page.mouse.wheel(0, 120);
        await expect.poll(() => thin.evaluate(element => element.scrollTop)).toBeGreaterThan(0);

        const hover = page.locator('.example .scrollbar-hover');
        await hover.scrollIntoViewIfNeeded();
        await page.mouse.move(0, 0);
        await expect.poll(() => hover.evaluate(element => getComputedStyle(element, '::-webkit-scrollbar-thumb').visibility)).toBe('hidden');
        await hover.hover();
        await expect.poll(() => hover.evaluate(element => getComputedStyle(element, '::-webkit-scrollbar-thumb').visibility)).toBe('visible');

        await page.emulateMedia({forcedColors: 'active'});
        await expect(page.locator('html')).toHaveCSS('scrollbar-color', 'auto');
    });
}

test('scrollbar: theme panels, exports and local search inherit ZUI styles', async ({page}) => {
    await page.goto('guide/config/theme.html');
    for (const selector of ['.theme-preset-grid', '.theme-export textarea']) {
        await expect(page.locator(selector)).toHaveCSS('scrollbar-color', 'auto');
    }
    await page.getByRole('button', {name: '主题', exact: true}).click();
    await expect(page.locator('.nav-theme-panel')).toHaveCSS('scrollbar-color', 'auto');
    await page.keyboard.press('Escape');
    await page.getByRole('button', {name: '搜索文档'}).click();
    await page.getByRole('searchbox').fill('滚动');
    await expect(page.locator('.VPLocalSearchBox .results')).toBeVisible();
    await expect(page.locator('.VPLocalSearchBox .results')).toHaveCSS('scrollbar-color', 'auto');
});
