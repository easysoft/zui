/*!
 * ZUI: 步骤查看组件 - v1.9.1 - 2019-06-03
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2019 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: guide-viewer.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2017-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var NAME = 'zui.guideViewer'; // model name

    // The guide-viewer model class
    var GuideViewer = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        options = that.options = $.extend({}, GuideViewer.DEFAULTS, this.$.data(), options);
        var lang = this.lang = options.langs[options.lang] || options.langs[Boards.DEFAULTS.lang];

        var groupName = that.groupName = options.name || options.guideViewer;
        var $elements = $('[data-guide-viewer="' + groupName + '"],[data-guide-viewer][data-name="' + groupName + '"]').not('.guide-viewer-inited');
        if (!$elements.length) {
            return;
        }

        // Init guide viewer elements
        var id = that.id = (options.id || $.zui.uuid());
        var $viewer = $(options.template || '<div class="guide-viewer panel"><div class="carousel"><div class="carousel-inner"></div></div><div class="guide-viewer-navs panel-footer" style="display: table; width: 100%; padding: 3px;"><a class="guide-viewer-nav prev disabled" data-slide="prev" style="width: 80px">' + (options.prevStepIcon ? ('<i class="icon ' + options.prevStepIcon + '" style="opacity: .5"></i> ') : '') + lang.prevStep + '</a><div class="guide-viewer-title text-center"><div class="text"></div></div><a class="guide-viewer-nav next text-right" data-slide="next" style="width: 80px">' + lang.nextStep + (options.nextStepIcon ? ('<i class="icon ' + options.nextStepIcon + '" style="opacity: .5"></i> ') : '') + '</a></div></div>');
        var $carousel = $viewer.find('.carousel').attr('id', 'carousel-' + id).toggleClass('slide', !!options.slide).css({margin: 0});
        var $carouselInner = $viewer.find('.carousel-inner');
        $viewer.find('.guide-viewer-nav').attr('href', '#carousel-' + id);
        var $nav = $viewer.find('.guide-viewer-navs');

        if (options.navPos === 'top') {
            $nav.insertBefore($carousel).removeClass('panel-footer').addClass('panel-heading');
        }
        var $navItems = $nav.children().css({
            display: 'table-cell',
            padding: '3px 8px',
            verticalAlign: 'middle',
        });
        var $title = $navItems.filter('.guide-viewer-title').find('.text');
        var $prevNav = $navItems.filter('.guide-viewer-nav.prev');
        var $nextNav = $navItems.filter('.guide-viewer-nav.next');

        $carousel.on('slide.zui.carousel', function(e) {
            var $item = $(e.relatedTarget);
            var title = $item.data('title') || '';
            $title.text(title);
            $prevNav.toggleClass('disabled', !$item.prev().length);
            $nextNav.toggleClass('disabled', !$item.next().length);
        }).carousel($.extend({
            wrap: false,
            interval: false,
        }, typeof options.carousel === 'string' ? $.parseJSON(options.carousel) : options.carousel));

        var isFixedHeight = typeof options.height === 'number';
        var isLightboxEnable = options.lightbox && $.fn.lightbox;
        $elements.each(function(index) {
            var $element = $(this);
            var $item = $('<div class="item"></div>');
            var itemData = $.extend({title: $element.attr('alt') || $element.attr('title')}, $element.data());
            if (!index) {
                $item.addClass('active');
                $title.text(itemData.title);
            }
            var $elementCopy = $element.clone().attr('data-guide-viewer', null).removeClass('hidden');
            if (isFixedHeight) {
                $item.css({
                    height: options.height,
                    overflowY: 'auto'
                });
            }
            if ($elementCopy.is('img')) {
                $item.addClass('is-img');
                $elementCopy.css({
                    margin: '0 auto',
                    border: 'none',
                });
                if (isFixedHeight) {
                    $item.css({
                        lineHeight: options.height + 'px',
                        textAlign: 'center'
                    });
                    $elementCopy.css({display: 'inline-block', width: 'auto', minWidth: 0});
                }
                if (isLightboxEnable) {
                    $elementCopy.attr({
                        'data-toggle': 'lightbox',
                        'data-caption': itemData.title,
                        'data-group': 'lightbox-for-guide-viewer-' + groupName,
                        'data-height': null
                    });
                }
            }
            $item.data(itemData).append($elementCopy).appendTo($carouselInner);
            $element.hide().addClass('guide-viewer-inited');
        });
        if (isLightboxEnable) {
            $viewer.find('[data-toggle="lightbox"]').lightbox();
        }
        $viewer.insertAfter(that.$);

        if (options.defaultPos) {
            $carousel.data('zui.carousel').to(options.defaultPos);
        }
    };

    // default options
    GuideViewer.DEFAULTS = {
        // defaultPos: 0,
        lang: $.zui.clientLang(),
        lightbox: false,
        prevStepIcon: 'icon-chevron-left',
        nextStepIcon: 'icon-chevron-right',
        navPos: 'bottom',
        height: 'auto', // full, max, 500
        langs: {
            'zh_cn': {
                prevStep: '上一步',
                nextStep: '下一步',
            },
            'zh_tw': {
                prevStep: '上一步',
                nextStep: '下一步',
            },
            'en': {
                prevStep: 'Prev Step',
                nextStep: 'Next Step',
            }
        }
    };

    // Extense jquery element
    $.fn.guideViewer = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            if ($this.hasClass('guide-viewer-inited') || (data && data[NAME])) {
                return;
            }
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new GuideViewer(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    GuideViewer.NAME = NAME;

    $.fn.guideViewer.Constructor = GuideViewer;

    // Auto call guideViewer after document load complete
    $(function() {
        $('[data-guide-viewer]').guideViewer();
    });
}(jQuery));

