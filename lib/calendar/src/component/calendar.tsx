import {ComponentChildren, RenderableProps} from 'preact';
import {HElementSignals, computed} from '@zui/core';
import {type DateLike, getDateTime} from '@zui/helpers';
import type {CalendarEvent, CalendarProps, CalendarState} from '../types';
import {CalendarHeader} from './calendar-header';
import {CalendarMonthView} from './calendar-month-view';
import {mergeCategories, mergeEvents} from '../helpers';

export class Calendar<P extends CalendarProps = CalendarProps> extends HElementSignals<P, CalendarState> {
    static NAME = 'Calendar';

    static defaultProps = {
        commands: {},
        maxEventCount: 5,
    };

    protected _categories$ = computed(() => {
        return mergeCategories([
            ...this.props.categories || [],
            ...this.signals.modifidCategories.value,
        ], this.defaultCategoryID);
    });

    protected _events$ = computed(() => {
        return mergeEvents([
            ...this.props.events || [],
            ...this.categories.reduce((acc, category) => [...acc, ...category.events || []], [] as CalendarEvent[]),
            ...this.signals.modifiedEvents.value,
        ], this.defaultCategoryID);
    });

    get defaultCategoryID() {
        return this.props.defaultCategory ?? 'DEFAULT';
    }

    get date() {
        return this.signals.date.value;
    }

    get mode() {
        return this.signals.mode.value;
    }

    get readonly() {
        return this.state.readonly;
    }

    get categories$() {
        return this._categories$;
    }

    get categories() {
        return this._categories$.value;
    }

    get events$() {
        return this._events$;
    }

    get events() {
        return this._events$.value;
    }

    getDefaultState(props: RenderableProps<P>): CalendarState {
        return {
            date: getDateTime(props.date),
            mode: props.view || 'month',
            readonly: props.readonly ?? false,
            modifidCategories: [],
            modifiedEvents: [],
        };
    }

    switchDate(date: DateLike) {
        this.changeState({date: getDateTime(date)});
    }

    clickEvent(eventID: string, mouseEvent: MouseEvent) {
        const event = this.getEvent(eventID);
        if (!event) {
            return;
        }
        const category = this.getCategory(event.category ?? '');
        this.props.onClickEvent?.call(this, event, category!, mouseEvent);
    }

    getEvent(eventID: string) {
        return this.events.find(event => String(event.id) === String(eventID));
    }

    getCategory(categoryID: string) {
        return this.categories.find(category => String(category.id) === String(categoryID));
    }

    protected _renderHeader(props: RenderableProps<P>): ComponentChildren {
        const {headerTitle, headerActions, headerProps, monthFormat, dateFormat} = props;

        return (
            <CalendarHeader
                key="header"
                title={headerTitle}
                actions={headerActions}
                date={this.date}
                monthFormat={monthFormat}
                dateFormat={dateFormat}
                {...headerProps}
            />
        );
    }

    protected _renderBody(props: RenderableProps<P>): ComponentChildren {
        const {mode, date, categories, events} = this;

        return (
            <div key="body" className="calendar-body" z-mode={mode} z-date={date}>
                <CalendarMonthView
                    date={date}
                    categories={categories}
                    events={events}
                    weekStart={props.weekStart}
                    maxEventCount={props.maxEventCount}
                    eventRender={props.eventRender}
                />
            </div>
        );
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return [
            this._renderHeader(props),
            this._renderBody(props),
        ];
    }
}
