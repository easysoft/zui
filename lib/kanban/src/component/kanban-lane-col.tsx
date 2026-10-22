import {Component, createRef} from 'preact';
import {classes, $, CustomContent, toCssSize} from '@zui/core';
import {CardList} from '@zui/cards/react';

import type {ComponentChildren, JSX, RefObject} from 'preact';
import type {KanbanItem, KanbanLaneColProps} from '../types';
import {
    getColumnBackgroundStyle,
    getRowBackgroundStyle,
} from '../helpers/kanban-helpers';

export class KanbanLaneCol extends Component<KanbanLaneColProps> {
    static defaultProps = {
        watchSize: true,
    };

    protected _listRef: RefObject<HTMLElement> = createRef();

    protected declare _ob: ResizeObserver;

    componentDidMount(): void {
        const {current} = this._listRef;
        if (current && typeof ResizeObserver !== 'undefined') {
            this._ob = new ResizeObserver((entries) => {
                $(this._listRef.current).trigger('laneColResize', entries[0]);
            });
            this._ob.observe(current);
        }
    }

    componentWillUnmount(): void {
        this._ob?.disconnect();
    }

    protected _renderItem = (item: KanbanItem): ComponentChildren => {
        const {itemRender, lane, name} = this.props;
        return itemRender!.call(this, {item, lane, col: name});
    };

    protected _handleScroll = (event: Event): void => {
        const {current} = this._listRef;
        if (!current) {
            return;
        }
        $(current).trigger('laneColScroll', event);
    };

    render(props: KanbanLaneColProps) {
        const {items} = props;
        const {
            width,
            color,
            backgroundColor,
            backgroundPattern,
            colBgColor,
            rowBgColor,
            content,
            contentClass,
            itemRender,
            itemGap,
            watchSize,
            name,
            lane,
            itemCountPerRow,
            gapLeft,
            gapRight,
            laneColClass,
        } = props;
        const style: Record<string, string | null | undefined> = {
            '--kanban-col-color': color,
            '--kanban-col-width': toCssSize(width),
            '--kanban-col-gap-left': toCssSize(gapLeft),
            '--kanban-col-gap-right': toCssSize(gapRight),
        };
        if (backgroundPattern === 'horizontal') {
            Object.assign(style, getRowBackgroundStyle(rowBgColor, 'var(--kanban-lane-color)'));
        } else if (backgroundPattern === 'vertical') {
            const colBgStyle = getColumnBackgroundStyle(backgroundColor, colBgColor);
            if (colBgStyle) {
                Object.assign(style, colBgStyle);
            }
        }
        return (
            <div
                className={classes('kanban-lane-col', laneColClass)}
                style={style as JSX.CSSProperties}
                z-lane={lane}
                z-col={name}
            >
                {content ? (
                    <div className={classes('kanban-col-content', contentClass)}>
                        <CustomContent content={content} generatorThis={this} generatorArgs={[props]} />
                    </div>
                ) : null}
                <div className="kanban-items scrollbar-thin scrollbar-hover" onScroll={this._handleScroll}>
                    <CardList
                        key="list"
                        forwardRef={watchSize ? this._listRef : undefined}
                        itemProps={{className: 'kanban-item card-list-item'}}
                        items={items}
                        itemRender={itemRender ? this._renderItem : undefined}
                        countPerRow={itemCountPerRow}
                        gap={itemGap}
                    />
                </div>
            </div>
        );
    }
}
