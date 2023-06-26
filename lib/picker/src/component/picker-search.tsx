import {Component, ComponentChild, RenderableProps, createRef} from 'preact';
import {PickerSearchProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';

export type PickerSearchState = {
    hasSearch: boolean;
};

export class PickerSearch extends Component<PickerSearchProps, PickerSearchState> {
    #searchInput = createRef<HTMLInputElement>();

    state = {hasSearch: false};

    focus() {
        this.#searchInput.current?.focus();
    }

    componentDidMount(): void {
        this.focus();
    }

    #handleChange = (event: Event) => {
        const search = (event.target as HTMLInputElement).value;
        const hasSearch = search.trim().length > 0;
        if (this.state.hasSearch !== hasSearch) {
            this.setState({hasSearch});
        }
        this.props.onSearch?.(search);
    };

    #handleClear = (event: MouseEvent) => {
        if (this.state.hasSearch) {
            this.setState({hasSearch: false});
        }
        event.stopPropagation();
        this.props.onClear?.();
    };

    render(props: RenderableProps<PickerSearchProps>, state: Readonly<PickerSearchState>): ComponentChild {
        const {placeholder, defaultSearch} = props;
        const {hasSearch} = state;
        return (
            <div className="picker-search">
                <input
                    className="form-control picker-search-input"
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultSearch}
                    onChange={this.#handleChange}
                    onInput={this.#handleChange}
                    ref={this.#searchInput}
                />
                {hasSearch ? <button type="button" className="btn picker-search-clear square size-sm ghost" onClick={this.#handleClear}><span className="close"></span></button> : <span className="magnifier"></span>}
            </div>
        );
    }
}
