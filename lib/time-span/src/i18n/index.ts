import {i18n} from '@zui/core';

const zh_cn = {
    justNow: '刚刚',
    xAgo: '{0}前',
    xLater: '{0}后',
    lessThanAMinute: '不到1分钟',
    yesterday: '昨天',
    dayBeforeYesterday: '前天',
    tomorrow: '明天',
    minutes: '{0}分钟',
    hours: '{0}小时',
    days: '{0}天',
    weeks: '{0}周',
    months: '{0}个月',
    years: '{0}年',
};

const zh_tw: typeof zh_cn = {
    justNow: '剛剛',
    xAgo: '{0}前',
    xLater: '{0}後',
    lessThanAMinute: '不到1分鐘',
    yesterday: '昨天',
    dayBeforeYesterday: '前天',
    tomorrow: '明天',
    minutes: '{0}分鐘',
    hours: '{0}小時',
    days: '{0}天',
    weeks: '{0}周',
    months: '{0}個月',
    years: '{0}年',
};

const en: typeof zh_cn = {
    justNow: 'Just Now',
    xAgo: '{0} ago',
    xLater: '{0} later',
    lessThanAMinute: 'Less than a minute',
    yesterday: 'Yesterday',
    dayBeforeYesterday: 'Day Before Yesterday',
    tomorrow: 'Tomorrow',
    minutes: '{0} minutes',
    hours: '{0} hours',
    days: '{0} days',
    weeks: '{0} weeks',
    months: '{0} months',
    years: '{0} years',
};

i18n.addLang({
    zh_cn: {
        ago: zh_cn,
    },
    zh_tw: {
        ago: zh_tw,
    },
    en: {
        ago: en,
    },
});
