import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/collapsible/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async ({corePath, collapsiblePath, formPath, formStylePath}) => {
        const {h, render} = await import(corePath) as typeof import('@zui/core');
        const {Collapsible} = await import(collapsiblePath) as typeof import('@zui/collapsible/react');
        const {FormBuilder} = await import(formPath) as typeof import('@zui/form-builder/react');
        await import(formStylePath);
        const host = document.createElement('div');
        host.id = 'collapsible-fixture';
        document.body.append(host);
        render(h('div', {}, [
            h(Collapsible, {
                attrs: {id: 'native-collapse'},
                title: 'Native section',
                bordered: true,
                header: [
                    h('a', {href: '#section-help'}, 'Help'),
                    h('label', {}, [h('input', {type: 'checkbox'}), 'Pin section']),
                ],
                actions: [{text: 'Action', onClick: () => {
                    host.dataset.action = 'clicked';
                }}],
                content: 'Native body',
                onClick: (event: MouseEvent) => {
                    host.dataset.prevented = String(event.defaultPrevented);
                    host.dataset.clicks = String(Number(host.dataset.clicks ?? 0) + 1);
                },
            }),
            h(Collapsible, {
                attrs: {id: 'button-collapse'},
                title: 'Button section',
                toggleOnClickHeader: false,
                content: 'Button body',
            }),
            h(Collapsible, {attrs: {id: 'outer-collapse'}, title: 'Outer section'},
                h(Collapsible, {attrs: {id: 'inner-collapse'}, title: 'Inner section'},
                    h('input', {'aria-label': 'Nested draft', defaultValue: 'Draft'}))),
            h(FormBuilder, {
                attrs: {id: 'collapsible-form'},
                schema: {type: 'object', properties: {
                    profile: {type: 'object', title: 'Profile group', properties: {name: {type: 'string', title: 'Name', defaultValue: 'Initial'}}},
                }},
            }),
        ]), host);
    }, {corePath: '/lib/core/src/main.ts', collapsiblePath: '/lib/collapsible/src/main-react.ts', formPath: '/lib/form-builder/src/main-react.ts', formStylePath: '/lib/form-builder/src/main.ts'});
});

test('uses native header activation and one keyboard-accessible button', async ({page}) => {
    const fixture = page.locator('#collapsible-fixture');
    const details = page.locator('#native-collapse');
    const button = details.locator(':scope > summary > .collapsible-toggle-btn');
    await details.locator('.collapsible-header-title').click();
    await expect(fixture).toHaveAttribute('data-prevented', 'false');
    await expect(details).not.toHaveAttribute('open');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(details.locator('summary')).toHaveAttribute('tabindex', '-1');

    await button.focus();
    await button.press('Enter');
    await expect(details).toHaveAttribute('open');
    await expect(button).toBeFocused();
    await expect(fixture).toHaveAttribute('data-clicks', '2');
    await button.press('Space');
    await expect(details).not.toHaveAttribute('open');
    await expect(fixture).toHaveAttribute('data-clicks', '3');

    const buttonsOnly = page.locator('#button-collapse');
    await buttonsOnly.locator('.collapsible-header-title').click();
    await expect(buttonsOnly).toHaveAttribute('open');
    await buttonsOnly.locator('.collapsible-toggle-btn').click();
    await expect(buttonsOnly).not.toHaveAttribute('open');
});

test('keeps interactive headers, nested sections and FormBuilder values independent', async ({page}) => {
    const native = page.locator('#native-collapse');
    await native.getByRole('link', {name: 'Help'}).click();
    await expect(page).toHaveURL(/#section-help$/);
    await native.getByLabel('Pin section').check();
    await expect(native.getByLabel('Pin section')).toBeChecked();
    await native.getByRole('button', {name: 'Action', exact: true}).click();
    await expect(page.locator('#collapsible-fixture')).toHaveAttribute('data-action', 'clicked');
    await expect(native).toHaveAttribute('open');

    const outer = page.locator('#outer-collapse');
    const inner = page.locator('#inner-collapse');
    await inner.getByLabel('Nested draft').fill('Edited draft');
    await inner.locator(':scope > summary .collapsible-toggle-btn').click();
    await expect(inner).not.toHaveAttribute('open');
    await expect(outer).toHaveAttribute('open');
    await outer.locator(':scope > summary .collapsible-toggle-btn').click();
    await outer.locator(':scope > summary .collapsible-toggle-btn').click();
    await expect(inner).not.toHaveAttribute('open');
    await inner.locator(':scope > summary .collapsible-toggle-btn').click();
    await expect(inner.getByLabel('Nested draft')).toHaveValue('Edited draft');

    const group = page.locator('#collapsible-form details.form-builder-collapsible');
    const input = group.getByLabel('Name');
    await input.fill('Retained name');
    await group.locator(':scope > summary .collapsible-header-title').click();
    await expect(group).not.toHaveAttribute('open');
    await expect(input).not.toBeVisible();
    await group.locator(':scope > summary .collapsible-toggle-btn').click();
    await expect(input).toBeVisible();
    await expect(input).toHaveValue('Retained name');
});

test('reuses details transitions and honors reduced motion without duplicate arrows', async ({page}) => {
    const details = page.locator('#native-collapse');
    const summary = details.locator(':scope > summary');
    await page.emulateMedia({reducedMotion: 'no-preference'});
    const styles = await details.evaluate(element => ({
        supported: CSS.supports('selector(::details-content)'),
        duration: getComputedStyle(element, '::details-content').transitionDuration,
        property: getComputedStyle(element, '::details-content').transitionProperty,
        arrow: getComputedStyle(element.querySelector('summary')!, '::before').display,
        border: getComputedStyle(element).borderTopWidth,
    }));
    expect(styles.arrow).toBe('none');
    expect(parseFloat(styles.border)).toBeGreaterThan(0);
    if (styles.supported) {
        expect(styles.duration).toBe('0.2s');
        expect(styles.property).toContain('block-size');
    }
    await summary.locator('.collapsible-header-title').click();
    await expect(details.getByText('Native body', {exact: true})).not.toBeVisible();
    await summary.locator('.collapsible-toggle-btn').click();
    await expect(details.getByText('Native body', {exact: true})).toBeVisible();

    await page.emulateMedia({reducedMotion: 'reduce'});
    if (styles.supported) {
        await expect.poll(() => details.evaluate(element => getComputedStyle(element, '::details-content').transitionDuration)).toBe('0s');
        await page.emulateMedia({reducedMotion: 'no-preference'});
        await details.evaluate(element => element.classList.add('no-transition'));
        await expect.poll(() => details.evaluate(element => getComputedStyle(element, '::details-content').transitionDuration)).toBe('0s');
    }
});
