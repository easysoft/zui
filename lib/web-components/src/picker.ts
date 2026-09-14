import {createRef, h} from 'preact';
import {$, i18n, nextGid} from '@zui/core';
import {Picker} from '@zui/picker/react';
import '@zui/picker/css';
import '@zui/picker';
import '@zui/button/css';
import {PreactElement} from './preact-element';
import {booleanOrNumberProperty, booleanProperty, stringProperty} from './properties';
import './style.css';

import type {PickerOptions} from '@zui/picker';
import type {ComponentClass, Ref} from 'preact';
import type {PropertyChangeSource} from './element';

export type PickerElementOptions = Pick<PickerOptions, 'items' | 'multiple' | 'search'> & {
    value: string;
    name: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
};

export type PickerChangeDetail = {value: string; oldValue: string};

const messages = {
    zh_cn: {required: '请选择一项。', clear: '清除选择'},
    zh_tw: {required: '請選擇一項。', clear: '清除選擇'},
    en: {required: 'Please select an option.', clear: 'Clear selection'},
};

/** Form-associated picker. Its current value is separate from the value attribute. */
export class ZuiPickerElement extends PreactElement<PickerElementOptions> {
    static formAssociated = true;

    static properties = {
        value: stringProperty('value', '', false),
        name: stringProperty('name'),
        placeholder: stringProperty('placeholder'),
        disabled: booleanProperty('disabled'),
        readonly: booleanProperty('readonly'),
        required: booleanProperty('required'),
        multiple: booleanOrNumberProperty('multiple', false),
        search: booleanOrNumberProperty('search', true),
        items: {},
    };

    declare value: string;
    declare name: string;
    declare placeholder: string;
    declare disabled: boolean;
    declare readonly: boolean;
    declare required: boolean;
    declare multiple: boolean | number;
    declare search: boolean | number;
    declare items: PickerOptions['items'];

    private _internals = this.attachInternals();

    private _view = createRef<Picker>();

    private _controlId = `zui-picker-${nextGid()}`;

    private _emptyItems: PickerOptions['items'] = [];

    private _dirtyValue = false;

    private _formDisabled = false;

    private _rendering = false;

    private _valueVersion = 0;

    private _pendingUserChange?: {value: string; version: number};

    private _customValidity = '';

    private _restoreFocus = false;

    private _menuObserver?: MutationObserver;

    private _observedMenu?: Element;

    private _labelFrame = 0;

    constructor() {
        super();
        this.addEventListener('click', (event) => {
            // Native label activation dispatches its click at the custom-element host.
            if (event.target === this) {
                // Open after the click has reached PickPop's outside-click listener.
                cancelAnimationFrame(this._labelFrame);
                this._labelFrame = requestAnimationFrame(() => {
                    if (this.isConnected && !event.defaultPrevented) {
                        this.focus();
                        void this.show();
                    }
                });
            }
        });
    }

    get defaultValue(): string {
        return this.getAttribute('value') ?? '';
    }

    set defaultValue(value: string) {
        this.setAttribute('value', value);
    }

    get form(): HTMLFormElement | null {
        return this._internals.form;
    }

    get labels(): NodeList {
        return this._internals.labels;
    }

    get validity(): ValidityState {
        return this._internals.validity;
    }

    get validationMessage(): string {
        return this._internals.validationMessage;
    }

    get willValidate(): boolean {
        return this._internals.willValidate;
    }

    checkValidity(): boolean {
        return this._internals.checkValidity();
    }

    reportValidity(): boolean {
        return this._internals.reportValidity();
    }

    setCustomValidity(message: string): void {
        this._customValidity = String(message);
        this._syncForm();
        this._requestUpdate();
    }

    attributeChangedCallback(name: string, oldValue: string | null, value: string | null): void {
        if (name === 'value') {
            if (!this._dirtyValue) {
                this._setProperty('value', value ?? '', 'attribute');
            }
            return;
        }
        super.attributeChangedCallback(name, oldValue, value);
    }

    formAssociatedCallback(): void {
        this._requestUpdate();
    }

    formDisabledCallback(disabled: boolean): void {
        this._formDisabled = disabled;
        this._syncForm();
        this._requestUpdate();
    }

    formResetCallback(): void {
        this._dirtyValue = false;
        this._pendingUserChange = undefined;
        ++this._valueVersion;
        this._setProperty('value', this.defaultValue, 'attribute');
    }

