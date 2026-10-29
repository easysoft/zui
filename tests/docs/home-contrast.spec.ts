import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

async function expectTextContrast(page: Page, selector: string) {
    const result = await new AxeBuilder({page}).include(selector).withRules(['color-contrast']).analyze();
    expect(result.violations, 'Text must meet the applicable contrast ratio').toEqual([]);
    expect(result.incomplete, 'Text contrast must be measurable').toEqual([]);
}

for (const colorScheme of ['light', 'dark'] as const) {
    for (const width of [390, 768, 1440]) {
        test(`ZUI-DOC-007: home action stays readable in ${colorScheme} at ${width}px`, async ({page}) => {
            await page.setViewportSize({width, height: 900});
            await page.emulateMedia({colorScheme});
            await page.goto('./');
            const actions = page.getByRole('link', {name: '快速开始', exact: true});
            await expect(actions).toHaveCount(2);
            const action = actions.first();
            await expect(action).toBeVisible();
            await expect(action).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
            const checkContrast = async () => {
                await action.evaluate(element => Promise.all(element.getAnimations().map(animation => animation.finished)));
                await expectTextContrast(page, '.VPButton.brand');
            };

            await checkContrast();
            await action.hover();
            await checkContrast();
            await page.mouse.down();
            await checkContrast();
            await page.mouse.move(0, 0);
            await page.mouse.up();

            await action.focus();
            await page.keyboard.press('Tab');
            await page.keyboard.press('Shift+Tab');
            await expect(action).toBeFocused();
            await expect(action).toHaveCSS('outline-style', 'solid');
            await expect(action).toHaveCSS('outline-width', '2px');
            await expect(action).toHaveCSS('outline-offset', '4px');
            await expect(action).not.toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)');
            await checkContrast();

            await page.keyboard.press('Enter');
            await expect(page).toHaveURL(/\/guide\/start\/$/);
        });

        test(`ZUI-DOC-008: home cards stay readable in ${colorScheme} at ${width}px`, async ({page}, testInfo) => {
            await page.setViewportSize({width, height: 900});
            await page.emulateMedia({colorScheme});
            await page.goto('./');
            const cards = page.locator('.home-feature');
            await expect(cards).toHaveCount(5);
            for (const card of await cards.all()) {
                await card.scrollIntoViewIfNeeded();
                await expect(card).toHaveAccessibleName(/\S/);
                await expect(card).toHaveAccessibleDescription(/\S/);
                await expect(card.locator('.home-art')).toHaveAttribute('aria-hidden', 'true');
            }
            await expectTextContrast(page, '.home-features');
            expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
            await page.locator('.VPFooter').scrollIntoViewIfNeeded();
            await expect(page.locator('.home-tagline')).toHaveAttribute('data-revealing', 'false');
            for (const line of await page.locator('.home-tagline-line').all()) {
                expect(await line.evaluate(element => element.getBoundingClientRect().height)).toBe(width < 640 ? 32 : 48);
            }
            await page.evaluate(() => window.scrollTo(0, 0));
            await expect(page.locator('.VPNavBar')).toHaveClass(/top/);
            await page.emulateMedia({colorScheme, reducedMotion: 'reduce'});
            for (const scene of await page.locator('.home-scene').all()) await expect(scene).toHaveCSS('opacity', '1');
            await page.screenshot({path: testInfo.outputPath(`home-${colorScheme}-${width}.png`), fullPage: true, animations: 'disabled'});
        });
    }
}

test('home feature links work under the deployment base and keep one keyboard stop per card', async ({page, baseURL}) => {
    const routes = ['utilities/', 'lib/components/', 'lib/components/dtable/', 'guide/config/theme.html', 'guide/customize/build.html'];
    await page.goto('./');
    const cards = page.locator('.home-feature');
    for (let index = 0; index < routes.length; index++) {
        const card = cards.nth(index);
        await card.focus();
        await page.keyboard.press('Tab');
        await page.keyboard.press('Shift+Tab');
        await expect(card).toBeFocused();
        await expect(card).toHaveCSS('outline-style', 'solid');
        await expect(card.locator('a, button, input, [tabindex]')).toHaveCount(0);
        await card.press('Enter');
        await expect(page).toHaveURL(new URL(routes[index], baseURL!).href);
        await expect(page.locator('.VPContent h1')).toBeVisible();
        await expect(page.locator('.VPContent .NotFound')).toHaveCount(0);
        await page.locator('.VPNavBarTitle a').click();
        await expect(page.locator('.home-features')).toBeVisible();
    }
});

test('home scenes play once, replay on hover and focus, and keep text geometry stable', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const card = page.locator('.home-feature-compose');
    await card.scrollIntoViewIfNeeded();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    const copy = card.locator('.home-feature-copy');
    const before = await copy.boundingBox();
    await expect(card).toHaveAttribute('data-motion', 'complete');
    await card.hover();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    expect(await copy.boundingBox()).toEqual(before);
    await card.focus();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    await expect(card).toHaveAttribute('data-motion', 'complete');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    await expect(card).toHaveAttribute('data-motion', 'playing');
    await page.locator('.home-start').scrollIntoViewIfNeeded();
    await expect(card).toHaveAttribute('data-motion', 'complete');
    await card.scrollIntoViewIfNeeded();
    await expect(card).toHaveAttribute('data-motion', 'complete');
});

