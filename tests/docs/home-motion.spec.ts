import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

test('home glow follows the pointer without moving content and stops for reduced motion', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const card = page.locator('.home-feature-compose');
    await card.scrollIntoViewIfNeeded();
    const before = await card.boundingBox();
    const copyBefore = await card.locator('.home-feature-copy').boundingBox();
    const readGlow = () => card.locator('.home-feature-glow').evaluate(element => ({
        opacity: Number(getComputedStyle(element, '::before').opacity),
        background: getComputedStyle(element, '::before').backgroundImage,
        content: getComputedStyle(element, '::before').content,
    }));
    await page.mouse.move(before!.x + 40, before!.y + 2);
    await expect.poll(async () => (await readGlow()).opacity).toBeGreaterThan(0);
    const firstGlow = await readGlow();
    await page.mouse.move(before!.x + 160, before!.y + 2);
    await expect.poll(async () => (await readGlow()).background).not.toBe(firstGlow.background);
    expect(await card.boundingBox()).toEqual(before);
    expect(await card.locator('.home-feature-copy').boundingBox()).toEqual(copyBefore);
    const contrast = await new AxeBuilder({page}).include('.home-features').withRules(['color-contrast']).analyze();
    expect(contrast.violations).toEqual([]);
    expect(contrast.incomplete).toEqual([]);
    await page.mouse.move(0, 0);
    await expect.poll(async () => (await readGlow()).opacity).toBe(0);

    await card.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    await expect(card).toBeFocused();
    await expect(card).toHaveCSS('outline-style', 'solid');
    await page.emulateMedia({reducedMotion: 'reduce'});
    await page.mouse.move(before!.x + 40, before!.y + 2);
    expect((await readGlow()).content).toBe('none');
    expect(await page.locator('.home-hero').evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);
    await expect(page.getByRole('heading', {level: 1})).toBeVisible();
});

test('rapid theme selections preserve the latest preset and appearance without trapping input', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.emulateMedia({reducedMotion: 'no-preference', colorScheme: 'light'});
    await page.goto('./');
    const trigger = page.getByRole('button', {name: '主题', exact: true});
    await trigger.click();
    const panel = page.getByRole('region', {name: '主题设置'});
    // Dispatch one burst while the browser is still preparing the first snapshot.
    await panel.evaluate((element) => {
        (element.querySelector('[aria-label="应用森林绿主题"]') as HTMLButtonElement).click();
        (element.querySelector('[aria-label="应用落日橙主题"]') as HTMLButtonElement).click();
        const dark = [...element.querySelectorAll<HTMLButtonElement>('.theme-appearance button')].find(button => button.textContent?.trim() === '深色');
        dark!.click();
    });
    await expect(panel.getByRole('button', {name: '应用落日橙主题', exact: true})).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('html')).not.toHaveClass(/zui-theme-changing/);
    const saved = await page.evaluate(() => localStorage.getItem('zui-docs-theme-v1'));
    expect(JSON.parse(saved!).settings.colors.primary).toBe('#b85a24');
    await page.keyboard.press('Escape');
    await expect(panel).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem('zui-docs-theme-v1'))).toBe(saved);
    expect(errors).toEqual([]);
});

for (const fallback of ['unsupported', 'reduced-motion'] as const) {
    test(`theme changes work immediately with ${fallback}`, async ({page}) => {
        if (fallback === 'unsupported') {
            await page.addInitScript(() => Object.defineProperty(document, 'startViewTransition', {value: undefined}));
        }
        await page.emulateMedia({reducedMotion: fallback === 'reduced-motion' ? 'reduce' : 'no-preference', colorScheme: 'light'});
        await page.goto('./');
        await page.getByRole('button', {name: '主题', exact: true}).click();
        const panel = page.getByRole('region', {name: '主题设置'});
        await panel.getByRole('button', {name: '应用森林绿主题', exact: true}).click();
        await panel.getByRole('button', {name: '深色', exact: true}).click();
        await expect(page.locator('html')).toHaveClass(/dark/);
        await expect(page.locator('html')).not.toHaveClass(/zui-theme-changing/);
        await expect(panel.getByRole('button', {name: '应用森林绿主题', exact: true})).toHaveAttribute('aria-pressed', 'true');
        if (fallback === 'reduced-motion') {
            expect(await panel.evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);
        }
    });
}
