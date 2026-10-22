import {expect, openStory, storyId, test} from './fixtures';

import type {Page} from '@playwright/test';

async function openNarrowStory(page: Page, lib: string, variant: string, theme: string) {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto(`./iframe.html?id=${encodeURIComponent(storyId(lib, variant))}&viewMode=story&globals=theme:${theme}`);
    await expect(page.locator('#storybook-root')).toBeVisible({timeout: 30_000});
    await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
}

async function expectNoHorizontalOverflow(page: Page) {
    expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
}

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} component states`, () => {
        for (const state of ['disabled', 'loading']) {
            test(`Button ${state} blocks clicks and can recover through Controls`, async ({page}) => {
                const canvas = await openStory(page, 'button', state, theme);
                const button = canvas.getByRole('button', {name: state === 'loading' ? '保存中…' : '保存', exact: true});
                await expect(button).toBeDisabled();
                if (state === 'loading') {
                    await expect(button).toHaveAttribute('aria-busy', 'true');
                    await expect(button.locator('.text')).toHaveText('保存中…');
                }
                await page.getByRole('tab', {name: 'Actions', exact: true}).click();
                await button.click({force: true});
                await expect(page.getByText('click', {exact: true})).toHaveCount(0);
                await page.getByRole('tab', {name: /^Controls/}).click();
                await page.locator(`#control-${state}`).focus();
                await page.keyboard.press('Space');
                const enabled = canvas.getByRole('button', {name: '保存', exact: true});
                await expect(enabled).toBeEnabled();
                await expect(enabled).toHaveAttribute('aria-busy', 'false');
                await page.getByRole('tab', {name: 'Actions', exact: true}).click();
                await enabled.click();
                await expect(page.getByText('click', {exact: true})).toHaveCount(1);
            });
        }

        for (const boundary of [
            {variant: 'empty', info: '共 0 条 · 第 0/0 页', previousDisabled: true},
            {variant: 'single-page', info: '共 8 条 · 第 1/1 页', previousDisabled: true},
            {variant: 'last-page', info: '共 101 条 · 第 11/11 页', previousDisabled: false},
        ]) {
            test(`Pager ${boundary.variant} disables unavailable navigation`, async ({page}) => {
                const canvas = await openStory(page, 'pager', boundary.variant, theme);
                await expect(canvas.getByText(boundary.info, {exact: true})).toBeVisible();
                await expect(canvas.getByRole('button', {name: '下一页', exact: true})).toBeDisabled();
                const previous = canvas.getByRole('button', {name: '上一页', exact: true});
                if (boundary.previousDisabled) {
                    await expect(previous).toBeDisabled();
                } else {
                    await previous.focus();
                    await page.keyboard.press('Enter');
                    await expect(page.locator('#control-page')).toHaveValue('10');
                    await expect(canvas.getByText('共 101 条 · 第 10/11 页', {exact: true})).toBeVisible();
                }
            });
        }

        test('compact Pager keeps first-page boundaries and keyboard navigation on a phone', async ({page}) => {
            await openNarrowStory(page, 'pager', 'compact', theme);
            await expect(page.getByRole('button', {name: '上一页', exact: true})).toBeDisabled();
            await page.getByRole('button', {name: '下一页', exact: true}).focus();
            await page.keyboard.press('Enter');
            await expect(page.getByText('共 101 条 · 第 2/11 页', {exact: true})).toBeVisible();
            await expectNoHorizontalOverflow(page);
        });

        for (const lib of ['label', 'button']) {
            test(`${lib} truncates long text while retaining its full accessible text`, async ({page}) => {
                await openNarrowStory(page, lib, 'long-text', theme);
                const text = page.locator('#storybook-root .text-ellipsis');
                await expect(text).toBeVisible();
                await expect(text).toHaveCSS('text-overflow', 'ellipsis');
                expect(await text.evaluate(node => node.scrollWidth > node.clientWidth)).toBe(true);
                await expect(text.locator('..')).toHaveAttribute('title', (await text.textContent())!);
                await expectNoHorizontalOverflow(page);
            });
        }

        test('disabled Dropdown cannot open until enabled in Controls', async ({page}) => {
            const canvas = await openStory(page, 'dropdown', 'disabled', theme);
            const trigger = canvas.getByRole('button', {name: '操作菜单', exact: true});
            await expect(trigger).toBeDisabled();
            await trigger.click({force: true});
            await expect(canvas.locator('.dropdown-menu:visible')).toHaveCount(0);
            await page.locator('#control-disabled').focus();
            await page.keyboard.press('Space');
            await expect(trigger).toBeEnabled();
            await trigger.click();
            await expect(canvas.locator('.dropdown-menu')).toBeVisible();
        });

        test('long Dropdown items fit the phone viewport and retain the full hint', async ({page}) => {
            await openNarrowStory(page, 'dropdown', 'long-menu', theme);
            await page.getByRole('button', {name: '操作菜单', exact: true}).click();
            const item = page.locator('[z-key-path="copy"] .listitem');
            await expect(page.locator('.popover.dropdown')).toHaveCSS('opacity', '1');
            await expect(item).toBeInViewport();
            await expect(item).toHaveAttribute('title', (await item.textContent())!);
            const menu = await page.locator('.dropdown-menu').boundingBox();
            expect(menu).not.toBeNull();
            expect(menu!.x).toBeGreaterThanOrEqual(0);
            expect(menu!.x + menu!.width).toBeLessThanOrEqual(390);
            await expectNoHorizontalOverflow(page);
        });

        test('static Modal requires an explicit close and restores focus', async ({page}) => {
            await openNarrowStory(page, 'modal', 'static', theme);
            const trigger = page.getByRole('button', {name: '打开对话框', exact: true});
            await trigger.click();
            const dialog = page.getByRole('dialog');
            await expect(dialog).toBeVisible();
            await page.keyboard.press('Escape');
            await expect(dialog).toBeVisible();
            await page.locator('.modal').click({position: {x: 4, y: 4}});
            await expect(dialog).toBeVisible();
            await page.getByRole('button', {name: '关闭', exact: true}).click();
            await expect(dialog).not.toBeVisible();
            await expect(trigger).toBeFocused();
        });

        test('long Modal title wraps without hiding the close action', async ({page}) => {
            await openNarrowStory(page, 'modal', 'long-title', theme);
            await page.getByRole('button', {name: '打开对话框', exact: true}).click();
            await expect(page.getByRole('heading')).toBeInViewport();
            const close = page.getByRole('button', {name: '关闭对话框', exact: true});
            await expect(close).toBeInViewport();
            await expectNoHorizontalOverflow(page);
            await close.click();
            await expect(page.getByRole('dialog')).not.toBeVisible();
        });

        test('long Modal body scrolls independently while its footer stays reachable', async ({page}) => {
            await openNarrowStory(page, 'modal', 'long-content', theme);
            await page.getByRole('button', {name: '打开对话框', exact: true}).click();
            const body = page.locator('.modal-body');
            expect(await body.evaluate(node => node.scrollHeight > node.clientHeight)).toBe(true);
            await body.evaluate(node => node.scrollTop = node.scrollHeight);
            await expect(body.locator('p').last()).toBeInViewport();
            const close = page.getByRole('button', {name: '关闭', exact: true});
            await expect(close).toBeInViewport();
            await close.click();
            await expect(page.getByRole('dialog')).not.toBeVisible();
            await expectNoHorizontalOverflow(page);
        });

        test('long Tabs labels fit a phone and keep keyboard activation working', async ({page}) => {
            await openNarrowStory(page, 'tabs', 'long-label', theme);
            const overview = page.getByRole('tab').first();
            await expect(overview).toHaveAttribute('title', (await overview.textContent())!);
            await expect(overview.locator('span')).toHaveCSS('text-overflow', 'ellipsis');
            expect(await overview.locator('span').evaluate(node => node.scrollWidth > node.clientWidth)).toBe(true);
            await page.getByRole('tab', {name: '设置', exact: true}).focus();
            await page.keyboard.press('Enter');
            await expect(page.getByRole('tab', {name: '设置', exact: true})).toHaveAttribute('aria-selected', 'true');
            await expect(page.getByRole('tabpanel', {name: '设置', exact: true})).toBeVisible();
            await expectNoHorizontalOverflow(page);
        });
    });
}
