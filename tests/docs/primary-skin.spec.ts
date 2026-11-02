import {expect, test} from '@playwright/test';

import type {Locator} from '@playwright/test';

async function expectStandardPrimary(element: Locator) {
    await expect(element).toBeVisible();
    await expect(element).toHaveCSS('background-color', 'rgb(59, 130, 246)');
    await expect(element).toHaveCSS('color', 'rgb(255, 255, 255)');
}

test('solid skins fall back to legacy theme foregrounds when on-color tokens are absent', async ({page}) => {
    await page.goto('lib/components/button/');
    await page.evaluate(() => {
        const tokens = ['primary', 'secondary', 'success', 'warning', 'danger', 'important', 'special',
            ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(shade => `gray-${shade}`)];
        for (const token of tokens) document.documentElement.style.setProperty(`--color-on-${token}-rgb`, 'initial');
        document.documentElement.style.setProperty('--color-fore-in-dark-rgb', '250, 250, 250');
        document.documentElement.style.setProperty('--color-fore-rgb', '30, 41, 59');
    });
    for (const skin of ['primary', 'secondary', 'success', 'warning', 'danger', 'important', 'special', 'gray-400', 'gray-600']) {
        await expect(page.locator(`.example .btn.capitalize.${skin}`)).toHaveCSS('color', 'rgb(250, 250, 250)');
    }
    for (const skin of ['gray-50', 'gray-100', 'gray-200', 'gray-300']) {
        await expect(page.locator(`.example .btn.capitalize.${skin}`)).toHaveCSS('color', 'rgb(30, 41, 59)');
    }
});

for (const mode of ['light', 'dark'] as const) {
    for (const width of [390, 1453]) {
        test(`primary skins keep the standard appearance in ${mode} at ${width}px`, async ({page}) => {
            await page.setViewportSize({width, height: 900});
            await page.emulateMedia({colorScheme: mode, reducedMotion: 'reduce'});
            await page.goto('./');
            const message = page.locator('.home-demo-result > .btn.primary');
            await expectStandardPrimary(message);
            await message.focus();
            await page.keyboard.press('Enter');
            await expect(page.locator('.messager').filter({hasText: '你好，ZUI！'})).toBeVisible();

            const themes = page.getByRole('group', {name: '换个主题试试'});
            await themes.getByRole('button', {name: '应用森林绿主题'}).click();
            await expect(message).toHaveCSS('background-color', 'rgb(53, 100, 75)');
            await themes.getByRole('button', {name: '应用ZUI 蓝主题'}).click();
            await expectStandardPrimary(message);
            await page.reload();
            await expectStandardPrimary(message);

            await page.getByRole('tab', {name: '样式组合', exact: true}).click();
            const result = page.locator('.home-playground-result');
            await expectStandardPrimary(result.locator('.btn.primary'));
            await expectStandardPrimary(result.locator('.avatar.primary'));

            await page.goto('guide/start/');
            await expectStandardPrimary(page.getByRole('link', {name: '下载本站构建', exact: true}));
            await page.goto('utilities/skin/utilities/solid.html');
            await expectStandardPrimary(page.getByRole('button', {name: 'Primary Button', exact: true}));
        });
    }
}
