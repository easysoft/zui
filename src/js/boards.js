/* Boards */
+function($, window, document, Math)
{
    "use strict";

    if (!$.fn.droppable) throw new Error('droppable requires for boards');

    var Boards = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);

        this.getLang();
        this.init();
    };

    Boards.DEFAULTS = 
    {
        lang: 'zh-cn',
        langs: 
        {
            'zh-cn': {appendToTheEnd: '移动到末尾'},
            'zh-tw': {appendToTheEnd: '移动到末尾'},
            'en': {appendToTheEnd: 'Move to the end.'}
        }
    }; // default options

    Boards.prototype.getOptions = function (options)
    {
        options = $.extend({}, Boards.DEFAULTS, this.$.data(), options);
        return options;
    };

    Boards.prototype.getLang = function()
    {
        if(!this.options.lang)
        {
            if(typeof(config) != 'undefined' && config.clientLang)
            {
                this.options.lang = config.clientLang;
            }
            else
            {
                var hl = $('html').attr('lang');
                this.options.lang = hl? hl : 'en';
            }
            this.options.lang = this.options.lang.replace(/-/, '_').toLowerCase();
        }
        this.lang = this.options.langs[this.options.lang] || this.options.langs[Boards.DEFAULTS.lang];
    };

    Boards.prototype.init = function()
    {
        var idSeed = 1;
        var lang = this.lang;
        this.$.find('.board-item:not(".disable-drop"), .board:not(".disable-drop")').each(function()
        {
            var $this = $(this);
            if($this.attr('id'))
            {
                $this.attr('data-id', $this.attr('id'));
            }
            else if(!$this.attr('data-id'))
            {
                $this.attr('data-id', 'board' + (idSeed++));
            }

            if($this.hasClass('board'))
            {
                $this.find('.board-list').append('<div class="board-item board-item-empty"><i class="icon-plus"></i> {appendToTheEnd}</div>'.format(lang))
                .append('<div class="board-item board-item-shadow"></div>'.format(lang));
            }
        });

        this.bind();
    };

    Boards.prototype.bind = function(items)
    {
        var $boards = this.$, setting = this.options;
        if(typeof(items) == 'undefined')
        {
            items = $boards.find('.board-item:not(".disable-drop, .board-item-shadow")');
        }

        items.droppable(
        {
            target: '.board-item:not(".disable-drop, .board-item-shadow")',
            flex: true,
            start: function(e)
            {
                $boards.addClass('dragging').find('.board-item-shadow').height(e.element.outerHeight());
            },
            drag: function(e)
            {
                $boards.find('.board.drop-in-empty').removeClass('drop-in-empty');
                if(e.isIn)
                {
                    var board = e.target.closest('.board').addClass('drop-in');
                    var shadow = board.find('.board-item-shadow');
                    var target = e.target;

                    $boards.addClass('drop-in').find('.board.drop-in').not(board).removeClass('drop-in');

                    shadow.insertBefore(target);

                    board.toggleClass('drop-in-empty', target.hasClass('board-item-empty'));
                }
            },
            drop: function(e)
            {
                if(e.isNew)
                {
                    if(setting.hasOwnProperty('drop') && $.isFunction(setting['drop']))
                    {
                        setting['drop'](e);
                    }
                    e.element.insertBefore(e.target);
                }
            },
            finish: function(e)
            {
                $boards.removeClass('dragging').removeClass('drop-in').find('.board.drop-in').removeClass('drop-in');
            }
        });
    };

    $.fn.boards = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.boards');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.boards', (data = new Boards(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.boards.Constructor = Boards;

    $(function()
    {
        $('[data-toggle="boards"]').boards();
    });
}(jQuery,window,document,Math);
