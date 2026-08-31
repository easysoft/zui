import {fetchData, HElement, isDiff, mergeProps} from '@zui/core';

import type {ClassNameLike} from '@zui/core';
import type {ComponentChildren, RenderableProps} from 'preact';
import type {CheckListProps, CheckListState} from '../types';
import {Checkbox} from './checkbox';

export class CheckList<P extends CheckListProps = CheckListProps> extends HElement<P, CheckListState> {
    static customProps = ['onChange'];

    protected _defaultID = `_check-list-${this._gid}`;

    get isRadio() {
        return this.props.type === 'radio';
    }

    /**
     * Whether the checked state is owned by the `checked` prop.
     */
    get controlled() {
        return this.props.checked !== undefined;
    }

    get checked() {
        return (this.controlled ? this.props.checked : this.state.checked) ?? (this.isRadio ? '' : []);
    }

    getDefaultState(props?: RenderableProps<P>): CheckListState {
        return {
            checked: props?.checked ?? props?.defaultChecked ?? (props?.type === 'radio' ? '' : []),
            items: Array.isArray(props?.items) ? props.items : undefined,
        };
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

    componentDidMount(): void {
        super.componentDidMount();
        this.load();
    }

    componentDidUpdate(previousProps: Readonly<P>): void {
        if (isDiff(this.props.items, previousProps.items)) {
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

        if (this.controlled) {
            // The caller may keep the same `checked` prop, so restore the DOM state changed by the browser.
            this.forceUpdate();
        } else {
            this.setState({checked: newChecked});
        }

        event.stopPropagation();
        this.props.onChange?.call(this, newChecked, event);
    };

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const {name, id = this._defaultID, disabled, type = 'checkbox'} = props;
        const {items} = this.state;
        const checked = this.checked;
        const checkedSet = new Set(Array.isArray(checked) ? checked : [checked]);
        return items?.map((item) => {
            return (
                <Checkbox
                    key={item.value}
                    name={name}
                    id={`${id}_${item.value}`}
                    className={item.className}
                    label={item.label ?? item.text}
                    type={type}
                    value={item.value}
                    checked={checkedSet.has(item.value)}
                    onChange={this._handleChange}
                    disabled={disabled}
                />
            );
        });
    }
}
