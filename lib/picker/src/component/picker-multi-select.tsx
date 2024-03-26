import {classes, $, createRef, CustomContent, ComponentChildren} from '@zui/core';
import {formatString} from '@zui/helpers';
import '@zui/css-icons/src/icons/caret.css';
import '@zui/css-icons/src/icons/close.css';
import {PickTrigger, EVENT_PICK} from '@zui/pick/src/components';
import {PickerItemBasic, PickerSelectProps, PickerState} from '../types';
import {PickerSearch} from './picker-search';

export class PickerMultiSelect extends PickTrigger<PickerState, PickerSelectProps> {
    protected _search = createRef<PickerSearch>();

    protected _handleDeselectClick = (event: MouseEvent) => {
        const {onDeselect, state: {selections}} = this.props;
        const value = $(event.target as HTMLElement).closest('.picker-deselect-btn').attr('data-value');
        if (onDeselect && selections.length && typeof value === 'string') {
            onDeselect(value);
        }
        event.stopPropagation();
    };

    protected _handleSearch = (search: string) => {
        this.props.changeState({search});
    };

    protected _handleSearchClear = () => {
        this.props.togglePop(true, {search: ''} as Partial<PickerState>);
    };

    protected _handleClick(event: MouseEvent): void {
        super._handleClick(event);
        this._search.current?.focus();
    }

    protected _getClass(props: PickerSelectProps) {
        return classes(
            super._getClass(props),
            'picker-select picker-select-multi form-control',
        );
    }

    protected _renderSelection = (selection: PickerItemBasic) => {
        const {text} = selection;
        return (
            <div className="picker-multi-selection" key={selection.value} title={typeof text === 'string' ? text : undefined}>
                <span className="text"><CustomContent content={text} /></span>
                {(this.props.disabled || this.props.readonly) ? null : <div className="picker-deselect-btn btn size-xs ghost" onClick={this._handleDeselectClick} data-value={selection.value}><span className="close"></span></div>}
            </div>
        );
    };

    protected _renderSearch(props: PickerSelectProps) {
        const {state: {search}, searchHint, hotkeys} = props;
        return (
            <PickerSearch
                inline
                id={props.id}
                ref={this._search}
                defaultSearch={search}
                onSearch={this._handleSearch}
                onClear={this._handleSearchClear}
                placeholder={searchHint}
                hotkeys={hotkeys}
            />
        );
    }

    protected _renderTrigger(props: PickerSelectProps) {
        const {state: {selections = [], open, value}, search, placeholder, display, valueList, children} = this.props;
        const showSearch = open && search;
        let view: ComponentChildren;
        const noSelections = !showSearch && !selections.length;
        if (display && (!noSelections || placeholder === undefined)) {
            if (typeof display === 'function') {
                view = display.call(this, valueList, selections);
            } else if (typeof display === 'string') {
                view = formatString(display, {value, values: valueList, count: valueList.length});
            }
            view = <div key="selections" className="picker-multi-selections">{view}</div>;
        } else if (noSelections) {
            view = <span key="selections" className="picker-select-placeholder">{placeholder}</span>;

        } else {
            view = (<div key="selections" className="picker-multi-selections">
                {selections.map(this._renderSelection)}
                {showSearch ? this._renderSearch(props) : null}
            </div>);
        }
        return [
            view,
            children,
            <span key="caret" class="caret"></span>,
        ];
    }

    protected _renderValue(props: PickerSelectProps) {
        const {name, state: {value = ''}, disabled, readonly, id, valueList, emptyValue} = props;
        if (name) {
            if (this.hasInput) {
                $(`#${id}`).val(value);
            } else {
                const values = valueList.length ? valueList : [emptyValue];
                return (
                    <select id={id} multiple className="pick-value" name={name.endsWith('[]') ? name : `${name}[]`} disabled={disabled} readonly={readonly} style={{display: 'none'}}>
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
            const $select = $(`#${id}`).val(valueList.length ? valueList : [emptyValue]);
            if (this._skipTriggerChange !== state.value) {
                $select.trigger('change', EVENT_PICK);
            }
            this._skipTriggerChange = false;
        }
    }
}
