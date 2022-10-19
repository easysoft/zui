const colors = require('./colors.cjs');

/** 画布（页面背景） */
const canvas = colors.gray[900];

/** 画布反色 */
const inverse = colors.white;

/** 控件背景 */
const surface = colors.gray[800];

/** 文本 */
const fore = colors.gray[200];

/** 焦点 */
const focus = colors.primary[600];

/** 链接 */
const link = colors.primary[500];

/** 链接（hover） */
const linkHover = colors.primary[300];

/** Border */
const border = colors.gray[700];

module.exports = {
    canvas,
    inverse,
    surface,
    fore,
    focus,
    link,
    'link-hover': linkHover,
    border,
};
