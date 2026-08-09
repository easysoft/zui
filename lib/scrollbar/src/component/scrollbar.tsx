import {classes} from '@zui/core';
import {Component} from 'preact';
import type {JSX, RefObject} from 'preact';
import type {ClassNameLike} from '@zui/core';
import './scrollbar.css';

export type OnScrollListener = (scrollPos: number, type: 'vert' | 'horz') => void;

export interface ScrollbarProps {
    scrollSize: number;
    clientSize: number;
    type?: 'vert' | 'horz';
    defaultScrollPos?: number;
    minBarSize?: number;
    scrollPos?: number;
    size?: number;
    className?: ClassNameLike;
    onScroll?: OnScrollListener;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    style?: JSX.CSSProperties;
    wheelContainer?: string | RefObject<HTMLElement>;
    wheelSpeed?: number;
}

export interface ScrollbarState {
    scrollPos: number;
    dragStart: {x: number; y: number; offset: number} | false;
}

export class Scrollbar extends Component<ScrollbarProps, ScrollbarState> {
    #rafId = 0;

    #wheelRoot: Document | HTMLElement | null = null;

    constructor(props: ScrollbarProps) {
        super(props);

        this.state = {
            scrollPos: this.props.defaultScrollPos ?? 0,
            dragStart: false,
        };
    }

    get scrollPos() {
        const scrollPos = this.props.scrollPos ?? this.state.scrollPos;
        return Number.isFinite(scrollPos) ? Math.max(0, Math.min(scrollPos, this.maxScrollPos)) : 0;
    }

    get controlled() {
        return this.props.scrollPos !== undefined;
    }

    get trackSize(): number {
        const {clientSize} = this.props;
        return Number.isFinite(clientSize) ? Math.max(0, clientSize) : 0;
    }

    get contentSize(): number {
        const {scrollSize} = this.props;
        return Number.isFinite(scrollSize) ? Math.max(0, scrollSize) : 0;
    }

    get maxScrollPos(): number {
        return Math.max(0, this.contentSize - this.trackSize);
    }

    get barSize(): number {
        const {size = 12, minBarSize = 3 * size} = this.props;
        const {trackSize, contentSize} = this;
        const scrollbarSize = Number.isFinite(size) && size > 0 ? size : 12;
        const minimumBarSize = Number.isFinite(minBarSize) ? Math.max(0, minBarSize) : 3 * scrollbarSize;
        if (!trackSize || contentSize <= trackSize) {
            return trackSize;
        }
        return Math.min(trackSize, Math.max(Math.round(trackSize * trackSize / contentSize), Math.min(minimumBarSize, trackSize)));
    }

    get barTravel(): number {
        return Math.max(0, this.trackSize - this.barSize);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this._handleMouseMove);
        document.addEventListener('mouseup', this._handleMouseUp);

