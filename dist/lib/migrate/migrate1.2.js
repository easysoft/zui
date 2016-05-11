/*!
 * ZUI - v1.4.0 - 2016-05-11
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: zui.migrate.1.2.js
 * This file inclues some helper methods to help upgrad version 1.2 or
 * lower to version 1.3
 * If you are using 1.3+, then ignore this.
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window) {
    var zui = $.zui;
    if(zui) {
        function extendTo(name, target) {
            if($.isArray(name)) {
                $.each(name, function(i, n) {
                    extendTo(n, target);
                });
                return;
            }

            var config = {};
            config[name] = zui[name];

            if(target) {
                $.extend(target, config);
            } else {
                $.extend(config);
            }
        }

        extendTo(['uuid', 'callEvent', 'clientLang', 'browser', 'messager', 'Messager', 'showMessager', 'closeModal', 'ajustModalPosition', 'ModalTrigger', 'modalTrigger', 'store']);
        extendTo(['Color', 'imgReady', 'messager', 'Messager', 'showMessager', 'closeModal', 'ajustModalPosition', 'ModalTrigger', 'modalTrigger', 'store'], window);
    }
}(jQuery, window));

