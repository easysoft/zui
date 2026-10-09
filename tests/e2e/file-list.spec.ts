import {expect, test} from '@playwright/test';

test('renders headings, inferred icons and custom tags in the playground', async ({page}) => {
    await page.goto('/file-list/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page.locator('#fileListWithIcons [z-key="79939"] .icon-file-pdf')).toBeVisible();
    const list = page.locator('#fileListTags');
    await expect(list.locator('[z-type="heading"] .item-title')).toHaveText('共享附件');
    await expect(list.locator('.file-list-tags .label.primary-pale')).toHaveText('使用文档');
    await expect(list.locator('.file-list-tags strong')).toHaveText('课程资料');
    await expect(list.locator('.file-list-tags .label').last()).toHaveText('资料');
    expect(await list.locator('.primary-pale').evaluate(element => getComputedStyle(element).color))
        .not.toBe(await list.locator('.label').last().evaluate(element => getComputedStyle(element).color));
});

test('keeps tagged files and keyboard actions usable in every layout on a narrow screen', async ({page}) => {
    await page.goto('/file-list/');
    await page.locator('#libPage.is-loaded').waitFor();
    const list = page.locator('#fileListTags');
    for (const width of [1280, 375]) {
        await page.setViewportSize({width, height: 900});
        for (const mode of ['list', 'cards', 'cards-inline', 'grid'] as const) {
            await page.evaluate(async (mode) => {
                const modulePath = '/lib/file-list/src/main.ts';
                const {FileList} = await import(modulePath) as typeof import('@zui/file-list');
                FileList.get('#fileListTags')!.render({
                    mode,
                    heading: 'Tagged files',
                    multiline: mode === 'grid',
                    renderTag: undefined,
                    items: [{
                        id: 'tags', title: 'Long file name with extension.PDF', size: 1024, pathname: '', addedBy: '', addedDate: '',
                        tags: ['Release, candidate A', 'VeryLongTagWithoutBreaksForNarrowLayouts'],
                    }],
                    fileActions: () => [{text: 'Open', onClick() {document.querySelector('#fileListTags')!.setAttribute('data-opened', mode);}}],
                });
                document.querySelector('#fileListTags')!.removeAttribute('data-opened');
            }, mode);
            await expect(list.locator('.file-list-tags .label')).toHaveCount(2);
            expect(await list.evaluate(element => element.scrollWidth <= element.clientWidth + 1), `${mode} at ${width}px`).toBe(true);
            const tags = await list.locator('.file-list-tags .label').all();
            for (const tag of tags) {
                expect(await tag.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
            }
            await list.getByRole('button', {name: 'Open'}).focus();
            await page.keyboard.press('Enter');
            await expect(list).toHaveAttribute('data-opened', mode);
        }
    }
});

test('positions thumbnail previews and keeps them proportional and inside the viewport', async ({page}) => {
    await page.goto('/file-list/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async () => {
        const modulePath = '/lib/file-list/src/main.ts';
        const {FileList} = await import(modulePath) as typeof import('@zui/file-list');
        const list = FileList.get('#fileListThumbnails')!;
        list.render({
            thumbnail: true,
            thumbnailPreview: {maxWidth: 320, maxHeight: 240},
            items: [{
                id: 'portrait', title: 'Portrait.svg', extension: 'svg', size: 1024, pathname: '', addedBy: '', addedDate: '',
                thumbnail: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="900"><rect width="100%" height="100%" fill="#2474eb"/></svg>')}`,
            }],
        });
        list.element.style.cssText = 'position:fixed;left:50%;top:35%;width:60px;z-index:1';
    });

    const thumbnail = page.locator('#fileListThumbnails .avatar-img');
    const preview = page.locator('.file-list-thumbnail-preview');
    const image = preview.locator('img');
    await thumbnail.hover();
    await expect(image).toHaveCSS('display', 'block');
    await expect(image).toHaveCSS('width', '80px');
    await expect(image).toHaveCSS('height', '240px');
    await expect(thumbnail).toHaveAttribute('data-pop-placement', 'top');
    const initialThumbnailBox = (await thumbnail.boundingBox())!;
    const initialPreviewBox = (await preview.boundingBox())!;
    expect(initialPreviewBox.y + initialPreviewBox.height).toBeLessThan(initialThumbnailBox.y);
    expect(initialPreviewBox.x).toBeCloseTo(initialThumbnailBox.x, 0);

    await page.evaluate(async () => {
        const modulePath = '/lib/file-list/src/main.ts';
        const {FileList} = await import(modulePath) as typeof import('@zui/file-list');
        FileList.get('#fileListThumbnails')!.render({
            thumbnailPreview: {maxWidth: 320, maxHeight: 240, placement: 'bottom-end'},
        });
    });
    await expect(thumbnail).toHaveAttribute('data-pop-placement', 'bottom');
    const updatedPreviewBox = (await preview.boundingBox())!;
    expect(updatedPreviewBox.y).toBeGreaterThan(initialThumbnailBox.y + initialThumbnailBox.height);
    expect(updatedPreviewBox.x + updatedPreviewBox.width).toBeCloseTo(initialThumbnailBox.x + initialThumbnailBox.width, 0);

    await page.evaluate(async () => {
        const modulePath = '/lib/file-list/src/main.ts';
        const {FileList} = await import(modulePath) as typeof import('@zui/file-list');
        const list = FileList.get('#fileListThumbnails')!;
        list.element.style.cssText = 'position:fixed;right:8px;bottom:8px;width:60px;z-index:1';
        list.render({thumbnailPreview: {maxWidth: 320, maxHeight: 240, placement: 'right'}});
    });
    await thumbnail.hover();
    await expect(thumbnail).toHaveAttribute('data-pop-placement', 'left');
    await preview.hover();
    await expect(preview).toBeVisible();

    await page.evaluate(async () => {
        const modulePath = '/lib/file-list/src/main.ts';
        const {FileList} = await import(modulePath) as typeof import('@zui/file-list');
        FileList.get('#fileListThumbnails')!.render({
            thumbnail: {src: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="100%" height="100%" fill="#2474eb"/></svg>')}`},
        });
    });
    await thumbnail.hover();
    await expect(image).toHaveCSS('width', '320px');
    await expect(image).toHaveCSS('height', '160px');
    await page.setViewportSize({width: 180, height: 160});
    // Follow the moved thumbnail, even when the resized preview overlaps it.
    const resizedThumbnailBox = (await thumbnail.boundingBox())!;
    await page.mouse.move(resizedThumbnailBox.x + resizedThumbnailBox.width / 2, resizedThumbnailBox.y + resizedThumbnailBox.height / 2);
    await preview.hover();
    await expect.poll(async () => {
        const box = await preview.boundingBox();
        return !!box && box.x >= 0 && box.y >= 0 && box.x + box.width <= 180 && box.y + box.height <= 160;
    }).toBe(true);
    const box = await image.boundingBox();
    expect(box!.height / box!.width).toBeCloseTo(0.5, 2);
    await page.keyboard.press('Escape');
    await expect(preview).toHaveCount(0);
});
