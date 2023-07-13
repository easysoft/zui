import {classes, $, createRef} from '@zui/core';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';
import {PickTrigger, EVENT_PICK} from '@zui/pick/src/components';
import {PickerItemBasic, PickerSelectProps, PickerState} from '../types';
import {PickerSearch} from './picker-search';

export class PickerMultiSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #search = createRef<PickerSearch>();

    #handleDeselectBtnClick = (event: MouseEvent) => {
        const {onDeselect, state: {selections}} = this.props;
        const value = $(event.target as HTMLElement).closest('.picker-deselect-btn').attr('data-value');
        if (onDeselect && selections.length && typeof value === 'string') {
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

    protected _handleClick(event: MouseEvent): void {
        super._handleClick(event);
        this.#search.current?.focus();
    }

    protected _getClass(props: PickerSelectProps) {
        return classes(
            super._getClass(props),
            'picker-select picker-select-multi form-control',
            props.disabled ? 'disabled' : '',
        );
    }

    protected _renderSelection = (selection: PickerItemBasic) => {
        return (
            <div className="picker-multi-selection" key={selection.value}>
                <span className="text">{selection.text}</span>
                {this.props.disabled ? null : <div className="picker-deselect-btn btn size-xs ghost" onClick={this.#handleDeselectBtnClick} data-value={selection.value}><span className="close"></span></div>}
            </div>
        );
    };

    protected _renderSearch(props: PickerSelectProps) {
        const {state: {search}, searchHint} = props;
        return (
            <PickerSearch
                inline
                ref={this.#search}
                defaultSearch={search}
                onSearch={this.#handleSearch}
                onClear={this.#handleSearchClear}
                placeholder={searchHint}
            />
        );
    }

    protected _renderTrigger(props: PickerSelectProps) {
        const {state: {selections = [], open}, search, placeholder, children} = this.props;
        const showSearch = open && search;
        if (!showSearch && !selections.length) {
            return <span key="selections" className="picker-select-placeholder">{placeholder}</span>;
        }
        return [
            <div key="selections" className="picker-multi-selections">
                {selections.map(this._renderSelection)}
                {showSearch ? this._renderSearch(props) : null}
            </div>,
            children,
            <span key="caret" class="caret"></span>,
        ];
    }

    protected _renderValue(props: PickerSelectProps) {
        const {name, state: {value = ''}, id, valueList, emptyValue} = props;
        const values = valueList.length ? valueList : [emptyValue];
        if (name) {
            if (this.hasInput) {
                $(`#${id}`).val(value);
            } else {
                return (
                    <select id={id} multiple className="pick-value" name={name} style={{display: 'none'}}>
                        {values.map(x => <option key={x} value={x}>{x}</option>)}
                    </select>
                );
            }
        }
        return null;
    }

    componentDidMount() {
        super.componentDidMount();
        const {id, valueList, emptyValue} = this.props;
        $(`#${id}`).val(valueList.length ? valueList : [emptyValue]);
    }

    componentDidUpdate(previousProps: PickerSelectProps): void {
        const {id, state, name, valueList, emptyValue} = this.props;
        if (name && previousProps.state.value !== state.value) {
            $(`#${id}`).val(valueList.length ? valueList : [emptyValue]).trigger('change', EVENT_PICK);
        }
    }
}
