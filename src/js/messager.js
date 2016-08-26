/* ========================================================================
 * ZUI: messager.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window, undefined) {
    'use strict';

    var id = 0;
    var template = '<div class="messager messager-{type} {placement}" id="messager{id}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>';
    var defaultOptions = {
        type: 'default',
        placement: 'top',
        time: 4000,
        parent: 'body',
        // clear: false,
        icon: null,
        close: true,
        // actions: [{icon, name, action, title}],
        // contentClass: null,
        // cssClass: null,
        // onAction: function,
        fade: true,
        scale: true
    };
    var all = {};

    var Messager = function(message, options) {
        if($.isPlainObject(message)) {
            options = message;
            message = options.message;
        }

        var that = this;
        that.id = id++;
        options = that.options = $.extend({}, defaultOptions, options);
        that.message = (options.icon ? '<i class="icon-' + options.icon + ' icon"></i> ' : '') + message;

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
                result = options.onAction.call(this, 'content', null, that);
                if(result === true) that.hide();
            }
        });

        var $content = that.$.find('.messager-content').html(that.message);
        if(options.contentClass) $content.addClass(options.cssClass);

        that.$.data('zui.messager', that);

        if(options.show && that.message !== undefined) {
            that.show();
        }
    };

    Messager.prototype.show = function(message, callback) {
        var that = this,
            options = this.options;

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

        if($.isFunction(message)) {
            var oldCallback = callback;
            callback = message;
            if(oldCallback !== undefined) {
                message = oldCallback;
            }
        }

        if(message) {
            that.message = (options.icon ? '<i class="icon-' + options.icon + ' icon"></i> ' : '') + message;
            that.$.find('.messager-content').html(that.message);
        }

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

    Messager.prototype.hide = function(callback) {
        var that = this;
        if(that.$.hasClass('in')) {
            that.$.removeClass('in');
            setTimeout(function() {
                var $parent = that.$.parent();
                that.$.remove();
                if(!$parent.children().length) $parent.remove();
                callback && callback(true);
            }, 200);
        } else {
            callback && callback(false);
        }

        that.isShow = false;
    };

    var showMessage = function(message, options) {
        if(typeof options === 'string') {
            options = {
                type: options
            };
        }
        var msg = new Messager(message, options);
        msg.show();
        return msg;
    };

    var hideMessage = function() {
        $('.messager').each(function() {
            var msg = $(this).data('zui.messager');
            if(msg && msg.hide) msg.hide();
        });
    };

    var getOptions = function(options) {
        return(typeof options === 'string') ? {
            placement: options
        } : options;
    };

    $.zui({
        Messager: Messager,
        showMessager: showMessage,
        messager: {
            show: showMessage,
            hide: hideMessage,
            primary: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'primary'
                }, getOptions(options)));
            },
            success: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'success',
                    icon: 'ok-sign'
                }, getOptions(options)));
            },
            info: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'info',
                    icon: 'info-sign'
                }, getOptions(options)));
            },
            warning: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'warning',
                    icon: 'warning-sign'
                }, getOptions(options)));
            },
            danger: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'danger',
                    icon: 'exclamation-sign'
                }, getOptions(options)));
            },
            important: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'important'
                }, getOptions(options)));
            },
            special: function(message, options) {
                return showMessage(message, $.extend({
                    type: 'special'
                }, getOptions(options)));
            }
        }
    });
}(jQuery, window, undefined));

