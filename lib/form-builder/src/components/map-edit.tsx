import {Component, type RenderableProps} from 'preact';
import {signal, Signal, nextGid, SizeSetting, toCssSize, $, effect} from '@zui/core';
import {Button} from '@zui/button/src/component';

export type MapValue = Record<string, string>;

export type MapPair = [gid: number, key: string, value: string];

export type MapValuePair = [key: string, value: string];

export type MapEditProps = {
    defaultValue?: MapValue;
    readonly?: boolean;
    onChange?: (value: MapValue) => void;
    keyWidth?: SizeSetting | 'auto';
    valueWidth?: SizeSetting | 'auto';
    maxWidth?: SizeSetting | 'auto';
};

export class MapEdit extends Component<MapEditProps> {
    static formatPairs(pairs: MapPair[]): MapValuePair[] {
        return pairs.reduce((acc, [_, key, value]) => {
            if (key.length) {
                acc.push([key, value]);
            }
            return acc;
        }, [] as MapValuePair[]).sort((a, b) => a[0].localeCompare(b[0]));
    }

    protected _pairs$: Signal<MapPair[]>;

    protected _valuePairs: MapValuePair[];

    protected _pairsChangeEffect: () => void;

    constructor(props: MapEditProps) {
        super(props);
        const pairs: MapPair[] = props.defaultValue ? Object.entries(props.defaultValue).map(([key, value]) => [nextGid(), key, value]) : [];
        if (!pairs.length) {
            pairs.push([nextGid(), '', '']);
        }

        this._pairs$ = signal(pairs);
        this._valuePairs = MapEdit.formatPairs(pairs);

        this._pairsChangeEffect = effect(() => {
            const oldValuePairs = this._valuePairs;
            const newValuePairs = MapEdit.formatPairs(this._pairs$.value);
            const changed = oldValuePairs.length !== newValuePairs.length || oldValuePairs.some(([key, value], index) => key !== newValuePairs[index][0] || value !== newValuePairs[index][1]);
            if (changed) {
                this._valuePairs = newValuePairs;
                if (this.props.onChange) {
                    requestAnimationFrame(() => {
                        this.props.onChange?.(this.value);
                    });
                }
            }
        });
    }

    get value() {
        return this._valuePairs.reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {} as MapValue);
    }

    componentDidUpdate(): void {
        this._preserveOne();
    }

    componentWillUnmount(): void {
        this._pairsChangeEffect();
    }

    protected _preserveOne() {
        const pairs = this._pairs$.value;
        if (pairs.length) {
            return;
        }
        this.add();
    }

    protected _renderItem(gid: number, key: string, value: string) {
        const {readonly} = this.props;
        return (
            <div className="map-edit-item" key={gid} z-key={gid}>
                <input className="map-edit-item-key form-control" type="text" value={key} readonly={readonly} onChange={this._handleKeyChange} />
                <input className="map-edit-item-value form-control" type="text" value={value} readonly={readonly} onChange={this._handleValueChange} />
                <div className="map-edit-item-actions">
                    <Button type="ghost" size="sm" icon="plus" onClick={this._handleAddClick} />
                    <Button type="ghost" size="sm" icon="trash" onClick={this._handleDeleteClick} />
                </div>
            </div>
        );
    }

    protected _handleKeyChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const gid = $(target).closest('.map-edit-item').attr('z-key');
        if (typeof gid === 'string') {
            this.setKey(+gid, target.value);
        }
    };

    protected _handleValueChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const gid = $(target).closest('.map-edit-item').attr('z-key');
        if (typeof gid === 'string') {
            this.setValue(+gid, target.value);
        }
    };

    setKey(gid: number, key: string) {
        const pairs = this._pairs$.value;
        const index = pairs.findIndex(([thisGid]) => thisGid === gid);
        pairs[index][1] = key;
        this._pairs$.value = [...pairs];
    }

    setValue(gid: number, value: string) {
        const pairs = this._pairs$.value;
        const index = pairs.findIndex(([thisGid]) => thisGid === gid);
        pairs[index][2] = value;
        this._pairs$.value = [...pairs];
    }

    protected _handleDeleteClick = (event: Event) => {
        const gid = $(event.target as HTMLElement).closest('.map-edit-item').attr('z-key');
        if (typeof gid === 'string') {
            this.remove(+gid);
        }
    };

    protected _handleAddClick = (event: Event) => {
        const gid = $(event.target as HTMLElement).closest('.map-edit-item').attr('z-key');
        this.add(typeof gid === 'string' ? +gid : undefined);
    };

    add(afterGid?: number) {
        const pairs = this._pairs$.value;
        const index = afterGid ? pairs.findIndex(([gid]) => gid === afterGid) : pairs.length - 1;
        pairs.splice(index + 1, 0, [nextGid(), '', '']);
        this._pairs$.value = [...pairs];
    }

    remove(gid: number) {
        const pairs = this._pairs$.value;
        const index = pairs.findIndex(([thisGid]) => thisGid === gid);
        pairs.splice(index, 1);
        if (!pairs.length) {
            pairs.push([nextGid(), '', '']);
        }
        this._pairs$.value = [...pairs];
    }

    render(props: RenderableProps<MapEditProps>) {
        const pairs = this._pairs$.value;
        const {keyWidth, valueWidth, maxWidth = 400} = props;
        const style: Record<string, string> = {};
        if (keyWidth && keyWidth !== 'auto') {
            style['--map-edit-key-width'] = toCssSize(keyWidth) || '';
        }
        if (valueWidth && valueWidth !== 'auto') {
            style['--map-edit-value-width'] = toCssSize(valueWidth) || '';
        }
        if (maxWidth && maxWidth !== 'auto' && maxWidth !== '100%') {
            style.maxWidth = toCssSize(maxWidth) || '';
        }
        return (
            <div className="map-edit" style={style}>
                {pairs.map(([gid, key, value]) => this._renderItem(gid, key, value))}
            </div>
        );
    }
}
