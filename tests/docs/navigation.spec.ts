import {expect, test} from '@playwright/test';

test('ZUI-DOC-009: component navigation starts with task groups and exposes the current button', async ({page}) => {
    await page.setViewportSize({width: 1280, height: 720});
    await page.goto('lib/components/button/');
    const sidebar = page.locator('.VPSidebar');
    const groups = sidebar.locator('.VPSidebarItem.level-0.collapsible');
    await expect(groups.locator(':scope > .item > .text')).toHaveText([
        '基础控件', '表单与输入', '导航与菜单', '数据展示', '布局与交互', '反馈与浮层',
        '使用指南', '进阶扩展', 'JS 工具',
    ]);
    await expect(groups.and(page.locator(':not(.collapsed)'))).toHaveCount(1);
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
    const groups = sidebar.locator('.VPSidebarItem.level-0.collapsible');
    const controls = groups.filter({has: page.getByRole('heading', {name: '基础控件', exact: true})});
    const forms = groups.filter({has: page.getByRole('heading', {name: '表单与输入', exact: true})});
    const helpers = groups.filter({has: page.getByRole('heading', {name: 'JS 工具', exact: true})});
    await expect(controls).toHaveClass(/collapsed/);
    await expect(helpers).not.toHaveClass(/collapsed/);
    await expect(helpers.getByRole('link', {name: '字符串辅助方法', exact: true})).toBeInViewport({ratio: 1});
    await forms.getByRole('heading', {name: '表单与输入', exact: true}).click();
    await expect(forms).not.toHaveClass(/collapsed/);

    await page.locator('.VPNavBar').getByRole('link', {name: '组件', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('组件总览');
    await page.getByRole('main').getByRole('link', {name: '按钮', exact: true}).click();
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

test('ZUI-DOC-009: component overview provides grouped document links with purpose descriptions', async ({page}) => {
    await page.goto('lib/components/button/');
    const overviewLink = page.locator('.VPSidebar').getByRole('link', {name: '组件总览', exact: true});
    await expect(overviewLink).toHaveCount(1);
    await expect(overviewLink).toHaveAttribute('href', /\/lib\/components\/(?:index\.html)?$/);
    await overviewLink.click();
    await expect(page.locator('h1')).toHaveText('组件总览');
    await expect(page).toHaveURL(/\/lib\/components\/(?:index\.html)?$/);

    const groups = page.locator('main .component-overview-group');
    await expect(groups).toHaveCount(6);
    await expect(groups.locator('h2')).toHaveText([
        '基础控件', '表单与输入', '导航与菜单', '数据展示', '布局与交互', '反馈与浮层',
    ]);
    const descriptions = groups.locator('.component-overview-description');
    await expect(descriptions).toHaveCount(69);
    await expect(groups.locator(':scope > ul > li > a[href]')).toHaveCount(69);
    const entries = await descriptions.evaluateAll(elements => elements.map((element) => {
        const links = element.parentElement!.querySelectorAll(':scope > a[href]');
        const link = links[0];
        return {
            description: element.textContent?.trim(),
            linkCount: links.length,
            name: link?.textContent?.trim(),
            url: link ? new URL(link.getAttribute('href')!, location.href).href : '',
        };
    }));
    expect(new Set(entries.map(entry => entry.url)).size).toBe(69);
    for (const entry of entries) {
        expect(entry.linkCount, entry.description).toBe(1);
        expect(entry.name, entry.url).toBeTruthy();
        expect(entry.description, entry.url).toBeTruthy();
        expect(entry.description, entry.url).not.toBe(entry.name);
        const url = new URL(entry.url);
        expect(url.origin).toBe(new URL(page.url()).origin);
        expect(url.pathname).toMatch(/\/lib\/.*(?:\/|\.html)$/);
    }
    await expect(groups.locator('.component-overview-preview')).toHaveCount(0);

    const searchIndex = page.waitForResponse(response => response.url().includes('/@localSearchIndex'));
    await page.getByRole('button', {name: '搜索文档'}).click();
    await (await searchIndex).finished();
    await page.locator('#localsearch-input').fill('Schema 组件总览');
    const result = page.locator('.VPLocalSearchBox .result[href*="/lib/components/#"]')
        .filter({hasText: '组件总览'}).filter({hasText: '表单与输入'});
    await expect(result).toHaveCount(1);
    await expect(result).toBeVisible();
    await result.click();
    await expect(page.locator('.VPLocalSearchBox')).toBeHidden();
    await expect(page.locator('h1')).toHaveText('组件总览');
    await expect.poll(() => decodeURIComponent(new URL(page.url()).hash)).toBe('#表单与输入');
});

test('ZUI-DOC-009: mobile component overview keeps links readable and supports keyboard navigation', async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto('lib/components/');
    await expect(page.locator('h1')).toHaveText('组件总览');
    const groups = page.locator('main .component-overview-group');
    await expect(groups).toHaveCount(6);
    for (const group of await groups.all()) {
        const link = group.locator(':scope > ul > li > a[href]').first();
        await expect(link).toHaveAccessibleName(/\S/);
        await link.scrollIntoViewIfNeeded();
        await expect(link).toBeInViewport({ratio: 1});
        expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
    }

    const dtable = page.getByRole('main').getByRole('link', {name: '数据表格', exact: true});
    await dtable.focus();
    await dtable.press('Enter');
    await expect(page.locator('h1')).toHaveText('数据表格');
    await expect(page).toHaveURL(/\/lib\/components\/dtable\/(?:index\.html)?$/);
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
