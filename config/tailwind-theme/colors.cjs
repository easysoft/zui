const shades = require('tailwindcss/colors');

// Semantic palettes
// ==================================

/** Primary: Theme-related, linkable, normal. */
const primary = shades.blue;

/** Secondary: Subordinate, normal state. */
const secondary = shades.sky;

/** Success: Completed, positive. */
const success = shades.green;

/** Warning: Prompt, emphasis. */
const warning = shades.amber;

/** Danger: Prompt, exception, alert. */
const danger = shades.red;

/** Important: Priority. */
const important = shades.pink;

/** Special: Exciting, passionate. */
const special = shades.purple;

/** Gray: Neutral, background, border. */
const gray = shades.slate;


// Special Colors
// ======================

/** Inherit. */
const inherit = shades.inherit;

/** Current. */
const current = shades.current;

/** Transparent. */
const transparent = shades.transparent;

/** Black. */
const black = shades.black;

/** White. */
const white = shades.white;


// UI Special Colors
// ======================

/** Canvas (Page background). */
const canvas = white;

/** Inverse. */
const inverse = black;

/** Surface background. */
const surfaceLight = gray[50];

/** Surface background. */
const surface = gray[100];

/** Surface background. */
const surfaceStrong = gray[200];

/** Text. */
const fore = gray[700];

/** Focus. */
const focus = primary[200];

/** Link. */
const link = primary[500];

/** Link (hover). */
const linkHover = primary[600];

/** Link (visited). */
const linkVisited = primary[700];

/** Link (active). */
const linkActive = primary[800];

/* Placeholder text color. */
const placeholder = gray[400];

/** Border. */
const border = gray[200];

/** Strong border. */
const borderStrong = gray[300];

/** Strong border. */
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

    inherit,
    transparent,
    current,
    black,
    white,

    canvas,
    'canvas-light': canvas,
    'canvas-dark': gray[50],
    inverse,
    surface,
    'surface-light': surfaceLight,
    'surface-strong': surfaceStrong,
    fore,
    'fore-in-light': fore,
    'fore-in-dark': white,
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
