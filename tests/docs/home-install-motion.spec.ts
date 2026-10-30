import {expect, test} from '@playwright/test';

for (const width of [390, 1440]) {
    test(`install switching keeps the page stable at ${width}px`, async ({page}, testInfo) => {
        await page.setViewportSize({width, height: 900});
        await page.emulateMedia({reducedMotion: 'no-preference'});
        await page.goto('./');
        const tabs = page.getByRole('tablist', {name: '接入方式'});
        await tabs.scrollIntoViewIfNeeded();
        const geometry = () => page.locator('.home-start').evaluate(element => ({
            height: element.getBoundingClientRect().height,
            resourcesTop: element.querySelector('.home-resources')!.getBoundingClientRect().top,
            scroll: window.scrollY,
        }));
        const initial = await geometry();
        for (const name of ['npm', 'CDN', '下载构建', 'npm']) {
            await tabs.getByRole('tab', {name, exact: true}).click();
            const panel = page.getByRole('tabpanel', {name, exact: true});
            await expect(page.getByRole('tabpanel')).toHaveCount(1);
            await expect(panel).toBeVisible();
            expect(await geometry()).toEqual(initial);
            await panel.evaluate(element => Promise.all(element.getAnimations().map(animation => animation.finished)));
            expect(await geometry()).toEqual(initial);
            expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
        }
        await page.screenshot({path: testInfo.outputPath(`install-${width}.png`)});

        const npm = tabs.getByRole('tab', {name: 'npm', exact: true});
        await npm.focus();
        await page.keyboard.press('Tab');
        await expect(page.getByRole('tabpanel', {name: 'npm'}).getByRole('button', {name: '复制npm 安装'})).toBeFocused();
        await page.keyboard.press('Shift+Tab');
        await expect(npm).toBeFocused();
        await page.keyboard.press('Home');
        await expect(tabs.getByRole('tab', {name: '下载构建'})).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(page.getByRole('tabpanel', {name: '下载构建'}).getByRole('button', {name: '复制下载构建'})).toBeFocused();
    });
}

test('install panels adapt after resizing and respect reduced motion during rapid switching', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const tabs = page.getByRole('tablist', {name: '接入方式'});
    const download = tabs.getByRole('tab', {name: '下载构建'});
    await download.focus();
    await page.keyboard.press('End');
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('tabpanel', {name: 'CDN'})).toBeVisible();
    await expect(page.getByRole('tabpanel')).toHaveCount(1);
    await page.emulateMedia({reducedMotion: 'reduce'});
    for (const width of [390, 1440]) {
        await page.setViewportSize({width, height: 900});
        const before = await page.locator('.home-start').boundingBox();
        await tabs.getByRole('tab', {name: 'npm', exact: true}).click();
        const panel = page.getByRole('tabpanel', {name: 'npm'});
        await expect(panel).toHaveCSS('opacity', '1');
        expect(await panel.evaluate(element => element.getAnimations().length)).toBe(0);
        expect((await page.locator('.home-start').boundingBox())!.height).toBe(before!.height);
        await download.click();
        expect((await page.locator('.home-start').boundingBox())!.height).toBe(before!.height);
    }
});
