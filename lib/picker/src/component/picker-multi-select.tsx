import {classes} from '@zui/core';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';
import {Component, ComponentChildren} from 'preact';
import {PickerSelectProps} from '../types';

export class PickerMultiSelect extends Component<PickerSelectProps> {
    #handleDeselectBtnClick = (event: MouseEvent) => {
        const {onDeselect, selections} = this.props;
        const idx = (event.target as HTMLElement).closest<HTMLElement>('.picker-deselect-btn')?.dataset.idx;
        if (idx && onDeselect && selections?.length) {
            event.stopPropagation();
            onDeselect([selections[+idx]], event);
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
            onClick,
            children,
        } = this.props;

        let selectionView: ComponentChildren;
        if (selections.length) {
            selectionView = (
                <div className="picker-multi-selections">
                    {
                        selections.map((selection, index) => {
                            return (
                                <div className="picker-multi-selection">
                                    {selection.text ?? selection.value}
                                    <div className="picker-deselect-btn btn" onClick={this.#handleDeselectBtnClick} data-idx={index}><span className="close"></span></div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            selectionView = <span className="picker-select-placeholder">{placeholder}</span>;
        }
        return (
            <div
                className={classes('picker-select picker-select-multi form-control', className, {disabled, focused})}
                style={style}
                onClick={onClick}
            >
                {selectionView}
                {children}
                <span class="caret"></span>
            </div>
        );
    }
}
