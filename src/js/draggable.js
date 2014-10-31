/* ========================================================================
 * ZUI: draggable.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($)
{
    'use strict';

    var Draggable = function(element, options)
    {
        this.$ = $(element);
        this.options = this.getOptions(options);

        this.init();
    };

    Draggable.DEFAULTS = {
        container: 'body',
        move: true
    };

    Draggable.prototype.getOptions = function(options)
    {
        options = $.extend(
        {}, Draggable.DEFAULTS, this.$.data(), options);
        return options;
    };

    Draggable.prototype.init = function()
    {
        this.handleMouseEvents();
    };

    Draggable.prototype.handleMouseEvents = function()
    {
        var $e = this.$,
            BEFORE = 'before',
            DRAG = 'drag',
            FINISH = 'finish',
            setting = this.options;

        $e.mousedown(function(event)
        {
            if (setting.hasOwnProperty(BEFORE) && $.isFunction(setting[BEFORE]))
            {
                var isSure = setting[BEFORE](
                {
                    event: event,
                    element: $e
                });
                if (isSure !== undefined && (!isSure)) return;
            }

            var $container = $(setting.container),
                pos = $e.offset();
            var cPos = $container.offset(),
                startPos = {
                    x: event.pageX,
                    y: event.pageY
                },
                startOffset = {
                    x: event.pageX - pos.left + cPos.left,
                    y: event.pageY - pos.top + cPos.top
                };
            var mousePos = $.extend(
            {}, startPos);
            var moved = false;

            $e.addClass('drag-ready');
            $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
            event.preventDefault();
            if (setting.stopPropagation)
            {
                event.stopPropagation();
            }

            function mouseMove(event)
            {
                moved = true;
                var mX = event.pageX,
                    mY = event.pageY;
                var dragPos = {
                    left: mX - startOffset.x,
                    top: mY - startOffset.y
                };

                $e.removeClass('drag-ready').addClass('dragging');
                if (setting.move)
                {
                    $e.css(dragPos);
                }

                if (setting.hasOwnProperty(DRAG) && $.isFunction(setting[DRAG]))
                {
                    setting[DRAG](
                    {
                        event: event,
                        element: $e,
                        startOffset: startOffset,
                        pos: dragPos,
                        offset:
                        {
                            x: mX - startPos.x,
                            y: mY - startPos.y
                        },
                        smallOffset:
                        {
                            x: mX - mousePos.x,
                            y: mY - mousePos.y
                        }
                    });
                }
                mousePos.x = mX;
                mousePos.y = mY;

                if (setting.stopPropagation)
                {
                    event.stopPropagation();
                }
            }

            function mouseUp(event)
            {
                $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
                if (!moved)
                {
                    $e.removeClass('drag-ready');
                    return;
                }
                var endPos = {
                    left: event.pageX - startOffset.x,
                    top: event.pageY - startOffset.y
                };
                $e.removeClass('drag-ready').removeClass('dragging');
                if (setting.move)
                {
                    $e.css(endPos);
                }

                if (setting.hasOwnProperty(FINISH) && $.isFunction(setting[FINISH]))
                {
                    setting[FINISH](
                    {
                        event: event,
                        element: $e,
                        pos: endPos,
                        offset:
                        {
                            x: event.pageX - startPos.x,
                            y: event.pageY - startPos.y
                        },
                        smallOffset:
                        {
                            x: event.pageX - mousePos.x,
                            y: event.pageY - mousePos.y
                        }
                    });
                }
                event.preventDefault();
                if (setting.stopPropagation)
                {
                    event.stopPropagation();
                }
            }
        });
    };

    $.fn.draggable = function(option)
    {
        return this.each(function()
        {
            var $this = $(this);
            var data = $this.data('zui.draggable');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.draggable', (data = new Draggable(this, options)));

            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.draggable.Constructor = Draggable;
}(jQuery));
