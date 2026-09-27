import {ComponentChildren, RenderableProps} from 'preact';
import {HElement, signal, computed, effect, batch, untracked} from '@zui/core';
import {createDate, type DateLike, formatDate, getDateTime} from '@zui/helpers';
import type {CalendarCategory, CalendarEvent, CalendarProps} from '../types';
import {CalendarHeader} from './calendar-header';
import {CalendarMonthView} from './calendar-month-view';
import {mergeCategories, mergeEvents} from '../helpers';

export class Calendar<P extends CalendarProps = CalendarProps> extends HElement<P> {
    static NAME = 'Calendar';

    static defaultProps = {
        commands: {},
        maxEventCount: 5,
    };

    protected _props$ = signal(this.props);

    protected _date$ = signal(getDateTime(this.props.date));

    protected _mode$ = signal(this.props.view || 'month');

    protected _readonly$ = signal(this.props.readonly ?? false);

    protected _modifiedCategories$ = signal<CalendarCategory[]>([]);

    protected _modifiedEvents$ = signal<CalendarEvent[]>([]);

    protected _categories$ = computed(() => {
        return mergeCategories([
            ...this._props$.value.categories || [],
            ...this._modifiedCategories$.value,
        ], this.defaultCategoryID);
    });

    protected _events$ = computed(() => {
        return mergeEvents([
            ...this._props$.value.events || [],
            ...this.categories.reduce((acc, category) => [...acc, ...category.events || []], [] as CalendarEvent[]),
            ...this._modifiedEvents$.value,
        ], this.defaultCategoryID);
    });

    protected _dateEffect = effect(() => {
        const {date, mode} = this;
        untracked(() => this._props$.peek().onSwitchDate?.call(this, createDate(date), mode));
    });

    get defaultCategoryID() {
        return this._props$.value.defaultCategory ?? 'DEFAULT';
    }

    get date() {
        return this._date$.value;
    }

    get mode() {
        return this._mode$.value;
    }

    get readonly() {
        return this._readonly$.value;
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

    resetState(props: RenderableProps<P> = this.props) {
        batch(() => {
            this._props$.value = props;
            this._date$.value = getDateTime(props.date);
            this._mode$.value = props.view || 'month';
            this._readonly$.value = props.readonly ?? false;
            this._modifiedCategories$.value = [];
            this._modifiedEvents$.value = [];
        });
    }

    switchDate(date: DateLike) {
        this._date$.value = getDateTime(date);
    }

    modifyEvents(events: CalendarEvent[]) {
        this._modifiedEvents$.value = mergeEvents([...this._modifiedEvents$.value, ...events]);
    }

    modifyCategories(categories: CalendarCategory[]) {
        this._modifiedCategories$.value = mergeCategories([...this._modifiedCategories$.value, ...categories]);
    }

    clickEvent(eventID: string, mouseEvent: MouseEvent) {
        const event = this.getEvent(eventID);
        if (!event) {
            return;
        }
        const category = this.getCategory(event.category ?? '');
        this.props.onClickEvent?.call(this, event, category!, mouseEvent);
    }

    clickDay(dateStr: string, mouseEvent: MouseEvent) {
        const date = createDate(dateStr);
        this.props.onClickDay?.call(this, date, mouseEvent);
    }

    getEvent(eventID: string) {
        return this.events.find(event => String(event.id) === String(eventID));
    }

    getDayEvents(date: DateLike) {
        const dateStr = formatDate(date, 'yyyy-MM-dd');
        return this.events.filter(event => formatDate(event.start, 'yyyy-MM-dd') === dateStr);
    }

    getCategory(categoryID: string) {
        return this.categories.find(category => String(category.id) === String(categoryID));
    }

    componentWillUnmount(): void {
        this._dateEffect();
        super.componentWillUnmount();
    }

    componentDidUpdate(previousProps: Readonly<P>): void {
        const {props} = this;
        batch(() => {
            this._props$.value = props;
            if (props.date !== undefined && props.date !== previousProps.date) {
                this._date$.value = getDateTime(props.date);
            }
            if (props.view !== undefined && props.view !== previousProps.view) {
                this._mode$.value = props.view;
            }
            if (props.readonly !== undefined && props.readonly !== previousProps.readonly) {
                this._readonly$.value = props.readonly;
            }
        });
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
                    dateFormat={props.dateFormat}
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
