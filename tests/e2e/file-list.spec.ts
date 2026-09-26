import {expect, test} from '@playwright/test';

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
    await expect(thumbnail).toHaveAttribute('data-pop-placement', 'left');
    const initialThumbnailBox = (await thumbnail.boundingBox())!;
    const initialPreviewBox = (await preview.boundingBox())!;
    expect(initialPreviewBox.x + initialPreviewBox.width).toBeLessThan(initialThumbnailBox.x);
    expect(initialPreviewBox.y).toBeCloseTo(initialThumbnailBox.y, 0);

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
