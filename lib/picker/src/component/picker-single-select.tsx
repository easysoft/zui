import {classes} from '@zui/browser-helpers/src/classes';
import '@zui/css-icons/src/icons/caret.css';
import {Component} from 'preact';
import {PickerSelectProps} from '../types';

export class PickerSingleSelect extends Component<PickerSelectProps> {
    #handleDeselectBtnClick = (event: MouseEvent) => {
        const {onDeselect, selections} = this.props;
        if (onDeselect && selections?.length) {
            event.stopPropagation();
            onDeselect(selections, event);
        }
    };

    render() {
        const {
            className,
            style,
            disabled,
            placeholder,
            focused,
            selections = [],
            onDeselect,
            onClick,
            children,
        } = this.props;

        const [selection] = selections;
        const selectionView = selection ? (
            <span className="picker-single-selection">{selection.text ?? selection.value}</span>
        ) : (<span className="picker-select-placeholder">{placeholder}</span>);
        const deselectBtnView = (selection && onDeselect) ? (
            <button type="button" className="btn picker-deselect-btn" onClick={this.#handleDeselectBtnClick}><span className="close"></span></button>
        ) : null;
        return (
            <div
                className={classes('picker-select picker-select-single form-control', className, {disabled, focused})}
                style={style}
                onClick={onClick}
            >
                {selectionView}
                {children}
                {deselectBtnView}
                <span class="caret"></span>
            </div>
        );
    }
}
