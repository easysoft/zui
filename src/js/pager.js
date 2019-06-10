/* ========================================================================
 * ZUI: pager.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2017-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, undefined) {
    'use strict';

    var NAME = 'zui.pager'; // model name

    var DEFAULT_PAGER = {
        page: 1,        // current page index
        recTotal: 0,    // records total count
        recPerPage: 10, // records count per page
    };

    var LANG = {
        zh_cn: {
            pageOfText: '第 {0} 页',
            prev: '上一页',
            next: '下一页',
            first: '第一页',
            last: '最后一页',
            goto: '跳转',
            pageOf: '第 <strong>{page}</strong> 页',
            totalPage: '共 <strong>{totalPage}</strong> 页',
            totalCount: '共 <strong>{recTotal}</strong> 项',
            pageSize: '每页 <strong>{recPerPage}</strong> 项',
            itemsRange: '第 <strong>{start}</strong> ~ <strong>{end}</strong> 项',
            pageOfTotal: '第 <strong>{page}</strong>/<strong>{totalPage}</strong> 页'
        },
        zh_tw: {
            pageOfText: '第 {0} 頁',
            prev: '上一頁',
            next: '下一頁',
            first: '第一頁',
            last: '最後一頁',
            goto: '跳轉',
            pageOf: '第 <strong>{page}</strong> 頁',
            totalPage: '共 <strong>{totalPage}</strong> 頁',
            totalCount: '共 <strong>{recTotal}</strong> 項',
            pageSize: '每頁 <strong>{recPerPage}</strong> 項',
            itemsRange: '第 <strong>{start}</strong> ~ <strong>{end}</strong> 項',
            pageOfTotal: '第 <strong>{page}</strong>/<strong>{totalPage}</strong> 頁'
        },
        en: {
            pageOfText: 'Page {0}',
            prev: 'Prev',
            next: 'Next',
            first: 'First',
            last: 'Last',
            goto: 'Goto',
            pageOf: 'Page <strong>{page}</strong>',
            totalPage: '<strong>{totalPage}</strong> pages',
            totalCount: 'Total: <strong>{recTotal}</strong> items',
            pageSize: '<strong>{recPerPage}</strong> per page',
            itemsRange: 'From <strong>{start}</strong> to <strong>{end}</strong>',
            pageOfTotal: 'Page <strong>{page}</strong> of <strong>{totalPage}</strong>'
        }
    };

    // The pager model class
    var Pager = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        options = that.options = $.extend({}, Pager.DEFAULTS, this.$.data(), options);

        var lang   = options.lang || $.zui.clientLang();
        that.lang  = $.isPlainObject(lang) ? ($.extend(true, {}, LANG[lang.lang || $.zui.clientLang()], lang)) : LANG[lang];

        that.state = {};

        that.set(options.page, options.recTotal, options.recPerPage, true);

        that.$.on('click', '.pager-goto-btn', function() {
            var $goto = $(this).closest('.pager-goto');
            var page = parseInt($goto.find('.pager-goto-input').val());
            if (page !== NaN) {
                that.set(page);
            }
        }).on('click', '.pager-item', function() {
            var page = $(this).data('page');
            if (typeof page === 'number' && page > 0) {
                that.set(page);
            }
        }).on('click', '.pager-size-menu [data-size]', function() {
            var size = $(this).data('size');
            if (typeof size === 'number' && size > 0) {
                that.set(-1, -1, size);
            }
        });
    };

    Pager.prototype.set = function(page, recTotal, recPerPage, notTiggerChange) {
        var that = this;
        if (typeof page === 'object' && page !== null) {
            recPerPage = page.recPerPage;
            recTotal = page.recTotal;
            page = page.page;
        }
        var state = that.state;
        if (!state) {
            state = $.extend({}, DEFAULT_PAGER);
        }
        var oldState = $.extend({}, state);
        if (typeof recPerPage === 'number' && recPerPage > 0) {
            state.recPerPage = recPerPage;
        }
        if (typeof recTotal === 'number' && recTotal >= 0) {
            state.recTotal = recTotal;
        }
        if (typeof page === 'number' && page >= 0) {
            state.page = page;
        }
        state.totalPage = (state.recTotal && state.recPerPage) ? (Math.ceil(state.recTotal / state.recPerPage)) : 1;
        state.page = Math.max(0, Math.min(state.page, state.totalPage));
        // stateRecCount is items count in current page
        state.pageRecCount = state.recTotal;
        if (state.page && state.recTotal) {
            if (state.page < state.totalPage) {
                state.pageRecCount = state.recPerPage;
            } else if (state.page > 1) {
                state.pageRecCount = state.recTotal - (state.recPerPage * (state.page - 1));
            }
        }
        state.skip  = state.page > 1 ? ((state.page - 1) * state.recPerPage) : 0;
        state.start = state.skip + 1;
        state.end   = state.skip + state.pageRecCount;
        state.prev  = state.page > 1 ? (state.page - 1) : 0;
        state.next  = state.page < state.totalPage ? (state.page + 1) : 0;
        that.state  = state;
        if (!notTiggerChange && (oldState.page !== state.page || oldState.recTotal !== state.recTotal || oldState.recPerPage !== state.recPerPage)) {
            that.$.callComEvent(that, 'onPageChange', [state, oldState]);
        }
        return that.render();
    };

    Pager.prototype.createLinkItem = function(page, text, asAElement) {
        var that = this;
        if (text === undefined) {
            text = page;
        }
        var $ele = $('<a title="' + that.lang.pageOfText.format(page) + '" class="pager-item" data-page="' + page + '"/>').attr('href', page ? that.createLink(page, that.state) : '###').html(text);
        if (!asAElement) {
            $ele = $('<li />').append($ele).toggleClass('active', page === that.state.page).toggleClass('disabled', !page || page === that.state.page);
        }
        return $ele;
    };

    Pager.prototype.createNavItems = function(maxCount) {
        var that = this;
        var $nav = that.$;
        var pager = that.state;
        var totalPage = pager.totalPage;
        var page = pager.page;
        var appendItem = function(p, to) {
            if(p === false) {
                $nav.append(that.createLinkItem(0, to || that.options.navEllipsisItem));
                return;
            }
            if(to === undefined) to = p;
            for(var i = p; i <= to; ++i) {
                $nav.append(that.createLinkItem(i));
            }
        };
        if (maxCount === undefined) {
            maxCount = that.options.maxNavCount || 10;
        }
        appendItem(1);
        if(totalPage > 1) {
            if(totalPage <= maxCount) {
                appendItem(2, totalPage);
            }
            else if(page < (maxCount - 2)) {
                appendItem(2, maxCount - 2);
                appendItem(false);
                appendItem(totalPage);
            }
            else if(page > (totalPage - maxCount + 2)) {
                appendItem(false);
                appendItem((totalPage - maxCount + 2), totalPage);
            }
            else {
                appendItem(false);
                appendItem(page - Math.ceil((maxCount-4)/2), page + Math.floor((maxCount-4)/2));
                appendItem(false);
                appendItem(totalPage);
            }
        }
    };

    Pager.prototype.createGoto = function() {
        var that = this;
        var pager = this.state;
        var $goto = $('<div class="input-group pager-goto" style="width: ' + (35 + (pager.page + '').length * 9 + 25 + that.lang.goto.length*12) + 'px"><input value="' + pager.page + '" type="number" min="1" max="' + pager.totalPage + '" placeholder="' + pager.page + '" class="form-control pager-goto-input"><span class="input-group-btn"><button class="btn pager-goto-btn" type="button">' + that.lang.goto + '</button></span></div>');
        return $goto;
    };

    Pager.prototype.createSizeMenu = function() {
        var that = this;
        var pager = this.state;
        var $menu = $('<ul class="dropdown-menu"></ul>');
        var options = that.options.pageSizeOptions;
        if (typeof options === 'string') {
            options = options.split(',');
        }
        for (var i = 0; i < options.length; ++i) {
            var size = options[i];
            if (typeof size === 'string') {
                size = parseInt(size);
            }
            var $li = $('<li><a href="###" data-size="' + size + '">' + size + '</a></li>').toggleClass('active', size === pager.recPerPage);
            $menu.append($li);
        }
        return $('<div class="btn-group pager-size-menu"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' + that.lang.pageSize.format(pager) + ' <span class="caret"></span></button></div>').addClass(that.options.menuDirection).append($menu);
    };

    Pager.prototype.createElement = function(element, $pager, pager) {
        var that = this;
        var createLinkItem= $.proxy(that.createLinkItem, that);
        var lang = that.lang;
        switch (element) {
            case 'prev':
                return createLinkItem(pager.prev, lang.prev);
            case 'prev_icon':
                return createLinkItem(pager.prev, '<i class="icon ' + that.options.prevIcon + '"></i>');
            case 'next':
                return createLinkItem(pager.next, lang.next);
            case 'next_icon':
                return createLinkItem(pager.next, '<i class="icon ' + that.options.nextIcon + '"></i>');
            case 'first':
                return createLinkItem(1, lang.first);
            case 'first_icon':
                return createLinkItem(1, '<i class="icon ' + that.options.firstIcon + '"></i>');
            case 'last':
                return createLinkItem(pager.totalPage, lang.last);
            case 'last_icon':
                return createLinkItem(pager.totalPage, '<i class="icon ' + that.options.lastIcon + '"></i>');
            case 'space':
            case '|':
                return $('<li class="space" />');
            case 'nav':
            case 'pages':
                that.createNavItems();
                return;
            case 'total_text':
                return $(('<div class="pager-label">' + lang.totalCount + '</div>').format(pager));
            case 'page_text':
                return $(('<div class="pager-label">' + lang.pageOf + '</div>').format(pager));
            case 'total_page_text':
                return $(('<div class="pager-label">' + lang.totalPage + '</div>').format(pager));
            case 'page_of_total_text':
                return $(('<div class="pager-label">' + lang.pageOfTotal + '</div>').format(pager));
            case 'page_size_text':
                return $(('<div class="pager-label">' + lang.pageSize + '</div>').format(pager));
            case 'items_range_text':
                return $(('<div class="pager-label">' + lang.itemsRange + '</div>').format(pager));
            case 'goto':
                return that.createGoto();
            case 'size_menu':
                return that.createSizeMenu();
            default:
                return $('<li/>').html(element.format(pager));
        }
    };

    Pager.prototype.createLink = function(page, pager) {
        if (page === undefined) {
            page = this.state.page;
        }
        if (pager === undefined) {
            pager = this.state;
        }
        var linkCreator = this.options.linkCreator;
        if (typeof linkCreator === 'string') {
            return linkCreator.format($.extend({}, pager, {page: page}));
        } else if ($.isFunction(linkCreator)) {
            return linkCreator(page, pager);
        }
        return '#page=' + page;
    };

    Pager.prototype.render = function(elements) {
        var that = this;
        var state = that.state;
        var createElement = that.options.elementCreator || that.createElement;
        var isMapperCreator = $.isPlainObject(createElement);

        elements = elements || that.elements || that.options.elements;
        if (typeof elements == 'string') {
            elements = elements.split(',');
        }
        that.elements = elements;

        that.$.empty();

        for(var i = 0; i < elements.length; ++i) {
            var element  = $.trim(elements[i]);
            var creator = isMapperCreator ? (createElement[element] || createElement) : createElement;
            var $element = creator.call(that, element, that.$, state);
            if ($element === false) {
                $element = that.createElement(element, that.$, state);
            }
            if ($element instanceof $) {
                if ($element[0].tagName !== 'LI') {
                    $element = $('<li/>').append($element);
                }
                that.$.append($element);
            }
        }

        // Fix page item border
        var $lastItem = null;
        that.$.children('li').each(function() {
            var $li = $(this);
            var isItem = !!$li.children('.pager-item').length;
            if ($lastItem) {
                $lastItem.toggleClass('pager-item-right', !isItem);
            } else {
                if (isItem) {
                    $li.addClass('pager-item-left');
                }
            }
            $lastItem = isItem ? $li : null;
        });
        if ($lastItem) {
            $lastItem.addClass('pager-item-right');
        }

        that.$.callComEvent(that, 'onRender', [state]);
        return that;
    };

    // default options
    Pager.DEFAULTS = $.extend({
        elements: ['first_icon', 'prev_icon', 'pages', 'next_icon', 'last_icon', 'page_of_total_text', 'items_range_text', 'total_text'],
        prevIcon: 'icon-double-angle-left',
        nextIcon: 'icon-double-angle-right',
        firstIcon: 'icon-step-backward',
        lastIcon: 'icon-step-forward',
        navEllipsisItem: '<i class="icon icon-ellipsis-h"></i>',
        maxNavCount: 10,
        menuDirection: 'dropdown', // or dropup
        pageSizeOptions: [10, 20, 30, 50, 100],
        // onPageChange: null
    }, DEFAULT_PAGER);

    // Extense jquery element
    $.fn.pager = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Pager(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    Pager.NAME = NAME;

    $.fn.pager.Constructor = Pager;

    // Auto call pager after document load complete
    $(function() {
        $('[data-ride="pager"]').pager();
    });
}(jQuery, undefined));
