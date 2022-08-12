import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import {Component, JSX} from 'preact';
import '../vars.css';
import './scrollbar.css';

export interface OnScrollListener {
    (scrollPos: number, type: 'vert' | 'horz'): void;
}

export interface ScrollbarProps {
    scrollSize: number;
    clientSize: number;
    type?: 'vert' | 'horz';
    defaultScrollPos?: number;
    scrollPos?: number;
    size?: number;
    className?: ClassNameLike,
    onScroll?: OnScrollListener;
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
    style?: JSX.CSSProperties;
    wheelContainer?: string;
    wheelSpeed?: number;
}

export interface ScrollbarState {
    scrollPos: number;
    dragStart: {x: number, y: number, offset: number} | false;
}

export class Scrollbar extends Component<ScrollbarProps, ScrollbarState> {
    private _rafId = 0;

    constructor(props: ScrollbarProps) {
        super(props);

        this.state = {
            scrollPos: this.props.defaultScrollPos ?? 0,
            dragStart: false,
        };
    }

    get scrollPos() {
        return this.props.scrollPos ?? this.state.scrollPos;
    }

    get controlled() {
        return this.props.scrollPos !== undefined;
    }

    get maxScrollPos(): number {
        const {scrollSize, clientSize} = this.props;
        return Math.max(0, scrollSize - clientSize);
    }

    get barSize(): number {
        const {clientSize, scrollSize, size = 10} = this.props;
        return Math.max(Math.round(clientSize * clientSize / scrollSize), size);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this._handleMouseMove);
        document.addEventListener('mouseup', this._handleMouseUp);

        const {wheelContainer} = this.props;
        if (wheelContainer) {
            document.addEventListener('wheel', this._handleWheel, {passive: false});
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this._handleMouseMove);
        document.removeEventListener('mouseup', this._handleMouseUp);

        if (this.props.wheelContainer) {
            document.removeEventListener('wheel', this._handleWheel);
        }
    }

    scroll(scrollPos: number) {
        scrollPos = Math.max(0, Math.min(Math.round(scrollPos), this.maxScrollPos));
        if (scrollPos === this.scrollPos) {
            return;
        }
        if (this.controlled) {
            this._afterScroll(scrollPos);
        } else {
            this.setState({
                scrollPos,
            }, this._afterScroll.bind(this, scrollPos));
        }
    }

    scrollOffset(offset: number) {
        this.scroll(this.scrollPos + offset);
    }

    _afterScroll(scrollPos: number) {
        const {onScroll} = this.props;
        if (onScroll) {
            onScroll(scrollPos, this.props.type ?? 'vert');
        }
    }

    _handleWheel = (event: WheelEvent) => {
        const target = (event.target as HTMLElement)?.closest(this.props.wheelContainer ?? '.-scrollbar-container');
        if (!target) {
            return;
        }
        event.preventDefault();
        this.scrollOffset((this.props.type === 'horz' ? event.deltaX : event.deltaY) * (this.props.wheelSpeed ?? 1));
    };

    _handleMouseMove = (event: MouseEvent) => {
        const {dragStart} = this.state;
        if (dragStart) {
            if (this._rafId) {
                cancelAnimationFrame(this._rafId);
            }
            this._rafId = requestAnimationFrame(() => {
                const dragDelta = this.props.type === 'horz' ? (event.clientX - dragStart.x) : (event.clientY - dragStart.y);
                this.scroll(dragStart.offset + dragDelta * this.props.scrollSize / this.props.clientSize);
                this._rafId = 0;
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
        event.stopPropagation();
    };

    _handleClick = (event: MouseEvent) => {
        const currentTarget = event.currentTarget as HTMLElement;
        if (!currentTarget) {
            return;
        }
        const boundingRect = currentTarget.getBoundingClientRect();
        const {type, clientSize, scrollSize} = this.props;
        const clickOffset = (type === 'horz' ? (event.clientX - boundingRect.left) : (event.clientY - boundingRect.top)) - (this.barSize / 2);
        this.scroll(clickOffset * scrollSize / clientSize);
    };

    render() {
        const {
            scrollSize,
            clientSize,
            type,
            size = 10,
            className,
            style,
            left,
            top,
            bottom,
            right,
        } = this.props;

        const {maxScrollPos, scrollPos} = this;
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
            rootStyle.width = clientSize;
            barStyle.width = Math.max(Math.round(clientSize * clientSize / scrollSize), size);
            barStyle.left = Math.round(scrollPos * (clientSize - barStyle.width) / maxScrollPos);
        } else {
            rootStyle.width = size;
            rootStyle.height = clientSize;
            barStyle.height = this.barSize;
            barStyle.top = Math.round(scrollPos * (clientSize - barStyle.height) / maxScrollPos);
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
