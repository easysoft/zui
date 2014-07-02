/* Draggable */
+function($, window, document, Math)
{
    "use strict";

    var Draggable = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);

        this.init();
    };

    Draggable.DEFAULTS = {container: 'body'};

    Draggable.prototype.getOptions = function (options)
    {
        options = $.extend({}, Draggable.DEFAULTS, this.$.data(), options);
        return options;
    };

    Draggable.prototype.init = function()
    {
        this.handleMouseEvents();
    }

    Draggable.prototype.handleMouseEvents = function()
    {
        var $e      = this.$,
            setting = this.options;

        $e.mousedown(function(event)
        {
            if(setting.hasOwnProperty('before') && $.isFunction(setting['before']))
            {
                var isSure = setting['before']({event: event, element: $e});
                if (isSure != undefined && (!isSure)) return;
            }

            var $container = $(setting.container),
                pos = $e.offset();
            var cPos = $container.offset(),
                startOffset = {x: event.pageX - pos.left + cPos.left, y: event.pageY - pos.top + cPos.top};

            $e.addClass('drag-ready');
            $(document).bind('mousemove',mouseMove).bind('mouseup',mouseUp);
            event.preventDefault();

            function mouseMove(event)
            {
                var mX = event.pageX,
                    mY = event.pageY;
                var dragPos = {left: mX-startOffset.x, top: mY-startOffset.y};
                    
                $e.removeClass('drag-ready').addClass('dragging').css(dragPos);
                
                if(setting.hasOwnProperty('drag') && $.isFunction(setting['drag']))
                {
                    setting['drag']({event: event, element: $e, startOffset: startOffset, pos: dragPos});
                }
            }

            function mouseUp(event)
            {
                var endPos = {left: event.pageX - startOffset.x, top: event.pageY - startOffset.y};
                $e.css(endPos).removeClass('dragging');

                $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
                if(setting.hasOwnProperty('finish') && $.isFunction(setting['finish']))
                {
                    setting['finish']({event: event, target: target, element: $e, pos: endPos);
                }
                event.preventDefault();
            }
        });
    }

    $.fn.draggable = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.draggable');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.draggable', (data = new Draggable(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.draggable.Constructor = Draggable;
}(jQuery,window,document,Math);
