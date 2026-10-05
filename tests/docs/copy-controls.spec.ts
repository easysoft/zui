import {expect, test} from '@playwright/test';

// The real clipboard is shared by browser contexts on the same machine.
test.describe.configure({mode: 'serial'});

const cases = [
    {path: 'guide/config/base/font.html', name: '复制 font-sans', value: 'font-sans', success: '已复制类名'},
    {path: 'guide/config/base/color.html', name: '复制颜色变量 --color-primary-50', value: '--color-primary-50', success: '已复制'},
    {path: 'utilities/effects/utilities/shadow.html', name: '复制类名 shadow-none', value: 'shadow-none', success: '已复制'},
];

for (const {width, colorScheme} of [{width: 1280, colorScheme: 'light'}, {width: 390, colorScheme: 'dark'}] as const) {
    for (const item of cases) {
        test(`ZUI-DOC-004: ${item.value} supports keyboard copying at ${width}px in ${colorScheme}`, async ({page, context}) => {
            await page.setViewportSize({width, height: 900});
            await page.emulateMedia({colorScheme});
            await context.grantPermissions(['clipboard-read', 'clipboard-write']);
            await page.goto(item.path);
            const button = page.getByRole('button', {name: item.name, exact: true}).first();
            await expect(button).toBeVisible();
            await button.focus();
            await page.keyboard.press('Tab');
            await page.keyboard.press('Shift+Tab');
            await expect(button).toBeFocused();
            await expect(button).toHaveCSS('outline-style', 'solid');
            await expect(button).toHaveCSS('outline-width', '2px');

            for (const key of ['Enter', 'Space']) {
                await page.evaluate(() => navigator.clipboard.writeText('before-copy'));
                await page.keyboard.press(key);
                await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(item.value);
                await expect(button.getByRole('status')).toHaveText(item.success);
                await expect(button.getByRole('status')).toHaveCSS('opacity', '1');
            }
        });
    }
}
