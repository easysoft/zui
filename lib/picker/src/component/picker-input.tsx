import '@zui/css-icons/src/icons/arrow.css';
import '../css/index.css';
import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h, Component} from 'preact';
import type {PickerOptions} from '../types/picker-options';

export class PickerInput extends Component<PickerOptions> {
    render() {
        const {
            disabled,
            placeholder,
            onInput,
        } = this.props;
        return  _h(
            Component as ComponentType, 
            {className: classes('picker')} as Attributes, 
            (
                <div class="picker-selections">
                    <div class="input-control suffix-sm">
                        <input type="text" class={classes('form-control', {disabled})} name="pickerExp2" placeholder={placeholder} onInput={onInput}/>
                        <span class="input-control-suffix"><span class="caret"></span></span>
                    </div>
                </div>
            ),
        );
    }
}
