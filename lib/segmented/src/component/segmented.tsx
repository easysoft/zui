import {classes, CustomContent, HElement, Icon} from '@zui/core';

import type {RenderableProps} from 'preact';
import type {SegmentedItem, SegmentedOptions, SegmentedValue} from '../types';

export class Segmented extends HElement<SegmentedOptions> {
    static NAME = 'segmented';

    static customProps = ['onChange'];

    protected _items: SegmentedItem[] = [];

    protected _defaultValue?: SegmentedValue;

    protected _valueBeforeRender?: SegmentedValue;

    get controlled() {
        return this.props.value !== undefined;
    }

    get value(): SegmentedValue | undefined {
        if (this.controlled) {
            return this.props.value;
        }
        const input = (this.base as HTMLElement | undefined)?.querySelector<HTMLInputElement>('input:checked');
        return input ? this._items[Number(input.dataset.index)]?.value : undefined;
    }

    protected _beforeRender(props: RenderableProps<SegmentedOptions>) {
        this._valueBeforeRender = this.value;
        this._items = (props.items ?? []).map(item => typeof item === 'object' ? item : {value: item, text: item});
        this._defaultValue ??= props.defaultValue ?? this._items.find(item => !item.disabled)?.value;
    }

    protected _getClassName(props: RenderableProps<SegmentedOptions>) {
        return ['segmented', props.className, props.size && `size-${props.size}`, {
            'segmented-block': props.block,
            'segmented-vertical': props.vertical,
            'segmented-round': props.shape === 'round',
        }];
    }

    protected _getProps(props: RenderableProps<SegmentedOptions>) {
        return {role: 'radiogroup', 'aria-orientation': props.vertical ? 'vertical' : 'horizontal', ...super._getProps(props)};
    }

    protected _handleChange = (event: Event) => {
        const input = event.currentTarget as HTMLInputElement;
        if (!input.checked || input.matches(':disabled')) {
            return;
        }
        const value = this._items[Number(input.dataset.index)].value;
        if (this.controlled) {
            // Reconcile the native selection even when the caller keeps the same value.
            this.forceUpdate();
        }
        this.props.onChange?.call(this, value, event);
    };

    protected _getChildren(props: RenderableProps<SegmentedOptions>) {
        const {name = `_segmented-${this._gid}`, id, form, disabled, readonly, required} = props;
        const defaultValue = this._items.some(item => item.value === this._defaultValue)
            ? this._defaultValue : this._items.find(item => !item.disabled)?.value;
        return this._items.map((item, index) => {
            const key = `${typeof item.value}:${item.value}`;
            const inputID = index === 0 && id ? id : `_segmented-${this._gid}-${encodeURIComponent(key)}`;
            const text = item.text ?? (item.icon ? undefined : item.value);
            const checked = item.value === (this.controlled ? props.value : defaultValue);
            return (
                <label key={key} className={classes('segmented-item', item.className)} style={item.style} title={item.title} htmlFor={inputID}>
                    <input
                        {...item.attrs}
                        className="segmented-input"
                        type="radio"
                        id={inputID}
                        name={name}
                        form={form}
                        value={String(item.value)}
                        data-index={index}
                        defaultChecked={checked}
                        checked={this.controlled ? checked : undefined}
                        disabled={disabled || readonly || item.disabled}
                        required={required}
                        aria-label={item['aria-label'] ?? item.attrs?.['aria-label'] ?? (text === undefined ? String(item.value) : undefined)}
                        onChange={this._handleChange}
                    />
                    <span className="segmented-label">
                        {item.icon && <Icon icon={item.icon} className="segmented-icon" aria-hidden="true" />}
                        {text !== undefined && <span className="segmented-text"><CustomContent content={text} generatorThis={this} generatorArgs={[item, index]} /></span>}
                    </span>
                </label>
            );
        });
    }

    protected _syncSelection() {
        if (!this.controlled) {
            const root = this.base as HTMLElement;
            const index = this._items.findIndex(item => item.value === this._valueBeforeRender);
            // A newly inserted defaultChecked radio can uncheck a retained selection during DOM patching.
            const input = index >= 0 ? root.querySelector<HTMLInputElement>(`input[data-index="${index}"]`)
                : this.value === undefined ? root.querySelector<HTMLInputElement>('input:not(:disabled)') : null;
            if (input) {
                input.checked = true;
            }
        }
    }

    componentDidMount() {
        super.componentDidMount();
        this._syncSelection();
    }

    componentDidUpdate() {
        this._syncSelection();
    }
}
