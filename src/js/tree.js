/* ========================================================================
 * ZUI: tree.js [1.4.0+]
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var name = 'zui.tree'; // modal name
    var globalId = 0;

    function escape(unsafe) {
        return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    }

    // The tree modal class
    var Tree = function(element, options) {
        this.name = name;
        this.$ = $(element);
        this.$ulTmp = $('<ul/>');
        this.getOptions(options);
        this._init();
    };

    Tree.escape = escape;

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
        if(actions === false) return actions;
        if(!actions) return parentActions;

        if(actions === true) {
            actions = {add: true, "delete": true, edit: true, sort: true};
        } else if(typeof actions === 'string') {
            actions = actions.split(',');
        }
        var _actions;
        if(Array.isArray(actions)) {
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
                } else {
                    _actions[name] = false;
                }
            });
            actions = _actions;
        }
        return parentActions ? $.extend(true, {}, parentActions, actions) : actions;
    }

    function createActionEle(action, name, template) {
        name = name || action.type;
        return $(template || action.template).addClass('tree-action').attr($.extend({'data-type': name, title: action.title || ''}, action.attr)).data('action', action);
    }

    // default options
    Tree.DEFAULTS = {
        animate: null,
        initialState: 'normal', // 'normal' | 'preserve' | 'expand' | 'collapse', 'active',
        toggleTemplate: '<i class="list-toggle icon"></i>',

        // sortable: false, //
        itemConverter: null, // function(item) {}
    };

    Tree.prototype.add = function(ele, items, parent, $ul, $parent, isRoot) {
        var gid = $.guid++;
        var that = this;
        var $e = $(ele), options = that.options, needAppendUl;
        if(!$ul) {
            if($e.prop('tagName') === 'UL') {
                $ul = $e;
            } else {
                $ul = $e.children('ul');
                if(!$ul.length) {
                    needAppendUl = true;
                    $ul = that.$ulTmp.clone();
                }
                $parent = $e;
            }
        }
        if(!$parent && !isRoot) {
            $parent = $ul.parent('li');
        }

        if(!Array.isArray(items)) {
            items = [items];
        }
        var itemConverter = options.itemConverter;
        var itemCreator = options.itemCreator;
        var itemRender = options.itemRender;
        var itemWrapper = options.itemWrapper;
        var $itemWrapper = itemWrapper ? $(itemWrapper === true ? '<div class="tree-item-wrapper"/>' : itemWrapper) : null;
        items.forEach(function(item, idx) {
            if(itemConverter) item = itemConverter(item);
            if(item.id === undefined) item.id = (parent ? (parent.id + '_') : '') + idx;
            var $li = $('<li/>', {'data-id': item.id}).data(item);
            var $wrapper = $itemWrapper ? $itemWrapper.clone().appendTo($li) : $li;
            var html = '';
            if(item.html) {
                html = item.html;
            } else if(itemCreator) {
                var itemContent = itemCreator($li, item);
                if(typeof itemContent === 'string') html = itemContent;
            } else if(item.url) {
                html = '<a href="' + item.url + '">' + escape(item.title || item.name) + '</a>';
            } else {
                html = '<span>' + escape(item.title || item.name) + '</span>';
            }
            $wrapper.html(html);
            that._initItem($li, $ul, item, null, true);
            if(item.children && item.children.length) {
                var $childUl = that.$ulTmp.clone().appendTo($li);
                that.add($li, item.children, item, $childUl, $li);
            }
            if(itemRender) {
                itemRender($li, item);
            }
            if(item.open) $li.addClass('open in');
            $ul.append($li);
        });
        if(needAppendUl) {
            $e.append($ul);
        }
        this._initList($ul, $parent, parent, isRoot, true);
    };

    Tree.prototype.reload = function(data) {
        var that = this;

        if(data) {
            that.$.empty();
            that.add(that.$, data, null, that.$, null, true);
        } else if(that.isPreserve) {
            if(that.store.time) {
                that.$.find('li:not(.tree-action-item)').each(function() {
                    var $li= $(this);
                    that[that.store[$li.data('id')] ? 'expand' : 'collapse']($li, true, true);
                });
            }
        }
    };

    Tree.prototype._initList = function($list, $parentItem, data, isRoot, skipCheckExists) {
        var that = this;
        if(isRoot === undefined) isRoot = $list.hasClass('tree');
        if(!isRoot) {
            $parentItem = ($parentItem || $list.closest('li')).addClass('has-list');
            if(skipCheckExists || !$parentItem.find('.list-toggle').length) {
                $parentItem.prepend(that.options.toggleTemplate);
            }
        }
        data = data || ($parentItem ? $parentItem.data() : {id: 0});
        if(!skipCheckExists) {
            $list.removeClass('has-active-item');
            var $children = $list.attr('data-id', data.id).children('li:not(.tree-action-item)').each(function(index) {
                var $item = $(this);
                var item = $item.data();
                if (item.id === undefined) item.id = data.id + '_' + index;
                that._initItem($item, $list, item);
            });
            if($children.length === 1 && !$children.find('ul').length)
            {
                $children.addClass('tree-single-item');
            }
        }
        var actions = formatActions(data ? data.actions : null, that.actions);
        if(actions) {
            if(actions.add && actions.add.templateInList !== false) {
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
                    finish: function(e) {
                        that.callEvent('action', {action: actions.sort, $list: $list, target: e.target, item: data});
                    }
                }, actions.sort.options, $.isPlainObject(this.options.sortable) ? this.options.sortable : null));
            }
        }
        if(!skipCheckExists && $parentItem && ($parentItem.hasClass('open') || (data && data.open))) {
            $parentItem.addClass('open in');
        }
    };

    Tree.prototype._initItem = function($item, $parentUl, data, $childrenUl, skipCheckExists) {
        var that = this;
        data = data || $item.data();
        if (!skipCheckExists) {
            $parentUl = $parentUl || $item.closest('ul');
            $item.attr('data-id', data.id).removeClass('tree-single-item');
            if ($item.hasClass('active')) {
                $parentUl.parent('li').addClass('has-active-item');
            }
        }
        var actions = formatActions(data.actions, that.actions);
        if(actions) {
            var $actions = $item.find('.tree-actions');
            if(!$actions.length) {
                $actions = $('<div class="tree-actions"/>').appendTo(that.options.itemWrapper ? $item.find('.tree-item-wrapper') : $item);
                $.each(actions, function(actionName, action) {
                    if(action) $actions.append(createActionEle(action, actionName));
                });
            }
        }

        if(!skipCheckExists) {
            $childrenUl = $childrenUl || $item.children('ul');
            if($childrenUl.length) {
                that._initList($childrenUl, $item, data, false, skipCheckExists);
            }
        }
    };

    Tree.prototype._init = function() {
        var options = this.options, that = this;
        this.actions = formatActions(options.actions);

        this.$.addClass('tree');
        if(options.animate) this.$.addClass('tree-animate');

        this._initList(this.$, null, null, true);

        var initialState = options.initialState;
        var isPreserveEnable = options.preserve !== false && $.zui && $.zui.store && $.zui.store.enable;
        if(isPreserveEnable) {
            this.selector = name + '::' + (options.name || '') + '#' + (this.$.attr('id') || globalId++);
            this.store = $.zui.store[options.name ? 'get' : 'pageGet'](this.selector, {});
        }
        if(initialState === 'preserve') {
            if(isPreserveEnable) this.isPreserve = true;
            else this.options.initialState = initialState = 'normal';
        }

        // init data
        this.reload(options.data);
        if(isPreserveEnable) this.isPreserve = true;

        if(initialState === 'expand') {
            this.expand();
        } else if(initialState === 'collapse') {
            this.collapse();
        } else if (initialState === 'active') {
            this.expandSelect('.active');
        }

        // Bind event
        this.$.on('click', '.list-toggle,a[href="#"],.tree-toggle', function(e) {
            var $this = $(this);
            var $li = $this.parent('li');
            that.callEvent('hit', {target: $li, item: $li.data()});
            that.toggle($li);
            if($this.is('a')) e.preventDefault();
        }).on('click', '.tree-action', function() {
            var $action = $(this);
            var action = $action.data();
            if(action.action) action = action.action;
            if(action.type === 'sort') return;
            var $li = $action.closest('li:not(.tree-action-item)');
            that.callEvent('action', {action: action, target: this, $item: $li, item: $li.data()});
        });
    };

    Tree.prototype.preserve = function($li, id, expand) {
        if(!this.isPreserve) return;
        if($li) {
            id = id || $li.data('id');
            expand = expand === undefined ? $li.hasClass('open') : false;
            if(expand) this.store[id] = expand;
            else delete this.store[id];
            this.store.time = new Date().getTime();
            $.zui.store[this.options.name ? 'set' : 'pageSet'](this.selector, this.store);
        } else {
            var that = this;
            this.store = {};
            this.$.find('li').each(function() {
                that.preserve($(this));
            });
        }
    };

    Tree.prototype.expandSelect = function(selector) {
        this.show(selector, true);
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

    Tree.prototype.show = function($lis, disabledAnimate, notStore) {
        var that = this;
        if (!($lis instanceof $)) {
            $lis = that.$.find('li').filter($lis);
        }
        $lis.each(function() {
            var $li = $(this);
            that.expand($li, disabledAnimate, notStore);
            if($li) {
                var $ul = $li.parent('ul');
                while($ul && $ul.length && !$ul.hasClass('tree')) {
                    var $parentLi = $ul.parent('li');
                    if($parentLi.length) {
                        that.expand($parentLi, disabledAnimate, notStore);
                        $ul = $parentLi.parent('ul');
                    } else {
                        $ul = false;
                    }
                }
            }
        });
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

    Tree.prototype.toData = function($ul, filter) {
        if(typeof $ul === 'function') {
            filter = $ul;
            $ul = null;
        }
        $ul = $ul || this.$;
        var that = this;
        return $ul.children('li:not(.tree-action-item)').map(function() {
            var $li = $(this);
            var data = $li.data();
            delete data['zui.droppable'];
            var $children = $li.children('ul');
            if($children.length) data.children = that.toData($children);
            return typeof filter === 'function' ? filter(data, $li) : data;
        }).get();
    };

    // Call event helper
    Tree.prototype.callEvent = function(name, params) {
        var result;
        if(typeof this.options[name] === 'function') {
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
