import {beforeEach, describe, expect, it, vi} from 'vitest';
import {h} from 'preact';
import {render} from '@testing-library/preact';
import {Sidebar} from '@zui/sidebar';
import {Sidebar as SidebarReact} from '@zui/sidebar/react';
import {store} from '@zui/store';
import {flushAnimationFrame} from '../setup/dom';
import type {SidebarOptions} from '@zui/sidebar';

function createContainer(width = 800) {
    const container = document.createElement('div');
    container.style.width = `${width}px`;
    Object.defineProperties(container, {
        clientWidth: {value: width},
        offsetWidth: {value: width},
    });
    document.body.append(container);
    return container;
}

function createSidebar(options: SidebarOptions = {}, containerWidth = 800) {
    const container = createContainer(containerWidth);
    const element = document.createElement('aside');
    element.innerHTML = '<div class="sidebar-content">Sidebar content</div>';
    container.append(element);
    return new Sidebar(element, {width: 240, animation: false, dragToResize: false, ...options});
}

function mouse(target: EventTarget, type: string, clientX: number) {
    target.dispatchEvent(new MouseEvent(type, {bubbles: true, cancelable: true, buttons: type === 'mouseup' ? 0 : 1, clientX}));
}

describe('Sidebar shared width', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => undefined);
    });

    it('syncs in both directions while keeping other groups and disabled instances independent', async () => {
        const first = createSidebar({shareWidth: 'shared'});
        const second = createSidebar({shareWidth: 'shared', side: 'right'});
        const independent = [
            createSidebar({shareWidth: 'other'}),
            createSidebar(),
            createSidebar(),
            createSidebar({shareWidth: ''}),
            createSidebar({shareWidth: ''}),
        ];
        await flushAnimationFrame();

        first.update(320);
        await flushAnimationFrame();

        expect([first.width, second.width]).toEqual([320, 320]);
        expect(second.$parent[0]!.style.getPropertyValue('--sidebar-right-width')).toBe('320px');
        second.update(280, true);
        expect(first.width).toBe(280);
        expect(independent.map(sidebar => sidebar.width)).toEqual([240, 240, 240, 240, 240]);
        independent[1].update(300, true);
        independent[3].update(360, true);
        expect(independent.map(sidebar => sidebar.width)).toEqual([240, 300, 240, 360, 240]);
    });

    it('inherits the oldest initialized peer before local storage or width without emitting changes', async () => {
        store.set('SIDEBAR:first:width', 310);
        store.set('SIDEBAR:second:width', 500);
        const onResize = vi.fn();
        const onToggle = vi.fn();
        const onEvent = vi.fn();
        const first = createSidebar({shareWidth: 'shared', preserve: 'first'});
        const second = createSidebar({shareWidth: 'shared', preserve: 'second', maxWidth: 270, onResize, onToggle});
        second.on('sidebarResize', onEvent);
        const third = createSidebar({shareWidth: 'shared', width: 400});
        await flushAnimationFrame();

        expect([first.width, second.width, third.width]).toEqual([310, 270, 310]);
        expect(onResize).not.toHaveBeenCalled();
        expect(onToggle).not.toHaveBeenCalled();
        expect(onEvent).not.toHaveBeenCalled();
        expect(store.get('SIDEBAR:second:width')).toBe(500);

        const pending = createSidebar({shareWidth: 'shared'});
        first.update(350, true);
        await flushAnimationFrame();
        expect(pending.width).toBe(350);
    });

    it('restores from any member including a new member joining a collapsed group and syncs reset', async () => {
        const first = createSidebar({shareWidth: 'shared'});
        const second = createSidebar({shareWidth: 'shared', width: 280});
        await flushAnimationFrame();
        first.update(350, true);
        first.toggle(true);
        first.toggle(false);
        await flushAnimationFrame();
        expect([first.width, second.width]).toEqual([350, 350]);
        first.toggle();
        await flushAnimationFrame();
        expect([first.width, second.width]).toEqual([0, 0]);
        expect(second.element).toHaveClass('is-collapsed');

        const third = createSidebar({shareWidth: 'shared', width: 400});
        await flushAnimationFrame();
        expect(third.width).toBe(0);
        third.toggle(true);
        await flushAnimationFrame();
        third.toggle();
        await flushAnimationFrame();
        expect([first.width, second.width, third.width]).toEqual([350, 350, 350]);

        second.element.querySelector('.sidebar-gutter')!.dispatchEvent(new MouseEvent('dblclick', {bubbles: true}));
        await flushAnimationFrame();
        expect([first.width, second.width, third.width]).toEqual([280, 280, 280]);
    });

    it('applies each recipient limits without feeding the clamped width back into the group', async () => {
        const first = createSidebar({shareWidth: 'shared'});
        const limited = createSidebar({shareWidth: 'shared', minWidth: 200, maxWidth: 280, toggleBtn: false});
        const collapsible = createSidebar({shareWidth: 'shared', minWidth: 200});
        const narrow = createSidebar({shareWidth: 'shared'}, 210);
        await flushAnimationFrame();

        first.update(350, true);
        expect([first.width, limited.width, collapsible.width, narrow.width]).toEqual([350, 280, 350, 210]);
        first.update(80, true);
        expect([first.width, limited.width, collapsible.width, narrow.width]).toEqual([80, 200, 0, 80]);
    });

    it('emits callbacks and writes each preserve key once per actual change', async () => {
        const callbacks = [0, 1].map(() => ({onResize: vi.fn(), onToggle: vi.fn(), onEvent: vi.fn()}));
        const sidebars = callbacks.map(({onResize, onToggle, onEvent}, index) => {
            const sidebar = createSidebar({shareWidth: 'shared', preserve: `events-${index}`, onResize, onToggle});
            sidebar.on('sidebarResize', onEvent);
            return sidebar;
        });
        await flushAnimationFrame();
        const set = vi.spyOn(store, 'set');

        sidebars[0].update(320, true);
        sidebars[0].update(320, true);
        expect(set).toHaveBeenCalledTimes(2);
        callbacks.forEach(({onResize, onToggle, onEvent}, index) => {
            expect(onResize).toHaveBeenCalledExactlyOnceWith(320);
            expect(onToggle).not.toHaveBeenCalled();
            expect(onEvent).toHaveBeenCalledOnce();
            expect(store.get(`SIDEBAR:events-${index}:width`)).toBe(320);
        });

        sidebars[0].update(0, true);
        expect(set).toHaveBeenCalledTimes(4);
        callbacks.forEach(({onResize, onToggle, onEvent}) => {
            expect(onResize).toHaveBeenCalledTimes(2);
            expect(onToggle).toHaveBeenCalledExactlyOnceWith(true);
            expect(onEvent).toHaveBeenCalledTimes(2);
        });
    });

    it('coalesces animation frames and cancels stale recipient updates', async () => {
        const onResize = vi.fn();
        const first = createSidebar({shareWidth: 'shared'});
        const second = createSidebar({shareWidth: 'shared', onResize});
        await flushAnimationFrame();

        first.update(280);
        first.update(320);
        await flushAnimationFrame();
        expect(onResize).toHaveBeenCalledExactlyOnceWith(320);

        second.update(500);
        first.update(360, true);
        await flushAnimationFrame();
        expect([first.width, second.width]).toEqual([360, 360]);

        second.update(500);
        first.update(1000, true);
        await flushAnimationFrame();
        expect([first.width, second.width]).toEqual([800, 800]);
    });

    it('handles synchronous updates from a resize callback without propagating stale widths', async () => {
        const first = createSidebar({shareWidth: 'shared'});
        const second = createSidebar({shareWidth: 'shared', onResize: (width) => {
            if (width === 320) {
                first.update(360, true);
            }
        }});
        const third = createSidebar({shareWidth: 'shared'});
        await flushAnimationFrame();

        first.update(320, true);
        expect([first.width, second.width, third.width]).toEqual([360, 360, 360]);
    });

    it('removes destroyed peers, cancels their queued updates and retains no group width', async () => {
        const first = createSidebar({shareWidth: 'shared'});
        const second = createSidebar({shareWidth: 'shared'});
        await flushAnimationFrame();

        first.update(400);
        first.destroy();
        second.update(320, true);
        await flushAnimationFrame();
        expect([first.width, second.width]).toEqual([240, 320]);
        expect(Sidebar.getAll()).toEqual([second]);

        second.destroy();
        const replacement = createSidebar({shareWidth: 'shared', width: 210});
        await flushAnimationFrame();
        expect(replacement.width).toBe(210);
    });

    it.each(['left', 'right'] as const)('syncs %s dragging and restores each container animation setting', async (side) => {
        const source = createSidebar({shareWidth: 'shared', side, dragToResize: true, animation: true});
        const animated = createSidebar({shareWidth: 'shared', animation: 1000});
        const immediate = createSidebar({shareWidth: 'shared', animation: false});
        const sidebars = [source, animated, immediate];
        await vi.advanceTimersByTimeAsync(10);
        source.$parent.addClass('has-sidebar-animation');
        animated.$parent.addClass('has-sidebar-animation');
        const gutter = source.element.querySelector('.sidebar-gutter')!;
        const direction = side === 'left' ? 1 : -1;

        mouse(gutter, 'mousedown', 400);
        sidebars.forEach((sidebar) => {
            expect(sidebar.$parent[0]).toHaveClass('is-sidebar-resizing');
            expect(sidebar.$parent[0]).not.toHaveClass('has-sidebar-animation');
        });
        mouse(document, 'mousemove', 400 + direction * 60);
        await vi.advanceTimersByTimeAsync(20);
        expect(sidebars.map(sidebar => sidebar.width)).toEqual([300, 300, 300]);

        mouse(document, 'mousemove', 400 - direction * 240);
        await vi.advanceTimersByTimeAsync(20);
        expect(sidebars.map(sidebar => sidebar.width)).toEqual([0, 0, 0]);
        mouse(document, 'mousemove', 400 + direction * 60);
        await vi.advanceTimersByTimeAsync(20);
        expect(sidebars.map(sidebar => sidebar.width)).toEqual([300, 300, 300]);
        sidebars.forEach(sidebar => expect(sidebar.element).not.toHaveClass('is-animating'));

        mouse(document, 'mouseup', 400 + direction * 60);
        await vi.advanceTimersByTimeAsync(20);
        sidebars.forEach(sidebar => expect(sidebar.$parent[0]).not.toHaveClass('is-sidebar-resizing'));
        expect(source.$parent[0]).toHaveClass('has-sidebar-animation');
        expect(animated.$parent[0]).toHaveClass('has-sidebar-animation');
        expect(immediate.$parent[0]).not.toHaveClass('has-sidebar-animation');
    });

    it('restores peer containers when the sidebar being dragged is destroyed', async () => {
        const source = createSidebar({shareWidth: 'shared', dragToResize: true, animation: true});
        const peer = createSidebar({shareWidth: 'shared', animation: true});
        await vi.advanceTimersByTimeAsync(10);
        mouse(source.element.querySelector('.sidebar-gutter')!, 'mousedown', 400);
        expect(peer.$parent[0]).toHaveClass('is-sidebar-resizing');

        source.destroy();
        mouse(document, 'mousemove', 460);
        await vi.advanceTimersByTimeAsync(20);
        expect(peer.$parent[0]).not.toHaveClass('is-sidebar-resizing');
        expect(peer.$parent[0]).toHaveClass('has-sidebar-animation');
        expect(peer.width).toBe(240);
    });

    it('accepts the group through Preact props and leaves it on unmount', async () => {
        const vanilla = createSidebar({shareWidth: 'shared', width: 300});
        await flushAnimationFrame();
        const view = render(h(SidebarReact, {width: 500, shareWidth: 'shared', dragToResize: false, animation: false}), {container: createContainer()});
        await flushAnimationFrame();
        const sidebar = Sidebar.get(view.container.querySelector<HTMLElement>('.sidebar')!)!;
        expect(sidebar.width).toBe(300);
        sidebar.update(360, true);
        expect(vanilla.width).toBe(360);

        view.unmount();
        expect(sidebar.destroyed).toBe(true);
        expect(Sidebar.getAll()).toEqual([vanilla]);
    });
});
