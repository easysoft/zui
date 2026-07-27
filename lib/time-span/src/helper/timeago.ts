import {i18n} from '@zui/core';
import {createDate, type DateLike} from '@zui/helpers/src/date-helper';

export function timeago(time: DateLike, now?: DateLike, lang?: string): string {
    const date = createDate(time);
    const nowTime = createDate(now).getTime();
    const diff = nowTime - date.getTime();
    const absDiff = Math.abs(diff);
    const isPast = diff > 0;

    const seconds = Math.floor(absDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const t = (key: string, args?: (string | number)[]) => i18n.getLang(`ago.${key}`, args, key, lang) ?? key;
    const wrap = (text: string) => t(isPast ? 'xAgo' : 'xLater', [text]);

    if (seconds < 10) {
        return t('justNow');
    }
    if (seconds < 60) {
        return wrap(t('lessThanAMinute'));
    }
    if (minutes < 60) {
        return wrap(t('minutes', [minutes]));
    }
    if (hours < 24) {
        return wrap(t('hours', [hours]));
    }
    if (days === 1) {
        return isPast ? t('yesterday') : t('tomorrow');
    }
    if (days === 2 && isPast) {
        return t('dayBeforeYesterday');
    }
    if (days < 7) {
        return wrap(t('days', [days]));
    }
    if (weeks < 4) {
        return wrap(t('weeks', [weeks]));
    }
    if (months < 12) {
        return wrap(t('months', [months]));
    }
    return wrap(t('years', [years]));
}
