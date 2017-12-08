/* ========================================================================
 * ZUI: searchbox.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var NAME = 'zui.searchBox'; // modal name

    // The searchbox modal class
    var SearchBox = function(element, options) {
        var that = this;
        that.name = name;
        that.$ = $(element);

        options = that.getOptions(options);

        // Initialize here
        var $input = that.$.is(options.inputSelector) ? that.$ : that.$.find(options.inputSelector);
        if ($input.length) {
            var clearChangeTimer = function() {
                if (that.changeTimer) {
                    clearTimeout(that.changeTimer);
                    that.changeTimer = null;
                }
            };

            var handleChange = function() {
                clearChangeTimer();
                var value = that.getSearch();
                if (value !== that.lastValue) {
                    var isEmpty = value === '';
                    $input.toggleClass('empty', isEmpty);
                    that.$.callComEvent(that, 'onSearchChange', [value, isEmpty]);
                    that.lastValue = value;
                }
            };

            that.$input = $input = $input.first();
            that.lastValue = that.getSearch();

            $input.on(options.listenEvent, function(params) {
                that.changeTimer = setTimeout(function() {
                    handleChange();
                }, options.changeDelay);
            }).on('focus', function(e) {
                $input.addClass('focus');
                that.$.callComEvent(that, 'onFocus', [e]);
            }).on('blur', function(e) {
                $input.removeClass('focus');
                that.$.callComEvent(that, 'onBlur', [e]);
            }).on('keydown', function(e) {
                var handled = 0;
                var keyCode = e.witch;
                if (keyCode === 27 && options.escToClear) { // esc
                    this.setSearch('', true);
                    handleChange();
                    handled = 1;
                } else if (keyCode === 13 && options.onPressEnter) {
                    handleChange();
                    that.$.callComEvent(that, 'onPressEnter', [e]);
                }
                var onKeyDownResult = that.$.callComEvent(that, 'onKeyDown', [e]);
                if (onKeyDownResult === false) {
                    handled = 1;
                }
                if (handled) {
                    e.preventDefault();
                }
            });

            that.$.on('click', '.search-clear-btn', function(e) {
                that.setSearch('', true);
                handleChange();
                e.preventDefault();
            });

            handleChange();
        } else {
            console.error('ZUI: search box init error, cannot find search box input element.');
        }
    };

    // default options
    SearchBox.DEFAULTS = {
        inputSelector: 'input[type="search"],input[type="text"]',
        listenEvent: 'change input paste',
        changeDelay: 500,

        // onKeyDown: null,
        // onFocus: null,
        // onBlur: null,
        // onSearchChange: null,
        // onPressEnter: null,
        // escToClear: true
    };

    // Get and init options
    SearchBox.prototype.getOptions = function(options) {
        this.options = options = $.extend({}, SearchBox.DEFAULTS, this.$.data(), options);
        return options;
    };

    // Get current search string
    SearchBox.prototype.getSearch = function() {
        return this.$input && $.trim(this.$input.val());
    };

    // Set current search string
    SearchBox.prototype.setSearch = function(value, notTriggerChange) {
        var $input = this.$input;
        if ($input) {
            $input.val(value);
            if (!notTriggerChange) {
                $input.trigger('change');
            }
        }
    };

    // Focus input element
    SearchBox.prototype.focus = function() {
        this.$input && this.$input.focus();
    };

    // Extense jquery element
    $.fn.searchBox = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new SearchBox(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    SearchBox.NAME = NAME;

    $.fn.searchBox.Constructor = SearchBox;
}(jQuery));

