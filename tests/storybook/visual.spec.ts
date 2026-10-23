import {expect, storyId, test} from './fixtures';

import type {Page} from '@playwright/test';

async function openPreview(page: Page, lib: string, variant: string, theme: 'light' | 'dark') {
    const id = storyId(lib, variant);
    await page.goto(`./iframe.html?id=${encodeURIComponent(id)}&viewMode=story&globals=theme:${theme}`);
    await expect(page).toHaveURL(new RegExp(`id=${encodeURIComponent(id)}&`));
    await expect(page).toHaveTitle(id);
    await expect(page.locator('#storybook-root')).toBeVisible({timeout: 30_000});
    await expect(page.locator('#storybook-root')).not.toBeEmpty();
    await expect(page.locator('.sb-errordisplay:visible, vite-error-overlay')).toHaveCount(0);
    await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
    await page.evaluate(() => document.fonts.ready);
}

test.describe('Storybook visual contracts', () => {
    test.skip(
        ({browserName}) => browserName !== 'chromium' || !!process.env.CI || process.env.PLAYWRIGHT_SKIP_VISUAL === '1',
        'Visual baselines are reviewed with the local Chromium browser only.',
    );
    test.use({viewport: {width: 1280, height: 900}});

    for (const theme of ['light', 'dark'] as const) {
        for (const variant of ['preact', 'disabled', 'loading']) {
            test(`Button ${variant} (${theme})`, async ({page}) => {
                await openPreview(page, 'button', variant, theme);
                const button = page.getByRole('button', {name: variant === 'loading' ? '保存中…' : '保存', exact: true});
                if (variant === 'preact') {
                    await expect(button).toBeEnabled();
                } else {
                    await expect(button).toBeDisabled();
                }
                await expect(button).toHaveAttribute('aria-busy', String(variant === 'loading'));
                await expect(button).toHaveScreenshot(`button-${variant}-${theme}.png`);
            });
        }

        test(`invalid InputControl (${theme})`, async ({page}) => {
            await openPreview(page, 'input-control', 'invalid', theme);
            const input = page.getByRole('textbox', {name: '通知邮箱', exact: true});
            await expect(input).toHaveValue('invalid-email');
            await expect(input).toHaveAttribute('aria-invalid', 'true');
            await expect(page.getByRole('alert')).toHaveText('请输入有效的邮箱地址。');
            await expect(page.locator('form')).toHaveScreenshot(`input-control-invalid-${theme}.png`);
        });

        for (const variant of ['indeterminate', 'disabled', 'switch']) {
            test(`Checkbox ${variant} (${theme})`, async ({page}) => {
                await openPreview(page, 'checkbox', variant, theme);
                const checkbox = page.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
                if (variant === 'indeterminate') {
                    await expect(checkbox).toHaveJSProperty('indeterminate', true);
                    await expect(checkbox).not.toBeChecked();
                    await expect(page.locator('output')).toHaveText('当前状态：半选');
                } else if (variant === 'disabled') {
                    await expect(checkbox).toBeChecked();
                    await expect(checkbox).toBeDisabled();
                } else {
                    await checkbox.focus();
                    await page.keyboard.press('Space');
                    await expect(checkbox).toBeChecked();
                    await expect(page.locator('.switch')).toBeVisible();
                    await checkbox.blur();
                }
                await page.mouse.move(1200, 800);
                await expect(page.locator('form')).toHaveScreenshot(`checkbox-${variant}-${theme}.png`);
            });
        }

        test.describe(`DatetimePicker visuals (${theme})`, () => {
            test.use({timezoneId: 'Asia/Shanghai'});

            for (const variant of ['playground', 'date-range', 'minute-step']) {
                test(`expanded ${variant}`, async ({page}) => {
                    await page.clock.setFixedTime(new Date('2026-10-15T09:30:00+08:00'));
                    if (variant === 'minute-step') {
                        await page.setViewportSize({width: 390, height: 844});
                    }
                    await openPreview(page, 'datetime-picker', variant, theme);
                    const input = page.getByRole('textbox', {name: '计划开始时间', exact: true});
                    await expect(input).toHaveValue('2026-10-15 09:30');
                    await input.click();
                    const popup = page.locator('.pick-pop');
                    await expect(popup).toHaveClass(/\bin\b/);
                    await expect(popup).toHaveCSS('opacity', '1');
                    await expect(popup.locator('[data-date="2026-10-15"]')).toHaveClass(/\bselected\b/);
                    if (variant === 'date-range') {
                        await expect(popup.locator('[data-date="2026-10-09"] button')).toBeDisabled();
                        await expect(popup.locator('[data-date="2026-10-21"] button')).toBeDisabled();
                        await expect(popup.locator('[data-date="2026-10-10"] button')).toBeEnabled();
                    } else if (variant === 'minute-step') {
                        const minutes = popup.locator('.time-picker-menu .menu').last();
                        await expect(minutes.locator('.menu-item')).toHaveText(['00', '15', '30', '45']);
                        await minutes.getByText('45', {exact: true}).click();
                        await expect(input).toHaveValue('2026-10-15 09:45');
                        expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
                        const bounds = await popup.boundingBox();
                        expect(bounds!.x).toBeGreaterThanOrEqual(0);
                        expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390);
                    }
                    await page.mouse.move(380, 800);
                    // Include the portaled calendar and its input in the same capture.
                    const clip = await page.locator('form, .pick-pop').evaluateAll((elements) => {
                        const bounds = elements.map(element => element.getBoundingClientRect());
                        const x = Math.floor(Math.min(...bounds.map(rect => rect.left))) - 8;
                        const y = Math.floor(Math.min(...bounds.map(rect => rect.top))) - 8;
                        return {
                            x, y,
                            width: Math.ceil(Math.max(...bounds.map(rect => rect.right))) + 8 - x,
                            height: Math.ceil(Math.max(...bounds.map(rect => rect.bottom))) + 8 - y,
                        };
                    });
                    await expect(page).toHaveScreenshot(`datetime-picker-${variant}-expanded-${theme}.png`, {clip});
                });
            }
        });

        for (const variant of ['single', 'multiple', 'empty']) {
            test(`expanded Picker ${variant} (${theme})`, async ({page}) => {
                await openPreview(page, 'picker', variant, theme);
                const picker = page.locator('.picker-select');
                if (variant === 'multiple') {
                    await expect(picker.locator('.picker-multi-selection')).toHaveText(['林悦 · 产品', '陈晨 · 研发']);
                    await expect(page.locator('select[name="owner[]"]')).toHaveValues(['linyue', 'chenchen']);
                } else {
                    await expect(picker).toContainText('请选择项目成员');
                    await expect(page.locator('input[name="owner"]')).toHaveValue('');
                }
                await picker.click();
                const popup = page.locator('.pick-pop');
                await expect(popup).toHaveClass(/\bin\b/);
                await expect(popup).toHaveCSS('opacity', '1');
                await expect(page.getByPlaceholder('搜索姓名或部门', {exact: true})).toBeFocused();
                if (variant === 'empty') {
                    await expect(popup.getByText('暂无可选成员', {exact: true})).toBeVisible();
                } else {
                    await expect(popup.getByText('王宁 · 测试', {exact: true})).toBeVisible();
                    await expect(popup.getByText('何雨 · 客户支持（休假中）', {exact: true})).toBeVisible();
                }
                if (variant === 'multiple') {
                    await expect.poll(() => popup.locator('.checkbox-primary > label').evaluateAll(
                        labels => labels.map(label => getComputedStyle(label, '::after').opacity),
                    )).toEqual(['1', '1', '0', '0']);
                }
                await page.mouse.move(1200, 800);
                // The popup is portaled to body; include it and the trigger in one component-sized capture.
                const clip = await page.locator('.picker-select, .pick-pop').evaluateAll((elements) => {
                    const bounds = elements.map(element => element.getBoundingClientRect());
                    const x = Math.floor(Math.min(...bounds.map(rect => rect.left))) - 8;
                    const y = Math.floor(Math.min(...bounds.map(rect => rect.top))) - 8;
                    return {
                        x, y,
                        width: Math.ceil(Math.max(...bounds.map(rect => rect.right))) + 8 - x,
                        height: Math.ceil(Math.max(...bounds.map(rect => rect.bottom))) + 8 - y,
                    };
                });
                await expect(page).toHaveScreenshot(`picker-${variant}-expanded-${theme}.png`, {clip});
            });
        }

        test(`expanded Dropdown (${theme})`, async ({page}) => {
            await openPreview(page, 'dropdown', 'playground', theme);
            const trigger = page.getByRole('button', {name: '操作菜单', exact: true});
            await trigger.click();
            await expect(trigger).toHaveAttribute('aria-expanded', 'true');
            await expect(page.locator('.popover.dropdown')).toHaveCSS('opacity', '1');
            const menu = page.locator('.dropdown-menu');
            await expect(menu.getByText('复制', {exact: true})).toBeVisible();
            await expect(menu.getByText('粘贴', {exact: true})).toBeVisible();
            await expect(menu.getByText('归档', {exact: true})).toBeVisible();
            await page.mouse.move(1200, 800);
            await expect(menu).toHaveScreenshot(`dropdown-expanded-${theme}.png`);
        });

        test(`open Modal (${theme})`, async ({page}) => {
            await openPreview(page, 'modal', 'playground', theme);
            const trigger = page.getByRole('button', {name: '打开对话框', exact: true});
            await trigger.click();
            const dialog = page.getByRole('dialog', {name: '项目设置', exact: true});
            await expect(dialog).toBeVisible();
            await expect(dialog.getByRole('button', {name: '关闭', exact: true})).toBeFocused();
            await page.mouse.move(1200, 800);
            await expect(dialog).toHaveScreenshot(`modal-open-${theme}.png`);
            await page.keyboard.press('Escape');
            await expect(dialog).not.toBeVisible();
            await expect(trigger).toBeFocused();
        });

        test(`compact Pager on a phone (${theme})`, async ({page}) => {
            await page.setViewportSize({width: 390, height: 844});
            await openPreview(page, 'pager', 'compact', theme);
            const pager = page.getByRole('navigation', {name: '分页', exact: true});
            await expect(pager.getByText('共 101 条 · 第 1/11 页', {exact: true})).toBeVisible();
            await expect(pager.getByRole('button', {name: '上一页', exact: true})).toBeDisabled();
            const next = pager.getByRole('button', {name: '下一页', exact: true});
            await expect(next).toBeEnabled();
            expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
            await expect(pager).toHaveScreenshot(`pager-compact-mobile-${theme}.png`);
            await next.click();
            await expect(pager.getByText('共 101 条 · 第 2/11 页', {exact: true})).toBeVisible();
        });
    }
});
