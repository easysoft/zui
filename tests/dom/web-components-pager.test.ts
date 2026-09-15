import {describe, expect, it, vi} from 'vitest';
import {Pager, ZuiPagerElement} from '@zui/pager';
import {flushAnimationFrame} from '../setup/dom';

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

    it('registers from the Pager library and reuses the generated constructor', async () => {
        expect(customElements.get('zui-pager')).toBe(ZuiPagerElement);
        expect(() => Pager.register()).not.toThrow();
        const {definePager} = await import('@zui/web-components/src/pager');
        expect(() => definePager()).not.toThrow();
        const element = await mount();
        const container = element.firstElementChild;
        element.recTotal = 80;
        await Promise.resolve();
        expect(element.firstElementChild).toBe(container);
        expect(Pager.get(container as HTMLElement)).toBeUndefined();
        element.remove();
        await Promise.resolve();
        expect(element.children).toHaveLength(0);
        document.body.append(element);
        await element.ready;
        expect(element.firstElementChild).not.toBe(container);
        expect(element.recTotal).toBe(80);
    });
});
