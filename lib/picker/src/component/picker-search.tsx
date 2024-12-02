import {Component, ComponentChild, RenderableProps, createRef} from 'preact';
import {$, getHotkeysMap, nextGid} from '@zui/core';
import {PickerSearchProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';

export type PickerSearchState = {
    search: string;
};

export class PickerSearch extends Component<PickerSearchProps, PickerSearchState> {
    protected _searchInput = createRef<HTMLInputElement>();

    protected _measure = createRef<HTMLDivElement>();

    protected _changeTimer = 0;

    protected _hotkeysScope?: string;

    constructor(props: PickerSearchProps) {
        super(props);
        this.state = {search: props.defaultSearch ?? ''};
    }

    get $pop() {
        return $(`#pick-pop-${this.props.id}`);
    }

    focus() {
        this._searchInput.current?.focus();
    }

    clear() {
        this.props.onClear?.();
        this.setState({search: ''}, () => this.focus());
    }

    componentDidMount(): void {
        this.focus();

        const {hotkeys} = this.props;
        if (hotkeys) {
            const hotkeysMap = getHotkeysMap(hotkeys, {
                clear: {
                    keys: 'Escape',
                    handler: () => {
                        if (this.state.search.trim().length) {
                            this.clear();
                        } else {
                            this.$pop.trigger('hidePop');
                        }
                    },
                },
                enter: {
                    keys: 'Enter',
                    handler: (event) => {
                        event.preventDefault();
                        this.$pop.trigger('selectActive');
                        this.clear();
                    },
                },
                activeNext: {
                    keys: 'ArrowDown',
                    handler: () => {
                        this.$pop.trigger('activeNext');
                    },
                },
                activePrev: {
                    keys: 'ArrowUp',
                    handler: () => {
                        this.$pop.trigger('activePrev');
                    },
                },
                deselectLast: {
                    keys: 'Backspace',
                    handler: () => {
                        if (!this.state.search.trim().length) {
                            this.$pop.trigger('deselectLast');
                        }
                    },
                },
            });
            if (hotkeysMap) {
                this._hotkeysScope = `PickerSearch_${nextGid()}`;
                $(this._searchInput.current).hotkeys(hotkeysMap, {
                    scope: this._hotkeysScope,
                    event: 'keydown',
                });
            }
        }

        $(this._searchInput.current).on('compositionend', this._handleChange);
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
        if (this._hotkeysScope) {
            $(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
        }
        $(this._searchInput.current).off('compositionend', this._handleChange);
    }

    _handleChange = (event: Event) => {
        if ((event as KeyboardEvent).isComposing) {
            return;
        }
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

    _handleClear = (event: MouseEvent) => {
        event.stopPropagation();
        this.clear();
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
                <button type="button" className="btn picker-search-clear square size-sm ghost" onClick={this._handleClear}><span className="close"></span></button>
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
                    onChange={this._handleChange}
                    onInput={this._handleChange}
                    ref={this._searchInput}
                />
                {extraView}
            </div>
        );
    }
}
