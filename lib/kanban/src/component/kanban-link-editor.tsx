import {Component, createRef} from 'preact';
import {$, classes} from '@zui/core';
import {Moveable} from '@zui/dnd';
import {KanbanLink} from './kanban-link';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {KanbanLinkEditorProps, KanbanLinkEditorState} from '../types';

const EVENT_NAMESPACE = '.kanbanLinkEditor';

export class KanbanLinkEditor extends Component<KanbanLinkEditorProps, KanbanLinkEditorState> {
    protected _ref = createRef<HTMLDivElement>();

    protected declare _kanban: HTMLElement;

    protected _raf?: number;

    protected _leaveTimer?: number;

    protected declare _moveable: Moveable;

    state: KanbanLinkEditorState = {};

    componentDidMount(): void {
        const element = this._ref.current!;
        const kanbanElement = element.closest('.kanban') as HTMLElement;
        this._kanban = kanbanElement;

        const eventSelector = '.kanban-item,.kanban-link-editor-from';
        $(kanbanElement).on(`mouseenter${EVENT_NAMESPACE}`, eventSelector, (event: MouseEvent) => {
            if (this.state.dragPos) {
                return;
            }
            clearTimeout(this._leaveTimer);
            const $item = $(event.target as HTMLElement).closest(eventSelector);
            const id = $item.attr('z-key') as string;
            if (this.state.from === id || $item.hasClass('is-dragging')) {
                return;
            }
            this.setState({
                from: id,
                to: undefined,
                fromRect: this._getRect($item.children()[0]!),
                dragPos: undefined,
            });
        }).on(`mouseleave${EVENT_NAMESPACE}`, eventSelector, () => {
            if (this.state.dragPos) {
                return;
            }
            clearTimeout(this._leaveTimer);
            this._leaveTimer = window.setTimeout(() => {
                this._cancelHover();
                this._leaveTimer = 0;
            }, 200);
        }).on(`dragstart${EVENT_NAMESPACE}`, '.kanban-item', () => {
            if (this.state.dragPos) {
                return;
            }
            this._cancelHover();
        });

        this._moveable = new Moveable(element, {
            selector: '.kanban-link-editor-point',
            move: 'none',
            onMoveStart: () => {
                if (!this.state.from) {
                    return false;
                }
                $(kanbanElement).addClass('is-adding-link');
            },
            onMove: (event) => {
                const {top: offsetTop, left: offsetLeft} = this._kanban.getBoundingClientRect();
                const dragPos = {left: event.clientX - offsetLeft, top: event.clientY - offsetTop};
                let to: string | undefined;
                let toRect: KanbanLinkEditorState['toRect'] | undefined;
                const $item = $(event.target as HTMLElement).closest(eventSelector);
                if ($item.length && to !== this.state.from) {
                    to = $item.attr('z-key') as string;
                    toRect = this._getRect($item.children()[0]!);
                }
                this.setState({dragPos, to, toRect});
            },
            onMoveEnd: () => {
                const {from, to} = this.state;
                const {onAddLink} = this.props;
                if (from !== to && onAddLink && from !== undefined && to !== undefined) {
                    onAddLink?.call(this, from, to);
                }
                this._cancelHover();
                $(kanbanElement).removeClass('is-adding-link');
            },
        });
    }

    componentWillUnmount(): void {
        const kanbanElement = this._ref.current?.closest('.kanban');
        if (kanbanElement) {
            $(kanbanElement).off(EVENT_NAMESPACE);
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
    }

    protected _getRect(element: HTMLElement) {
        const rect = element.getBoundingClientRect();
        const {top: offsetTop, left: offsetLeft} = this._kanban.getBoundingClientRect();
        return {
            left: rect.left - offsetLeft,
            top: rect.top - offsetTop,
            width: rect.width,
            height: rect.height,
        };
    }

    protected _cancelHover() {
        this.setState({
            from: undefined,
            to: undefined,
            fromRect: undefined,
            dragPos: undefined,
        });
    }

    protected _renderLink(state: KanbanLinkEditorState) {
        const {fromRect, toRect, from, to = '', dragPos} = state;
        if (!fromRect || !from || !dragPos) {
            return null;
        }
        const toBounding = toRect ? {
            left: toRect.left,
            top: toRect.top,
            right: toRect.left + toRect.width,
            bottom: toRect.top + toRect.height,
        } : {
            left: dragPos.left,
            top: dragPos.top,
            right: dragPos.left,
            bottom: dragPos.top,
        };
        return (
            <KanbanLink
                key="link"
                from={from}
                to={to}
                lineStyle="dotted"
                color="var(--color-primary-500)"
                fromRect={{
                    left: fromRect.left,
                    top: fromRect.top,
                    right: fromRect.left + fromRect.width,
                    bottom: fromRect.top + fromRect.height,
                }}
                toRect={toBounding}
            />
        );
    }

    render(_props: RenderableProps<KanbanLinkEditorProps>, state: KanbanLinkEditorState) {
        const {from, fromRect, to, toRect} = state;
        let fromView: ComponentChildren;
        let toView: ComponentChildren;
        if (from && fromRect) {
            fromView = (
                <div className="kanban-link-editor-from not-moveable" z-key={from} style={fromRect}>
                    <div className="kanban-link-editor-point is-left" />
                    <div className="kanban-link-editor-point is-top" />
                    <div className="kanban-link-editor-point is-right" />
                    <div className="kanban-link-editor-point is-bottom" />
                </div>
            );
        }
        if (to && toRect) {
            toView = (
                <div className="kanban-link-editor-to" z-key={to} style={toRect} />
            );
        }
        return (
            <div className={classes('kanban-link-editor')} ref={this._ref}>
                {fromView}
                {toView}
                {this._renderLink(state)}
            </div>
        );
    }
}
