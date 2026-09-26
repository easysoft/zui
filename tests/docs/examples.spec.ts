import {existsSync, readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test as baseTest} from '@playwright/test';

import type {Page} from '@playwright/test';

type DocInstance = {
    element: HTMLElement;
    options: {onEnter?: (value: string, event: Event | undefined) => void};
    render: (options: Record<string, unknown>) => void;
};
type DocClass = {getAll: () => DocInstance[]; get: (selector: string) => DocInstance};
type DocWindow = Window & {
    zui: {Tree: DocClass; SearchBox: DocClass; FileList: DocClass; Nav: DocClass; DatePicker: DocClass; List: DocClass; create: (...args: unknown[]) => DocInstance};
    onZUIReady: (callback: () => void) => void;
    docsProbe?: {ready: (callback: () => void) => void; pending: (() => void)[]; created: string[]; enters: number; urls: string[]; revoked: string[]};
};

const root = Path.resolve(import.meta.dirname, '../..');
const pages = [
    {path: 'guide/start/', title: '快速上手', source: 'docs/docs/guide/start/index.md'},
    {path: 'lib/components/tree/', title: '树形菜单', source: 'lib/tree/docs/lib/components/index.md'},
    {path: 'lib/components/search-box/', title: '搜索框', source: 'lib/search-box/docs/lib/components/index.md'},
    {path: 'lib/components/file-list/', title: '文件列表', source: 'lib/file-list/docs/lib/components/index.md'},
];

const test = baseTest.extend({
    page: async ({page, baseURL}, use) => {
        const errors: string[] = [];
        const origin = new URL(baseURL!).origin;
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', (response) => {
            if (response.url().startsWith(origin) && response.status() >= 400) {
                errors.push(`${response.status()} ${response.url()}`);
            }
        });
        page.on('requestfailed', (request) => {
            const error = request.failure()?.errorText;
            if (request.url().startsWith(origin) && error !== 'net::ERR_ABORTED') {
                errors.push(`${error} ${request.url()}`);
            }
        });
        await use(page);
        expect(errors, 'Page errors and failed same-origin resources').toEqual([]);
    },
});

async function navigate(page: Page, url: string) {
    await page.evaluate((href) => {
        const link = document.createElement('a');
        link.href = href;
        document.body.append(link);
        link.click();
        link.remove();
    }, url);
    await page.waitForURL(url);
}

