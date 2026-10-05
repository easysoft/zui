import {expect, test} from '@playwright/test';

test('UploadImgs adds selected images without an onAdd override', async ({page}) => {
    await page.goto('lib/components/upload-imgs/');
    await page.waitForFunction(() => 'zui' in window);
    const image = await page.evaluate(() => {
        const {UploadImgs} = (window as unknown as {
            zui: {UploadImgs: new (element: HTMLElement, options: {name: string}) => unknown};
        }).zui;
        const element = document.createElement('div');
        element.id = 'uploadImgsDefaultCallback';
        document.querySelector('.vp-doc')!.prepend(element);
        new UploadImgs(element, {name: 'defaultCallbackImage'});

        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 2;
        canvas.getContext('2d')!.fillRect(0, 0, 2, 2);
        return canvas.toDataURL('image/png');
    });
    const upload = page.locator('#uploadImgsDefaultCallback');
    await upload.locator('input[type="file"]').setInputFiles({
        name: 'selected.png',
        mimeType: 'image/png',
        buffer: Buffer.from(image.split(',')[1], 'base64'),
    });
    await expect(upload.locator('.file-name')).toHaveText('selected.png');
    const preview = upload.locator('.img');
    await expect(preview).toHaveCount(1);
    expect(await preview.evaluate(async (element) => {
        const image = new Image();
        image.src = getComputedStyle(element).backgroundImage.slice(5, -2);
        await image.decode();
        return image.naturalWidth;
    })).toBe(2);
});
