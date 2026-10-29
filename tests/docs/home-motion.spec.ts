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

test('build beams lead to a completed artifact and settle without a loop', async ({page}, testInfo) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const card = page.locator('.home-feature-build');
    await card.scrollIntoViewIfNeeded();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    const frame = async (time: number) => card.evaluate((element, currentTime) => {
        for (const animation of element.getAnimations({subtree: true})) {
            animation.pause();
            animation.currentTime = currentTime;
        }
        const style = (selector: string) => getComputedStyle(element.querySelector(selector)!);
        return {
            firstBeam: Number(style('.build-beam-1').opacity),
            lastBeam: Number(style('.build-beam-3').opacity),
            progress: Number.parseFloat(style('.build-beam-1').strokeDashoffset),
            complete: Number(style('.build-result .home-wire-check').opacity),
        };
    }, time);
    const transfer = await frame(1200);
    expect(transfer.firstBeam).toBe(1);
    expect(transfer.lastBeam).toBe(0);
    expect(transfer.progress).toBeLessThan(0);
    expect(transfer.complete).toBe(0);
    await page.screenshot({path: testInfo.outputPath('build-beam-transfer.png')});
    const complete = await frame(2500);
    expect(complete.firstBeam).toBe(0);
    expect(complete.lastBeam).toBe(0);
    expect(complete.complete).toBe(1);
    await expect(card).toHaveAttribute('data-motion', 'complete');
    expect(await card.evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);

    await card.hover();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    await page.emulateMedia({reducedMotion: 'reduce'});
    await expect(card).toHaveAttribute('data-motion', 'complete');
    await expect(card.locator('.build-result .home-wire-check')).toHaveCSS('opacity', '1');
    await expect(card.locator('.build-beam').first()).toHaveCSS('opacity', '0');
});

test('quick start sheen runs once and preserves keyboard focus and navigation', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const action = page.getByRole('link', {name: '快速开始', exact: true}).first();
    const before = await action.boundingBox();
    const sheen = action.locator('.home-primary-sheen');
    await action.hover();
    await expect(action.locator('.vpi-arrow-right')).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 3, 0)');
    await sheen.evaluate(element => Promise.all(element.getAnimations({subtree: true}).map(animation => animation.finished)));
    expect(await sheen.evaluate(element => getComputedStyle(element, '::before').opacity)).toBe('0');
    expect(await sheen.evaluate(element => element.getAnimations({subtree: true}).filter(animation => animation.playState === 'running').length)).toBe(0);
    expect(await action.boundingBox()).toEqual(before);

    await page.mouse.move(0, 0);
    await action.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    await expect(action).toBeFocused();
    await expect.poll(() => action.evaluate(element => getComputedStyle(element, '::before').boxShadow)).toContain('3px');
    expect(await action.evaluate(element => getComputedStyle(element).overflow)).toBe('visible');
    await page.emulateMedia({reducedMotion: 'reduce'});
    expect(await action.evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);
    await expect(action.locator('.vpi-arrow-right')).toHaveCSS('transform', 'none');
    await action.press('Enter');
    await expect(page).toHaveURL(/\/guide\/start\/$/);
});
