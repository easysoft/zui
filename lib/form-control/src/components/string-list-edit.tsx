import {Component, type RenderableProps} from 'preact';
import {signal, Signal, nextGid, SizeSetting, toCssSize, $, effect} from '@zui/core';
import {Button} from '@zui/button/react';

export type StringListValue = string[];

export type StringListEditProps = {
    defaultValue?: StringListValue;
    readonly?: boolean;
    onChange?: (value: StringListValue) => void;
    itemWidth?: SizeSetting | 'auto';
    maxWidth?: SizeSetting | 'auto';
    placeholder?: string;
};

export class StringListEdit extends Component<StringListEditProps> {
    protected _items$: Signal<[gid: number, value: string][]>;

    protected _value: StringListValue;

    protected _changeEffect: () => void;

    constructor(props: StringListEditProps) {
        super(props);
        const items: [gid: number, value: string][] = props.defaultValue ? props.defaultValue.map(value => [nextGid(), value]) : [];
        if (!items.length) {
            items.push([nextGid(), '']);
        }
        this._items$ = signal(items);
        this._value = items.reduce((acc, [_, value]) => {
            if (value.length) {
                acc.push(value);
            }
            return acc;
        }, [] as StringListValue);

        this._changeEffect = effect(() => {
            const oldValue = this._value;
            const value = this._items$.value.reduce((acc, [_, value]) => {
                if (value.length) {
                    acc.push(value);
                }
                return acc;
            }, [] as StringListValue);

            const changed = oldValue.length !== value.length || oldValue.some((oldItem, index) => oldItem !== value[index]);
            if (changed) {
                this._value = value;
                if (this.props.onChange) {
                    requestAnimationFrame(() => {
                        this.props.onChange?.(value);
                    });
                }
            }
        });
    }

    get value() {
        return this._value;
    }

    componentDidUpdate(): void {
        this._preserveOne();
    }

    componentWillUnmount(): void {
        this._changeEffect();
    }

    protected _preserveOne() {
        const items = this._items$.value;
        if (items.length) {
            return;
        }
        this.add();
    }

    protected _renderItem(gid: number, value: string) {
        const {readonly, placeholder} = this.props;
        return (
            <div className="string-list-edit-item" key={gid} z-key={gid}>
                <input
                    className="string-list-edit-item-value form-control"
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    readonly={readonly}
                    onChange={this._handleValueChange}
                />
                <div className="string-list-edit-item-actions">
                    <Button type="ghost" size="sm" icon="plus" disabled={readonly} onClick={this._handleAddClick} />
                    <Button type="ghost" size="sm" icon="trash" disabled={readonly} onClick={this._handleDeleteClick} />
                </div>
            </div>
        );
    }

    protected _handleValueChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const gid = $(target).closest('.string-list-edit-item').attr('z-key');
        if (typeof gid === 'string') {
            this.setValue(+gid, target.value);
        }
    };

    setValue(gid: number, value: string) {
        const items = this._items$.value;
        const index = items.findIndex(([thisGid]) => thisGid === gid);
        items[index][1] = value;
        this._items$.value = [...items];
    }

    protected _handleDeleteClick = (event: Event) => {
        const gid = $(event.target as HTMLElement).closest('.string-list-edit-item').attr('z-key');
        if (typeof gid === 'string') {
            this.remove(+gid);
        }
    };

    protected _handleAddClick = (event: Event) => {
        const gid = $(event.target as HTMLElement).closest('.string-list-edit-item').attr('z-key');
        this.add(typeof gid === 'string' ? +gid : undefined);
    };

    add(afterGid?: number) {
        const items = this._items$.value;
        const index = afterGid ? items.findIndex(([gid]) => gid === afterGid) : items.length - 1;
        items.splice(index + 1, 0, [nextGid(), '']);
        this._items$.value = [...items];
    }

    remove(gid: number) {
        const items = this._items$.value;
        const index = items.findIndex(([thisGid]) => thisGid === gid);
        items.splice(index, 1);
        if (!items.length) {
            items.push([nextGid(), '']);
        }
        this._items$.value = [...items];
    }

    render(props: RenderableProps<StringListEditProps>) {
        const items = this._items$.value;
        const {itemWidth, maxWidth = 400} = props;
        const style: Record<string, string> = {};
        if (itemWidth && itemWidth !== 'auto') {
            style['--string-list-edit-item-width'] = toCssSize(itemWidth) || '';
        }
        if (maxWidth && maxWidth !== 'auto' && maxWidth !== '100%') {
            style.maxWidth = toCssSize(maxWidth) || '';
        }
        return (
            <div className="string-list-edit" style={style}>
                {items.map(([gid, value]) => this._renderItem(gid, value))}
            </div>
        );
    }
}
