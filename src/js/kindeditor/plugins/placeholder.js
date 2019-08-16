/* ========================================================================
 * ZUI: Kindeditor plugin - placeholder
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2019-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */

KindEditor.EditorClass.prototype.setPlaceholder = function(placeholder, asHtml) {
    var self = this;
    var options = self.options;
    var $editDiv = $(self.edit.div[0]);
    var $placeholder = $editDiv.find('.kindeditor-ph');
    if (!$placeholder.length) {
        $editDiv.css('position', 'relative');
        $placeholder = $('<div class="kindeditor-ph" style="width:100%; color:#888; padding: 8px; background:none; position:absolute;z-index:10;top:0;border:0;overflow:auto;resize:none; pointer-events:none; white-space: pre-wrap; font-size: 13px"></div>');
        if (options.placeholderStyle) {
            $placeholder.css(options.placeholderStyle);
        }
        $editDiv.append($placeholder);
    }
    if (self.plugin.hasContent()) {
        $placeholder.hide();
    }
    $placeholder[asHtml ? 'html' : 'text'](placeholder);
    self.$placeholder = $placeholder;
};

KindEditor.EditorClass.prototype.getPlaceholder = function(asHtml) {
    return self.$placeholder && self.$placeholder[asHtml ? 'html' : 'text']();
};

KindEditor.plugin('placeholder', function(K) {
    var self = this;

    self.plugin.hasContent = function() {
        return self.html().replace(/\s|\n|\r|\t/g, '').replace(/<br\/>/g, '').replace(/<p><\/p>/g, '') !== '';
    };

    self.afterBlur(function() {
        if (!self.plugin.hasContent()) {
            self.$placeholder && self.$placeholder.show();
        }
    });

    self.afterFocus(function() {
        self.$placeholder && self.$placeholder.hide();
    });

    self.afterCreate(function() {
        var options = self.options;
        if (options.placeholderHtml) {
            self.setPlaceholder(options.placeholderHtml, true);
        } else if (options.placeholder) {
            self.setPlaceholder(options.placeholder);
        }
    });
});
