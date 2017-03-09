/* ========================================================================
 * ZUI: draggable.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, document) {
    'use strict';

    var NAME     = 'zui.draggable';
    var DEFAULTS = {
        // selector: '',
        container: 'body',
        move: true
    };
    var idIncrementer = 0;

    var Draggable = function(element, options) {
        var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
    };

    Draggable.DEFAULTS = DEFAULTS;
    Draggable.NAME     = NAME;

    Draggable.prototype.init = function() {
        var that           = this,
            $root          = that.$,
            BEFORE         = 'before',
            DRAG           = 'drag',
            FINISH         = 'finish',
            eventSuffix    = '.' + NAME + '.' + that.id,
            mouseDownEvent = 'mousedown' + eventSuffix,
            mouseUpEvent   = 'mouseup' + eventSuffix,
            mouseMoveEvent = 'mousemove' + eventSuffix,
            setting        = that.options,
            selector       = setting.selector,
            handle         = setting.handle,
            $ele           = $root,
            startPos,
            cPos,
            startOffset,
            mousePos,
            moved;

        var mouseMove = function(event) {
            var mX      = event.pageX,
                mY      = event.pageY;
                moved   = true;
            var dragPos = {
                left: mX - startOffset.x,
                top: mY - startOffset.y
            };

            $ele.removeClass('drag-ready').addClass('dragging');
            if(setting.move) {
                $ele.css(dragPos);
            }

            setting[DRAG] && setting[DRAG]({
                event: event,
                element: $ele,
                startOffset: startOffset,
                pos: dragPos,
                offset: {
                    x: mX - startPos.x,
                    y: mY - startPos.y
                },
                smallOffset: {
                    x: mX - mousePos.x,
                    y: mY - mousePos.y
                }
            });
            mousePos.x = mX;
            mousePos.y = mY;

            if(setting.stopPropagation) {
                event.stopPropagation();
            }
        };

        var mouseUp = function(event) {
            $(document).off(eventSuffix);
            if(!moved) {
                $ele.removeClass('drag-ready');
                return;
            }
            var endPos = {
                left: event.pageX - startOffset.x,
                top: event.pageY - startOffset.y
            };
            $ele.removeClass('drag-ready dragging');
            if(setting.move) {
                $ele.css(endPos);
            }

            setting[FINISH] && setting[FINISH]({
                event: event,
                element: $ele,
                startOffset: startOffset,
                pos: endPos,
                offset: {
                    x: event.pageX - startPos.x,
                    y: event.pageY - startPos.y
                },
                smallOffset: {
                    x: event.pageX - mousePos.x,
                    y: event.pageY - mousePos.y
                }
            });
            event.preventDefault();
            if(setting.stopPropagation) {
                event.stopPropagation();
            }
        };

        var mouseDown = function(event) {
            var $mouseDownEle = $(this);
            if(selector) {
                $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
            }

            if(setting[BEFORE]) {
                var isSure = setting[BEFORE]({
                    event: event,
                    element: $ele
                });
                if(isSure === false) return;
            }

            var $container = $(setting.container),
                pos        = $ele.offset();
                cPos       = $container.offset();
                startPos   = {
                    x: event.pageX,
                    y: event.pageY
                };
                startOffset = {
                    x: event.pageX - pos.left + cPos.left,
                    y: event.pageY - pos.top + cPos.top
                };
                mousePos    = $.extend({}, startPos);
                moved       = false;

            $ele.addClass('drag-ready');
            event.preventDefault();

            if(setting.stopPropagation) {
                event.stopPropagation();
            }

            $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
        };

        if(handle) {
            $root.on(mouseDownEvent, handle, mouseDown);
        } else if(selector) {
            $root.on(mouseDownEvent, selector, mouseDown);
        } else {
            $root.on(mouseDownEvent, mouseDown);
        }
    };

    Draggable.prototype.destroy = function() {
        var eventSuffix = '.' + NAME + '.' + this.id;
        this.$.off(eventSuffix);
        $(document).off(eventSuffix);
        this.$.data(NAME, null);
    };

    $.fn.draggable = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Draggable(this, options)));
            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.draggable.Constructor = Draggable;
}(jQuery, document));

