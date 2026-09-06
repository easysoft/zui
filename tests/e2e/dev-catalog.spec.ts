import {expect, test} from '@playwright/test';

test.describe('development library catalog', () => {
    test('searches by display name and package, filters types, and recovers from empty results', async ({page}) => {
        await page.goto('/');

        const searchBar = page.locator('.dev-header .dev-search-row .dev-search');
        const search = searchBar.getByRole('searchbox', {name: '搜索组件库'});
        const type = searchBar.getByRole('combobox', {name: '组件库类型'});
        const button = page.locator('#libResults a[data-lib="button"]');
        await expect(search).toBeVisible();
        await expect(type).toBeVisible();
        await expect(searchBar.getByRole('combobox', {name: '组件库来源'})).toBeVisible();
        await expect(button).toBeVisible();

        await search.fill('按钮');
        await expect(button).toBeVisible();
        await search.fill('@zui/button');
        await expect(page.locator('#libResults a[data-lib]')).toHaveCount(1);
        await expect(button).toHaveAttribute('href', '/button/');

        await type.selectOption('control');
        await expect(button).toBeVisible();
        await type.selectOption('js-helpers');
        await expect(page.getByText('没有找到匹配的组件库', {exact: true})).toBeVisible();
        await expect(page.locator('#libResults a[data-lib]')).toHaveCount(0);

        await page.locator('#resetFilters').click();
        await expect(search).toHaveValue('');
        await expect(button).toBeVisible();
        await expect(type).toHaveValue('');
        await expect(page.locator('#resultCount')).toHaveAttribute('aria-live', 'polite');
    });

    test('opens libraries from the keyboard and switches from a playground with recent history', async ({page}) => {
        test.setTimeout(90_000);
        await page.goto('/');
        await expect(page.locator('#libResults a[data-lib="button"]')).toBeVisible();

        await page.keyboard.press('ControlOrMeta+k');
        const search = page.getByRole('searchbox', {name: '搜索组件库'});
        await expect(search).toBeFocused();
        await search.fill('@zui/button');
        await search.press('ArrowDown');
        await expect(page.locator('#libResults a[data-lib="button"]')).toBeFocused();

        await search.focus();
        await search.press('Enter');
        await expect(page).toHaveURL(/\/button\/$/);
        await expect(page.locator('#libPage')).toHaveClass(/\bis-loaded\b/, {timeout: 45_000});

        await page.keyboard.press('ControlOrMeta+k');
        const dialog = page.locator('#catalogDialog');
        await expect(dialog).toBeVisible();
        await expect(dialog.locator('#catalog .dev-search-row')).toBeVisible();
        await expect(search).toBeFocused();
        await search.fill('@zui/avatar');
        await expect(dialog.locator('#libResults a[data-lib="avatar"]')).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(dialog).toBeHidden();
        await expect(page).toHaveURL(/\/button\/$/);

        await page.locator('#openCatalog').click();
        await expect(dialog).toBeVisible();
        await search.fill('anniu');
        await expect(dialog.locator('#libResults a[data-lib="button"]')).toBeVisible();
        await expect(dialog.locator('a[data-lib="button"] .dev-lib-title strong + .dev-current-tag')).toHaveText('当前');
        await search.fill('@zui/avatar');
        await search.press('Enter');
        await expect(page).toHaveURL(/\/avatar\/$/);
        await expect(page.locator('#libPage')).toHaveClass(/\bis-loaded\b/, {timeout: 45_000});
        await page.goto('/');
        const recent = page.locator('.dev-header .dev-search-entry #recentLibs');
        const recentButton = recent.locator('a[href="/button/"]');
        const themeToggle = page.getByRole('button', {name: '切换深色模式'});
        await expect(recentButton).toBeVisible();
        await expect(recent.locator('a[href="/avatar/"]')).toBeVisible();

        await search.focus();
        await expect(recent).toBeHidden();
        await themeToggle.focus();
        await expect(recentButton).toBeVisible();
        await search.fill('button');
        await themeToggle.focus();
        await expect(recent).toBeHidden();
        await search.fill('');
        await expect(recent).toBeHidden();
        await themeToggle.focus();
        await expect(recentButton).toBeVisible();
        await recentButton.click();
        await expect(page).toHaveURL(/\/button\/$/);
    });

    test('keeps scoped libraries distinct and searches metadata across library sources', async ({page}) => {
        await page.route('**/libs/', async (route) => {
            await route.fulfill({json: {
                button: {
                    name: '@zui/button',
                    version: '0.0.1',
                    zui: {name: 'button', type: 'control', displayName: '按钮', sourceType: 'build-in', path: 'lib/button', order: 0},
                },
                '@vendor/button': {
                    name: '@vendor/button',
                    version: '0.0.1',
                    description: 'Extension action control',
                    keywords: ['unique-catalog-keyword'],
                    zui: {name: '@vendor/button', type: 'control', displayName: '扩展按钮', sourceType: 'exts', path: 'exts/vendor/button', extsName: 'vendor', order: 0},
                },
                plain: {
                    name: 'plain',
                    version: '0.0.1',
                    zui: {name: 'plain', type: 'js-helpers', displayName: '工具', sourceType: 'build-in', path: 'lib/plain', order: 0},
                },
            }});
        });
        await page.goto('/');

        const search = page.getByRole('searchbox', {name: '搜索组件库'});
        const builtIn = page.locator('#libResults a[data-lib="button"]');
        const extension = page.locator('#libResults a[data-lib="@vendor/button"]');
        const selectedSource = page.locator('#selectedSource');
        await expect(builtIn).toHaveAttribute('href', '/button/');
        await expect(extension).toHaveAttribute('href', '/vendor_button/');
        await expect(builtIn.locator('.dev-lib-detail > .dev-lib-package + .dev-type-tag[data-type="control"]')).toBeVisible();
        await expect(extension.locator('.dev-lib-detail > .dev-lib-package + .dev-type-tag[data-type="control"]')).toBeVisible();
        await expect(extension.locator('.dev-type-tag')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
        await expect(page.locator('#libResults .dev-source-tag')).toHaveCount(0);
        await expect(builtIn.locator('.dev-package-scope')).toHaveCount(0);
        await expect(extension.locator('.dev-lib-package')).toHaveText('@vendor/button');
        await expect(extension.locator('.dev-package-scope')).toHaveText('@vendor');
        await expect(page.locator('a[data-lib="plain"] .dev-lib-package')).toHaveText('plain');
        await expect(page.locator('a[data-lib="plain"] .dev-package-scope')).toHaveCount(0);
        await expect(selectedSource).toBeHidden();

        await search.fill('unique-catalog-keyword');
        await expect(page.locator('#libResults a[data-lib]')).toHaveCount(1);
        await expect(extension).toBeVisible();
        await search.fill('Extension action control');
        await expect(extension).toBeVisible();
        await expect(builtIn).toHaveCount(0);

        await search.fill('button');
        await page.locator('#libSource').selectOption('exts');
        await expect(extension).toBeVisible();
        await expect(builtIn).toHaveCount(0);
        await expect(selectedSource).toBeVisible();
        await expect(selectedSource).toHaveText('扩展库');
        await expect(selectedSource).toHaveAttribute('data-source', 'exts');
        await page.locator('#libSource').selectOption('build-in');
        await expect(builtIn).toBeVisible();
        await expect(extension).toHaveCount(0);
        await expect(selectedSource).toHaveText('内置库');
        await expect(selectedSource).toHaveAttribute('data-source', 'build-in');
        await page.locator('#libSource').selectOption('');
        await expect(selectedSource).toBeHidden();
    });

    test('matches pinyin, initials, and ordered abbreviations while preserving catalog filters', async ({page}) => {
        await page.route('**/libs/', async (route) => {
            await route.fulfill({json: {
                '@zentao/form-designer': {
                    name: '@zentao/form-designer',
                    version: '0.0.1',
                    zui: {name: '@zentao/form-designer', type: 'js-ui', displayName: '表单设计器', sourceType: 'exts', path: 'exts/zentao/form-designer', extsName: 'zentao', order: 0},
                },
                button: {
                    name: '@zui/button',
                    version: '0.0.1',
                    zui: {name: 'button', type: 'control', displayName: '按钮', sourceType: 'build-in', path: 'lib/button', order: 0},
                },
                avatar: {
                    name: '@zui/avatar',
                    version: '0.0.1',
                    zui: {name: 'avatar', type: 'component', displayName: '头像', sourceType: 'build-in', path: 'lib/avatar', order: 0},
                },
            }});
        });
        await page.goto('/');

        const search = page.getByRole('searchbox', {name: '搜索组件库'});
        const results = page.locator('#libResults a[data-lib]');
        const designer = page.locator('#libResults a[data-lib="@zentao/form-designer"]');
        await expect(results).toHaveCount(3);
        for (const query of ['biaodanshejiqi', 'bdsjq', 'fdes', 'zentao bdsjq']) {
            await search.fill(query);
            await expect(designer).toBeVisible();
            await expect(results).toHaveCount(1);
        }

        await search.fill('qjsdb');
        await expect(designer).toHaveCount(0);
        await expect(results).toHaveCount(0);
        await search.fill('');
        await expect(results).toHaveCount(3);

        await search.fill('bdsjq');
        const source = page.locator('#libSource');
        const type = page.getByRole('combobox', {name: '组件库类型'});
        await source.selectOption('build-in');
        await expect(results).toHaveCount(0);
        await source.selectOption('exts');
        await expect(designer).toBeVisible();
        await type.selectOption('js-ui');
        await expect(designer).toBeVisible();
        await type.selectOption('control');
        await expect(results).toHaveCount(0);

        await page.locator('#resetFilters').click();
        await expect(search).toHaveValue('');
        await expect(source).toHaveValue('');
        await expect(type).toHaveValue('');
        await expect(page.locator('#selectedSource')).toBeHidden();
        await expect(results).toHaveCount(3);
    });

    test('preserves a playground with a malformed anchor and keeps slash input in editable content', async ({page}) => {
        test.setTimeout(60_000);
        await page.goto('/avatar/#%');
        const avatar = page.locator('#avatar1 .avatar').first();
        await expect(avatar).toBeVisible({timeout: 45_000});

        await page.evaluate(() => {
            for (const [index, value] of ['', 'plaintext-only'].entries()) {
                const editor = document.createElement('div');
                editor.id = `e2e-catalog-editor-${index}`;
                editor.setAttribute('contenteditable', value);
                document.body.append(editor);
            }
        });

        const dialog = page.locator('#catalogDialog');
        for (const index of [0, 1]) {
            const editor = page.locator(`#e2e-catalog-editor-${index}`);
            await editor.focus();
            await page.keyboard.press('/');
            await expect(editor).toBeFocused();
            await expect(editor).toHaveText('/');
            await expect(dialog).toBeHidden();
        }

        const openCatalog = page.locator('#openCatalog');
        await openCatalog.click();
        await expect(dialog).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(dialog).toBeHidden();
        await expect(openCatalog).toBeFocused();

        await page.keyboard.press('/');
        await expect(dialog).toBeVisible();
        await expect(page.getByRole('searchbox', {name: '搜索组件库'})).toBeFocused();
        await page.keyboard.press('Escape');
        await expect(avatar).toBeVisible();
    });

    test('uses the full desktop width and keeps each library card on two lines', async ({page}) => {
        await page.setViewportSize({width: 1920, height: 1080});
        await page.goto('/');
        await expect(page.locator('#libResults a[data-lib]').first()).toBeVisible();

        const layout = await page.evaluate(() => {
            const catalog = document.querySelector('#catalog')!.getBoundingClientRect();
            const countTextLines = (element: Element) => {
                const range = document.createRange();
                range.selectNodeContents(element);
                return new Set([...range.getClientRects()].map(rect => Math.round(rect.top))).size;
            };
            const cards = [...document.querySelectorAll('#libResults a[data-lib]')].map((card) => {
                const bounds = card.getBoundingClientRect();
                const title = card.querySelector('.dev-lib-title')!;
                const detail = card.querySelector('.dev-lib-detail')!;
                return {
                    left: bounds.left,
                    right: bounds.right,
                    rows: card.children.length,
                    titleBottom: title.getBoundingClientRect().bottom,
                    detailTop: detail.getBoundingClientRect().top,
                    titleLines: countTextLines(title.querySelector('strong')!),
                    packageLines: countTextLines(detail.querySelector('.dev-lib-package')!),
                };
            });
            return {left: catalog.left, right: catalog.right, width: window.innerWidth, cards};
        });

        expect(Math.abs(layout.left)).toBeLessThanOrEqual(1);
        expect(Math.abs(layout.right - layout.width)).toBeLessThanOrEqual(1);
        expect(Math.min(...layout.cards.map(card => card.left))).toBeLessThanOrEqual(16);
        expect(layout.width - Math.max(...layout.cards.map(card => card.right))).toBeLessThanOrEqual(16);
        for (const card of layout.cards) {
            expect(card.left).toBeGreaterThanOrEqual(0);
            expect(card.right).toBeLessThanOrEqual(layout.width);
            expect(card.rows).toBe(2);
            expect(card.detailTop).toBeGreaterThanOrEqual(card.titleBottom - 1);
            expect(card.titleLines).toBe(1);
            expect(card.packageLines).toBe(1);
        }
    });

    test('supports a narrow viewport and persists the selected color theme', async ({page}) => {
        await page.setViewportSize({width: 375, height: 812});
        await page.goto('/');

        const search = page.getByRole('searchbox', {name: '搜索组件库'});
        await expect(search).toBeVisible();
        await search.fill('@zui/button');
        await expect(page.locator('#libResults a[data-lib="button"]')).toBeVisible();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

        const themeToggle = page.getByRole('button', {name: '切换深色模式'});
        await expect(themeToggle).toHaveAttribute('aria-pressed', 'false');
        await themeToggle.click();
        await expect(page.locator('html')).toHaveClass(/\bdark\b/);
        await expect(themeToggle).toHaveAttribute('aria-pressed', 'true');

        await page.reload();
        await expect(themeToggle).toHaveAttribute('aria-pressed', 'true');
        await expect(page.locator('html')).toHaveClass(/\bdark\b/);
        await themeToggle.click();
        await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
    });
});
