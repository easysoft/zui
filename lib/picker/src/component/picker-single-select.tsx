import {ComponentChildren, createRef} from 'preact';
import {CustomContent, classes} from '@zui/core';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerSearch} from './picker-search';
import {PickerSelectProps, PickerState} from '../types';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';

export class PickerSingleSelect extends PickTrigger<PickerState, PickerSelectProps> {
    protected _search = createRef<PickerSearch>();

    protected _handleDeselectClick = (event: MouseEvent) => {
        if (this.props.disabled) {
            return;
        }
        this.props.onClear();
        event.stopPropagation();
    };

    protected _handleSearch = (search: string) => {
        this.props.changeState({search});
    };

    protected _handleSearchClear = () => {
        this.props.togglePop(true, {search: ''});
    };

    protected _getSearchPlaceholder() {
        const {searchHint, state: {value, selections}} = this.props;
        let placeholder = searchHint;
        if (placeholder === undefined) {
            const selection = selections.find(x => x.value === value);
            if (selection && typeof selection.text === 'string') {
                placeholder = selection.text;
            }
        }
        return placeholder;
    }

    protected _handleClick(event: MouseEvent): void {
        super._handleClick(event);
        this._search.current?.focus();
    }

    protected _getClass(props: PickerSelectProps) {
        return classes(
            super._getClass(props),
            'picker-select picker-select-single form-control',
            props.disabled ? 'disabled' : '',
        );
    }

    protected _renderSearch(props: PickerSelectProps) {
        const {state: {search}} = props;
        return (
            <PickerSearch
                ref={this._search}
                defaultSearch={search}
                onSearch={this._handleSearch}
                onClear={this._handleSearchClear}
                placeholder={this._getSearchPlaceholder()}
            />
        );
    }

    protected _renderTrigger(props: PickerSelectProps) {
        const {children, state: {selections = [], open}, placeholder, search, disabled, clearable} = props;

        const [selection] = selections;
        const showSearch = open && search;
        let view: ComponentChildren;
        if (showSearch) {
            view = this._renderSearch(props);
        } else if (selection) {
            view = <span key="main" className="picker-single-selection"><CustomContent content={selection.text} /></span>;
        } else {
            view = <span key="main" className="picker-select-placeholder">{placeholder}</span>;
        }
        const deselectBtnView = (clearable && !showSearch) ? (
            <button key="deselect" type="button" className="btn picker-deselect-btn size-sm square ghost" disabled={disabled} onClick={this._handleDeselectClick}><span className="close"></span></button>
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
