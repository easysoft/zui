// @vitest-environment jsdom

import {act, fireEvent, render} from '@testing-library/preact';
import {createRef, Fragment} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Collapsible} from '@zui/collapsible/src/components/collapsible';
import type {CollapsibleProps} from '@zui/collapsible/src/types';

function mount(props: CollapsibleProps = {}) {
    const ref = createRef<Collapsible>();
    const view = render(<Collapsible ref={ref} title="Section" {...props} />);
    const details = view.container.querySelector<HTMLDetailsElement>('details')!;
    const summary = view.container.querySelector<HTMLElement>('summary')!;
    const button = view.container.querySelector<HTMLButtonElement>('.collapsible-toggle-btn')!;
    return {...view, ref, details, summary, button};
}

async function flushToggle() {
    await act(async () => {
        await vi.runOnlyPendingTimersAsync();
    });
}

describe('Collapsible native details', () => {
    it('lets summary activation change open immediately and notifies only once', async () => {
        const onChange = vi.fn();
        const {details, summary, button, ref} = mount({defaultCollapsed: true, onChange, content: 'Body'});
        expect(details).toHaveClass('details', 'collapsible');
        expect(details.firstElementChild).toBe(summary);
        expect(summary).toHaveAttribute('tabindex', '-1');
        expect(details.open).toBe(false);

        const click = new MouseEvent('click', {bubbles: true, cancelable: true});
        act(() => {
            summary.dispatchEvent(click);
        });
        expect(click.defaultPrevented).toBe(false);
        expect(details.open).toBe(true);
        expect(ref.current!.collapsed).toBe(false);
        expect(onChange).toHaveBeenCalledExactlyOnceWith(false);
        await flushToggle();
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(button.querySelector('.chevron-down')).toBeInTheDocument();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('uses the latest native state for rapid clicks and idempotent commands', async () => {
        const onChange = vi.fn();
        const {details, summary, button, ref} = mount({onChange});
        await flushToggle();
        act(() => {
            summary.click();
            expect(ref.current!.collapsed).toBe(true);
            ref.current!.toggle();
            expect(ref.current!.collapsed).toBe(false);
            ref.current!.toggle(false);
            ref.current!.toggle(true);
        });
        expect(details.open).toBe(false);
        expect(onChange.mock.calls).toEqual([[true], [false], [true]]);
        await flushToggle();
        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(button.querySelector('.chevron-right')).toBeInTheDocument();
        expect(onChange).toHaveBeenCalledTimes(3);
    });

    it('proxies button clicks through summary without bubbling a second click', async () => {
        const onChange = vi.fn();
        const onButtonClick = vi.fn();
        const {container, details, summary, button, ref} = mount({toggleOnClickHeader: false, onChange, toggleButton: {onClick: onButtonClick}});
        const parentClick = vi.fn();
        container.addEventListener('click', parentClick);
        const summaryClick = vi.spyOn(summary, 'click');
        fireEvent.click(summary);
        expect(details.open).toBe(true);
        expect(onChange).not.toHaveBeenCalled();
        parentClick.mockClear();

        act(() => button.click());
        expect(details.open).toBe(false);
        expect(summaryClick).toHaveBeenCalledTimes(1);
        expect(parentClick).toHaveBeenCalledTimes(1);
        expect(onButtonClick).toHaveBeenCalledTimes(1);
        act(() => ref.current!.toggle());
        expect(details.open).toBe(true);
        expect(summaryClick).toHaveBeenCalledTimes(2);
        expect(parentClick).toHaveBeenCalledTimes(1);
        await flushToggle();
        fireEvent.click(summary);
        expect(details.open).toBe(true);
        expect(onChange.mock.calls).toEqual([[true], [false]]);
    });

    it('allows callbacks to cancel before the native state changes', async () => {
        const onChange = vi.fn(() => false as const);
        const {details, summary, button, ref} = mount({onChange});
        const click = new MouseEvent('click', {bubbles: true, cancelable: true});
        act(() => {
            summary.dispatchEvent(click);
        });
        expect(click.defaultPrevented).toBe(true);
        act(() => button.click());
        act(() => ref.current!.toggle());
        await flushToggle();
        expect(details.open).toBe(true);
        expect(onChange.mock.calls).toEqual([[true], [true], [true]]);
    });

    it('blocks disabled user controls while retaining imperative toggle', async () => {
        const onChange = vi.fn();
        const {details, summary, button, ref} = mount({disabled: true, onChange});
        fireEvent.click(summary);
        act(() => button.click());
        expect(button).toBeDisabled();
        expect(details.open).toBe(true);
        expect(onChange).not.toHaveBeenCalled();
        act(() => ref.current!.toggle());
        expect(details.open).toBe(false);
        await flushToggle();
        expect(onChange).toHaveBeenCalledExactlyOnceWith(true);
    });

    it('requests controlled changes and restores external changes to open', async () => {
        const onChange = vi.fn();
        const view = mount({collapsed: true, onChange});
        const click = new MouseEvent('click', {bubbles: true, cancelable: true});
        act(() => {
            view.summary.dispatchEvent(click);
        });
        expect(click.defaultPrevented).toBe(true);
        expect(view.details.open).toBe(false);
        expect(onChange).toHaveBeenCalledExactlyOnceWith(false);

        view.rerender(<Collapsible ref={view.ref} title="Section" collapsed={false} onChange={onChange} />);
        expect(view.details.open).toBe(true);
        await flushToggle();
        act(() => {
            view.details.open = false;
        });
        await flushToggle();
        expect(view.details.open).toBe(true);
        expect(view.button).toHaveAttribute('aria-expanded', 'true');
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('accepts external native changes without issuing change requests', async () => {
        const onChange = vi.fn();
        const view = mount({defaultCollapsed: true, onChange});
        act(() => {
            view.details.open = true;
        });
        expect(view.ref.current!.collapsed).toBe(false);
        await flushToggle();
        expect(view.button).toHaveAttribute('aria-expanded', 'true');
        view.rerender(<Collapsible ref={view.ref} title="Updated title" defaultCollapsed onChange={onChange} />);
        expect(view.details.open).toBe(true);
        act(() => {
            view.details.open = false;
        });
        await flushToggle();
        expect(view.button).toHaveAttribute('aria-expanded', 'false');
        expect(onChange).not.toHaveBeenCalled();
    });

    it('refreshes content after releasing controlled state and reopening natively', async () => {
        const view = mount({collapsed: false, onlyHideOnCollapsed: false, content: 'Controlled body'});
        await flushToggle();
        view.rerender(<Collapsible ref={view.ref} collapsed onlyHideOnCollapsed={false} content="Controlled body" />);
        await flushToggle();
        expect(view.queryByText('Controlled body')).not.toBeInTheDocument();
        view.rerender(<Collapsible ref={view.ref} onlyHideOnCollapsed={false} content="Controlled body" />);
        act(() => view.summary.click());
        expect(view.details.open).toBe(true);
        await flushToggle();
        expect(view.getByText('Controlled body')).toBeInTheDocument();
        expect(view.button).toHaveAttribute('aria-expanded', 'true');
    });

    it.each([true, false])('does not reverse a synchronous controlled update (initially controlled: %s)', async (controlled) => {
        const onChange = vi.fn();
        const view = mount({collapsed: controlled ? true : undefined, defaultCollapsed: true, onChange});
        onChange.mockImplementation((collapsed: boolean) => {
            view.rerender(<Collapsible ref={view.ref} collapsed={collapsed} onChange={onChange} />);
        });
        const click = new MouseEvent('click', {bubbles: true, cancelable: true});
        act(() => {
            view.summary.dispatchEvent(click);
        });
        expect(click.defaultPrevented).toBe(true);
        expect(view.details.open).toBe(true);
        await flushToggle();
        expect(view.button).toHaveAttribute('aria-expanded', 'true');
        expect(onChange).toHaveBeenCalledExactlyOnceWith(false);
    });

    it.each([undefined, false])('ignores interactive ancestors outside summary (collapsed prop: %s)', (collapsed) => {
        const onChange = vi.fn();
        const view = render(<div role="button"><Collapsible title="Section" collapsed={collapsed} onChange={onChange} /></div>);
        const details = view.container.querySelector('details')!;
        const click = new MouseEvent('click', {bubbles: true, cancelable: true});
        act(() => {
            details.querySelector('summary')!.dispatchEvent(click);
        });
        expect(details.open).toBe(collapsed !== undefined);
        expect(click.defaultPrevented).toBe(collapsed !== undefined);
        expect(onChange).toHaveBeenCalledExactlyOnceWith(true);
    });

    it('retains content by default and unmounts it only when requested', async () => {
        const retained = mount({children: <input aria-label="Retained draft" defaultValue="Draft" />});
        const input = retained.getByLabelText('Retained draft');
        fireEvent.input(input, {target: {value: 'Edited'}});
        act(() => retained.summary.click());
        await flushToggle();
        expect(retained.getByLabelText('Retained draft')).toBe(input);
        act(() => retained.summary.click());
        await flushToggle();
        expect(input).toHaveValue('Edited');

        const unmounted = mount({onlyHideOnCollapsed: false, defaultCollapsed: true, children: <input aria-label="Temporary draft" />});
        expect(unmounted.queryByLabelText('Temporary draft')).not.toBeInTheDocument();
        act(() => unmounted.summary.click());
        await flushToggle();
        expect(unmounted.getByLabelText('Temporary draft')).toBeInTheDocument();
        act(() => unmounted.summary.click());
        await flushToggle();
        expect(unmounted.queryByLabelText('Temporary draft')).not.toBeInTheDocument();
    });

    it('retains custom state icons and button properties', async () => {
        const {summary, button} = mount({defaultCollapsed: true, collapsedIcon: 'plus', expandedIcon: 'minus', toggleButton: {className: 'custom-toggle', hint: 'Expand section', size: 'lg'}});
        expect(button).toHaveClass('custom-toggle', 'size-lg');
        expect(button).toHaveAttribute('title', 'Expand section');
        expect(button.querySelector('.icon-plus')).toBeInTheDocument();
        expect(button.querySelector('.chevron-right')).not.toBeInTheDocument();
        act(() => summary.click());
        await flushToggle();
        expect(button.querySelector('.icon-minus')).toBeInTheDocument();
        expect(button.querySelector('.chevron-down')).not.toBeInTheDocument();
    });

    it('leaves links, inputs and toolbar actions independent of folding', () => {
        const onChange = vi.fn();
        const onAction = vi.fn();
        const {details, getByText, getByLabelText} = mount({
            onChange,
            header: (
                <Fragment>
                    <a href="#section-help">Help</a>
                    <label>
                        <input type="checkbox" />
                        Pin
                    </label>
                </Fragment>
            ),
            actions: [{text: 'Action', onClick: onAction}],
        });
        const linkClick = new MouseEvent('click', {bubbles: true, cancelable: true});
        act(() => {
            getByText('Help').dispatchEvent(linkClick);
        });
        expect(linkClick.defaultPrevented).toBe(false);
        act(() => getByLabelText('Pin').click());
        expect(getByLabelText('Pin')).toBeChecked();
        fireEvent.click(getByText('Action'));
        expect(onAction).toHaveBeenCalledTimes(1);
        expect(details.open).toBe(true);
        expect(onChange).not.toHaveBeenCalled();
    });
});
