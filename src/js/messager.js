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
    var template = '<div class="messager messager-{type} {placement}" id="messager{id}" style="display:none"><div class="messager-content">{message}</div><button class="close-messager">&times;</button></div>';

    function Messager()
    {
        this.show = function(message, type, placement, time, parent)
        {
            $('.messager').hide();

            id++;
            type = type || 'default';
            time = time || 2000;
            parent = parent || 'body';
            placement = placement || 'top';
            var msg = $(template.format(
            {
                message: message,
                type: type,
                placement: placement,
                id: id
            })).appendTo(parent);
            msg.find('.close-messager').click(function()
            {
                $(this).closest('.messager').fadeOut();
            });

            if (placement == 'top' || placement == 'bottom')
            {
                msg.css('left', ($(parent).width() - msg.width() - 50) / 2);
            }

            msg.fadeIn();

            setTimeout(function()
            {
                $('#messager' + id).fadeOut(function()
                {
                    $(this).remove();
                });
            }, time);

            return msg;
        };

        this.primary = function(message, placement, time, parent)
        {
            return this.show(message, 'primary', placement, time, parent);
        };

        this.success = function(message, placement, time, parent)
        {
            return this.show('<i class="icon-ok-sign icon"></i> ' + message, 'success', placement, time, parent);
        };

        this.info = function(message, placement, time, parent)
        {
            return this.show('<i class="icon-info-sign icon"></i> ' + message, 'info', placement, time, parent);
        };

        this.warning = function(message, placement, time, parent)
        {
            return this.show('<i class="icon-warning-sign icon"></i>' + message, 'warning', placement, time, parent);
        };

        this.danger = function(message, placement, time, parent)
        {
            return this.show('<i class="icon-exclamation-sign icon"></i>' + message, 'danger', placement, time, parent);
        };

        this.important = function(message, placement, time, parent)
        {
            return this.show(message, 'important', placement, time, parent);
        };

        this.special = function(message, placement, time, parent)
        {
            return this.show(message, 'special', placement, time, parent);
        };
    }

    var messager = new Messager();

    window.messager = messager;


}(jQuery, window));
