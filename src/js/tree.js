/* ========================================================================
 * ZUI: tree.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var name = 'zui.tree'; // modal name
    var globalId = 0;

    // The tree modal class
    var Tree = function(element, options) {
        this.name = name;
        this.$ = $(element);

        this.getOptions(options);
        this.init();
    };

    // default options
    Tree.DEFAULTS = {
        animate: null,
        initialState: 'normal' // 'normal' | 'preserve' | 'expand' | 'collapse'
    };

    Tree.prototype.init = function() {
        if(this.options.animate) this.$.addClass('tree-animate');

        this.$lists = this.$.find('ul');
        this.$lists.parent('li').addClass('has-list').prepend('<i class="list-toggle icon"></i>');

        var that = this;
        this.$.on('click', '.list-toggle, a[href=#]', function(e) {
            that.toggle($(this).parent('li'));
            e.preventDefault();
        });

        var initialState = this.options.initialState;

        if(initialState === 'preserve' && (!$.zui || !$.zui.store || !$.zui.store.enable)) {
            initialState = 'normal';
        }

        if(initialState === 'expand') {
            this.expand();
        } else if(initialState === 'collapse') {
            this.collapse();
        } else if(initialState === 'preserve') {
            this.isPreserve = true;
            this.selector = 'zui.tree::#' + (this.$.attr('id') || globalId++);
            this.store = $.zui.store.pageGet(this.selector, {});
            function markLevel($ul, level) {
                if(!$ul.length) return;
                level = level || 1;
                var idx = 1;
                $ul.attr('data-id', level).children('li').each(function() {
                    var $li = $(this);
                    var id = level + '-' + idx;
                    $li.attr('data-id', id);
                    if(that.store.time) that[that.store[id] ? 'expand' : 'collapse']($li, true, true);
                    markLevel($li.children('ul').first(), id);
                    idx++;
                });
            }
            markLevel(this.$);
        }

        if(this.options.animate) {
            this.$.find('li.has-list.open').addClass('in');
        }
    };

    Tree.prototype.preserve = function($li, id, expand) {
        var that = this;
        if($li) {
            id = id || $li.data('id');
            expand = expand === undefined ? $li.hasClass('open') : false;
            if(expand) this.store[id] = expand;
            else delete this.store[id];
            this.store.time = new Date();
            $.zui.store.pageSet(this.selector, this.store);
        } else {
            this.store = {};
            this.$.find('li').each(function() {
                that.store($(this));
            });
        }
    };

    Tree.prototype.expand = function($li, disabledAnimate, notStore) {
        if($li) {
            $li.addClass('open');
            if(!disabledAnimate && this.options.animate) {
                setTimeout(function() {
                    $li.addClass('in');
                }, 10);
            } else {
                $li.addClass('in');
            }
        } else {
            $li = this.$.find('li.has-list').addClass('open in');
        }
        if(!notStore) this.preserve($li);
        this.callEvent('expand', $li, this);
    };

    Tree.prototype.collapse = function($li, disabledAnimate, notStore) {
        if($li) {
            if(!disabledAnimate && this.options.animate) {
                $li.removeClass('in');
                setTimeout(function() {
                    $li.removeClass('open');
                }, 300);
            } else {
                $li.removeClass('open in');
            }
        } else {
            $li = this.$.find('li.has-list').removeClass('open in');
        }
        if(!notStore) this.preserve($li);
        this.callEvent('collapse', $li, this);
    };

    Tree.prototype.toggle = function($li) {
        var collapse = ($li && $li.hasClass('open')) || $li === false || ($li === undefined && this.$.find('li.has-list.open').length);
        this[collapse ? 'collapse' : 'expand']($li);
    };

    // Get and init options
    Tree.prototype.getOptions = function(options) {
        this.options = $.extend({}, Tree.DEFAULTS, this.$.data(), options);
        if(this.options.animate === null && this.$.hasClass('tree-animate')) {
            this.options.animate = true;
        }
    };

    // Call event helper
    Tree.prototype.callEvent = function(name, params) {
        var result = this.$.callEvent(name + '.' + this.name, params, this);
        return !(result.result !== undefined && (!result.result));
    };

    // Extense jquery element
    $.fn.tree = function(option, params) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(name);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(name, (data = new Tree(this, options)));

            if(typeof option == 'string') data[option](params);
        });
    };

    $.fn.tree.Constructor = Tree;

    // Auto call tree after document load complete
    $(function() {
        $('[data-ride="tree"]').tree();
    });
}(jQuery));

