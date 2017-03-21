/* ========================================================================
 * ZUI: uploader.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window, Plupload, Moxie, undefined) {
    'use strict';

    if(!$.zui.strCode) {
        $.zui.strCode = function(str) {
            var code = 0;
            if(str && str.length) {
                for(var i = 0; i < str.length; ++i) {
                    code += i * str.charCodeAt(i);
                }
            }
            return code;
        };
    }

    var NAME = 'zui.uploader', // modal name
        FILE_TEMPLATE = '<div class="file"><div class="file-progress-bar"></div><div class="file-wrapper"><div class="file-icon"><i class="icon icon-file-o"></i></div><div class="content"><div class="file-name"></div><div class="file-size small text-muted">0KB</div></div><div class="actions"><div class="file-status" data-toggle="tooltip"><i class="icon"></i> <span class="text"></span></div><a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a><button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button><button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button><button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button></div></div></div>',
        DEFAULTS = {
            // qiniu: {
            //     uptoken_url,
            //     uptoken,
            //     save_key,
            //     domain,
            //     get_new_uptoken,
            //     key
            // },
            // fileList: '', // 'default', 'large', 'grid', '>.file-list', '#myFileList', '<div class="uploader-files file-list"></div>'
            // fileTemplate: '',
            // fileFormater: null,
            // fileIconCreator: null,
            // staticFiles: null,
            rename: true,
            // renameExtension: false,
            renameByClick: true,
            // autoUpload: false,
            // browseByClickList: false,
            dropPlaceholder: true,
            // messageCreator: null, // NOT SUPPORT
            previewImageIcon: true,
            sendFileName: true,
            sendFileId: true,
            responseHandler: true,
            // limitFilesCount: false,
            // deleteConfirm: false,
            // removeUploaded: false,
            // statusCreator: null, // Function
            // previewImageSize: {width: 200, height: 200},
            uploadedMessage: true,
            // deleteActionOnDone: false, // false, true or function
            // renameActionOnDone: false,   // false, true or function

            // plupload options
            drop_element: 'self', // 'self', 'fileList', String or jQuery object,
            browse_button: 'hidden', // String or jQuery object
            // url: '', // String
            filters: {prevent_duplicates: true}, // {mime_types, max_file_size, prevent_duplicates}
            // headers: null, // Object
            // multipart: true, // true, false
            // multipart_params: null, // Object
            chunk_size: '1mb', // Number, String
            max_retries: 3,
            // resize: {}, // {width, height, crop, quality, preserve_headers},
            // multi_selection: true, // true, false,
            // required_features: null, // String
            // unique_names: false, // true, false
            // runtimes: 'html5,flash,silverlight,html4', // String
            // file_data_name: 'file', // String
            flash_swf_url: 'lib/uploader/Moxie.swf', // String
            silverlight_xap_url: 'lib/uploader/Moxie.xap' // String
        };

    var STATUS = {
        QUEUED    : Plupload.QUEUED,
        UPLOADING : Plupload.UPLOADING,
        FAILED    : Plupload.FAILED,
        DONE      : Plupload.DONE,
        STOPPED   : Plupload.STOPPED,
        STARTED   : Plupload.STARTED
    };
    STATUS[Plupload.QUEUED]    = 'queue';
    STATUS[Plupload.UPLOADING] = 'uploading';
    STATUS[Plupload.FAILED]    = 'failed';
    STATUS[Plupload.DONE]      = 'done';

    var ERRORS = {
        GENERIC_ERROR         : Plupload.GENERIC_ERROR,
        HTTP_ERROR            : Plupload.HTTP_ERROR,
        IO_ERROR              : Plupload.IO_ERROR,
        SECURITY_ERROR        : Plupload.SECURITY_ERROR,
        INIT_ERROR            : Plupload.INIT_ERROR,
        FILE_SIZE_ERROR       : Plupload.FILE_SIZE_ERROR,
        FILE_EXTENSION_ERROR  : Plupload.FILE_EXTENSION_ERROR,
        FILE_DUPLICATE_ERROR  : Plupload.FILE_DUPLICATE_ERROR,
        IMAGE_FORMAT_ERROR    : Plupload.IMAGE_FORMAT_ERROR,
        IMAGE_MEMORY_ERROR    : Plupload.IMAGE_MEMORY_ERROR,
        IMAGE_DIMENSIONS_ERROR: Plupload.IMAGE_DIMENSIONS_ERROR
    };

    // The uploader modal class
    var Uploader = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element).addClass('uploader');
        options = that.getOptions(options);

        // Init lang
        var lang = $.isPlainObject(options.lang) ? ($.extend(true, {}, Uploader.LANG[lang.lang || $.zui.clientLang()], options.lang)) : Uploader.LANG[options.lang];
        that.lang = lang;

        // Init file list element
        var $this = that.$;
        var fileList = options.fileList;
        var $list;
        if(!fileList || fileList == 'large' || fileList == 'grid') {
            $list = $this.find('.file-list,.uploader-files');
        } else if(fileList.indexOf('>') === 0) $list = $this.find(fileList.substr(1));
        else $list = $(fileList);
        if(!$list || !$list.length) $list = $('<div class="uploader-files file-list"></div>');
        if(!$list.parent().length) $this.append($list);
        if(fileList == 'large') $list.addClass('file-list-lg');
        else if(fileList == 'grid') $list.addClass('file-list-grid');
        $list.children('.file').addClass('file-static');
        that.$list = $list;

        if(options.browseByClickList || $list.hasClass('uploader-btn-browse')) {
            $list.addClass('uploader-btn-browse').on('click', '.file-wrapper > .actions,.file-renaming .file-name', function(e) {
                e.stopPropagation();
            });
        }

        // Init file template
        var template = options.fileTemplate;
        if(!template) {
            var $template = $list.find('.template');
            if($template.length) {
                template = $template.first().clone().removeClass('template');
                $template.remove();
            }
            if(!template) template = FILE_TEMPLATE;
        }
        if(typeof template === 'string') {
            template = $(template);
            if(template.parent()) template = template.clone().removeClass('template');
        }
        that.template = template;

        // Init browse button element
        var browseBtn = options.browse_button;
        var $btn = null;
        if(browseBtn) {
            if(browseBtn.indexOf('>') === 0) $btn = $this.find(browseBtn.substr(1));
            else if(browseBtn !== 'hidden') $btn = $(browseBtn);
        }
        if(!$btn || !$btn.length) {
            $btn = $('<div class="uploader-btn-browse uploader-btn-hidden"></div>').appendTo($this);
        }
        that.$button = $btn.first();

        // Init drop element
        var dropElement = options.drop_element;
        var $dropElement = (dropElement == 'fileList' ? that.$list : (dropElement == 'self' ? that.$ : $(dropElement))).first().addClass('file-drag-area');
        var dropPlaceholder = options.dropPlaceholder;
        if(dropPlaceholder === true) dropPlaceholder = lang.dropPlaceholder;
        if(dropPlaceholder) $dropElement.attr('data-drop-placeholder', dropPlaceholder);
        that.$dropElement = $dropElement;

        // Init message
        that.$message = $this.find('.uploader-message').on('click', '.close', function() {
            that.hideMessage();
        });
        that.$status = $this.find('.uploader-status');

        // Init actions
        $this.toggleClass('uploader-rename', !!options.rename);

        // Init plupload
        that.initPlupload();

        // Bind events
        $this.on('click.' + NAME, '.uploader-btn-start', function(e) {
            that.start();
        }).on('click.' + NAME, '.uploader-btn-browse', function(e) {
            if($(this).is(that.$button)) return;
            that.$button.trigger('click');
        }).on('click.' + NAME, '.uploader-btn-stop', function(e) {
            that.stop();
        });

        $('body').on('dragleave.' + NAME + ' drop.' + NAME, function(e) {
            $this.removeClass('file-dragable');
        }).on('dragover.' + NAME + ' dragenter.' + NAME, function(e) {
            $this.addClass('file-dragable');
        });
        $dropElement.on('dragleave.' + NAME + ' drop.' + NAME, function(e) {
            $this.removeClass('file-drag-enter');
        }).on('dragover.' + NAME + ' dragenter.' + NAME, function(e) {
            $this.addClass('file-drag-enter');
        });

        $list.on('click.' + NAME, '.btn-delete-file', function() {
            var $file = $(this).closest('.file');
            var file = $file.data('file');
            var deleteActionOnDoneOption = options.deleteActionOnDone;
            var doneActionAble = file.status === Plupload.DONE && $.isFunction(deleteActionOnDoneOption);
            if(file.status === Plupload.QUEUED || file.status === Plupload.FAILED || doneActionAble) {
                var doRemoveFile = function() {
                    that.removeFile(file);
                };
                var removeFile = function() {
                    if(doneActionAble) {
                        var result = deleteActionOnDoneOption.call(that, file, doRemoveFile);
                        if(result === true) {
                            doRemoveFile();
                        }
                    } else {
                        doRemoveFile();
                    }
                };
                var deleteConfirmOption = options.deleteConfirm;
                if(deleteConfirmOption) {
                    var confirmMessage = $.isFunction(deleteConfirmOption) ? deleteConfirmOption(file) : (deleteConfirmOption === true ? lang.deleteConfirm : deleteConfirmOption);
                    confirmMessage = confirmMessage.format(file);
                    if(window.bootbox) {
                        window.bootbox.confirm(confirmMessage, function(result) {
                            if(result) removeFile();
                        });
                    } else {
                        if(window.confirm(confirmMessage)) removeFile();
                    }
                } else {
                    removeFile();
                }
            }
        }).on('click.' + NAME, '.btn-reset-file', function() {
            var $file = $(this).closest('.file');
            var file = that.plupload.getFile($file.data('id')) || $file.data('file');
            if(file.status === Plupload.FAILED) {
                file.status = Plupload.QUEUED;
                that.showFile(file);
                if(options.autoUpload) that.start();
            }
        });
        if(options.rename) {
            $list.toggleClass('file-rename-by-click', !!options.renameByClick)
                 .toggleClass('file-show-rename-action-on-done', !!options.renameActionOnDone);
            $list.on('click.' + NAME, '.btn-rename-file' + (options.renameByClick ? ',.file-name' : ''), function() {
                var $file = $(this).closest('.file');
                if($file.hasClass('file-renaming')) return;
                var file = that.plupload.getFile($file.data('id')) || $file.data('file');
                var renameActionOnDoneOption = options.renameActionOnDone;
                var renameActionAble = file.status === Plupload.DONE && $.isFunction(renameActionOnDoneOption);
                if(renameActionAble || file.status === Plupload.QUEUED) {
                    var $filename = $file.find('.file-name').first();
                    $file.addClass('file-renaming');
                    $filename.attr('contenteditable', 'true').one('blur', function() {
                        var filename = $.trim($filename.text());
                        var renameFile = function() {
                            if(filename !== undefined && filename !== null && filename !== '') {
                                var ext = file.ext;
                                if(ext.length && !options.renameExtension && filename.lastIndexOf('.' + ext) !== (filename.length - ext.length - 1)) {
                                    filename += '.' + ext;
                                }
                                file.name = filename;
                            }
                            that.showFile(file);
                        };
                        if(renameActionAble) {
                            var result = renameActionOnDoneOption.call(that, file, filename, renameFile);
                            if(result === true) {
                                doRemoveFile();
                            } else if(result === false) {
                                that.showFile(file);
                            }
                        } else {
                            renameFile();
                        }
                        $file.removeClass('file-renaming');
                        $filename.off('keydown.' + NAME).attr('contenteditable', null);

                     }).on('keydown.' + NAME, function(e) {
                        if(e.keyCode === 13) {
                            $filename.blur();
                            e.preventDefault();
                        }
                     }).focus();
                    that.showFile(file);
                }
            });
        }

        $list.toggleClass('file-show-delete-action-on-done', !!options.deleteActionOnDone);

        // Init static files
        if(options.staticFiles) {
            $.each(options.staticFiles, function(idx, file) {
                file = $.extend({status: Plupload.DONE}, file);
                file.static = true;
                if(!file.id) file.id = $.zui.uuid();
                that.showFile(file);
            });
        }

        that.callEvent('onInit');
    };

    // default options
    Uploader.DEFAULTS = DEFAULTS;

    Uploader.prototype.showMessage = function(message, type, time) {
        var that = this;
        var $msg = that.$message;
        if(!message) that.hideMessage();
        else clearTimeout(that.lastDismissMessage);
        type = type || 'danger';
        if(time === undefined) time = type === 'danger' ? 8 : 5;
        if(time < 20) time *= 1000;
        var $content = $msg.find('.content');
        if($content.length) $content.empty().append(message);
        else $msg.empty().append(message);
        $msg.attr('data-type', type).slideDown('fast');
        if(time) {
            that.lastDismissMessage = setTimeout(function() {
                that.hideMessage();
            }, time);
        }
    };

    Uploader.prototype.hideMessage = function() {
        clearTimeout(this.lastDismissMessage);
        this.$message.slideUp('fast');
    };

    Uploader.prototype.start = function() {
        return this.plupload.start();
    };

    Uploader.prototype.stop = function() {
        return this.plupload.stop();
    };

    Uploader.prototype.getState = function() {
        return this.plupload.state;
    };

    Uploader.prototype.isStarted = function() {
        return this.getState() === Plupload.STARTED;
    };

    Uploader.prototype.isStopped = function() {
        return this.getState() === Plupload.STOPPED;
    };

    Uploader.prototype.getFiles = function() {
        return this.plupload.files;
    };

    Uploader.prototype.getTotal = function() {
        return this.plupload.total;
    };

    Uploader.prototype.disableBrowse = function(disable) {
        this.$.find('.uploader-btn-browse').attr('disable', disable ? 'disable' : null).toggle('disable', !!disable);
        return this.plupload.disableBrowse();
    };

    Uploader.prototype.getFile = function(id) {
        return this.plupload.getFile(id);
    };

    Uploader.prototype.destroy = function() {
        var that = this;
        var eventNamespace = '.' + NAME;
        that.$.off(eventNamespace).data(NAME, null);
        that.$list.off(eventNamespace);
        that.$dropElement.off(eventNamespace);
        $('body').off(eventNamespace);
        that.plupload.destroy();
    };

    // see https://github.com/moxiecode/moxie/wiki/API
    Uploader.prototype.previewImageSrc = function(file, callback) {
        if(!file || !file.getSource || !/image\//.test(file.type)) return;
        var size = $.extend({width: 200, height: 200}, this.options.previewImageSize);
        if(file.type == 'image/gif') {
            //mOxie.Image only support jpg and png
            var fr = new Moxie.file.FileReader();
            fr.onload = function() {
                callback(fr.result);
                fr.destroy();
                fr = null;
            };
            fr.readAsDataURL(file.getSource());
        } else {
            var preloader = new Moxie.image.Image();
            preloader.onload = function() {
                // compressImage
                preloader.downsize(size.width, size.height); 
                var imgsrc = preloader.type == 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 80) : preloader.getAsDataURL(); // return base64 data
                callback(imgsrc);
                preloader.destroy();
                preloader = null;
            };
            preloader.load(file.getSource());
        }
    };  

    Uploader.prototype.createFileIcon = function(file) {
        var fileType = file.type;
        var ext = file.ext;
        var icon = 'file-o';
        var types = fileType ? fileType.split('/') : null;
        var type = (types && types.length) ? types[0] : '', subType = (types && types.length) > 1 ? types[1] : '';
        if(type == 'image') icon = 'file-image';
        else if(ext == 'doc' || ext == 'docx' || ext == 'pages') icon = 'file-word';
        else if(ext == 'ppt' || ext == 'pptx' || ext == 'key') icon = 'file-powerpoint';
        else if(ext == 'xls' || ext == 'xlsx' || ext == 'numbers') icon = 'file-excel';
        else if(ext == 'html' || ext == 'htm') icon = 'globe';
        else if(ext == 'js' || ext == 'php' || ext == 'cs' || ext == 'jsx' || ext == 'css' || ext == 'less' || ext == 'json' || ext == 'java' || ext == 'lua' || ext == 'py' || ext == 'c' || ext == 'cpp' || ext == 'swift' || ext == 'h' || ext == 'sh' || ext == 'rb' || ext == 'yml' || ext == 'ini' || ext == 'sql' || ext == 'xml') icon = 'file-code';
        else if(ext == 'apk') icon = 'android';
        else if(ext == 'exe') icon = 'windows';
        else if(ext == 'pkg' || ext == 'msi' || ext == 'dmg') icon = 'cube';
        else if(ext == 'epub') icon = 'book';
        else if(ext == 'sketch') icon = 'diamond';
        else if(subType == 'zip' || subType == 'x-rar' || subType == 'x-7z-compressed') icon = 'file-archive';
        else if(subType == 'pdf') icon = 'file-pdf';
        else if(type == 'video') icon = 'file-movie';
        else if(type == 'audio') icon = 'file-audio';
        else if(type == 'text') icon = 'file-text-o';
        return '<i class="icon icon-' + icon + ' file-icon-' + ext + '" data-type="' + fileType + '"' + (ext ? ' data-ext="' + ext + '"' : '') + '></i>';
    };

    Uploader.prototype.getFileItem = function(file) {
        var that = this;
        if(typeof file == 'string') {
            file = that.plupload.getFile(file);
        }

        if(!file) return null;

        var filename = file.name;
        if(filename && file.ext === undefined) {
            var ext = filename.lastIndexOf('.');
            if(ext > -1) ext = filename.substr(ext + 1);
            else ext = '';
            file.ext = ext;

            if(file.type && /image\//.test(file.type)) {
                file.isImage = file.ext;
            }
        }

        var $file = $('#file-' + file.id);
        if(!$file.length) {
            if($.isFunction(that.template)) {
                $file = $(that.template(file, that));
            } else {
                $file = $(that.template).clone();
                $file.find('.btn-rename-file').attr('title', that.lang.rename);
                $file.find('.btn-delete-file').attr('title', that.lang.remove);
                $file.find('.btn-reset-file').attr('title', that.lang.repeat);
                $file.find('.btn-download-file').attr('title', that.lang.download);
            }
            $file.data('id', file.id)
                 .toggleClass('file-static', !!file.static)
                 .attr('id', 'file-' + file.id)
                 .appendTo(that.$list);
            if($.fn.tooltip) $file.find('[data-toggle="tooltip"]').tooltip();
        }
        return $file;
    };

    Uploader.prototype.showFile = function(file, responseObject) {
        var that = this;
        if($.isArray(file)) {
            $.each(file, function(idx, f) {
                that.showFile(f, responseObject);
            });
            return;
        }

        if(typeof file == 'string') {
            file = that.plupload.getFile(file);
        }

        if(!file) return;

        var $file = that.getFileItem(file);
        if(!$file || !$file.length) {
            return;
        }

        var options = that.options;
        var status = STATUS[file.status];
        if(options.fileFormater) {
            options.fileFormater.call(that, $file, file, status);
        } else {
            var downloadUrl = (status == 'done' && file.url) ? file.url : null;
            $file.find('.file-name').text(file.name);
            $file.find('.file-size').text((status == 'uploading' ? (Plupload.formatSize(Math.floor(file.size*file.percent/100)).toUpperCase() + '/') : '') + Plupload.formatSize(file.size).toUpperCase());
            $file.find('.file-icon').html(options.fileIconCreator ? options.fileIconCreator(file.type, file, that) : that.createFileIcon(file)).css('color', 'hsl(' + $.zui.strCode(file.type || file.ext) + ', 70%, 40%)');
            $file.find('.file-progress-bar').css('width', file.percent + '%');
            var $status = $file.find('.file-status').attr('title', that.lang[status]);
            $status.find('.text').text(status == 'uploading' ? (file.percent + '%') : ((status == 'failed') ? that.lang[status] : ''));
            if($.fn.tooltip) $file.find('[data-toggle="tooltip"]').tooltip('fixTitle');
            $file.find('a.btn-download-file, a.file-name').attr('href', downloadUrl);
        }

        if(options.previewImageIcon && file.isImage) {
            var setPreviewImage = function() {
                $file.find('.file-icon').html('<div class="file-icon-image" style="background-image: url(' + file.previewImage + ')"></div>');
            };
            if(file.previewImage) {
                setPreviewImage();
            } else {
                that.previewImageSrc(file, function(src) {
                    file.previewImage = src;
                    setPreviewImage();
                });
            }
        }

        $file.attr('data-status', status)
             .data('file', file);

        // console.log('FILE', file);
    };

    Uploader.prototype.showStatus = function() {
        var that = this;
        var plupload = that.plupload;
        var $status = that.$status;
        var state = plupload.state, total = plupload.total, statusText = '', totalCount = plupload.files.length;
        if(that.options.statusCreator) {
            statusText = that.options.statusCreator(total, state, that);
        } else {
            var stateObj = {
                uploading: Math.max(0, Math.min(totalCount, total.uploaded + 1)),
                total: that.$list.children('.file-static').length + totalCount,
                size: Plupload.formatSize(total.size).toUpperCase(),
                queue: total.queued,
                failed: total.failed,
                uploaded: total.uploaded,
                uploadedSize: Plupload.formatSize(total.loaded).toUpperCase(),
                percent: total.percent,
                speed: Plupload.formatSize(total.bytesPerSec).toUpperCase() + '/S'
            };
            if(state == Plupload.STARTED) {
                statusText = that.lang.startedStatusText.format(stateObj);
            } else {
                if(totalCount < 1) {
                    statusText = that.lang.initStatusText;
                } else {
                    statusText = that.lang.stoppedStatusText.format(stateObj);
                }
            }
        }
        $status.html(statusText);
        if(total.uploaded < 1) $status.find('.uploader-status-uploaded').remove();
        if(total.failed < 1) $status.find('.uploader-status-failed').remove();
        if(total.queued < 1) $status.find('.uploader-status-queue').remove();
        if($.fn.tooltip) $status.find('[data-toggle="tooltip"]').tooltip();
    };

    Uploader.prototype.delayShowStatus = function(delay) {
        var that = this;
        if(that.delayStatusTask) return;
        that.delayStatusTask = true;
        if(delay === undefined) delay = 500;
        that.delayStatusTask = setTimeout(function() {
            that.showStatus();
            that.delayStatusTask = false;
        }, delay);
    };

    Uploader.prototype.removeFile = function(file, onlyRemoveElement) {
        var that = this;
        if(typeof file == 'string') {
            file = that.plupload.getFile(file);
        }
        if(onlyRemoveElement || file.static) {
            var $file = $('#file-' + file.id);
            if($.fn.tooltip) {
                $file.find('[data-toggle="tooltip"]').tooltip('destroy');
                $('.tooltip').remove();
            }
            $file.fadeOut(function() {
                $(this).remove();
            });
        } else {
            that.plupload.removeFile(file);
        }
    };

    Uploader.prototype.initPlupload = function() {
        var that = this;
        var options = that.options;
        var plOptions = $.extend({}, options, {
            browse_button: that.$button[0],
            container: that.$[0],
            drop_element: that.$dropElement[0],
            multipart_params: null
        });
        var eventHandlers = {
            FilesAdded: function(uploader, files) {
                var limitFilesCount = options.limitFilesCount;
                if(limitFilesCount) {
                    if(limitFilesCount === true) limitFilesCount = 1;
                    var existCount = that.$list.children('.file').length;
                    if((existCount + files.length) > limitFilesCount) {
                        that.showMessage(that.lang.limitFilesCountMessage.format({count: limitFilesCount}), 'warning');
                        var newFiles = [];
                        for(var i = 0; i < files.length; ++i) {
                            if((existCount + i + 1) <= limitFilesCount) {
                                newFiles.push(files[i]);
                            } else {
                                uploader.removeFile(files[i]);
                            }
                        }
                        if(!newFiles.length) return;
                        files = newFiles;
                    }
                }
                that.showFile(files);
                if(options.autoUpload) that.start();
                that.showStatus();
                that.callEvent('onFilesAdded', [files]);
            },
            UploadProgress: function(uploader, file) {
                that.showFile(file);
                that.delayShowStatus();
                that.callEvent('onUploadProgress', file);
            },
            FileUploaded: function(uploader, file, responseObject) {
                if(responseObject) {
                    var responseData = typeof responseObject === 'object' ? responseObject.response : responseObject;
                    try {file.remoteData = $.parseJSON(responseData);}
                    catch(e) {}
                }
                if(that.qiniuEnable && file.remoteData) {
                    file.url = uploader.settings.domain + file.remoteData.key;
                }
                var responseHandlerOption = options.responseHandler;
                if(responseHandlerOption) {
                    var error = null;
                    if($.isFunction(responseHandlerOption)) {
                        error = responseHandlerOption.call(that, responseObject, file);
                    } else if(responseObject.response) {
                        var json = file.remoteData;
                        if($.isPlainObject(json)) {
                            var result = json.status || json.result;
                            if(result !== undefined && result !== 'ok' && result !== 'success' && result !== 200) {
                                error = {message: json.message, data: json};
                            }
                            if(json.id !== undefined) file.remoteId = json.id;
                            if(json.url !== undefined) file.url = json.url;
                        }
                    }
                    if(error) {
                        error = $.isPlainObject(error) ? error : {message: error};
                            file.status = Plupload.FAILED;
                        if(error.code === undefined) error.code = Plupload.GENERIC_ERROR;
                        error.file = file;
                        error.responseObject = responseObject;
                        uploader.trigger('Error', error);
                        return;
                    }
                }

                if(file.status === Plupload.DONE) {
                    that.lastUploadedCount++;
                }
                that.showFile(file, responseObject);
                that.showStatus();
                that.callEvent('onFileUploaded', [file, responseObject]);

                if(file.status === Plupload.DONE) {
                    var optionRemoveUploaded = options.removeUploaded;
                    if(optionRemoveUploaded) {
                        setTimeout(function() {
                            $('#file-' + file.id).fadeOut(function() {
                                $(this).remove();
                            });
                        }, (typeof optionRemoveUploaded) === 'number' ? optionRemoveUploaded : 2000);
                    }
                }
            },
            UploadComplete: function(uploader, files) {
                that.showFile(files);
                that.showStatus();
                var uploadedMessage = options.uploadedMessage;
                if(uploadedMessage) {
                    var uploadedCount = that.lastUploadedCount;
                    var failedCount = 0;
                    $.each(files, function(idx, file) {
                        if(file.status === Plupload.FAILED) failedCount++;
                    });
                    var msg = '',
                        msgData = {
                            uploaded: uploadedCount,
                            failed: failedCount
                        };
                    if(typeof uploadedMessage === 'string') {
                        msg = uploadedMessage.format(msgData);
                    } else if($.isFunction(uploadedMessage)) {
                        msg = uploadedMessage(msgData);
                    } else {
                        msg = that.lang[failedCount > 0 ? 'uploadHasFailedMessage' : (uploadedCount > 0 ? 'uploadSuccessMessage' : 'uploadEmptyMessage')].format(msgData);
                    }
                    that.showMessage(msg, failedCount > 0 ? 'danger' : (uploadedCount > 0 ? 'success' : 'warning'), 3);
                }
                that.callEvent('onUploadComplete', [files]);
            },
            FilesRemoved: function(uploader, files) {
                $.each(files, function(idx, file) {
                    that.removeFile(file, true);
                });
                that.showStatus();
                that.callEvent('onFilesRemoved', files);
            },
            ChunkUploaded: function(uploader, file, responseObject) {
                that.callEvent('onChunkUploaded', [file, responseObject]);
            },
            UploadFile: function(uploader, file) {
                that.showStatus();
                that.callEvent('onUploadFile', file);
            },
            BeforeUpload: function(uploader, file) {
                var oldParams = uploader.getOption('multipart_params');
                var multipartParamsOption = options.multipart_params;
                var params = {};
                if(options.sendFileName) params[options.sendFileName === true ? 'name' : options.sendFileName] = file.name;
                if(options.sendFileId) params[options.sendFileId === true ? 'uuid' : options.sendFileId] = file.id;
                params = $.extend(params, oldParams, $.isFunction(multipartParamsOption) ? multipartParamsOption() : multipartParamsOption);
                uploader.setOption('multipart_params', params);

                that.callEvent('onBeforeUpload', file);
            },
            Refresh: function(uploader) {
                that.showStatus();
                that.callEvent('onRefresh');
            },
            StateChanged: function(uploader) {
                if(uploader.state === Plupload.STARTED) {
                    that.lastUploadedCount = 0;
                }
                that.$.toggleClass('uploader-started', Plupload.STARTED === uploader.state);
                that.hideMessage();
                that.showStatus();
                that.callEvent('onStateChanged', uploader.state);
            },
            QueueChanged: function(uploader) {
                that.showStatus();
                that.callEvent('onQueueChanged');
            },
            Error: function(uploader, error) {
                var type = 'danger';
                if(error.code === Plupload.FILE_SIZE_ERROR || error.code === Plupload.FILE_SIZE_ERROR || error.code === Plupload.FILE_EXTENSION_ERROR || error.code === Plupload.FILE_DUPLICATE_ERROR || error.code === Plupload.MAGE_FORMAT_ERROR) type = 'warning';
                that.showMessage(error.message, type);
                that.callEvent('onError', error);
            }
        };

        Plupload.addI18n(that.lang.i18n);

        that.qiniuEnable = $.isPlainObject(options.qiniu) && window.Qiniu;
        if(that.qiniuEnable) {
            var qiniuOptions = options.qiniu;
            var qiniuKeyFunc = qiniuOptions.key;
            delete plOptions.qiniu;
            if(qiniuKeyFunc) {
                delete qiniuOptions.key;
                if($.isFunction(qiniuKeyFunc)) {
                    eventHandlers.Key = qiniuKeyFunc;
                }
            } else {
                eventHandlers.Key = function(uploader, file) {
                    return file.name;
                };
            }
            qiniuOptions.init = eventHandlers;
            plOptions = $.extend(plOptions, qiniuOptions);
            var qiniuSKD = new QiniuJsSDK();
            var plupload = qiniuSKD.uploader(plOptions);
            that.plupload = plupload;
        } else {
            var plupload = new Plupload.Uploader(plOptions);
            plupload.init();
            that.plOptions = plOptions;
            that.plupload = plupload;
            $.each(eventHandlers, function(eventName, eventHandler) {
                plupload.bind(eventName, eventHandler);
            });
        }
    };

    // Get and init options
    Uploader.prototype.getOptions = function(options) {
        this.options = $.extend({
            lang: $.zui.clientLang()
        }, DEFAULTS, this.$.data(), options);
        return this.options;
    };

    // Call event helper
    Uploader.prototype.callEvent = function(name, params) {
        var that = this;
        if(!$.isArray(params)) params = [params];
        that.$.trigger(name, params);
        if($.isFunction(that.options[name])) {
            return that.options[name].apply(that, params);
        }
    };

    // Extense jquery element
    $.fn.uploader = function(option, params) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Uploader(this, options)));

            if(typeof option == 'string') data[option](params);
        });
    };

    Uploader.NAME   = NAME;
    Uploader.STATUS = STATUS;
    Uploader.ERRORS = ERRORS;
    Uploader.NAME   = NAME;
    Uploader.LANG   = {
        zh_cn: {"limitFilesCountMessage": "所有文件数目不能超过 {count} 个，如果要上传此文件请先从列表移除文件。", "uploadEmptyMessage": "没有文件等待上传。", "uploadSuccessMessage": "已上传 <strong>{uploaded}</strong> 个文件。", "uploadHasFailedMessage": "已上传 <strong>{uploaded}</strong> 个文件，<strong>{failed}</strong> 个文件上传失败。", "startedStatusText": "正在上传第 <strong>{uploading}</strong> 个文件，共 <strong title=\"总大小：{size}\" data-toggle=\"tooltip\" class=\"text-primary\">{total}</strong> 个文件，<span class=\"uploader-status-uploaded\">已上传 <strong title=\"总大小：{uploadedSize}\" data-toggle=\"tooltip\" class=\"text-primary\">{uploaded}</strong> 个文件，</span><span class=\"uploader-status-failed\"><strong>{failed}</strong> 个上传失败，</span>进度 <strong>{percent}%</strong>，平均速度 <strong>{speed}</strong>。", "initStatusText": "添加文件或拖放文件来上传。", "stoppedStatusText": "共 <strong title=\"总大小：{size}\" data-toggle=\"tooltip\" class=\"text-primary\">{total}</strong> 个文件<span class=\"uploader-status-queue\">，<strong>{queue}</strong> 个文件等待上传</span><span class=\"uploader-status-uploaded\">，已上传 <strong title=\"总大小：{uploadedSize}\" data-toggle=\"tooltip\" class=\"text-primary\">{uploaded}</strong> 个文件</span><span class=\"uploader-status-failed\">，<strong>{failed}</strong> 个上传失败</span><span class=\"uploader-status-uploaded\">，平均速度 <strong>{speed}</strong></span>。", "deleteConfirm": "确定移除文件【{name}】？", "download": "下载", "rename": "重命名", "repeat": "重新上传", "remove": "移除", "dropPlaceholder": "将文件拖放至在此处。", "queue": "待上传", "uploading": "正在上传", "failed": "失败", "done": "已上传", "i18n": {"Stop Upload":"停止上传","Upload URL might be wrong or doesn't exist.":"上传的URL可能是错误的或不存在。","tb":"tb","Size":"大小","Close":"关闭","You must specify either browse_button or drop_element.":"您必须指定 browse_button 或者 drop_element。","Init error.":"初始化错误。","Add files to the upload queue and click the start button.":"将文件添加到上传队列，然后点击”开始上传“按钮。","List":"列表","Filename":"文件名","%s specified, but cannot be found.":"%s 已指定，但是没有找到。","Image format either wrong or not supported.":"图片格式错误或者不支持。","Status":"状态","HTTP Error.":"HTTP 错误。","Start Upload":"开始上传","Error: File too large:":"错误: 文件太大:","kb":"kb","Duplicate file error.":"无法添加重复文件。","File size error.":"文件大小错误。","N/A":"N/A","gb":"gb","Error: Invalid file extension:":"错误：无效的文件扩展名:","Select files":"选择文件","%s already present in the queue.":"%s 已经在当前队列里。","Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.":"超限。<b>%s</b> 支持最大 %wx%hpx 的图片。","File: %s":"文件: %s","b":"b","Uploaded %d/%d files":"已上传 %d/%d 个文件","Upload element accepts only %d file(s) at a time. Extra files were stripped.":"每次只接受同时上传 %d 个文件，多余的文件将会被删除。","%d files queued":"%d 个文件加入到队列","File: %s, size: %d, max file size: %d":"文件: %s, 大小: %d, 最大文件大小: %d","Thumbnails":"缩略图","Drag files here.":"把文件拖到这里。","Runtime ran out of available memory.":"运行时已消耗所有可用内存。","File count error.":"文件数量错误。","File extension error.":"文件扩展名错误。","mb":"mb","Add Files":"增加文件"}},
        zh_tw: {"limitFilesCountMessage": "所有文件數目不能超過 {count} 個。","uploadEmptyMessage": "没有文件等待上傳。", "uploadSuccessMessage": "已上傳 <strong>{uploaded}</strong> 个文件。", "uploadHasFailedMessage": "文件上傳完成，已上傳 <strong>{uploaded}</strong> 個文件，<strong>{failed}</strong> 個文件上傳失败。", "startedStatusText": "正在上傳第<strong>{uploading}</strong> 個文件，共<strong title=\"總大小：{size}\" data-toggle=\"tooltip\" class=\"text -primary\">{total}</strong> 個文件，<span class=\"uploader-status-uploaded\">已上傳<strong title=\"總大小：{uploadedSize}\" data-toggle=\"tooltip\" class=\"text-primary\">{uploaded}</strong> 個文件，</span><span class=\"uploader-status-failed\"><strong>{failed}</ strong> 個上傳失敗，</span>進度<strong>{percent}%</strong>，平均速度<strong>{speed}</strong>。", "initStatusText": "添加文件或拖放文件來上傳。", "stoppedStatusText": "共<strong title=\"總大小：{size}\" data-toggle=\"tooltip\" class=\"text-primary\">{total}</strong> 個文件<span class=\"uploader-status-queue\">，<strong>{queue}</strong> 個文件等待上傳</span><span class=\"uploader-status-uploaded\">，已上傳<strong title=\"總大小：{uploadedSize}\" data-toggle=\"tooltip\" class=\"text-primary\">{uploaded}</strong> 個文件</span><span class=\" uploader-status-failed\">，<strong>{failed}</strong> 個上傳失敗</span><span class=\"uploader-status-uploaded\">，平均速度<strong>{speed}< /strong></span>。", "deleteConfirm": "確定移除文件【{name}】？", "download": "下载", "rename": "重命名", "repeat": "重新上傳", "remove": "移除", "dropPlaceholder": "將文件拖放至在此處。", "queue": "待上傳", "uploading": "正在上傳", "failed": "失敗", "done": "已上傳", "i18n": {"Stop Upload":"停止上傳","Upload URL might be wrong or doesn't exist.":"檔案URL可能有誤或者不存在。","tb":"tb","Size":"大小","Close":"關閉","You must specify either browse_button or drop_element.":"您必須指定 browse_button 或 drop_element。","Init error.":"初始化錯誤。","Add files to the upload queue and click the start button.":"將檔案加入上傳序列，然後點選”開始上傳“按鈕。","List":"清單","Filename":"檔案名稱","%s specified, but cannot be found.":"找不到已選擇的 %s。","Image format either wrong or not supported.":"圖片格式錯誤或者不支援。","Status":"狀態","HTTP Error.":"HTTP 錯誤。","Start Upload":"開始上傳","Error: File too large:":"錯誤: 檔案大小太大:","kb":"kb","Duplicate file error.":"錯誤：檔案重複。","File size error.":"錯誤：檔案大小超過限制。","N/A":"N/A","gb":"gb","Error: Invalid file extension:":"錯誤：不接受的檔案格式:","Select files":"選擇檔案","%s already present in the queue.":"%s 已經存在目前的檔案序列。","Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.":"圖片解析度超出範圍！ <b>%s</b> 最高只支援到 %wx%hpx。","File: %s":"檔案: %s","b":"b","Uploaded %d/%d files":"已上傳 %d/%d 個文件","Upload element accepts only %d file(s) at a time. Extra files were stripped.":"每次只能上傳 %d 個檔案，超過限制數量的檔案將被忽略。","%d files queued":"%d 個檔案加入到序列","File: %s, size: %d, max file size: %d":"檔案: %s, 大小: %d, 檔案大小上限: %d","Thumbnails":"縮圖","Drag files here.":"把檔案拖曳到這裡。","Runtime ran out of available memory.":"執行時耗盡了所有可用的記憶體。","File count error.":"檔案數量錯誤。","File extension error.":"檔案副檔名錯誤。","mb":"mb","Add Files":"增加檔案"}},
        en: {"limitFilesCountMessage": "All files count can not over {count}.","uploadEmptyMessage": "No file in queue to upload", "uploadSuccessMessage": "Uploaded <strong>{uploaded}</strong> files。", "uploadHasFailedMessage": "Uploaded complete, <strong>{uploaded}</strong> success, <strong>{failed}</strong> failed.", "startedStatusText": "Uploading NO.<strong>{uploading}</strong> file, total <strong title=\"Total size: {size}\" data-toggle=\"tooltip\" class=\"text-primary\">{total}</strong> files, <span class=\"uploader-status-uploaded\">Uploaded <strong title=\"Total size: {uploadedSize}\" data-toggle=\"tooltip\" class=\"text-primary\">{uploaded}</strong> files, </span><span class=\"uploader-status-failed\"><strong>{failed}</strong> failed, </span>progress <strong>{percent}%</strong>, average spped <strong>{speed}</strong>。", "initStatusText": "Append or drag file here.", "stoppedStatusText": "Total <strong title=\"Total size: {size}\" data-toggle=\"tooltip\" class=\"text-primary\">{total}</strong> files<span class=\"uploader-status-queue\">, <strong>{queue}</strong> files in queue</span><span class=\"uploader-status-uploaded\">, uploaded <strong title=\"Total size: {uploadedSize}\" data-toggle=\"tooltip\" class=\"text-primary\">{uploaded}</strong> files</span><span class=\"uploader-status-failed\">, <strong>{failed}</strong> failed</span><span class=\"uploader-status-uploaded\">, average spped <strong>{speed}</strong></span>。", "deleteConfirm": "Remove file \"{name}\" form upload queue?", "rename": "Rename", "download": "Download", "repeat": "Repeat", "remove": "Remove", "dropPlaceholder": "Drop file here.", "queue": "Wait", "uploading": "Uploading", "failed": "Failed", "done": "Done", "i18n": {"Stop Upload":"Stop Upload","Upload URL might be wrong or doesn't exist.":"Upload URL might be wrong or doesn't exist.","tb":"tb","Size":"Size","Close":"Close","You must specify either browse_button or drop_element.":"You must specify either browse_button or drop_element.","Init error.":"Init error.","Add files to the upload queue and click the start button.":"Add files to the upload queue and click the start button.","List":"List","Filename":"Filename","%s specified, but cannot be found.":"%s specified, but cannot be found.","Image format either wrong or not supported.":"Image format either wrong or not supported.","Status":"Status","HTTP Error.":"HTTP Error.","Start Upload":"Start Upload","Error: File too large:":"Error: File too large:","kb":"kb","Duplicate file error.":"Duplicate file error.","File size error.":"File size error.","N/A":"N/A","gb":"gb","Error: Invalid file extension:":"Error: Invalid file extension:","Select files":"Select files","%s already present in the queue.":"%s already present in the queue.","Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.":"Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.","File: %s":"File: %s","b":"b","Uploaded %d/%d files":"Uploaded %d/%d files","Upload element accepts only %d file(s) at a time. Extra files were stripped.":"Upload element accepts only %d file(s) at a time. Extra files were stripped.","%d files queued":"%d files queued","File: %s, size: %d, max file size: %d":"File: %s, size: %d, max file size: %d","Thumbnails":"Thumbnails","Drag files here.":"Drag files here.","Runtime ran out of available memory.":"Runtime ran out of available memory.","File count error.":"File count error.","File extension error.":"File extension error.","mb":"mb","Add Files":"Add Files"}}
    };

    $.zui.plupload = Plupload;
    $.zui.moxie    = Moxie;
    $.zui.Uploader = Uploader;

    $.fn.uploader.Constructor = Uploader;

    // For qiniu
    if(!window.mOxie) window.mOxie = {
        Env: Moxie.core.utils.Env,
        XMLHttpRequest: Moxie.xhr.XMLHttpRequest
    };

    // Auto call uploader after document load complete
    $(function() {
        $('[data-ride="uploader"]').uploader();
    });
}(jQuery, window, plupload, moxie, undefined));

