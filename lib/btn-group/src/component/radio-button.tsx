import {Button} from '@zui/button/react';

import type {RenderableProps} from 'preact';
import type {ButtonProps} from '@zui/button';
import type {BtnGroupOptions} from '../types';

type RadioButtonProps = ButtonProps & {
    value?: string | number;
    'z-key'?: string;
    'z-item'?: number;
    radioOptions: Pick<BtnGroupOptions, 'name' | 'id' | 'value' | 'defaultValue' | 'disabled' | 'readonly' | 'required'> & {
        onChange: (event: Event) => void;
    };
};

/** Internal item renderer; keep the input and its button label as adjacent list children. */
export class RadioButton extends Button<RadioButtonProps> {
    protected _getProps(props: RenderableProps<RadioButtonProps>) {
        const attrs = super._getProps(props);
        delete attrs.type;
        delete attrs.disabled;
        delete attrs['aria-pressed'];
        // Only the input owns the delegated item click, including clicks relayed by its label.
        delete attrs['z-item'];
        delete attrs['z-key'];
        attrs.htmlFor = props.radioOptions.id;
        return attrs;
    }

    render(props: RenderableProps<RadioButtonProps>) {
        const {radioOptions, value: itemValue} = props;
        const value = String(itemValue ?? props['z-key']);
        const controlled = radioOptions.value !== undefined;
        const selected = (controlled ? radioOptions.value : radioOptions.defaultValue) === value;
        const disabled = !!(radioOptions.disabled || radioOptions.readonly || props.disabled || props.loading);
        return (
            <>
                <input
                    type="radio"
                    id={radioOptions.id}
                    name={radioOptions.name}
                    value={value}
                    defaultChecked={selected}
                    checked={controlled ? selected : undefined}
                    disabled={disabled}
                    required={radioOptions.required}
                    onChange={radioOptions.onChange}
                    z-key={props['z-key']}
                    z-item={props['z-item']}
                    z-type="radio"
                />
                {super.render({...props, tag: 'label', type: undefined, active: undefined, disabled, url: undefined, target: undefined, command: undefined})}
            </>
        );
    }
}
