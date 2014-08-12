/* $ComponentName$ */
+function($, window, document, Math)
{
    "use strict";
    var name = 'zui.$componentObject$';

    var $ComponentName$ = function(element, options)
    {
        this.name      = name;
        this.$         = $(element);

        this.getOptions(options);
        this.init();
    };

    $ComponentName$.DEFAULTS = {}; // default options

    $ComponentName$.prototype.getOptions = function (options)
    {
        this.options = $.extend({}, $ComponentName$.DEFAULTS, this.$.data(), options);
    };

    $ComponentName$.prototype.init = function()
    {
        // ...
    };

    $ComponentName$.prototype.callEvent = function(name, params)
    {
        var result = this.$.callEvent(name + '.' + this.name, params, this);
        return !(result.result != undefined && (!result.result));
    };

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

    $(function()
    {
        $('[data-toggle="$componentObject$"]').$componentObject$();
    });
}(jQuery,window,document,Math);
