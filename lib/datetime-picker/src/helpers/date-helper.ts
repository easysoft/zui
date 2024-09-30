import {addDate, createDate, isValidDate} from '@zui/helpers';
import {DateSetting} from '../types';

export function campDate(date: Date, minDate?: Date | null, maxDate?: Date | null): Date {
    if (minDate && date < minDate) {
        return minDate;
    }
    if (maxDate && date > maxDate) {
        return maxDate;
    }
    return date;
}

export function getDate(date?: DateSetting | null): Date | null {
    if (date === undefined || date === null) {
        return null;
    }
    if (typeof date === 'function') {
        date = date();
    }
    if (typeof date === 'string' && date.startsWith('today')) {
        const today = new Date();
        if (date.length > 6) {
            date = addDate(today, date.substring(5).replace('+', ''));
        } else {
            date = today;
        }
    } else {
        date = createDate(date);
    }
    return isValidDate(date) ? date : null;
}
