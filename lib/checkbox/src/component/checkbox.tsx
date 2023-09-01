import {CustomContent, HElement} from '@zui/core';

import type {ClassNameLike} from '@zui/core';
import type {ComponentChildren, RenderableProps} from 'preact';
import type {CheckboxProps, CheckboxState} from '../types';

export class Checkbox<P extends CheckboxProps = CheckboxProps> extends HElement<P, CheckboxState> {
    protected _controlled: boolean;

    constructor(props: P) {
        super(props);
        this.state = {
            checked: props.checked ?? props.defaultChecked ?? false,
        };
        this._controlled = props.checked !== undefined;
    }

    get checked() {
        return this._controlled ? this.props.checked : this.state.checked;
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {disabled, type = 'checkbox'} = props;
        const {checked} = this;
        return [props.className, type === 'switch' ? type : `${type}-primary`,  {
            disabled,
            checked: checked === true,
            indeterminate: checked === 'indeterminate',
        }];
    }

    protected _handleChange = (event: Event) => {
        const {onChange} = this.props;
        const checked = (event.target as HTMLInputElement).indeterminate ? 'indeterminate' : (event.target as HTMLInputElement).checked;
        if (onChange) {
            onChange.call(this, event, checked);
        }
        if (!this._controlled) {
            this.setState({checked});
        }
    };

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const {name, type, value, id, label} = props;
        const {checked} = this;
        return [
            name ? (
                <input
                    key="input"
                    type={type === 'radio' ? type : 'checkbox'}
                    name={name}
                    id={id}
                    value={value}
                    onChange={this._handleChange}
                    indeterminate={checked === 'indeterminate'}
                    checked={typeof checked === 'boolean' ? checked : undefined}
                />
            ) : null,
            (<label htmlFor={id} key="label">
                <CustomContent content={label} />
            </label>),
        ];
    }
}
