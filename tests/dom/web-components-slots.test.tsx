import {describe, expect, it, vi} from 'vitest';
import {ComponentFromReact, defineWebComponent, property, ZuiElement} from '@zui/core';
import {flushAnimationFrame} from '../setup/dom';

import type {ComponentChildren} from 'preact';
import type {ElementSlotMap} from '@zui/core';

type SectionProps = {heading?: ComponentChildren; actions?: ComponentChildren; children?: ComponentChildren; hidden: boolean; tick: number};

function SectionView({heading, actions, children, hidden, tick}: SectionProps) {
    return (
        <section data-tick={tick}>
            <header>{heading}</header>
            <main>{hidden ? null : children}</main>
            <footer>{actions}</footer>
        </section>
    );
}

const SectionElement = defineWebComponent(SectionView, {
    tagName: 'test-slots-section',
    properties: {hideContent: property.boolean('hide-content'), tick: property.number('tick', 0)},
    slots: {'': 'children', heading: 'heading', actions: 'actions'},
    options: props => ({hidden: props.hideContent, tick: props.tick, heading: 'Default heading', children: 'Default content', actions: 'Default actions'}),
});

async function flush() {
    for (let index = 0; index < 6; index++) {
        await Promise.resolve();
    }
}

describe('light-DOM slots', () => {
    it('accepts standalone configurations and explicit native Preact wrappers', async () => {
        const Content = ({children}: {children?: ComponentChildren}) => <article>{children}</article>;
        class WrappedContent extends ComponentFromReact<{children?: ComponentChildren}> {
            static NAME = 'SlottedContent';
            static Component = Content;
        }
        const PlainElement = defineWebComponent({
            tagName: 'test-slots-standalone', component: Content, properties: {}, slots: {'': 'children'},
        });
        const WrappedElement = defineWebComponent({
            tagName: 'test-slots-wrapper', component: WrappedContent, properties: {}, slots: {'': 'children'},
        });
        for (const Constructor of [PlainElement, WrappedElement]) {
            const element = new Constructor();
            const source = document.createElement('b');
            source.textContent = 'Content';
            element.append(source);
            document.body.append(element);
            await Promise.resolve();
            await flushAnimationFrame();
            await element.ready;
            expect(element.querySelector('article b')).toBe(source);
            element.remove();
            await flush();
            expect(element.firstChild).toBe(source);
        }
    });

    it('maps named and default nodes in declaration order without cloning content', async () => {
        const element = new SectionElement();
        element.innerHTML = '<b slot="heading">First</b><p>Body <em>content</em></p><i slot="heading">Second</i> tail <button slot="actions">Save</button>';
        const originals = [...element.childNodes];
        const action = element.querySelector('button')!;
        const onClick = vi.fn();
        action.addEventListener('click', onClick);
        document.body.append(element);
        await element.ready;
        expect([...element.querySelector('header slot')!.childNodes]).toEqual([originals[0], originals[2]]);
        expect([...element.querySelector('main slot')!.childNodes]).toEqual([originals[1], originals[3]]);
        expect(element.querySelector('footer button')).toBe(action);
        expect(element.querySelectorAll('button')).toHaveLength(1);
        action.click();
        expect(onClick).toHaveBeenCalledOnce();
        expect(element.options).toEqual({hideContent: false, tick: 0});
    });

    it('keeps fallbacks for absent or whitespace-only slots and ignores undeclared slots', async () => {
        const element = new SectionElement();
        element.innerHTML = '\n  <span slot="other">Unclaimed</span>\n';
        const unclaimed = element.firstElementChild;
        document.body.append(element);
        await element.ready;
        expect(element.querySelector('header')).toHaveTextContent('Default heading');
        expect(element.querySelector('main')).toHaveTextContent('Default content');
        expect(unclaimed?.parentNode).toBe(element);
        const heading = document.createElement('h3');
        heading.slot = 'heading';
        heading.textContent = 'Custom heading';
        element.append(heading);
        await flush();
        expect(element.querySelector('header')).toHaveTextContent('Custom heading');
        heading.remove();
        await flush();
        expect(element.querySelector('header')).toHaveTextContent('Default heading');
    });

    it('handles host insertions, reordering, slot reassignment and removal', async () => {
        const element = new SectionElement();
        element.innerHTML = '<b slot="heading">First</b><i slot="heading">Second</i>';
        const first = element.querySelector('b')!;
        const second = element.querySelector('i')!;
        document.body.append(element);
        await element.ready;
        element.prepend(second);
        await flush();
        expect(element.querySelector('header')).toHaveTextContent('SecondFirst');
        second.slot = 'actions';
        await flush();
        expect(element.querySelector('header')).toHaveTextContent('First');
        expect(element.querySelector('footer i')).toBe(second);
        first.slot = 'unknown';
        await flush();
        expect(first.parentNode).toBe(element);
        expect(element.querySelector('header')).toHaveTextContent('Default heading');
        second.remove();
        await flush();
        expect(element.querySelector('footer')).toHaveTextContent('Default actions');
    });

    it('does not collect slots belonging to nested content', async () => {
        const element = new SectionElement();
        element.innerHTML = '<div><b slot="heading">Nested heading</b></div>';
        const source = element.firstElementChild!;
        document.body.append(element);
        await element.ready;
        expect(element.querySelector('header')).toHaveTextContent('Default heading');
        expect(element.querySelector('main slot')!.firstChild).toBe(source);
        expect(source.querySelector('b')!.slot).toBe('heading');
    });

    it('preserves input state, focus and handlers through unrelated view updates', async () => {
        const element = new SectionElement();
        element.innerHTML = '<input aria-label="Name" value="initial">';
        const input = element.querySelector('input')!;
        input.value = 'Edited before mounting';
        const onInput = vi.fn();
        input.addEventListener('input', onInput);
        document.body.append(element);
        await element.ready;
        input.focus();
        input.setSelectionRange(2, 5);
        element.tick++;
        await flush();
        expect(element.querySelector('input')).toBe(input);
        expect(input.value).toBe('Edited before mounting');
        expect(document.activeElement).toBe(input);
        expect([input.selectionStart, input.selectionEnd]).toEqual([2, 5]);
        input.dispatchEvent(new Event('input', {bubbles: true}));
        expect(onInput).toHaveBeenCalledOnce();
    });

    it('parks conditionally hidden content and restores the same nodes', async () => {
        const element = new SectionElement();
        element.innerHTML = '<input value="initial">';
        const input = element.querySelector('input')!;
        document.body.append(element);
        await element.ready;
        input.value = 'Edited';
        element.hideContent = true;
        await flush();
        expect(element.querySelector('input')).toBeNull();
        expect(input.isConnected).toBe(false);
        element.hideContent = false;
        await flush();
        expect(element.querySelector('input')).toBe(input);
        expect(input.value).toBe('Edited');
    });

    it('restores declaration order on disconnect and projects again on reconnect', async () => {
        const element = new SectionElement();
        element.innerHTML = '<b slot="heading">Heading</b> Body <input><i slot="actions">Action</i>';
        const originals = [...element.childNodes];
        document.body.append(element);
        await element.ready;
        const mount = element.querySelector('.zui-webc-mount');
        const destination = document.createElement('div');
        document.body.append(destination);
        destination.append(element);
        await flush();
        expect(element.querySelector('.zui-webc-mount')).toBe(mount);
        element.remove();
        await flush();
        expect([...element.childNodes]).toEqual(originals);
        document.body.append(element);
        await element.ready;
        expect(element.querySelector('input')).toBe(originals[2]);
        expect(element.querySelector('header b')).toBe(originals[0]);
        expect(element.querySelector('.zui-webc-mount')).not.toBe(mount);
    });

    it('preserves nested ZUI elements during projection and host moves', async () => {
        class NestedElement extends ZuiElement {
            destroys = 0;
            protected _render() {
                this._container!.textContent = 'Nested';
                this._markReady();
            }

            protected _destroy() {
                this.destroys++;
            }
        }
        NestedElement.define('test-slots-nested');
        const element = new SectionElement();
        const nested = new NestedElement();
        element.append(nested);
        document.body.append(element);
        await element.ready;
        await nested.ready;
        const nestedMount = nested.firstChild;
        element.tick++;
        await flush();
        expect(nested.destroys).toBe(0);
        expect(nested.firstChild).toBe(nestedMount);
        element.remove();
        await flush();
        expect(nested.destroys).toBe(1);
        expect(nested.parentNode).toBe(element);
        document.body.append(element);
        await element.ready;
        await nested.ready;
        expect(element.querySelector('test-slots-nested')).toBe(nested);
    });

    it('updates whitespace-only text when it becomes meaningful content', async () => {
        const element = new SectionElement();
        const text = document.createTextNode(' ');
        element.append(text);
        document.body.append(element);
        await element.ready;
        text.data = 'Body';
        await flush();
        expect(element.querySelector('main slot')!.firstChild).toBe(text);
        text.data = ' ';
        await flush();
        expect(element.querySelector('main')).toHaveTextContent('Default content');
    });

    it('checks slot target names against the target props', () => {
        const slots: ElementSlotMap<SectionProps> = {heading: 'heading', '': 'children'};
        expect(slots.heading).toBe('heading');
        // @ts-expect-error The component has no content prop called unknown.
        const invalid: ElementSlotMap<SectionProps> = {heading: 'unknown'};
        expect(invalid.heading).toBe('unknown');
        // @ts-expect-error Numeric props cannot render slot content.
        const numeric: ElementSlotMap<SectionProps> = {heading: 'tick'};
        expect(numeric.heading).toBe('tick');
    });

    it('does not restore source nodes removed just before disconnecting', async () => {
        const element = new SectionElement();
        const content = document.createElement('b');
        content.textContent = 'Removed';
        element.append(content);
        document.body.append(element);
        await element.ready;
        content.remove();
        element.remove();
        await flush();
        expect(element.childNodes).toHaveLength(0);
        expect(content.parentNode).toBeNull();
    });
});
