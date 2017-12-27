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
        $('html').toggleClass('screen-desktop', width >= desktop && width < desktopLg)
            .toggleClass('screen-desktop-wide', width >= desktopLg)
            .toggleClass('screen-tablet', width >= tablet && width < desktop)
            .toggleClass('screen-phone', width < tablet)
            .toggleClass('device-mobile', width < desktop)
            .toggleClass('device-desktop', width >= desktop);
    };

    var classNames = '';
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
    if ('ontouchstart' in document.documentElement) {
        classNames += ' is-touchable';
    }
    $('html').addClass(classNames);

    $window.resize(resetCssClass);
    resetCssClass();
}(window, jQuery));

