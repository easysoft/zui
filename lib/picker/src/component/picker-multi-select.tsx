import {classes, $} from '@zui/core';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerItemBasic, PickerSelectProps, PickerState} from '../types';
import {PickerSearch} from './picker-search';

export class PickerMultiSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #handleDeselectBtnClick = (event: MouseEvent) => {
        const {onDeselect, state: {selections}} = this.props;
        const value = $(event.target as HTMLElement).closest('.picker-deselect-btn').dataset('value') as string;
        if (onDeselect && selections.length && value) {
            onDeselect(value);
        }
        event.stopPropagation();
    };

    #handleSearch = (search: string) => {
        this.props.changeState({search});
    };

    #handleSearchClear = () => {
        this.props.togglePop(true, {search: ''} as Partial<PickerState>);
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

    protected _renderSearch() {
        const {state: {search}, searchHint} = this.props;
        return (
            <PickerSearch
                inline
                defaultSearch={search}
                onSearch={this.#handleSearch}
                onClear={this.#handleSearchClear}
                placeholder={searchHint}
            />
        );
    }

    protected _renderTrigger() {
        const {state: {selections = [], open}, search, placeholder, children} = this.props;
        const showSearch = open && search;
        if (!showSearch && !selections.length) {
            return <span key="selections" className="picker-select-placeholder">{placeholder}</span>;
        }
        return [
            <div key="selections" className="picker-multi-selections">
                {selections.map(this._renderSelection)}
                {showSearch ? this._renderSearch() : null}
            </div>,
            children,
            <span key="caret" class="caret"></span>,
        ];
    }
}
