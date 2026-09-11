const zh_cn = {
    showMore: '剩余{count}项，点击显示更多',
};

const zh_tw: typeof zh_cn = {
    showMore: '剩餘{count}項，點擊顯示更多',
};

const en: typeof zh_cn = {
    showMore: '{count} items remaining, click to show more',
};

export const listI18n = {zh_cn, zh_tw, en, default: zh_cn};
