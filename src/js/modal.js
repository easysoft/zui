/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 *
 * ZUI: The file has been changed in ZUI. It will not keep update with the
 * Bootsrap version in the future.
 * http://zui.sexy
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
 * 6. add options.onSetScrollbar
 * ======================================================================== */

+ function($, undefined) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var zuiname = 'zui.modal'
    var Modal = function(element, options) {
        var that = this;
        that.options = options
        that.$body = $(document.body)
        that.$element = $(element)
        that.$backdrop =
            that.isShown = null
        that.scrollbarWidth = 0

        if(options.moveable === undefined) {
            that.options.moveable = that.$element.hasClass('modal-moveable');
        }

        if(options.remote) {
            that.$element
                .find('.modal-content')
                .load(options.remote, function() {
                    that.$element.trigger('loaded.' + zuiname)
                })
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
        position: 'fit', // 'center' or '40px' or '10%',
        // scrollInside: false,
        // headerHeight: 'auto',
    };

    var setDialogPos = function($dialog, pos) {
        var $window = $(window);
        pos.left = Math.max(0, Math.min(pos.left, $window.width() - $dialog.outerWidth()));
        pos.top = Math.max(0, Math.min(pos.top, $window.height() - $dialog.outerHeight()));
        $dialog.css(pos);
    };

    Modal.prototype.toggle = function(_relatedTarget, position) {
        return this.isShown ? this.hide() : this.show(_relatedTarget, position)
    }

    Modal.prototype.ajustPosition = function(position) {
        var that = this;
        var options = that.options;
        if(position === undefined) position = options.position;
        if(position === undefined || position === null) return;
        if ($.isFunction(position)) {
            position = position(that);
        }
        var $dialog = that.$element.find('.modal-dialog');
        var winHeight = $(window).height();

        var bodyCss = {maxHeight: 'initial', overflow: 'visible'};
        var $body = $dialog.find('.modal-body').css(bodyCss);
        if (options.scrollInside) {
            var headerHeight = options.headerHeight;
            if (typeof headerHeight !== 'number') {
                headerHeight = $dialog.find('.modal-header').height();
            } else if ($.isFunction(headerHeight)) {
                headerHeight = headerHeight($header);
            }
            bodyCss.maxHeight = winHeight - headerHeight;
            bodyCss.overflow = $body[0].scrollHeight > bodyCss.maxHeight ? 'auto' : 'visible';
        }
        $body.css(bodyCss);

        var half = Math.max(0, (winHeight - $dialog.outerHeight()) / 2);
        if (position === 'fit') {
            position = {top: half > 50 ? Math.floor(half * 2 / 3) : half};
        } else if (position === 'center') {
            position = {top: half};
        } else if (!$.isPlainObject(position)) {
            position = {top: position};
        }

        if($dialog.hasClass('modal-moveable')) {
            var pos = null;
            var rememberPos = options.rememberPos;
            if(rememberPos) {
                if(rememberPos === true) {
                    pos = that.$element.data('modal-pos');
                } else if($.zui.store) {
                    pos = $.zui.store.pageGet(zuiname + '.rememberPos.' + rememberPos);
                }
            }
            position = $.extend(position, {left: Math.max(0, ($(window).width() - $dialog.outerWidth()) / 2)}, pos);
            if (options.moveable === 'inside') {
                setDialogPos($dialog, position);
            } else {
                $dialog.css(position);
            }
        } else {
            $dialog.css(position);
        }
    }

    Modal.prototype.setMoveale = function() {
        if(!$.fn.draggable) console.error('Moveable modal requires draggable.js.');
        var that = this;
        var options = that.options;
        var $dialog = that.$element.find('.modal-dialog').removeClass('modal-dragged');
        $dialog.toggleClass('modal-moveable', !!options.moveable);

        if(!that.$element.data('modal-moveable-setup')) {
            $dialog.draggable({
                container: that.$element,
                handle: '.modal-header',
                before: function() {
                    var marginTop = $dialog.css('margin-top');
                    if (marginTop && marginTop !== '0px') {
                        $dialog.css('top', marginTop).css('margin-top', '').addClass('modal-dragged');
                    }
                },
                finish: function(e) {
                    var rememberPos = options.rememberPos;
                    if(rememberPos) {
                        that.$element.data('modal-pos', e.pos);
                        if($.zui.store && rememberPos !== true) {
                            $.zui.store.pageSet(zuiname + '.rememberPos.' + rememberPos, e.pos);
                        }
                    }
                },
                move: options.moveable === 'inside' ? function (dragPos) {
                    setDialogPos($dialog, dragPos);
                } : true
            });
        }
    }

    Modal.prototype.show = function(_relatedTarget, position) {
        var that = this
        var e = $.Event('show.' + zuiname, {
            relatedTarget: _relatedTarget
        })

        that.$element.trigger(e)

        that.$element.toggleClass('modal-scroll-inside', !!that.options.scrollInside);

        if(that.isShown || e.isDefaultPrevented()) return

        that.isShown = true

        if(that.options.moveable) that.setMoveale();

        that.checkScrollbar()
        if (that.options.backdrop !== false) {
            that.$body.addClass('modal-open')
            that.setScrollbar()
        }

        that.escape()

        that.$element.on('click.dismiss.' + zuiname, '[data-dismiss="modal"]',function(e) {
            that.hide();
            e.stopPropagation();
        })

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
        if(e && e.preventDefault) e.preventDefault()

        var that = this;

        e = $.Event('hide.' + zuiname)

        that.$element.trigger(e)

        if(!that.isShown || e.isDefaultPrevented()) return

        that.isShown = false

        if (that.options.backdrop !== false) {
            that.$body.removeClass('modal-open')
            that.resetScrollbar()
        }

        that.escape()

        $(document).off('focusin.' + zuiname)

        that.$element
            .removeClass('in')
            .attr('aria-hidden', true)
            .off('click.dismiss.' + zuiname)

        $.support.transition && that.$element.hasClass('fade') ?
            that.$element
            .one('bsTransitionEnd', $.proxy(that.hideModal, that))
            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            that.hideModal()
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
        if(this.scrollbarWidth) {
            var paddingRight = bodyPad + this.scrollbarWidth;
            this.$body.css('padding-right', paddingRight)
            if (this.options.onSetScrollbar) {
                this.options.onSetScrollbar(paddingRight)
            }
        }
    }

    Modal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', '')
        if (this.options.onSetScrollbar) {
            this.options.onSetScrollbar('')
        }
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

}(jQuery, undefined);
