/* ========================================================================
 * ZUI: messager.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window, undefined) {
    'use strict';

    var id = 0;
    var template = '<div class="messager messager-{type} {placement}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>';
    var DEFAULTS = {
        // icons: '',
        type: 'default',
        placement: 'top',
        time: 4000,
        parent: 'body',
        // clear: false,
        // icon: null,
        close: true,
        // actions: [{icon, name, action, title}],
        // contentClass: null,
        // cssClass: null,
        // onAction: function,
        fade: true,
        scale: true,
        // notification: false,
        // html: false,
        // content: '',
        // title: '',
    };
    var all = {};

    var Messager = function(message, options) {
        if ($.isPlainObject(message)) {
            options = $.extend({}, options, message);
        } else if (message) {
            if (options) {
                options.content = message;
            } else {
                options = {content: message};
            }
        }

        var that = this;
        options = that.options = $.extend({}, DEFAULTS, options);

        that.id = options.id || (id++);
        var oldMessager = all[that.id];
        if(oldMessager) oldMessager.destroy();
        all[that.id] = that;

        that.$ = $(template.format(options)).toggleClass('fade', options.fade).toggleClass('scale', options.scale).attr('id', 'messager-' + that.id);

        if(options.cssClass) that.$.addClass(options.cssClass);

        var hasCloseAction = false;
        var $actions = that.$.find('.messager-actions');
        var appendAction = function(action) {
            var $btn = $('<button type="button" class="action action-' + action.name + '"/>');
            if(action.name === 'close') $btn.addClass('close');
            if(action.html !== undefined) {
                $btn.html(action.html);
            }
            if(action.icon !== undefined) {
                $btn.append('<i class="action-icon icon-' + action.icon + '"/>');
            }
            if(action.text !== undefined) {
                $btn.append('<span class="action-text">' + action.text + '</span>');
            }
            if(action.tooltip !== undefined) {
                $btn.attr('title', action.tooltip).tooltip();
            }
            $btn.data('action', action);
            $actions.append($btn);
        };
        if(options.actions) {
            $.each(options.actions, function(idx, action) {
                if(action.name === undefined) action.name = idx;
                if(action.name == 'close') hasCloseAction = true;
                appendAction(action);
            });
        }
        if(!hasCloseAction && options.close) {
            appendAction({name: 'close', html: '&times;'});
        }

        that.$.on('click', '.action', function(e) {
            var action = $(this).data('action'), result;
            if(options.onAction) {
                result = options.onAction.call(this, action.name, action, that);
                if(result === false) return;
            }
            if($.isFunction(action.action)) {
                result = action.action.call(this, that);
                if(result === false) return;
            }
            that.hide();
            e.stopPropagation();
        });

        that.$.on('click', function(e) {
            if(options.onAction) {
                var result = options.onAction.call(this, 'content', null, that);
                if(result === true) that.hide();
            }
        });

        that.$.data('zui.messager', that);

        if(options.show && that.message !== undefined) {
            that.show();
        }
    };

    Messager.prototype.update = function(content, newOptions) {
        if ($.isPlainObject(content)) {
            newOptions = content;
        } else if (content) {
            if (newOptions) {
                newOptions.content = content;
            } else {
                newOptions = {content: content};
            }
        }
        var that = this;
        var options = that.options;
        that.$.removeClass('messager-' + options.type);
        var $content = that.$.find('.messager-content');
        if (options.contentClass) {
            $content.removeClass(options.contentClass);
        }
        if(newOptions) {
            options = $.extend(options, newOptions);
        }
        that.$.addClass('messager-' + options.type).toggleClass('messager-notification', !!options.notification);
        if(options.contentClass) $content.addClass(options.contentClass);
        var title = options.title;
        var icon = options.icon;
        content = options.content;
        $content.empty();
        if (title) {
            var $title = $('<div class="messager-title"></div>');
            $title[options.html ? 'html' : 'text'](title);
            $content.append($title);
        }
        if (content) {
            var $text = $('<div class="messager-text"></div>');
            $text[options.html ? 'html' : 'text'](content);
            $content.append($text);
        }
        var $icon = that.$.find('.messager-icon');
        if (icon) {
            var iconHtml = $.isPlainObject(icon) ? icon.html : '<i class="icon-' + icon + ' icon"></i>';
            if ($icon.length) {
                $icon.html(iconHtml);
            } else {
                $content.before('<div class="messager-icon">' + iconHtml + '<div>');
            }
        } else {
            $icon.remove();
        }
        that.$.toggleClass('messager-has-icon', !!icon);
    };

    Messager.prototype.show = function(message, callback) {
        var that = this,
            options = this.options;

        if($.isFunction(message)) {
            var oldCallback = callback;
            callback = message;
            if(oldCallback !== undefined) {
                message = oldCallback;
            }
        }

        if(that.isShow) {
            that.hide(function() {
                that.show(message, callback);
            });
            return;
        }

        if(that.hiding) {
            clearTimeout(that.hiding);
            that.hiding = null;
        }

        that.update(message);

        var placement = options.placement;
        var $parent = $(options.parent);
        var $holder = $parent.children('.messagers-holder.' + placement);
        if(!$holder.length) {
            $holder = $('<div/>').attr('class', 'messagers-holder ' + placement).appendTo($parent);
        }
        $holder.append(that.$);
        if(placement === 'center') {
            var offset = $(window).height() - $holder.height();
            $holder.css('top', Math.max(-offset, offset/2));
        }

        that.$.show().addClass('in');

        if(options.time) {
            that.hiding = setTimeout(function() {
                that.hide();
            }, options.time);
        }

        that.isShow = true;
        callback && callback();
        return that;
    };

    Messager.prototype.hide = function(callback, immediately) {
        if(callback === true) {
            immediately = true;
            callback = null;
        }
        var that = this;
        if(that.$.hasClass('in')) {
            that.$.removeClass('in');
            var removeMessager = function() {
                var $parent = that.$.parent();
                that.$.detach();
                if(!$parent.children().length) $parent.remove();
                callback && callback(true);
            };
            if(immediately) removeMessager();
            else setTimeout(removeMessager, 200);
        } else {
            callback && callback(false);
        }

        that.isShow = false;
    };

    Messager.prototype.destroy = function() {
        var that = this;
        that.hide(function()
        {
            that.$.remove();
            that.$ = null;
        }, true);
        delete all[that.id];
    };

    var hideMessager = function(id) {
        if (id === undefined) {
            $('.messager').each(function() {
                var msg = $(this).data('zui.messager');
                if(msg && msg.hide) msg.hide(true);
            });
        } else {
            var msg = $('#messager-' + id).data('zui.messager');
            if(msg && msg.hide) msg.hide(true);
        }
    };

    var showMessager = function(message, options) {
        if(typeof options === 'string') {
            options = {
                type: options
            };
        }
        if ($.isPlainObject(message)) {
            options = $.extend({}, options, message);
            message = null;
        }
        options = $.extend({}, options);
        if(options.id === undefined) hideMessager();
        var msg = all[options.id] || new Messager(message, options);
        msg.show();
        return msg;
    };

    var NOTIFICAION_DEFAULTS = {
        notification: true,
        placement: 'bottom-right',
        time: 0,
        icon: 'bell icon-2x',
    };
    var showNotification = function(title, message, options) {
        var defaultOptions = $.extend({id: $.zui.uuid()}, NOTIFICAION_DEFAULTS);
        var isTitleString = typeof title === 'string';
        var isMessageString = typeof message === 'string'
        if (isTitleString && isMessageString) {
            options = $.extend(defaultOptions, options, {
                title: title,
                content: message
            });
        } else if (isTitleString && $.isPlainObject(message)) {
            options = $.extend(defaultOptions, options, message, {
                title: title
            });
        } else if ($.isPlainObject(title)) {
            options = $.extend(defaultOptions, options, message, title);
        } else if (isTitleString) {
            options = $.extend(defaultOptions, options, {
                title: title
            });
        }
        return showMessager(options);
    };

    var getOptions = function(options) {
        return(typeof options === 'string') ? {
            placement: options
        } : options;
    };

    var zuiMessager = {
        show: showMessager,
        hide: hideMessager
    };

    Messager.all = all;
    Messager.DEFAULTS = DEFAULTS;
    Messager.NOTIFICAION_DEFAULTS = NOTIFICAION_DEFAULTS;

    $.each({
        primary  : 0,
        success  : 'ok-sign',
        info     : 'info-sign',
        warning  : 'warning-sign',
        danger   : 'exclamation-sign',
        important: 0,
        special  : 0
    }, function(name, icon){
        zuiMessager[name] = function(message, options) {
            return showMessager(message, $.extend({
                type: name,
                icon: Messager.DEFAULTS.icons[name] || icon || null
            }, getOptions(options)));
        };
    });

    $.zui({
        Messager: Messager,
        showMessager: showMessager,
        showNotification: showNotification,
        messager: zuiMessager
    });
}(jQuery, window, undefined));
