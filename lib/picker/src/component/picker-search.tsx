import {Component, ComponentChild, RenderableProps, createRef} from 'preact';
import {$} from '@zui/core';
import {PickerSearchProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';

export type PickerSearchState = {
    search: string;
};

export class PickerSearch extends Component<PickerSearchProps, PickerSearchState> {
    protected _searchInput = createRef<HTMLInputElement>();

    protected _measure = createRef<HTMLDivElement>();

    protected _changeTimer = 0;

    constructor(props: PickerSearchProps) {
        super(props);
        this.state = {search: props.defaultSearch ?? ''};
    }

    focus() {
        this._searchInput.current?.focus();
    }

    componentDidMount(): void {
        this.focus();
    }

    componentDidUpdate(): void {
        const {inline} = this.props;
        if (inline) {
            const {current} = this._measure;
            const {current: input} = this._searchInput;
            if (current && input) {
                const $search = $(input).parent();
                $search.width(Math.ceil(Math.min(current.clientWidth, $search.closest('.picker').outerWidth() - 32)));
            }
        }
    }

    componentWillUnmount(): void {
        clearTimeout(this._changeTimer);
    }

    #handleChange = (event: Event) => {
        const search = (event.target as HTMLInputElement).value;
        this.setState({search}, () => {
            const {onSearch} = this.props;
            if (!onSearch) {
                return;
            }
            if (this._changeTimer) {
                clearTimeout(this._changeTimer);
            }
            this._changeTimer = window.setTimeout(() => {
                this._changeTimer = 0;
                onSearch(search);
            }, this.props.debounce || 300);
        });
        event.stopPropagation();
    };

    #handleClear = (event: MouseEvent) => {
        event.stopPropagation();
        this.props.onClear?.();
        this.setState({search: ''}, () => this.focus());
    };

    render(props: RenderableProps<PickerSearchProps>, state: Readonly<PickerSearchState>): ComponentChild {
        const {placeholder, inline} = props;
        const {search} = state;
        const hasSearch = search.trim().length > 0;
        let extraView: ComponentChild;
        if (inline) {
            extraView = (
                <div className="picker-search-measure" ref={this._measure}>{search}</div>
            );
        } else if (hasSearch) {
            extraView = (
                <button type="button" className="btn picker-search-clear square size-sm ghost" onClick={this.#handleClear}><span className="close"></span></button>
            );
        } else {
            extraView = <span className="magnifier"></span>;
        }

        return (
            <div className={`picker-search${inline ? ' is-inline' : ''}`}>
                <input
                    className="form-control picker-search-input"
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    autoComplete="off"
                    onChange={this.#handleChange}
                    onInput={this.#handleChange}
                    ref={this._searchInput}
                />
                {extraView}
            </div>
        );
    }
}
