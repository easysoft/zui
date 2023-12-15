const shades = require('tailwindcss/colors');
const {reverseShade} = require('./reverse-shade.cjs');

// Semantic palettes.
// ==================================

/** Primary: Theme, Linkable, Normal. */
const primary = reverseShade(shades.blue);

/** Secondary: Subordinate, Normal. */
const secondary = reverseShade(shades.sky);

/** Success: Completed, Positive. */
const success = reverseShade(shades.green);

/** Warning: Prompt, Key Point. */
const warning = reverseShade(shades.amber);

/** Danger: Prompt, Exception, Alert. */
const danger = reverseShade(shades.red);

/** Important: Priority. */
const important = reverseShade(shades.pink);

/** Special: Exciting, Passionate. */
const special = reverseShade(shades.purple);

/** Gray: Neutral, Background, Border. */
const gray = reverseShade(shades.slate);


// Special Colors.
// ======================

// UI Special Colors.
// ======================

/** Canvas (Page Background). */
const canvas = gray[50];

/** Inverse. */
const inverse = shades.white;

/** Control Background. */
const surfaceLight = gray[100];

/** Control Background. */
const surface = gray[200];

/** Control Background. */
const surfaceStrong = gray[300];

/** Text (Foreground Color). */
const fore = gray[700];

/** Focus. */
const focus = primary[200];

/** Link (Normal). */
const link = primary[500];

/** Link (hover). */
const linkHover = primary[600];

/** Link (visited). */
const linkVisited = primary[700];

/** Link (Active). */
const linkActive = primary[800];

/* Placeholder Text Color. */
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
