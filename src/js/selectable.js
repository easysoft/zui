/* ========================================================================
 * ZUI: selectable.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var name = 'zui.selectable'; // module name

    // The selectable modal class
    var Selectable = function(element, options) {
        this.name = name;
        this.$ = $(element);
        this.id = $.zui.uuid();
        this.selectOrder = 1;
        this.selections = {};

        this.getOptions(options);
        this._init();
    };

    var isPointInner = function(x, y, a) {
        return x >= a.left && x <= (a.left + a.width) && y >= a.top && y <= (a.top + a.height);
    };

    var isIntersectArea = function(a, b) {
        var x1 = Math.max(a.left, b.left),
            y1 = Math.max(a.top, b.top),
            x2 = Math.min(a.left + a.width, b.left + b.width),
            y2 = Math.min(a.top + a.height, b.top + b.height);

        return isPointInner(x1, y1, a) && isPointInner(x2, y2, a) && isPointInner(x1, y1, b) && isPointInner(x2, y2, b);
    };

    // default options
    Selectable.DEFAULTS = {
        selector: 'li, tr',
        trigger: '',
        selectClass: 'active',
        rangeStyle: {
            border: '1px solid ' + ($.zui.colorset ? $.zui.colorset.primary : '#3280fc'),
            backgroundColor: $.zui.colorset ? (new $.zui.Color($.zui.colorset.primary).fade(20).toCssStr()) : 'rgba(50, 128, 252, 0.2)'
        },
        // start: function() {},
        // finish: function() {}
    };

    // Get and init options
    Selectable.prototype.getOptions = function(options) {
        this.options = $.extend({}, Selectable.DEFAULTS, this.$.data(), options);
    };

    Selectable.prototype.select = function(elementOrid) {
        var $element, id, selector = this.options.selector, that = this;
        if(elementOrid === true) {
            this.$.find(selector).each(function() {
                that.select(this);
            });
            return;
        } else if(typeof elementOrid === 'object') {
            $element = $(elementOrid).closest(selector);
            id = $element.data('id');
        } else {
            id = elementOrid;
            $element = that.$.find('.slectable-item[data-id="' + id + '"]');
        }
        if($element && $element.length) {
            if(!id) {
                id = $.zui.uuid();
                $element.attr('data-id', id);
            }
            $element.addClass(that.options.selectClass);
            if(!that.selections[id]) {
                that.selections[id] = that.selectOrder++;
                that.callEvent('select', {id: id, selections: that.selections, $target: $element}, that);
            }
        }
    };

    Selectable.prototype.unselect = function(elementOrid) {
        var $element, id, selector = this.options.selector, that = this;
        if(elementOrid === true) {
            this.$.find(selector).each(function() {
                that.unselect(this);
            });
            return;
        } else if(typeof elementOrid === 'object') {
            $element = $(elementOrid).closest(selector);
            id = $element.data('id');
        } else {
            id = elementOrid;
            $element = that.$.find('.slectable-item[data-id="' + id + '"]');
        }
        if($element && $element.length) {
            if(!id) {
                id = $.zui.uuid();
                $element.attr('data-id', id);
            }
            $element.removeClass(that.options.selectClass);
            if(that.selections[id]) {
                that.selections[id] = false;
                that.callEvent('unselect', {id: id, selections: that.selections, $target: $element}, that);
            }
        }
    };

    Selectable.prototype._init = function() {
        var options = this.options, that = this;
        var eventNamespace = '.' + this.name + '.' + this.id;
        var startX, startY, $range, range, x, y, checkRangeCall;
        var checkRange = function() {
            if(!range) return;
            
            that.$children.each(function() {
                var $item = $(this);
                var offset = $item.offset();
                offset.width = $item.outerWidth();
                offset.height = $item.outerHeight();
                if(isIntersectArea(range, offset)) {
                    that.select($item);
                } else if(!that.multiKey) {
                    that.unselect($item);
                }
            });
        };
        var mousemove = function(e) {
            x = e.pageX;
            y = e.pageY;
            range = {
                width: Math.abs(x - startX),
                height: Math.abs(y - startY),
                left: x > startX ? startX : x,
                top: y > startY ? startY : y
            };
            if(!$range) {
                $range = $('.selectable-range[data-id="' + that.id + '"]');
                if(!$range.length) {
                    $range = $('<div class="selectable-range" data-id="' + that.id + '"></div>')
                        .css($.extend({
                            zIndex: 1060,
                            position: 'absolute',
                            top: startX,
                            left: startY,
                            pointerEvents: 'none',
                        }, that.options.rangeStyle))
                        .appendTo($('body'));
                }
            }
            $range.css(range);
            clearTimeout(checkRangeCall);
            checkRangeCall = setTimeout(checkRange, 10);
        };
        var mouseup = function(e) {
            if(range) {
                clearTimeout(checkRangeCall);
                checkRange();
                range = null;
            }
            if($range) $range.remove();
            that.callEvent('finish', {selections: that.selections});
            $(document).off(eventNamespace);
            event.preventDefault();
        };
        var mousedown = function(e) {
            var $children = that.$children = that.$.find(options.selector);
            $children.addClass('slectable-item');

            if(!that.multiKey) {
                $children.removeClass(options.selectClass);
                that.selections = {};
            }

            if(that.callEvent('start') === false) {
                return;
            }

            that.select(e.target);

            startX = e.pageX;
            startY = e.pageY;

            $range = null;

            $(document).on('mousemove' + eventNamespace, mousemove).on('mouseup' + eventNamespace, mouseup);
            event.preventDefault();
        };

        var $container = options.container && options.container !== 'default' ? $(options.container) : this.$;
        if(options.trigger) {
            $container.on('mousedown' + eventNamespace, options.trigger, mousedown);
        } else {
            $container.on('mousedown' + eventNamespace, mousedown);
        }

        $(document).on('keydown', function(e) {
            var code = e.keyCode;
            if(code === 17 || code == 91) that.multiKey = code;
        }).on('keyup', function(e) {
            that.multiKey = false;
        });
    };

    // Call event helper
    Selectable.prototype.callEvent = function(name, params) {
        var event = $.Event(name + '.' + this.name);
        this.$.trigger(event, params);
        var callback = this.options[name];
        var result = event.result;
        if($.isFunction(callback)) {
            result = callback.apply(this, $.isArray(params) ? params : [params]);
        }
        return result;
    };

    // Extense jquery element
    $.fn.selectable = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(name);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(name, (data = new Selectable(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.selectable.Constructor = Selectable;

    // Auto call selectable after document load complete
    $(function() {
        $('[data-ride="selectable"]').selectable();
    });
}(jQuery));

