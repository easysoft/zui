// @vitest-environment jsdom

import {describe, expect, it, vi} from 'vitest';
import {Component} from '@zui/core/src/component/component';
import {flushAnimationFrame} from '../setup/dom';

type WidgetOptions = {
    label?: string;
    count?: number;
};

type WidgetEvents = {
    changed: [value: string];
};

class Widget extends Component<WidgetOptions, WidgetEvents> {
    static NAME = 'TestWidget';

    static DEFAULT: Partial<WidgetOptions> = {
        label: 'default',
        count: 1,
    };

    initCalls = 0;

    afterInitCalls = 0;

    init() {
        this.initCalls += 1;
    }

    afterInit() {
        this.afterInitCalls += 1;
    }

    setLabel(label: string) {
        this.setOptions({label});
        return this.options.label;
    }
}

class MultiWidget extends Component<WidgetOptions> {
    static NAME = 'MultiWidget';

    static MULTI_INSTANCE = true;
}

describe('Core Component', () => {
    it('validates component names and selectors', () => {
        class Nameless extends Component {}

        const element = document.createElement('div');
        document.body.appendChild(element);

        expect(() => new Nameless(element)).toThrow('must have a "NAME"');
        expect(() => new Widget('#missing')).toThrow('Invalid selector');
    });

    it('merges defaults, dataset values, and explicit options in precedence order', () => {
        const element = document.createElement('div');
        element.dataset.label = 'dataset';
        element.dataset.count = '2';
        document.body.appendChild(element);
        const initSpy = vi.spyOn(Widget.prototype, 'init');

        const widget = new Widget(element, {label: 'explicit'});

        expect(widget.options.label).toBe('explicit');
        expect(widget.options.count).toBe(2);
        expect(initSpy).toHaveBeenCalledOnce();
        expect(initSpy.mock.instances[0]).toBe(widget);
    });

    it('attaches instance metadata and completes initialization on animation frame', async () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const onCreate = vi.fn();
        const onInited = vi.fn();
        const widget = new Widget(element, {$onCreate: onCreate, $onInited: onInited});

        expect(Widget.get(element)).toBe(widget);
        expect(element.hasAttribute(Widget.ATTR_KEY)).toBe(true);
        expect(element.hasAttribute(Widget.DATA_KEY)).toBe(true);
        expect(element.getAttribute('z-use')).toBe(Widget.NAME);
        expect(widget.inited).toBe(false);
        expect(onCreate).toHaveBeenCalledOnce();

        await flushAnimationFrame();

        expect(widget.inited).toBe(true);
        expect(widget.afterInitCalls).toBe(1);
        expect(onInited).toHaveBeenCalledOnce();
    });

    it('ensure reuses valid instances and rejects duplicate construction', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const widget = Widget.ensure(element, {label: 'first'});

        expect(Widget.ensure(element, {label: 'updated'})).toBe(widget);
        expect(widget.options.label).toBe('updated');
        expect(() => new Widget(element)).toThrow('has been initialized');
    });

    it('tracks keyed multi-instances and promotes a remaining instance on destroy', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const first = new MultiWidget(element, {key: 'first'});
        const second = new MultiWidget(element, {key: 'second'});

        expect(MultiWidget.get(element, 'first')).toBe(first);
        expect(MultiWidget.get(element, 'second')).toBe(second);
        expect(MultiWidget.getAll()).toEqual([first, second]);

        second.destroy();
        expect(MultiWidget.get(element, 'second')).toBeUndefined();
        expect(MultiWidget.get(element)).toBe(first);
        expect(element.hasAttribute(MultiWidget.ATTR_KEY)).toBe(true);
    });

    it('emits namespaced events and supports one/off', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const widget = new Widget(element);
        const regular = vi.fn();
        const once = vi.fn();
        widget.on('changed', regular);
        widget.one('changed', once);

        widget.emit('changed', 'first');
        widget.emit('changed', 'second');
        expect(regular).toHaveBeenCalledTimes(2);
        expect(once).toHaveBeenCalledOnce();

        widget.off('changed');
        widget.emit('changed', 'third');
        expect(regular).toHaveBeenCalledTimes(2);
    });

    it('renders class/style options and executes component commands', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const widget = new Widget(element);

        widget.render({$class: ['base', {active: true}], $style: {color: 'red'}});

        expect(element.classList.contains('base')).toBe(true);
        expect(element.classList.contains('active')).toBe(true);
        expect(element.style.color).toBe('red');
        expect(widget.executeCommand('setLabel', ['command'])).toBe('command');
    });

    it('destroys detached components after the requested delay', async () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const widget = new Widget(element);
        const onDestroy = vi.fn();
        widget.setOptions({$onDestroy: onDestroy});
        element.remove();

        widget.autoDestroy(25);
        await vi.advanceTimersByTimeAsync(24);
        expect(widget.destroyed).toBe(false);
        await vi.advanceTimersByTimeAsync(1);

        expect(widget.destroyed).toBe(true);
        expect(onDestroy).toHaveBeenCalledOnce();
        expect(Widget.get(element)).toBeUndefined();
    });

    it('destroy is idempotent and cancels initialization scheduled before destruction', async () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const onDestroy = vi.fn();
        const widget = new Widget(element, {$onDestroy: onDestroy});

        widget.destroy();
        widget.destroy();
        await flushAnimationFrame();

        expect(widget.destroyed).toBe(true);
        expect(widget.inited).toBe(false);
        expect(widget.afterInitCalls).toBe(0);
        expect(onDestroy).toHaveBeenCalledOnce();
        expect(element.hasAttribute(Widget.ATTR_KEY)).toBe(false);
        expect(element.hasAttribute(Widget.DATA_KEY)).toBe(false);
        expect(element.hasAttribute('z-use')).toBe(false);
    });
});
