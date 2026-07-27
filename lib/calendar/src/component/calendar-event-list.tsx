import {Component} from 'preact';
import {$, ClassNameLike, i18n, signal} from '@zui/core';
import {List} from '@zui/list/src/component';
import {formatDate} from '@zui/helpers';
import '@zui/css-icons/src/icons/chevron.css';
import type {ListItem, ListitemProps} from '@zui/list';
import type {CalendarCategory, CalendarEvent} from '../types';

/**
 * Calendar event list props.
 */
export type CalendarEventListProps = {
    className?: ClassNameLike;
    events: CalendarEvent[];
    categoriesMap: Map<string, CalendarCategory>;
    maxEventCount?: number;
    eventRender?: (event: CalendarEvent, category: CalendarCategory, item: ListitemProps) => Partial<ListitemProps> | void | false;
};

/**
 * Calendar event list component.
 */
export class CalendarEventList extends Component<CalendarEventListProps> {
    protected _showAll$ = signal(false);

    protected _getItems = (props: CalendarEventListProps): ListItem[] => {
        const {events, categoriesMap, maxEventCount, eventRender} = props;
        const items: ListItem[] = [];
        let moreCount = 0;
        const showAll = this._showAll$.value;
        for (const event of events) {
            if (event.hidden) {
                continue;
            }
            const category = categoriesMap.get(event.category ?? '') || {} as CalendarCategory;
            if (category.hidden) {
                continue;
            }

            if (maxEventCount && items.length >= maxEventCount && !showAll) {
                moreCount++;
                continue;
            }

            const color = event.color ?? category.color;
            const background = event.background ?? category.background;
            const timeStr = event.allDay ? '' : formatDate(event.start, 'hh:mm');
            const item = {
                type: 'item',
                key: event.id,
                text: event.title,
                hint: `${category.name ? `[${category.name}]` : ''}${event.allDay ? '' : timeStr} ${event.title}`,
                icon: event.icon ?? category.icon ?? 'calendar-event-dot',
                leading: event.allDay ? null : <span className="calendar-event-list-item-time">{timeStr}</span>,
                className: ['calendar-event-list-item', background ? 'has-bg' : ''],
                style: (color || background) ? {'--calendar-event-color': color, '--calendar-event-background': background} : undefined,
                multiline: false,
                props: {'zui-command': `.~clickEvent/${event.id}/$.event`},
            };

            if (eventRender) {
                const renderResult = eventRender.call(this, event, category, item);
                if (renderResult === false) {
                    continue;
                }
                if (renderResult) {
                    $.extend(item, renderResult);
                }
            }

            items.push(item);
        }

        if (moreCount && !showAll) {
            items.push({
                type: 'item',
                key: 'more',
                textClass: 'text-gray',
                text: i18n.getLang('moreItems', [moreCount]),
                className: 'calendar-event-list-item-more state',
                onClick: () => this._showAll$.value = true,
            });
        }
        return items;
    };

    render(props: CalendarEventListProps) {
        return (
            <List
                items={this._getItems(props)}
                className={props.className}
            />
        );
    }
}
