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
const warning = shades.egg;

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

/** 画布 */
const canvas = white;

/** 控件或页面背景 */
const surface = shades.gray[100];

/** 控件或页面背景（深色） */
const surfaceDark = shades.gray[200];

/** 控件或页面背景（加深） */
const surfaceDarken = shades.gray[300];

/** 边框 */
const border = shades.zinc[200];

/** 边框（加深） */
const borderDark = shades.zinc[300];

/** 文本（加深） */
const textDark = shades.gray[900];

/** 文本 */
const text = shades.gray[800];

/** 文本（浅色） */
const textLight = shades.gray[700];

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
    surface,
    surfaceDark,
    surfaceDarken,
    border,
    borderDark,
    textDark,
    text,
    textLight,
};
