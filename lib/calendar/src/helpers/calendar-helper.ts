import {$, i18n} from '@zui/core';
import {getDateTime} from '@zui/helpers';
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
        const start = getDateTime(event.start);
        if (Number.isNaN(start)) {
            continue;
        }
        const newEvent = {
            ...event,
            start,
        } as CalendarEvent;
        if (event.end !== undefined) {
            const end = getDateTime(event.end);
            if (!Number.isNaN(end)) {
                newEvent.end = end;
            } else {
                delete newEvent.end;
            }
        }
        const oldEvent = eventsMap.get(newEvent.id);
        if (oldEvent) {
            $.extend(true, oldEvent, newEvent);
        } else {
            const finalEvent = $.extend(true, {}, newEvent) as CalendarEvent;
            if (finalEvent.order === undefined) {
                finalEvent.order = finalEvents.length;
            }
            if (defaultCategoryID !== undefined && finalEvent.category === undefined) {
                finalEvent.category = defaultCategoryID;
            }
            eventsMap.set(finalEvent.id, finalEvent);
            finalEvents.push(finalEvent);
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
type CalendarMonthViewInfo = {
    /** 日历天数 */
    days: number;
    /** 日历开始时间 */
    startTime: number;
    /** 日历第一天 */
    firstDay: number;
    /** 日历首个可见日期 */
    startDate: Date;
    /** 日历行数 */
    rows: number;
};

export const getMonthViewInfo = (year: number, month: number, weekStart = 0): CalendarMonthViewInfo => {
    const firstDay = new Date(year, month - 1, 1);
    const firstDayOfWeek = firstDay.getDay();
    const endDay = new Date(year, month, 0);
    const offset = (7 + firstDayOfWeek - weekStart) % 7;
    const startDate = new Date(year, month - 1, 1 - offset);
    const days = endDay.getDate();
    return {
        days,
        startTime: startDate.getTime(),
        firstDay: firstDay.getTime(),
        startDate,
        rows: Math.max(5, Math.ceil((offset + days) / 7)),
    };
};
