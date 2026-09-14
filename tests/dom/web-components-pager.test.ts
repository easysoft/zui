import {describe, expect, it, vi} from 'vitest';
import {Pager} from '@zui/pager';
import {definePager} from '@zui/web-components/src/pager';
import {flushAnimationFrame} from '../setup/dom';

definePager();

async function mount() {
    const element = document.createElement('zui-pager');
    element.recTotal = 120;
    element.recPerPage = 20;
    document.body.append(element);
    await Promise.resolve();
    await flushAnimationFrame();
    await element.ready;
    return element;
}

describe('zui-pager', () => {
    it('updates current page and dispatches one composed event for a user action', async () => {
        const element = await mount();
        const onChange = vi.fn();
        element.addEventListener('zui-change', onChange);
        element.querySelector<HTMLButtonElement>('[z-go-to-page="2"]')!.click();
        await flushAnimationFrame();
        expect(element.page).toBe(2);
        expect(element.getAttribute('page')).toBe('2');
        expect(element.querySelector('[z-go-to-page="2"]')).toBeDisabled();
        expect(onChange).toHaveBeenCalledOnce();
        const event = onChange.mock.calls[0][0] as CustomEvent;
        expect(event.detail).toMatchObject({page: 2, pageTotal: 6, recPerPage: 20});
        expect(event.bubbles).toBe(true);
        expect(event.composed).toBe(true);
    });

    it('clamps programmatic changes without manufacturing user change events', async () => {
        const element = await mount();
        const onChange = vi.fn();
        element.addEventListener('zui-change', onChange);
        element.page = 6;
        await Promise.resolve();
        element.setAttribute('rec-total', '30');
        await Promise.resolve();
        expect(element.page).toBe(2);
        expect(element.pageTotal).toBe(2);
        element.recTotal = 0;
        await Promise.resolve();
        expect(element.page).toBe(0);
        expect(element.pageTotal).toBe(0);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('owns the vanilla instance across updates and cleans it on removal', async () => {
        const element = await mount();
        const container = element.querySelector<HTMLElement>('.zui-webc-mount')!;
        const instance = Pager.get(container)!;
        expect(instance.options.$notDestroyOnDetach).toBe(true);
        element.recTotal = 80;
        await Promise.resolve();
        expect(Pager.get(container)).toBe(instance);
        element.remove();
        await Promise.resolve();
        expect(instance.destroyed).toBe(true);
        expect(Pager.get(container)).toBeUndefined();
    });
});
