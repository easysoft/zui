import {$, HElement, createRef, mergeProps} from '@zui/core';
import {Moveable} from '@zui/dnd';
import {Kanban} from './kanban';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanData, KanbanDataSetting, KanbanListProps, KanbanListState} from '../types';

export class KanbanList extends HElement<KanbanListProps, KanbanListState> {
    static defaultProps: Partial<KanbanListProps> = {
        moveable: true,
        sticky: true,
        responsive: true,
        scrollbarHover: true,
    };

    state: Readonly<KanbanListState> = {};

    protected declare _loadedSetting: KanbanDataSetting;

    protected declare _data: KanbanData;

    protected _moveable?: Moveable;

    protected _ref = createRef<HTMLElement>();

    protected _rob?: ResizeObserver;

    protected _layoutTimer?: number;

    componentDidMount() {
        const {moveable, responsive} = this.props;
        if (moveable && this._ref.current) {
            this._moveable = new Moveable(this._ref.current, $.extend({selector: 'self', move: 'scroll', onMoveStart: (event: MouseEvent, target: HTMLElement) => {
                /* Ignore click on scrollbar. */
                const {bottom, right} = target.getBoundingClientRect();
                if ((event.clientY < bottom && event.clientY > (bottom - 20)) || (event.clientX < right && event.clientX > (right - 20))) {
                    return false;
                }

                /* Ignore click on link or buttons. */
                return !$(event.target as HTMLElement).closest('a,.btn,.state,.kanban-item').length;
            }}, typeof moveable === 'object' ? moveable : null));
        }
        if (responsive) {
            const rob = new ResizeObserver(this._tryUpdateLayout.bind(this));
            const $element = typeof responsive !== 'boolean' ? $(responsive) : $(this._ref.current).parent();
            $element.each((_index, element) => {
                rob.observe(element);
            });
            this._rob = rob;
        }
    }

    componentWillUnmount(): void {
        this._moveable?.destroy();
        this._rob?.disconnect();
    }

    protected _tryUpdateLayout(): void {
        if (this._layoutTimer) {
            cancelAnimationFrame(this._layoutTimer);
        }
        this._layoutTimer = requestAnimationFrame(() => {
            this.updateLayout();
            this._layoutTimer = 0;
        });
    }

    protected updateLayout(): void {
        const element = this._ref.current;
        if (!element) {
            return;
        }
        const $element = $(element);
        const width = $element.width();
        const height = $element.height();
        this.setState({width, height});
    }

    protected _getClassName(props: RenderableProps<KanbanListProps>): ClassNameLike {
        return ['kanban-container', props.className, props.sticky ? 'has-sticky' : '', props.moveable ? 'is-moveable' : '', props.scrollbarHover ? 'scrollbar-hover' : ''];
    }

    protected _getProps(props: RenderableProps<KanbanListProps>): Record<string, unknown> {
        const {width, height} = props;
        const widthSetting = typeof width === 'function' ? width.call(this) : width;
        const heightSetting = typeof height === 'function' ? height.call(this) : height;
        const {width: actualWidth, height: actualHeight} = this.state ?? {};
        return mergeProps(super._getProps(props), {
            ref: this._ref,
            style: {
                width: widthSetting,
                height: heightSetting,
                '--kanban-container-width': `${actualWidth || width}px`,
                '--kanban-container-height': `${actualHeight || height}px`,
            },
        });
    }

    protected _getChildren(props: RenderableProps<KanbanListProps>): ComponentChildren {
        const {items = []} = props;
        return [
            ...items.map((kanbanProps, index) => <Kanban key={kanbanProps.key ?? index} sticky={props.sticky} {...kanbanProps}/>),
            props.children,
        ];
    }
}
