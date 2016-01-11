/* ========================================================================
 * ZUI: tree.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var name = 'zui.tree'; // modal name

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
        initialState: 'normal'
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

        if(this.options.initialState === 'expand') {
            this.expand();
        } else if(this.options.initialState === 'collapse') {
            this.collapse();
        } else if(this.options.animate) {
            this.$.find('li.has-list.open').addClass('in');
        }
    };

    Tree.prototype.expand = function($li, disabledAnimate) {
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
            this.$.find('li.has-list').addClass('open in');
        }
        this.callEvent('expand', $li, this);
    };

    Tree.prototype.collapse = function($li, disabledAnimate) {
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
            this.$.find('li.has-list').removeClass('open in');
        }
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

