import {expect, test} from '@playwright/test';

import type {Page} from '@playwright/test';

const steps = ['上手引入', '样式组合', '复杂组件声明'];

function showcase(page: Page) {
    const root = page.locator('.home-showcase');
    const tabs = root.getByRole('tablist', {name: '示例'});
    return {root, tabs, tab: (name: string) => tabs.getByRole('tab', {name, exact: true})};
}

async function shortenSteps(page: Page) {
    await page.addStyleTag({content: '.home-showcase { --home-step-duration: 400ms !important; }'});
}

test('showcase tabs switch by click and keyboard with live code results', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'reduce'});
    await page.goto('./');
    const {root, tabs, tab} = showcase(page);
    await root.scrollIntoViewIfNeeded();
    await expect(tabs.getByRole('tab')).toHaveCount(3);
    await expect(tab('上手引入')).toHaveAttribute('aria-selected', 'true');
    await expect(tab('上手引入')).toHaveAccessibleDescription('一份 CSS，一份 JS');
    await expect(root.locator('.home-stage-panel[aria-hidden="false"]')).toHaveCount(1);

    const nav = page.getByRole('navigation', {name: '示例导航'});
    await expect(nav.locator('.nav-item')).toHaveCount(3);
    await nav.getByText('文档', {exact: true}).click();
    await expect(nav.locator('a.active')).toHaveText('文档');

    await tab('上手引入').focus();
    await page.keyboard.press('ArrowRight');
    await expect(tab('样式组合')).toBeFocused();
    await expect(tab('样式组合')).toHaveAttribute('aria-selected', 'true');
    await expect(tab('上手引入')).toHaveAttribute('tabindex', '-1');
    const compose = page.getByRole('tabpanel', {name: '样式组合'});
    const card = compose.locator('.home-playground-result > div');
    await expect(card).toHaveClass(/(^| )row( |$)/);
    await compose.getByRole('button', {name: 'col', exact: true}).click();
    await compose.getByRole('button', {name: 'special', exact: true}).click();
    await expect(compose.getByRole('button', {name: 'col', exact: true})).toHaveAttribute('aria-pressed', 'true');
    await expect(card).toHaveClass(/(^| )col( |$)/);
    await expect(card.locator('.avatar')).toHaveClass(/special/);
    const code = await compose.locator('code').textContent();
    expect(code).toContain('<div class="col items-center gap-4 p-5 canvas rounded-2xl shadow-xl">');
    expect(code).toContain('<button class="btn special" type="button">关注</button>');
    expect(await compose.locator('.home-playground-result').innerHTML()).toBe(code);

    await tab('样式组合').focus();
    await page.keyboard.press('End');
    await expect(tab('复杂组件声明')).toBeFocused();
    const declare = page.getByRole('tabpanel', {name: '复杂组件声明'});
    for (const name of ['picker', 'datepicker', 'colorpicker']) await expect(declare.locator(`[z-use-${name}]`)).toHaveCount(1);
    await expect(declare.locator('.picker-select-placeholder')).toHaveText('选择成员');
    await page.keyboard.press('ArrowRight');
    await expect(tab('上手引入')).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(tab('复杂组件声明')).toBeFocused();
});

test('showcase autoplays in order, pauses on hover and resumes after an idle period', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.clock.install();
    await page.goto('./');
    await shortenSteps(page);
    const {root, tabs, tab} = showcase(page);
    await root.scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);
    for (const name of [...steps.slice(1), steps[0]]) await expect(tab(name)).toHaveAttribute('aria-selected', 'true');
    await expect(tab('上手引入')).not.toBeFocused();

    await root.locator('.home-stage').hover();
    await expect(root).toHaveAttribute('data-playing', 'false');
    const current = tabs.locator('[aria-selected="true"]');
    const selected = await current.getAttribute('id');
    await page.waitForTimeout(800);
    await expect(current).toHaveAttribute('id', selected!);
    await page.mouse.move(0, 0);
    await expect(root).toHaveAttribute('data-playing', 'true');

    await tab('复杂组件声明').click();
    await page.mouse.move(0, 0);
    await expect(root).toHaveAttribute('data-playing', 'false');
    await page.clock.fastForward(14000);
    await expect(root).toHaveAttribute('data-playing', 'false');
    await page.clock.fastForward(1500);
    await expect(root).toHaveAttribute('data-playing', 'true');
    await expect(tab('上手引入')).toHaveAttribute('aria-selected', 'true');
});

test('showcase can be paused and keeps an open picker from rotating away', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.clock.install();
    await page.goto('./');
    await shortenSteps(page);
    const {root, tab} = showcase(page);
    await root.scrollIntoViewIfNeeded();
    const toggle = root.getByRole('button', {name: '暂停自动切换示例'});
    await toggle.click();
    await page.mouse.move(0, 0);
    await expect(root.getByRole('button', {name: '继续自动切换示例'})).toBeFocused();
    await expect(root).toHaveAttribute('data-playing', 'false');
    await page.waitForTimeout(800);
    await expect(tab('上手引入')).toHaveAttribute('aria-selected', 'true');

    await root.getByRole('button', {name: '继续自动切换示例'}).click();
    await page.mouse.move(0, 0);
    await expect(root).toHaveAttribute('data-playing', 'true');

    await tab('复杂组件声明').click();
    await root.locator('.home-stage-declare .picker-select').click();
    await expect(page.locator('.picker-menu')).toBeVisible();
    await page.mouse.move(0, 0);
    await page.clock.fastForward(31000);
    await expect(tab('复杂组件声明')).toHaveAttribute('aria-selected', 'true');
    await expect(root).toHaveAttribute('data-playing', 'false');
});

test('showcase stays still with reduced motion', async ({page}) => {
    await page.emulateMedia({reducedMotion: 'reduce'});
    await page.goto('./');
    await shortenSteps(page);
    const {root, tab} = showcase(page);
    await root.scrollIntoViewIfNeeded();
    await expect(root.locator('.home-step-progress')).toHaveCount(0);
    await expect(root.locator('.home-showcase-toggle')).toHaveCount(0);
    await page.waitForTimeout(800);
    await expect(tab('上手引入')).toHaveAttribute('aria-selected', 'true');
    await tab('样式组合').click();
    const panel = page.getByRole('tabpanel', {name: '样式组合'});
    expect(await panel.evaluate(element => element.getAnimations({subtree: true}).length)).toBe(0);
});

test('showcase shows every example in order without JavaScript', async ({browser, baseURL}) => {
    const context = await browser.newContext({javaScriptEnabled: false});
    const page = await context.newPage();
    try {
        await page.goto(baseURL!);
        const titles = page.locator('.home-stage-title');
        await expect(titles).toHaveCount(3);
        for (let index = 0; index < steps.length; index++) await expect(titles.nth(index)).toContainText(steps[index]);
        for (const panel of await page.locator('.home-stage-panel').all()) await expect(panel).toBeVisible();
        await expect(page.locator('.home-stage-compose .home-playground-result > div')).toHaveClass(/row/);
        await expect(page.locator('.home-stage-declare code')).toContainText('zui-create="datePicker"');
    } finally {
        await context.close();
    }
});
