type DateLike = Date | number | string;

/**
 * 一天的总毫秒数
 */
export const TIME_DAY = 24 * 60 * 60 * 1000;

/**
 * 创建一个 Date 对象
 * @param date 用于创建 Date 对象的日期时间表达值，如果留空则创建当前系统时间对象
 * @returns 日期时间对象
 */
export const createDate = (date?: DateLike): Date => {
    if (!date) {
        return new Date();
    }
    if (date instanceof Date) {
        return date;
    }
    if (typeof date === 'string') {
        date = date.trim();
        if (/^\d+$/.test(date)) {
            date = Number.parseInt(date, 10);
        }
    }
    if (typeof date === 'number' && date < 10000000000) {
        date *= 1000;
    }
    date = new Date(date);
    return date;
};

/**
 * 判断两个日期是否是在同一天
 * @param date1 第一个日期时间表达值
 * @param date2 第二个日期时间表达值，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示两个日期是同一天
 */
export const isSameDay = (date1: DateLike, date2: DateLike = new Date()): boolean => {
    date1 = createDate(date1);
    date2 = createDate(date2);
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
};

/**
 * 判断两个日期是否是在同一年
 * @param date1 第一个日期时间表达值
 * @param date2 第二个日期时间表达值，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示两个日期是同一年
 */
export const isSameYear = (date1: DateLike, date2: DateLike = new Date()): boolean => createDate(date1).getFullYear() === createDate(date2).getFullYear();

/**
 * 判断两个日期是否是在同一个月
 * @param date1 第一个日期时间表达值
 * @param date2 第二个日期时间表达值，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示两个日期是同一月
 */
export const isSameMonth = (date1: DateLike, date2: DateLike = new Date()): boolean => {
    date1 = createDate(date1);
    date2 = createDate(date2);
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth();
};

/**
 * 判断两个日期是否是在同一个周（周一为第一天）
 * @param date1 第一个日期时间表达值
 * @param date2 第二个日期时间表达值，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示两个日期是同一周
 */
export const isSameWeek = (date1: DateLike, date2: DateLike = new Date()): boolean => {
    date1 = createDate(date1);
    date2 = createDate(date2);
    const oneDayTime = 1000 * 60 * 60 * 24;
    const weeks1 = Math.floor(date1.getTime() / oneDayTime);
    const weeks2 = Math.floor(date2.getTime() / oneDayTime);
    // 1970-1-1 是周四
    return Math.floor((weeks1 + 4) / 7) === Math.floor((weeks2 + 4) / 7);
};

/**
 * 判断指定的日期是否是在今天
 * @param date 要判断的日期时间表达值
 * @param now 作为今天判断依据的日期，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示是今天
 */
export const isToday = (date: DateLike, now?: DateLike): boolean => isSameDay(createDate(now), date);

/**
 * 判断指定的日期是否是在昨天
 * @param date 要判断的日期时间表达值
 * @param now 作为今天判断依据的日期，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示是昨天
 */
export const isYesterday = (date: DateLike, now?: DateLike): boolean => isSameDay(createDate(now).getTime() - TIME_DAY, date);

/**
 * 判断指定的日期是否是在明天
 * @param date 要判断的日期时间表达值
 * @param now 作为今天判断依据的日期，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示是明天
 */
export const isTomorrow = (date: DateLike, now?: DateLike): boolean => isSameDay(createDate(now).getTime() + TIME_DAY, date);

/**
 * 判断指定的日期是否是在前天
 * @param date 要判断的日期时间表达值
 * @param now 作为今天判断依据的日期，如果留空则使用当前系统时间
 * @returns 如果为 `true` 则表示是前天
 */
export const isDBY = (date: DateLike, now?: DateLike): boolean => isSameDay(createDate(now).getTime() - 2 * TIME_DAY, date);

