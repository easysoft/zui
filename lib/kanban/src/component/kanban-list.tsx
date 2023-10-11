import {$, HElement, createRef, mergeProps} from '@zui/core';
import {Moveable} from '@zui/dnd';
import {Kanban} from './kanban';

import type {ComponentChildren, RefObject, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanData, KanbanDataSetting, KanbanGroupProps, KanbanListProps, KanbanListState, KanbanProps} from '../types';
import {KanbanGroup} from './kanban-group';

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

    protected _kanbanRefs = new Map<string, RefObject<Kanban>>();

    constructor(props: KanbanListProps) {
        super(props);
        console.time('kanbanList.init');
    }

    componentDidMount() {
        const {moveable, responsive} = this.props;
        if (moveable && this._ref.current) {
            this._moveable = new Moveable(this._ref.current, $.extend({selector: 'self', move: 'scroll', onMoveStart: (event: MouseEvent, target: HTMLElement) => {
                /* Ignore click on scrollbar. */
                const {bottom, right} = target.getBoundingClientRect();
                if ((event.clientY < bottom && event.clientY > (bottom - 20)) || (event.clientX < right && event.clientX > (right - 20))) {
                    return false;
                }

                /* Ignore click on link, input or buttons. */
                return !$(event.target as HTMLElement).closest('a,input,.btn,.state,.kanban-item,.not-moveable').length;
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

    getKanban(key: unknown) {
        return this._kanbanRefs.get(String(key))?.current;
    }

    updateLayout(): void {
        const element = this._ref.current;
        if (!element) {
            return;
        }
        const $element = $(element);
        const width = $element.width();
        const height = $element.height();
        this.setState({width, height});
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

    protected _getClassName(props: RenderableProps<KanbanListProps>): ClassNameLike {
        return ['kanban-list', props.className, props.sticky ? 'has-sticky' : '', props.moveable ? 'is-moveable' : '', props.scrollbarHover ? 'scrollbar-hover' : ''];
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
                '--kanban-list-width': `${actualWidth || width}px`,
                '--kanban-list-height': `${actualHeight || height}px`,
            },
        });
    }

    protected _getChildren(props: RenderableProps<KanbanListProps>): ComponentChildren {
        const {items = [], kanbanProps: kanbanPropsSetting} = props;
        return [
            ...items.map((kanbanProps, index) => {
                if (kanbanPropsSetting) {
                    kanbanProps = typeof kanbanPropsSetting === 'function' ? kanbanPropsSetting.call(this, kanbanProps, index) : $.extend({}, kanbanPropsSetting, kanbanProps);
                }
                const key = String((kanbanProps as KanbanProps).key ?? index);
                let ref = this._kanbanRefs.get(key);
                if (!ref) {
                    ref = createRef<Kanban>();
                    this._kanbanRefs.set(key, ref);
                }
                const KanbanComponent = ((kanbanProps as KanbanGroupProps).heading !== undefined || (kanbanProps as KanbanGroupProps).type === 'group') ? KanbanGroup : Kanban;
                return <KanbanComponent key={key} ref={ref} sticky={props.sticky} {...(kanbanProps as KanbanProps)} z-key={key} />;
            }),
            props.children,
        ];
    }
}
