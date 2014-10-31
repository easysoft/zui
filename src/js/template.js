/* ========================================================================
 * ZUI: $componentName$.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($)
{
    'use strict';

    var name = 'zui.$componentObject$'; // modal name

    // The $componentName$ modal class
    var $ComponentName$ = function(element, options)
    {
        this.name      = name;
        this.$         = $(element);

        this.getOptions(options);
        this.init();

        // Initialize here
    };

     // default options
    $ComponentName$.DEFAULTS = {};

    // Get and init options
    $ComponentName$.prototype.getOptions = function (options)
    {
        this.options = $.extend({}, $ComponentName$.DEFAULTS, this.$.data(), options);
    };

    // Call event helper
    $ComponentName$.prototype.callEvent = function(name, params)
    {
        var result = this.$.callEvent(name + '.' + this.name, params, this);
        return !(result.result !== undefined && (!result.result));
    };

    // Extense jquery element
    $.fn.$componentObject$ = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data(name);
            var options = typeof option == 'object' && option;

            if (!data) $this.data(name, (data = new $ComponentName$(this, options)));

            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.$componentObject$.Constructor = $ComponentName$;

    // Auto call $componentObject$ after document load complete
    $(function()
    {
        $('[data-toggle="$componentObject$"]').$componentObject$();
    });
}(jQuery));
