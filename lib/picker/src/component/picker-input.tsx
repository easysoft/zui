import '@zui/css-icons/src/icons/arrow.css';
import '../css/index.css';
import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import type {PickerOptions} from '../types/picker-options';

const component: string | ComponentType = 'div';

export function PickerInput({
    placeholder,
    disabled,
}: PickerOptions) {
    const onInput = (e: Event) => {
        const value = e.target;
        console.log(value);
    };
    const finalChildren = [
        <div class="picker-selections">
            <div class="input-control suffix-sm">
                <input type="text" class={classes('form-control', {disabled})} name="pickerExp2" placeholder={placeholder} onInput={onInput}/>
                <span class="input-control-suffix"><span class="caret"></span></span>
            </div>
        </div>,
    ];
    return _h(component as ComponentType, {
        className: classes('picker'),
    } as Attributes, ...finalChildren);
}
