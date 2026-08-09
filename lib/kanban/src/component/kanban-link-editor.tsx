import {Component, createRef} from 'preact';
import {$, classes} from '@zui/core';
import {Moveable} from '@zui/dnd';
import {KanbanLink} from './kanban-link';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {KanbanLinkEditorProps, KanbanLinkEditorState} from '../types';

const EVENT_NAMESPACE = '.kanban';

export class KanbanLinkEditor extends Component<KanbanLinkEditorProps, KanbanLinkEditorState> {
    protected _ref = createRef<HTMLDivElement>();

    protected declare _container: HTMLElement;

    protected _leaveTimer?: number;

    protected declare _moveable: Moveable;

    protected declare _multiKanban: boolean;

    state: KanbanLinkEditorState = {};

    componentDidMount(): void {
        const element = this._ref.current;
        if (!element) {
            return;
        }
        const {container = '.kanban'} = this.props;
        const containerElement = element.closest<HTMLElement>(container);
        if (!containerElement) {
            return;
        }
        const $container = $(containerElement);
        this._container = containerElement;
        this._multiKanban = $container.find('.kanban').length > 1;
        const eventSelector = '.kanban-item,.kanban-link-editor-from';
        $container.on(`mouseenter${EVENT_NAMESPACE}`, eventSelector, (event: MouseEvent) => {
            if (this.state.dragPos) {
                return;
            }
            clearTimeout(this._leaveTimer);
            const $item = $(event.target as HTMLElement).closest(eventSelector);
            const id = $item.z('key') as string;
            const content = this._getItemContent($item[0] as HTMLElement | undefined);
            if (!id || !content || this.state.from === id || $item.hasClass('is-dragging')) {
                return;
            }
            this.setState({
                from: id,
                fromKanban: this._multiKanban ? $item.closest('.kanban').z('key') as string : undefined,
                to: undefined,
                fromRect: this._getRect(content),
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
        }).on(`laneColScroll${EVENT_NAMESPACE}`, (event: Event) => {
            const {from} = this.state;
            if (from) {
                const item = Array.from((event.target as HTMLElement).querySelectorAll<HTMLElement>('.kanban-item')).find(element => element.getAttribute('z-key') === from);
                const content = this._getItemContent(item);
                if (content) {
                    this.setState({fromRect: this._getRect(content)});
                }
            }
        });

        this._moveable = new Moveable(element, {
            selector: '.kanban-link-editor-point',
            move: 'none',
            onMoveStart: () => {
                if (!this.state.from) {
                    return false;
                }
                $container.addClass('is-adding-link');
            },
            onMove: (event) => {
                const {top: offsetTop, left: offsetLeft} = containerElement.getBoundingClientRect();
                const dragPos = {left: event.clientX - offsetLeft + containerElement.scrollLeft, top: event.clientY - offsetTop + containerElement.scrollTop};
                let to: string | undefined;
                let toRect: KanbanLinkEditorState['toRect'] | undefined;
                let toKanban: string | undefined;
                const $item = $(event.target as HTMLElement).closest(eventSelector);
                const itemKey = $item.attr('z-key') as string | undefined;
                const content = this._getItemContent($item[0] as HTMLElement | undefined);
                if (itemKey && content && itemKey !== this.state.from) {
                    to = itemKey;
                    toKanban = this._multiKanban ? $item.closest('.kanban').z('key') as string : undefined;
                    toRect = this._getRect(content);
                }
                this.setState({dragPos, to, toKanban, toRect});
            },
            onMoveEnd: () => {
                const {from, fromKanban, to, toKanban} = this.state;
                const {onAddLink} = this.props;
                if ((from !== to || fromKanban !== toKanban) && onAddLink && from !== undefined && to !== undefined) {
                    onAddLink?.call(this, {from, fromKanban, to, toKanban});
                }
                this._cancelHover();
                $container.removeClass('is-adding-link');
            },
        });
    }

    componentWillUnmount(): void {
        if (this._container) {
            $(this._container).off(EVENT_NAMESPACE);
        }
        if (this._leaveTimer) {
            clearTimeout(this._leaveTimer);
            this._leaveTimer = undefined;
        }
        this._moveable?.destroy();
    }

    protected _getRect(element: HTMLElement) {
        const rect = element.getBoundingClientRect();
        const container = this._container;
        const {top: offsetTop, left: offsetLeft} = container.getBoundingClientRect();
        return {
            left: rect.left - offsetLeft + container.scrollLeft,
            top: rect.top - offsetTop + container.scrollTop,
            width: rect.width,
            height: rect.height,
        };
    }

    protected _getItemContent(element: HTMLElement | undefined) {
        const content = element?.firstElementChild;
        return content instanceof HTMLElement ? content : undefined;
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