        const {wheelContainer} = this.props;
        if (wheelContainer) {
            const wheelRoot = typeof wheelContainer === 'string' ? document : wheelContainer.current;
            if (wheelRoot) {
                this.#wheelRoot = wheelRoot;
                wheelRoot.addEventListener('wheel', this._handleWheel, {passive: false});
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this._handleMouseMove);
        document.removeEventListener('mouseup', this._handleMouseUp);

        if (this.#wheelRoot) {
            this.#wheelRoot.removeEventListener('wheel', this._handleWheel);
            this.#wheelRoot = null;
        }
        if (this.#rafId) {
            cancelAnimationFrame(this.#rafId);
            this.#rafId = 0;
        }
    }

    scroll(scrollPos: number): boolean {
        scrollPos = Number.isFinite(scrollPos) ? Math.max(0, Math.min(Math.round(scrollPos), this.maxScrollPos)) : 0;
        if (scrollPos === this.scrollPos) {
            return false;
        }
        if (this.controlled) {
            this._afterScroll(scrollPos);
        } else {
            this.setState({
                scrollPos,
            }, this._afterScroll.bind(this, scrollPos));
        }
        return true;
    }

    scrollOffset(offset: number): boolean {
        return this.scroll(this.scrollPos + offset);
    }

    _afterScroll(scrollPos: number) {
        const {onScroll} = this.props;
        if (onScroll) {
            onScroll(scrollPos, this.props.type ?? 'vert');
        }
    }

    _handleWheel = (event: Event) => {
        const {wheelContainer} = this.props;
        const target = event.target;
        if (!(target instanceof Element) || !wheelContainer) {
            return;
        }

        if ((typeof wheelContainer === 'string' && target.closest(wheelContainer)) || typeof wheelContainer === 'object') {
            const offset = (this.props.type === 'horz' ? (event as WheelEvent).deltaX : (event as WheelEvent).deltaY) * (this.props.wheelSpeed ?? 1);
            if (this.scrollOffset(offset)) {
                event.preventDefault();
            }
        }
    };

    _handleMouseMove = (event: MouseEvent) => {
        const {dragStart} = this.state;
        if (dragStart) {
            if (this.#rafId) {
                cancelAnimationFrame(this.#rafId);
            }
            this.#rafId = requestAnimationFrame(() => {
                const {barTravel, maxScrollPos} = this;
                const dragDelta = this.props.type === 'horz' ? (event.clientX - dragStart.x) : (event.clientY - dragStart.y);
                this.scroll(dragStart.offset + (barTravel ? dragDelta * maxScrollPos / barTravel : 0));
                this.#rafId = 0;
            });
            event.preventDefault();
        }
    };

    _handleMouseUp = () => {
        if (this.state.dragStart) {
            this.setState({
                dragStart: false,
            });
        }
    };

    _handleMouseDown = (event: MouseEvent) => {
        if (!this.state.dragStart) {
            this.setState({dragStart: {x: event.clientX, y: event.clientY, offset: this.scrollPos}});
        }
        event.preventDefault();
        event.stopPropagation();
    };

    _handleClick = (event: MouseEvent) => {
        const currentTarget = event.currentTarget as HTMLElement;
        if (!currentTarget) {
            return;
        }
        const boundingRect = currentTarget.getBoundingClientRect();
        const {type} = this.props;
        const clickOffset = (type === 'horz' ? (event.clientX - boundingRect.left) : (event.clientY - boundingRect.top)) - (this.barSize / 2);
        this.scroll(this.barTravel ? clickOffset * this.maxScrollPos / this.barTravel : 0);
        event.preventDefault();
    };

    render() {
        const {
            type,
            size: configuredSize = 12,
            className,
            style,
            left,
            top,
            bottom,
            right,
        } = this.props;

        const size = Number.isFinite(configuredSize) && configuredSize > 0 ? configuredSize : 12;
        const {maxScrollPos, scrollPos} = this;
        const {trackSize, barTravel} = this;
        const {dragStart} = this.state;

        const rootStyle: JSX.CSSProperties = {
            left,
            top,
            bottom,
            right,
            ...style,
        };
        const barStyle: JSX.CSSProperties = {};
        if (type === 'horz') {
            rootStyle.height = size;
            rootStyle.width = trackSize;
            barStyle.width = this.barSize;
            barStyle.left = maxScrollPos ? Math.round(Math.min(maxScrollPos, scrollPos) * barTravel / maxScrollPos) : 0;
        } else {
            rootStyle.width = size;
            rootStyle.height = trackSize;
            barStyle.height = this.barSize;
            barStyle.top = maxScrollPos ? Math.round(Math.min(maxScrollPos, scrollPos) * barTravel / maxScrollPos) : 0;
        }

        return (
            <div
                className={classes('scrollbar', className, {
                    'is-vert': type === 'vert',
                    'is-horz': type === 'horz',
                    'is-dragging': dragStart,
                })}
                style={rootStyle}
                onMouseDown={this._handleClick}
            >
                <div
                    className="scrollbar-bar"
                    style={barStyle}
                    onMouseDown={this._handleMouseDown}
                />
            </div>
        );
    }
}
