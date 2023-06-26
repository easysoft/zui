import {classes, $} from '@zui/core';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerItemBasic, PickerSelectProps, PickerState} from '../types';

export class PickerMultiSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #handleDeselectBtnClick = (event: MouseEvent) => {
        const {onDeselect, state: {selections}} = this.props;
        const value = $(event.target as HTMLElement).closest('.picker-deselect-btn').dataset('value') as string;
        if (onDeselect && selections.length && value) {
            onDeselect(value);
        }
        event.stopPropagation();
    };

    protected _getClass() {
        return classes(
            super._getClass(),
            'picker-select picker-select-multi form-control',
        );
    }

    protected _renderSelection = (selection: PickerItemBasic) => {
        return (
            <div className="picker-multi-selection" key={selection.value}>
                <span className="text">{selection.text ?? selection.value}</span>
                <div className="picker-deselect-btn btn size-xs ghost" onClick={this.#handleDeselectBtnClick} data-value={selection.value}><span className="close"></span></div>
            </div>
        );
    };

    protected _renderTrigger() {
        const {state: {selections = []}, placeholder, children} = this.props;
        if (!selections.length) {
            return <span key="selections" className="picker-select-placeholder">{placeholder}</span>;
        }
        return [
            <div key="selections" className="picker-multi-selections">
                {selections.map(this._renderSelection)}
            </div>,
            children,
            <span key="caret" class="caret"></span>,
        ];
    }
}
