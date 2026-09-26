import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/file-selector/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async () => {
        const modulePath = '/lib/icons/src/main.ts';
        await import(modulePath);
    });
});

test('preserves custom items, rename and delete form fields, and disabled controls', async ({page}) => {
    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        const selector = FileSelector.get('#fileSelectorExample1')!;
        selector.render({
            fileIcons: {txt: 'file-text', default: 'file'},
            itemProps(file) {
                if (file !== selector.$!.getFile(file.id)) {
                    throw new Error('itemProps must receive the original selector file');
                }
                return {className: 'custom-file-item', title: `Custom ${file.name}`};
            },
        });
    });

    const selector = page.locator('#fileSelectorExample1');
    const first = selector.locator('[z-id="1"]');
    await expect(selector.locator('.file-list')).toBeVisible();
    await expect(first).toContainClass('custom-file-item');
    await expect(first.locator('.item-title')).toHaveText('Custom file1.txt');
    await expect(first.locator('.item-subtitle')).toHaveText('1.0KB');
    await expect(first.locator('.item-avatar .icon-file-text')).toBeVisible();
    await first.locator('[data-rename-file]').click();
    await expect(first.locator('input')).toBeFocused();
    await first.locator('input').fill('renamed.txt');
    await first.locator('.file-selector-rename .btn').first().click();
    await expect(first.locator('.item-title')).toHaveText('Custom renamed.txt');
    await expect(selector.locator('input[name="renameFiles[1]"]')).toHaveValue('renamed.txt');

    await first.locator('[data-rename-file]').click();
    await first.locator('input').fill('cancelled.txt');
    await first.locator('.file-selector-rename .btn').last().click();
    await expect(first.locator('.item-title')).toHaveText('Custom renamed.txt');
    await first.locator('[data-remove-file]').click();
    await expect(first).toHaveCount(0);
    await expect(selector.locator('input[name="deleteFiles[1]"]')).toHaveValue('1');
    await expect(selector.locator('input[name="renameFiles[1]"]')).toHaveCount(0);

    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        FileSelector.get('#fileSelectorExample1')!.render({disabled: true});
    });
    await expect(selector.locator('[data-rename-file],[data-remove-file]')).toHaveCount(0);
    await expect(selector.locator('input[type="file"]').first()).toBeDisabled();
});

test('shares thumbnail URLs across renders and releases them on rename, reset, removal and destroy', async ({page}) => {
    const urls = await page.evaluateHandle(() => {
        const created: string[] = [];
        const revoked: string[] = [];
        const create = URL.createObjectURL;
        const revoke = URL.revokeObjectURL;
        URL.createObjectURL = (file) => {
            const url = create(file);
            created.push(url);
            return url;
        };
        URL.revokeObjectURL = (url) => {
            revoked.push(url);
            revoke(url);
        };
        return {created, revoked};
    });
    const selector = page.locator('#fileSelectorExample2');
    await selector.locator('input[type="file"]').first().setInputFiles({
        name: 'preview.png',
        mimeType: 'image/png',
        buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==', 'base64'),
    });
    const image = selector.locator('.item-avatar img');
    await expect(image).toHaveAttribute('src', /^blob:/);
    const firstURL = await image.getAttribute('src');
    await selector.locator('[data-rename-file]').click();
    await selector.locator('.file-selector-rename-input').fill('renamed.png');
    expect(await urls.evaluate(value => value.created)).toEqual([firstURL]);
    await selector.locator('.file-selector-rename .btn').first().click();
    await expect(selector.locator('.item-title')).toHaveText('renamed.png');
    await expect.poll(() => urls.evaluate(value => value.revoked)).toEqual([firstURL]);
    expect(await selector.locator('input[name="files[]"]').evaluate((input: HTMLInputElement) => input.files![0].name)).toBe('renamed.png');

    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        FileSelector.get('#fileSelectorExample2')!.render({thumbnail: false, removeConfirm: ''});
    });
    await expect(image).toHaveCount(0);
    await expect(selector.locator('.item-avatar .icon-file')).toBeVisible();
    await expect.poll(() => urls.evaluate(value => value.revoked.length)).toBe(2);

    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        const selector = FileSelector.get('#fileSelectorExample2')!;
        selector.render({thumbnail: true});
        selector.$!.setValue(Array.from(selector.$!.files));
    });
    await expect(image).toHaveAttribute('src', /^blob:/);
    await expect.poll(() => urls.evaluate(value => value.created.length)).toBe(3);

    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        FileSelector.get('#fileSelectorExample2')!.$!.setFiles([
            new File(['<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"/>'], 'reset.svg', {type: 'image/svg+xml'}),
        ]);
    });
    await expect(selector.locator('.item-title')).toHaveText('reset.svg');
    await expect.poll(() => urls.evaluate(value => value.revoked.length)).toBe(3);
    await selector.locator('[data-remove-file]').click();
    await expect(selector.locator('.file-selector-list')).toBeHidden();
    expect(await selector.locator('input[name="files[]"]').evaluate((input: HTMLInputElement) => input.files!.length)).toBe(0);
    await expect.poll(() => urls.evaluate(value => value.revoked.length)).toBe(4);

    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        FileSelector.get('#fileSelectorExample2')!.$!.setFiles([new File(['image'], 'last.png', {type: 'image/png'})]);
    });
    await expect.poll(() => urls.evaluate(value => value.created.length)).toBe(5);
    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {FileSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        FileSelector.get('#fileSelectorExample2')!.destroy();
    });
    await expect.poll(() => urls.evaluate(value => value.revoked.length)).toBe(5);
    expect(await urls.evaluate(value => value.revoked)).toEqual(await urls.evaluate(value => value.created));
});

test('keeps image grid dimensions, drag and drop, and rename on blur', async ({page}) => {
    await page.evaluate(async () => {
        const modulePath = '/lib/file-selector/src/main.ts';
        const {ImageSelector} = await import(modulePath) as typeof import('@zui/file-selector');
        ImageSelector.get('#imageSelectorExample')!.render({gridWidth: '160px', gridHeight: 188, gridGap: 0, removeConfirm: ''});
    });
    const selector = page.locator('#imageSelectorExample');
    const grid = selector.locator('.file-selector-grid');
    await grid.evaluate((element) => {
        const data = new DataTransfer();
        data.items.add(new File(['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>'], 'dropped.svg', {type: 'image/svg+xml'}));
        data.items.add(new File(['skip'], 'skip.txt', {type: 'text/plain'}));
        element.dispatchEvent(new DragEvent('drop', {bubbles: true, dataTransfer: data}));
    });
    const item = grid.locator('.file-selector-grid-item');
    await expect(item).toHaveCount(1);
    await expect(item).toHaveCSS('width', '160px');
    await expect(item).toHaveCSS('height', '188px');
    await expect(grid).toHaveCSS('gap', '0px');
    await expect(grid.locator('.file-selector-grid-btn')).toHaveCSS('width', '160px');
    await expect(item.locator('.avatar-img')).toBeVisible();
    await item.locator('[data-rename-file]').click();
    await item.locator('input').fill('renamed.svg');
    await item.locator('input').press('Tab');
    await expect(item.locator('.item-title')).toHaveText('renamed.svg');
    await item.locator('[data-remove-file]').click();
    await expect(item).toHaveCount(0);
    await expect(grid.locator('.file-selector-grid-btn')).toBeVisible();
});
