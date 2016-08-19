/* ========================================================================
 * ZUI: lightbox.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window, Math) {
    'use strict';

    if(!$.fn.modalTrigger) throw new Error('modal & modalTrigger requires for lightbox');
    if(!$.zui.imgReady) throw new Error('imgReady requires for lightbox');

    var Lightbox = function(element, options) {
        this.$ = $(element);
        this.options = this.getOptions(options);

        this.init();
    };

    Lightbox.DEFAULTS = {
        modalTeamplate: '<div class="icon-spinner icon-spin loader"></div><div class="modal-dialog"><button class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><button class="controller prev"><i class="icon icon-chevron-left"></i></button><button class="controller next"><i class="icon icon-chevron-right"></i></button><img class="lightbox-img" src="{image}" alt="" data-dismiss="modal" /><div class="caption"><div class="content">{caption}<div></div></div>'
    }; // default options

    Lightbox.prototype.getOptions = function(options) {
        var IMAGE = 'image';
        options = $.extend({}, Lightbox.DEFAULTS, this.$.data(), options);
        if(!options[IMAGE]) {
            options[IMAGE] = this.$.attr('src') || this.$.attr('href') || this.$.find('img').attr('src');
            this.$.data(IMAGE, options[IMAGE]);
        }
        return options;
    };

    Lightbox.prototype.init = function() {
        this.bindEvents();
    };

    Lightbox.prototype.initGroups = function() {
        var groups = this.$.data('groups');
        if(!groups) {
            groups = $('[data-toggle="lightbox"][data-group="' + this.options.group + '"], [data-lightbox-group="' + this.options.group + '"]');
            this.$.data('groups', groups);
            groups.each(function(index) {
                $(this).attr('data-group-index', index);
            });
        }
        this.groups = groups;
        this.groupIndex = parseInt(this.$.data('group-index'));
    };

    Lightbox.prototype.bindEvents = function() {
        var $e = this.$,
            that = this;
        var options = this.options;
        if(!options.image) return false;
        $e.modalTrigger({
            type: 'custom',
            name: 'lightboxModal',
            position: 'center',
            custom: function(e) {
                that.initGroups();
                var modal = e.modal,
                    groups = that.groups,
                    groupIndex = that.groupIndex;

                modal.addClass('modal-lightbox')
                    .html(options.modalTeamplate.format(options))
                    .toggleClass('lightbox-with-caption', typeof options.caption == 'string')
                    .removeClass('lightbox-full')
                    .data('group-index', groupIndex);
                var dialog = modal.find('.modal-dialog'),
                    winWidth = $(window).width();
                $.zui.imgReady(options.image, function() {
                    dialog.css({
                        width: Math.min(winWidth, this.width)
                    });
                    if(winWidth < (this.width + 30)) modal.addClass('lightbox-full');
                    e.ready(200);
                });

                modal.find('.prev').toggleClass('show', groups.filter('[data-group-index="' + (groupIndex - 1) + '"]').length > 0);
                modal.find('.next').toggleClass('show', groups.filter('[data-group-index="' + (groupIndex + 1) + '"]').length > 0);

                modal.find('.controller').click(function() {
                    var $this = $(this);
                    var id = modal.data('group-index') + ($this.hasClass('prev') ? -1 : 1);
                    var $e = groups.filter('[data-group-index="' + id + '"]');
                    if($e.length) {
                        var image = $e.data('image'),
                            caption = $e.data('caption');
                        modal.addClass('modal-loading')
                            .data('group-index', id)
                            .toggleClass('lightbox-with-caption', typeof caption == 'string')
                            .removeClass('lightbox-full');
                        modal.find('.lightbox-img').attr('src', image);
                        modal.find('.caption > .content').text(caption);
                        winWidth = $(window).width();
                        $.zui.imgReady(image, function() {
                            dialog.css({
                                width: Math.min(winWidth, this.width)
                            });
                            if(winWidth < (this.width + 30)) modal.addClass('lightbox-full');
                            e.ready();
                        });
                    }
                    modal.find('.prev').toggleClass('show', groups.filter('[data-group-index="' + (id - 1) + '"]').length > 0);
                    modal.find('.next').toggleClass('show', groups.filter('[data-group-index="' + (id + 1) + '"]').length > 0);
                    return false;
                });
            }
        });
    };

    $.fn.lightbox = function(option) {
        var defaultGroup = 'group' + (new Date()).getTime();
        return this.each(function() {
            var $this = $(this);

            var options = typeof option == 'object' && option;
            if(typeof options == 'object' && options.group) {
                $this.attr('data-lightbox-group', options.group);
            } else if($this.data('group')) {
                $this.attr('data-lightbox-group', $this.data('group'));
            } else {
                $this.attr('data-lightbox-group', defaultGroup);
            }
            $this.data('group', $this.data('lightbox-group'));

            var data = $this.data('zui.lightbox');
            if(!data) $this.data('zui.lightbox', (data = new Lightbox(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.lightbox.Constructor = Lightbox;

    $(function() {
        $('[data-toggle="lightbox"]').lightbox();
    });
}(jQuery, window, Math));

