const shades = require('./shades');

// 语义化调色板 - Semantic palettes
// ==================================

/** 主要：主题的、可链接、正常 */
const primary = shades.young;

/** 次要：次级、常态的 */
const secondary = shades.blue;

/** 成功：完成、积极 */
const success = shades.green;

/** 关注：提示、重点 */
const warning = shades.yellow;

/** 警告：提示、异常、警醒 */
const danger = shades.red;

/** 重要：优先 */
const important = shades.magenta;

/** 特殊：触动、激情 */
const special = shades.purple;


// 特殊颜色 - Special Colors
// ======================

/** 继承 */
const inherit = 'inherit';

/** 当前 */
const current = 'currentColor';

/** 透明 */
const transparent = 'transparent';

/** 纯黑 */
const black = '#000';

/** 纯白 */
const white = '#fff';


// UI 调色板 - UI palettes
// ======================

/** 画布（页面背景） */
const canvas = white;

/** 画布反色 */
const inverse = black;

/** 控件背景 */
const surface = shades.gray[100];

/** 文本 */
const fore = shades.gray[800];

/** 焦点 */
const focus = shades.young[300];

/** 链接 */
const link = shades.young[500];

/** 链接（hover） */
const linkHover = shades.young[600];

module.exports = {
    ...shades,

    primary,
    secondary,
    success,
    warning,
    danger,
    important,
    special,

    inherit,
    transparent,
    current,
    black,
    white,

    canvas,
    inverse,
    surface,
    fore,
    focus,
    link,
    'link-hover': linkHover,
};
