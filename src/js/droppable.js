/* Droppable */
+function($, window, document, Math)
{
    "use strict";

    var Droppable = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);

        this.init();
    };

    Droppable.DEFAULTS = {container: 'body'};

    Droppable.prototype.getOptions = function (options)
    {
        options = $.extend({}, Droppable.DEFAULTS, this.$.data(), options);
        return options;
    };

    Droppable.prototype.init = function()
    {
        this.handleMouseEvents();
    }

    Droppable.prototype.handleMouseEvents = function()
    {
        var $e      = this.$,
            setting = this.options;


        $e.mousedown(function(event)
        {
            if(setting.hasOwnProperty('start') && $.isFunction(setting['start']))
            {
                var isSure = setting['start'](event);
                if (isSure != undefined && (!isSure)) return;
            }

            var $target = $(setting.target),
                $container = $(setting.container),
                pos = $e.offset(),
                isIn = false;
            var cPos = $container.offset(),
                startOffset = {x: event.pageX - pos.left + cPos.left, y: event.pageY - pos.top + cPos.top};

            $e.addClass('drag-start');
            $(document).bind('mousemove',mouseMove).bind('mouseup',mouseUp);

            var shadow = $e.clone().addClass('drag-shadow').css(
                {
                    position: 'absolute',
                    left: pos.left - cPos.left,
                    top: pos.left - cPos.left,
                    transition: 'none'
                }).appendTo($container);


            event.preventDefault();

            function mouseMove(event)
            {
                var tPos = $target.offset();
                var mX = event.pageX,
                    mY = event.pageY,
                    tX = tPos.left,
                    tY = tPos.top,
                    tW = $target.width(),
                    tH = $target.height();

                $e.removeClass('drag-start').addClass('dragging');
                shadow.addClass('dragging').css(
                {
                    left : event.pageX-startOffset.x,
                    top  : event.pageY-startOffset.y
                });

                isIn = (mX > tX && mY > tY && mX < (tX + tW) && mY < (tY + tH));
                $target.toggleClass('drop-in', isIn);
                shadow.toggleClass('drop-in', isIn);
                $e.toggleClass('drop-in', isIn);

                if(setting.hasOwnProperty('drag') && $.isFunction(setting['drag']))
                {
                    setting['drag'](event, isIn);
                }
            }

            function mouseUp(event)
            {

                if(setting.hasOwnProperty('beforeDrop') && $.isFunction(setting['beforeDrop']))
                {
                    setting['beforeDrop'](event, isIn);
                }

                if(isIn && setting.hasOwnProperty('drop') && $.isFunction(setting['drop']))
                {
                    setting['drop'](event);
                }

                $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
                $target.removeClass('drop-in');
                $e.removeClass('dragging');
                shadow.remove();

                if(setting.hasOwnProperty('afterDrop') && $.isFunction(setting['afterDrop']))
                {
                    setting['afterDrop'](event, isIn);
                }

                event.preventDefault();
            }
        });

    }

    $.fn.droppable = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.droppable');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.droppable', (data = new Droppable(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.droppable.Constructor = Droppable;
}(jQuery,window,document,Math);
