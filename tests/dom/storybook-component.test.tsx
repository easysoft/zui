import {Component as View} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Component} from '@zui/core';
import {createNativeController, createPreactController} from '../../.storybook/zui-controller';
import {flushAnimationFrame} from '../setup/dom';

import type {ComponentOptions} from '@zui/core';
import type {StoryApi} from '../../.storybook/zui-controller';

type Args = {count: number};

class Counter extends Component<Args> {
    static NAME = 'StoryCounter';

    afterInit() {
        this.render();
    }

    render(options?: Partial<ComponentOptions<Args>>) {
        super.render(options);
        this.element.textContent = String(this.options.count);
    }
}

describe('Storybook component adapters', () => {
    it('preserves a Preact tree, then unmounts nested native instances and invalidates callbacks on key changes', async () => {
        const mounted = vi.fn();
        const unmounted = vi.fn();
        const updateArgs = vi.fn();
        const callbacks: (() => void)[] = [];
        class NestedNative extends Component {
            static NAME = 'StoryNestedNative';
        }
        class CounterView extends View<Args> {
            native?: NestedNative;

            componentDidMount() {
                mounted();
                this.native = new NestedNative(this.base as HTMLElement);
            }

            componentWillUnmount() {
                unmounted();
                this.native?.destroy();
            }

            render() {
                return <button>{this.props.count}</button>;
            }
        }
        const controller = createPreactController(CounterView, {
            key: (args: Args & {generation: number}) => args.generation,
            props(args, api) {
                callbacks.push(api.guard(() => api.updateArgs({count: args.count})));
                return {count: args.count};
            },
        }, updateArgs);
        document.body.append(controller.root);
        controller.update({count: 1, generation: 0});
        await flushAnimationFrame();
        const button = controller.root.firstChild;
        (button as HTMLButtonElement).focus();
        controller.update({count: 2, generation: 0});
        expect(controller.root.firstChild).toBe(button);
        expect(document.activeElement).toBe(button);
        expect(mounted).toHaveBeenCalledTimes(1);
        expect(controller.root.textContent).toBe('2');
        controller.update({count: 3, generation: 1});
        expect(mounted).toHaveBeenCalledTimes(2);
        expect(unmounted).toHaveBeenCalledTimes(1);
        callbacks[0]();
        expect(updateArgs).not.toHaveBeenCalled();
        callbacks.at(-1)!();
        expect(updateArgs).toHaveBeenCalledWith({count: 3});
        controller.dispose();
        controller.dispose();
        expect(unmounted).toHaveBeenCalledTimes(2);
        expect(NestedNative.getAll()).toHaveLength(0);
    });

    it('keeps native instances independent, preserves callback contracts and updates only when ready', async () => {
        const onInited = vi.fn();
        const ready = vi.fn();
        const update = vi.fn((instance: Counter, options: ComponentOptions<Args>) => instance.render(options));
        const create = () => createNativeController(Counter, {
            options: (args: Args) => ({...args, $onInited: onInited}),
            update,
            ready,
        }, vi.fn());
        const first = create();
        const second = create();
        document.body.append(first.root, second.root);
        first.update({count: 1});
        second.update({count: 9});
        await flushAnimationFrame();
        const instance = Counter.get(first.root.firstElementChild as HTMLElement)!;
        first.update({count: 2});
        expect(Counter.get(first.root.firstElementChild as HTMLElement)).toBe(instance);
        expect(first.root.textContent).toBe('2');
        expect(second.root.textContent).toBe('9');
        expect(update).toHaveBeenCalledTimes(1);
        expect(ready).toHaveBeenCalledTimes(2);
        expect(onInited.mock.contexts[0]).toBe(instance);
        first.dispose();
        expect(instance.destroyed).toBe(true);
        expect(second.root.textContent).toBe('9');
        second.dispose();
    });

    it('recreates on early updates and ignores late initialization after disposal', async () => {
        let finish!: () => void;
        class SlowCounter extends Counter {
            async afterInit() {
                await new Promise<void>((resolve) => {
                    finish = resolve;
                });
            }
        }
        const ready = vi.fn();
        const controller = createNativeController(SlowCounter, {
            options: (args: Args) => args,
            update: (instance, options) => instance.render(options),
            ready,
        }, vi.fn());
        document.body.append(controller.root);
        controller.update({count: 1});
        const first = Counter.get(controller.root.firstElementChild as HTMLElement)!;
        controller.update({count: 2});
        expect(first.destroyed).toBe(true);
        await flushAnimationFrame();
        const second = Counter.get(controller.root.firstElementChild as HTMLElement)!;
        expect(second.inited).toBe(true);
        expect(ready).not.toHaveBeenCalled();
        controller.dispose();
        finish();
        await Promise.resolve();
        await Promise.resolve();
        expect(ready).not.toHaveBeenCalled();
        expect(second.destroyed).toBe(true);
    });

    it('invalidates callbacks before teardown, including detached hosts, without losing this or return values', async () => {
        const updateArgs = vi.fn();
        const cleanup = vi.fn();
        let api!: StoryApi<Args>;
        const controller = createNativeController(Counter, {
            host(_args: Args, currentApi) {
                api = currentApi;
                api.onCleanup(cleanup);
                const target = document.createElement('div');
                return {root: target, target};
            },
            options: (args: Args) => args,
            update: 'recreate',
            beforeDestroy: () => api.updateArgs({count: 99}),
        }, updateArgs);
        document.body.append(controller.root);
        controller.update({count: 1});
        await flushAnimationFrame();
        const guarded = api.guard(function (this: {value: number}, count: number) {
            expect(this.value).toBe(count);
            api.updateArgs({count});
            return false;
        });
        expect(guarded.call({value: 7}, 7)).toBe(false);
        expect(updateArgs).toHaveBeenCalledTimes(1);
        controller.root.remove();
        expect(guarded.call({value: 7}, 7)).toBeUndefined();
        document.body.append(controller.root);
        controller.update({count: 2});
        expect(guarded.call({value: 7}, 7)).toBeUndefined();
        controller.dispose();
        controller.dispose();
        expect(cleanup).toHaveBeenCalledTimes(2);
        expect(updateArgs).toHaveBeenCalledTimes(1);
    });

    it('still destroys owned instances when a story teardown throws', async () => {
        const controller = createNativeController(Counter, {
            options: (args: Args) => args,
            update: 'recreate',
            beforeDestroy() {
                throw new Error('cleanup error');
            },
        }, vi.fn());
        document.body.append(controller.root);
        controller.update({count: 1});
        await flushAnimationFrame();
        const instance = Counter.get(controller.root.firstElementChild as HTMLElement)!;
        expect(() => controller.dispose()).toThrow('cleanup error');
        expect(instance.destroyed).toBe(true);
        expect(controller.root.childElementCount).toBe(0);
        expect(() => controller.dispose()).not.toThrow();
    });

    it('recreates self-destroyed native components and ignores their late callbacks', async () => {
        const changed = vi.fn();
        const update = vi.fn((instance: Counter, options: Partial<ComponentOptions<Args>>) => instance.render(options));
        let callback!: () => void;
        const controller = createNativeController(Counter, {
            options(args: Args, api) {
                callback = api.guard(() => api.updateArgs({count: 99}));
                return args;
            },
            update,
        }, changed);
        document.body.append(controller.root);
        controller.update({count: 1});
        await flushAnimationFrame();
        const first = Counter.get(controller.root.firstElementChild as HTMLElement)!;
        first.destroy();
        callback();
        expect(changed).not.toHaveBeenCalled();
        controller.update({count: 2});
        await flushAnimationFrame();
        expect(update).not.toHaveBeenCalled();
        expect(Counter.get(controller.root.firstElementChild as HTMLElement)).not.toBe(first);
        expect(controller.root.textContent).toBe('2');
        controller.dispose();
    });
});
