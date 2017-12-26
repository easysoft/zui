/*!
 * ZUI: 标签页管理器 - v1.7.0 - 2017-12-26
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2017 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: tabs.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2017-2018 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var Tab = function(tab) {
        var that = this;
        if(typeof tab === 'string') {
            that.url = tab;
        } else if($.isPlainObject(tab)) {
            $.extend(that, tab);
        }
        if(!that.id) {
            that.id = $.zui.uuid();
        }
        if(!that.type) {
            if(that.iframe) {
                that.type = 'iframe';
                that.url = that.iframe;
            } else if(that.ajax) {
                that.type = 'ajax';
                that.url = $.isPlainObject(that.ajax) ? that.ajax.url : that.ajax;
            } else if(that.custom) {
                that.type = 'custom';
            } else {
                that.type = 'iframe';
            }
        }
        that.createTime = new Date().getTime();

        that.onCreate && that.onCreate.call(that);
    };

    Tab.prototype.open = function() {
        var that = this;
        that.openTime = new Date().getTime();
        that.onOpen && that.onOpen.call(that);
    };

    Tab.prototype.close = function() {
        var that = this;
        that.openTime = 0;
        that.onClose && that.onClose.call(that);
    };

    Tab.create = function(data) {
        if (data instanceof Tab) {
            return data;
        }
        return new Tab(data);
    };

    var NAME = 'zui.tabs'; // model name
    var DEFAULTS = {
        tabs: [],
        defaultTabIcon: 'icon-window'
    };

    var LANG = {
        zh_cn: {
            close: '关闭'
        }
    };

    // The tabs model class
    var Tabs = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        options = that.options = $.extend({}, Tabs.DEFAULTS, this.$.data(), options);
        var lang   = options.lang || 'zh_cn';
        that.lang  = $.isPlainObject(lang) ? ($.extend(true, {}, LANG[lang.lang || $.zui.clientLang()], lang)) : LANG[lang];

        // Initialize here
        var $navbar = that.$.find('.tabs-navbar');
        if (!$navbar.length) {
            $navbar = $('<nav class="tabs-navbar"></nav>').appendTo(that.$);
        }
        that.$navbar = $navbar;

        var $nav = $navbar.find('.tabs-nav');
        if (!$nav.length) {
            $nav = $('<ul class="tabs-nav"></ul>').appendTo($navbar);
        }
        that.$nav = $nav;

        var $tabs = that.$.find('.tabs-container');
        if (!$tabs.length) {
            $tabs = $('<div class="tabs-container"></div>').appendTo(that.$);
        }
        that.$tabs = $tabs;

        that.activeTabId = options.defaultTab;
        var tabs = options.tabs || [];
        that.tabs = {};
        $.each(tabs, function(index, item) {
            var tab = Tab.create(item);
            that.tabs[tab.id] = tab;

            if (!that.activeTabId) {
                that.activeTabId = tab.id;
            }

            that.renderTab(tab);
        });
        that.closedTabs = [];

        that.open(that.getActiveTab());

        $nav.on('click.' + NAME, '.tabs-nav-item', function () {
            that.open(that.getTab($(this).data('id')));
        }).on('click.' + NAME, '.tabs-nav-close', function (e) {
            that.close($(this).closest('.tabs-nav-item').data('id'));
            e.stopPropagation();
        });
    };

    Tabs.prototype.renderTab = function(tab, beforeTabId) {
        var that = this;
        var $nav = that.$nav;
        var $tabNav = $('#tabs-nav-item-' + tab.id);
        if (!$tabNav.length) {
            var $a = $('<a class="tabs-nav-item"><i class="icon"></i><span class="text"></span><i class="close tabs-nav-close" title="' + that.lang.close + '"></i></a>').attr({
                href: '#tabs-item-' + tab.id,
                id: tab.id
            });
            $tabNav = $('<li id="tabs-nav-item-' + tab.id + '" />').append($a).appendTo(that.$nav);
            if (beforeTabId) {
                var $before$nav = $('#tabs-nav-item-' + beforeTabId);
                if ($before$nav.length) {
                    $tabNav.insertAfter($before$nav);
                }
            }
        }
        var $a = $tabNav.find('a').attr('title', tab.desc);
        $a.find('.icon').attr('class', 'icon ' + (tab.icon || that.options.defaultTabIcon));
        $a.find('.text').text(tab.title || '');
        return $tabNav;
    };

    Tabs.prototype.getActiveTab = function() {
        var that = this;
        return that.activeTabId ? that.tabs[that.activeTabId] : null;
    };

    Tabs.prototype.getTab = function(tabId) {
        var that = this;
        if (!tabId) {
            return that.getActiveTab();
        }
        if (typeof tabId === 'object') {
            tabId = tabId.id;
        }
        return that.tabs[tabId];
    };

    Tabs.prototype.close = function(tabId) {
        var that = this;
        var tab = that.getTab(tabId);
        if (tab) {
            $('#tabs-nav-item-' + tab.id).remove();
            $('#tabs-pane-' + tab.id).remove();
            tab.close();
            that.closedTabs.push(tab);
        }
    };

    Tabs.prototype.open = function(tab) {
        var that = this;
        var $tabNav = that.render(tab);
        that.
    };

    Tabs.prototype.refresh = function(tabId) {
    };

    Tabs.prototype.closeOthers = function(tabId) {
    };

    Tabs.prototype.closeRight = function(tabId) {
    };

    Tabs.prototype.closeAll = function() {
    };

    Tabs.prototype.reopen = function() {
    };

    // Extense jquery element
    $.fn.tabs = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Tabs(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    Tabs.NAME = NAME;
    $.fn.tabs.Constructor = Tabs;
}(jQuery));