    formStateRestoreCallback(state: string | File | FormData | null): void {
        if (typeof state === 'string') {
            this._setProperty('value', state);
        }
    }

    async show(): Promise<void> {
        await this.ready;
        if (this.isConnected && !this._disabled && !this.readonly) {
            await this._view.current?.open();
        }
    }

    async hide(): Promise<void> {
        await this._view.current?.close();
    }

    private get _disabled() {
        return this.disabled || this._formDisabled;
    }

    protected _focusTarget(): HTMLElement | null | undefined {
        return this._disabled ? null : this._container?.querySelector<HTMLElement>('.picker-select input:not([type="hidden"]), .picker-select');
    }

    protected _propertyChanged(name: string, _previous: unknown, source: PropertyChangeSource): void {
        if (name === 'value') {
            if (source !== 'attribute') {
                this._dirtyValue = true;
            }
            if (source !== 'internal') {
                ++this._valueVersion;
                this._pendingUserChange = undefined;
            }
        }
        this._syncForm();
    }

    private _message(key: 'required' | 'clear'): string {
        return i18n(messages, key, messages.en[key], this.lang?.toLowerCase().replace('-', '_') || undefined)!;
    }

    private _syncForm(): void {
        this._internals.setFormValue(this._disabled ? null : this.value, this.value);
        const missing = this.required && !this.value;
        const flags: ValidityStateFlags = this._customValidity ? {customError: true} : missing ? {valueMissing: true} : {};
        const message = this._customValidity || (missing ? this._message('required') : '');
        this._internals.setValidity(flags, message, this._focusTarget() ?? undefined);
    }

    private _beforeChange = (value: string): boolean => {
        if (this._rendering || value === this.value) {
            return true;
        }
        if (this._disabled || this.readonly) {
            return false;
        }
        const version = this._valueVersion;
        if (!this._emit<PickerChangeDetail>('zui-before-change', {value, oldValue: this.value}, true) || version !== this._valueVersion) {
            return false;
        }
        this._pendingUserChange = {value, version};
        return true;
    };

    private _onChange = (value: string): void => {
        if (value === this.value) {
            return;
        }
        const pending = this._pendingUserChange;
        if (pending?.value === value && pending.version === this._valueVersion) {
            const oldValue = this.value;
            this._pendingUserChange = undefined;
            this._setProperty('value', value, 'internal');
            this._emit<PickerChangeDetail>('zui-change', {value, oldValue});
        } else {
            // A delayed Preact update must not overwrite a newer property assignment.
            void this._view.current?.setValue(this.value, true);
        }
    };

