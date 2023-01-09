/* ========================================================================
 * ZUI: Kindeditor plugin - paste-image
 * http://openzui.com
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
        var langName = $.clientLang ? $.clientLang() : ($.zui && $.zui.clientLang) ? $.zui.clientLang() : 'en';
        var lang = $.extend({}, ($.zui && $.zui.getLangData) ? $.zui.getLangData('kindeditor.advanceTable', langName, allLangs) : $.extend({}, allLangs.en, self.lang('table.'), allLangs[langName]), options.lang);

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
        var findBase64OnPaste = function() {
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
        };
        $(doc.body).on('paste.ke' + uuid, function(ev) {
            if (K.WEBKIT) {
                /* Paste in chrome.*/
                /* Code reference from http://www.foliotek.com/devblog/copy-images-from-clipboard-in-javascript/. */
                var original = ev.originalEvent;
                var clipboardItems = original.clipboardData && original.clipboardData.items;
                var dataMap = {text: null, image: null, html: null};
                if(clipboardItems)
                {
                    for(var i = 0; i < clipboardItems.length; i++)
                    {
                        var clipboardItem = clipboardItems[i];
                        var dataType = clipboardItem.type;
                        if(dataType === 'text/html')
                        {
                            dataMap.html = clipboardItem;
                        }
                        else if(dataType.startsWith('text/'))
                        {
                            dataMap.text = clipboardItem;
                        }
                        else if(dataType.startsWith('image/'))
                        {
                            dataMap.image = clipboardItem;
                        }
                    }
                }
                if(!dataMap.image || (options.pasteTextFirst && (dataMap.text !== null || dataMap.html !== null)))
                {
                    if(dataMap.html && typeof getComputedStyle === 'function' && options.keepOfficeFormats)
                    {
                        var html = original.clipboardData.getData('text/html');
                        if(html)
                        {
                            /* Create iframe to render html content from clipboard */
                            var frame = document.getElementById('kePasteFrame');
                            if(!frame)
                            {
                                frame = document.createElement('iframe');
                                frame.setAttribute('id', 'kePasteFrame');
                            }
                            frame.style.width = edit.iframe.width() + 'px';
                            frame.style.height = '300px';
                            frame.style.position = 'absolute';
                            frame.style.right = '0px';
                            frame.style.bottom = '0px';
                            frame.style.visible = 'hidden';
                            document.body.appendChild(frame);
                            frame.contentWindow.document.documentElement.innerHTML = html;
                            original.preventDefault();

                            /* Get html back from iframe */
                            var body = frame.contentWindow.document.body;
                            var filterStyles = {
                                color: [],
                                background: [],
                                borderColor: [],
                                borderStyle: ['none'],
                                borderWidth: [],
                                fontSize: [],
                                lineHeight: ['normal'],
                                verticalAlign: ['baseline'],
                                textAlign: ['left'],
                                textDecoration: ['none'],
                                fontStyle: ['normal'],
                                fontFamily: [],
                                fontWeight: ['normal', '400'],
                            };
                            $(body).find('*').each(function()
                            {
                                var fullStyle = getComputedStyle(this);
                                var $ele = $(this);
                                var style = {};
                                var parentStyle = getComputedStyle($ele.parent()[0]);
                                $.each(filterStyles, function(name, ignores)
                                {
                                    var value = fullStyle[name];
                                    if(value === 'inherit' || value === 'initial' || parentStyle[name] === value || ignores.includes(value)) return;
                                    style[name] = value;
                                });
                                $ele.css(style);
                            });
                            var output = body.innerHTML;
                            frame.remove();
                            edit.cmd.inserthtml(output);
                        }
                    }
                    return;
                }

                if(dataMap.image) {
                    var file = dataMap.image.getAsFile();
                    if(!file) return findBase64OnPaste();
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
                }
            } else {
                /* Paste in firefox and other browsers. */
                findBase64OnPaste();
            }
        });

        self.beforeRemove(function() {
            $(doc.body).off('.ke' + uuid);
        });
    });
});
