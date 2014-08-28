/* ========================================================================
 * ZUI: modal.trigger.js v1.2.0
 * http://zui.sexy/docs/javascript.html#modals
 * Licensed under MIT
 * ======================================================================== */
+function($)
{
    "use strict";

    if(!$.fn.modal) throw new Error('Modal trigger requires modal.js')

    // ONCE MODAL CLASS DEFINITION
    // ======================
    var ModalTrigger = function(options)
    {
        options      = $.extend(ModalTrigger.DEFAULTS, options);
        this.$modal  = $('#' + options.name);
        this.isShown = false;
        this.options = options;
        this.id      = $.uuid();
    };

    ModalTrigger.DEFAULTS =
    {
        type       : 'custom',
        width      : null, // number, css definition
        size       : null, // 'md', 'sm', 'lg', 'fullscreen'
        height     : 'auto',
        icon       : null,
        name       : 'onceModal',
        fade       : true,
        position   : 'fit',
        showHeader : true,
        delay      : 0,
        backdrop   : true,
        keyboard   : true
    };

    ModalTrigger.prototype.init = function(options)
    {
        var that = this;
        if(options.url)
        {
            if(!options.type || (options.type != 'ajax' && options.type != 'iframe'))
            {
                options.type = 'ajax';
            }
        }
        if(options.remote)
        {
            options.type = 'ajax';
            if(typeof options.remote === 'string') options.url = options.remote;
        }
        else if(options.iframe)
        {
            options.type = 'iframe';
            if(typeof options.iframe === 'string') options.url = options.iframe;
        }

        var $modal = this.$modal;
        if($modal.length)
        {
            if(!this.isShown) $modal.off('.zui.modal');
            $modal.remove();
        }
        $modal = $('<div id="' + options.name + '" class="modal modal-trigger"><div class="icon-spinner icon-spin loader"></div><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h4 class="modal-title"><i class="modal-icon"></i> <span class="modal-title-name"></span></h4></div><div class="modal-body"></div></div></div></div>').appendTo('body');

        var bindEvent = function(optonName, eventName)
        {
            var handleFunc = options[optonName];
            if($.isFunction(handleFunc)) $modal.on(eventName + '.zui.modal', handleFunc);
        };
        bindEvent('onShow', 'show');
        bindEvent('shown', 'shown');
        bindEvent('onHide', 'hide');
        bindEvent('hidden', 'hidden');
        bindEvent('loaded', 'loaded');

        $modal.on('shown.zui.modal', function() {that.isShown = true;})
        $modal.on('hidden.zui.modal', function() {that.isShown = false;})

        this.$modal = $modal.data('zui.modaltrigger', this);
        this.$dialog = $modal.find('.modal-dialog');
    }

    ModalTrigger.prototype.show = function(options)
    {
        options = $.extend({}, this.options, options);
        // console.log('>>> show:' + this.id);
        // console.log(options);
        this.init(options);
        var that    = this,
            $modal  = this.$modal,
            $dialog = this.$dialog,
            custom  = options.custom;
        var $body   = $dialog.find('.modal-body').css('padding', ''),
            $header = $dialog.find('.modal-header'),
            $content= $dialog.find('.modal-content');

        $modal.toggleClass('fade', options.fade)
              .addClass(options.cssClass)
              .toggleClass('modal-md', options.size === 'md')
              .toggleClass('modal-sm', options.size === 'sm')
              .toggleClass('modal-lg', options.size === 'lg')
              .toggleClass('modal-fullscreen', options.size === 'fullscreen')
              .toggleClass('modal-loading', !this.isShown);
        $header.toggle(options.showHeader);
        $header.find('.modal-icon').attr('class', 'modal-icon icon-' + options.icon);
        $header.find('.modal-title-name').html(options.title || '');
        if(options.size && options.size === 'fullscreen')
        {
            options.width  = '';
            options.height = '';
        }

        var readyToShow = function(delay)
        {
            if(typeof delay === 'undefined') delay = 300;
            // $modal.removeClass('fade');
            setTimeout(function()
            {
                $dialog = $modal.find('.modal-dialog');
                if(options.width && options.width != 'auto')
                {
                    $dialog.css('width', options.width);
                }
                if(options.height && options.height != 'auto') $dialog.css('height', options.height);
                that.ajustPosition(options.position);
                // if(options.fade) $modal.addClass('fade');
                $modal.removeClass('modal-loading');
            }, delay);
        };

        if(options.type === 'custom' && custom)
        {
            if($.isFunction(custom))
            {
                $body.html(custom({modal: $modal, options: options, modalTrigger: that, ready: readyToShow}));
            }
            else if(custom instanceof $)
            {
                $body.html(custom.html());
                readyToShow();
            }
            else
            {
                $body.html(custom);
                readyToShow();
            }
        }
        else if(options.url)
        {
            if(options.type === 'iframe')
            {
                $modal.addClass('modal-iframe');
                this.firstLoad = true;
                var iframeName = 'iframe-' + options.name;
                $header.detach();
                $body.detach();
                $content.empty().append($header).append($body);
                $body.css('padding', 0)
                     .html('<iframe id="' + iframeName + '" name="' + iframeName + '" src="' + options.url + '" frameborder="no" allowtransparency="true" scrolling="auto" style="width: 100%; height: 100%; left: 0px;"></iframe>');

                if(options.waittime > 0)
                {
                    that.waitTimeout = setTimeout(readyToShow, options.waittime);
                }

                var frame = document.getElementById(iframeName);
                frame.onload = frame.onreadystatechange = function()
                {
                    if(that.firstLoad) $modal.addClass('modal-loading');
                    if(this.readyState && this.readyState != 'complete') return;
                    that.firstLoad = false;

                    if(options.waittime > 0)
                    {
                        clearTimeout(that.waitTimeout);
                    }

                    try
                    {
                        var frame$ = window.frames[iframeName].$;
                        if(frame$ && options.height === 'auto' && options.size != 'fullscreen')
                        {
                            var $framebody = frame$('body').addClass('body-modal');
                            var ajustFrameSize = function()
                            {
                                $modal.removeClass('fade');
                                var height = $framebody.outerHeight();
                                $body.css('height', height);
                                if(options.fade) $modal.addClass('fade');
                                readyToShow();
                            };

                            $modal.callEvent('loaded.zui.modal', {modalType: 'iframe'});
                            setTimeout(ajustFrameSize, 100);

                            $frameBody.resize(ajustFrameSize);
                        }

                        frame$.extend({closeModal: that.close});
                    }
                    catch(e)
                    {
                        readyToShow();
                    }
                };
            }
            else
            {
                $.get(options.url, function(data)
                {
                    var $data = $(data);
                    if($data.hasClass('modal-dialog'))
                    {
                        $dialog.replaceWith($data);
                    }
                    else if($data.hasClass('modal-content'))
                    {
                        $dialog.find('.modal-content').replaceWith($data);
                    }
                    else
                    {
                        $body.wrapInner($data);
                    }
                    $modal.callEvent('loaded.zui.modal', {modalType: 'ajax'});
                    readyToShow();
                });
            }
        }

        $modal.modal({show: 'show', backdrop: options.backdrop, keyboard: options.keyboard});
    };

    ModalTrigger.prototype.close = function(callback, redirect)
    {
        this.$modal.on('hidden.zui.modal', function()
        {
            if($.isFunction(callback)) callback();

            if(typeof redirect === 'string')
            {
                if(redirect === 'this') window.location.reload();
                else window.location = redirect;
            }
        }).modal('hide');
    };

    ModalTrigger.prototype.toggle = function(options)
    {
        if(this.isShown) this.close();
        else this.show(options);
    };

    ModalTrigger.prototype.ajustPosition = function(position)
    {
        this.$modal.modal('ajustPosition', position || this.options.position);
    };

    window.ModalTrigger = ModalTrigger;
    window.modalTrigger = new ModalTrigger();

    $.fn.modalTrigger = function(option, settings)
    {
        return $(this).each(function()
        {
            var $this = $(this);
            var data    = $this.data('zui.modaltrigger'),
                options = $.extend(
                {
                    title: $this.attr('title') || $this.text(),
                    url  : $this.attr('href'),
                    type : $this.hasClass('iframe') ? 'iframe' : ''
                }, $this.data(), $.isPlainObject(option) && option);
            if(!data) $this.data('zui.modaltrigger', (data = new ModalTrigger(options)));
            if (typeof option == 'string') data[option](settings);
            else if(options.show) data.show(settings);

            $this.on((options.trigger || 'click') + '.toggle.zui.modaltrigger', function(e)
            {
                data.toggle(options);
                if($this.is('a')) e.preventDefault();
            });
        });
    };

    var old = $.fn.modal;
    $.fn.modal = function(option, settings)
    {
        return $(this).each(function()
        {
            var $this = $(this);
            if($this.hasClass('modal')) old.call($this, option, settings);
            else $this.modalTrigger(option, settings);
        });
    };

    function getModal(modal)
    {
        var modalType = typeof(modal);
        if(modalType === 'undefined')
        {
            modal = $('.modal.modal-once');
        }
        else if(modalType === 'string')
        {
            modal = $('#' + modal).replace('##', '#');
        }
        if(modal && (modal instanceof $)) return modal;
        return null;
    }

    window.closeModal = function(callback, redirect, modal)
    {
        modal = getModal(modal);
        if(modal && modal.length)
        {
            modal.each(function()
            {
                $(this).data('zui.modaltrigger').close(callback, redirect);
            });
        }
    };

    window.ajustModalPosition = function(position, modal)
    {
        modal = getModal(modal);
        if(modal && modal.length)
        {
            modal.each(function()
            {
                modal.modal('ajustPosition', position);
                // var $dialog = $(this).find('.modal-dialog');
                // position = position || 'fit';
                // var half = Math.max(0, ($(window).height() - $dialog.outerHeight())/2);
                // var pos  = position == 'fit' ? (half*2/3) : (position == 'center' ? half : position);
                // $dialog.css('margin-top', pos);
            });
        }
    };

    $.extend(
    {
        closeModal         : window.closeModal,
        ajustModalPosition : window.ajustModalPosition
    });

    $(document).on('click.zui.modaltrigger.data-api', '[data-toggle="modal"]', function(e)
    {
        var $this   = $(this);
        var href    = $this.attr('href');
        var $target = null;
        try
        {
            $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')));
        }catch(ex){}
        if(!$target || !$target.length)
        {
            if(!$this.data('zui.modaltrigger'))
            {
                $this.modalTrigger({show: true});
            }
            $this.trigger('.toggle.zui.modaltrigger');
        }
        if($this.is('a')) {e.preventDefault();}
    });
}(window.jQuery);
