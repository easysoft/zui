import {$, i18n} from '@zui/core';
import {getDateTime, TIME_DAY} from '@zui/helpers';
import type {CalendarCategory, CalendarEvent} from '../types';

export const mergeCategories = (categories: CalendarCategory[], defaultCategoryID?: string) => {
    const categoryMap = new Map<string, CalendarCategory>();
    const finalCategories: CalendarCategory[] = [];
    for (const category of categories) {
        const oldCategory = categoryMap.get(category.id);
        if (oldCategory) {
            $.extend(true, oldCategory, category, (oldCategory.events && category.events) ? {events: mergeEvents([...oldCategory.events, ...category.events])} : {});
        } else {
            const newCategory = $.extend(true, {}, category);
            if (newCategory.order === undefined) {
                newCategory.order = finalCategories.length;
            }
            categoryMap.set(category.id, newCategory);
            finalCategories.push(newCategory);
        }
    }

    if (defaultCategoryID !== undefined) {
        const defaultCategory = categoryMap.get(defaultCategoryID);
        if (!defaultCategory) {
            finalCategories.push({
                order: 0,
                id: defaultCategoryID,
                name: i18n.getLang('defaultCategoryName'),
            });
        }
    }

    finalCategories.sort((a, b) => a.order! - b.order!);
    return finalCategories;
};

export const mergeEvents = (events: CalendarEvent[], defaultCategoryID?: string) => {
    const eventsMap = new Map<string, CalendarEvent>();
    const finalEvents: CalendarEvent[] = [];
    for (const event of events) {
        if (event.start === undefined) {
            continue;
        }
        if (typeof event.start !== 'number') {
            event.start = getDateTime(event.start);
        }
        if (event.end !== undefined && typeof event.end !== 'number') {
            event.end = getDateTime(event.end);
        }
        const oldEvent = eventsMap.get(event.id);
        if (oldEvent) {
            $.extend(true, oldEvent, event);
        } else {
            const newEvent = $.extend(true, {}, event);
            if (newEvent.order === undefined) {
                newEvent.order = finalEvents.length;
            }
            if (defaultCategoryID !== undefined && newEvent.category === undefined) {
                newEvent.category = defaultCategoryID;
            }
            eventsMap.set(event.id, newEvent);
            finalEvents.push(newEvent);
        }
    }
    finalEvents.sort((a, b) => {
        let result = (a.allDay ? 0 : 1) - (b.allDay ? 0 : 1);
        if (result !== 0) {
            return result;
        }
        result = (a.start as number) - (b.start as number);
        if (result !== 0) {
            return result;
        }
        return a.order! - b.order!;
    });
    return finalEvents;
};

/**
 * 获取日历信息
 */
type CalenderMonthViewInfo = {
    /** 日历天数 */
    days: number;
    /** 日历开始时间 */
    startTime: number;
    /** 日历第一天 */
    firstDay: number;
};

export const getMonthViewInfo = (year: number, month: number, weekStart = 0): CalenderMonthViewInfo => {
    const firstDay = new Date(year, month - 1, 1);
    const firstDayOfWeek = firstDay.getDay();
    const endDay = new Date(year, month, 0);
    const startTime = firstDay.getTime() - ((7 + firstDayOfWeek - weekStart) % 7) * TIME_DAY;
    const days = endDay.getDate();
    return {
        days,
        startTime,
        firstDay: firstDay.getTime(),
    };
};