    private _onKeyDown = (event: KeyboardEvent): void => {
        if (event.isComposing || event.target instanceof HTMLInputElement || this._disabled || this.readonly) {
            return;
        }
        const pop = this._view.current?.pop;
        if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
            event.preventDefault();
            if (!this._view.current?.state.open || this._view.current.state.open === 'closing') {
                void this.show();
            } else if (pop) {
                $(pop.element).trigger(event.key === 'ArrowDown' ? 'activeNext' : event.key === 'ArrowUp' ? 'activePrev' : 'selectActive');
            }
        } else if (event.key === 'Escape') {
            event.preventDefault();
            void this.hide();
        }
    };

    private _syncAccessibility = (): void => {
        const trigger = this._container?.querySelector<HTMLElement>('.picker-select');
        if (!trigger) {
            return;
        }
        const search = trigger.querySelector<HTMLInputElement>('input:not([type="hidden"])');
        const control = search ?? trigger;
        const open = this._view.current?.state.open === true || this._view.current?.state.open === 'opening';
        trigger.setAttribute('role', search ? 'group' : 'combobox');
        trigger.tabIndex = this._disabled || search ? -1 : 0;
        if (search) {
            for (const name of ['aria-expanded', 'aria-haspopup', 'aria-required', 'aria-readonly', 'aria-controls', 'aria-activedescendant']) {
                trigger.removeAttribute(name);
            }
        }
        control.setAttribute('role', 'combobox');
        control.setAttribute('aria-expanded', String(open));
        control.setAttribute('aria-haspopup', 'listbox');
        control.setAttribute('aria-required', String(this.required));
        control.setAttribute('aria-disabled', String(this._disabled));
        control.setAttribute('aria-readonly', String(this.readonly));
        control.setAttribute('aria-invalid', String(this.willValidate && !this.validity.valid));
        const attrs = this._accessibleAttributes();
        const labelIds = Array.from(this.labels).map(label => (label as HTMLElement).id).filter(Boolean);
        if (!attrs['aria-label'] && !attrs['aria-labelledby']) {
            if (labelIds.length) {
                attrs['aria-labelledby'] = labelIds.join(' ');
            } else {
                attrs['aria-label'] = Array.from(this.labels).map(label => label.textContent?.trim()).join(' ') || this.placeholder;
            }
        }
        for (const [name, value] of Object.entries(attrs)) {
            control.setAttribute(name, value);
        }
        trigger.querySelectorAll<HTMLButtonElement>('button').forEach((button) => {
            button.setAttribute('aria-label', this._message('clear'));
            button.disabled = this._disabled || this.readonly;
        });
        const list = this._view.current?.pop?.element?.querySelector<HTMLElement>('.picker-menu-list') ?? undefined;
        if (list) {
            list.id = `${this._controlId}-options`;
            list.setAttribute('role', 'listbox');
            list.setAttribute('aria-multiselectable', String(!!this.multiple));
            control.setAttribute('aria-controls', list.id);
            list.querySelectorAll<HTMLElement>('.menu-item > .item-inner').forEach((item, index) => {
                item.parentElement?.setAttribute('role', 'presentation');
                item.id = `${this._controlId}-option-${index}`;
                item.setAttribute('role', 'option');
                item.setAttribute('aria-selected', String(item.classList.contains('selected')));
                item.setAttribute('aria-disabled', String(item.classList.contains('disabled')));
            });
            const active = list.querySelector<HTMLElement>('.item-inner.active');
            if (active) {
                control.setAttribute('aria-activedescendant', active.id);
            } else {
                control.removeAttribute('aria-activedescendant');
            }
        } else {
            control.removeAttribute('aria-controls');
            control.removeAttribute('aria-activedescendant');
        }
        if (list !== this._observedMenu) {
            this._menuObserver?.disconnect();
            this._observedMenu = list;
            if (list) {
                this._menuObserver = new MutationObserver(this._syncAccessibility);
                this._menuObserver.observe(list, {subtree: true, childList: true, attributes: true, attributeFilter: ['class']});
            }
        }
    };

    protected _render(): void {
        this._rendering = true;
        try {
            super._render();
        } finally {
            this._rendering = false;
        }
        this._syncForm();
        this._syncAccessibility();
        if (this._disabled || this.readonly) {
            void this._view.current?.close();
        }
    }

    protected _renderView() {
        const {name: _name, required: _required, ...props} = this.options;
        // Picker inherits generic defaultProps from Pick; keep its concrete public props here.
        return h(Picker as unknown as ComponentClass<PickerOptions & {ref?: Ref<Picker>}>, {
            ...props,
            id: this._controlId,
            ref: this._view,
            items: props.items ?? this._emptyItems,
            disabled: this._disabled,
            required: false,
            limitValueInList: false,
            // ElementInternals is the sole submission owner for single and multiple values.
            onRenderValue: () => null,
            beforeChange: this._beforeChange,
            onChange: this._onChange,
            afterRender: this._syncAccessibility,
            attrs: {...this._accessibleAttributes(), tabIndex: this._disabled ? -1 : 0, onKeyDown: this._onKeyDown},
            onPopShown: () => {
                this._syncAccessibility();
                this._emit('zui-shown', {});
            },
            onPopHide: () => {
                const active = this.ownerDocument.activeElement;
                this._restoreFocus = this.contains(active) || !!this._view.current?.pop?.element?.contains(active);
            },
            onPopHidden: () => {
                this._syncAccessibility();
                const active = this.ownerDocument.activeElement;
                if (this._restoreFocus && (active === this.ownerDocument.body || this.contains(active))) {
                    this.focus();
                }
                this._emit('zui-hidden', {});
            },
        });
    }

    protected _destroy(): void {
        cancelAnimationFrame(this._labelFrame);
        this._menuObserver?.disconnect();
        this._menuObserver = undefined;
        this._observedMenu = undefined;
        this._pendingUserChange = undefined;
        super._destroy();
        this._view.current = null;
    }
}

export function definePicker(): void {
    ZuiPickerElement.define('zui-picker');
}

declare global {
    interface HTMLElementTagNameMap {
        'zui-picker': ZuiPickerElement;
    }
}
