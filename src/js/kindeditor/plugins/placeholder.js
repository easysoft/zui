/* ========================================================================
 * ZUI: Kindeditor plugin - placeholder
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2019-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */

KindEditor.EditorClass.prototype.setPlaceholder = function(placeholder, asHtml) {
    var self = this;
    var options = self.options;
    var edit = self.edit;
    var $doc = $(edit.doc);
    var $placeholder = $doc.find('.kindeditor-ph');
    if (!$placeholder.length) {
        $placeholder = $('<div class="kindeditor-ph" style="width:100%; color:#888; padding: 8px; background:none; position:absolute;z-index:10;top:0;border:0;overflow:auto;resize:none; pointer-events:none; white-space: pre-wrap;"></div>');
        if (options.placeholderStyle) {
            $placeholder.css(options.placeholderStyle);
        }
        $doc.find('body').after($placeholder);
    }
    if (self.plugin.hasContent()) {
        $placeholder.hide();
    }
    $placeholder[asHtml ? 'html' : 'text'](placeholder);
};

KindEditor.EditorClass.prototype.getPlaceholder = function(asHtml) {
    return $(this.edit.doc).find('.kindeditor-ph')[asHtml ? 'html' : 'text']();
};

KindEditor.plugin('placeholder', function(K) {
    var self = this;

    self.plugin.hasContent = function() {
        return self.html().replace(/\s|\n|\r|\t/g, '').replace(/<br\/>/g, '').replace(/<p><\/p>/g, '') !== '';
    };

    self.afterBlur(function() {
        if (!self.plugin.hasContent()) {
            $(self.edit.doc).find('.kindeditor-ph').show();
        }
    });

    self.afterFocus(function() {
        $(self.edit.doc).find('.kindeditor-ph').hide();
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