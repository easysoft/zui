import {expect, openStory, storyId, test} from './fixtures';

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} Checkbox stories`, () => {
        test('synchronizes Controls and label clicks without feedback Actions', async ({page}) => {
            const canvas = await openStory(page, 'checkbox', 'playground', theme);
            const checkbox = canvas.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
            const control = page.locator('#control-checked');
            const label = canvas.locator('label[for="storybook-checkbox"]');
            await expect(checkbox).not.toBeChecked();
            await expect.poll(() => label.evaluate(node => getComputedStyle(node, '::after').opacity)).toBe('0');
            await control.selectOption({label: '已选'});
            await expect(checkbox).toBeChecked();
            await expect.poll(() => label.evaluate(node => getComputedStyle(node, '::after').opacity)).toBe('1');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('checkbox change', {exact: true})).toHaveCount(0);
            await label.click();
            await expect(checkbox).not.toBeChecked();
            await expect(checkbox).toBeFocused();
            await expect(page.getByText('checkbox change', {exact: true})).toHaveCount(1);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(control.locator('option:checked')).toHaveText('未选');
        });

        test('submits only checked values and supports keyboard focus order', async ({page}) => {
            const canvas = await openStory(page, 'checkbox', 'checked', theme);
            const checkbox = canvas.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
            const submit = canvas.getByRole('button', {name: '提交', exact: true});
            const form = canvas.locator('form');
            await expect(checkbox).toBeChecked();
            expect(await form.evaluate(node => [...new FormData(node as HTMLFormElement).entries()])).toEqual([['notifications', 'enabled']]);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await checkbox.focus();
            await page.keyboard.press('Tab');
            await expect(submit).toBeFocused();
            await page.keyboard.press('Enter');
            await expect(page.getByText('checkbox submit', {exact: true})).toHaveCount(1);
            await page.keyboard.press('Shift+Tab');
            await expect(checkbox).toBeFocused();
            await page.keyboard.press('Space');
            await expect(checkbox).not.toBeChecked();
            expect(await form.evaluate(node => [...new FormData(node as HTMLFormElement).entries()])).toEqual([]);
            await expect(page.getByText('checkbox change', {exact: true})).toHaveCount(1);
            await expect(canvas.locator('output')).toHaveText('当前状态：未选');
        });

        test('preserves indeterminate state through Controls and resolves it on Space', async ({page}) => {
            const canvas = await openStory(page, 'checkbox', 'indeterminate', theme);
            const checkbox = canvas.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
            const control = page.locator('#control-checked');
            const label = canvas.locator('label[for="storybook-checkbox"]');
            await expect(checkbox).toHaveJSProperty('indeterminate', true);
            await expect(checkbox).toHaveJSProperty('checked', false);
            await expect.poll(() => label.evaluate(node => getComputedStyle(node, '::after').opacity)).toBe('1');
            expect(await canvas.locator('form').evaluate(node => [...new FormData(node as HTMLFormElement).entries()])).toEqual([]);
            await control.selectOption({label: '未选'});
            await expect(checkbox).toHaveJSProperty('indeterminate', false);
            await expect.poll(() => label.evaluate(node => getComputedStyle(node, '::after').opacity)).toBe('0');
            await control.selectOption({label: '半选'});
            await expect(checkbox).toHaveJSProperty('indeterminate', true);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('checkbox change', {exact: true})).toHaveCount(0);
            await checkbox.focus();
            await page.keyboard.press('Space');
            await expect(checkbox).toBeChecked();
            await expect(checkbox).toHaveJSProperty('indeterminate', false);
            await expect(page.getByText('checkbox change', {exact: true})).toHaveCount(1);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(control.locator('option:checked')).toHaveText('已选');
        });

        test('disabled values cannot change or submit and recover through Controls', async ({page}) => {
            const canvas = await openStory(page, 'checkbox', 'disabled', theme);
            const checkbox = canvas.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
            const form = canvas.locator('form');
            await expect(checkbox).toBeDisabled();
            await expect(checkbox).toBeChecked();
            expect(await form.evaluate(node => [...new FormData(node as HTMLFormElement).entries()])).toEqual([]);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await checkbox.click({force: true});
            await expect(checkbox).toBeChecked();
            await expect(page.getByText('checkbox change', {exact: true})).toHaveCount(0);
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await expect(page.getByText('checkbox submit', {exact: true})).toHaveCount(1);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await page.locator('#control-disabled').focus();
            await page.keyboard.press('Space');
            await expect(checkbox).toBeEnabled();
            expect(await form.evaluate(node => [...new FormData(node as HTMLFormElement).entries()])).toEqual([['notifications', 'enabled']]);
            await canvas.locator('label[for="storybook-checkbox"]').click();
            await expect(checkbox).not.toBeChecked();
            await expect(page.locator('#control-checked option:checked')).toHaveText('未选');
        });

        test('switch appearance retains native checkbox semantics when changed in Controls', async ({page}) => {
            const canvas = await openStory(page, 'checkbox', 'switch', theme);
            const checkbox = canvas.getByRole('checkbox', {name: '接收项目更新通知', exact: true});
            await expect(canvas.locator('.switch')).toBeVisible();
            await expect(checkbox).not.toBeChecked();
            await checkbox.focus();
            await page.keyboard.press('Space');
            await expect(checkbox).toBeChecked();
            expect(await canvas.locator('form').evaluate(node => [...new FormData(node as HTMLFormElement).entries()])).toEqual([['notifications', 'enabled']]);
            await page.locator('#control-type').selectOption({label: 'checkbox'});
            await expect(canvas.locator('.switch')).toHaveCount(0);
            await expect(canvas.locator('.checkbox-primary')).toBeVisible();
            await expect(checkbox).toBeChecked();
            await expect(page.locator('#control-checked option:checked')).toHaveText('已选');
        });

        test('long labels wrap within a phone viewport and remain clickable', async ({page}) => {
            await page.setViewportSize({width: 390, height: 844});
            const id = storyId('checkbox', 'long-label');
            await page.goto(`./iframe.html?id=${encodeURIComponent(id)}&viewMode=story&globals=theme:${theme}`);
            await expect(page).toHaveTitle(id);
            await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
            const label = page.locator('label[for="storybook-checkbox"]');
            const checkbox = page.getByRole('checkbox', {name: '接收当前项目的需求变更、测试验收和版本发布通知，并同步通知负责跨部门协作的所有成员', exact: true});
            await expect(checkbox).toBeVisible();
            expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
            expect(await label.evaluate(node => node.getBoundingClientRect().height)).toBeGreaterThan(20);
            await label.click();
            await expect(checkbox).toBeChecked();
            await expect(checkbox).toBeFocused();
            await expect(page.locator('output')).toHaveText('当前状态：已选');
        });
    });
}
