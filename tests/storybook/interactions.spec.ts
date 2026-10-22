import {expect, openStory, storyId, switchToLabel, test} from './fixtures';

test('Button Controls update the preview and user clicks appear in Actions', async ({page}) => {
    const canvas = await openStory(page, 'button', 'preact');
    await page.locator('#control-text').fill('Storybook regression');
    const button = canvas.getByRole('button', {name: 'Storybook regression', exact: true});
    await expect(button).toBeVisible();
    await page.locator('#control-disabled').focus();
    await page.keyboard.press('Space');
    await expect(button).toBeDisabled();
    await page.keyboard.press('Space');
    await expect(button).toBeEnabled();
    await page.getByRole('tab', {name: 'Actions', exact: true}).click();
    await button.click();
    await expect(page.getByText('click', {exact: true})).toHaveCount(1);
});

test('Web Component form submits by click and keyboard without navigation', async ({page}) => {
    const canvas = await openStory(page, 'button', 'form');
    await canvas.getByRole('button', {name: '保存', exact: true}).click();
    await expect(canvas.locator('output')).toHaveText('已提交 1 次');
    await page.keyboard.press('Enter');
    await expect(canvas.locator('output')).toHaveText('已提交 2 次');
});

for (const variant of ['controlled', 'native', 'web-component']) {
    test(`Pager ${variant} synchronizes user changes and Controls`, async ({page}) => {
        const canvas = await openStory(page, 'pager', variant);
        await canvas.getByText('下一页', {exact: true}).click();
        await expect(page.locator('#control-page')).toHaveValue('2');
        await page.locator('#control-page').fill('4');
        await page.locator('#control-page').press('Tab');
        await expect(canvas.getByText('共 101 条 · 第 4/11 页')).toBeVisible();
    });
}

test('Dropdown opens by keyboard, expands nested items and cleans up on story switch', async ({page}) => {
    const canvas = await openStory(page, 'dropdown', 'nested');
    await canvas.getByRole('button', {name: '导出菜单', exact: true}).focus();
    await page.keyboard.press('Enter');
    await canvas.locator('[z-key-path="export"] .nested-toggle-icon').click();
    await expect(canvas.getByText('导出为 PDF', {exact: true})).toBeVisible();
    await switchToLabel(page);
    await expect(canvas.locator('.dropdown-menu')).toHaveCount(0);
});

test('Modal confirms, cancels, restores focus and releases an open dialog on unmount', async ({page}) => {
    const canvas = await openStory(page, 'modal', 'confirmation');
    const initialOverflow = await canvas.locator('body').evaluate(body => getComputedStyle(body).overflow);
    const trigger = canvas.getByRole('button', {name: '打开确认对话框', exact: true});
    await trigger.click();
    await expect(canvas.getByRole('dialog')).toBeVisible();
    await canvas.getByRole('button', {name: '确认', exact: true}).click();
    await expect(canvas.locator('output')).toHaveText('已确认');
    await expect(trigger).toBeFocused();
    await trigger.click();
    await page.keyboard.press('Escape');
    await expect(canvas.locator('output')).toHaveText('已取消');
    await expect(trigger).toBeFocused();
    await trigger.click();
    await expect(canvas.getByRole('dialog')).toBeVisible();
    await switchToLabel(page);
    await expect(canvas.locator('.modal')).toHaveCount(0);
    await expect(canvas.locator('body')).toHaveCSS('overflow', initialOverflow);
});

test('Tabs synchronize clicks and Controls while preserving the selected pane', async ({page}) => {
    const canvas = await openStory(page, 'tabs', 'fade');
    await canvas.getByRole('tab', {name: '动态', exact: true}).click();
    await expect(page.locator('#control-active')).toHaveValue('activity');
    await page.locator('#control-active').selectOption('settings');
    await expect(canvas.getByRole('tab', {name: '设置', exact: true})).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel', {name: '设置', exact: true})).toHaveText('管理项目的基本设置。');
});

test('the form remains usable in a narrow viewport', async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto(`./iframe.html?id=${encodeURIComponent(storyId('button', 'form'))}&viewMode=story`);
    await page.getByRole('button', {name: '保存', exact: true}).click();
    await expect(page.locator('output')).toHaveText('已提交 1 次');
    expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
});
