import {Component, ComponentChild, RenderableProps, createRef} from 'preact';
import {$} from '@zui/core';
import {PickerSearchProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';

export type PickerSearchState = {
    search: string;
};

export class PickerSearch extends Component<PickerSearchProps, PickerSearchState> {
    #searchInput = createRef<HTMLInputElement>();

    #measure = createRef<HTMLDivElement>();

    constructor(props: PickerSearchProps) {
        super(props);
        this.state = {search: props.defaultSearch ?? ''};
    }

    focus() {
        this.#searchInput.current?.focus();
    }

    componentDidMount(): void {
        this.focus();
    }

    componentDidUpdate(): void {
        const {inline} = this.props;
        if (inline) {
            const {current} = this.#measure;
            const {current: input} = this.#searchInput;
            if (current && input) {
                const $search = $(input).parent();
                $search.width(Math.ceil(Math.min(current.clientWidth, $search.closest('.picker').outerWidth() - 32)));
            }
        }
    }

    #handleChange = (event: Event) => {
        const search = (event.target as HTMLInputElement).value;
        this.props.onSearch?.(search);
        this.setState({search});
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
                <div className="picker-search-measure" ref={this.#measure}>{search}</div>
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
                    onChange={this.#handleChange}
                    onInput={this.#handleChange}
                    ref={this.#searchInput}
                />
                {extraView}
            </div>
        );
    }
}
