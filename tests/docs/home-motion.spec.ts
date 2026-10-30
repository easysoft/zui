import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

test('home glass keeps its left edges aligned while following the pointer and resets on exit', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const backdrop = page.locator('.home-brand-backdrop');
    const layers = backdrop.locator('.home-glass-layer');
    const light = backdrop.locator('.home-glass-light').first();
    await expect(layers).toHaveCount(3);
    await expect(backdrop).toHaveAttribute('aria-hidden', 'true');
    await expect(backdrop).toHaveCSS('pointer-events', 'none');
    const transforms = () => backdrop.locator('.home-glass-stack, .home-glass-layer').evaluateAll(elements => elements.map(element => getComputedStyle(element).transform));
    const leftEdgeSpread = () => layers.evaluateAll((elements) => {
        const edges = elements.map((element) => {
            const points = [160, 760].map((top) => {
                const marker = document.createElement('span');
                marker.style.cssText = `position:absolute;left:0;top:${top}px;width:0;height:0;pointer-events:none`;
                element.append(marker);
                const {x, y} = marker.getBoundingClientRect();
                marker.remove();
                return {x, y};
            });
            const [a, b] = points;
            return a.x + (300 - a.y) * (b.x - a.x) / (b.y - a.y);
        });
        return Math.max(...edges) - Math.min(...edges);
    });
    expect(await leftEdgeSpread()).toBeLessThan(0.5);
    const initial = await transforms();
    const hero = page.locator('.home-hero');
    const before = await hero.boundingBox();
    const width = page.viewportSize()!.width;
    await page.mouse.move(width - 40, 240);
    await expect(light).toHaveCSS('opacity', '1');
    await expect.poll(transforms).not.toEqual(initial);
    expect(await leftEdgeSpread()).toBeLessThan(0.5);
    const reflections = () => backdrop.locator('.home-glass-light').evaluateAll(elements => elements.map(element => getComputedStyle(element).backgroundImage));
    const firstReflections = await reflections();
    expect(new Set(firstReflections).size, 'Each pane must respond to its own position and depth').toBe(3);
    await page.mouse.move(width - 220, 380);
    await expect.poll(async () => (await reflections()).every((reflection, index) => reflection !== firstReflections[index])).toBe(true);
    expect(await leftEdgeSpread()).toBeLessThan(0.5);
    expect(await hero.boundingBox()).toEqual(before);
    const drift = await backdrop.evaluate(element => Number.parseFloat(element.style.getPropertyValue('--home-drift-x')));
    expect(Math.abs(drift)).toBeLessThanOrEqual(12);

    await page.mouse.move(0, 0);
    await expect(light).toHaveCSS('opacity', '0');
    await expect.poll(transforms).toEqual(initial);
    await page.mouse.move(width - 40, 240);
    await expect(light).toHaveCSS('opacity', '1');
    await page.mouse.wheel(0, 160);
    await expect(light).toHaveCSS('opacity', '0');
    await expect.poll(transforms).toEqual(initial);

    await page.getByRole('link', {name: '快速开始', exact: true}).first().click();
    await expect(backdrop).toHaveCount(0);
    await page.locator('.VPNavBarTitle a').click();
    await expect(layers).toHaveCount(3);
    expect(errors).toEqual([]);
});

test('home glass settles for reduced motion and hides in forced colors', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const backdrop = page.locator('.home-brand-backdrop');
    await expect(backdrop.locator('.home-glass-layer')).toHaveCount(3);
    const transforms = () => backdrop.locator('.home-glass-stack, .home-glass-layer').evaluateAll(elements => elements.map(element => getComputedStyle(element).transform));
    const initial = await transforms();
    await page.mouse.move(1000, 240);
    await expect(backdrop.locator('.home-glass-light').first()).toHaveCSS('opacity', '1');
    await page.emulateMedia({reducedMotion: 'reduce'});
    await expect.poll(transforms).toEqual(initial);
    await page.mouse.move(800, 320);
    await expect(backdrop.locator('.home-glass-light').first()).toBeHidden();
    expect(await transforms()).toEqual(initial);
    await expect(page.getByRole('heading', {level: 1})).toBeVisible();
    await page.emulateMedia({forcedColors: 'active'});
    await expect(backdrop).toBeHidden();
});

test('touch screens keep a static glass backdrop without horizontal overflow', async ({browser, baseURL}) => {
    const context = await browser.newContext({hasTouch: true, isMobile: true, viewport: {width: 390, height: 844}});
    try {
        const page = await context.newPage();
        await page.goto(baseURL!);
        const backdrop = page.locator('.home-brand-backdrop');
        await expect(backdrop.locator('.home-glass-layer')).toHaveCount(3);
        await page.touchscreen.tap(380, 180);
        await expect(backdrop.locator('.home-glass-light').first()).toBeHidden();
        expect(await backdrop.getAttribute('style')).toBeNull();
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
        await expect(page.getByRole('link', {name: '快速开始', exact: true}).first()).toBeVisible();
    } finally {
        await context.close();
    }
});

test('home glow follows the pointer without moving content and stops for reduced motion', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const card = page.locator('.home-feature-compose');
    await card.scrollIntoViewIfNeeded();
    // Let the pending scroll event clear the previous glow before moving the pointer.
    await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
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
