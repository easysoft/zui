import {existsSync, readdirSync} from 'node:fs';
import {expect, test} from '@playwright/test';

const libraries = readdirSync('lib').filter(name => name !== 'icons'
    && existsSync(`lib/${name}/package.json`)
    && (existsSync(`lib/${name}/README.md`) || existsSync(`lib/${name}/dev.ts`)));

for (const name of libraries) {
    test(`${name} works without the optional icon font`, async ({page}) => {
        const iconRequests: string[] = [];
        const errors: string[] = [];
        await page.route(/\/lib\/icons\/|\/zenicon[^/]*\.(woff2?|ttf|eot|svg)/i, async (route) => {
            iconRequests.push(route.request().url());
            await route.abort();
        });
        page.on('pageerror', error => errors.push(error.message));
        const response = await page.goto(`/${name}/`);
        expect(response?.ok()).toBe(true);
        await page.locator('#libPage.is-loaded').waitFor();
        await page.evaluate(() => new Promise<void>((resolve) => {
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        }));
        expect(iconRequests).toEqual([]);
        expect(errors).toEqual([]);
        expect(await page.evaluate(() => [...document.fonts].filter(font => /zenicon/i.test(font.family)).length)).toBe(0);
        expect(await page.locator('#libPage .example-icon').evaluateAll(elements => elements
            .filter(element => getComputedStyle(element).maskImage === 'none')
            .map(element => element.className))).toEqual([]);
        // Calendar's event dot is drawn by its own CSS despite its legacy class name.
        expect(await page.locator('#libPage .icon').evaluateAll(elements => elements
            .flatMap(element => [...element.classList].filter(name => name.startsWith('icon-') && name !== 'icon-calendar-event-dot')))).toEqual([]);
    });
}

test('CSS and embedded SVG icons retain geometry, color and size without fonts', async ({page}) => {
    await page.goto('/css-icons/');
    await page.locator('#libPage.is-loaded').waitFor();
    for (const size of [14, 24]) {
        await page.locator('#libPage').evaluate((element, value) => element.style.fontSize = `${value}px`, size);
        for (const name of ['i-plus', 'i-minus', 'i-check', 'i-edit', 'i-trash', 'i-info', 'i-first-page', 'i-last-page', 'i-upload', 'i-download', 'i-copy', 'i-paste', 'i-menu', 'i-move']) {
            const icon = page.locator(`#libPage .${name}`).first();
            await expect(icon).toBeVisible();
            await expect(icon).toHaveCSS('width', `${size}px`);
            await expect(icon).toHaveCSS('height', `${size}px`);
            expect(await icon.evaluate(element => getComputedStyle(element, '::before').content)).toBe('""');
        }
    }
    await page.goto('/file-selector/');
    await page.locator('#libPage.is-loaded').waitFor();
    await expect(page.locator('#fileSelectorExample1 svg.file-icon').first()).toBeVisible();
    await expect(page.locator('#fileSelectorExample1 .i-edit').first()).toBeVisible();
    await expect(page.locator('#fileSelectorExample1 .i-trash').first()).toBeVisible();
});

test('native Upload preserves rename, cancel and delete actions with CSS icons', async ({page}) => {
    await page.goto('/upload/');
    await page.locator('#libPage.is-loaded').waitFor();
    const upload = page.locator('#example2');
    const item = upload.locator('.file-item').first();
    await expect(item.locator('svg')).toBeVisible();
    await expect(item.locator('.i-edit')).toBeVisible();
    await expect(item.locator('.i-trash')).toBeVisible();
    await item.locator('.file-rename').click();
    await item.locator('input').fill('renamed.txt');
    await item.locator('input').press('Enter');
    await expect(item.locator('.file-name')).toHaveText('renamed.txt');
    await item.locator('.file-rename').click();
    await item.locator('input').fill('cancelled.txt');
    await item.locator('input').press('Escape');
    await expect(item.locator('.file-name')).toHaveText('renamed.txt');
    await item.locator('.file-delete').click();
    await expect(item).toBeHidden();
    expect(await upload.locator('input[type="file"]').evaluate((input: HTMLInputElement) => [...input.files!].map(file => file.name))).toEqual(['file2.txt']);
});

test('CSS and SVG icons respect explicit font-size utilities', async ({page}) => {
    await page.goto('/css-icons/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(() => {
        const container = document.createElement('div');
        container.id = 'sizedIcons';
        container.style.fontSize = '14px';
        container.innerHTML = '<i class="icon i-info text-lg"></i><svg class="icon text-2xl" viewBox="0 0 24 24"><path d="M2 2h20v20H2z" /></svg><span class="text-lg">Reference</span>';
        document.querySelector('#libPage')!.prepend(container);
    });
    const expectedSize = await page.locator('#sizedIcons span').evaluate(element => getComputedStyle(element).fontSize);
    await expect(page.locator('#sizedIcons .i-info')).toHaveCSS('font-size', expectedSize);
    await expect(page.locator('#sizedIcons svg')).toHaveCSS('width', '24px');
});

test('copy feedback shows CSS icons above the hidden original content', async ({page}) => {
    await page.goto('/copy-btn/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async () => {
        const path = '/lib/copy-btn/src/main.ts';
        const {CopyBtn} = await import(path) as typeof import('@zui/copy-btn');
        Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {write: async () => undefined, writeText: async () => undefined}});
        const button = document.createElement('button');
        button.id = 'fontFreeCopy';
        button.className = 'btn';
        button.innerHTML = '<span>复制</span>';
        document.querySelector('#libPage')!.prepend(button);
        const copy = new CopyBtn(button, {copy: 'ready', mode: 'overlay', copiedIcon: {className: 'i-check'}, duration: 60_000});
        await copy.copy();
    });
    await expect(page.locator('#fontFreeCopy .copied-overlay.i-check')).toBeVisible();
    await expect(page.locator('#fontFreeCopy')).toHaveText('复制已复制');
    await expect(page.locator('#fontFreeCopy > span').first()).toBeHidden();
});

test('CSS shapes still inherit size when the optional legacy stylesheet is loaded later', async ({page}) => {
    await page.goto('/css-icons/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async () => {
        const path = '/lib/icons/src/main.ts';
        await import(path);
        const container = document.createElement('div');
        container.id = 'mixedIcons';
        container.style.fontSize = '24px';
        container.innerHTML = '<i class="icon i-check"></i><i class="icon spinner"></i><i class="icon close"></i><i class="icon icon-user mini-control"></i>';
        document.querySelector('#libPage')!.prepend(container);
    });
    for (const shape of ['i-check', 'spinner', 'close']) {
        await expect(page.locator(`#mixedIcons .${shape}`)).toHaveCSS('width', '24px');
        await expect(page.locator(`#mixedIcons .${shape}`)).not.toHaveCSS('font-family', /ZenIcon/i);
        await expect(page.locator(`#mixedIcons .${shape}`)).toHaveCSS('min-width', '0px', {pseudo: 'before'});
    }
    await expect(page.locator('#mixedIcons .icon-user')).toHaveCSS('font-family', /ZenIcon/i);
});
