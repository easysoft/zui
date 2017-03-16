/* ========================================================================
 * ZUI: typography.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    $.fn.fixOlPd = function(pd) {
        pd = pd || 10;
        return this.each(function() {
            var $ol = $(this);
            $ol.css('paddingLeft', Math.ceil(Math.log10($ol.children().length)) * pd + 10);
        });
    };

    $(function() {
        $('.ol-pd-fix,.article ol').fixOlPd();
    });
}(jQuery));

