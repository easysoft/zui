/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ========================================================================
 * Updates in ZUI：
 * 1. changed event namespace to *.zui.modal
 * 2. added position option to ajust poisition of modal
 * 3. added event 'escaping.zui.modal' with an param 'esc' to judge the esc
 *    key down
 * 4. get moveable options value from '.modal-moveable' on '.modal-dialog'
 * 5. add setMoveable method to make modal dialog moveable
 * ======================================================================== */

+ function($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var zuiname = 'zui.modal'
    var Modal = function(element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$backdrop =
            this.isShown = null
        this.scrollbarWidth = 0

        if(typeof this.options.moveable === 'undefined') {
            this.options.moveable = this.$element.hasClass('modal-moveable');
        }

        if(this.options.remote) {
            this.$element
                .find('.modal-content')
                .load(this.options.remote, $.proxy(function() {
                    this.$element.trigger('loaded.' + zuiname)
                }, this))
        }
    }

    Modal.VERSION = '3.2.0'

    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true,
        // rememberPos: false,
        // moveable: false,
        position: 'fit' // 'center' or '40px' or '10%'
    }

    Modal.prototype.toggle = function(_relatedTarget, position) {
        return this.isShown ? this.hide() : this.show(_relatedTarget, position)
    }

    Modal.prototype.ajustPosition = function(position) {
        if(typeof position === 'undefined') position = this.options.position;
        if(typeof position === 'undefined') return;
        var $dialog = this.$element.find('.modal-dialog');
        // if($dialog.hasClass('modal-dragged')) return;

        var half = Math.max(0, ($(window).height() - $dialog.outerHeight()) / 2);
        var topPos = position == 'fit' ? (half * 2 / 3) : (position == 'center' ? half : position);
        if($dialog.hasClass('modal-moveable')) {
            var pos = null;
            if(this.options.rememberPos) {
                if(this.options.rememberPos === true) {
                    pos = this.$element.data('modal-pos');
                } else if($.zui.store) {
                    pos = $.zui.store.pageGet(zuiname + '.rememberPos');
                }
            }
            if(!pos) {
                pos = {
                    left: Math.max(0, ($(window).width() - $dialog.outerWidth()) / 2),
                    top: topPos
                };
            }
            $dialog.css(pos);
        } else {
            $dialog.css('margin-top', topPos);
        }
    }

    Modal.prototype.setMoveale = function() {
        var that = this;
        var options = that.options;
        var $dialog = that.$element.find('.modal-dialog').removeClass('modal-dragged');
        $dialog.toggleClass('modal-moveable', options.moveable);

        if(!that.$element.data('modal-moveable-setup')) {
            $dialog.draggable({
                container: that.$element,
                handle: '.modal-header',
                before: function() {
                    $dialog.css('margin-top', '').addClass('modal-dragged');
                },
                finish: function(e) {
                    if(options.rememberPos) {
                        that.$element.data('modal-pos', e.pos);
                        if($.zui.store && options.rememberPos !== true) {
                            $.zui.store.pageSet(zuiname + '.rememberPos', e.pos);
                        }
                    }
                }
            });
        }
    }

    Modal.prototype.show = function(_relatedTarget, position) {
        var that = this
        var e = $.Event('show.' + zuiname, {
            relatedTarget: _relatedTarget
        })

        that.$element.trigger(e)

        if(that.isShown || e.isDefaultPrevented()) return

        that.isShown = true

        if(that.options.moveable) that.setMoveale();

        that.checkScrollbar()
        that.$body.addClass('modal-open')

        that.setScrollbar()
        that.escape()

        that.$element.on('click.dismiss.' + zuiname, '[data-dismiss="modal"]', $.proxy(that.hide, that))

        that.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if(!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
                .show()
                .scrollTop(0)

            if(transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element
                .addClass('in')
                .attr('aria-hidden', false)

            that.ajustPosition(position);

            that.enforceFocus()

            var e = $.Event('shown.' + zuiname, {
                relatedTarget: _relatedTarget
            })

            transition ?
                that.$element.find('.modal-dialog') // wait for modal to slide in
                .one('bsTransitionEnd', function() {
                    that.$element.trigger('focus').trigger(e)
                })
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    Modal.prototype.hide = function(e) {
        if(e) e.preventDefault()

        e = $.Event('hide.' + zuiname)

        this.$element.trigger(e)

        if(!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.$body.removeClass('modal-open')

        this.resetScrollbar()
        this.escape()

        $(document).off('focusin.' + zuiname)

        this.$element
            .removeClass('in')
            .attr('aria-hidden', true)
            .off('click.dismiss.' + zuiname)

        $.support.transition && this.$element.hasClass('fade') ?
            this.$element
            .one('bsTransitionEnd', $.proxy(this.hideModal, this))
            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function() {
        $(document)
            .off('focusin.' + zuiname) // guard against infinite focus loop
            .on('focusin.' + zuiname, $.proxy(function(e) {
                if(this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    Modal.prototype.escape = function() {
        if(this.isShown && this.options.keyboard) {
            $(document).on('keydown.dismiss.' + zuiname, $.proxy(function(e) {
                if(e.which == 27) {
                    var et = $.Event('escaping.' + zuiname)
                    var result = this.$element.triggerHandler(et, 'esc')
                    if(result != undefined && (!result)) return
                    this.hide()
                }
            }, this))
        } else if(!this.isShown) {
            $(document).off('keydown.dismiss.' + zuiname)
        }
    }

    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.$element.trigger('hidden.' + zuiname)
        })
    }

    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function(callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''

        if(this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                .appendTo(this.$body)

            this.$element.on('mousedown.dismiss.' + zuiname, $.proxy(function(e) {
                if(e.target !== e.currentTarget) return
                this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this))

            if(doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if(!callback) return

            doAnimate ?
                this.$backdrop
                .one('bsTransitionEnd', callback)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callback()

        } else if(!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ?
                this.$backdrop
                .one('bsTransitionEnd', callbackRemove)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if(callback) {
            callback()
        }
    }

    Modal.prototype.checkScrollbar = function() {
        if(document.body.clientWidth >= window.innerWidth) return
        this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
    }

    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        if(this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    Modal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', '')
    }

    Modal.prototype.measureScrollbar = function() { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }


    // MODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget, position) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data(zuiname)
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if(!data) $this.data(zuiname, (data = new Modal(this, options)))
            if(typeof option == 'string') data[option](_relatedTarget, position)
            else if(options.show) data.show(_relatedTarget, position)
        })
    }

    var old = $.fn.modal

    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }


    // MODAL DATA-API
    // ==============

    $(document).on('click.' + zuiname + '.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = null
        try {
            // strip for ie7
            $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')));
        } catch(ex) {
            return
        }
        if(!$target.length) return;
        var option = $target.data(zuiname) ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())

        if($this.is('a')) e.preventDefault()

        $target.one('show.' + zuiname, function(showEvent) {
            // only register focus restorer if modal will actually get shown
            if(showEvent.isDefaultPrevented()) return
            $target.one('hidden.' + zuiname, function() {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this, $this.data('position'))
    })

}(jQuery);

