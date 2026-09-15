import {ZuiElement} from './element';

import type {Component, ComponentOptions} from '../component';

export type ElementComponentOptions<O extends object> = Partial<ComponentOptions<O>> & {$replace?: boolean};

/** Owns a vanilla Component instance without replacing the custom-element host. */
export abstract class ComponentElement<P extends object, O extends object> extends ZuiElement<P> {
    protected _instance?: Component<O>;

    protected _render(): void {
        const options: ElementComponentOptions<O> = {
            ...this._componentOptions(),
            $replace: false,
            $optionsFromDataset: false,
            $notDestroyOnDetach: true,
        };
        if (this._instance && !this._instance.destroyed) {
            if (this._instance.inited) {
                this._instance.render(options);
            } else {
                this._instance.setOptions(options);
            }
        } else {
            const instance = this._createComponent(this._container!, {
                ...options,
                $onInited: () => {
                    if (this._instance === instance) {
                        this._markReady();
                    }
                },
            });
            this._instance = instance;
        }
    }

    protected _destroy(): void {
        const instance = this._instance;
        this._instance = undefined;
        instance?.destroy();
    }

    protected abstract _componentOptions(): ElementComponentOptions<O>;

    protected abstract _createComponent(container: HTMLElement, options: ElementComponentOptions<O>): Component<O>;
}
