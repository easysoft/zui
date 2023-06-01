import {classes} from '@zui/core';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';
import {Component} from 'preact';
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

    #renderSelections() {
        const {selections = [], placeholder} = this.props;
        if (!selections.length) {
            return <span className="picker-select-placeholder">{placeholder}</span>;
        }
        return (
            <div className="picker-multi-selections">
                {
                    selections.map((selection, index) => {
                        return (
                            <div className="picker-multi-selection">
                                {selection.text ?? selection.value}
                                <div className="picker-deselect-btn btn size-xs ghost" onClick={this.#handleDeselectBtnClick} data-idx={index}><span className="close"></span></div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        const {
            className,
            style,
            disabled,
            focused,
            onClick,
            children,
        } = this.props;

        return (
            <div
                className={classes('picker-select picker-select-multi form-control', className, {disabled, focused})}
                style={style}
                onClick={onClick}
            >
                {this.#renderSelections()}
                {children}
                <span class="caret"></span>
            </div>
        );
    }
}
