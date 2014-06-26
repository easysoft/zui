/* Mindmap */
+function($, window, document, Math)
{
    "use strict";

    var Mindmap = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);
        this.data      = this.options.data;
        this.init();
    };

    Mindmap.DEFAULTS = 
    {
        data: 
        {
            name: 'New Project',
            type: 'root',
            expand: true,
            theme: 'default',
            caption: '',
            id: $.uuid()
        },
        nodeTeamplate: "<div class='node expand-{expand}' data-type='{type}' data-id='{id}' data-parent='{parent}'><div class='text' contenteditable='true'>{name}</div><div class='caption'>{caption}</div></div>"
    }; // default options

    Mindmap.prototype.getOptions = function (options)
    {
        options = $.extend({}, Mindmap.DEFAULTS, this.$.data(), options);
        return options;
    };

    Mindmap.prototype.init = function()
    {
        this.initDom();
        this.initSize();
        this.bindEvents();

        this.render();
    }

    Mindmap.prototype.initDom = function()
    {
        var $this = this.$;
        this.$canvas = $this.children('canvas');
        if(!this.$canvas.length)
        {
            $this.prepend("<canvas class='mindmap-bg'></canvas>");
            this.$canvas = $this.children('canvas');
        }
        this.$desktop = $this.children('.mindmap-desktop');
        if(!this.$desktop.length)
        {
            $this.append("<div class='mindmap-desktop'></div>");
            this.$desktop = $this.children('.mindmap-desktop');
        }
    }

    Mindmap.prototype.initSize = function()
    {
        var $this = this.$,
            $canvas = this.$canvas;
        this.width = $this.width();
        this.height = $this.height();
        this.centerX = Math.floor(this.width / 2);
        this.centerY = Math.floor(this.height / 2);

        $canvas.attr('width', this.width)
               .attr('height', this.height);
    }

    Mindmap.prototype.load = function(data)
    {
        this.data = data;
        this.render(data);
    }

    Mindmap.prototype.render = function()
    {
        this.load(this.data);
        this.show(this.data);
    }

    Mindmap.prototype.loadNode = function(nodeData, parent)
    {
        console.log('===== render =====');
        console.log(nodeData);

        if(!nodeData)
        {
            nodeData = this.data;
        }

        var options = this.options,
            $desktop = this.$desktop;

        var node = $desktop.children('.node[data-id="' + nodeData.id + '"]');
        if(node.length) // updated node existed
        {
            node.toggleClass('expand-false', !nodeData.expand)
                .toggleClass('expand-true', nodeData.expand)
                .attr('data-type', nodeData.type)
                .attr('data-parent', parent || root);
            node.children('.text').html(nodeData.name);
            node.children('.caption').html(nodeData.caption);
        }
        else // create new node
        {
            node = $(options.nodeTeamplate.format(
            {
                type: nodeData.type || 'node',
                expand: nodeData.expand,
                caption: nodeData.caption || '',
                id: nodeData.id,
                parent: parent || 'root',
                name: nodeData.name
            })).appendTo($desktop);
        }

        /* load children nodes */
        if(nodeData.children)
        {
            for(var i in nodeData.children)
            {
                this.loadNode(nodeData.children[i], nodeData.id);
            }
        }
    }

    /* show on desktop with right position */
    Mindmap.prototype.showNode = function(nodeData, parent, index, count)
    {
        var css = {},
            childrenCount = $.getPropertyCount(nodeData.children)
            $desktop = this.$desktop;
        var node = $desktop.children('.node[data-id="' + nodeData.id + '"]');
        var width = node.outerWidth(),
            height = node.outerHeight();
        if(nodeData.type == 'root')
        {
            css.left = this.centerX - Math.floor(width / 2);
            css.top = this.centerY - Math.floor(height / 2);
        }
        node.css(css);

        /* draw line between nodes */
        this.drawLineToLinkNode(nodeData, parent);

        /* load children nodes */
        if(childrenCount > 0)
        {
            var j = 0;
            for(var i in nodeData.children)
            {
                this.showNode(nodeData.children[i], nodeData.id, j++, childrenCount);
            }
        }
    }

    Mindmap.prototype.drawLineToLinkNode = function(nodeData, parent)
    {

    }

    Mindmap.prototype.bindEvents = function()
    {
        var $this = this.$;

        $this.resize($.proxy(this.initSize, this));
    }

    $.fn.mindmap = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.mindmap');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.mindmap', (data = new Mindmap(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.mindmap.Constructor = Mindmap;
}(jQuery,window,document,Math);
