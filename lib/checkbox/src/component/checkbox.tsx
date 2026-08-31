import {CustomContent, HElement} from '@zui/core';

import type {ClassNameLike} from '@zui/core';
import type {ComponentChildren, RenderableProps} from 'preact';
import type {CheckboxProps, CheckboxState, CheckedType} from '../types';

const checkboxByInput = new WeakMap<HTMLInputElement, Checkbox>();

export class Checkbox<P extends CheckboxProps = CheckboxProps> extends HElement<P, CheckboxState> {
    static customProps = ['onChange'];

    protected _defaultID = `_checkbox-${this._gid}`;

    protected _input: HTMLInputElement | null = null;

    /**
     * Whether the checked state is owned by the `checked` prop.
     */
    get controlled() {
        return this.props.checked !== undefined;
    }

    get checked(): CheckedType {
        return (this.controlled ? this.props.checked : this.state.checked) ?? false;
    }

    getDefaultState(props?: RenderableProps<P>): CheckboxState {
        return {
            checked: props?.checked ?? props?.defaultChecked ?? false,
        };
    }

    componentDidMount(): void {
        super.componentDidMount();
        this._syncIndeterminate();
    }

    componentDidUpdate(): void {
        this._syncIndeterminate();
    }

    protected _handleInputRef = (input: HTMLInputElement | null) => {
        if (this._input) {
            checkboxByInput.delete(this._input);
        }
        this._input = input;
        if (input) {
            checkboxByInput.set(input, this);
        }
    };

    /**
     * Reapply the `indeterminate` state onto the DOM input.
     * The browser clears it on activation, and Preact only forwards the prop when its value changes.
     */
    protected _syncIndeterminate = () => {
        if (this._input) {
            this._input.indeterminate = this.checked === 'indeterminate';
        }
    };

    /** Restore all ZUI radios changed by the browser in the same native group. */
    protected _syncRadioGroup = () => {
        const input = this._input;
        if (!input || input.type !== 'radio' || !input.name) {
            return;
        }

        const radios = (input.getRootNode() as ParentNode).querySelectorAll<HTMLInputElement>('input[type="radio"]');
        radios.forEach((radio) => {
            if (radio.name === input.name && radio.form === input.form) {
                const checkbox = checkboxByInput.get(radio);
                if (checkbox) {
                    radio.checked = checkbox.checked === true;
                }
            }
        });
    };

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {disabled, type = 'checkbox'} = props;
        const {checked} = this;
        return [props.className, type === 'switch' ? type : `${type}-primary`, {
            disabled,
            checked: checked === true,
            indeterminate: checked === 'indeterminate',
        }];
    }

    protected _handleChange = (event: Event) => {
        const {onChange} = this.props;
        const checked = (event.target as HTMLInputElement).checked;
        if (this.controlled) {
            // The caller may keep the same `checked` prop, so restore the DOM state changed by the browser.
            this.forceUpdate(() => {
                this._syncIndeterminate();
                this._syncRadioGroup();
            });
        } else {
            this.setState({checked}, this._syncIndeterminate);
        }
        if (onChange) {
            onChange.call(this, event, checked);
        }
    };

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const {name, type, value, id = this._defaultID, label, disabled} = props;
        const {checked} = this;
        return [
            name !== false ? (
                <input
                    key="input"
                    ref={this._handleInputRef}
                    type={type === 'radio' ? type : 'checkbox'}
                    name={name}
                    id={id}
                    value={value}
                    disabled={disabled}
                    onChange={this._handleChange}
                    indeterminate={checked === 'indeterminate'}
                    checked={checked === true}
                />
            ) : null,
            (
                <label htmlFor={id} key="label">
                    <CustomContent content={label} />
                </label>
            ),
        ];
    }
}
