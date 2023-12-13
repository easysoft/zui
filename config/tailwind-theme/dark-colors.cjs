const shades = require('tailwindcss/colors');
const {reverseShade} = require('./reverse-shade.cjs');

// 语义化调色板 - Semantic palettes
// ==================================

/** 主要：主题的、可链接、正常 */
const primary = reverseShade(shades.blue);

/** 次要：次级、常态的 */
const secondary = reverseShade(shades.sky);

/** 成功：完成、积极 */
const success = reverseShade(shades.green);

/** 关注：提示、重点 */
const warning = reverseShade(shades.amber);

/** 警告：提示、异常、警醒 */
const danger = reverseShade(shades.red);

/** 重要：优先 */
const important = reverseShade(shades.pink);

/** 特殊：触动、激情 */
const special = reverseShade(shades.purple);

/** 灰色：中立、背景、边框 */
const gray = reverseShade(shades.slate);


// 特殊颜色 - Special Colors
// ======================

// UI 特殊颜色定义 - UI Special Colors
// ======================

/** 画布（页面背景） */
const canvas = gray[50];

/** 画布反色 */
const inverse = shades.white;

/** 控件背景 */
const surfaceLight = gray[100];

/** 控件背景 */
const surface = gray[200];

/** 控件背景 */
const surfaceStrong = gray[300];

/** 文本 */
const fore = gray[700];

/** 焦点 */
const focus = primary[200];

/** 链接 */
const link = primary[400];

/** 链接（hover） */
const linkHover = primary[500];

/** 链接（visited） */
const linkVisited = primary[600];

/** 链接（Active） */
const linkActive = primary[700];

/* 占位文本颜色（placeholder） */
const placeholder = gray[400];

/** Border */
const border = gray[200];

/** Strong border */
const borderStrong = gray[300];

/** Strong border */
const borderLight = gray[100];

module.exports = {
    gray,
    primary,
    secondary,
    success,
    warning,
    danger,
    important,
    special,

    canvas,
    inverse,
    surface,
    'surface-light': surfaceLight,
    'surface-strong': surfaceStrong,
    fore,
    focus,
    link,
    'link-hover': linkHover,
    'link-visited': linkVisited,
    'link-active': linkActive,
    placeholder,
    border,
    'border-strong': borderStrong,
    'border-light': borderLight,
};
