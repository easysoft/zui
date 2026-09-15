import {Component as View} from 'preact';
import {describe, expect, expectTypeOf, it, vi} from 'vitest';
import {Component, ComponentFromReact, createWebComponent, defineWebComponent, numberProperty, property} from '@zui/core';
import {flushAnimationFrame} from '../setup/dom';

import type {ComponentOptions, WebComponentConfig, WebComponentInstance} from '@zui/core';

type CounterProps = {count: number; items?: string[]};

class CounterView extends View<CounterProps> {
    componentWillUnmount(): void {
        // Spied on to verify that the factory unmounts the complete Preact tree.
    }

    render() {
        return <span>{`${this.props.count}:${this.props.items?.join(',') ?? ''}`}</span>;
    }
}

class NativeCounter extends Component<CounterProps> {
    static NAME = 'FactoryNativeCounter';

    afterInit() {
        this.render();
    }

    render(options?: Partial<ComponentOptions<CounterProps>>) {
        super.render(options);
        this.element.textContent = String(this.options.count);
    }
}

class WrappedCounter extends ComponentFromReact<CounterProps, CounterView> {
    static NAME = 'FactoryWrappedCounter';
    static Component = CounterView;
}

const properties = {count: numberProperty('count', 1), items: property<string[] | undefined>()};

async function flush() {
    await Promise.resolve();
    await flushAnimationFrame();
    await Promise.resolve();
}

describe('library-owned custom element factory', () => {
    it('upgrades from Component.register(), preserving early properties and typed getters', async () => {
        class Owner extends Component {
            static NAME = 'FactoryHTTPPager';
            static WebComponent: WebComponentConfig<CounterProps, CounterProps, {doubled: number}> = {
                autoDefine: true,
                component: CounterView,
                properties,
                getters: {doubled: props => props.count * 2},
            };
        }
        document.body.innerHTML = '<zui-factory-http-pager count="2"></zui-factory-http-pager>';
        const element = document.body.firstElementChild as WebComponentInstance<CounterProps, {doubled: number}>;
        element.count = 7;
        element.items = ['early'];
        Owner.register(undefined, 'factory-alias');
        await element.ready;
        expect(Component.map.get('factory-alias')).toBe(Owner);
        const Element = createWebComponent(Owner.WebComponent);
        expect(customElements.get('zui-factory-http-pager')).toBe(Element);
        expect(createWebComponent(Owner.WebComponent)).toBe(Element);
        expect(() => Owner.register()).not.toThrow();
        expect(element.textContent).toBe('7:early');
        expect(element.doubled).toBe(14);
        expectTypeOf(new Element().count).toEqualTypeOf<number>();
        expectTypeOf(new Element().doubled).toEqualTypeOf<number>();
        expectTypeOf(new Element().items).toEqualTypeOf<string[] | undefined>();
        expect(Reflect.set(element, 'doubled', 99)).toBe(false);
    });

    it('keeps absent and disabled configurations manual and honors a custom tag name', async () => {
        class Unsupported extends Component {
            static NAME = 'FactoryUnsupported';
        }
        class Manual extends Component {
            static NAME = 'FactoryManual';
            static WebComponent = {autoDefine: false, tagName: 'app-factory-counter', component: CounterView, properties};
        }
        Unsupported.register();
        Manual.register();
        expect(customElements.get('zui-factory-unsupported')).toBeUndefined();
        expect(customElements.get('app-factory-counter')).toBeUndefined();
        createWebComponent(Manual.WebComponent);
        expect(customElements.get('app-factory-counter')).toBeUndefined();
        const Element = defineWebComponent(Manual.WebComponent);
        expect(defineWebComponent(Manual.WebComponent)).toBe(Element);
        const element = new Element();
        document.body.append(element);
        await element.ready;
        expect(element.textContent).toBe('1:');
        class Auto extends Component {
            static NAME = 'FactoryAutoNamed';
            static WebComponent = {...Manual.WebComponent, autoDefine: true, tagName: 'app-factory-auto'};
        }
        Auto.register();
        expect(customElements.get('app-factory-auto')).toBe(createWebComponent(Auto.WebComponent));
    });

    it.each([NativeCounter, WrappedCounter])('owns a %s instance across updates and reconnects', async (Constructor) => {
        const Element = defineWebComponent<CounterProps>({component: Constructor, properties}, `test-${Constructor.NAME.toLowerCase()}`);
        const element = new Element();
        const destination = document.createElement('div');
        document.body.append(element, destination);
        await flush();
        await element.ready;
        const container = element.firstElementChild as HTMLElement;
        const instance = Constructor.get(container)!;
        expect(instance).toBeInstanceOf(Constructor);
        expect(instance.options.$notDestroyOnDetach).toBe(true);
        expect(instance.options.$optionsFromDataset).toBe(false);
        element.count = 3;
        await flush();
        expect(Constructor.get(container)).toBe(instance);
        expect(element.textContent).toContain('3');
        destination.append(element);
        await flush();
        expect(instance.destroyed).toBe(false);
        element.remove();
        await flush();
        expect(instance.destroyed).toBe(true);
        expect(Constructor.get(container)).toBeUndefined();
        document.body.append(element);
        await flush();
        await element.ready;
        expect(Constructor.get(element.firstElementChild as HTMLElement)).not.toBe(instance);
        expect(element.count).toBe(3);
    });

    it('cleans up Preact views after removal and retains them during same-turn moves', async () => {
        const unmount = vi.spyOn(CounterView.prototype, 'componentWillUnmount');
        const Element = defineWebComponent<CounterProps>({component: CounterView, properties}, 'test-factory-preact');
        const element = new Element();
        const destination = document.createElement('div');
        document.body.append(element, destination);
        await element.ready;
        destination.append(element);
        await flush();
        expect(unmount).not.toHaveBeenCalled();
        element.remove();
        await flush();
        expect(unmount).toHaveBeenCalledOnce();
        expect(element.children).toHaveLength(0);
    });

    it('skips automatic definition when the Custom Elements API is unavailable', () => {
        class Owner extends Component {
            static NAME = 'FactoryNoRegistry';
            static WebComponent = {autoDefine: true, component: CounterView, properties};
        }
        vi.stubGlobal('customElements', undefined);
        expect(() => Owner.register()).not.toThrow();
        expect(Component.map.get('factorynoregistry')).toBe(Owner);
    });

    it('reports collisions and allows retry after an invalid tag name', () => {
        const config = {component: CounterView, properties};
        const Element = createWebComponent(config);
        expect(() => Element.define('invalid')).toThrow();
        expect(() => Element.define('test-factory-retry')).not.toThrow();
        expect(() => defineWebComponent({...config}, 'test-factory-retry')).toThrow('already registered');
        expect(() => defineWebComponent(config)).toThrow('tagName is required');
        expect(() => createWebComponent({
            component: CounterView, properties, getters: {count: () => 2},
        })).toThrow('getter conflicts');
        expect(() => defineWebComponent({
            component: (_props: {title: string}) => null,
            properties: {title: property<string>()},
        }, 'test-factory-native-property')).toThrow('option conflicts');
    });
});
