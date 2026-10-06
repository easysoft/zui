import {expect, test} from '@playwright/test';

test('ZUI-DOC-009: component navigation starts with task groups and exposes the current button', async ({page}) => {
    await page.setViewportSize({width: 1280, height: 720});
    await page.goto('lib/components/button/');
    const sidebar = page.locator('.VPSidebar');
    const groups = sidebar.locator('.VPSidebarItem.level-0.collapsible');
    await expect(groups.locator(':scope > .item > .text')).toHaveText([
        '基础控件', '表单与输入', '导航与菜单', '数据展示', '布局与交互', '反馈与浮层',
    ]);
    await expect(sidebar.locator('.VPSidebarItem.level-0')).toHaveCount(7);
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
    await page.goto('lib/components/tooltip/');
    const sidebar = page.locator('.VPSidebar');
    const groups = sidebar.locator('.VPSidebarItem.level-0.collapsible');
    const controls = groups.filter({has: page.getByRole('heading', {name: '基础控件', exact: true})});
    const forms = groups.filter({has: page.getByRole('heading', {name: '表单与输入', exact: true})});
    const feedback = groups.filter({has: page.getByRole('heading', {name: '反馈与浮层', exact: true})});
    await expect(controls).toHaveClass(/collapsed/);
    await expect(feedback).not.toHaveClass(/collapsed/);
    await expect(feedback.getByRole('link', {name: '提示消息', exact: true})).toBeInViewport({ratio: 1});
    await forms.getByRole('heading', {name: '表单与输入', exact: true}).click();
    await expect(forms).not.toHaveClass(/collapsed/);

    await page.locator('.VPNavBar').getByRole('link', {name: '组件', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('组件总览');
    await page.getByRole('main').getByRole('link', {name: '按钮', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('按钮');
    await expect(controls).not.toHaveClass(/collapsed/);
    await expect(forms).not.toHaveClass(/collapsed/);
    await expect(feedback).not.toHaveClass(/collapsed/);
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
    await sidebar.getByRole('heading', {name: '组件使用', exact: true}).click();
    await sidebar.getByRole('heading', {name: '全局配置', exact: true}).click();
    await sidebar.getByRole('heading', {name: '定制与扩展', exact: true}).click();
    expect(await sidebar.evaluate(element => element.scrollHeight - element.clientHeight)).toBeGreaterThan(0);
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
    await expect(descriptions).toHaveCount(70);
    await expect(groups.locator(':scope > ul > li > a[href]')).toHaveCount(70);
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
    expect(new Set(entries.map(entry => entry.url)).size).toBe(70);
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

for (const [route, name] of [
    ['lib/basic/core/component.html', '组件实例与生命周期'],
    ['lib/basic/core/use-zui-in-react.html', '在 React 中使用 ZUI 组件'],
    ['lib/components/json-ui/', 'JSON UI'],
    ['lib/helpers/helpers/string-helper.html', '字符串辅助方法'],
] as const) {
    test(`ZUI-DOC-009: ${route} retains its URL under documentation navigation`, async ({page, baseURL}) => {
        const response = await page.goto(route);
        expect(response?.ok()).toBe(true);
        await expect(page).toHaveURL(new URL(route, baseURL).href);
        await expect(page.locator('.VPContent .NotFound')).toHaveCount(0);
        await expect(page.locator('h1')).not.toBeEmpty();
        const navbar = page.locator('.VPNavBar');
        await expect(navbar.getByRole('link', {name: '文档', exact: true})).toHaveClass(/\bactive\b/);
        await expect(navbar.getByRole('link', {name: '组件', exact: true})).not.toHaveClass(/\bactive\b/);
        const sidebar = page.locator('.VPSidebar');
        await expect(sidebar.locator('.VPSidebarItem.level-0.collapsible > .item > .text')).toHaveText([
            '开始', '全局配置', '组件使用', '框架集成', '定制与扩展', 'JS 工具', '关于',
        ]);
        await expect(sidebar.locator('.VPSidebarItem.is-active').getByRole('link', {name, exact: true})).toBeVisible();
        await expect(sidebar.getByRole('link', {name: '组件基类', exact: true, includeHidden: true})).toHaveCount(0);

        await navbar.getByRole('link', {name: '组件', exact: true}).click();
        await expect(page.locator('h1')).toHaveText('组件总览');
        await expect(navbar.getByRole('link', {name: '组件', exact: true})).toHaveClass(/\bactive\b/);
        await expect(navbar.getByRole('link', {name: '文档', exact: true})).not.toHaveClass(/\bactive\b/);
        await expect(sidebar.locator('.VPSidebarItem.level-0.collapsible')).toHaveCount(6);
        await expect(sidebar.getByRole('heading', {name: 'JS 工具', exact: true})).toHaveCount(0);
    });
}

test('ZUI-DOC-009: Sortable keeps its legacy URL in the interaction component group and overview', async ({page}) => {
    const response = await page.goto('lib/helpers/sortable/');
    expect(response?.ok()).toBe(true);
    await expect(page.locator('h1')).toHaveText('拖拽排序');
    const navbar = page.locator('.VPNavBar');
    await expect(navbar.getByRole('link', {name: '组件', exact: true})).toHaveClass(/\bactive\b/);
    await expect(navbar.getByRole('link', {name: '文档', exact: true})).not.toHaveClass(/\bactive\b/);
    const interaction = page.locator('.VPSidebar .VPSidebarItem.level-0.collapsible')
        .filter({has: page.getByRole('heading', {name: '布局与交互', exact: true})});
    await expect(interaction).not.toHaveClass(/collapsed/);
    await expect(interaction.getByRole('link', {name: '拖拽排序', exact: true})).toBeInViewport({ratio: 1});

    await navbar.getByRole('link', {name: '组件', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('组件总览');
    const group = page.locator('main .component-overview-group')
        .filter({has: page.getByRole('heading', {name: '布局与交互', level: 2})});
    const sortable = group.getByRole('link', {name: '拖拽排序', exact: true});
    await expect(sortable).toHaveCount(1);
    await expect(sortable).toHaveAttribute('href', /\/lib\/helpers\/sortable\/(?:index\.html)?$/);
    await sortable.click();
    await expect(page.locator('h1')).toHaveText('拖拽排序');
    await expect(page).toHaveURL(/\/lib\/helpers\/sortable\/(?:index\.html)?$/);
    await expect(navbar.getByRole('link', {name: '组件', exact: true})).toHaveClass(/\bactive\b/);
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
        await expect(page.getByRole('switch')).toHaveCount(0);
        const theme = page.locator('.nav-theme').getByRole('button', {name: '主题', exact: true});
        await expect(theme).toHaveCount(1);
        await theme.click();
        await expect(mainMenu).toHaveAttribute('aria-expanded', 'false');
        const settings = page.getByRole('region', {name: '主题设置', exact: true});
        await expect(settings).toBeInViewport({ratio: 1});
        const box = await settings.boundingBox();
        expect(box!.x).toBeGreaterThanOrEqual(0);
        expect(box!.x + box!.width).toBeLessThanOrEqual(390);
        const appearance = settings.getByRole('button', {name: colorScheme === 'dark' ? '浅色' : '深色', exact: true});
        await appearance.click();
        await expect(appearance).toHaveAttribute('aria-pressed', 'true');
        await page.keyboard.press('Escape');
        await expect(settings).toBeHidden();
        await expect(theme).toBeFocused();
        await mainMenu.focus();
        await page.keyboard.press('Space');
        await expect(mainMenu).toHaveAttribute('aria-expanded', 'true');
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

test('ZUI-DOC-012: tablet navigation folds external links before theme and GitHub controls', async ({page}) => {
    await page.setViewportSize({width: 900, height: 900});
    await page.goto('lib/components/button/');
    await expect(page.getByRole('navigation', {name: '主导航'})).toBeVisible();
    const navbar = page.locator('.VPNavBar');
    await expect(navbar.getByRole('link', {name: /^github$/i})).toBeVisible();
    await expect(navbar.getByRole('switch')).toHaveCount(0);
    await expect(navbar.locator('.nav-theme').getByRole('button', {name: '主题', exact: true})).toBeVisible();
    await expect(navbar.getByRole('link', {name: 'ZUI1', exact: true})).toBeHidden();
    await expect(navbar.getByRole('link', {name: 'ZIN', exact: true})).toBeHidden();
    const extra = page.getByRole('button', {name: '更多导航选项'});
    await extra.focus();
    await page.keyboard.press('Enter');
    await expect(extra).toHaveAttribute('aria-expanded', 'true');
    await expect(navbar.getByRole('link', {name: 'ZUI1', exact: true})).toHaveAttribute('href', 'https://openzui.com/1/');
    await expect(navbar.getByRole('link', {name: 'ZIN', exact: true})).toHaveAttribute('href', 'https://openzui.com/zin/');
    await expect(navbar.getByRole('link', {name: 'ZUI1', exact: true})).toBeVisible();
    await expect(navbar.getByRole('link', {name: 'ZIN', exact: true})).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(extra).toHaveAttribute('aria-expanded', 'false');
});
