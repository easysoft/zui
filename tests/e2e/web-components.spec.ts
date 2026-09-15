import {expect, test} from '@playwright/test';

test('custom button preserves native keyboard and form behavior', async ({page}) => {
    await page.goto('/button/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async (modulePath) => {
        const {defineButton} = await import(modulePath);
        defineButton();
        document.body.innerHTML = `
            <form>
                <zui-button btn-type="submit" type="primary"><strong>Save</strong></zui-button>
                <output aria-live="polite">Waiting</output>
            </form>
        `;
        document.querySelector('form')!.addEventListener('submit', (event) => {
            event.preventDefault();
            document.querySelector('output')!.textContent = 'Submitted';
        });
    }, '/lib/button/src/main.ts');

    const button = page.getByRole('button', {name: 'Save'});
    await expect(button).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('output')).toHaveText('Submitted');
    await page.evaluate(() => {
        document.querySelector('zui-button')!.disabled = true;
    });
    await expect(button).toBeDisabled();
    await page.setViewportSize({width: 375, height: 667});
    await expect(button).toBeVisible();
});

test('light-DOM slots preserve nodes, form values and focus across updates', async ({page}) => {
    await page.goto('/core/');
    await page.locator('#libPage.is-loaded').waitFor();
    const example = page.locator('zui-slot-example');
    await expect(example.locator('header')).toHaveText('基本信息 · 内容插槽');
    await example.getByRole('button', {name: '已点击 0 次'}).click();
    await expect(example.getByRole('button', {name: '已点击 1 次'})).toBeVisible();

    await page.evaluate(async (modulePath) => {
        const {h, defineWebComponent, property} = await import(modulePath);
        defineWebComponent(({heading, children, actions, count}: {heading: unknown; children: unknown; actions: unknown; count: number}) => h('section', {'data-count': count},
            h('header', null, heading), h('main', null, children), h('footer', null, actions)), {
            tagName: 'test-browser-slots',
            properties: {count: property.number('count', 0)},
            slots: {'': 'children', heading: 'heading', actions: 'actions'},
        });
        document.body.innerHTML = '<form><test-browser-slots><b slot="heading">Heading</b><input name="note" aria-label="Note" value="Initial"><button slot="actions" type="button">Update</button></test-browser-slots></form>';
        const element = document.querySelector('test-browser-slots') as HTMLElement & {count: number};
        const input = element.querySelector('input')!;
        const action = element.querySelector('button')!;
        input.value = 'Before mount';
        action.addEventListener('click', () => {
            element.count++;
        });
        input.addEventListener('input', () => {
            element.dataset.edited = 'true';
        });
    }, '/lib/core/src/main.ts');

    const input = page.getByRole('textbox', {name: 'Note'});
    await expect(input).toHaveValue('Before mount');
    await input.fill('User input');
    await expect(page.locator('test-browser-slots')).toHaveAttribute('data-edited', 'true');
    await page.evaluate(() => {
        const element = document.querySelector('test-browser-slots') as HTMLElement & {count: number};
        element.count++;
    });
    await expect(page.locator('section')).toHaveAttribute('data-count', '1');
    await expect(input).toBeFocused();
    expect(await page.evaluate(() => new FormData(document.querySelector('form')!).get('note'))).toBe('User input');
    await page.keyboard.press('Tab');
    const action = page.getByRole('button', {name: 'Update'});
    await expect(action).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('section')).toHaveAttribute('data-count', '2');
    await expect(page.locator('main > slot')).toHaveCSS('display', 'contents');
    await page.setViewportSize({width: 375, height: 667});
    await expect(input).toBeVisible();
    await expect(action).toBeVisible();
});

test('custom pager changes pages through the keyboard and reports the current state', async ({page}) => {
    // Warm Vite dependencies, then use a fresh document with no Pager registration.
    await page.goto('/pager/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.goto('/button/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async ({vanillaPath, elementPath, mainPath}) => {
        const {Pager} = await import(vanillaPath);
        Pager.register();
        if (customElements.get('zui-pager') || Pager.WebComponent) {
            throw new Error('The native Pager entry must be independent of its custom element');
        }
        const {ZuiPagerElement} = await import(elementPath);
        const aggregate = await import(mainPath);
        if (customElements.get('zui-pager') !== ZuiPagerElement || aggregate.ZuiPagerElement !== ZuiPagerElement) {
            throw new Error('Pager entries must share the standalone element definition');
        }
        document.body.innerHTML = '<zui-pager rec-total="120" rec-per-page="20" aria-label="分页"></zui-pager><output></output>';
        document.querySelector('zui-pager')!.addEventListener('zui-change', (event) => {
            document.querySelector('output')!.textContent = String((event as CustomEvent).detail.page);
        });
    }, {vanillaPath: '/lib/pager/src/vanilla/index.ts', elementPath: '/lib/pager/src/web-component/index.ts', mainPath: '/lib/pager/src/main.ts'});
    await expect(page.locator('zui-pager')).toHaveCSS('display', 'block');
    await expect(page.locator('zui-pager > .zui-webc-mount')).toHaveCSS('display', 'contents');
    const second = page.getByRole('button', {name: '2', exact: true});
    await second.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('output')).toHaveText('2');
    await expect(page.locator('zui-pager')).toHaveAttribute('page', '2');
    await expect(second).toBeDisabled();
});
