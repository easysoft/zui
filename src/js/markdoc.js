/* ========================================================================
 * ZUI: markdoc.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2017-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    $.zui.marked = window.marked;

    var NAME = 'zui.markdoc'; // model name

    // The markdoc model class
    var MarkDoc = function(element, options) {
        var that = this;
        that.name = NAME;
        that.$ = $(element);

        that.options = $.extend({}, MarkDoc.DEFAULTS, this.$.data(), options);
        that.$.data('originContent', that.$.text());
        that.render();
    };

    MarkDoc.prototype.render = function(extraOptions) {
        var that = this;
        if (extraOptions && typeof extraOptions !== 'object') {
            extraOptions = {content: extraOptions};
        }
        var options = $.extend({}, that.options, extraOptions);
        var $ele = that.$;
        if ($ele.hasClass('load-indicator')) {
            $ele.addClass('loading');
        }
        if (that.remoteRequest) {
            that.remoteRequest.abort();
        }
        that.getContent(function(content) {
            $ele.empty();
            if (content) {
                var htmlContent = options.markdown(content);
                if (options.contentConverter) {
                    htmlContent = options.contentConverter(htmlContent);
                }
                $ele.append(htmlContent);
                if(window.prettyPrint) {
                    $ele.find('pre').addClass('prettyprint');
                    window.prettyPrint();
                }
            }
            $ele.removeClass('loading');
        }, options);
    };

    MarkDoc.prototype.getContent = function(callback, options) {
        var that = this;
        options = options || that.options;;
        var content = options.content;
        if (content) {
            callback(typeof content === 'function' ? content(that) : content);
        } else if (options.remote) {
            var ajaxOptions = $.isPlainObject(options.remote) ? options.remote : {url: options.remote};
            that.remoteRequest = $.ajax($.extend({}, ajaxOptions, {
                success: function(data) {
                    callback(data);
                },
                error: function(data) {
                    callback(null);
                },
                complete: function() {
                    that.remoteRequest = null;
                }
            }));
        } else if (options.source) {
            var $source = typeof options.source === 'function' ? options.source(that) : $(options.source);
            if ($source.is('textarea,input')) {
                callback($source.val());
            } else {
                callback($source.text());
            }
        } else {
            callback(this.$.data('originContent'));
        }
    };

    // default options
    MarkDoc.DEFAULTS = {
        markdown: $.zui.marked
    };

    // Extense jquery element
    $.fn.markdoc = function(option, param) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new MarkDoc(this, options)));

            if(typeof option == 'string') data[option](param);
        });
    };

    MarkDoc.NAME = NAME;

    $.fn.markdoc.Constructor = MarkDoc;

    // Auto call markdoc after document load complete
    $(function() {
        $('[data-render="markdoc"]').markdoc();
    });

    $(document).on('click', '[data-toggle="markdoc"]', function(e) {
        var $this = $(this);
        var options = $this.data();
        var $target = $(options.target);
        if (!$target.length) {
            return;
        }
        if (!$target.data(NAME)) {
            $target.markdoc();
        }
        $target.markdoc('render', $.extend(options, {
            remote: $this.attr('href')
        }));
        if($this.is('a')) {
            e.preventDefault();
        }
    });
}(jQuery));
