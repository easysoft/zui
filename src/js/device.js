/* ========================================================================
 * ZUI: device.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function(window, $) {
    'use strict';
    var desktopLg = 1200,
        desktop = 992,
        tablet = 768;

    var $window = $(window);

    var resetCssClass = function() {
        var width = $window.width();
        var classNames = '';

        if (width >= desktopLg) {
            classNames += ' screen-desktop-wide';
        } else if (width >= desktop && width < desktopLg) {
            classNames += ' screen-desktop';
        } else if (width >= tablet && width < desktop) {
            classNames += ' screen-tablet';
        } else {
            classNames += ' screen-phone';
        }
        if (width < desktop) {
            classNames += ' device-mobile';
        } else {
            classNames += ' device-desktop';
        }
        if ('ontouchstart' in document.documentElement) {
            classNames += ' is-touchable';
        }

        var userAgent = navigator.userAgent;
        if (userAgent.match(/(iPad|iPhone|iPod)/i)) {
            classNames += ' os-ios';
        } else if (userAgent.match(/android/i)) {
            classNames += ' os-android';
        } else if (userAgent.match(/Win/i)) {
            classNames += ' os-windows';
        } else if (userAgent.match(/Mac/i)) {
            classNames += ' os-mac';
        } else if (userAgent.match(/Linux/i)) {
            classNames += ' os-linux';
        } else if (userAgent.match(/X11/i)) {
            classNames += ' os-unix';
        }
        $('html').addClass(classNames);
    };

    $window.resize(resetCssClass);
    resetCssClass();
}(window, jQuery));

