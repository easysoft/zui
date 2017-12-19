/* ========================================================================
 * ZUI: pager.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2017-2018 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var NAME = 'zui.pager'; // model name

    var DEFAULT_PAGER = {
        page: 0,        // current page index
        recTotal: 0,    // records total count
        recPerPage: 10, // records count per page
    };

    var LANG = {
        zh_cn: {
            prev: '上一页',
            next: '下一页',
            goto: '跳转',
            pageOf: '第 <strong>{page}</strong> 页',
            totalPage: '共 <strong>{totalPage}</strong> 页',
            totalCount: '共 <strong>{recTotal}</strong> 项',
            pageSize: '每页 <strong>{recPerPage}</strong> 项',
            itemsRange: '第 <strong>{start}</strong> ~ <strong>{end}</strong> 项',
            pageOfTotal: '第 <strong>{page}</strong>/<strong>{totalPage}</strong> 页'
        }
    };

    // The pager model class
    var Pager = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        options = that.options = $.extend({}, Pager.DEFAULTS, this.$.data(), options);

        var lang   = options.lang || 'zh_cn';
        that.lang  = $.isPlainObject(lang) ? ($.extend(true, {}, LANG[lang.lang || $.zui.clientLang()], lang)) : LANG[lang];

        that.state = {};

        that.set(options.page, options.recTotal, options.recPerPage);
    };

    Pager.prototype.set = function(page, recTotal, recPerPage) {
        var that = this;
        if (typeof page === 'object') {
            recPerPage = page.recPerPage;
            recTotal = page.recTotal;
            page = page.page;
        }
        var state = that.state;
        if (!state) {
            state = $.extend({}, DEFAULT_PAGER);
        }
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
        return that.render();
    };

    Pager.prototype.createLinkItem = function(page, text) {
        var that = this;
        if (text === undefined) {
            text = page;
        }
        return $('<a/>').attr('href', page ? that.createLink(page, that.state) : '###').html(text).toggleClass('disabled', !page).toggleClass('active', page === that.state.page);
    };

    Pager.prototype.createNavItems = function(maxCount) {
        var that = this;
        var $nav = that.$;
        var pager = that.state;
        var totalPage = pager.totalPage;
        var page = pager.page;
        var appendItem = function(p, to) {
            if(p === false) {
                $nav.append($('<li />').append(that.createLinkItem(0, to || '<i class="icon icon-ellipsis-h"></i>')));
                return;
            }
            if(to === undefined) to = p;
            for(var i = p; i <= to; ++i) {
                $nav.append($('<li />').append(that.createLinkItem(i)));
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

    };

    Pager.prototype.createElement = function(element, $pager, pager) {
        var that = this;
        var createLinkItem= that.createLinkItem.bind(that);
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
            case 'space':
            case '|':
                return $('<li class="space" />');
            case 'nav':
            case 'pages':
                that.createNavItems();
                return;
            case 'total_text':
                return $(('<div>' + lang.totalCount + '</div>').format(pager));
            case 'page_text':
                return $(('<div>' + lang.pageOf + '</div>').format(pager));
            case 'total_page_text':
                return $(('<div>' + lang.totalPage + '</div>').format(pager));
            case 'page_of_total_text':
                return $(('<div>' + lang.pageOfTotal + '</div>').format(pager));
            case 'page_size_text':
                return $(('<div>' + lang.pageSize + '</div>').format(pager));
            case 'items_range_text':
                return $(('<div>' + lang.itemsRange + '</div>').format(pager));
            case 'goto':
                return that.createGoto();
            default:
                return $('<li/>').html(element);
        }
    };

    Pager.prototype.createLink = function(page, pager) {
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
            if ($element instanceof $) {
                if ($element[0].tagName !== 'LI') {
                    $element = $('<li/>').append($element);
                }
                that.$.append($element);
            }
        }
        return that;
    };

    // default options
    Pager.DEFAULTS = $.extend({
        elements: ['prev_icon', 'pages', 'next', 'goto', '|', 'total_text', 'page_text', 'total_page_text', 'page_of_total_text', 'page_size_text', 'items_range_text'],
        prevIcon: 'icon-double-angle-left',
        nextIcon: 'icon-double-angle-right',
        maxNavCount: 10
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
}(jQuery));

