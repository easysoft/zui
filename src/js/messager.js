/* ========================================================================
 * ZUI: messager.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window)
{
    'use strict';

    var id = 0;
    var template = '<div class="messager messager-{type} {placement}" id="messager{id}" style="display:none"><div class="messager-content"></div><div class="messager-actions"><button type="button" class="close action">&times;</button></div></div>';
    var defaultOptions = {
        type: 'default',
        placement: 'top',
        time: 4000,
        parent: 'body',
        // clear: false,
        icon: null,
        close: true,
        fade: true,
        scale: true
    };
    var lastMessager;

    var Messager = function(message, options)
    {
        var that = this;
        that.id = id++;
        options = that.options = $.extend(
        {}, defaultOptions, options);
        that.message = (options.icon ? '<i class="icon-' + options.icon + ' icon"></i> ' : '') + message;

        that.$ = $(template.format(options)).toggleClass('fade', options.fade).toggleClass('scale', options.scale).attr('id', 'messager-' + that.id);
        if (!options.close)
        {
            that.$.find('.close').remove();
        }
        else
        {
            that.$.on('click', '.close', function()
            {
                that.hide();
            });
        }

        that.$.find('.messager-content').html(that.message);


        that.$.data('zui.messager', that);
    };

    Messager.prototype.show = function(message)
    {
        var that = this,
            options = this.options;

        if (lastMessager)
        {
            if (lastMessager.id == that.id)
            {
                that.$.removeClass('in');
            }
            else if (lastMessager.isShow)
            {
                lastMessager.hide();
            }
        }

        if (that.hiding)
        {
            clearTimeout(that.hiding);
            that.hiding = null;
        }

        if (message)
        {
            that.message = (options.icon ? '<i class="icon-' + options.icon + ' icon"></i> ' : '') + message;
            that.$.find('.messager-content').html(that.message);
        }

        that.$.appendTo(options.parent).show();

        if (options.placement === 'top' || options.placement === 'bottom' || options.placement === 'center')
        {
            that.$.css('left', ($(window).width() - that.$.width() - 50) / 2);
        }

        if (options.placement === 'left' || options.placement === 'right' || options.placement === 'center')
        {
            that.$.css('top', ($(window).height() - that.$.height() - 50) / 2);
        }

        that.$.addClass('in');

        if (options.time)
        {
            that.hiding = setTimeout(function()
            {
                that.hide();
            }, options.time);
        }

        that.isShow = true;
        lastMessager = that;
    };

    Messager.prototype.hide = function()
    {
        var that = this;
        if (that.$.hasClass('in'))
        {
            that.$.removeClass('in');
            setTimeout(function()
            {
                that.$.remove();
            }, 200);
        }

        that.isShow = false;
    };

    var showMessage = function(message, options)
    {
        if (typeof options === 'string')
        {
            options = {
                type: options
            };
        }
        var msg = new Messager(message, options);
        msg.show();
        return msg;
    };

    var getOptions = function(options)
    {
        return (typeof options === 'string') ?
        {
            placement: options
        } : options;
    };

    $.zui({
        Messager: Messager,
        showMessager: showMessage,
        messager:
        {
            show: showMessage,
            primary: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'primary'
                }, getOptions(options)));
            },
            success: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'success',
                    icon: 'ok-sign'
                }, getOptions(options)));
            },
            info: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'info',
                    icon: 'info-sign'
                }, getOptions(options)));
            },
            warning: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'warning',
                    icon: 'warning-sign'
                }, getOptions(options)));
            },
            danger: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'danger',
                    icon: 'exclamation-sign'
                }, getOptions(options)));
            },
            important: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'important'
                }, getOptions(options)));
            },
            special: function(message, options)
            {
                return showMessage(message, $.extend(
                {
                    type: 'special'
                }, getOptions(options)));
            }
        }
    });
}(jQuery, window));
