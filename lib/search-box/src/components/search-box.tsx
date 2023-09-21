import {Component, ComponentChildren, RenderableProps, createRef} from 'preact';
import {classes, Icon, nextGid} from '@zui/core';
import type {SearchBoxOptions, SearchBoxState} from '../types';
import '../style';

export class SearchBox extends Component<SearchBoxOptions, SearchBoxState> {
    static defaultProps: Partial<SearchBoxOptions> = {
        clearIcon: true,
        searchIcon: true,
        delay: 500,
    };

    #id: string;

    #input = createRef<HTMLInputElement>();

    #timer = 0;

    constructor(props: SearchBoxOptions) {
        super(props);
        this.state = {focus: false, value: props.defaultValue || ''};
        this.#id = props.id || `search-box-${nextGid()}`;
    }

    get id() {
        return this.#id;
    }

    get input() {
        return this.#input.current;
    }

    #handleClearBtnClick = (event: MouseEvent) => {
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

    #handleChange = (event: Event) => {
        const oldValue = this.state.value;
        const value = (event.target as HTMLInputElement).value;
        const {onChange} = this.props;
        this.setState({value}, () => {
            if (!onChange || oldValue === value) {
                return;
            }
            this.#clearTimer();
            this.#timer = window.setTimeout(() => {
                onChange(value, event);
                this.#timer = 0;
            }, this.props.delay || 0);
        });
    };

    #handleFocus = (event: FocusEvent) => {
        const focus = event.type === 'focus';
        this.setState({focus}, () => {
            const callback = focus ? this.props.onFocus : this.props.onBlur;
            callback?.(event);
        });
    };

    #clearTimer() {
        if (this.#timer) {
            clearTimeout(this.#timer);
        }
        this.#timer = 0;
    }

    focus() {
        this.input?.focus();
    }

    componentWillUnmount(): void {
        this.#clearTimer();
    }

    render(props: RenderableProps<SearchBoxOptions>, state: Readonly<SearchBoxState>) {
        const {style, className, rootClass, rootStyle, readonly, disabled, circle, placeholder, mergeIcon, searchIcon, clearIcon, value: controlledValue} = props;
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
            prefixView = <label key="prefix" for={id} class="input-control-prefix">{searchIconView}</label>;
        }
        if (clearIcon && !empty) {
            suffixView = (
                <button
                    type="button"
                    class="btn ghost size-sm square rounded-full"
                    onClick={this.#handleClearBtnClick}
                >
                    {clearIcon === true ? <span class="close" /> : <Icon icon={clearIcon} />}
                </button>
            );
        } else if (mergeIcon && searchIcon) {
            suffixView = searchIconView;
        }
        if (suffixView) {
            suffixView = (
                <label key="suffix" for={id} class="input-control-suffix">
                    {suffixView}
                </label>
            );
        }

        return (
            <div class={classes('search-box input-control', rootClass, {focus, empty, 'has-prefix-icon': prefixView, 'has-suffix-icon': suffixView})} style={rootStyle}>
                {prefixView}
                <input
                    ref={this.#input}
                    id={id}
                    type="text"
                    class={classes('form-control', className, {'rounded-full': circle})}
                    style={style}
                    placeholder={placeholder}
                    disabled={disabled}
                    readonly={readonly}
                    value={finalValue}
                    onInput={this.#handleChange}
                    onChange={this.#handleChange}
                    onFocus={this.#handleFocus}
                    onBlur={this.#handleFocus}
                />
                {suffixView}
            </div>
        );
    }
}
