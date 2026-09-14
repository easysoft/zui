import {h} from 'preact';
import {Button} from '@zui/button/react';
import '@zui/button/css';
import {PreactElement} from './preact-element';
import {booleanProperty, stringProperty} from './properties';
import './style.css';

import type {ButtonProps} from '@zui/button';

export type ButtonElementOptions = Pick<ButtonProps, 'type' | 'btnType' | 'size' | 'icon' | 'url' | 'target' | 'disabled' | 'loading' | 'loadingText' | 'active'> & {
    text: string;
    name: string;
    value: string;
    form: string;
};

/** Light DOM button retaining a native button or anchor as its interactive node. */
export class ZuiButtonElement extends PreactElement<ButtonElementOptions> {
    static properties = {
        text: stringProperty('text'),
        type: stringProperty('type'),
        btnType: stringProperty('btn-type', 'button'),
        size: stringProperty('size'),
        icon: stringProperty('icon'),
        url: stringProperty('url'),
        target: stringProperty('target'),
        name: stringProperty('name'),
        value: stringProperty('value'),
        form: stringProperty('form'),
        disabled: booleanProperty('disabled'),
        loading: booleanProperty('loading'),
        loadingText: stringProperty('loading-text'),
        active: booleanProperty('active'),
    };

    declare text: string;
    declare type: string;
    declare btnType: ButtonProps['btnType'];
    declare size: ButtonProps['size'];
    declare icon: string;
    declare url: string;
    declare target: string;
    declare name: string;
    declare value: string;
    declare form: string;
    declare disabled: boolean;
    declare loading: boolean;
    declare loadingText: string;
    declare active: boolean;

    click(): void {
        this._container?.querySelector<HTMLElement>('button, a')?.click();
    }

    protected _renderView() {
        const {name, value, form, ...props} = this.options;
        return h(Button, {
            ...props,
            hint: this.title || undefined,
            attrs: {
                ...this._accessibleAttributes(),
                name: name || undefined,
                value,
                form: form || undefined,
            },
        });
    }
}

/** Register zui-button; repeated calls with this implementation are harmless. */
export function defineButton(): void {
    ZuiButtonElement.define('zui-button');
}

declare global {
    interface HTMLElementTagNameMap {
        'zui-button': ZuiButtonElement;
    }
}
