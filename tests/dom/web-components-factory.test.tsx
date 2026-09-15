import {Component as View} from 'preact';
import {describe, expect, expectTypeOf, it, vi} from 'vitest';
import {Component, ComponentFromReact, createWebComponent, defineWebComponent, property} from '@zui/core';
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

const properties = {count: property.number('count', 1), items: property<string[] | undefined>()};

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
        const Element = createWebComponent(Owner);
        expect(customElements.get('zui-factory-http-pager')).toBe(Element);
        expect(createWebComponent(Owner)).toBe(Element);
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
        class Manual extends WrappedCounter {
            static NAME = 'FactoryManual';
            static WebComponent = {autoDefine: false, tagName: 'app-factory-counter', properties};
        }
        Unsupported.register();
        Manual.register();
        expect(customElements.get('zui-factory-unsupported')).toBeUndefined();
        expect(customElements.get('app-factory-counter')).toBeUndefined();
        createWebComponent(Manual);
        expect(customElements.get('app-factory-counter')).toBeUndefined();
        const Element = defineWebComponent(Manual);
        expect(defineWebComponent(Manual)).toBe(Element);
        const element = new Element();
        document.body.append(element);
        await element.ready;
        expect(element.textContent).toBe('1:');
        class Auto extends WrappedCounter {
            static NAME = 'FactoryAutoNamed';
            static WebComponent = {...Manual.WebComponent, autoDefine: true, tagName: 'app-factory-auto'};
        }
        Auto.register();
        expect(customElements.get('app-factory-auto')).toBe(createWebComponent(Auto));
    });

    it('infers the Preact renderer while preserving mapped properties and computed types', async () => {
        class Owner extends WrappedCounter {
            static NAME = 'FactoryInferredView';
            static WebComponent: WebComponentConfig<{value: number}, CounterProps, {doubled: number}> = {
                autoDefine: true,
                properties: {value: property.number('value', 2)},
                getters: {doubled: props => props.value * 2},
                options: (props, context) => ({count: context.element.doubled, items: [String(props.value)]}),
            };
        }
        const Element = createWebComponent(Owner);
        expect(customElements.get('zui-factory-inferred-view')).toBeUndefined();
        Owner.register();
        expect(defineWebComponent(Owner)).toBe(Element);
        const element = new Element();
        expectTypeOf(element.value).toEqualTypeOf<number>();
        expectTypeOf(element.doubled).toEqualTypeOf<number>();
        document.body.append(element);
        await element.ready;
        expect(element.textContent).toBe('4:2');
        expect(Owner.get(element.firstElementChild as HTMLElement)).toBeUndefined();
        element.value = 3;
        await flush();
        expect(element.textContent).toBe('6:3');
        expect(element.doubled).toBe(6);
        expect(Reflect.set(element, 'doubled', 99)).toBe(false);
        expect(() => createWebComponent(Owner.WebComponent)).toThrow('component is required');
    });

    it('infers native owners and gives subclasses sharing a config separate constructors', async () => {
        class Parent extends NativeCounter {
            static NAME = 'FactoryInferredNative';
            // A plain Component must still use its native lifecycle even with this property.
            static Component = CounterView;
            static WebComponent = {autoDefine: true, properties};
        }
        class Child extends Parent {
            static NAME = 'FactoryInferredChild';
        }
        expect(Parent.WebComponent).toBe(Child.WebComponent);
        const ParentElement = createWebComponent(Parent);
        const ChildElement = createWebComponent(Child);
        expect(ParentElement).not.toBe(ChildElement);
        Parent.register();
        Child.register();
        expect(customElements.get('zui-factory-inferred-native')).toBe(ParentElement);
        expect(customElements.get('zui-factory-inferred-child')).toBe(ChildElement);
        const parent = new ParentElement();
        const child = new ChildElement();
        document.body.append(parent, child);
        await flush();
        await Promise.all([parent.ready, child.ready]);
        const parentInstance = Parent.get(parent.firstElementChild as HTMLElement)!;
        const childInstance = Child.get(child.firstElementChild as HTMLElement)!;
        expect(parentInstance.constructor).toBe(Parent);
        expect(childInstance.constructor).toBe(Child);
        child.count = 5;
        await flush();
        expect(child.textContent).toBe('5');
        expect(parent.textContent).toBe('1');
        child.remove();
        await flush();
        expect(childInstance.destroyed).toBe(true);
        expect(parentInstance.destroyed).toBe(false);
        expect(createWebComponent(Child)).toBe(ChildElement);
    });

    it('uses a subclass Preact renderer even when its configuration is inherited', async () => {
        class Parent extends WrappedCounter {
            static NAME = 'FactoryInheritedView';
            static WebComponent = {properties};
        }
        class ChildView extends CounterView {
            render() {
                return <b>{`child:${this.props.count}`}</b>;
            }
        }
        class Child extends Parent {
            static NAME = 'FactoryInheritedChildView';
            static Component = ChildView;
        }
        const ParentElement = defineWebComponent(Parent);
        const ChildElement = defineWebComponent(Child);
        expect(ParentElement).not.toBe(ChildElement);
        const parent = new ParentElement();
        const child = new ChildElement();
        document.body.append(parent, child);
        await Promise.all([parent.ready, child.ready]);
        expect(parent.textContent).toBe('1:');
        expect(child.textContent).toBe('child:1');
    });

    it('lets an explicit component retain the ComponentFromReact wrapper', async () => {
        class Owner extends WrappedCounter {
            static NAME = 'FactoryExplicitWrapper';
            static WebComponent: WebComponentConfig<CounterProps> = {autoDefine: true, component: Owner, properties};
        }
        Owner.register();
        const Element = createWebComponent(Owner);
        expect(createWebComponent(Owner.WebComponent)).toBe(Element);
        const element = new Element();
        document.body.append(element);
        await flush();
        await element.ready;
        const instance = Owner.get(element.firstElementChild as HTMLElement)!;
        expect(instance).toBeInstanceOf(Owner);
        expect(instance.$).toBeInstanceOf(CounterView);
        element.remove();
        await flush();
        expect(instance.destroyed).toBe(true);
        expect(instance.$).toBeNull();
    });

    it('defines a native component with external mapped options and typed getters', async () => {
        class ExternalCounter extends NativeCounter {
            static NAME = 'FactoryExternalNative';
        }
        const config: WebComponentConfig<{value: number}, CounterProps, {doubled: number}> = {
            autoDefine: false,
            properties: {value: property.number('value', 2)},
            getters: {doubled: props => props.value * 2},
            options: (_props, context) => ({count: context.element.doubled}),
        };
        ExternalCounter.register();
        expect(customElements.get('zui-factory-external-native')).toBeUndefined();
        const Element = createWebComponent(ExternalCounter, config);
        expect(defineWebComponent(ExternalCounter, config)).toBe(Element);
        expect(defineWebComponent(ExternalCounter, config)).toBe(Element);
        expect(ExternalCounter.WebComponent).toBeUndefined();
        const element = new Element();
        expectTypeOf(element.value).toEqualTypeOf<number>();
        expectTypeOf(element.doubled).toEqualTypeOf<number>();
        document.body.append(element);
        await flush();
        await element.ready;
        const instance = ExternalCounter.get(element.firstElementChild as HTMLElement)!;
        expect(instance).toBeInstanceOf(ExternalCounter);
        expect(element.textContent).toBe('4');
        element.value = 3;
        await flush();
        expect(element.textContent).toBe('6');
        element.remove();
        await flush();
        expect(instance.destroyed).toBe(true);
    });

    it('infers an external ComponentFromReact renderer without creating its wrapper', async () => {
        const config = {properties};
        const Element = defineWebComponent(WrappedCounter, config, 'test-factory-external-wrapper');
        expect(createWebComponent(WrappedCounter, config)).toBe(Element);
        expect(WrappedCounter.WebComponent).toBeUndefined();
        const element = new Element();
        document.body.append(element);
        await element.ready;
        expect(element.textContent).toBe('1:');
        expect(WrappedCounter.get(element.firstElementChild as HTMLElement)).toBeUndefined();
        element.count = 4;
        await flush();
        expect(element.textContent).toBe('4:');
    });

    it('accepts a Preact function and gives an explicit tag precedence over config.tagName', async () => {
        const FunctionalCounter = (props: CounterProps) => <span>{props.count}</span>;
        const config = {tagName: 'test-factory-unused-tag', properties};
        const Element = defineWebComponent(FunctionalCounter, config, 'test-factory-external-function');
        expect(customElements.get(config.tagName)).toBeUndefined();
        expect(defineWebComponent(FunctionalCounter, config, 'test-factory-external-function')).toBe(Element);
        expect(() => defineWebComponent(FunctionalCounter, {properties})).toThrow('tagName is required');
        const element = new Element();
        expectTypeOf(element.count).toEqualTypeOf<number>();
        document.body.append(element);
        await element.ready;
        expect(element.textContent).toBe('1');
    });

    it('keeps Preact components separate when they share one external configuration', async () => {
        class FirstView extends CounterView {
            static NAME = 'FactoryExternalFirstView';
        }
        class SecondView extends CounterView {
            static NAME = 'FactoryExternalSecondView';
            render() {
                return <b>{`second:${this.props.count}`}</b>;
            }
        }
        const config = {properties};
        const First = defineWebComponent(FirstView, config);
        const Second = defineWebComponent(SecondView, config);
        expect(First).not.toBe(Second);
        expect(customElements.get('zui-factory-external-first-view')).toBe(First);
        expect(customElements.get('zui-factory-external-second-view')).toBe(Second);
        expect(createWebComponent(FirstView, config)).toBe(First);
        const first = new First();
        const second = new Second();
        document.body.append(first, second);
        await Promise.all([first.ready, second.ready]);
        expect(first.textContent).toBe('1:');
        expect(second.textContent).toBe('second:1');
    });

    it('keeps different external configurations on the same component independent', async () => {
        const firstConfig = {tagName: 'test-factory-variant-one', properties};
        const secondConfig = {
            tagName: 'test-factory-variant-two',
            properties: {...properties, count: property.number('count', 7)},
            getters: {doubled: (props: CounterProps) => props.count * 2},
        };
        const First = defineWebComponent(NativeCounter, firstConfig);
        const Second = defineWebComponent(NativeCounter, secondConfig);
        expect(First).not.toBe(Second);
        expect(defineWebComponent(NativeCounter, firstConfig)).toBe(First);
        expect(defineWebComponent(NativeCounter, secondConfig)).toBe(Second);
        const first = new First();
        const second = new Second();
        document.body.append(first, second);
        await flush();
        await Promise.all([first.ready, second.ready]);
        expect(first.textContent).toBe('1');
        expect(second.textContent).toBe('7');
        expect(second.doubled).toBe(14);
        second.count = 8;
        await flush();
        expect(second.textContent).toBe('8');
        expect(first.textContent).toBe('1');
    });

    it('reuses external overrides while preserving unmodified owner configuration fields', async () => {
        class Owner extends WrappedCounter {
            static NAME = 'FactoryExternalOverride';
            static WebComponent: WebComponentConfig<CounterProps, CounterProps, {doubled: number}> = {
                tagName: 'test-factory-static-config',
                component: CounterView,
                properties,
                getters: {doubled: props => props.count * 2},
            };
        }
        const declared = Owner.WebComponent;
        const override: WebComponentConfig<CounterProps, CounterProps, {doubled: number}> = {
            tagName: 'test-factory-overridden-config',
            component: NativeCounter,
            properties: {...properties, count: property.number('count', 3)},
        };
        const Element = createWebComponent(Owner, override);
        expect(createWebComponent(Owner, override)).toBe(Element);
        expect(defineWebComponent(Owner, override)).toBe(Element);
        expect(defineWebComponent(Owner, override)).toBe(Element);
        expect(customElements.get(declared.tagName!)).toBeUndefined();
        expect(Owner.WebComponent).toBe(declared);
        expect(declared.properties.count.defaultValue).toBe(1);
        const element = new Element();
        document.body.append(element);
        await flush();
        await element.ready;
        expect(element.textContent).toBe('3');
        expect(element.doubled).toBe(6);
        expect(NativeCounter.get(element.firstElementChild as HTMLElement)).toBeInstanceOf(NativeCounter);
    });

    it('rejects configurations without a usable component or owner', () => {
        expect(() => createWebComponent({properties})).toThrow('component is required');
        expect(() => defineWebComponent({properties}, 'test-factory-missing-component')).toThrow('component is required');
        expect(customElements.get('test-factory-missing-component')).toBeUndefined();
        class MissingView extends ComponentFromReact {
            static NAME = 'FactoryMissingView';
            static WebComponent = {autoDefine: true, properties};
        }
        expect(() => MissingView.register()).toThrow('component is required');
        expect(customElements.get('zui-factory-missing-view')).toBeUndefined();
        // @ts-expect-error An owner must declare a WebComponent configuration.
        expect(() => createWebComponent(NativeCounter)).toThrow('must declare a WebComponent configuration');
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

    it('allows imports without a registry and defines elements when one becomes available', () => {
        class Owner extends Component {
            static NAME = 'FactoryNoRegistry';
            static WebComponent = {autoDefine: true, component: CounterView, properties};
        }
        const registry = customElements;
        vi.stubGlobal('customElements', undefined);
        expect(() => Owner.register()).not.toThrow();
        expect(Component.map.get('factorynoregistry')).toBe(Owner);
        const config = {tagName: 'test-factory-late-registry', properties};
        const Element = defineWebComponent(CounterView, config);
        expect(createWebComponent(CounterView, config)).toBe(Element);
        vi.stubGlobal('customElements', registry);
        expect(customElements.get(config.tagName)).toBeUndefined();
        expect(defineWebComponent(CounterView, config)).toBe(Element);
        expect(customElements.get(config.tagName)).toBe(Element);
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
