/* ========================================================================
 * ZUI: modal.trigger.js v1.2.0
 * http://zui.sexy/docs/javascript.html#modals
 * Licensed under MIT
 * ======================================================================== */


(function($, window) {
    'use strict';

    if(!$.fn.modal) throw new Error('Modal trigger requires modal.js');

    var NAME = 'zui.modaltrigger',
        STR_AJAX = 'ajax',
        ZUI_MODAL = '.zui.modal',
        STR_STRING = 'string';

    // MODAL TRIGGER CLASS DEFINITION
    // ======================
    var ModalTrigger = function(options, $trigger) {
        options = $.extend({}, ModalTrigger.DEFAULTS, $.ModalTriggerDefaults, $trigger ? $trigger.data() : null, options);
        this.isShown;
        this.$trigger = $trigger;
        this.options = options;
        this.id = $.zui.uuid();

        // todo: handle when: options.show = true
    };

    ModalTrigger.DEFAULTS = {
        type: 'custom',
        // width: null, // number, css definition
        // size: null, // 'md', 'sm', 'lg', 'fullscreen'
        height: 'auto',
        // icon: null,
        name: 'triggerModal',
        fade: true,
        position: 'fit',
        showHeader: true,
        delay: 0,
        // iframeBodyClass: '',
        // onlyIncreaseHeight: false,
        // moveable: false,
        // rememberPos: false,
        backdrop: true,
        keyboard: true,
        waittime: 0,
        loadingIcon: 'icon-spinner-indicator'
    };

    ModalTrigger.prototype.init = function(options) {
        var that = this;
        if(options.url) {
            if(!options.type || (options.type != STR_AJAX && options.type != 'iframe')) {
                options.type = STR_AJAX;
            }
        }
        if(options.remote) {
            options.type = STR_AJAX;
            if(typeof options.remote === STR_STRING) options.url = options.remote;
        } else if(options.iframe) {
            options.type = 'iframe';
            if(typeof options.iframe === STR_STRING) options.url = options.iframe;
        } else if(options.custom) {
            options.type = 'custom';
            if(typeof options.custom === STR_STRING) {
                var $doms;
                try {
                    $doms = $(options.custom);
                } catch(e) {}

                if($doms && $doms.length) {
                    options.custom = $doms;
                } else if($.isFunction(window[options.custom])) {
                    options.custom = window[options.custom];
                }
            }
        }

        var $modal = $('#' + options.name);
        if($modal.length) {
            if(!that.isShown) $modal.off(ZUI_MODAL);
            $modal.remove();
        }
        $modal = $('<div id="' + options.name + '" class="modal modal-trigger">' + (typeof options.loadingIcon === 'string' && options.loadingIcon.indexOf('icon-') === 0 ? ('<div class="icon icon-spin loader ' + options.loadingIcon + '"></div>') : options.loadingIcon) + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h4 class="modal-title"><i class="modal-icon"></i> <span class="modal-title-name"></span></h4></div><div class="modal-body"></div></div></div></div>').appendTo('body').data(NAME, that);

        var bindEvent = function(optonName, eventName) {
            var handleFunc = options[optonName];
            if($.isFunction(handleFunc)) $modal.on(eventName + ZUI_MODAL, handleFunc);
        };
        bindEvent('onShow', 'show');
        bindEvent('shown', 'shown');
        bindEvent('onHide', 'hide');
        bindEvent('hidden', 'hidden');
        bindEvent('loaded', 'loaded');

        $modal.on('shown' + ZUI_MODAL, function() {
            that.isShown = true;
        }).on('hidden' + ZUI_MODAL, function() {
            that.isShown = false;
        });

        this.$modal = $modal;
        this.$dialog = $modal.find('.modal-dialog');

        if(options.mergeOptions) this.options = options;
    };

    ModalTrigger.prototype.show = function(option) {
        var options = $.extend({}, this.options, {url: this.$trigger ? (this.$trigger.attr('href') || this.$trigger.attr('data-url') || this.$trigger.data('url')) : this.options.url}, option);
        this.init(options);
        var that = this,
            $modal = this.$modal,
            $dialog = this.$dialog,
            custom = options.custom;
        var $body = $dialog.find('.modal-body').css('padding', ''),
            $header = $dialog.find('.modal-header'),
            $content = $dialog.find('.modal-content');

        $modal.toggleClass('fade', options.fade)
            .addClass(options.cssClass)
            .toggleClass('modal-loading', !this.isShown);

        $dialog.toggleClass('modal-md', options.size === 'md')
            .toggleClass('modal-sm', options.size === 'sm')
            .toggleClass('modal-lg', options.size === 'lg')
            .toggleClass('modal-fullscreen', options.size === 'fullscreen');

        $header.toggle(options.showHeader);
        $header.find('.modal-icon').attr('class', 'modal-icon icon-' + options.icon);
        $header.find('.modal-title-name').html(options.title || '');
        if(options.size && options.size === 'fullscreen') {
            options.width = '';
            options.height = '';
        }

        var resizeDialog = function() {
            clearTimeout(this.resizeTask);
            this.resizeTask = setTimeout(function() {
                that.ajustPosition();
            }, 100);
        };

        var readyToShow = function(delay, callback) {
            if(typeof delay === 'undefined') delay = options.delay;
            return setTimeout(function() {
                $dialog = $modal.find('.modal-dialog');
                if(options.width && options.width != 'auto') {
                    $dialog.css('width', options.width);
                }
                if(options.height && options.height != 'auto') {
                    $dialog.css('height', options.height);
                    if(options.type === 'iframe') $body.css('height', $dialog.height() - $header.outerHeight());
                }
                that.ajustPosition(options.position);
                $modal.removeClass('modal-loading');

                if(options.type != 'iframe') {
                    $dialog.off('resize.' + NAME).on('resize.' + NAME, resizeDialog);
                }

                callback && callback();
            }, delay);
        };

        if(options.type === 'custom' && custom) {
            if($.isFunction(custom)) {
                var customContent = custom({
                    modal: $modal,
                    options: options,
                    modalTrigger: that,
                    ready: readyToShow
                });
                if(typeof customContent === STR_STRING) {
                    $body.html(customContent);
                    readyToShow();
                }
            } else if(custom instanceof $) {
                $body.html($('<div>').append(custom.clone()).html());
                readyToShow();
            } else {
                $body.html(custom);
                readyToShow();
            }
        } else if(options.url) {
            var onLoadBroken = function() {
                var brokenContent = $modal.callEvent('broken' + ZUI_MODAL, that, that);
                if(brokenContent) {
                    $body.html(brokenContent);
                }
            };

            $modal.attr('ref', options.url);
            if(options.type === 'iframe') {
                $modal.addClass('modal-iframe');
                this.firstLoad = true;
                var iframeName = 'iframe-' + options.name;
                $header.detach();
                $body.detach();
                $content.empty().append($header).append($body);
                $body.css('padding', 0)
                    .html('<iframe id="' + iframeName + '" name="' + iframeName + '" src="' + options.url + '" frameborder="no"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"  allowtransparency="true" scrolling="auto" style="width: 100%; height: 100%; left: 0px;"></iframe>');

                if(options.waittime > 0) {
                    that.waitTimeout = readyToShow(options.waittime, onLoadBroken);
                }

                var frame = document.getElementById(iframeName);
                frame.onload = frame.onreadystatechange = function() {
                    if(that.firstLoad) $modal.addClass('modal-loading');
                    if(this.readyState && this.readyState != 'complete') return;
                    that.firstLoad = false;

                    if(options.waittime > 0) {
                        clearTimeout(that.waitTimeout);
                    }

                    try {
                        $modal.attr('ref', frame.contentWindow.location.href);
                        var frame$ = window.frames[iframeName].$;
                        if(frame$ && options.height === 'auto' && options.size != 'fullscreen') {
                            // todo: update iframe url to ref attribute
                            var $framebody = frame$('body').addClass('body-modal');
                            if(options.iframeBodyClass) $framebody.addClass(options.iframeBodyClass);
                            var ajustFrameSize = function(check) {
                                $modal.removeClass('fade');
                                var height = $framebody.outerHeight();
                                if(check === true && options.onlyIncreaseHeight) {
                                    height = Math.max(height, $body.data('minModalHeight') || 0);
                                    $body.data('minModalHeight', height);
                                }
                                $body.css('height', height);
                                if(options.fade) $modal.addClass('fade');
                                readyToShow();
                            };

                            $modal.callEvent('loaded' + ZUI_MODAL, {
                                modalType: 'iframe',
                                jQuery: frame$
                            }, that);

                            setTimeout(ajustFrameSize, 100);

                            $framebody.off('resize.' + NAME).on('resize.' + NAME, resizeDialog);
                        } else {
                            readyToShow();
                        }

                        frame$.extend({
                            closeModal: window.closeModal
                        });
                    } catch(e) {
                        readyToShow();
                    }
                };
            } else {
                $.get(options.url, function(data) {
                    try {
                        var $data = $(data);
                        if($data.hasClass('modal-dialog')) {
                            $dialog.replaceWith($data);
                        } else if($data.hasClass('modal-content')) {
                            $dialog.find('.modal-content').replaceWith($data);
                        } else {
                            $body.wrapInner($data);
                        }
                    } catch(e) {
                        $modal.html(data);
                    }
                    $modal.callEvent('loaded' + ZUI_MODAL, {
                        modalType: STR_AJAX
                    }, that);
                    readyToShow();
                }).error(onLoadBroken);
            }
        }

        $modal.modal({
            show: 'show',
            backdrop: options.backdrop,
            moveable: options.moveable,
            keyboard: options.keyboard
        });
    };

    ModalTrigger.prototype.close = function(callback, redirect) {
        if(callback || redirect) {
            this.$modal.on('hidden' + ZUI_MODAL, function() {
                if($.isFunction(callback)) callback();

                if(typeof redirect === STR_STRING) {
                    if(redirect === 'this') window.location.reload();
                    else window.location = redirect;
                }
            });
        }
        this.$modal.modal('hide');
    };

    ModalTrigger.prototype.toggle = function(options) {
        if(this.isShown) this.close();
        else this.show(options);
    };

    ModalTrigger.prototype.ajustPosition = function(position) {
        this.$modal.modal('ajustPosition', position || this.options.position);
    };

    $.zui({
        ModalTrigger: ModalTrigger,
        modalTrigger: new ModalTrigger()
    });

    $.fn.modalTrigger = function(option, settings) {
        return $(this).each(function() {
            var $this = $(this);
            var data = $this.data(NAME),
                options = $.extend({
                    title: $this.attr('title') || $this.text(),
                    url: $this.attr('href'),
                    type: $this.hasClass('iframe') ? 'iframe' : ''
                }, $this.data(), $.isPlainObject(option) && option);
            if(!data) $this.data(NAME, (data = new ModalTrigger(options, $this)));
            if(typeof option == STR_STRING) data[option](settings);
            else if(options.show) data.show(settings);

            $this.on((options.trigger || 'click') + '.toggle.' + NAME, function(e) {
                data.toggle(options);
                if($this.is('a')) e.preventDefault();
            });
        });
    };

    var old = $.fn.modal;
    $.fn.modal = function(option, settings) {
        return $(this).each(function() {
            var $this = $(this);
            if($this.hasClass('modal')) old.call($this, option, settings);
            else $this.modalTrigger(option, settings);
        });
    };

    var getModal = function(modal) {
        var modalType = typeof(modal);
        if(modalType === 'undefined') {
            modal = $('.modal.modal-trigger');
        } else if(modalType === STR_STRING) {
            modal = $(modal);
        }
        if(modal && (modal instanceof $)) return modal;
        return null;
    };

    // callback, redirect, modal
    var closeModal = function(modal, callback, redirect) {
        if($.isFunction(modal)) {
            var oldModal = redirect;
            redirect = callback;
            callback = modal;
            modal = oldModal;
        }
        modal = getModal(modal);
        if(modal && modal.length) {
            modal.each(function() {
                $(this).data(NAME).close(callback, redirect);
            });
        }
    };

    var ajustModalPosition = function(position, modal) {
        modal = getModal(modal);
        if(modal && modal.length) {
            modal.modal('ajustPosition', position);
        }
    };

    $.zui({
        closeModal: closeModal,
        ajustModalPosition: ajustModalPosition
    });

    $(document).on('click.' + NAME + '.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr('href');
        var $target = null;
        try {
            $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')));
        } catch(ex) {}
        if(!$target || !$target.length) {
            if(!$this.data(NAME)) {
                $this.modalTrigger({
                    show: true,
                });
            } else {
                $this.trigger('.toggle.' + NAME);
            }
        }
        if($this.is('a')) {
            e.preventDefault();
        }
    });
}(window.jQuery, window));

