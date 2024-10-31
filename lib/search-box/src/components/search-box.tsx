import {Component, createRef} from 'preact';
import {$, classes, getHotkeysMap, Icon, nextGid} from '@zui/core';
import '../style';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {SearchBoxOptions, SearchBoxState} from '../types';

export class SearchBox extends Component<SearchBoxOptions, SearchBoxState> {
    static defaultProps: Partial<SearchBoxOptions> = {
        clearIcon: true,
        searchIcon: true,
        delay: 500,
        hotkeys: true,
    };

    protected _gid: string;

    protected _input = createRef<HTMLInputElement>();

    protected _timer = 0;

    protected _hotkeysScope?: string;

    constructor(props: SearchBoxOptions) {
        super(props);
        this.state = {focus: false, value: props.defaultValue || ''};
        this._gid = props.id || `search-box-${nextGid()}`;
    }

    componentDidMount(): void {
        const {hotkeys} = this.props;
        if (hotkeys) {
            const hotkeysMap = getHotkeysMap(hotkeys, {
                clear: {
                    keys: 'Escape',
                    handler: (event) => {
                        this.clear(event);
                    },
                },
                enter: {
                    keys: 'Enter',
                    handler: (event) => {
                        this.props.onEnter?.(this.state.value, event);
                    },
                },
            });
            if (hotkeysMap) {
                this._hotkeysScope = `SearchBox_${this._gid}`;
                $(this.input).hotkeys(hotkeysMap, {
                    scope: this._hotkeysScope,
                    event: 'keydown',
                });
            }
        }
    }

    componentWillUnmount(): void {
        if (this._hotkeysScope) {
            $(this.input).unbindHotkeys(this._hotkeysScope);
        }
    }

    get id() {
        return this._gid;
    }

    get input() {
        return this._input.current;
    }

    focus() {
        this.input?.focus();
    }

    blur() {
        this.input?.blur();
    }

    clear(event?: Event) {
        const oldValue = this.state.value;
        this.setState({value: ''}, () => {
            const {onChange, onClear} = this.props;
            onClear?.(event);
            this.focus();
            if (oldValue.trim() !== '') {
                onChange?.('', event);
            }
        });
    }

    _handleClearBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        this.clear(event);
    };

    _handleChange = (event: Event) => {
        const oldValue = this.state.value;
        const value = (event.target as HTMLInputElement).value;
        const {onChange, delay} = this.props;
        this.setState({value}, () => {
            if (!onChange || oldValue === value) {
                return;
            }
            if (delay) {
                this._clearTimer();
                this._timer = window.setTimeout(() => {
                    onChange(value, event);
                    this._timer = 0;
                }, delay);
            } else {
                onChange(value, event);
            }
        });
    };

    _handleFocus = (event: FocusEvent) => {
        const focus = event.type === 'focus';
        this.setState({focus}, () => {
            const callback = focus ? this.props.onFocus : this.props.onBlur;
            callback?.(event);
        });
    };

    _clearTimer() {
        if (this._timer) {
            clearTimeout(this._timer);
        }
        this._timer = 0;
    }

    render(props: RenderableProps<SearchBoxOptions>, state: Readonly<SearchBoxState>) {
        const {style, className, rootClass, rootStyle, readonly, disabled, circle, placeholder, mergeIcon, searchIcon, clearIcon, value: controlledValue, compact, prefixClass, suffixClass} = props;
        const {focus, value} = state;
        const {id} = this;
        const finalValue = controlledValue ?? value;
        const empty = typeof finalValue !== 'string' || !finalValue.trim().length;
        let prefixView: ComponentChildren;
        let suffixView: ComponentChildren;
        let searchIconView: ComponentChildren;
        if (searchIcon) {
            searchIconView = searchIcon === true ? <span class="magnifier" /> : <Icon icon={searchIcon} />;
        }
        if (!mergeIcon && searchIcon) {
            prefixView = <label key="prefix" for={id} class={classes('input-control-prefix', prefixClass)}>{searchIconView}</label>;
        }
        if (clearIcon && !empty) {
            suffixView = (
                <button
                    type="button"
                    class="btn ghost size-sm square rounded-full"
                    onClick={this._handleClearBtnClick}
                >
                    {clearIcon === true ? <span class="close" /> : <Icon icon={clearIcon} />}
                </button>
            );
        } else if (mergeIcon && searchIcon) {
            suffixView = searchIconView;
        }
        if (suffixView) {
            suffixView = (
                <label key="suffix" for={id} class={classes('input-control-suffix', suffixClass)}>
                    {suffixView}
                </label>
            );
        }

        return (
            <div class={classes('search-box input-control', rootClass, {focus, empty, compact, 'has-prefix-icon': prefixView, 'has-suffix-icon': suffixView})} style={rootStyle}>
                {prefixView}
                <input
                    key="input"
                    ref={this._input}
                    id={id}
                    type="text"
                    class={classes('form-control', {'rounded-full': circle, 'size-sm': compact}, className)}
                    style={style}
                    placeholder={placeholder}
                    disabled={disabled}
                    readonly={readonly}
                    value={finalValue}
                    onInput={this._handleChange}
                    onChange={this._handleChange}
                    onFocus={this._handleFocus}
                    onBlur={this._handleFocus}
                />
                {suffixView}
            </div>
        );
    }
}
