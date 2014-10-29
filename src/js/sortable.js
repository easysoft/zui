/* ========================================================================
 * ZUI: sortable.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


+function($, window, document, Math)
{
    "use strict";

    var Sortable = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);

        this.init();
    };

    Sortable.DEFAULTS = {list: 'li, div', dragCssClass: 'invisible'}; // default options

    Sortable.prototype.getOptions = function (options)
    {
        options = $.extend({}, Sortable.DEFAULTS, this.$.data(), options);
        return options;
    };

    Sortable.prototype.init = function()
    {
        this.bindEventToList(this.$.children(this.options.selector));
    };

    Sortable.prototype.reset = function()
    {
        var that = this, order = 0;
        var list = this.$.children(this.options.selector);
        list.each(function()
        {
            var $this = $(this);
            if($this.data('zui.droppable'))
            {
                $this.data('zui.droppable').options.target = list;
                $this.droppable('reset');
            }
            else
            {
                that.bindEventToList($this);
            }
            $(this).attr('data-order', ++order);
        });
    };

    Sortable.prototype.bindEventToList = function($list)
    {
        var self = this.$,
            options = this.options;

        markOrders($list);
        $list.droppable(
        {
            trigger: options.trigger,
            target: self.children(options.selector),
            container: self,
            flex: true,
            start: function(e)
            {
                if(options.dragCssClass) e.element.addClass(options.dragCssClass);
            },
            drag: function(e)
            {
                if(e.isIn)
                {
                    var $ele = e.element, $target = e.target;
                    var eleOrder = $ele.attr('data-order'), targetOrder = $target.attr('data-order');
                    if(eleOrder == targetOrder) return;
                    else if(eleOrder > targetOrder)
                    {
                        $target.before($ele);
                    }
                    else
                    {
                        $target.after($ele);
                    }
                    var list = self.children(options.selector);
                    markOrders(list);
                    $.callEvent(options['order'], {list: list, element: $ele});
                }
            },
            finish: function(e)
            {
                if(options.dragCssClass) e.element.removeClass(options.dragCssClass);
                $.callEvent(options['finish'], {list: self.children(options.selector), element: e.element});
            }
        });

        function markOrders(list)
        {
            var order = 0;
            list.each(function()
            {
                $(this).attr('data-order', ++order);
            });
        }
    };

    $.fn.sortable = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.sortable');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.sortable', (data = new Sortable(this, options)));
            else if(typeof option == 'object') data.reset();

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.sortable.Constructor = Sortable;
}(jQuery,window,document,Math);
