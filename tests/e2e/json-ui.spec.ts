import {expect, test} from '@playwright/test';

test('edits JSON UI, dispatches registered actions, and keeps valid content after invalid updates', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/json-ui/');
    await page.locator('#libPage.is-loaded').waitFor();
    const preview = page.locator('#jsonUIPreview');
    const source = page.locator('#jsonUISource');
    const apply = page.locator('#jsonUIApply');

    await expect(preview.locator('#jsonUISave')).toBeVisible();
    await expect(preview.locator('#jsonUISave')).toHaveClass(/\bbtn\b/);
    await expect(preview.locator('#jsonUINativeButton')).not.toHaveClass(/\bbtn\b/);
    await preview.locator('#jsonUISave').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#jsonUIEvents')).toContainText('saveProfile');

    await source.fill(JSON.stringify({component: 'MissingJsonUIComponent'}));
    await apply.click();
    await expect(page.locator('#jsonUIErrors')).toContainText('component');
    await expect(preview.locator('#jsonUISave')).toBeVisible();

    await source.fill(JSON.stringify({tag: 'p', children: '更新后的内容'}));
    await apply.click();
    await expect(preview).toHaveText('更新后的内容');
    await expect(preview.locator('#jsonUISave')).toHaveCount(0);
    expect(errors).toEqual([]);
});

test('requires HTML authorization and cleans event handlers and command links when enabled', async ({page}) => {
    await page.goto('/json-ui/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page.locator('#jsonUISave')).toBeVisible();
    await page.locator('#jsonUISource').fill(JSON.stringify({
        html: '<p id="html-message">HTML 已加载</p><img src="/missing-json-ui-image" onerror="window.__jsonUIUnsafe = true"><a href="#!window~alert" zui-command="window~alert">链接</a><script>window.__jsonUIUnsafe = true</script>',
    }));
    await page.locator('#jsonUIApply').click();
    await expect(page.locator('#jsonUIErrors')).toContainText('html');
    await expect(page.locator('#jsonUISave')).toBeVisible();

    await page.locator('#jsonUIAllowHTML').check();
    await page.locator('#jsonUIApply').click();
    const preview = page.locator('#jsonUIPreview');
    await expect(preview.getByText('HTML 已加载')).toBeVisible();
    await expect(preview.locator('[onerror], [zui-command], script')).toHaveCount(0);
    await expect(preview.locator('a')).not.toHaveAttribute('href', /#!/);
    expect(await page.evaluate(() => Reflect.get(window, '__jsonUIUnsafe'))).toBeUndefined();
});

test('validates asynchronously loaded JSON and binds its events through the same action map', async ({page}) => {
    await page.route('**/json-ui-e2e-content.json', route => route.fulfill({json: {
        tag: 'section',
        children: [{
            component: 'Button',
            props: {text: '异步保存'},
            events: {onClick: 'saveProfile'},
        }],
    }}));
    await page.goto('/json-ui/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page.locator('#jsonUISave')).toBeVisible();
    await page.locator('#jsonUISource').fill(JSON.stringify({
        fetcher: '/json-ui-e2e-content.json',
        type: 'custom',
        loadingContent: {tag: 'span', children: '加载中'},
    }));
    await page.locator('#jsonUIApply').click();
    await page.locator('#jsonUIPreview').getByRole('button', {name: '异步保存'}).click();
    await expect(page.locator('#jsonUIEvents')).toContainText('saveProfile');
    await expect(page.locator('#jsonUIErrors')).toBeEmpty();
});
