import {i18n} from '@zui/core';
import '@zui/datetime-picker/src/i18n';

const zh_cn = {
    defaultCategoryName: '默认',
    weekNamesFull: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    moreItems: '还有 {0} 项…',

};

const zh_tw: typeof zh_cn = {
    defaultCategoryName: '預設',
    weekNamesFull: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
    moreItems: '還有 {0} 項…',
};

const en: typeof zh_cn = {
    defaultCategoryName: 'Default',
    weekNamesFull: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    moreItems: '+{0} more…',
};

i18n.addLang({
    zh_cn,
    zh_tw,
    en,
});
