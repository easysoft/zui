import {fetchData, HElement, isDiff, mergeProps} from '@zui/core';

import type {ClassNameLike} from '@zui/core';
import type {ComponentChildren, RenderableProps} from 'preact';
import type {CheckListProps, CheckListState} from '../types';
import {Checkbox} from './checkbox';

export class CheckList<P extends CheckListProps = CheckListProps> extends HElement<P, CheckListState> {
    protected _controlled: boolean;

    protected _defaultID = `_check-list-${this._gid}`;

    constructor(props: P) {
        super(props);
        this.state = {
            checked: props.checked ?? props.defaultChecked ?? (props.type === 'radio' ? '' : []),
            items: Array.isArray(props.items) ? props.items : undefined,
        };
        this._controlled = props.checked !== undefined;
    }

    get isRadio() {
        return this.props.type === 'radio';
    }

    get checked() {
        return this._controlled ? (this.props.checked ?? (this.isRadio ? '' : [])) : this.state.checked;
    }

    async load() {
        const {items} = this.props;
        if (!items || Array.isArray(items)) {
            if (this.state.items !== items) {
                this.setState({items: Array.isArray(items) ? items : []});
            }
            return;
        }
        const newItems = await fetchData(items);

        // If items not changed, update items
        if (items === this.props.items) {
            this.setState({items: newItems});
        }
    }

    componentDidUpdate(previousProps: Readonly<P>): void {
        const {items} = this.props;
        if (items && !Array.isArray(items) && isDiff(items, previousProps.items)) {
            this.load();
        }
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {disabled, inline, type = 'checkbox'} = props;
        const {checked} = this;
        return [props.className, inline ? `check-list-inline` : 'check-list', `is-type-${type}`, {
            disabled,
            loading: this.state.items === undefined,
            'has-checked': checked.length,
        }];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        return mergeProps(super._getProps(props), {
            id: this._defaultID,
        });
    }

    protected _handleChange = (event: Event) => {
        const currentChecked = (event.target as HTMLInputElement).checked;
        const {checked: oldChecked, isRadio} = this;

        if (isRadio && !currentChecked) {
            return;
        }

        const currentValue = (event.target as HTMLInputElement).value;
        let newChecked: string | string[];
        if (isRadio) {
            newChecked = currentValue;
        } else {
            newChecked = currentChecked ? (oldChecked.includes(currentValue) ? oldChecked : [...oldChecked, currentValue]) : (oldChecked as string[]).filter(x => x !== currentValue);
        }
        if (newChecked === oldChecked) {
            return;
        }

        if (!this._controlled) {
            this.setState({checked: newChecked});
        }

        event.stopPropagation();
        this.props.onChange?.call(this, newChecked, event);
    };

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const {name, id = this._defaultID, disabled, type = 'checkbox'} = props;
        const {items, checked} = this.state;
        return items?.map((item) => {
            return (
                <Checkbox
                    key={item.value}
                    name={name}
                    id={`${id}_${item.value}`}
                    type={type}
                    value={item.value}
                    checked={checked.includes(item.value)}
                    onChange={this._handleChange}
                    disabled={disabled}
                />
            );
        });
    }
}
