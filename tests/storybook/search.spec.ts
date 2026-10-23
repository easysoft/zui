import {expect, openStory, storyId, switchToLabel, test} from './fixtures';

for (const theme of ['light', 'dark'] as const) {
    test.describe(`${theme} SearchBox stories`, () => {
        test('synchronizes Controls and debounced input while Enter and forms use the current draft', async ({page}) => {
            const canvas = await openStory(page, 'search-box', 'playground', theme);
            const input = canvas.getByRole('textbox', {name: '搜索项目', exact: true});
            await page.locator('#control-value').fill('初始项目');
            await expect(input).toHaveValue('初始项目');
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('search change', {exact: true})).toHaveCount(0);
            await page.clock.install();
            await input.fill('story');
            await input.pressSequentially('book');
            await expect(input).toHaveValue('storybook');
            await input.press('Enter');
            await expect(page.getByText('search enter', {exact: true})).toHaveCount(1);
            expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('query'))).toBe('storybook');
            await page.clock.runFor(600);
            await expect(page.getByText('search change', {exact: true})).toHaveCount(1);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(page.locator('#control-value')).toHaveValue('storybook');
            await expect(canvas.locator('output')).toHaveText('最近通知值：storybook');
            await canvas.getByRole('button', {name: '提交', exact: true}).click();
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('search submit', {exact: true})).toHaveCount(2);
        });

        for (const clear of ['button', 'Escape']) {
            test(`clears pending input using ${clear} without a late notification`, async ({page}) => {
                const canvas = await openStory(page, 'search-box', 'clearable', theme);
                const input = canvas.getByRole('textbox', {name: '搜索项目', exact: true});
                await page.getByRole('tab', {name: /^Actions/}).click();
                await page.clock.install();
                await input.fill('pending query');
                if (clear === 'button') {
                    await canvas.locator('.search-box .input-control-suffix button').click();
                } else {
                    await input.press('Escape');
                }
                await expect(input).toHaveValue('');
                await expect(input).toBeFocused();
                await expect(page.getByText('search clear', {exact: true})).toHaveCount(1);
                await expect(page.getByText('search change', {exact: true})).toHaveCount(1);
                await page.clock.runFor(1000);
                await expect(page.getByText('search change', {exact: true})).toHaveCount(1);
                await page.getByRole('tab', {name: /^Controls/}).click();
                await expect(page.locator('#control-value')).toHaveValue('');
                expect(await canvas.locator('form').evaluate(form => new FormData(form as HTMLFormElement).get('query'))).toBe('');
            });
        }

        for (const state of [{variant: 'disabled', property: 'disabled', value: '已停用项目'}, {variant: 'read-only', property: 'readonly', value: '只读项目'}]) {
            test(`${state.variant} preserves form semantics and recovers through Controls`, async ({page}) => {
                const canvas = await openStory(page, 'search-box', state.variant, theme);
                const input = canvas.getByRole('textbox', {name: '搜索项目', exact: true});
                const clear = canvas.locator('.search-box .input-control-suffix button');
                await expect(input).not.toBeEditable();
                await expect(clear).toBeDisabled();
                await clear.click({force: true});
                await expect(input).toHaveValue(state.value);
                if (state.property === 'readonly') {
                    await input.press('Escape');
                    await expect(input).toHaveValue(state.value);
                }
                expect(await canvas.locator('form').evaluate(form => [...new FormData(form as HTMLFormElement).entries()]))
                    .toEqual(state.property === 'disabled' ? [] : [['query', state.value]]);
                await page.getByRole('tab', {name: /^Actions/}).click();
                await expect(page.getByText('search clear', {exact: true})).toHaveCount(0);
                await expect(page.getByText('search change', {exact: true})).toHaveCount(0);
                await page.getByRole('tab', {name: /^Controls/}).click();
                await page.locator(`#control-${state.property}`).focus();
                await page.keyboard.press('Space');
                await expect(input).toBeEditable();
                await input.fill('恢复搜索');
                await expect(page.locator('#control-value')).toHaveValue('恢复搜索');
                await expect(input).toHaveValue('恢复搜索');
            });
        }

        test('reconfigures hotkeys without duplicate callbacks', async ({page}) => {
            const canvas = await openStory(page, 'search-box', 'clearable', theme);
            const input = canvas.getByRole('textbox', {name: '搜索项目', exact: true});
            const enabledInput = await input.elementHandle();
            await page.locator('#control-hotkeys').focus();
            await page.keyboard.press('Space');
            await expect.poll(() => enabledInput!.evaluate(element => element.isConnected)).toBe(false);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await input.press('Escape');
            await input.press('Enter');
            await expect(input).toHaveValue('ZUI 组件库');
            await expect(page.getByText('search clear', {exact: true})).toHaveCount(0);
            await expect(page.getByText('search enter', {exact: true})).toHaveCount(0);
            await page.getByRole('tab', {name: /^Controls/}).click();
            const disabledInput = await input.elementHandle();
            await page.locator('#control-hotkeys').focus();
            await page.keyboard.press('Space');
            await expect.poll(() => disabledInput!.evaluate(element => element.isConnected)).toBe(false);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await input.press('Enter');
            await input.press('Escape');
            await expect(input).toHaveValue('');
            await expect(page.getByText('search enter', {exact: true})).toHaveCount(1);
            await expect(page.getByText('search clear', {exact: true})).toHaveCount(1);
            await expect(page.getByText('search change', {exact: true})).toHaveCount(1);
        });

        test('notifies once after Chinese composition and suppresses composing hotkeys', async ({page}) => {
            const canvas = await openStory(page, 'search-box', 'playground', theme);
            const input = canvas.getByRole('textbox', {name: '搜索项目', exact: true});
            await page.getByRole('tab', {name: /^Actions/}).click();
            await page.clock.install();
            await input.evaluate((element: HTMLInputElement) => {
                element.dispatchEvent(new CompositionEvent('compositionstart', {bubbles: true}));
                element.value = 'zhong';
                element.dispatchEvent(new InputEvent('input', {bubbles: true, isComposing: true}));
            });
            await input.press('Enter');
            await page.clock.runFor(600);
            await expect(input).toHaveValue('zhong');
            await expect(page.getByText('search change', {exact: true})).toHaveCount(0);
            await expect(page.getByText('search enter', {exact: true})).toHaveCount(0);
            await input.evaluate((element: HTMLInputElement) => {
                element.value = '中';
                element.dispatchEvent(new CompositionEvent('compositionend', {bubbles: true, data: '中'}));
                element.dispatchEvent(new InputEvent('input', {bubbles: true}));
            });
            await page.clock.runFor(600);
            await expect(input).toHaveValue('中');
            await expect(page.getByText('search change', {exact: true})).toHaveCount(1);
            await page.getByRole('tab', {name: /^Controls/}).click();
            await expect(page.locator('#control-value')).toHaveValue('中');
        });

        test('cancels a pending notification when switching stories', async ({page}) => {
            const canvas = await openStory(page, 'search-box', 'playground', theme);
            await page.clock.install();
            await canvas.getByRole('textbox', {name: '搜索项目', exact: true}).fill('pending');
            await switchToLabel(page);
            await page.clock.runFor(1000);
            await expect(canvas.locator('.search-box')).toHaveCount(0);
            await page.getByRole('tab', {name: /^Actions/}).click();
            await expect(page.getByText('search change', {exact: true})).toHaveCount(0);
        });

        for (const variant of ['compact', 'long-value']) {
            test(`${variant} stays usable in a phone viewport`, async ({page}) => {
                await page.setViewportSize({width: 390, height: 844});
                const id = storyId('search-box', variant);
                await page.goto(`./iframe.html?id=${encodeURIComponent(id)}&viewMode=story&globals=theme:${theme}`);
                await expect(page).toHaveTitle(id);
                await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
                const input = page.getByRole('textbox', {name: '搜索项目', exact: true});
                if (variant === 'compact') {
                    await expect(page.locator('.search-box.compact')).toBeVisible();
                    await expect(input).toHaveClass(/\bsize-sm\b/);
                    await expect(input).toHaveCSS('height', '24px');
                    await expect(page.locator('.input-control-prefix')).toHaveCount(0);
                    await expect(page.locator('.input-control-suffix .magnifier')).toBeVisible();
                    await input.fill('项目');
                    await expect(page.locator('output')).toHaveText('最近通知值：项目');
                } else {
                    await expect(input).toHaveValue('跨部门协作项目：需求评审、设计交付、研发联调、测试验收与版本发布');
                }
                expect(await page.locator('body').evaluate(body => body.scrollWidth <= innerWidth)).toBe(true);
                await page.locator('.search-box .input-control-suffix button').click();
                await expect(input).toHaveValue('');
                await expect(input).toBeFocused();
                await expect(page.locator('output')).toHaveText('最近通知值：空');
                if (variant === 'compact') {
                    await expect(page.locator('.input-control-suffix .magnifier')).toBeVisible();
                }
            });
        }
    });
}
