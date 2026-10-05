import {act, fireEvent, within} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {ContextMenu} from '@zui/contextmenu';
import {flushAnimationFrame} from '../setup/dom';

async function createContextMenu(dynamic = false, mask = true) {
    const trigger = document.createElement('div');
    trigger.innerHTML = '<span>File</span>';
    const target = document.createElement('menu');
    target.className = 'contextmenu menu popup';
    target.innerHTML = '<li class="menu-item"><a>Preview</a></li><li class="menu-item not-hide-menu"><a>Keep open</a></li>';
    document.body.append(trigger, target);
    const contextMenu = new ContextMenu(trigger, {
        animation: false,
        mask,
        ...(dynamic ? {items: [{text: 'Preview'}, {text: 'Keep open', className: 'not-hide-menu'}]} : {target: '$next'}),
    });
    await flushAnimationFrame();
    return {contextMenu, trigger, child: trigger.querySelector('span')!};
}

async function openContextMenu(trigger: HTMLElement) {
    fireEvent.contextMenu(trigger, {clientX: 40, clientY: 60});
    await act(async () => {
        await vi.advanceTimersByTimeAsync(250);
    });
}

describe('ContextMenu click dismissal', () => {
    it.each([false, true])('closes on clicks in the trigger or outside while preserving menu interactions (dynamic: %s)', async (dynamic) => {
        const {contextMenu, trigger, child} = await createContextMenu(dynamic);

        for (const clickTarget of [trigger, child, document.body]) {
            await openContextMenu(child);
            expect(contextMenu.shown).toBe(true);

            fireEvent.click(clickTarget);
            expect(contextMenu.shown).toBe(false);
            await act(async () => flushAnimationFrame());
        }

        await openContextMenu(trigger);
        const menu = within(contextMenu.target!);
        fireEvent.click(menu.getByText('Keep open'));
        expect(contextMenu.shown).toBe(true);

        fireEvent.click(menu.getByText('Preview'));
        expect(contextMenu.shown).toBe(false);
    });

    it('keeps the menu open on trigger and outside clicks when mask is false', async () => {
        const {contextMenu, trigger, child} = await createContextMenu(false, false);
        await openContextMenu(trigger);

        fireEvent.click(child);
        fireEvent.click(document.body);
        expect(contextMenu.shown).toBe(true);

        fireEvent.click(within(contextMenu.target!).getByText('Preview'));
        expect(contextMenu.shown).toBe(false);
    });

    it('ignores the click that opens the menu programmatically and dismisses on the next click', async () => {
        const {contextMenu, trigger, child} = await createContextMenu();
        trigger.addEventListener('click', event => contextMenu.show({event}), {once: true});

        fireEvent.click(child);
        expect(contextMenu.shown).toBe(true);

        fireEvent.click(child);
        expect(contextMenu.shown).toBe(false);
    });
});
