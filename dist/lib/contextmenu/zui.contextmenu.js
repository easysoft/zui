/*!
 * ZUI: 右键菜单 - v1.9.2 - 2020-07-08
 * http://openzui.com
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2020 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: contextmenu.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2017-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, undefined) {
    'use strict';

    var NAME = 'zui.contextmenu'; // model name

    var DEFAULTS = {
        // onShow: null,
        // onShown: null,
        // onHide: null,
        // onHidden: null,
        // itemCreator: null,
        // x: 0,
        // y: 0,
        // onClickItem: null,
        duration: 200,
    };

    var isShowingMenu = false;
    var ContextMenu = {};
    var targetId = 'zui-contextmenu-' + $.zui.uuid();
    var mouseX = 0, mouseY = 0;
    var listenMouseMove = function() {
        $(document).off('mousemove.' + NAME).on('mousemove.' + NAME, function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        return ContextMenu;
    };
    var stopListenMouse = function() {
        $(document).off('mousemove.' + NAME);
        return ContextMenu;
    };
    var createMenuItem = function(item, index) {
        if (typeof item === 'string') {
            if (item === 'seperator' || item === 'divider' || item === '-' || item === '|') {
                item = {type: 'seperator'};
            } else {
                item = {label: item, id: index};
            }
        }
        if (item.type === 'seperator' || item.type === 'divider') {
            return $('<li class="divider"></li>');
        }
        var $a = $('<a/>').attr({
            href: item.url || '###',
            'class': item.className,
            style: item.style
        }).data('item', item);
        if (item.html) {
            if (item.html === true) {
                $a.html(item.label || item.text);
            } else {
                $a = $(item.html);
            }
        } else {
            $a.text(item.label || item.text);
        }
        if (item.onClick) {
            $a.on('click', item.onClick);
        }
        return $('<li />').toggleClass('disabled', item.disabled === true).append($a);
    };

    var animationTimer = null;
    var hideContextMenu = function(id, callback) {
        if (typeof id === 'function') {
            callback = id;
            id = null;
        }

        if (animationTimer) {
            clearTimeout(animationTimer);
            animationTimer = null;
        }

        var $target = $('#' + targetId);
        if ($target.length) {
            var options = $target.data('options');
            if (!id || options.id === id) {
                var afterHide = function() {
                    $target.hide();
                    options.onHidden && options.onHidden();
                    callback && callback();
                };
                options.onHide && options.onHide();
                var animation = options.animation;
                $target.removeClass('in');
                if (animation) {
                    animationTimer = setTimeout(afterHide, options.duration);
                } else {
                    afterHide();
                }
            }
        }
        return ContextMenu;
    };

    var showContextMenu = function(items, options, callback) {
        if ($.isPlainObject(items)) {
            callback = options;
            options = items;
            items = options.items;
        }

        isShowingMenu = true;
        // hideContextMenu();

        options = $.extend({}, DEFAULTS, options);
        var x = options.x;
        var y = options.y;
        if (x === undefined) x = (options.event || options).clientX;
        if (x === undefined) x = mouseX;
        if (y === undefined) y = (options.event || options).clientY;
        if (y === undefined) y = mouseY;

        var $target = $('#' + targetId);
        if (!$target.length) {
            $target = $('<div style="display: none; position: fixed; z-index: 2000;" class="contextmenu" id="' + targetId + '"><ul class="dropdown-menu contextmenu-menu"></ul></div>').appendTo('body');
        }
        var $menu = $target.find('.contextmenu-menu').off('click.' + NAME).on('click.' + NAME, 'a', function(e) {
            var $item = $(this);
            var clickResult = options.onClickItem && options.onClickItem($item.data('item'), $item, e);
            if (clickResult !== false) {
                hideContextMenu();
            }
        }).empty();
        $menu.attr('class', 'dropdown-menu contextmenu-menu' + (options.className ? (' ' + options.className) : ''))
        $target.hide().attr('class', 'contextmenu');
        var itemCreator = options.itemCreator || createMenuItem;
        var itemsType = typeof items;
        if (itemsType === 'string') {
            items = items.split(',');
        } else if (itemsType === 'function') {
            items = items(options);
        }
        $.each(items, function(index, item) {
            $menu.append(itemCreator(item, index, options));
        });

        // Show menu
        var animation = options.animation;
        var duration = options.duration;
        if (animation === true) options.animation = animation = 'fade';
        if (animationTimer) {
            clearTimeout(animationTimer);
            animationTimer = null;
        }
        var afterShow = function() {
            $target.addClass('in');
            options.onShown && options.onShown();
            callback && callback();
        };
        options.onShow && options.onShow();
        $target.data('options', {
            animation: animation,
            onHide: options.onHide,
            onHidden: options.onHidden,
            id: options.id,
            duration: duration
        });

        var $w = $(window);
        x = Math.max(0, Math.min(x, $w.width() - $menu.outerWidth()));
        y = Math.max(0, Math.min(y, $w.height() - $menu.outerHeight()));
        $target.css({
            left: x,
            top: y
        });

        if (animation) {
            $target.addClass('open').addClass(animation).show();
            animationTimer = setTimeout(function() {
                afterShow();
                isShowingMenu = false;
            }, options.duration);
        } else {
            $target.addClass('open').show();
            afterShow();
            animationTimer = setTimeout(function() {
                isShowingMenu = false;
            }, 200);
        }
        return ContextMenu;
    };

    $(document).on('click', function(e) {
        if (!isShowingMenu && !$(e.target).closest('.contextmenu').length) {
            hideContextMenu();
        }
    });

    $.extend(ContextMenu, {
        NAME: NAME,
        DEFAULTS: DEFAULTS,
        show: showContextMenu,
        hide: hideContextMenu,
        listenMouse: listenMouseMove
    });
    $.zui({ContextMenu: ContextMenu});


    // The contextmenu model class
    var ContextListener = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        options = that.options = $.extend({trigger: 'contextmenu'}, ContextMenu.DEFAULTS, this.$.data(), options);

        var trigger = options.trigger;

        that.id = $.zui.uuid();
        var eventHandler = function(e) {
            if (e.type === 'mousedown' && e.button !== 2) {
                return;
            }
            var config = {
                x: e.clientX,
                y: e.clientY,
                event: e
            };
            if (options.itemsCreator) {
                config.items = options.itemsCreator.call(this, e);
            }
            that.show(config);
            e.preventDefault();
            e.returnValue = false; // 解决IE8右键弹出
            return false;
        };
        var eventName = trigger + '.' + NAME;
        if (options.selector) {
            that.$.on(eventName, options.selector, eventHandler);
        } else {
            that.$.on(eventName, eventHandler);
        }
    };

    ContextListener.prototype.destory = function () {
        that.$.off('.' + NAME);
    };

    ContextListener.prototype.hide = function (callback) {
        ContextMenu.hide(this.id, callback);
    };

    ContextListener.prototype.show = function (options, callback) {
        options = $.extend({}, this.options, options);
        ContextMenu.show(options, callback);
    };

    // Extense jquery element
    $.fn.contextmenu = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new ContextListener(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };
    $.fn.contextmenu.Constructor = ContextListener;
}(jQuery, undefined));