/**
 * 格式化日期时间值为字符串，所有可用的格式化参数有：
 * - yyyy，例如：'2018'，表示四位数字表示的年份
 * - yy，例如：'18'，表示两位数字表示的年份
 * - MM，例如：'07'，表示两位数字表示的月份，不足两位在起始用 0 填充
 * - M，例如：'10'，表示一位或两位数字表示的月份
 * - dd，例如：'05'，表示两位数字表示的日期，不足两位在起始用 0 填充
 * - d，例如：'5'，表示一位或两位数字表示的日期
 * - hh，例如：'08'，表示两位数字表示的小时，不足两位在起始用 0 填充
 * - h，例如：'8'，表示一位或两位数字表示的小时
 * - mm，例如：'03'，表示两位数字表示的分钟，不足两位在起始用 0 填充
 * - m，例如：'3'，表示一位或两位数字表示的分钟
 * - ss，例如：'05'，表示两位数字表示的秒数，不足两位在起始用 0 填充
 * - s，例如：'5'，表示一位或两位数字表示的秒数
 * - S，例如：'236'，表示毫秒数
 * - SSS，例如：'036'，表示毫秒数，不足3位在起始用 0 填充
 * @summary 格式化日期时间值为字符串
 * @param date 要格式化的日期时间表达值
 * @param format 格式化字符串
 * @returns 日期时间格式化文本
 */
export const formatDate = (date: DateLike, format = 'yyyy-MM-dd hh:mm'): string => {
    date = createDate(date);

    const dateInfo = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'H+': date.getHours() % 12,
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'S+': date.getMilliseconds(),
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substring(4 - RegExp.$1.length));
    }
    Object.keys(dateInfo).forEach((k) => {
        if (new RegExp(`(${k})`).test(format)) {
            const str = `${dateInfo[k]}`;
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : (`00${str}`).substring(str.length));
        }
    });
    return format;
};

/**
 * 格式化日期时间范围
 * @param date1 起始时间
 * @param date2 结束时间
 * @param format 格式化参数
 * @returns 时间范围描述文本
 */
export const formatDateSpan = (date1: DateLike, date2: DateLike, format?: {full?: string; month?: string; day?: string; str?: string;}): string => {
    const finalFormat = {
        full: 'yyyy-M-d', month: 'M-d', day: 'd', str: '{0} ~ {1}', ...format,
    };

    const date1Str = formatDate(date1, isSameYear(date1) ? finalFormat.month : finalFormat.full);
    if (isSameDay(date1, date2)) {
        return date1Str;
    }
    const date2Str = formatDate(date2, isSameYear(date1, date2) ? (isSameMonth(date1, date2) ? finalFormat.day : finalFormat.month) : finalFormat.full);
    return finalFormat.str.replace('{0}', date1Str).replace('{1}', date2Str);
};

/**
 * 根据描述获取当前时间与指定描述之间的毫秒数
 * @param desc 起始时间
 * @returns 毫秒数
 * @function
 */
export const getTimeBeforeDesc = (desc: string): number => {
    const now = new Date().getTime();
    switch (desc) {
        case 'oneWeek':
            return now - (TIME_DAY * 7);
        case 'oneMonth':
            return now - (TIME_DAY * 31);
        case 'threeMonth':
            return now - (TIME_DAY * 31 * 3);
        case 'halfYear':
            return now - (TIME_DAY * 183);
        case 'oneYear':
            return now - (TIME_DAY * 365);
        case 'twoYear':
            return now - (2 * (TIME_DAY * 365));
        default:
            return 0;
    }
};

/**
 * 基于初始时间戳计算加或减一段时间戳后的时间戳
 * @param duration 时间长度
 * @param unit 时间单位
 * @param add 加/减
 * @param initialDate 初始时间戳
 * @returns 时间戳
 */
export const calculateTimestamp = (duration: number, unit: 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour' | 'minute', add = true, initialDate = Date.now()): number => {
    switch (unit) {
        case 'year':
            duration *= 365;
            return calculateTimestamp(duration, 'day', add, initialDate);
        case 'quarter':
            duration *= 3; // eslint-disable-line no-fallthrough
        case 'month':
            duration *= 30;
            return calculateTimestamp(duration, 'day', add, initialDate);
        case 'week':
            duration *= 7; // eslint-disable-line no-fallthrough
        case 'day':
            duration *= 24; // eslint-disable-line no-fallthrough
        case 'hour':
            duration *= 60; // eslint-disable-line no-fallthrough
        case 'minute':
            duration *= 60000;
            break;
        default:
            duration = 0;
    }
    return add ? initialDate + duration : initialDate - duration;
};
