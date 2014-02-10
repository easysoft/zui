/* Dashboard */
+function($, window, document, Math)
{
    "use strict";

    var Dashboard = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);
        this.draggable = this.$.hasClass('dashboard-draggable') || this.options.draggable;

        this.init();
    };

    Dashboard.DEFAULTS = {height: 360};

    Dashboard.prototype.getOptions = function (options)
    {
        options = $.extend({}, Dashboard.DEFAULTS, this.$.data(), options);
        return options;
    };

    Dashboard.prototype.handleDraggable = function()
    {
        var dashboard    = this.$;
        var afterOrdered = this.options.afterOrdered;

        this.$.addClass('dashboard-draggable');

        this.$.find('.panel-actions').mousedown(function(event)
        {
            event.preventDefault();
            event.stopPropagation();
            console.log('h');
        });

        this.$.find('.panel-heading').mousedown(function(event)
        {
            var panel     = $(this).closest('.panel');
            var dPanel    = panel.clone().addClass('panel-dragging-shadow');
            var pos       = panel.offset();
            var dPos      = dashboard.offset();

            dashboard.addClass('dashboard-dragging');
            panel.addClass('panel-dragging').parent().addClass('dragging-col');

            dPanel.css(
            {
                left    : pos.left - dPos.left,
                top     : pos.top - dPos.top,
                width   : panel.width(),
                height  : panel.height()
            }).appendTo(dashboard).data('mouseOffset', {x: event.pageX - pos.left + dPos.left, y: event.pageY - pos.top + dPos.top});

            $(document).bind('mousemove',mouseMove).bind('mouseup',mouseUp);
            event.preventDefault();

            function mouseMove(event)
            {
                var offset = dPanel.data('mouseOffset');
                dPanel.css(
                {
                    left : event.pageX-offset.x,
                    top  : event.pageY-offset.y
                });

                dashboard.find('.dragging-in').removeClass('dragging-in');
                dashboard.find('.panel').each(function()
                {
                    var p = $(this);
                    var pP = p.offset(), pW = p.width(), pH = p.height();
                    var pX = pP.left - pW / 2, pY = pP.top;
                    var mX = event.pageX, mY = event.pageY;

                    if(mX > pX && mY > pY && mX < (pX + pW) && mY < (pY + pH))
                    {
                        p.parent().addClass('dragging-in');
                        return false;
                    }
                });
                event.preventDefault();
            }

            function mouseUp(event)
            {
                var draggingIn = dashboard.find('.dragging-in');
                if(panel.data('order') != draggingIn.data('order'))
                {
                    panel.parent().insertBefore(draggingIn);
                    var newOrder = 1;
                    var newOrders = {};
                    dashboard.find('.panel').each(function()
                    {
                        $(this).data('order', newOrder++);
                        newOrders[$(this).attr('id')] = $(this).data('order');
                    });

                    if(afterOrdered && $.isFunction(afterOrdered))
                    {
                        afterOrdered(newOrders);
                    }
                }

                dPanel.remove();
                dashboard.find('.dragging-col').removeClass('dragging-col');
                dashboard.find('.panel-dragging').removeClass('panel-dragging');
                draggingIn.removeClass('dragging-in');
                dashboard.removeClass('dashboard-dragging');
                $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
                event.preventDefault();
            }
        });
    };

    Dashboard.prototype.handlePanelPadding = function()
    {
        this.$.find('.panel-body > table, .panel-body > .list-group').closest('.panel-body').addClass('no-padding');
    };

    Dashboard.prototype.handlePanelHeight = function()
    {
        var dHeight = this.options.height;

        this.$.find('.row').each(function()
        {
            var row = $(this);
            var panels = row.find('.panel');
            var height = row.data('height') || dHeight;

            if(typeof height != 'number')
            {
                height = 0;
                panels.each(function()
                {
                    height = Math.max(height, $(this).innerHeight());
                });
            }

            panels.each(function()
            {
                var $this = $(this);
                $this.find('.panel-body').css('height', height - $this.find('.panel-heading').outerHeight() - 2);
            });
        });
    };

    Dashboard.prototype.init = function()
    {
        this.handlePanelHeight();
        this.handlePanelPadding();

        if(this.draggable) this.handleDraggable();

        var orderSeed = 0;
        this.$.find('.panel').each(function()
        {
            var $this = $(this);
            $this.data('order', ++orderSeed);
            if(!$this.attr('id'))
            {
              $this.attr('id', 'panel' + orderSeed);
            }
        });
    }

    $.fn.dashboard = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.dashboard');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.dashboard', (data = new Dashboard(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.dashboard.Constructor = Dashboard;
}(jQuery,window,document,Math);
