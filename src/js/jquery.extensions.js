/* ========================================================================
 * ZUI: jquery.extensions.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


+ function($, window, Math)
{
    "use strict";

    $.extend(
    {
        uuid: function()
        {
            var d = (new Date).getTime();
            while (d < 10000000000000000)
            {
                d *= 10;
            }
            return d + Math.floor(Math.random() * 9999);
        },

        getPropertyCount: function(obj)
        {
            if (typeof(obj) != 'object' || obj == null) return 0;
            return Object.getOwnPropertyNames(obj).length;
        },

        callEvent: function(func, event, proxy)
        {
            if ($.isFunction(func))
            {
                if (typeof proxy != 'undefined')
                {
                    func = $.proxy(func, proxy);
                }
                event.result = func(event);
                return !(event.result != undefined && (!event.result));
            }
            return 1;
        },

        clientLang: function()
        {
            var lang;
            if (typeof(window.config) != 'undefined' && window.config.clientLang)
            {
                lang = window.config.clientLang;
            }
            else
            {
                var hl = $('html').attr('lang');
                lang = hl ? hl : (navigator.userLanguage || navigator.userLanguage || 'zh_cn');
            }
            return lang.replace('-', '_').toLowerCase();
        }
    });

    $.fn.callEvent = function(name, event, model)
    {
        var $this = $(this);
        var dotIndex = name.indexOf('.zui.');
        var shortName = name;
        if (dotIndex < 0 && model && model.name)
        {
            name += '.' + model.name;
        }
        else
        {
            shortName = name.substring(0, dotIndex);
        }
        var e = $.Event(name, event);

        var result = $this.trigger(e);

        if ((typeof model === 'undefined') && dotIndex > 0)
        {
            model = $this.data(name.substring(dotIndex + 1));
        }

        if (model && model.options)
        {
            var func = model.options[shortName];
            if ($.isFunction(func))
            {
                $.callEvent(model.options[shortName], e, model);
            }
        }
        return e;
    };
}(jQuery, window, Math);
