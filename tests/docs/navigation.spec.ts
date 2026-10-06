import {expect, test} from '@playwright/test';

test('ZUI-DOC-009: component navigation starts with task groups and exposes the current button', async ({page}) => {
    await page.setViewportSize({width: 1280, height: 720});
    await page.goto('lib/components/button/');
    const sidebar = page.locator('.VPSidebar');
    const groups = sidebar.locator('.VPSidebarItem.level-0');
    await expect(groups.locator(':scope > .item > .text')).toHaveText([
        '基础控件', '表单与输入', '导航与菜单', '数据展示', '布局与交互', '反馈与浮层',
        '使用指南', '进阶扩展', 'JS 工具',
    ]);
    await expect(sidebar.locator('.VPSidebarItem.level-0:not(.collapsed)')).toHaveCount(1);
    const controls = groups.filter({has: page.getByRole('heading', {name: '基础控件', exact: true})});
    await expect(controls).not.toHaveClass(/collapsed/);
    await expect(controls.getByRole('link', {name: '按钮', exact: true})).toBeInViewport({ratio: 1});
    await expect(controls.getByRole('link', {name: '字体图标', exact: true})).toHaveCount(1);
    await expect(controls.getByRole('link', {name: 'CSS 图标', exact: true})).toHaveCount(1);
    expect(await page.evaluate(() => window.scrollY)).toBe(0);

    await sidebar.getByRole('heading', {name: '数据展示', exact: true}).click();
    const data = groups.filter({has: page.getByRole('heading', {name: '数据展示', exact: true})});
    for (const [name, href] of [
        ['数据表格', /\/lib\/components\/dtable\/(?:index\.html)?$/],
        ['数据表格插件', /\/lib\/components\/dtable\/plugins\.html$/],
    ] as const) {
        await expect(sidebar.getByRole('link', {name, exact: true})).toHaveCount(1);
        await expect(data.getByRole('link', {name, exact: true})).toHaveAttribute('href', href);
    }
});

test('ZUI-DOC-009: client navigation opens the new current group and preserves manually opened groups', async ({page}) => {
    await page.setViewportSize({width: 1280, height: 720});
    await page.goto('lib/helpers/helpers/string-helper.html');
    const sidebar = page.locator('.VPSidebar');
    const groups = sidebar.locator('.VPSidebarItem.level-0');
    const controls = groups.filter({has: page.getByRole('heading', {name: '基础控件', exact: true})});
    const forms = groups.filter({has: page.getByRole('heading', {name: '表单与输入', exact: true})});
    const helpers = groups.filter({has: page.getByRole('heading', {name: 'JS 工具', exact: true})});
    await expect(controls).toHaveClass(/collapsed/);
    await expect(helpers).not.toHaveClass(/collapsed/);
    await expect(helpers.getByRole('link', {name: '字符串辅助方法', exact: true})).toBeInViewport({ratio: 1});
    await forms.getByRole('heading', {name: '表单与输入', exact: true}).click();
    await expect(forms).not.toHaveClass(/collapsed/);

    await page.locator('.VPNavBar').getByRole('link', {name: '组件', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('按钮');
    await expect(controls).not.toHaveClass(/collapsed/);
    await expect(forms).not.toHaveClass(/collapsed/);
    await expect(helpers).not.toHaveClass(/collapsed/);
    await expect(controls.getByRole('link', {name: '按钮', exact: true})).toBeInViewport({ratio: 1});
});

test('ZUI-DOC-009: mobile menu reveals the current helper without taking over manual or document scrolling', async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto('lib/helpers/helpers/string-helper.html');
    await page.evaluate(() => window.scrollTo(0, 600));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(600);
    const menu = page.locator('.VPLocalNav').getByRole('button', {name: '菜单', exact: true});
    const sidebar = page.locator('.VPSidebar');
    const current = sidebar.getByRole('link', {name: '字符串辅助方法', exact: true});
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await expect(current).toBeInViewport({ratio: 1});
    expect(await page.evaluate(() => window.scrollY)).toBe(600);

    // Make other groups available to browse, then deliberately scroll away from the current page.
    await sidebar.getByRole('heading', {name: '基础控件', exact: true}).click();
    await sidebar.getByRole('heading', {name: '表单与输入', exact: true}).click();
    await sidebar.hover();
    await page.mouse.wheel(0, -2000);
    await expect.poll(() => sidebar.evaluate(element => element.scrollTop)).toBe(0);
    // Cover delayed scroll handlers as well as the initial wheel event.
    await page.waitForTimeout(350);
    expect(await sidebar.evaluate(element => element.scrollTop)).toBe(0);
    await expect(current).not.toBeInViewport();
    expect(await page.evaluate(() => window.scrollY)).toBe(600);

    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
    // VitePress restores focus to the trigger on Escape; capture its resulting page position.
    const scrollBeforeReopen = await page.evaluate(() => window.scrollY);
    await menu.press('Enter');
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await expect(current).toBeInViewport({ratio: 1});
    expect(await page.evaluate(() => window.scrollY)).toBe(scrollBeforeReopen);
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
});

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