test('reduced motion settles a running scene and reveals the full tagline', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.goto('./');
    const card = page.locator('.home-feature-compose');
    await card.scrollIntoViewIfNeeded();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    await page.emulateMedia({reducedMotion: 'reduce'});
    await expect(card).toHaveAttribute('data-motion', 'complete');
    await card.hover();
    await card.focus();
    await expect(card).toHaveAttribute('data-motion', 'complete');
    expect(await card.evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);
    await expect(page.locator('.home-tagline')).toHaveAttribute('data-revealing', 'false');
    for (const word of await page.locator('.home-word').all()) await expect(word).toHaveCSS('opacity', '1');
});

test('tagline completes at the bottom and navigation during playback leaves no stale scene', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('./');
    await page.locator('.VPFooter').scrollIntoViewIfNeeded();
    await expect(page.locator('.home-tagline')).toHaveAttribute('data-revealing', 'false');
    const card = page.locator('.home-feature-interact');
    await card.scrollIntoViewIfNeeded();
    await card.focus();
    await expect(card).toHaveAttribute('data-motion', 'playing');
    await card.press('Enter');
    await expect(page.locator('.home-landing')).toHaveCount(0);
    await page.locator('.VPNavBarTitle a').click();
    await expect(page.locator('.home-feature')).toHaveCount(5);
    await page.locator('.home-feature-compose').scrollIntoViewIfNeeded();
    await expect(page.locator('.home-feature-compose')).toHaveAttribute('data-motion', 'complete', {timeout: 7000});
    expect(errors).toEqual([]);
});

test('home remains complete with JavaScript disabled', async ({browser, baseURL}) => {
    const context = await browser.newContext({javaScriptEnabled: false});
    const page = await context.newPage();
    try {
        await page.goto(baseURL!);
        await expect(page.locator('h1')).toBeVisible();
        await expect(page).toHaveTitle('用熟悉的代码，搭建完整的界面 | ZUI 3');
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'ZUI 3 · 用熟悉的代码，搭建完整的界面');
        await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /主题定制与深色模式/);
        await expect(page.locator('.home-feature')).toHaveCount(5);
        await expect(page.locator('.home-tagline')).toHaveAttribute('data-revealing', 'false');
        await expect(page.locator('.home-scene').first()).toHaveCSS('opacity', '1');
        await page.getByRole('link', {name: '快速开始', exact: true}).first().click();
        await expect(page).toHaveURL(/\/guide\/start\/$/);
    } finally {
        await context.close();
    }
});

test('touch navigation works with reduced motion from the first render', async ({browser, baseURL}) => {
    const context = await browser.newContext({hasTouch: true, viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
    const page = await context.newPage();
    try {
        await page.goto(baseURL!);
        const card = page.locator('.home-feature-compose');
        await card.scrollIntoViewIfNeeded();
        await expect(card).toHaveAttribute('data-motion', 'idle');
        expect(await card.evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);
        await expect(page.locator('.home-tagline')).toHaveAttribute('data-revealing', 'false');
        await card.tap();
        await expect(page).toHaveURL(new URL('utilities/', baseURL!).href);
    } finally {
        await context.close();
    }
});

test('home follows the shared theme without its decorative scene changing preferences', async ({page}) => {
    await page.goto('./');
    await page.getByRole('button', {name: '主题', exact: true}).click();
    const panel = page.getByRole('region', {name: '主题设置'});
    await panel.getByRole('button', {name: /落日橙/}).click();
    await panel.getByRole('button', {name: '深色', exact: true}).click();
    await page.keyboard.press('Escape');
    const card = page.locator('.home-feature-theme');
    await card.scrollIntoViewIfNeeded();
    const settings = await page.evaluate(() => localStorage.getItem('zui-docs-theme-v1'));
    await expect(card).toHaveCSS('border-radius', '0px');
    const colors = await card.evaluate(element => ({
        card: getComputedStyle(element).backgroundColor,
        page: getComputedStyle(document.body).backgroundColor,
    }));
    expect(colors.card).toBe(colors.page);
    await expect(card).toHaveAttribute('data-motion', 'complete');
    await card.hover();
    await expect(card).toHaveAttribute('data-motion', 'complete');
    expect(await page.evaluate(() => localStorage.getItem('zui-docs-theme-v1'))).toBe(settings);
    await expect(page.locator('html')).toHaveClass(/dark/);
    await page.getByRole('link', {name: '快速开始', exact: true}).last().click();
    await expect(page.locator('.VPNavBar')).toBeVisible();
    await expect(page.locator('html')).toHaveClass(/dark/);
});
