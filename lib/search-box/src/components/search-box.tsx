import {Component, createRef} from 'preact';
import {classes, Icon, nextGid} from '@zui/core';
import '../style';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {SearchBoxOptions, SearchBoxState} from '../types';

export class SearchBox extends Component<SearchBoxOptions, SearchBoxState> {
    static defaultProps: Partial<SearchBoxOptions> = {
        clearIcon: true,
        searchIcon: true,
        delay: 500,
    };

    protected _gid: string;

    protected _input = createRef<HTMLInputElement>();

    protected _timer = 0;

    constructor(props: SearchBoxOptions) {
        super(props);
        this.state = {focus: false, value: props.defaultValue || ''};
        this._gid = props.id || `search-box-${nextGid()}`;
    }

    get id() {
        return this._gid;
    }

    get input() {
        return this._input.current;
    }

    _handleClearBtnClick = (event: MouseEvent) => {
        const oldValue = this.state.value;
        event.stopPropagation();
        this.setState({value: ''}, () => {
            const {onChange, onClear} = this.props;
            onClear?.(event);
            this.focus();
            if (oldValue.trim() !== '') {
                onChange?.('', event);
            }
        });
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

    focus() {
        this.input?.focus();
    }

    componentWillUnmount(): void {
        this._clearTimer();
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
                    class={classes('form-control', className, {'rounded-full': circle, 'size-sm': compact})}
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
