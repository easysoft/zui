/* $ComponentName$ */
+function($, window, document, Math)
{
    "use strict";

    var $ComponentName$ = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);

        this.init();
    };

    $ComponentName$.DEFAULTS = {}; // default options

    $ComponentName$.prototype.getOptions = function (options)
    {
        options = $.extend({}, $ComponentName$.DEFAULTS, this.$.data(), options);
        return options;
    };

    $ComponentName$.prototype.init = function()
    {
        // ...
    }

    $.fn.$componentObject$ = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.$componentObject$');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.$componentObject$', (data = new $ComponentName$(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.$componentObject$.Constructor = $ComponentName$;

    $(function()
    {
        $('[data-toggle="$componentObject$"]').$componentObject$();
    });
}(jQuery,window,document,Math);
