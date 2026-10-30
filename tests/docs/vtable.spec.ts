import {expect, test} from '@playwright/test';

import type {VTable} from '@zui/vtable';

type DocsWindow = Window & {zui: {VTable: typeof VTable}};

test('runs the VTable core documentation examples from the built distribution', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('lib/components/vtable/');
    await expect(page.locator('h1')).toHaveText('高级表格');
    await expect(page.locator('a.edit-link-button')).toHaveAttribute('href', 'https://github.com/easysoft/zui/edit/main/lib/vtable/docs/lib/components/index.md');
    const basic = page.locator('#projectTable [role="table"]');
    await expect(basic.getByRole('cell', {name: '移动端工单', exact: true})).toBeVisible();
    await expect(basic.getByRole('cell', {name: '47%', exact: true})).toBeVisible();
    const empty = page.locator('#vtableDocsEmpty [role="table"]');
    await expect(empty).toContainText('暂无项目，请添加第一条记录。');
    await expect(empty.locator('[role="columnheader"] strong')).toHaveText('项目名称');
    await page.evaluate(() => {
        const table = (window as unknown as DocsWindow).zui.VTable.get('#projectTable')!;
        table.render({data: [{id: 'updated-project', name: '更新后的项目', owner: '周敏', progress: 99}]});
    });
    await expect(basic.getByRole('cell', {name: '更新后的项目', exact: true})).toBeVisible();
    await expect(basic.getByRole('cell', {name: '99%', exact: true})).toBeVisible();
    expect(errors).toEqual([]);
});
