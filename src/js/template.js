/* ========================================================================
 * ZUI: $componentName$.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2017-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var NAME = 'zui.$componentObject$'; // model name

    // The $componentName$ model class
    var $ComponentName$ = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        options = that.options = $.extend({}, $ComponentName$.DEFAULTS, this.$.data(), options);

        // Initialize here
    };

    // default options
    $ComponentName$.DEFAULTS = {};

    // Extense jquery element
    $.fn.$componentObject$ = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new $ComponentName$(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $ComponentName$.NAME = NAME;

    $.fn.$componentObject$.Constructor = $ComponentName$;

    // Auto call $componentObject$ after document load complete
    $(function() {
        $('[data-toggle="$componentObject$"]').$componentObject$();
    });
}(jQuery));

