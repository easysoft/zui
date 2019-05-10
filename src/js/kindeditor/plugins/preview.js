/*******************************************************************************
 * KindEditor - WYSIWYG HTML Editor for Internet
 * Copyright (C) 2006-2011 kindsoft.net
 *
 * @author Roddy <luolonghao@gmail.com>
 * @site http://www.kindsoft.net/
 * @licence http://www.kindsoft.net/license.php
 *******************************************************************************/

KindEditor.plugin('preview', function(K) {
    var self = this,
        name = 'preview';
    self.clickToolbar(name, function() {
        var lang = self.lang(name + '.'),
            html = '<div style="padding:10px 20px;">' +
            '<iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe>' +
            '</div>',
            dialog = self.createDialog({
                name: name,
                width: 750,
                title: self.lang(name),
                body: html
            }),
            iframe = K('iframe', dialog.div),
            doc = K.iframeDoc(iframe);
        doc.open();
        doc.write(self.fullHtml());
        doc.write('<style>.kindeditor-ph{display:none!important;}</style>');
        var cssData = self.options.cssData;
        var cssPath = self.options.cssPath;
        var bodyClass = self.options.bodyClass;
        if(!K.isArray(cssPath)) {
            cssPath = [cssPath];
        }
        K.each(cssPath, function(i, path) {
            if(path) {
                doc.write('<link href="' + path + '" rel="stylesheet" />');
            }
        });
        if(cssData) {
            doc.write('<style>' + cssData + '</style>');
        }
        doc.close();
        var body = K(doc.body).css('background-color', '#FFF');
        if (bodyClass) {
            body.addClass(bodyClass);
        }
        iframe[0].contentWindow.focus();
    });
});
