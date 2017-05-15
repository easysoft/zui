/* ========================================================================
 * ZUI: droppable.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, document, Math) {
    'use strict';

    var NAME     = 'zui.droppable',
        DEFAULTS = {
        // container: '',
        // selector: '',
        // handle: '',
        // flex: false,
        // nested: false,
        target: '.droppable-target',
        deviation: 5,
        sensorOffsetX: 0,
        sensorOffsetY: 0
        // mouseButton: -1 // 0, 1, 2, -1, all, left,  right, middle
    };
    var idIncrementer = 0;

    var Droppable = function(element, options) {
        var that     = this;
        that.id      = idIncrementer++;
        that.$       = $(element);
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
    };

    Droppable.DEFAULTS = DEFAULTS;
    Droppable.NAME     = NAME;

    Droppable.prototype.trigger = function(name, params) {
        return $.zui.callEvent(this.options[name], params, this);
    };

    Droppable.prototype.init = function() {
        var that           = this,
            $root          = that.$,
            setting        = that.options,
            deviation      = setting.deviation,
            eventSuffix    = '.' + NAME + '.' + that.id,
            mouseDownEvent = 'mousedown' + eventSuffix,
            mouseUpEvent   = 'mouseup' + eventSuffix,
            mouseMoveEvent = 'mousemove' + eventSuffix,
            selector       = setting.selector,
            handle         = setting.handle,
            flex           = setting.flex,
            container      = setting.container,
            $ele           = $root,
            isMouseDown    = false,
            $container     = container ? $(setting.container).first() : (selector ? $root : $('body')),
            $targets,
            $target,
            $shadow,
            isIn,
            isSelf,
            oldCssPosition,
            startOffset,
            startMouseOffset,
            containerOffset,
            clickOffset,
            mouseOffset,
            lastMouseOffset,
            mouseDownBackEventCall;

        var mouseMove = function(event) {
            if(!isMouseDown) return;

            mouseOffset = {left: event.pageX, top: event.pageY};

            // ignore small move
            if(Math.abs(mouseOffset.left - startMouseOffset.left) < deviation && Math.abs(mouseOffset.top - startMouseOffset.top) < deviation) return;

            if($shadow === null) // create shadow
            {
                var cssPosition = $container.css('position');
                if(cssPosition != 'absolute' && cssPosition != 'relative' && cssPosition != 'fixed') {
                    oldCssPosition = cssPosition;
                    $container.css('position', 'relative');
                }

                $shadow = $ele.clone().removeClass('drag-from').addClass('drag-shadow').css({
                    position:   'absolute',
                    width:      $ele.outerWidth(),
                    transition: 'none'
                }).appendTo($container);
                $ele.addClass('dragging');

                that.trigger('start', {
                    event:   event,
                    element: $ele
                });
            }

            var offset = {
                left: mouseOffset.left - clickOffset.left,
                top:  mouseOffset.top - clickOffset.top
            };
            var position = {
                left: offset.left - containerOffset.left,
                top:  offset.top - containerOffset.top
            };
            $shadow.css(position);
            $.extend(lastMouseOffset, mouseOffset);

            var isNew = false;
                isIn = false;

            if(!flex) {
                $targets.removeClass('drop-to');
            }

            var $newTarget = null;
            $targets.each(function() {
                var t    = $(this),
                    tPos = t.offset(),
                    tW   = t.outerWidth(),
                    tH   = t.outerHeight(),
                    tX   = tPos.left + setting.sensorOffsetX,
                    tY   = tPos.top + setting.sensorOffsetY;

                if(mouseOffset.left > tX && mouseOffset.top > tY && mouseOffset.left < (tX + tW) && mouseOffset.top < (tY + tH)) {
                    if($newTarget) $newTarget.removeClass('drop-to');
                    $newTarget = t;
                    if(!setting.nested) return false;
                }
            });

            if($newTarget) {
                isIn = true;
                var id = $newTarget.data('id');
                if($ele.data('id') != id) isSelf = false;
                if($target === null || ($target.data('id') !== id && (!isSelf))) isNew = true;
                $target = $newTarget;
                if(flex) {
                    $targets.removeClass('drop-to');
                }
                $target.addClass('drop-to');
            }

            if(!flex) {
                $ele.toggleClass('drop-in', isIn);
                $shadow.toggleClass('drop-in', isIn);
            } else if($target !== null && $target.length) {
                isIn = true;
            }

            that.trigger('drag', {
                event: event,
                isIn: isIn,
                target: $target,
                element: $ele,
                isNew: isNew,
                selfTarget: isSelf,
                clickOffset: clickOffset,
                offset: offset,
                position: {
                    left: offset.left - containerOffset.left,
                    top: offset.top - containerOffset.top
                },
                mouseOffset: mouseOffset
            });
            event.preventDefault();
        };

        var mouseUp = function(event) {
            $(document).off(eventSuffix);
            clearTimeout(mouseDownBackEventCall);
            if(!isMouseDown) return;

            isMouseDown = false;

            if(oldCssPosition) {
                $container.css('position', oldCssPosition);
            }

            if($shadow === null) {
                $ele.removeClass('drag-from');
                that.trigger('always', {
                    event: event,
                    cancel: true
                });
                return;
            }

            if(!isIn) $target = null;
            var isSure = true;
            mouseOffset = event ? {
                left: event.pageX,
                top: event.pageY
            } : lastMouseOffset;
            var offset = {
                left: mouseOffset.left - clickOffset.left,
                top: mouseOffset.top - clickOffset.top
            };
            var moveOffset = {
                left: mouseOffset.left - lastMouseOffset.left,
                top: mouseOffset.top - lastMouseOffset.top
            };
            lastMouseOffset.left = mouseOffset.left;
            lastMouseOffset.top = mouseOffset.top;
            var eventOptions = {
                event: event,
                isIn: isIn,
                target: $target,
                element: $ele,
                isNew: (!isSelf) && $target !== null,
                selfTarget: isSelf,
                offset: offset,
                mouseOffset: mouseOffset,
                position: {
                    left: offset.left - containerOffset.left,
                    top: offset.top - containerOffset.top
                },
                lastMouseOffset: lastMouseOffset,
                moveOffset: moveOffset
            };

            isSure = that.trigger('beforeDrop', eventOptions);

            if(isSure && isIn) {
                that.trigger('drop', eventOptions);
            }

            $targets.removeClass('drop-to');
            $ele.removeClass('dragging').removeClass('drag-from');
            $shadow.remove();
            $shadow = null;

            that.trigger('finish', eventOptions);
            that.trigger('always', eventOptions);

            if(event) event.preventDefault();
        };

        var mouseDown = function(event) {
            var mouseButton = $.zui.getMouseButtonCode(setting.mouseButton);
            if(mouseButton > -1 && event.button !== mouseButton) {
                return;
            }
            
            var $mouseDownEle = $(this);
            if(selector) {
                $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
            }

            if($ele.hasClass('drag-shadow')) {
                return;
            }

            if(setting['before']) {
                if(setting['before']({
                    event: event,
                    element: $ele
                }) === false) return;
            }

            isMouseDown = true;
            $targets         = $.isFunction(setting.target) ? setting.target($root) : $container.find(setting.target),
            $target          = null,
            $shadow          = null,
            isIn             = false,
            isSelf           = true,
            oldCssPosition   = null,
            startOffset      = $ele.offset(),
            containerOffset  = $container.offset();
            startMouseOffset = {left: event.pageX, top: event.pageY};
            lastMouseOffset  = $.extend({}, startMouseOffset);
            clickOffset      = {
                left: startMouseOffset.left - startOffset.left,
                top: startMouseOffset.top - startOffset.top
            };

            $ele.addClass('drag-from');
            $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
            mouseDownBackEventCall = setTimeout(function() {
                $(document).on(mouseDownEvent, mouseUp);
            }, 10);
            event.preventDefault();
        };

        if(handle) {
            $root.on(mouseDownEvent, handle, mouseDown);
        } else if(selector) {
            $root.on(mouseDownEvent, selector, mouseDown);
        } else {
            $root.on(mouseDownEvent, mouseDown);
        }
    };

    Droppable.prototype.destroy = function() {
        var eventSuffix = '.' + NAME + '.' + this.id;
        this.$.off(eventSuffix);
        $(document).off(eventSuffix);
        this.$.data(NAME, null);
    };

    Droppable.prototype.reset = function() {
        this.destroy();
        this.init();
    };

    $.fn.droppable = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Droppable(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.droppable.Constructor = Droppable;
}(jQuery, document, Math));

