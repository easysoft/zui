// @vitest-environment jsdom

import {describe, expect, it, vi} from 'vitest';
import {Component} from '@zui/core/src/component/component';
import {Tabs} from '@zui/tabs/src/vanilla/tabs';

let fixtureId = 0;

function createTabsFixture(options?: {active?: boolean}) {
    fixtureId += 1;
    const id = fixtureId;
    const root = document.createElement('div');
    root.className = 'tabs';
    root.innerHTML = `
        <ul class="nav">
            <li><a class="${options?.active === false ? '' : 'active'}" data-toggle="tab" href="#pane-${id}-1">One</a></li>
            <li><a data-toggle="tab" data-target="#pane-${id}-2" data-name="second">Two</a></li>
            <li><a zui-toggle="tab" zui-toggle-tab="{target: '#pane-${id}-3'}">Three</a></li>
            <li><a data-toggle="tab">Missing</a></li>
            <li><a data-toggle="tab" href="#pane-${id}-missing">Unknown</a></li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane ${options?.active === false ? '' : 'active in'}" id="pane-${id}-1">One pane</div>
            <div class="tab-pane" id="pane-${id}-2">Two pane</div>
            <div class="tab-pane" id="pane-${id}-3">Three pane</div>
        </div>
    `;
    document.body.appendChild(root);
    const nav = root.querySelector<HTMLElement>('.nav')!;
    const links = [...nav.querySelectorAll<HTMLAnchorElement>('a')];
    const panes = [...root.querySelectorAll<HTMLElement>('.tab-pane')];
    return {root, nav, links, panes, tabs: new Tabs(nav)};
}

describe('Tabs', () => {
    it('activates href and data-target panes and emits show before shown', async () => {
        const {nav, links, panes, tabs} = createTabsFixture();
        const events: string[] = [];
        panes[1].addEventListener('show', () => events.push('pane:show'));
        panes[1].addEventListener('shown', () => events.push('pane:shown'));
        nav.addEventListener('show', () => events.push('tabs:show'));
        nav.addEventListener('shown', () => events.push('tabs:shown'));

        tabs.active(links[1]);

        expect(links[0].classList.contains('active')).toBe(false);
        expect(links[1].classList.contains('active')).toBe(true);
        expect(panes[0].classList.contains('active')).toBe(false);
        expect(panes[1].classList.contains('active')).toBe(true);
        expect(panes[1].classList.contains('in')).toBe(false);
        expect(events).toEqual(['pane:show', 'tabs:show']);

        await vi.advanceTimersByTimeAsync(10);

        expect(panes[1].classList.contains('in')).toBe(true);
        expect(events).toEqual(['pane:show', 'tabs:show', 'pane:shown', 'tabs:shown']);
    });

    it('resolves declarative zui-toggle-tab target options', async () => {
        const {links, panes, tabs} = createTabsFixture();

        tabs.active(links[2]);
        await vi.advanceTimersByTimeAsync(10);

        expect(links[2].classList.contains('active')).toBe(true);
        expect(panes[2].classList.contains('active')).toBe(true);
        expect(panes[2].classList.contains('in')).toBe(true);
    });

    it('selects the first tab when no selector or active item is available', () => {
        const {links, panes, tabs} = createTabsFixture({active: false});

        tabs.active();

        expect(links[0].classList.contains('active')).toBe(true);
        expect(panes[0].classList.contains('active')).toBe(true);
    });

    it('does not disturb the current selection when a target is missing or invalid', () => {
        const {links, panes, tabs} = createTabsFixture();

        tabs.active(links[3]);
        expect(links[0].classList.contains('active')).toBe(true);
        expect(panes[0].classList.contains('active')).toBe(true);

        tabs.active(links[4]);
        expect(links[0].classList.contains('active')).toBe(true);
        expect(panes[0].classList.contains('active')).toBe(true);
    });

    it('cancels the previous shown transition when switching rapidly', async () => {
        const {nav, links, panes, tabs} = createTabsFixture();
        const shown = vi.fn();
        nav.addEventListener('shown', shown);

        tabs.active(links[1]);
        await vi.advanceTimersByTimeAsync(5);
        tabs.active(links[2]);
        await vi.advanceTimersByTimeAsync(10);

        expect(shown).toHaveBeenCalledOnce();
        expect(panes[1].classList.contains('in')).toBe(false);
        expect(panes[2].classList.contains('in')).toBe(true);
    });

    it('cancels delayed shown events when destroyed', async () => {
        const {nav, links, panes, tabs} = createTabsFixture();
        const shown = vi.fn();
        nav.addEventListener('shown', shown);

        tabs.active(links[1]);
        tabs.destroy();
        await vi.advanceTimersByTimeAsync(10);

        expect(shown).not.toHaveBeenCalled();
        expect(panes[1].classList.contains('in')).toBe(false);
        expect(Tabs.get(nav)).toBeUndefined();
    });

    it('toggle handler ensures an instance on the nearest nav', () => {
        const {nav, links} = createTabsFixture();
        const existing = Tabs.get(nav)!;
        existing.destroy();

        const handler = Tabs.toggle!.handler!;
        handler.call(Component, links[1], {}, 'click', new MouseEvent('click'));

        const tabs = Tabs.get(nav);
        expect(tabs).toBeInstanceOf(Tabs);
        expect(links[1].classList.contains('active')).toBe(true);
    });
});
