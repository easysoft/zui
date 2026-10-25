import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test as base} from '@playwright/test';

import type {Page} from '@playwright/test';

type StoryEntry = {id: string; title: string; name: string; type: string; importPath: string};
const index = JSON.parse(readFileSync(Path.join(process.env.STORYBOOK_OUTPUT_DIR ?? 'dist/storybook', 'index.json'), 'utf8')) as {entries: Record<string, StoryEntry>};
export const stories = Object.values(index.entries).filter(entry => entry.type === 'story');

if (!stories.length) {
    throw new Error('Storybook index contains no stories. Build Storybook with the same --extension selection and check library-root *.stories.ts(x).');
}

export const test = base.extend({
    page: async ({page}, use) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('console', (message) => {
            if (message.type() === 'error') {
                errors.push(`Console: ${message.text()}`);
            }
        });
        page.on('response', (response) => {
            if (response.status() >= 400) {
                errors.push(`${response.status()}: ${response.url()}`);
            }
        });
        await use(page);
        expect(errors, 'No browser errors or failed resources').toEqual([]);
    },
});

export {expect};

export function storyId(lib: string, variant: string) {
    const story = stories.find(entry => entry.importPath.startsWith(`./lib/${lib}/`) && entry.id.endsWith(`--${variant}`));
    if (!story) {
        throw new Error(`Missing Storybook scene: ${lib}/${variant}`);
    }
    return story.id;
}

export async function openPreview(page: Page, lib: string, variant: string, theme: 'light' | 'dark') {
    const id = storyId(lib, variant);
    await page.goto(`./iframe.html?id=${encodeURIComponent(id)}&viewMode=story&globals=theme:${theme}`);
    await expect(page).toHaveURL(new RegExp(`id=${encodeURIComponent(id)}&`));
    await expect(page).toHaveTitle(id);
    await expect(page.locator('#storybook-root')).toBeVisible({timeout: 30_000});
    await expect(page.locator('#storybook-root')).not.toBeEmpty();
    await expect(page.locator('.sb-errordisplay:visible, vite-error-overlay')).toHaveCount(0);
    await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
    await page.evaluate(() => document.fonts.ready);
}

export async function openStory(page: Page, lib: string, variant: string, theme?: 'light' | 'dark') {
    await page.goto(`./?path=/story/${encodeURIComponent(storyId(lib, variant))}${theme ? `&globals=theme:${theme}` : ''}`);
    const canvas = page.frameLocator('#storybook-preview-iframe');
    await expect(canvas.locator('#storybook-root')).toBeVisible({timeout: 30_000});
    await expect(canvas.locator('.sb-errordisplay:visible, vite-error-overlay')).toHaveCount(0);
    await page.getByRole('tab', {name: /^Controls/}).click();
    return canvas;
}

export async function switchToLabel(page: Page) {
    const canvas = page.frameLocator('#storybook-preview-iframe');
    // Keep the iframe alive so a reload cannot hide a failed unmount cleanup.
    await canvas.locator('body').evaluate(body => body.dataset.cleanupProbe = 'same-document');
    const link = page.getByRole('link', {name: '外观与尺寸', exact: true});
    if (!await link.isVisible()) {
        await page.getByRole('button', {name: 'Label 标签', exact: true}).click();
    }
    await link.click();
    await expect(canvas.locator('.label')).toBeVisible();
    await expect(canvas.locator('body')).toHaveAttribute('data-cleanup-probe', 'same-document');
}
