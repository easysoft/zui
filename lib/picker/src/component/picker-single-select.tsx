import {ComponentChildren, createRef} from 'preact';
import {classes} from '@zui/core';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerSelectProps, PickerState} from '../types';
import '@zui/css-icons/src/icons/caret.css';

export class PickerSingleSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #searchInput = createRef<HTMLInputElement>();

    focus() {
        this.#searchInput.current?.focus();
    }

    componentDidUpdate(previousProps: Readonly<PickerSelectProps>): void {
        if (!previousProps.state.open && this.props.state.open) {
            this.focus();
        }
    }

    #handleDeselectBtnClick = (event: MouseEvent) => {
        this.props.onClear();
        this.props.togglePop(true, {search: ''});
        event.stopPropagation();
    };

    #handleSearchChange = (event: Event) => {
        const search = (event.target as HTMLInputElement).value;
        this.props.changeState({search});
    };

    #handleClearBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        this.props.togglePop(true, {search: ''} as Partial<PickerState>);
    };

    protected _getClass() {
        return classes(
            super._getClass(),
            'picker-select picker-select-single form-control',
        );
    }

    protected _buildSearch() {
        const {searchHint, state: {search, value, selections}} = this.props;
        const hasSearch = search.trim().length;
        let placeholder = searchHint;
        if (placeholder === undefined) {
            const selection = selections.find(x => x.value === value);
            if (selection && typeof selection.text === 'string') {
                placeholder = selection.text;
            } else {
                placeholder = value;
            }
        }
        return (
            <div className="picker-search"  key="main">
                <input
                    className="form-control picker-search-input"
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    onChange={this.#handleSearchChange}
                    onInput={this.#handleSearchChange}
                    ref={this.#searchInput}
                />
                {hasSearch ? <button type="button" className="btn picker-search-clear square size-sm ghost" onClick={this.#handleClearBtnClick}><span className="close"></span></button> : <span className="magnifier"></span>}
            </div>
        );
    }

    protected _renderTrigger() {
        const {children, state: {selections = [], open}, placeholder, search} = this.props;

        const [selection] = selections;
        const showSearch = open && search;
        let view: ComponentChildren;
        if (showSearch) {
            view = this._buildSearch();
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
