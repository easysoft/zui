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
        console.log('this.tree', this);
    };

    var DETAULT_ACTIONS = {
        sort: {
            trigger: '.sort-handler',
            html: '<a class="sort-handle" href=""><i class="icon icon-move"></i></a>'
        },
    };

    function formatActions(actions, parentActions) {
        if(actions === true) {
            actions = {add: true, "delete": true, edit: true, sort: true};
        } else if(typeof actions === 'string') {
            actions = actions.split(',');
        }
        if($.isArray(actions)) {
            var _actions = {};
            $.each(actions, function(idx, action) {
                if($.isPlainObject(action)) {
                    _actions[action.action] = action;
                } else {
                    _actions[action] = true;
                }
            });
            actions = _actions;
        }
        if($.isPlainObject(actions)) {
            var _actions = {};
            $.each(actions, function(name, action) {
                if(action) _actions[name] = $.expand({}, DETAULT_ACTIONS[name], $.isPlainObject(action) ? action : null);
            });
            actions = _actions;
        }
        return parentActions ? $.expand(true, {}, parentActions, actions) : actions;
    }

    // default options
    Tree.DEFAULTS = {
        animate: null,
        initialState: 'normal' // 'normal' | 'preserve' | 'expand' | 'collapse',
    };

    Tree.prototype.add = function($e, items) {
        $e = $($e);
        if($e.is('li')) {
            var $ul = $('<ul/>');
            $e.addClass('')
        } else if($e.is('ul')) {

        }
    };

    Tree.prototype.init = function($e) {
        var options = this.options, that = this;
        if(!$e) {
            this.init(this.$.addClass('tree'));
            if(options.animate) this.$.addClass('tree-animate');
            this.$.on('click', '.list-toggle, a[href=#]', function(e) {
                var $li = $(this).parent('li');
                that.callEvent('hit', {target: $li, item: $li.data('data')});
                that.toggle($li);
                e.preventDefault();
            });
            var initialState = options.initialState;
            if(initialState === 'preserve' && (!$.zui || !$.zui.store || !$.zui.store.enable)) {
                initialState = 'normal';
            }
            if(initialState === 'expand') {
                this.expand();
            } else if(initialState === 'collapse') {
                this.collapse();
            } else if(initialState === 'preserve') {
                this.isPreserve = true;
                this.selector = name + '::' + (options.name || '') + '#' + (this.$.attr('id') || globalId++);
                this.store = $.zui.store[options.name ? 'get' : 'pageGet'](this.selector, {});

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
        } else if($e.is('ul')) {


        } else if($e.is('li')) {

        }
    };

    Tree.prototype.init = function() {
        this.$.addClass('tree');
        var options = this.options;
        if(options.animate) this.$.addClass('tree-animate');

        // init data
        if(options.data) {
            function buildTree($ul, items) {
                $.each(items, function(idx, item) {
                    var $li = $('<li/>').data(item).append($('<a/>', {href: item.url || '#'}).text(item.title));
                    if(item.children) {
                        $li.append(buildTree($('<ul>').toggleClass('open in', item.open), item.children));
                    }
                    $ul.append($li);
                });
                return $ul;
            }
            buildTree(this.$, options.data);
        }

        this.$.find('ul').parent('li').addClass('has-list').prepend('<i class="list-toggle icon"></i>');

        var that = this;
        this.$.on('click', '.list-toggle, a[href=#]', function(e) {
            var $li = $(this).parent('li');
            that.callEvent('hit', {target: $li, item: $li.data('data')});
            that.toggle($li);
            e.preventDefault();
        });

        if(options.animate) {
            this.$.find('li.has-list.open').addClass('in');
        }

        var actions = formatActions(options.actions);
        if($.isPlainObject(actions)) {
            this.actions = actions;
            this._initActionsUI(this.$.find('li'));
        }

        if(options.sortable) {
            var sortOptions = {trigger: '.sort-handler'};
            if($.isPlainObject(options.sortable)) $.expand(sortOptions, options.sortable);
            this.$.find('li').find('a').after('<i class="icon icon-move sort-handler"></i>');
            this.$.sortable(sortOptions).find('ul').sortable(sortOptions);
        }
    };

    Tree.prototype._initActionsUI = function(li, actions) {
        actions = actions || this.actions;
        $(li).each(function() {

        });
    };

    Tree.prototype.preserve = function($li, id, expand) {
        if(!this.isPreserve) return;
        if($li) {
            id = id || $li.data('id');
            expand = expand === undefined ? $li.hasClass('open') : false;
            if(expand) this.store[id] = expand;
            else delete this.store[id];
            this.store.time = new Date();
            $.zui.store[this.options.name ? 'set' : 'pageSet'](this.selector, this.store);
        } else {
            var that = this;
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

