import {classes} from '@zui/core';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerSelectProps, PickerState} from '../types';
import '@zui/css-icons/src/icons/caret.css';

export class PickerSingleSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #handleDeselectBtnClick = (event: MouseEvent) => {
        this.props.onClear?.();
        event.stopPropagation();
    };

    protected _getClass() {
        return classes(
            super._getClass(),
            'picker-select picker-select-single form-control',
        );
    }

    protected _renderTrigger() {
        const {children, state: {selections = []}, placeholder} = this.props;

        const [selection] = selections;
        const selectionView = selection ? (
            <span key="selection" className="picker-single-selection">{selection.text ?? selection.value}</span>
        ) : (<span key="selection" className="picker-select-placeholder">{placeholder}</span>);
        const deselectBtnView = selection ? (
            <button key="deselect" type="button" className="btn picker-deselect-btn size-sm square ghost" onClick={this.#handleDeselectBtnClick}><span className="close"></span></button>
        ) : null;

        return [
            selectionView,
            children,
            deselectBtnView,
            <span key="caret" class="caret"></span>,
        ];
    }
}
