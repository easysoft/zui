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
        this._init();
    };

    var DETAULT_ACTIONS = {
        sort: {
            template: '<a class="sort-handler" href="javascript:;"><i class="icon icon-move"></i></a>'
        },
        add: {
            template: '<a href="javascript:;"><i class="icon icon-plus"></i></a>'
        },
        edit: {
            template: '<a href="javascript:;"><i class="icon icon-pencil"></i></a>'
        },
        "delete": {
            template: '<a href="javascript:;"><i class="icon icon-trash"></i></a>'
        }
    };

    function formatActions(actions, parentActions) {
        if(!actions) return parentActions;

        if(actions === true) {
            actions = {add: true, "delete": true, edit: true, sort: true};
        } else if(typeof actions === 'string') {
            actions = actions.split(',');
        }
        var _actions;
        if($.isArray(actions)) {
            _actions = {};
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
            _actions = {};
            $.each(actions, function(name, action) {
                if(action) {
                    _actions[name] = $.extend({type: name}, DETAULT_ACTIONS[name], $.isPlainObject(action) ? action : null);
                }
            });
            actions = _actions;
        }
        return parentActions ? $.extend(true, {}, parentActions, actions) : actions;
    }

    function createActionEle(action, name, template) {
        name = name || action.type;
        return $(template || action.template).addClass('tree-action').attr('data-type', name).data('action', action);
    }

    // default options
    Tree.DEFAULTS = {
        animate: null,
        initialState: 'normal', // 'normal' | 'preserve' | 'expand' | 'collapse',
        toggleTemplate: '<i class="list-toggle icon"></i>',
    };

    Tree.prototype.add = function(rootEle, items) {
        var $e = $(rootEle), $ul;
        if($e.is('li')) {
            $ul = $e.children('ul');
            if(!$ul.length) {
                $ul = $('<ul/>');
                $e.append($ul);
                this._initList($ul, $e);
            }
        } else {
            $ul = $e;
        }

        if($ul) {
            var that = this;
            if(!$.isArray(items)) {
                items = [items];
            }
            $.each(items, function(idx, item) {
                var $li = $('<li/>').data(item).append($('<a/>', {href: item.url || '#'}).text(item.title)).appendTo($ul);
                that._initItem($li, item.idx || idx, $ul, item);
                if(item.children) {
                    that.add($li, item.children);
                }
            });
            this._initList($ul);
        }
    };

    Tree.prototype.remove = function($li) {

    }

    Tree.prototype._initList = function($list, $parentItem, idx, data) {
        var that = this;
        if(!$list.hasClass('tree')) {
            $parentItem = ($parentItem || $list.closest('li')).addClass('has-list');
            if(!$parentItem.find('.list-toggle').length) {
                $parentItem.prepend(this.options.toggleTemplate);
            }
            idx = idx || $parentItem.data('idx');
        } else {
            idx = 0;
            $parentItem = null;
        }
        $list.attr('data-idx', idx || 0).children('li:not(.tree-action-item)').each(function(index) {
            that._initItem($(this), index + 1, $list);
        });
        data = data || ($parentItem ? $parentItem.data() : null);
        var actions = formatActions(data ? data.actions : null, this.actions);
        if(actions) {
            if(actions.add) {
                var $actionItem = $list.children('li.tree-action-item');
                if(!$actionItem.length) {
                    $('<li class="tree-action-item"/>').append(createActionEle(actions.add, 'add', actions.add.templateInList)).appendTo($list);
                } else {
                    $actionItem.detach().appendTo($list);
                }
            }
            if(actions.sort) {
                $list.sortable($.extend({
                    dragCssClass: 'tree-drag-holder', 
                    trigger: '.sort-handler', 
                    selector: 'li:not(.tree-action-item)',
                    finish: function() {
                        that.callEvent('action', {action: actions.sort, list: $list, target: $parentItem, item: data});
                    }
                }, actions.sort.options, $.isPlainObject(this.options.sortable) ? this.options.sortable : null));
            }
        }
        if($parentItem && ($parentItem.hasClass('open') || (data && data.open))) {
            $parentItem.addClass('open in');
        }
    };

    Tree.prototype._initItem = function($item, idx, $parentList, data) {
        if(idx === undefined) {
            var $pre = $item.prev('li');
            idx = $pre.length ? ($pre.data('idx') + 1) : 1;
        }
        $parentList = $parentList || $item.closest('ul');
        $item.attr('data-idx', idx);
        if(!$item.data('id')) {
            var id = idx;
            if(!$parentList.hasClass('tree')) {
                id = $parentList.parent('li').data('id') + '-' + id;
            }
            $item.attr('data-id', id);
        }
        data = data || $item.data();
        var actions = formatActions(data.actions, this.actions);
        if(actions) {
            var $actions = $item.find('.tree-actions');
            if(!$actions.length) {
                $actions = $('<div class="tree-actions"/>').appendTo($item);
                $.each(actions, function(actionName, action) {
                    $actions.append(createActionEle(action, actionName));
                });
            }
        }

        var $children = $item.children('ul');
        if($children.length) {
            this._initList($children, $item, idx, data);
        }
    };

    Tree.prototype._init = function() {
        var options = this.options, that = this;
        this.actions = formatActions(options.actions);

        this.$.addClass('tree');
        if(options.animate) this.$.addClass('tree-animate');

        this._initList(this.$);

        // init data
        if(options.data) {
            this.add(this.$, options.data);
        }

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
            if(this.store.time) {
                this.$.find('li:not(.tree-action-item)').each(function() {
                    var $li= $(this);
                    that[that.store[$li.data('id')] ? 'expand' : 'collapse']($li, true, true);
                });
            }
        }

        // Bind event
        this.$.on('click', '.list-toggle, a[href=#]', function(e) {
            var $li = $(this).parent('li');
            that.callEvent('hit', {target: $li, item: $li.data()});
            that.toggle($li);
            e.preventDefault();
        }).on('click', '.tree-action', function() {
            var $action = $(this);
            var action = $action.data();
            if(action === 'sort') return;
            var $li = $action.closest('li:not(.tree-action-item)');
            that.callEvent('action', {action: action, target: $li, item: $li.data()});
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
        var result;
        if($.isFunction(this.options[name])) {
            result = this.options[name](params, this);
        }
        this.$.trigger($.Event(name + '.' + this.name, params));
        return result;
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

