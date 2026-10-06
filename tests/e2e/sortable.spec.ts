import {expect, test} from '@playwright/test';

import type {Sortable} from '@zui/sortable';

type CallbackState = {
    instance: Sortable;
    data: {id: string; value: string}[];
    ended: {oldIndex?: number; newIndex?: number; from: string; to: string; id: string; order: (string | null)[]}[];
    images: {id: string; empty: boolean; x: number; y: number}[];
};
type CallbackWindow = {sortableCallbacks: CallbackState};

for (const mode of ['unset', 'true', 'false', 'element'] as const) {
    test(`Sortable forwards native drag callbacks with dragShadow=${mode}`, async ({page, baseURL}) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        // Let Vite finish dependency optimization before opening the isolated fixture.
        await page.goto('/sortable/');
        await page.locator('#libPage.is-loaded').waitFor();
        const url = new URL('__sortable_callbacks__.html', baseURL).href;
        await page.route(url, route => route.fulfill({
            contentType: 'text/html',
            body: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Sortable callbacks</title>
                <style>
                    #callbackList {width: 300px; margin: 24px; padding: 0; list-style: none;}
                    #callbackList li {height: 40px; padding: 8px; border: 1px solid gray; box-sizing: border-box;}
                    #customDragImage {width: 120px; height: 40px; margin: 24px; background: lightgray;}
                </style></head><body>
                <ul id="callbackList"><li data-id="first">First item</li><li data-id="second">Second item</li><li data-id="third">Third item</li></ul>
                <div id="customDragImage">Custom drag image</div>
                </body></html>`,
        }));
        await page.goto(url);
        const initialized = await page.evaluate(async ({mode, sortablePath, corePath}) => {
            const {Sortable} = await import(sortablePath) as typeof import('@zui/sortable');
            const {registerLib} = await import(corePath) as typeof import('@zui/core');
            registerLib('sortablejs', {src: '/lib/sortable/public/sortable.min.js', check: 'Sortable'});
            const data: CallbackState['data'] = [];
            const ended: CallbackState['ended'] = [];
            const images: CallbackState['images'] = [];
            const nativeSetDragImage = DataTransfer.prototype.setDragImage;
            DataTransfer.prototype.setDragImage = function (image, x, y) {
                images.push({id: image.id, empty: image.classList.contains('sortable-empty-shadow'), x, y});
                nativeSetDragImage.call(this, image, x, y);
            };
            const dragOptions = mode === 'unset' ? {} : {dragShadow: mode === 'element' ? document.getElementById('customDragImage')! : mode === 'true'};
            const instance = new Sortable('#callbackList', {
                ...dragOptions,
                draggable: 'li',
                animation: 0,
                setData(transfer, item) {
                    transfer.setData('text/plain', item.dataset.id!);
                    data.push({id: item.dataset.id!, value: transfer.getData('text/plain')});
                },
                onEnd(event) {
                    ended.push({
                        oldIndex: event.oldIndex,
                        newIndex: event.newIndex,
                        from: event.from.id,
                        to: event.to.id,
                        id: event.item.dataset.id!,
                        order: Array.from(event.to.children, item => item.getAttribute('data-id')),
                    });
                },
            });
            (window as unknown as CallbackWindow).sortableCallbacks = {instance, data, ended, images};
            await new Promise<void>(resolve => instance.on('inited', () => resolve()));
            return !!instance.module;
        }, {mode, sortablePath: '/lib/sortable/src/main.ts', corePath: '/lib/core/src/main.ts'});
        expect(initialized).toBe(true);

        const rows = page.locator('#callbackList > li');
        const first = (await rows.first().boundingBox())!;
        const target = (await rows.nth(1).boundingBox())!;
        await page.mouse.move(first.x + first.width / 2, first.y + first.height / 2);
        await page.mouse.down();
        await page.mouse.move(first.x + first.width / 2, target.y + target.height - 2, {steps: 15});
        await expect.poll(() => page.evaluate(() => (window as unknown as CallbackWindow).sortableCallbacks.data)).toEqual([{id: 'first', value: 'first'}]);
        await expect(page.locator('.sortable-empty-shadow')).toHaveCount(mode === 'false' ? 1 : 0);
        await page.mouse.up();

        await expect.poll(() => page.evaluate(() => (window as unknown as CallbackWindow).sortableCallbacks.ended)).toEqual([
            {oldIndex: 0, newIndex: 1, from: 'callbackList', to: 'callbackList', id: 'first', order: ['second', 'first', 'third']},
        ]);
        const images = await page.evaluate(() => (window as unknown as CallbackWindow).sortableCallbacks.images);
        expect(images).toEqual(mode === 'false'
            ? [{id: '', empty: true, x: 0, y: 0}]
            : mode === 'element' ? [{id: 'customDragImage', empty: false, x: 0, y: 0}] : []);
        await expect(page.locator('.sortable-empty-shadow')).toHaveCount(0);
        await page.evaluate(() => (window as unknown as CallbackWindow).sortableCallbacks.instance.destroy());
        await expect(page.locator('#customDragImage')).toBeVisible();
        expect(errors).toEqual([]);
    });
}
