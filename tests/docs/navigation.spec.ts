import {expect, test} from '@playwright/test';

for (const colorScheme of ['light', 'dark'] as const) {
    test(`ZUI-DOC-012: mobile navigation uses Chinese labels in ${colorScheme} mode`, async ({page}) => {
        await page.setViewportSize({width: 390, height: 844});
        await page.emulateMedia({colorScheme});
        await page.goto('lib/components/button/');
        await expect(page.getByRole('link', {name: '跳转到正文'})).toHaveAttribute('href', '#VPContent');

        const menu = page.locator('.VPLocalNav').getByRole('button', {name: '菜单', exact: true});
        await expect(menu).toBeVisible();
        await expect(menu).toHaveAttribute('aria-expanded', 'false');
        await menu.focus();
        await page.keyboard.press('Enter');
        await expect(menu).toHaveAttribute('aria-expanded', 'true');
        const sidebar = page.getByRole('navigation', {name: '侧边导航'});
        await expect(sidebar).toBeVisible();
        await expect(sidebar.getByRole('button', {name: '展开或收起分组'}).first()).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(menu).toHaveAttribute('aria-expanded', 'false');

        const mainMenu = page.getByRole('button', {name: '主导航', exact: true});
        await expect(mainMenu).toHaveAttribute('aria-expanded', 'false');
        await mainMenu.focus();
        await page.keyboard.press('Enter');
        await expect(mainMenu).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#VPNavScreen')).toBeVisible();
        const appearance = page.locator('#VPNavScreen').getByRole('switch');
        await expect(appearance).toHaveAccessibleName(colorScheme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
        await appearance.click();
        await expect(appearance).toHaveAccessibleName(colorScheme === 'dark' ? '切换到深色模式' : '切换到浅色模式');
        await mainMenu.focus();
        await page.keyboard.press('Space');
        await expect(mainMenu).toHaveAttribute('aria-expanded', 'false');
        await expect(page.locator('#VPNavScreen')).toBeHidden();

        await page.getByRole('button', {name: '本页目录', exact: true}).click();
        const topLink = page.getByRole('link', {name: '返回顶部', exact: true});
        await expect(topLink).toBeVisible();
        await topLink.click();
        await expect(topLink).toBeHidden();
    });
}

test('ZUI-DOC-012: tablet navigation and appearance controls use Chinese accessible names', async ({page}) => {
    await page.setViewportSize({width: 900, height: 900});
    await page.goto('lib/components/button/');
    await expect(page.getByRole('navigation', {name: '主导航'})).toBeVisible();
    const extra = page.getByRole('button', {name: '更多导航选项'});
    await extra.focus();
    await page.keyboard.press('Enter');
    await expect(extra).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.VPNavBarExtra').getByRole('switch')).toHaveAccessibleName('切换到深色模式');
    await page.keyboard.press('Enter');
    await expect(extra).toHaveAttribute('aria-expanded', 'false');
});
