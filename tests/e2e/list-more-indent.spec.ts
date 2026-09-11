import {expect, test} from '@playwright/test';

type IndentFixture = {
    name: 'NestedList' | 'Menu' | 'Tree' | 'SearchTree';
    lib: 'list' | 'menu' | 'tree';
    indent?: number;
};

const fixtures: IndentFixture[] = [
    {name: 'NestedList', lib: 'list'},
    {name: 'Menu', lib: 'menu'},
    {name: 'Tree', lib: 'tree'},
    {name: 'SearchTree', lib: 'tree'},
    {name: 'Tree', lib: 'tree', indent: 24},
    {name: 'Tree', lib: 'tree', indent: 0},
    {name: 'SearchTree', lib: 'tree', indent: 24},
    {name: 'SearchTree', lib: 'tree', indent: 0},
];

for (const {name, lib, indent} of fixtures) {
    test(`${name} show-more rows follow three-level indentation (${indent ?? 'default'})`, async ({page}, testInfo) => {
        await page.goto('/list/');
        await page.locator('#libPage.is-loaded').waitFor();
        await page.evaluate(async ({corePath, componentPath, stylePath, name, indent}) => {
            const {h, render} = await import(corePath) as typeof import('@zui/core');
            const components = await import(componentPath) as Record<string, import('preact').ComponentType<import('@zui/list').NestedListProps>>;
            await import(stylePath);
            const host = document.createElement('div');
            host.id = 'list-more-indent-fixture';
            Object.assign(host.style, {position: 'fixed', top: '16px', left: '16px', width: '360px', background: 'white', zIndex: '10000'});
            document.body.append(host);
            const siblings = (prefix: string) => Array.from({length: 2}, (_, index) => ({id: `${prefix}-${index}`, text: `${prefix} ${index}`}));
            render(h(components[name], {
                ...(indent === undefined ? {} : {indent}),
                defaultNestedShow: true,
                maxVisibleItems: 1,
                showMoreStep: 1,
                showMoreText: 'More {count}',
                items: [
                    {id: 'parent', text: 'Parent', items: [
                        {id: 'child', text: 'Child', items: [{id: 'leaf', text: 'Leaf'}, ...siblings('Leaf sibling')]},
                        ...siblings('Child sibling'),
                    ]},
                    ...siblings('Root sibling'),
                ],
            }), host);
        }, {
            corePath: '/lib/core/src/main.ts',
            componentPath: `/lib/${lib}/src/main-react.ts`,
            stylePath: `/lib/${lib}/src/main.ts`,
            name,
            indent,
        });

        const fixture = page.locator('#list-more-indent-fixture');
        const lists = fixture.locator('[z-level]');
        await expect(lists).toHaveCount(3);
        for (const level of [0, 1, 2]) {
            const list = fixture.locator(`[z-level="${level}"]`);
            await expect(list.locator(':scope > [z-item]')).toHaveCount(1);
            await expect(list.locator(':scope > .list-show-more > button')).toHaveText('More 2');
        }

        const measurements = await lists.evaluateAll(elements => elements.map((element) => {
            const inner = element.querySelector<HTMLElement>(':scope > [z-item] > .listitem')!;
            const footer = element.querySelector<HTMLElement>(':scope > .list-show-more')!;
            const button = footer.querySelector<HTMLButtonElement>(':scope > button')!;
            const innerStyle = getComputedStyle(inner);
            const buttonStyle = getComputedStyle(button);
            const innerBox = inner.getBoundingClientRect();
            const footerBox = footer.getBoundingClientRect();
            const buttonBox = button.getBoundingClientRect();
            // Compare the flex content origin, avoiding different toggle/icon widths before the label.
            return {
                level: Number(element.getAttribute('z-level')),
                itemStart: innerBox.x + parseFloat(innerStyle.borderLeftWidth) + parseFloat(innerStyle.paddingLeft),
                footerStart: buttonBox.x + parseFloat(buttonStyle.borderLeftWidth) + parseFloat(buttonStyle.paddingLeft),
                itemPadding: parseFloat(innerStyle.paddingLeft),
                footerPadding: parseFloat(buttonStyle.paddingLeft),
                footerWidth: footerBox.width,
                buttonWidth: buttonBox.width,
                buttonOverflow: button.scrollWidth > button.clientWidth,
            };
        }));
        await testInfo.attach('nested-footer-indent', {body: JSON.stringify(measurements, null, 2), contentType: 'application/json'});
        for (const [index, measurement] of measurements.entries()) {
            expect(measurement.buttonWidth).toBeCloseTo(measurement.footerWidth, 1);
            expect(measurement.buttonOverflow).toBe(false);
            if (index) {
                const previous = measurements[index - 1];
                expect(measurement.footerStart - previous.footerStart).toBeCloseTo(measurement.itemStart - previous.itemStart, 1);
            }
            if (name === 'Tree' || name === 'SearchTree') {
                const expectedIndent = indent ?? (name === 'Tree' ? 12 : 20);
                expect(measurement.itemPadding).toBeCloseTo(measurement.level * expectedIndent, 1);
                expect(measurement.footerPadding).toBeCloseTo(measurement.level * expectedIndent, 1);
            }
        }

        const expectedCounts = [1, 1, 1];
        for (const level of [2, 1, 0]) {
            const list = fixture.locator(`[z-level="${level}"]`);
            await list.locator(':scope > .list-show-more > button').click();
            expectedCounts[level]++;
            for (const [otherLevel, count] of expectedCounts.entries()) {
                await expect(fixture.locator(`[z-level="${otherLevel}"] > [z-item]`)).toHaveCount(count);
            }
            await expect(list.locator(':scope > .list-show-more > button')).toHaveText('More 1');
        }
    });
}
