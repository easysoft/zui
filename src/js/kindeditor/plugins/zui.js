/* ========================================================================
 * ZUI: Kindeditor plugin - zui
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2019-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */

 $.each(['afterBlur', 'afterFocus', 'afterChange', 'afterTab'], function(_index, name) {
    KindEditor.EditorClass.prototype[name] = function(fn) {
        return this.handler(name, fn);
    };
});

KindEditor.plugin('zui', function(K) {
    var self = this;
    var options = self.options;
    self.uuid = $.zui.uuid();

    self.afterBlur(function() {
        if (options.syncAfterBlur) {
            self.sync();
        }
        self.container.removeClass('focus');
    });

    self.afterFocus(function() {
        self.container.addClass('focus');
    });

    self.afterChange(function() {
        self.edit.srcElement.change().hide();
    });

    self.afterCreate(function() {
        $(self.edit.srcElement[0]).data('keditor', self);

        var spellcheck = options.spellcheck;
        if (spellcheck !== undefined) {
            self.edit.doc.documentElement.setAttribute('spellcheck', spellcheck);
        }
    });

    if (options.transferTab !== false) {
        var nextFormControl = 'input:not([type="hidden"]), textarea:not(.ke-edit-textarea), button[type="submit"], select';
        self.afterTab(function() {
            var $editor = $(self.edit.srcElement[0]);
            var $next = $editor.next(nextFormControl);
            if(!$next.length) $next = $editor.parent().next().find(nextFormControl);
            if(!$next.length) $next = $editor.parent().parent().next().find(nextFormControl);
            $next = $next.first();
            if ($next.length) {
                var keditor = $next.data('keditor');
                if(keditor) {
                    keditor.focus();
                } else {
                    $next.focus();
                }
                return true;
            }
            return true;
        });
    }
});