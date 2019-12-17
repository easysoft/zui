/* ========================================================================
 * ZUI: Kindeditor plugin - paste-image
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2019-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */

KindEditor.plugin('pasteimage', function(K) {
    var self = this;
    var allLangs = {
        zh_cn: {
            notSupportMsg: '您的浏览器不支持粘贴图片！',
            placeholder: '可以在编辑器直接贴图。',
            failMsg: '贴图失败，请稍后重试。',
            uploadingHint: '正在上传图片，请稍后...',
        },
        zh_tw: {
            notSupportMsg: '您的瀏覽器不支持粘貼圖片！',
            placeholder: '可以在編輯器直接貼圖。',
            failMsg: '貼圖失敗，請稍後重試。',
            uploadingHint: '正在上傳圖片，請稍後...',
        },
        en: {
            notSupportMsg: 'Image is not allowed to paste in your browser!',
            placeholder: 'You can paste images in the editor.',
            failMsg: 'Pasting image failed. Try again later.',
            uploadingHint: 'Uploading...',
        },
        ja: {
            notSupportMsg: '使用されているブラウザは画像の貼り付けがサポートされていません！',
            placeholder: 'エディターを使用して画像を貼り付けます。',
            failMsg: '画像を貼り付けませんでした、後でやり直してください。',
            uploadingHint: '画像をアップロード中、しばらくお待ちください...',
        }
    };

    self.afterCreate(function() {
        var edit    = self.edit;
        var doc     = edit.doc;
        var uuid    = self.uuid;
        var options = self.options.pasteImage;
        if (!options) {
            return;
        }
        if (typeof options === 'string') {
            options = {postUrl: options};
        }
        var lang = $.extend({}, allLangs.en, allLangs[($.clientLang || $.zui.clientLang)()], options.lang);

        if(!K.WEBKIT && !K.GECKO)
        {
            $(doc.body).on('keyup.ke' + uuid, function(ev)
            {
                if(ev.keyCode == 86 && ev.ctrlKey) alert(lang.notSupportMsg);
            });
        }

        if(self.setPlaceholder)
        {
            var placeholder = options.placeholder;
            if (placeholder === true) placeholder = lang.placeholder;
            if (placeholder) {
                var oldPlaceholder = self.getPlaceholder();
                if (!oldPlaceholder) oldPlaceholder = placeholder;
                else if (oldPlaceholder.indexOf(placeholder) < 0) placeholder = oldPlaceholder + '\n' + placeholder;
                self.setPlaceholder(placeholder);
            }
        }

        var pasteBegin = function() {
            // if ($.enableForm) {
            //     $.enableForm(false, 0, 1);
            //     $('body').one('click.ke' + uuid, function(){$.enableForm(true);});
            // }
            if (options.beforePaste) {
                options.beforePaste();
            }
            var imageLoadingEle = '<div class="image-loading-ele small" style="padding: 5px; background: #FFF3E0; width: 300px; border-radius: 2px; border: 1px solid #FF9800; color: #ff5d5d; margin: 10px 0;"><i class="icon icon-spin icon-spinner-indicator muted"></i> ' + lang.uploadingHint + '</div>';
            self.readonly(true);
            if ($.fn.enableForm) {
                $(self.edit.div[0]).closest('form').enableForm(false);
            }
            self.cmd.inserthtml(imageLoadingEle);
        };

        var pasteEnd = function(error) {
            if(error) {
                if (options.onError) {
                    options.onError(error);
                } else {
                    if(error === true) error = lang.failMsg;
                    if ($.zui && $.zui.messager) {
                        $.zui.messager.danger(error, {placement: 'center'});
                    }
                }
            }
            // if ($.enableForm) {
            //     $.enableForm(true, 0, 1);
            // }
            // $('body').off('.ke' + uuid);
            if (options.afterPaste) {
                options.afterPaste();
            }

            // Use self.undo to remove .image-loading-ele now
            // $(doc.body).find('.image-loading-ele').remove();

            self.readonly(false);
            if ($.fn.enableForm) {
                $(self.edit.div[0]).closest('form').enableForm(true);
            }
        };

        var pasteUrl = options.postUrl;
        $(doc.body).on('paste.ke' + uuid, function(ev) {
            if (K.WEBKIT) {
                /* Paste in chrome.*/
                /* Code reference from http://www.foliotek.com/devblog/copy-images-from-clipboard-in-javascript/. */
                var original = ev.originalEvent;
                var clipboardItems = original.clipboardData && original.clipboardData.items;
                var clipboardItem = null;
                if(clipboardItems) {
                    var IMAGE_MIME_REGEX = /^image\/(p?jpeg|gif|png)$/i;
                    for (var i = 0; i < clipboardItems.length; i++)
                    {
                        if (IMAGE_MIME_REGEX.test(clipboardItems[i].type))
                        {
                            clipboardItem = clipboardItems[i];
                            break;
                        }
                    }
                }
                var file = clipboardItem && clipboardItem.getAsFile();
                if (!file) return;
                original.preventDefault();
                pasteBegin();

                var reader = new FileReader();
                reader.onload = function(evt) {
                    var result = evt.target.result;
                    // var arr    = result.split(",");
                    // var data   = arr[1]; // raw base64
                    // var contentType = arr[0].split(";")[0].split(":")[1];

                    var html = '<img src="' + result + '" alt="" />';
                    $.post(pasteUrl, {editor: html}, function(data)
                    {
                        self.undo();
                        self._redoStack.pop();
                        if (data) {
                            var $img = $(data);
                            edit.cmd.insertimage($img.attr('src'), $img.attr('title'), $img.attr('width'), $img.attr('height'));
                        } else {
                            edit.cmd.insertimage(result);
                        }
                        pasteEnd();
                    }).error(function()
                    {
                        pasteEnd(true);
                    });
                };
                reader.readAsDataURL(file);
            } else {
                /* Paste in firefox and other browsers. */
                setTimeout(function() {
                    var html = K(doc.body).html();
                    if(html.search(/<img src="data:.+;base64,/) > -1) {
                        pasteBegin();
                        $.post(pasteUrl, {editor: html}, function(data) {
                            if(data.indexOf('<img') === 0) data = '<p>' + data + '</p>';
                            self.undo();
                            self._redoStack.pop();
                            edit.html(data);
                            pasteEnd();
                        }).error(function()
                        {
                            pasteEnd(true);
                        });
                    }
                }, 80);
            }
        });

        self.beforeRemove(function() {
            $(doc.body).off('.ke' + uuid);
        });
    });
});
