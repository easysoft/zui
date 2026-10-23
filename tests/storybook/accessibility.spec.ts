import AxeBuilder from '@axe-core/playwright';
import {expect, openPreview, openStory, test} from './fixtures';

import type {Page} from '@playwright/test';

async function expectAccessible(page: Page, ...selectors: string[]) {
    let builder = new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
    for (const selector of selectors) builder = builder.include(selector);
    const {violations} = await builder.analyze();
    if (violations.length) {
        await test.info().attach('axe-violations', {
            body: JSON.stringify(violations, null, 2), contentType: 'application/json',
        });
    }
    expect(violations.map(({id, impact, help, nodes}) => ({
        id, impact, help, targets: nodes.map(node => node.target),
    })), 'No automated WCAG 2.1 A/AA violations in the covered component').toEqual([]);
}

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} accessible Storybook components`, () => {
        for (const {lib, label, clearLabel} of [
            {lib: 'input-control', label: '项目名称', clearLabel: '清空输入'},
            {lib: 'search-box', label: '搜索项目', clearLabel: '清空搜索'},
        ]) {
            for (const variant of ['clearable', 'disabled', 'read-only']) {
                test(`${lib} ${variant} has named controls and native keyboard semantics`, async ({page}) => {
                    await openPreview(page, lib, variant, theme);
                    const input = page.getByRole('textbox', {name: label, exact: true});
                    await expect(input).toBeVisible();
                    await expect(input).toHaveJSProperty('disabled', variant === 'disabled');
                    await expect(input).toHaveJSProperty('readOnly', variant === 'read-only');
                    await expectAccessible(page, '#storybook-root');
                    const clear = page.getByRole('button', {name: clearLabel, exact: true});
                    if (variant === 'disabled') {
                        await expect(clear).toBeDisabled();
                        return;
                    }
                    await page.keyboard.press('Tab');
                    await expect(input).toBeFocused();
                    await page.keyboard.press('Tab');
                    if (variant === 'read-only') {
                        await expect(clear).toBeDisabled();
                    } else {
                        await expect(clear).toBeFocused();
                        await page.keyboard.press('Space');
                        await expect(input).toHaveValue('');
                        await expect(input).toBeFocused();
                        await page.keyboard.press('Tab');
                        await expectAccessible(page, '#storybook-root');
                    }
                    await expect(page.getByRole('button', {name: '提交', exact: true})).toBeFocused();
                    await page.keyboard.press('Shift+Tab');
                    await expect(input).toBeFocused();
                });
            }
        }

        for (const variant of ['indeterminate', 'disabled', 'switch']) {
            test(`Checkbox ${variant} exposes its label and checked state`, async ({page}) => {
                await openPreview(page, 'checkbox', variant, theme);
                const checkbox = page.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
                await expect(checkbox).toHaveJSProperty('indeterminate', variant === 'indeterminate');
                await expectAccessible(page, '#storybook-root');
                if (variant === 'disabled') {
                    await expect(checkbox).toBeDisabled();
                    await page.keyboard.press('Tab');
                    await expect(page.getByRole('button', {name: '提交', exact: true})).toBeFocused();
                } else {
                    await page.keyboard.press('Tab');
                    await expect(checkbox).toBeFocused();
                    await page.keyboard.press('Space');
                    await expect(checkbox).toBeChecked();
                    await expect(checkbox).toHaveJSProperty('indeterminate', false);
                    await expectAccessible(page, '#storybook-root');
                }
            });
        }

        test('Dropdown includes its body popup in the scan and retains trigger focus', async ({page}) => {
            await openPreview(page, 'dropdown', 'playground', theme);
            const trigger = page.getByRole('button', {name: '操作菜单', exact: true});
            await expect(trigger).toBeEnabled();
            await page.keyboard.press('Tab');
            await expect(trigger).toBeFocused();
            await page.keyboard.press('Enter');
            const popup = page.locator('.popover.dropdown');
            await expect(popup).toHaveCSS('opacity', '1');
            await expect(trigger).toHaveAttribute('aria-expanded', 'true');
            await expectAccessible(page, '#storybook-root', '.popover.dropdown');
            await expect(trigger).toBeFocused();
            await page.keyboard.press('Space');
            await expect(popup).not.toBeVisible();
            await expect(trigger).toHaveAttribute('aria-expanded', 'false');
            await expect(trigger).toBeFocused();
        });

        test('Modal cycles keyboard focus and returns it after Escape', async ({page}) => {
            await openPreview(page, 'modal', 'confirmation', theme);
            const trigger = page.getByRole('button', {name: '打开确认对话框', exact: true});
            await expect(trigger).toBeEnabled();
            await page.keyboard.press('Tab');
            await expect(trigger).toBeFocused();
            await page.keyboard.press('Enter');
            const dialog = page.getByRole('dialog', {name: '保存设置', exact: true});
            await expect(dialog).toBeVisible();
            await expect(dialog).toHaveAttribute('aria-modal', 'true');
            const cancel = dialog.getByRole('button', {name: '取消', exact: true});
            const close = dialog.getByRole('button', {name: '关闭对话框', exact: true});
            const confirm = dialog.getByRole('button', {name: '确认', exact: true});
            await expect(cancel).toBeFocused();
            await expectAccessible(page, '#storybook-root');
            await page.keyboard.press('Shift+Tab');
            await expect(close).toBeFocused();
            await page.keyboard.press('Shift+Tab');
            await expect(confirm).toBeFocused();
            await page.keyboard.press('Tab');
            await expect(close).toBeFocused();
            await page.keyboard.press('Escape');
            await expect(dialog).not.toBeVisible();
            await expect(trigger).toBeFocused();
            await expect(page.locator('output')).toHaveText('已取消');
        });

        test('Modal follows tab order, skips unavailable controls and handles an empty dialog', async ({page}) => {
            await openPreview(page, 'modal', 'confirmation', theme);
            await page.getByRole('button', {name: '打开确认对话框', exact: true}).click();
            const dialog = page.getByRole('dialog', {name: '保存设置', exact: true});
            await expect(dialog.getByRole('button', {name: '取消', exact: true})).toBeFocused();
            await dialog.evaluate((element) => {
                element.innerHTML = `
                    <button type="button" tabindex="2">第二项</button>
                    <button type="button" tabindex="1">第一项</button>
                    <button type="button" hidden>隐藏</button>
                    <fieldset disabled><button type="button">禁用</button></fieldset>
                    <div inert><button type="button">不可交互</button></div>
                    <button type="button" style="visibility:hidden">不可见</button>
                    <label><input type="radio" name="choice" checked>已选</label>
                    <label><input type="radio" name="choice">未选</label>`;
            });
            const first = dialog.getByRole('button', {name: '第一项', exact: true});
            const radio = dialog.getByRole('radio', {name: '已选', exact: true});
            await first.focus();
            await first.evaluate(element => element.addEventListener('keydown', event => event.preventDefault(), {once: true}));
            await page.keyboard.press('Tab');
            await expect(first).toBeFocused();
            await page.keyboard.press('Shift+Tab');
            await expect(radio).toBeFocused();
            await page.keyboard.press('Tab');
            await expect(first).toBeFocused();
            await page.keyboard.press('Tab');
            await expect(dialog.getByRole('button', {name: '第二项', exact: true})).toBeFocused();
            await dialog.evaluate(element => element.insertAdjacentHTML('beforeend', '<div contenteditable="true" role="textbox" aria-label="备注">备注</div>'));
            await first.focus();
            await page.keyboard.press('Shift+Tab');
            await expect(dialog.getByRole('textbox', {name: '备注', exact: true})).toBeFocused();
            await page.keyboard.press('Tab');
            await expect(first).toBeFocused();
            await dialog.evaluate(element => element.replaceChildren());
            await page.keyboard.press('Tab');
            await expect(dialog).toBeFocused();
            await page.keyboard.press('Shift+Tab');
            await expect(dialog).toBeFocused();
        });

        test('Modal keeps its focus boundary when Escape dismissal is disabled', async ({page}) => {
            await openPreview(page, 'modal', 'static', theme);
            await page.getByRole('button', {name: '打开对话框', exact: true}).click();
            const dialog = page.getByRole('dialog', {name: '项目设置', exact: true});
            const close = dialog.getByRole('button', {name: '关闭', exact: true});
            await expect(close).toBeFocused();
            await page.keyboard.press('Escape');
            await expect(dialog).toBeVisible();
            await dialog.getByRole('button', {name: '关闭对话框', exact: true}).focus();
            await page.keyboard.press('Shift+Tab');
            await expect(close).toBeFocused();
        });

        test('Modal without a backdrop lets Tab leave the dialog', async ({page}) => {
            const canvas = await openStory(page, 'modal', 'confirmation', theme);
            const previousTrigger = await canvas.getByRole('button', {name: '打开确认对话框', exact: true}).elementHandle();
            await page.locator('#control-backdrop').selectOption({label: '无遮罩'});
            await expect.poll(() => previousTrigger!.evaluate(element => element.isConnected)).toBe(false);
            const trigger = canvas.getByRole('button', {name: '打开确认对话框', exact: true});
            await trigger.click();
            const dialog = canvas.getByRole('dialog', {name: '保存设置', exact: true});
            await expect(dialog).toHaveAttribute('aria-modal', 'false');
            await expect(dialog.getByRole('button', {name: '取消', exact: true})).toBeFocused();
            await dialog.getByRole('button', {name: '关闭对话框', exact: true}).focus();
            await page.keyboard.press('Shift+Tab');
            await expect(trigger).toBeFocused();
        });
    });
}
