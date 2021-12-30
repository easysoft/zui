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
        // menuCreator: null,
        // position: null,
        animation: 'fade',
        menuTemplate: '<ul class="dropdown-menu"></ul>',
        toggleTrigger: false,
        duration: 200,
        // maxMenuHeight: null,
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

    function createMenuItem(item, index) {
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
        var $a = $('<a/>').attr($.extend({
            href: item.url || '###',
            'class': item.className,
            style: item.style
        }, item.attrs)).data('item', item);
        if (item.html) {
            if (item.html === true) {
                $a.html(item.label || item.text);
            } else {
                $a = $(item.html);
            }
        } else {
            $a.text(item.label || item.text);
        }
        if(item.icon) {
            $a.prepend('<i class="icon icon-' + item.icon + '"></i>');
        }
        if (item.onClick) {
            $a.on('click', item.onClick);
        }
        var $item = $('<li />')
            .toggleClass('disabled', item.disabled === true)
            .append($a);
        if (item.items) {
            $item.data('item', item).addClass('dropdown-submenu');
        }
        return $item;
    }

    /**
     * Create context menu item list
     * @param {Object[]} items Context menu item
     * @param {JQuery} $list Context menu item list element
     * @param {{itemCreator: function(Object, number, Object)}} options Context menu options
     * @returns {boolean} Return true if successfully
     */
    function createMenuItems(items, $list, options) {
        var itemCreator = options.itemCreator || createMenuItem;
        var itemsType = typeof items;

        if (itemsType === 'string') {
            items = items.split(',');
        } else if (itemsType === 'function') {
            items = items(options);
        }
        if (!items) {
            return false;
        }
        $.each(items, function(index, item) {
            $list.append(itemCreator(item, index, options));
        });
        return true;
    }

    var isContextMenuShow = function(id) {
        var $target = $('#' + targetId);
        return $target.length && $target.hasClass('contextmenu-show') && (!id || ($target.data('options') || {}).id === id);
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
            var options = $target.removeClass('contextmenu-show').data('options');
            if (!id || options.id === id) {
                var afterHide = function() {
                    $target.find('.contextmenu-menu').removeClass('open');
                    options.onHidden && options.onHidden();
                    callback && callback();
                };
                options.onHide && options.onHide();
                var animation = options.animation;
                $target.find('.contextmenu-menu').removeClass('in');
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

        var $target = $('#' + targetId);
        if (!$target.length) {
            $target = $('<div style="position: fixed; z-index: 2000;" class="contextmenu" id="' + targetId + '"><div class="contextmenu-menu"></div></div>').appendTo('body');
        }
        var $menu = $target.find('.contextmenu-menu').empty();
        $menu.off('click.' + NAME).on('click.' + NAME, 'a,.contextmenu-item', function(e) {
            var $item = $(this);
            var clickResult = options.onClickItem && options.onClickItem($item.data('item'), $item, e, options);
            if (clickResult !== false) {
                hideContextMenu();
            }
        }).off('mouseenter.' + NAME).on('mouseenter.' + NAME, '.dropdown-submenu', function(e) {
            var $item = $(this);
            var item = $item.data('item');
            var $subMenu = $item.children('.dropdown-menu');
            if(item) {
                if (item.items) {
                    if(!$subMenu.length) {
                        $subMenu = $(options.menuTemplate).appendTo($item);
                    }
                    createMenuItems(item.items, $subMenu, options);
                }

                $item.removeData('item');
            }
            if (!$subMenu.length) {
                return;
            }

            // Adjust submenu position
            $subMenu.removeClass('pull-left').css('top', 0);
            var itemBounding = $item[0].getBoundingClientRect();
            var menuBounding = $subMenu[0].getBoundingClientRect();
            var winWidth = window.innerWidth;
            var winHeight = window.innerHeight;
            if (menuBounding.bottom > winHeight) {
                var subMenuTop = Math.max(-menuBounding.top, winHeight - menuBounding.bottom);
                $subMenu.css('top', subMenuTop);
            }
            if (menuBounding.right > winWidth) {
                $subMenu.addClass('pull-left');
            }
        });
        $menu.attr('class', 'contextmenu-menu' + (options.className ? (' ' + options.className) : ''))
        $target.attr('class', 'contextmenu contextmenu-show');

        // Create menu items
        var menuCreator = options.menuCreator;
        if (menuCreator) {
            $menu.append(menuCreator(items, options));
        } else {
            $menu.append(options.menuTemplate);
            var $menuList = $menu.children().first();
            var result = createMenuItems(items, $menuList, options);
            if (result === false) return result;
        }

        // Show menu
        var animation = options.animation;
        var duration = options.duration;
        if (animation === true) options.animation = animation = 'fade';
        if (animationTimer) {
            clearTimeout(animationTimer);
            animationTimer = null;
        }
        var afterShow = function() {
            $menu.addClass('in');
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

        var x = options.x;
        var y = options.y;
        if (x === undefined) x = (options.event || options).clientX;
        if (x === undefined) x = mouseX;
        if (y === undefined) y = (options.event || options).clientY;
        if (y === undefined) y = mouseY;
        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;
        // var maxMenuHeight = options.maxMenuHeight;
        // if (typeof maxMenuHeight !== 'number') maxMenuHeight = winHeight;
        // else winHeight = Math.min(winHeight, maxMenuHeight);
        var $menuList = $menu.children().first();
        // $menuList.css({maxHeight: maxMenuHeight, overflowY: 'auto', margin: 0});
        var menuWidth = $menuList.outerWidth();
        var menuHeight = $menuList.outerHeight();
        if (options.position) {
            var newPos = options.position({x: x, y: y, width: menuWidth, height: menuHeight, winHeight: winHeight, winWidth: winWidth}, options, $menu);
            if (newPos) {
                x = newPos.x;
                y = newPos.y;
            }
        }
        x = Math.max(0, Math.min(x, winWidth - menuWidth));
        y = Math.max(0, Math.min(y, winHeight - menuHeight));

        $target.css({
            left: x,
            top: y
        }).show();

        $menu.addClass('open');
        if (animation) {
            $menu.addClass(animation);
            animationTimer = setTimeout(function() {
                afterShow();
                isShowingMenu = false;
            }, 10);
        } else {
            afterShow();
            isShowingMenu = false;
        }
        return ContextMenu;
    };

    $.extend(ContextMenu, {
        NAME: NAME,
        DEFAULTS: DEFAULTS,
        show: showContextMenu,
        hide: hideContextMenu,
        listenMouse: listenMouseMove,
        isShow: isContextMenuShow
    });
    $.zui({ContextMenu: ContextMenu});


    // The contextmenu model class
    var ContextListener = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);
        that.id = $.zui.uuid();
        options = that.options = $.extend({trigger: 'contextmenu'}, ContextMenu.DEFAULTS, this.$.data(), options);

        var eventHandler = function(e) {
            if (e.type === 'mousedown' && e.button !== 2) {
                return;
            }

            if (options.toggleTrigger && that.isShow()) {
                that.hide();
            } else {
                var config = {
                    x: e.clientX,
                    y: e.clientY,
                    event: e,
                };
                if (that.show(config) === false) {
                    return;
                }
            }
            e.preventDefault();
            e.returnValue = false; // 解决IE8右键弹出
            return false;
        };

        var trigger = options.trigger;
        var eventName = trigger + '.' + NAME;
        if (options.selector) {
            that.$.on(eventName, options.selector, eventHandler);
        } else {
            that.$.on(eventName, eventHandler);
        }

        if (options.show) {
            that.show(typeof options.show === 'object' ? options.show : null);
        }
    };

    ContextListener.prototype.destory = function () {
        that.$.off('.' + NAME);
    };

    ContextListener.prototype.hide = function (callback) {
        return ContextMenu.hide(this.id, callback);
    };

    ContextListener.prototype.show = function (options, callback) {
        options = $.extend({id: this.id, $toggle: this.$}, this.options, options);
        return ContextMenu.show(options, callback);
    };

    ContextListener.prototype.isShow = function () {
        return isContextMenuShow(this.id);
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

    // Use dropdown menu as contextmenu
    $.fn.contextDropdown = function(options) {
        $(this).contextmenu($.extend({
            trigger: 'click',
            animation: 'fade',
            toggleTrigger: true,
            menuCreator: function(items, finalOptions) {
                var $toggle = finalOptions.$toggle;
                var selector = $toggle.attr('data-target')
                if(!selector) {
                    selector = $toggle.attr('href')
                    selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
                }
                var $target = selector ? $(selector) : $toggle.next('.dropdown-menu');
                var transferEvent = finalOptions.transferEvent;
                if (transferEvent !== false) {
                    var indexAttrName = 'data-contextmenu-index';
                    $target.find('a,.contextmenu-item').each(function(index) {
                        $(this).attr(indexAttrName, index);
                    });
                    var $clone = $target.clone();
                    $clone.on(typeof transferEvent === 'string' ? transferEvent : 'click', 'a,.contextmenu-item', function(event) {
                        var $item = $target.find('[' + indexAttrName + '="' + $(this).attr(indexAttrName) + '"]');
                        var item = $item[0];
                        if (!item) return;
                        if (item[event.type]) {
                            item[event.type]();
                        } else {
                            $item.trigger(event.type);
                        }
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    });
                    return $clone;
                }
                return $target.clone();
            },
            position: function(pos, finalOptions, $menu) {
                var placement = finalOptions.placement;
                var $toggle = finalOptions.$toggle;
                if (!placement)
                {
                        var $dropmenu = $menu.find('.dropdown-menu');
                        var pullRight = $dropmenu.hasClass('pull-right');
                        var dropUp = $toggle.parent().hasClass('dropup');
                        placement = pullRight ? (dropUp ? 'top-right' : 'bottom-right') : (dropUp ? 'top-left' : 'bottom-left');
                        if (pullRight) $dropmenu.removeClass('pull-right');
                }
                var bounds = $toggle[0].getBoundingClientRect();
                switch (placement) {
                    case 'top-left':
                        return {x: bounds.left, y: Math.floor(bounds.top - pos.height)};
                    case 'top-right':
                        return {x: Math.floor(bounds.right - pos.width), y: Math.floor(bounds.top - pos.height)};
                    case 'bottom-left':
                        return {x: bounds.left, y: bounds.bottom};
                    case 'bottom-right':
                        return {x: Math.floor(bounds.right - pos.width), y: bounds.bottom};
                }
                return pos;
            }
        }, options));
    };

    $(document).on('click', function(e) {
        var $target = $(e.target);
        var $toggle = $target.closest('[data-toggle="context-dropdown"]');
        if ($toggle.length) {
            var contextmenu = $toggle.data(NAME);
            if (!contextmenu) {
                $toggle.contextDropdown({show: true});
            }
        } else if (!isShowingMenu && !$target.closest('.contextmenu').length) {
            hideContextMenu();
        }
    });
}(jQuery, undefined));
