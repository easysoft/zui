import {h} from 'preact';
import {PreactElement, property} from '@zui/core';
import {Button} from '../component';

import type {ButtonProps} from '../types';

export type ButtonElementOptions = Pick<ButtonProps, 'type' | 'btnType' | 'url' | 'target' | 'disabled' | 'loading' | 'loadingText' | 'active'> & {
    size: '' | Exclude<NonNullable<ButtonProps['size']>, number>;
    icon: string;
    text: string;
    name: string;
    value: string;
    form: string;
};

/** Light DOM button retaining a native button or anchor as its interactive node. */
export class ZuiButtonElement extends PreactElement<ButtonElementOptions> {
    static properties = {
        text: property.string('text'),
        type: property.string('type'),
        btnType: property.string('btn-type', 'button'),
        size: property.string('size'),
        icon: property.string('icon'),
        url: property.string('url'),
        target: property.string('target'),
        name: property.string('name'),
        value: property.string('value'),
        form: property.string('form'),
        disabled: property.boolean('disabled'),
        loading: property.boolean('loading'),
        loadingText: property.string('loading-text'),
        active: property.boolean('active'),
    };

    declare text: string;
    declare type: string;
    declare btnType: ButtonProps['btnType'];
    declare size: ButtonElementOptions['size'];
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
        const {name, value, form, size, ...props} = this.options;
        return h(Button, {
            ...props,
            size: size || undefined,
            loadingIcon: {icon: '', className: 'spinner', 'aria-hidden': true},
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
