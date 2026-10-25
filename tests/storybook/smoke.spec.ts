import Path from 'node:path';
import {normalizePath} from 'vite';
import {getStorybookFiles, getStorybookLibraries, rootPath} from '../../.storybook/libraries';
import {expect, stories, test} from './fixtures';

test('indexes every selected story file and serves the matching index', async ({request}) => {
    const files = (await getStorybookFiles(await getStorybookLibraries())).map((file) => {
        const relative = normalizePath(Path.relative(rootPath, file));
        return relative.startsWith('.') ? relative : `./${relative}`;
    }).sort();
    expect([...new Set(stories.map(story => story.importPath))].sort()).toEqual(files);
    const response = await request.get('./index.json');
    expect(response.ok()).toBe(true);
    const live = await response.json() as {entries: Record<string, {id: string; type: string}>};
    expect(Object.values(live.entries).filter(entry => entry.type === 'story').map(entry => entry.id).sort()).toEqual(stories.map(story => story.id).sort());
});

for (const story of stories) {
    for (const theme of ['light', 'dark']) {
        test(`renders ${story.title} / ${story.name} (${story.id}, ${theme})`, async ({page}) => {
            await page.goto(`./iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story&globals=theme:${theme}`);
            const root = page.locator('#storybook-root');
            await expect(root).toBeVisible({timeout: 30_000});
            await expect(root).not.toBeEmpty();
            await expect(page.locator('html')).toHaveCSS('color-scheme', theme);
            await expect(page.locator('.sb-errordisplay:visible, vite-error-overlay')).toHaveCount(0);
        });
    }
}
