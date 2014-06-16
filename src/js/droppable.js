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

    Droppable.DEFAULTS = {container: 'body', flex: false};

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
            if(setting.hasOwnProperty('before') && $.isFunction(setting['before']))
            {
                var isSure = setting['before']({event: event, element: $e});
                if (isSure != undefined && (!isSure)) return;
            }

            var $targets = $(setting.target),
                target = null,
                shadow = null,
                $container = $(setting.container),
                pos = $e.offset(),
                isIn = false, isSelf = true;
            var cPos = $container.offset(),
                startOffset = {x: event.pageX - pos.left + cPos.left, y: event.pageY - pos.top + cPos.top};

            $e.addClass('drag-from');
            $(document).bind('mousemove',mouseMove).bind('mouseup',mouseUp);
            event.preventDefault();

            function mouseMove(event)
            {
                if(shadow == null)
                {
                    shadow = $e.clone().removeClass('drag-from').addClass('drag-shadow').css(
                    {
                        position: 'absolute',
                        left: pos.left - cPos.left,
                        top: pos.left - cPos.left,
                        width: $e.outerWidth(),
                        transition: 'none'
                    }).appendTo($container);
                    $e.addClass('dragging');

                    if(setting.hasOwnProperty('start') && $.isFunction(setting['start']))
                    {
                        setting['start']({event: event, element: $e});
                    }
                }

                var mX = event.pageX,
                    mY = event.pageY;
                    

                shadow.css(
                {
                    left : event.pageX-startOffset.x,
                    top  : event.pageY-startOffset.y
                });

                isIn = false;
                var idx = -1, isNew = false;
                if(!setting.flex)
                {
                    $targets.removeClass('drop-to');
                }
                $targets.each(function(index, el)
                {
                    var t = $(this);
                    var tPos = t.offset();
                    var tW = t.width(),
                        tH = t.height(),
                        tX = tPos.left,
                        tY = tPos.top;

                    if(mX > tX && mY > tY && mX < (tX + tW) && mY < (tY + tH))
                    {
                        isIn = true;
                        if($e.data('id') != t.data('id')) isSelf = false;
                        if(target == null || (target.data('id') != t.data('id') && (!isSelf))) isNew = true;
                        target = t;
                        idx = index;
                        if(setting.flex)
                        {
                            $targets.removeClass('drop-to');
                        }
                        t.addClass('drop-to');
                        return false;
                    }
                });

                if(!setting.flex)
                {
                    $e.toggleClass('drop-in', isIn);
                    shadow.toggleClass('drop-in', isIn);
                }
                else if(target != null && target.length)
                {
                    isIn = true;
                }
                
                if(setting.hasOwnProperty('drag') && $.isFunction(setting['drag']))
                {
                    setting['drag']({event: event, isIn: isIn, target: target, element: $e, isNew: isNew, selfTarget: isSelf});
                }
            }

            function mouseUp(event)
            {
                if(shadow == null)
                {
                    $e.removeClass('drag-from');
                    $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
                    return;
                }

                if(!isIn) target = null;
                var isSure = true;
                if(setting.hasOwnProperty('beforeDrop') && $.isFunction(setting['beforeDrop']))
                {
                    var isSure = setting['beforeDrop']({event: event, isIn: isIn, target: target, element: $e, isNew: isNew, selfTarget: isSelf});
                    if (isSure != undefined && (!isSure)) isSure = false;
                    else isSure = true;
                }

                if(isSure && isIn && setting.hasOwnProperty('drop') && $.isFunction(setting['drop']))
                {
                    setting['drop']({event: event, target: target, element: $e, isNew: (!isSelf) && target != null});
                }

                $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
                $targets.removeClass('drop-to');
                $e.removeClass('dragging').removeClass('drag-from');
                shadow.remove();

                if(setting.hasOwnProperty('finish') && $.isFunction(setting['finish']))
                {
                    setting['finish']({event: event, target: target, element: $e, isNew: (!isSelf) && target != null});
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
