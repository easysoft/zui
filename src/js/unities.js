/* $ComponentName$ */
+function($, window, document, Math)
{
    "use strict";

    $.extend(
    {
        uuid: function()
        {
            var d = (new Date).getTime();
            while(d < 10000000000000000)
            {
               d *= 10;
            }
            return  d + Math.floor(Math.random() * 9999);
        },

        getPropertyCount: function(obj)
        {
           if(typeof(obj) != 'object' || obj == null) return 0;
           return Object.getOwnPropertyNames(obj).length;
        },

        callEvent: function(func, event, proxy)
        {
            if($.isFunction(func))
            {
                if(typeof proxy != 'undefined')
                {
                    func = $.proxy(func, proxy);
                }
                event.result = func(event);
                return !(event.result != undefined && (!event.result));
            }
            return 1;
        }
    });

    $.fn.callEvent = function(name, event, modal)
    {
        var $this = $(this);
        var dotIndex = name.indexOf('.zui.');
        var shortName = name;
        if(dotIndex < 0 && modal && modal.name)
        {
            name += '.' + modal.name;
        }
        else
        {
            shortName = name.substring(0, dotIndex);
        }
        var e     = $.Event(name, event);

        var result =$this.trigger(e);

        if((typeof modal === 'undefined') && dotIndex > 0)
        {
            modal = $this.data(name.substring(dotIndex + 1));
        }

        if(modal && modal.options)
        {
            var func = modal.options[shortName];
            if($.isFunction(func))
            {
                $.callEvent(modal.options[shortName], e, modal);
            }
        }
        return e;
    };
}(jQuery,window,document,Math);
