import {expect, openStory, storyId, switchToLabel, test} from './fixtures';

import type {Page} from '@playwright/test';

async function openPhone(page: Page, lib: string, variant: string, theme: 'light' | 'dark') {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto(`./iframe.html?id=${encodeURIComponent(storyId(lib, variant))}&viewMode=story&globals=theme:${theme}`);
    await expect(page.locator('#storybook-root')).toBeVisible({timeout: 30_000});
    await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
}

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} form stories`, () => {
        test('InputControl synchronizes typing and Controls, and clears with focus retained', async ({page}) => {
            const canvas = await openStory(page, 'input-control', 'clearable', theme);
            const input = canvas.getByRole('textbox', {name: '项目名称', exact: true});
            await input.fill('Project Alpha');
            await expect(page.locator('#control-value')).toHaveValue('Project Alpha');
            await page.locator('#control-value').fill('Project Beta');
            await expect(input).toHaveValue('Project Beta');
            await canvas.getByText('项目名称', {exact: true}).click();
            await expect(input).toBeFocused();
            await canvas.getByRole('button', {name: '清空输入', exact: true}).click();
            await expect(input).toHaveValue('');
            await expect(input).toBeFocused();
            await expect(page.locator('#control-value')).toHaveValue('');
            await expect(canvas.getByRole('button', {name: '清空输入', exact: true})).toBeDisabled();
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('input clear', {exact: true})).toHaveCount(1);
        });

        for (const state of [
            {variant: 'disabled', property: 'disabled', value: '已停用项目'},
            {variant: 'read-only', property: 'readonly', value: '只读项目'},
        ]) {
            test(`InputControl ${state.variant} preserves native form semantics and can recover`, async ({page}) => {
                const canvas = await openStory(page, 'input-control', state.variant, theme);
                const input = canvas.getByRole('textbox', {name: '项目名称', exact: true});
                await expect(input).not.toBeEditable();
                await expect(canvas.getByRole('button', {name: '清空输入', exact: true})).toBeDisabled();
                await expect(input).toHaveValue(state.value);
                expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()]))
                    .toEqual(state.property === 'disabled' ? [] : [['project', state.value]]);
                await page.locator(`#control-${state.property}`).focus();
                await page.keyboard.press('Space');
                await expect(input).toBeEditable();
                await input.fill('Recovered');
                await expect(page.locator('#control-value')).toHaveValue('Recovered');
            });
        }

        test('InputControl validates the real email field and only submits after correction', async ({page}) => {
            const canvas = await openStory(page, 'input-control', 'invalid', theme);
            const input = canvas.getByRole('textbox', {name: '通知邮箱', exact: true});
            await expect(input).toHaveAttribute('aria-invalid', 'true');
            await expect(canvas.getByRole('alert')).toHaveText('请输入有效的邮箱地址。');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await expect(page.getByText('input submit', {exact: true})).toHaveCount(0);
            await expect(input).toBeFocused();
            await canvas.getByRole('button', {name: '清空输入', exact: true}).click();
            await expect(input).toHaveValue('');
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await expect(canvas.getByRole('alert')).toHaveText('请填写此字段。');
            await input.fill('owner@example.com');
            await expect(input).toHaveAttribute('aria-invalid', 'false');
            await expect(canvas.getByRole('alert')).toHaveCount(0);
            expect(await input.evaluate(node => (node as HTMLInputElement).checkValidity())).toBe(true);
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await expect(page.getByText('input submit', {exact: true})).toHaveCount(1);
            await expect(input).toHaveValue('owner@example.com');
        });

        test('InputControl retains a long value and keeps its clear action inside a phone viewport', async ({page}) => {
            await openPhone(page, 'input-control', 'long-value', theme);
            const input = page.getByRole('textbox', {name: '项目名称', exact: true});
            await expect(input).toBeVisible();
            const value = await input.inputValue();
            expect(value.length).toBeGreaterThan(100);
            expect(await page.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('project'))).toBe(value);
            await expect(page.getByRole('button', {name: '清空输入', exact: true})).toBeInViewport();
            expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
        });

        test('Picker synchronizes single selection and Controls without feedback Actions, then clears', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'single', theme);
            const picker = canvas.locator('.picker-select');
            const value = canvas.locator('input[name="owner"]');
            await page.locator('#control-value').fill('linyue');
            await expect(picker.locator('.picker-single-selection')).toHaveText('林悦 · 产品');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('picker change', {exact: true})).toHaveCount(0);
            await picker.click();
            await canvas.locator('.pick-pop').getByText('陈晨 · 研发', {exact: true}).click();
            await expect(value).toHaveValue('chenchen');
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
            await expect(page.getByText('picker change', {exact: true})).toHaveCount(1);
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await expect(page.getByText('picker submit', {exact: true})).toHaveCount(1);
            expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()])).toEqual([['owner', 'chenchen']]);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(page.locator('#control-value')).toHaveValue('chenchen');
            await picker.locator('.picker-deselect-btn').click();
            await expect(value).toHaveValue('');
            await expect(page.locator('#control-value')).toHaveValue('');
            await expect(picker).toContainText('请选择项目成员');
        });

        test('Picker multiple values submit separately and support pointer and keyboard removal', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'multiple', theme);
            const picker = canvas.locator('.picker-select');
            await expect(picker.locator('.picker-multi-selection')).toHaveCount(2);
            await picker.click();
            await canvas.locator('.pick-pop').getByText('王宁 · 测试', {exact: true}).click();
            await expect(page.locator('#control-value')).toHaveValue('linyue,chenchen,wangning');
            await expect(canvas.locator('select[name="owner[]"]')).toHaveValues(['linyue', 'chenchen', 'wangning']);
            expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()]))
                .toEqual([['owner[]', 'linyue'], ['owner[]', 'chenchen'], ['owner[]', 'wangning']]);
            await picker.locator('.picker-deselect-btn[data-value="chenchen"]').click();
            await expect(page.locator('#control-value')).toHaveValue('linyue,wangning');
            const search = picker.getByPlaceholder('搜索姓名或部门', {exact: true});
            await search.press('Backspace');
            await expect(page.locator('#control-value')).toHaveValue('linyue');
            await search.press('Escape');
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
        });

        for (const state of [{variant: 'disabled', property: 'disabled'}, {variant: 'read-only', property: 'readonly'}]) {
            test(`Picker ${state.variant} blocks changes and remounts cleanly when enabled`, async ({page}) => {
                const canvas = await openStory(page, 'picker', state.variant, theme);
                const picker = canvas.locator('.picker-select');
                await expect(picker).toHaveClass(new RegExp(`\\b${state.property}\\b`));
                await picker.click({force: true});
                await expect(canvas.locator('.pick-pop')).toHaveCount(0);
                await expect(canvas.locator('input[name="owner"]')).toHaveValue('chenchen');
                if (state.property === 'disabled') {
                    await expect(picker.locator('.picker-deselect-btn')).toBeDisabled();
                } else {
                    await expect(picker.locator('.picker-deselect-btn')).toHaveCount(0);
                }
                expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()]))
                    .toEqual(state.property === 'disabled' ? [] : [['owner', 'chenchen']]);
                await page.locator(`#control-${state.property}`).focus();
                await page.keyboard.press('Space');
                await expect(picker).not.toHaveClass(new RegExp(`\\b${state.property}\\b`));
                await picker.click();
                await canvas.locator('.pick-pop').getByText('王宁 · 测试', {exact: true}).click();
                await expect(page.locator('#control-value')).toHaveValue('wangning');
            });
        }

        test('Picker searches, rejects disabled members and selects a filtered result by keyboard', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'single', theme);
            await canvas.locator('.picker-select').click();
            const search = canvas.getByPlaceholder('搜索姓名或部门', {exact: true});
            const pop = canvas.locator('.pick-pop');
            await search.fill('不存在的成员');
            await expect(pop.getByText('无匹配选项', {exact: true})).toBeVisible();
            await search.fill('support');
            const unavailable = pop.getByText('何雨 · 客户支持（休假中）', {exact: true});
            await expect(unavailable).toBeVisible();
            await unavailable.click({force: true});
            await expect(canvas.locator('input[name="owner"]')).toHaveValue('');
            await expect(pop).toBeVisible();
            await search.fill('研发');
            await expect(pop.getByText('陈晨 · 研发', {exact: true})).toBeVisible();
            await expect(unavailable).toHaveCount(0);
            await expect(pop.locator('.active')).toContainText('陈晨 · 研发');
            for (const key of ['ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowUp']) {
                await search.press(key);
                await expect(pop.locator('.active')).toContainText('陈晨 · 研发');
                await expect(canvas.locator('input[name="owner"]')).toHaveValue('');
            }
            await search.press('Enter');
            await expect(page.locator('#control-value')).toHaveValue('chenchen');
            await expect(pop).toHaveCount(0);
        });

        test('Picker navigates multiple available members with arrow keys and Enter', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'single', theme);
            await canvas.locator('.picker-select').click();
            const search = canvas.getByPlaceholder('搜索姓名或部门', {exact: true});
            await expect(canvas.locator('.pick-pop .active')).toContainText('林悦 · 产品');
            await search.press('ArrowDown');
            await expect(canvas.locator('.pick-pop .active')).toContainText('陈晨 · 研发');
            await search.press('Enter');
            await expect(page.locator('#control-value')).toHaveValue('chenchen');
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
        });

        test('Picker empty data shows its hint and never invents a selection', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'empty', theme);
            await canvas.locator('.picker-select').click();
            await expect(canvas.getByText('暂无可选成员', {exact: true})).toBeVisible();
            await canvas.getByPlaceholder('搜索姓名或部门', {exact: true}).press('ArrowDown');
            await canvas.getByPlaceholder('搜索姓名或部门', {exact: true}).press('ArrowUp');
            await canvas.getByPlaceholder('搜索姓名或部门', {exact: true}).press('Enter');
            await expect(canvas.locator('input[name="owner"]')).toHaveValue('');
            await expect(page.locator('#control-value')).toHaveValue('');
        });

        test('Picker releases its open body popup when switching stories', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'single', theme);
            await canvas.locator('.picker-select').click();
            await expect(canvas.locator('.pick-pop')).toBeVisible();
            await switchToLabel(page);
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
            await expect(canvas.locator('input[name="owner"]')).toHaveCount(0);
        });

        test('Picker keeps long labels and its popup within a phone viewport', async ({page}) => {
            await openPhone(page, 'picker', 'long-labels', theme);
            const picker = page.locator('.picker-select');
            const selection = picker.locator('.picker-single-selection');
            await expect(selection).toBeVisible();
            await expect(selection).toHaveAttribute('title', (await selection.textContent())!);
            expect(await selection.evaluate(node => node.scrollWidth > node.clientWidth)).toBe(true);
            await picker.click();
            await expect(page.locator('.pick-pop')).toBeVisible();
            const bounds = await page.locator('.pick-pop').boundingBox();
            expect(bounds!.x).toBeGreaterThanOrEqual(0);
            expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390);
            expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
        });
    });
}
