import {describe, expect, it} from 'vitest';
import {ZuiElement, booleanProperty, numberProperty, stringProperty} from '@zui/core';

type CounterOptions = {count: number; disabled: boolean; label: string; items: string[] | undefined};

class CounterElement extends ZuiElement<CounterOptions> {
    static properties = {
        count: numberProperty('count', 1, 1),
        disabled: booleanProperty('disabled'),
        label: stringProperty('label'),
        items: {},
    };

    declare count: number;
    declare disabled: boolean;
    declare label: string;
    declare items: string[] | undefined;

    renders = 0;
    destroys = 0;

    protected _render() {
        this.renders++;
        this._container!.textContent = `${this.label}:${this.count}`;
        this._markReady();
    }

    protected _destroy() {
        this.destroys++;
    }
}

CounterElement.define('zui-test-counter');

async function flush() {
    await Promise.resolve();
    await Promise.resolve();
}

describe('custom element runtime', () => {
    it('upgrades existing markup and preserves properties assigned before registration', async () => {
        document.body.innerHTML = '<zui-test-upgrade count="2"></zui-test-upgrade>';
        const element = document.body.firstElementChild as CounterElement;
        const items = ['before registration'];
        element.count = 7;
        element.items = items;
        // A distinct class owns its accessors, as production adapters do.
        class BeforeDefineElement extends ZuiElement<CounterOptions> {
            static properties = CounterElement.properties;
            protected _render() {
                this._container!.textContent = String(this.options.count);
                this._markReady();
            }

            protected _destroy() {
                // This fixture owns no resources beyond the runtime mount.
            }
        }
        BeforeDefineElement.define('zui-test-upgrade');
        await element.ready;
        expect(element.count).toBe(7);
        expect(element.items).toBe(items);
        expect(element.textContent).toBe('7');
    });

    it('batches updates and uses explicit HTML boolean and number conversions', async () => {
        const element = document.createElement('zui-test-counter') as CounterElement;
        document.body.append(element);
        element.label = 'Count';
        element.setAttribute('count', '3');
        element.setAttribute('disabled', 'false');
        await element.ready;
        expect(element.renders).toBe(1);
        expect(element.textContent).toBe('Count:3');
        expect(element.disabled).toBe(true);
        element.disabled = false;
        element.setAttribute('count', 'Infinity');
        await flush();
        expect(element.hasAttribute('disabled')).toBe(false);
        expect(element.count).toBe(1);
        expect(element.renders).toBe(2);
        expect(() => element.setOptions({unknown: true} as Partial<CounterOptions>)).toThrow('Unknown element option');
    });

    it('preserves a moved instance and recreates its mount after a real disconnection', async () => {
        const element = document.createElement('zui-test-counter') as CounterElement;
        const destination = document.createElement('div');
        document.body.append(element, destination);
        element.count = 9;
        await element.ready;
        const mount = element.firstElementChild;
        destination.append(element);
        await flush();
        expect(element.destroys).toBe(0);
        expect(element.firstElementChild).toBe(mount);
        element.remove();
        await flush();
        expect(element.destroys).toBe(1);
        expect(element.children).toHaveLength(0);
        document.body.append(element);
        await element.ready;
        expect(element.count).toBe(9);
        expect(element.firstElementChild).not.toBe(mount);
    });

    it('makes repeated registration idempotent and reports conflicting definitions', () => {
        expect(() => CounterElement.define('zui-test-counter')).not.toThrow();
        class OtherElement extends CounterElement {}
        expect(() => OtherElement.define('zui-test-counter')).toThrow('already registered');
    });
});
