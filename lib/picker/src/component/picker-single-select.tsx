import {ComponentChildren, createRef} from 'preact';
import {classes} from '@zui/core';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerSearch} from './picker-search';
import {PickerSelectProps, PickerState} from '../types';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';

export class PickerSingleSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #search = createRef<PickerSearch>();

    #handleDeselectBtnClick = (event: MouseEvent) => {
        this.props.onClear();
        this.props.togglePop(true, {search: ''});
        event.stopPropagation();
    };

    #handleSearch = (search: string) => {
        this.props.changeState({search});
    };

    #handleSearchClear = () => {
        this.props.togglePop(true, {search: ''});
    };

    #getSearchPlaceholder() {
        const {searchHint, state: {value, selections}} = this.props;
        let placeholder = searchHint;
        if (placeholder === undefined) {
            const selection = selections.find(x => x.value === value);
            if (selection && typeof selection.text === 'string') {
                placeholder = selection.text;
            } else {
                placeholder = value;
            }
        }
        return placeholder;
    }

    protected _handleClick(event: MouseEvent): void {
        super._handleClick(event);
        this.#search.current?.focus();
    }

    protected _getClass(props: PickerSelectProps) {
        return classes(
            super._getClass(props),
            'picker-select picker-select-single form-control',
        );
    }

    protected _renderSearch(props: PickerSelectProps) {
        const {state: {search}} = props;
        return (
            <PickerSearch
                ref={this.#search}
                defaultSearch={search}
                onSearch={this.#handleSearch}
                onClear={this.#handleSearchClear}
                placeholder={this.#getSearchPlaceholder()}
            />
        );
    }

    protected _renderTrigger(props: PickerSelectProps) {
        const {children, state: {selections = [], open}, placeholder, search} = props;

        const [selection] = selections;
        const showSearch = open && search;
        let view: ComponentChildren;
        if (showSearch) {
            view = this._renderSearch(props);
        } else if (selection) {
            view = <span key="main" className="picker-single-selection">{selection.text ?? selection.value}</span>;
        } else {
            view = <span key="main" className="picker-select-placeholder">{placeholder}</span>;
        }
        const deselectBtnView = (selection && !showSearch) ? (
            <button key="deselect" type="button" className="btn picker-deselect-btn size-sm square ghost" onClick={this.#handleDeselectBtnClick}><span className="close"></span></button>
        ) : null;
        const caret = showSearch ? null : <span key="caret" className="caret"></span>;

        return [
            view,
            children,
            deselectBtnView,
            caret,
        ];
    }
}
