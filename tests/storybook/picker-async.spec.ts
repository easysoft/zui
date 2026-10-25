import {expect, openStory, switchToLabel, test} from './fixtures';

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} asynchronous Picker stories`, () => {
        test('loads and searches members, exposes loading/empty results and submits a keyboard selection', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'async', theme);
            await canvas.locator('.picker-select').click();
            const pop = canvas.locator('.pick-pop');
            await expect(pop.locator('.menu-item')).toHaveCount(4);
            const search = canvas.getByPlaceholder('搜索姓名或部门', {exact: true});
            await search.fill('不存在');
            await expect(pop.getByText('正在加载...', {exact: true})).toBeVisible();
            await expect(pop.getByText('无匹配选项', {exact: true})).toBeVisible();
            await search.fill('研发');
            await expect(pop.getByText('正在加载...', {exact: true})).toBeVisible();
            await expect(pop.getByText('陈晨 · 研发', {exact: true})).toBeVisible();
            await expect(pop.locator('.menu-item')).toHaveCount(1);
            await search.press('ArrowDown');
            await search.press('ArrowDown');
            await search.press('Enter');
            await expect(page.locator('#control-value')).toHaveValue('chenchen');
            await expect(pop).toHaveCount(0);
            await expect(canvas.locator('.picker-single-selection')).toHaveText('陈晨 · 研发');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('picker request', {exact: true}).first()).toBeVisible();
            await expect(page.getByText('picker response', {exact: true}).first()).toBeVisible();
            await expect(page.getByText('picker change', {exact: true})).toHaveCount(1);
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await expect(page.getByText('picker submit', {exact: true})).toHaveCount(1);
            expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('owner'))).toBe('chenchen');
        });

        test('preserves selected labels and form values across successive remote filters', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'async', theme);
            await page.locator('#control-multiple').focus();
            await page.keyboard.press('Space');
            const picker = canvas.locator('.picker-select');
            await expect(picker).toHaveClass(/\bpicker-select-multi\b/);
            await picker.click();
            const pop = canvas.locator('.pick-pop');
            await pop.getByText('林悦 · 产品', {exact: true}).click();
            await pop.getByText('陈晨 · 研发', {exact: true}).click();
            const search = canvas.getByPlaceholder('搜索姓名或部门', {exact: true});
            for (const query of ['测试', 'support']) {
                await search.fill(query);
                await expect(pop.locator('.menu-item')).toHaveCount(1);
                await expect(pop.getByText(query === '测试' ? '王宁 · 测试' : '何雨 · 客户支持（休假中）', {exact: true})).toBeVisible();
                await expect(picker.locator('.picker-multi-selection .text')).toHaveText(['林悦 · 产品', '陈晨 · 研发']);
            }
            await expect(page.locator('#control-value')).toHaveValue('linyue,chenchen');
            expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).getAll('owner[]'))).toEqual(['linyue', 'chenchen']);
        });

        test('keeps a rapid deselection before Controls acknowledge the selected asynchronous item', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'async', theme);
            await page.locator('#control-multiple').focus();
            await page.keyboard.press('Space');
            const picker = canvas.locator('.picker-select');
            await expect(picker).toHaveClass(/\bpicker-select-multi\b/);
            await picker.click();
            const item = canvas.locator('.pick-pop').getByText('林悦 · 产品', {exact: true});
            await expect(item).toBeVisible();
            // Keep the manager's args round trip pending while the component handles both clicks.
            const selected = await item.evaluate(async (label) => {
                (label as HTMLElement).click();
                for (let step = 0; step < 20; step++) {
                    await Promise.resolve();
                }
                const text = document.querySelector('.picker-multi-selection .text')?.textContent;
                document.querySelector<HTMLButtonElement>('.picker-deselect-btn[data-value="linyue"]')!.click();
                return text;
            });
            expect(selected).toBe('林悦 · 产品');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('picker change', {exact: true})).toHaveCount(2);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(page.locator('#control-value')).toHaveValue('');
            await expect(picker.locator('.picker-multi-selection')).toHaveCount(0);
            expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).getAll('owner[]'))).toEqual(['']);
        });

        test('keeps an empty response unselected and reloads after Controls change the data source', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'async-empty', theme);
            await canvas.locator('.picker-select').click();
            const search = canvas.getByPlaceholder('搜索姓名或部门', {exact: true});
            await search.fill('产品');
            await expect(canvas.getByText('无匹配选项', {exact: true})).toBeVisible();
            await search.press('ArrowDown');
            await search.press('Enter');
            await expect(page.locator('#control-value')).toHaveValue('');
            await expect(canvas.locator('input[name="owner"]')).toHaveValue('');
            await page.locator('#control-response').selectOption('success');
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
            await canvas.locator('.picker-select').click();
            await canvas.locator('.pick-pop').getByText('王宁 · 测试', {exact: true}).click();
            await expect(page.locator('#control-value')).toHaveValue('wangning');
        });

        test('shows a failed request and recovers when the simulated source succeeds', async ({page}) => {
            const warnings: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'warning') warnings.push(message.text());
            });
            const canvas = await openStory(page, 'picker', 'async-failure', theme);
            await canvas.locator('.picker-select').click();
            await canvas.getByPlaceholder('搜索姓名或部门', {exact: true}).fill('研发');
            await expect(canvas.getByText('加载失败，请在 Controls 中切换返回结果重试', {exact: true})).toBeVisible();
            await expect.poll(() => warnings.some(message => message.includes('[ZUI] Picker: Failed to load items.'))).toBe(true);
            await expect(canvas.locator('input[name="owner"]')).toHaveValue('');
            await page.locator('#control-response').selectOption('success');
            await expect(canvas.locator('.pick-pop')).toHaveCount(0);
            await canvas.locator('.picker-select').click();
            await canvas.locator('.pick-pop').getByText('陈晨 · 研发', {exact: true}).click();
            await expect(page.locator('#control-value')).toHaveValue('chenchen');
            await expect(canvas.locator('.picker-single-selection')).toHaveText('陈晨 · 研发');
        });

        test('uses the latest search after a previous asynchronous response finishes', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'async', theme);
            await canvas.locator('.picker-select').click();
            const pop = canvas.locator('.pick-pop');
            await expect(pop.locator('.menu-item')).toHaveCount(4);
            await page.clock.install();
            const search = canvas.getByPlaceholder('搜索姓名或部门', {exact: true});
            await search.fill('研发');
            // Advance the input debounce and request delay while the 800 ms response is still pending.
            await page.clock.runFor(450);
            await search.fill('产品');
            await page.clock.runFor(2000);
            await expect(pop.locator('.menu-item')).toHaveCount(1);
            await expect(pop.getByText('林悦 · 产品', {exact: true})).toBeVisible();
            await expect(pop.getByText('陈晨 · 研发', {exact: true})).toHaveCount(0);
            await search.press('ArrowDown');
            await expect(pop.locator('.active')).toContainText('林悦 · 产品');
            await search.press('Enter');
            await expect(page.locator('#control-value')).toHaveValue('linyue');
        });

        test('cancels pending fixture work and releases the popup when switching stories', async ({page}) => {
            const canvas = await openStory(page, 'picker', 'async', theme);
            await canvas.locator('.picker-select').click();
            await expect(canvas.locator('.pick-pop .menu-item')).toHaveCount(4);
            await page.clock.install();
            await canvas.getByPlaceholder('搜索姓名或部门', {exact: true}).fill('不存在');
            await page.clock.runFor(450);
            await expect(canvas.getByText('正在加载...', {exact: true})).toBeVisible();
            await switchToLabel(page);
            await page.clock.runFor(2000);
            await expect(canvas.locator('.pick-pop, input[name="owner"]')).toHaveCount(0);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('picker response', {exact: true})).toHaveCount(0);
            await expect(page.getByText('picker change', {exact: true})).toHaveCount(0);
        });
    });
}
