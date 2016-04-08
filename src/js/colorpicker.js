/* ========================================================================
 * ZUI: ColorPicker.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var name = 'zui.colorPicker'; // modal name
    var TEAMPLATE = '<div class="colorpicker"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><span class="cp-title"></span><i class="icon icon-caret-down"></i></button><ul class="dropdown-menu clearfix"></ul></div>';
    var LANG = {
        zh_cn: {
            errorTip: "不是有效的颜色值"
        },
        zh_tw: {
            errorTip: "不是有效的顏色值"
        },
        en: {
            errorTip: "Not a valid color value"
        }
    };

    // The ColorPicker modal class
    var ColorPicker = function(element, options) {
        this.name = name;
        this.$ = $(element);

        this.getOptions(options);
        this.init();

        // Initialize here
    };

    // default options
    ColorPicker.DEFAULTS = {
        colors: ['#3280fc', '#ea644a', '#38b03f', '#03b8cf', '#8666b8', '#bd7b46', '#fff', '#333'],
        pullMenuRight: true,
        wrapper: 'btn-wrapper',
        tileSize: 30,
        pickerWidth: 210,
        optional: true,
        tooltip: 'top',
    };

    ColorPicker.prototype.init = function() {
        var options = this.options;
        
        this.$picker = $(TEAMPLATE).addClass(options.wrapper);
        this.$picker.find('.cp-title').toggle(options.title !== undefined).text(options.title);
        this.$menu = this.$picker.find('.dropdown-menu').toggleClass('pull-right', options.pullMenuRight);
        this.$btn = this.$picker.find('.btn.dropdown-toggle');
        this.$.attr('data-provide', null).after(this.$picker);
        this.updateColors();
        var that = this;
        this.$picker.on('click', '.cp-tile', function() {
            that.setValue($(this).data('color'));
        });
        var $input = this.$;
        if($input.is('input:not([type=hidden])')) {
            if(options.tooltip) {
                $input.attr('data-toggle', 'tooltip').tooltip({trigger: 'manual', placement: options.tooltip, tipClass: 'tooltip-danger'});
            }
            $input.on('keyup paste input', function() {
                var val = $input.val();
                var isColor = $.zui.Color.isColor(val);
                $input.parent().toggleClass('has-error', !isColor && !(options.optional && val === ''));
                if(isColor) {
                    that.setValue(val, true);
                } else {
                    if(options.optional && val === '') {
                        $input.tooltip('hide');
                    } else {
                        $input.tooltip('show', options.errorTip);
                    }
                }
            }).trigger('input');
        }
    };

    ColorPicker.prototype.updateColors = function() {
        var $picker = this.$picker, $menu = this.$menu.empty(), options = this.options;
        var bestWidth = 6;
        $.each(this.options.colors, function(idx, color) {
            if($.zui.Color.isColor(color)) {
                var c = new $.zui.Color(color);
                var $a = $('<a href="###" class="cp-tile"></a>', {
                    titile: color
                }).data('color', c).css({
                    'background': c.toCssStr(),
                    'border-color': c.luma() > 0.43 ? '#ccc' : 'transparent'
                }).attr('data-color', c.toCssStr());
                $menu.append($('<li/>').css({width: options.tileSize, height: options.tileSize}).append($a));
            }
            bestWidth += options.tileSize;
        });
        $menu.css('width', Math.min(bestWidth, options.pickerWidth + 6));
    };

    ColorPicker.prototype.setValue = function(color, notSetInput) {
        var c = new $.zui.Color(color);
        var hex = c.toCssStr().toLowerCase();
        this.$btn.css({
            background: hex,
            color: c.contrast().toCssStr(),
            borderColor: c.luma() > 0.43 ? '#ccc' : hex
        });
        if(!notSetInput && this.$.val().toLowerCase() !== hex) {
            this.$.val(hex);
            this.$.trigger('change');
        }
        this.$.tooltip('hide');
    };

    // Get and init options
    ColorPicker.prototype.getOptions = function(options) {
        var thisOptions = $.extend({}, ColorPicker.DEFAULTS, this.$.data(), options);
        if(typeof thisOptions.colors === 'string') thisOptions.colors = thisOptions.colors.split(',');
        var lang = (thisOptions.lang || $.zui.clientLang()).toLowerCase();
        if(!thisOptions.errorTip) {
            thisOptions.errorTip = LANG[lang].errorTip;
        }
        this.options = thisOptions;
    };

    // Extense jquery element
    $.fn.colorPicker = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(name);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(name, (data = new ColorPicker(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.colorPicker.Constructor = ColorPicker;

    // Auto call colorPicker after document load complete
    $(function() {
        $('[data-provide="colorpicker"]').colorPicker();
    });
}(jQuery));

