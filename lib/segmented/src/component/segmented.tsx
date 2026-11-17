import {classes, CustomContent, dom, HElement, Icon} from '@zui/core';
import {createRef} from 'preact';

import type {RenderableProps} from 'preact';
import type {SegmentedItem, SegmentedOptions, SegmentedValue} from '../types';

export class Segmented extends HElement<SegmentedOptions> {
    static NAME = 'segmented';

    static customProps = ['onChange'];

    protected _items: SegmentedItem[] = [];

    protected _defaultValue?: SegmentedValue;

    protected _valueBeforeRender?: SegmentedValue;

    protected _thumb = createRef<HTMLSpanElement>();

    protected _thumbValue?: SegmentedValue;

    protected _thumbGeometry = '';

    protected _animationFrame?: number;

    protected _animationObserver?: ResizeObserver;

    protected _animationElements: Element[] = [];

    protected _animationForm?: HTMLFormElement | null;

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
            'segmented-animated': props.animation,
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
        this._queueThumbUpdate();
    };

    protected _getChildren(props: RenderableProps<SegmentedOptions>) {
        const {name = `_segmented-${this._gid}`, id, form, disabled, readonly, required} = props;
        const defaultValue = this._items.some(item => item.value === this._defaultValue)
            ? this._defaultValue : this._items.find(item => !item.disabled)?.value;
        const items = this._items.map((item, index) => {
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
        return props.animation
            ? [<span key="thumb" ref={this._thumb} className="segmented-thumb" aria-hidden="true" hidden />, ...items]
            : items;
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

    protected _queueThumbUpdate = () => {
        if (!this.props.animation || !this._thumb.current || this._animationFrame !== undefined) {
            return;
        }
        this._animationFrame = requestAnimationFrame(() => {
            this._animationFrame = undefined;
            this._syncThumb();
        });
    };

    protected _syncThumb() {
        const thumb = this._thumb.current;
        if (!thumb) {
            return;
        }
        const root = this.base as HTMLElement;
        const input = root.querySelector<HTMLInputElement>('.segmented-input:checked');
        const label = input?.nextElementSibling as HTMLElement | null;
        const rect = label?.getBoundingClientRect();
        const rootRect = root.getBoundingClientRect();
        if (!rect?.width || !rect.height || !rootRect.width || !rootRect.height || !root.offsetWidth || !root.offsetHeight) {
            thumb.hidden = true;
            this._thumbGeometry = '';
            this._thumbValue = undefined;
            return;
        }
        // Convert viewport coordinates back to local CSS pixels, including scaled ancestors.
        const scaleX = rootRect.width / root.offsetWidth;
        const scaleY = rootRect.height / root.offsetHeight;
        const left = (rect.left - rootRect.left) / scaleX - root.clientLeft + root.scrollLeft;
        const top = (rect.top - rootRect.top) / scaleY - root.clientTop + root.scrollTop;
        const width = rect.width / scaleX;
        const height = rect.height / scaleY;
        const geometry = `${left},${top},${width},${height}`;
        const value = this._items[Number(input!.dataset.index)]?.value;
        if (!thumb.hidden && geometry === this._thumbGeometry && value === this._thumbValue) {
            return;
        }
        thumb.classList.toggle('is-animated', !thumb.hidden && value !== this._thumbValue);
        thumb.style.transform = `translate(${left}px, ${top}px)`;
        thumb.style.width = `${width}px`;
        thumb.style.height = `${height}px`;
        thumb.hidden = false;
        this._thumbGeometry = geometry;
        this._thumbValue = value;
    }

    protected _syncAnimation() {
        if (!this.props.animation) {
            this._stopAnimation();
            return;
        }
        const root = this.base as HTMLElement;
        const elements = [root, ...root.querySelectorAll('.segmented-label')];
        if (elements.length !== this._animationElements.length || elements.some((element, index) => element !== this._animationElements[index])) {
            this._animationObserver?.disconnect();
            this._animationElements = elements;
            if (typeof ResizeObserver !== 'undefined') {
                this._animationObserver = dom.listenResize(elements, this._queueThumbUpdate);
            }
            // Structural changes establish a new layout rather than a selection transition.
            if (this._thumb.current) {
                this._thumb.current.hidden = true;
            }
        }
        const form = root.querySelector('input')?.form;
        if (form !== this._animationForm) {
            this._animationForm?.removeEventListener('reset', this._queueThumbUpdate);
            this._animationForm = form;
            // reset fires before the browser restores checked; read it in the next frame.
            form?.addEventListener('reset', this._queueThumbUpdate);
        }
        this._queueThumbUpdate();
    }

    protected _stopAnimation() {
        if (this._animationFrame !== undefined) {
            cancelAnimationFrame(this._animationFrame);
            this._animationFrame = undefined;
        }
        this._animationObserver?.disconnect();
        this._animationObserver = undefined;
        this._animationElements = [];
        this._animationForm?.removeEventListener('reset', this._queueThumbUpdate);
        this._animationForm = undefined;
        this._thumbValue = undefined;
        this._thumbGeometry = '';
    }

    componentDidMount() {
        super.componentDidMount();
        this._syncSelection();
        this._syncAnimation();
    }

    componentDidUpdate() {
        this._syncSelection();
        this._syncAnimation();
    }

    componentWillUnmount() {
        this._stopAnimation();
        super.componentWillUnmount();
    }
}