async function exercise(page: Page, key: string) {
    if (key === 'start-download') {
        await page.getByRole('button', {name: '显示消息'}).click();
        await expect(page.getByText('你好，ZUI！', {exact: true})).toBeVisible();
    } else if (key === 'start-global' || key === 'start-esm') {
        await expect(page.locator(key === 'start-esm' ? '#moduleNav' : '#startNav')).toContainText('首页');
        if (key === 'start-esm') {
            expect(await page.evaluate(() => 'zui' in window)).toBe(false);
        }
    } else if (key === 'start-declarative') {
        await expect(page.locator('input')).toBeVisible();
    } else if (key === 'start-options') {
        await expect(page.locator('.list')).toContainText('设计');
    } else if (key.startsWith('tree-')) {
        const id = {'tree-basic': 'treeBasic', 'tree-icons': 'treeIcons', 'tree-hover': 'treeHover', 'tree-actions': 'treeActions'}[key]!;
        const tree = page.locator(`#${id}`);
        await expect(tree.locator('.nested-toggle-icon').first()).toBeVisible();
        if (key === 'tree-basic' || key === 'tree-icons') {
            await tree.locator('.nested-toggle-icon').first().click();
            await expect(tree.getByText('研发团队', {exact: true})).toBeVisible();
            await tree.locator('.nested-toggle-icon').first().click();
            await expect(tree.getByText('研发团队', {exact: true})).not.toBeVisible();
        }
        if (key === 'tree-icons') {
            await expect(tree.locator('.icon-folder-close')).toBeVisible();
        }
        if (key === 'tree-hover') {
            await expect(tree.locator('.tree').first()).toHaveClass(/tree-lines/);
            await expect(tree.getByText('研发团队', {exact: true})).toBeVisible();
        }
        if (key === 'tree-actions') {
            await tree.getByRole('button', {name: /编辑$/}).first().click();
            await expect(page.locator('#treeActionsResult')).toHaveText('已点击编辑');
            await tree.getByText('使用指南', {exact: true}).click();
            await expect(page.locator('#treeActionsResult')).toHaveText('选择：使用指南');
            await tree.locator('.nested-toggle-icon').first().click();
            await expect(page.locator('#treeActionsResult')).toHaveText('docs 已折叠');
            await expect(tree.getByText('使用指南', {exact: true})).not.toBeVisible();
        }
    } else if (key.startsWith('search-')) {
        const id = key.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());
        const input = page.locator(`#${id} input`);
        await expect(input).toBeVisible();
        if (key === 'search-disabled') {
            await expect(input).toBeDisabled();
            await expect(input).toHaveValue('不可编辑');
            await expect(page.locator(`#${id} button`)).toBeDisabled();
        } else if (key === 'search-readonly') {
            await expect(input).toHaveAttribute('readonly', '');
            await expect(page.locator(`#${id} button`)).toBeDisabled();
            await input.focus();
            await input.press('Escape');
            await expect(input).toHaveValue('只读关键词');
        } else {
            if (key === 'search-circle' || key === 'search-controlled') {
                await expect(input).toHaveValue('ZUI');
            }
            await input.fill('示例查询');
            if (key === 'search-events') {
                await expect(page.locator('#searchEventsResult')).toHaveText('输入：示例查询');
                await input.press('Enter');
                await expect(page.locator('#searchEventsResult')).toHaveText('搜索：示例查询');
                await page.locator(`#${id} button`).click();
                await expect(input).toHaveValue('');
                await expect(page.locator('#searchEventsResult')).toHaveText('输入：');
                await input.fill('再次输入');
            }
            if (key === 'search-controlled') {
                await expect(page.locator('#searchControlledResult')).toHaveText('当前值：示例查询');
            }
            await input.press('Escape');
            await expect(input).toHaveValue('');
        }
    } else if (key.startsWith('files-')) {
        const id = key.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());
        const list = page.locator(`#${id}`);
        if (key === 'files-native') {
            await page.locator('#filesNativeInput').setInputFiles({
                name: 'example.svg', mimeType: 'image/svg+xml',
                buffer: Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="blue"/></svg>'),
            });
            await expect(list).toContainText('example.svg');
            await expect(list.locator('img')).toBeVisible();
            await expect.poll(() => list.locator('img').evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
        } else if (key === 'files-thumbnails') {
            await expect(list.locator('img')).toHaveCount(1);
            await expect.poll(() => list.locator('img').evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
            await expect(list.locator('.icon-file-pdf')).toBeVisible();
        } else {
            await expect(list).toContainText('使用指南.pdf');
            if (key === 'files-basic') {
                await expect(list.locator('.avatar, .item-icon')).toHaveCount(0);
            }
            if (key === 'files-icons') {
                await expect(list.locator('.icon-file-pdf')).toBeVisible();
                await list.getByRole('link', {name: /使用指南\.pdf/}).click();
                await expect(page).toHaveURL(/#filesIcons$/);
            }
            if (key === 'files-cards' || key === 'files-inline') {
                await expect(list.locator('.file-list')).toHaveClass(/file-list-cards/);
            }
            if (key === 'files-actions') {
                await expect(list.locator('.file-list-item')).toHaveCount(1);
                await list.getByRole('button', {name: /移除$/}).click();
                await expect(list.locator('.file-list-item')).toHaveCount(0);
                await expect(page.locator('#filesActionsResult')).toHaveText('已移除：使用指南.pdf');
            }
        }
    } else {
        throw new Error(`Add a behavior assertion for documentation example: ${key}`);
    }
}

for (const doc of pages) {
    test(`${doc.title}: rendered examples, links, resources and source editing`, async ({page, request, baseURL}) => {
        await page.goto(doc.path);
        await expect(page.locator('h1')).toHaveText(doc.title);
        await expect(page.locator('a.edit-link-button')).toHaveAttribute('href', `https://github.com/easysoft/zui/edit/main/${doc.source}`);
        expect(existsSync(Path.join(root, doc.source))).toBe(true);
        const examples = page.locator('[data-doc-example]:has(.example)');
        for (const example of await examples.all()) {
            const key = await example.getAttribute('data-doc-example');
            await test.step(`Preview ${key}`, () => exercise(page, key!));
        }
        for (const img of await page.locator('.vp-doc img').all()) {
            await expect.poll(() => img.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
        }
        const links = await page.locator('.vp-doc a[href], .VPDocAsideOutline a[href]').evaluateAll(nodes => [...new Set(nodes.map(node => (node as HTMLAnchorElement).href))]);
        for (const href of links) {
            const url = new URL(href);
            if (url.origin !== new URL(baseURL!).origin) {
                continue;
            }
            if (url.pathname === new URL(page.url()).pathname && url.hash) {
                expect(await page.evaluate(id => !!document.getElementById(id), decodeURIComponent(url.hash.slice(1))), href).toBe(true);
            } else {
                const response = await request.get(href);
                expect(response.ok(), href).toBe(true);
                if (url.pathname.endsWith('.zip')) {
                    expect((await response.body()).subarray(0, 2).toString()).toBe('PK');
                } else if (url.hash) {
                    const html = await response.text();
                    expect(await page.evaluate(({html, id}) => !!new DOMParser().parseFromString(html, 'text/html').getElementById(id), {html, id: decodeURIComponent(url.hash.slice(1))}), href).toBe(true);
                }
            }
        }
    });

    const markdown = readFileSync(Path.join(root, doc.source), 'utf8');
    const keys = [...markdown.matchAll(/data-doc-example="([^"]+)"/g)].map(match => match[1]);
    const snippets = new Map([...markdown.matchAll(/data-doc-example="([^"]+)"[\s\S]*?```html\n([\s\S]*?)\n```/g)].map(([, key, code]) => [key, code]));
    for (const key of keys) {
        test(`${doc.title}: copied ${key} runs using distribution assets only`, async ({page, baseURL}) => {
            await page.goto(doc.path);
            const example = page.locator(`[data-doc-example="${key}"]`);
            const tab = example.getByRole('tab', {name: 'HTML', exact: true});
            if (await tab.count()) {
                await tab.click();
            }
            const code = await example.locator('pre code').innerText();
            expect(code.trim(), 'The built page must match the documentation source').toBe(snippets.get(key)?.trim());
            expect(code).not.toMatch(/<ZUI\b|<Example\b|items:\s*\[\.\.\.\]/);
            await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
            await example.locator('button.copy').click();
            await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(code);
            const html = code.includes('<!doctype html>')
                ? code
                : `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>${key}</title><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body>${code}</body></html>`;
            const url = new URL('__docs_example__.html', baseURL).href;
            await page.route(url, route => route.fulfill({contentType: 'text/html; charset=utf-8', body: html}));
            await page.goto(url);
            await exercise(page, key);
            expect(await page.locator('link[rel="stylesheet"]').count()).toBe(1);
        });
    }
}

test('FileList is reachable through navigation and local search', async ({page}) => {
    await page.goto('lib/components/tree/');
    await page.locator('.VPSidebar').getByRole('link', {name: '文件列表', exact: true}).click();
    await expect(page.locator('h1')).toHaveText('文件列表');
    await page.getByRole('button', {name: '搜索文档'}).click();
    await page.locator('#localsearch-input').fill('文件列表');
    await expect(page.locator('.VPLocalSearchBox').getByText('文件列表', {exact: true}).first()).toBeVisible();
    await page.locator('.VPLocalSearchBox a').first().click();
    await expect(page.locator('h1')).toHaveText('文件列表');
});

test('SearchBox defers composition and cancels pending callbacks on unmount', async ({page, baseURL}) => {
    await page.goto('lib/components/search-box/');
    const input = page.locator('#searchEvents input');
    await input.dispatchEvent('compositionstart');
    await input.fill('拼');
    await page.waitForTimeout(600);
    await expect(page.locator('#searchEventsResult')).toHaveText('等待输入');
    await input.fill('拼音');
    await input.dispatchEvent('compositionend', {data: '拼音'});
    await expect(page.locator('#searchEventsResult')).toHaveText('输入：拼音');
    await input.fill('pending');
    await navigate(page, new URL('lib/components/tree/', baseURL).href);
    await page.waitForTimeout(600);
    // A stale callback would attempt to write to the now-removed output element.
    await expect(page.locator('h1')).toHaveText('树形菜单');
});

test('three client-side visits release instances, hotkeys and native preview URLs', async ({page, baseURL}) => {
    await page.goto('guide/start/');
    await page.evaluate(() => {
        const target = window as unknown as DocWindow;
        target.docsProbe = {ready: target.onZUIReady, pending: [], created: [], enters: 0, urls: [], revoked: []};
        const create = URL.createObjectURL.bind(URL);
        const revoke = URL.revokeObjectURL.bind(URL);
        URL.createObjectURL = (blob) => {
            const url = create(blob);
            target.docsProbe!.urls.push(url);
            return url;
        };
        URL.revokeObjectURL = (url) => {
            target.docsProbe!.revoked.push(url);
            revoke(url);
        };
    });
    for (let visit = 0; visit < 3; visit++) {
        await page.locator('[data-doc-example="start-declarative"] input').click();
        await expect(page.locator('.date-picker-menu')).toBeVisible();
        await navigate(page, new URL('lib/components/tree/', baseURL).href);
        await expect.poll(() => page.evaluate(() => (window as unknown as DocWindow).zui.Tree.getAll().length)).toBe(4);
        await expect.poll(() => page.evaluate(() => {
            const {Nav, DatePicker, List} = (window as unknown as DocWindow).zui;
            return Nav.getAll().length + DatePicker.getAll().length + List.getAll().length;
        })).toBe(0);
        await expect(page.locator('.popup, .modal, .popover, .dropdown-menu')).toHaveCount(0);
        await navigate(page, new URL('lib/components/search-box/', baseURL).href);
        await expect.poll(() => page.evaluate(() => (window as unknown as DocWindow).zui.Tree.getAll().length)).toBe(0);
        await expect.poll(() => page.evaluate(() => (window as unknown as DocWindow).zui.SearchBox.getAll().length)).toBe(6);
        await page.evaluate(() => {
            const target = window as unknown as DocWindow;
            const search = target.zui.SearchBox.get('#searchEvents');
            const onEnter = search.options.onEnter!;
            search.render({onEnter(value: string, event: Event | undefined) {
                target.docsProbe!.enters++;
                onEnter(value, event);
            }});
        });
        await page.locator('#searchEvents input').press('Enter');
        expect(await page.evaluate(() => (window as unknown as DocWindow).docsProbe!.enters)).toBe(visit + 1);
        await navigate(page, new URL('lib/components/file-list/', baseURL).href);
        await exercise(page, 'files-native');
        await navigate(page, new URL('guide/start/', baseURL).href);
        await expect.poll(() => page.evaluate(() => {
            const target = window as unknown as DocWindow;
            return target.zui.Tree.getAll().length + target.zui.SearchBox.getAll().length + target.zui.FileList.getAll().length;
        })).toBe(0);
        await expect.poll(() => page.evaluate(() => {
            const {Nav, DatePicker, List} = (window as unknown as DocWindow).zui;
            return [Nav.getAll().length, DatePicker.getAll().length, List.getAll().length];
        })).toEqual([1, 1, 1]);
        await expect(page.locator('.popup, .modal, .popover, .dropdown-menu')).toHaveCount(0);
    }
    const probe = await page.evaluate(() => (window as unknown as DocWindow).docsProbe!);
    expect(probe.urls).toHaveLength(3);
    expect(probe.revoked.sort()).toEqual(probe.urls.sort());
});

test('leaving before ZUI readiness never creates the abandoned page instances', async ({page, baseURL}) => {
    await page.goto('guide/start/');
    await page.evaluate(() => {
        const target = window as unknown as DocWindow;
        const probe = target.docsProbe = {ready: target.onZUIReady, pending: [] as (() => void)[], created: [] as string[], enters: 0, urls: [], revoked: []};
        target.onZUIReady = callback => probe.pending.push(callback);
        const create = target.zui.create;
        target.zui.create = (...args) => {
            probe.created.push(String(args[0]));
            return create(...args);
        };
    });
    await navigate(page, new URL('lib/components/tree/', baseURL).href);
    await expect(page.locator('h1')).toHaveText('树形菜单');
    await expect.poll(() => page.evaluate(() => (window as unknown as DocWindow).docsProbe!.pending.length)).toBe(4);
    await navigate(page, new URL('lib/components/search-box/', baseURL).href);
    await expect.poll(() => page.evaluate(() => (window as unknown as DocWindow).docsProbe!.pending.length)).toBe(10);
    await page.evaluate(() => {
        const target = window as unknown as DocWindow;
        const probe = target.docsProbe!;
        target.onZUIReady = probe.ready;
        probe.pending.splice(0).forEach(callback => probe.ready(callback));
    });
    await expect(page.locator('#searchBasic input')).toBeVisible();
    const created = await page.evaluate(() => (window as unknown as DocWindow).docsProbe!.created);
    expect(created).toEqual(Array.from({length: 6}, () => 'searchBox'));
});
