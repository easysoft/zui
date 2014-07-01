/* Mindmap */
+function($, window, document, Math)
{
    "use strict";

    var Mindmap = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);
        this.data      = this.options.data;
        this.dirtyData = true;
        this.init();
    };

    Mindmap.DEFAULTS = 
    {
        data: 
        {
            text: 'New Project',
            type: 'root',
            expand: true,
            theme: 'default',
            caption: '',
            id: $.uuid()
        },
        nodeTeamplate: "<div id='node-{id}' class='mindmap-node expand-{expand}' data-type='{type}' data-id='{id}' data-parent='{parent}'><div class='wrapper'><div class='text'>{text}</div><div class='caption'>{caption}</div></div></div>",
        hSpace: 120,
        vSpace: 20,
        lineCurvature: 60,
        subLineWidth: 4,
        lineOpacity: 1,
        lineSaturation: 90,
        lineLightness: 40,
        nodeLineWidth: 2
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

        if(!$this.attr('id'))
        {
            $this.attr('id', 'mindmap-' + $.uuid());
        }
        this.id = $this.attr('id');

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
        this.$desktop.attr('unselectable', 'on');

        var $shadows = $this.children('.shadow');
        if(!$shadows.length)
        {
            $this.append("<div class='mindmap-shadow shadow-top'></div><div class='mindmap-shadow shadow-right'></div><div class='mindmap-shadow shadow-bottom'></div><div class='mindmap-shadow shadow-left'></div>");
        }
    }

    Mindmap.prototype.initSize = function()
    {
        var $this = this.$,
            $canvas = this.$canvas;
        this.width = $this.width();
        this.height = $this.height();
        this.offsetX = Math.floor(this.width / 2);
        this.offsetY = Math.floor(this.height / 2);

        $canvas.attr('width', this.width)
               .attr('height', this.height);

        if(!this.dirtyData) this.showNode();
    }

    Mindmap.prototype.computePosition = function(pos)
    {
        if(typeof(pos.left) != 'undefined') pos.left += this.offsetX;
        if(typeof(pos.top) != 'undefined') pos.top += this.offsetY;
        if(typeof(pos.x) != 'undefined') pos.x += this.offsetX;
        if(typeof(pos.y) != 'undefined') pos.y += this.offsetY;
        return pos;
    }

    Mindmap.prototype.computeColor = function(hue)
    {
        return 'hsla({h}, {s}%, {l}%, {a})'.format({h: hue, s: this.options.lineSaturation, l: this.options.lineLightness, a: this.options.lineOpacity});
    }

    Mindmap.prototype.getNodeData = function(id, nodeData)
    {
        if(!nodeData)
        {
            nodeData = this.data;
        }

        if(id == nodeData.id)
        {
            return nodeData;
        }
        else if($.isArray(nodeData.children) && nodeData.children.length > 0)
        {
            for(var i in nodeData.children)
            {
                var node = this.getNodeData(id, nodeData.children[i]);
                if(node) return node;
            }
        }
        return null;
    }

    /* update nodeData changes and  decide whether to rerender mindmap */
    Mindmap.prototype.update = function(changes, forceShow, forceLoad)
    {
        var changed = false, options = this.options;

        if($.isPlainObject(changes))
        {
            changes = [changes];
        }
        if($.isArray(changes))
        {
            for(var i in changes)
            {
                var change = changes[i];
                var node = this.getNodeData(change.id);
                if(!node) return;

                if(change.text && change.text != node.text)
                {
                    node.text = change.text;
                    forceShow = true;
                    changed = true;
                }
            }
        }
        
        if(forceLoad) this.loadNode();
        if(forceShow) this.showNode();

        if(changed && $.isFunction(options['onChange']))
        {
            options['onChange']({changes: changes, data: this.data});
        }
    }

    Mindmap.prototype.load = function(data)
    {
        this.data = data;
        this.render(data);
    }

    Mindmap.prototype.render = function()
    {
        console.log(this.data);
        this.loadNode();
        this.showNode();
        console.log(this.data);
    }

    Mindmap.prototype.loadNode = function(nodeData, parent, index)
    {
        if(!nodeData)
        {
            nodeData = this.data;
        }

        var options = this.options,
            $desktop = this.$desktop,
            parentId = typeof(parent) == 'object' ? (parent.id ? parent.id : '') : '';

        if(typeof(nodeData.expand) === 'undefined') nodeData.expand = true;
        if(typeof(nodeData.data) === 'undefined') nodeData.data = {};
        if(typeof(nodeData.type) === 'undefined') nodeData.type = 'node';
        if(typeof(nodeData.id) === 'undefined')
        {
            if(index)
            {
                nodeData.id = index;
            }
            else
            {
                nodeData.id = $.uuid();
            }
        }

        var $node = $desktop.children('.mindmap-node[data-id="' + nodeData.id + '"]');
        if($node.length) // updated node existed
        {
            $node.toggleClass('expand-false', !nodeData.expand)
                .toggleClass('expand-true', nodeData.expand)
                .attr('data-type', nodeData.type)
                .attr('data-parent', parentId || 'root');
            $node.children('.text').html(nodeData.text);
            $node.children('.caption').html(nodeData.caption);
        }
        else // create new node
        {
            $node = $(options.nodeTeamplate.format(
            {
                type: nodeData.type || 'node',
                expand: nodeData.expand,
                caption: nodeData.caption || '',
                id: nodeData.id,
                parent: parentId || 'root',
                text: nodeData.text
            })).appendTo($desktop);

            this.bindNodeEvents($node);

            nodeData.ui = {element: $node};

            if(nodeData.type === 'root')
            {
                nodeData.ui.subLeftSide = 0;
                nodeData.ui.subRightSide = 0;
                nodeData.ui.vLeftSpan = 0;
                nodeData.ui.vRightSpan = 0;
            }
            else if(nodeData.type === 'sub')
            {
                var subSide = nodeData.subSide;
                if(!subSide)
                {
                    if(parent.ui.subRightSide > parent.ui.subLeftSide)
                    {
                        subSide = 'left';
                    }
                    else
                    {
                        subSide = 'right';
                    }
                }
                if(subSide === 'left')
                {
                    parent.ui.subLeftSide++;
                }
                else
                {
                    parent.ui.subRightSide++;
                }
                nodeData.subSide = subSide;
            }
            else
            {
                nodeData.subSide = parent.subSide;
            }
        }
        $node.data('origin-text', nodeData.text);

        /* load children nodes */
        var vSpan = 1, topSpan = 0;
        nodeData.count = 0;
        if($.isArray(nodeData.children) && nodeData.children.length > 0)
        {
            nodeData.ui.topSpanTemp = (nodeData.type === 'root') ? {left: 0, right: 0} : 0;
            var vLeftSpan = 0, vRightSpan = 0;
            vSpan = 0;

            nodeData.children.sort(function(nodeA, nodeB){return nodeA.sort - nodeB.sort});

            for(var i in nodeData.children)
            {
                var child = nodeData.children[i];
                this.loadNode(child, nodeData, i);

                child.ui.index = nodeData.count++;
                if(typeof(child['order']) === 'undifined')
                {
                    child.order = nodeData.count++;
                }

                vSpan += child.ui.vSpan;
                if(child.type === 'sub')
                {
                    if(child.subSide === 'left')
                    {
                        vLeftSpan += child.ui.vSpan;
                        child.ui.topSpan = nodeData.ui.topSpanTemp.left;
                        nodeData.ui.topSpanTemp.left += child.ui.vSpan;
                    }
                    else
                    {
                        vRightSpan += child.ui.vSpan;
                        child.ui.topSpan = nodeData.ui.topSpanTemp.right;
                        nodeData.ui.topSpanTemp.right += child.ui.vSpan;
                    }

                    if(typeof(child.colorHue) === 'undefined')
                    {
                        child.colorHue = Math.floor((child.ui.index * 71) % 360);
                    }
                }
                else
                {
                    child.ui.topSpan = nodeData.ui.topSpanTemp;
                    nodeData.ui.topSpanTemp += child.ui.vSpan;
                    child.colorHue = nodeData.colorHue;
                }
            }

            if(nodeData.type === 'root')
            {
                nodeData.ui.vLeftSpan = vLeftSpan;
                nodeData.ui.vRightSpan = vRightSpan;
            }
        }
        if(nodeData.type != 'root')
        {
            nodeData.ui.vSpan = vSpan;
        }

        this.dirtyData = false;

        if(nodeData.type === 'root' && $.isFunction(options['afterLoad']))
        {
            options['afterLoad']({data: nodeData});
        }
    }

    /* show on desktop with right position */
    Mindmap.prototype.showNode = function(nodeData, parent)
    {
        if(!nodeData)
        {
            nodeData = this.data;
        }

        var css = {},
            options = this.options,
            ui = nodeData.ui,
            node = nodeData.ui.element;
        
        ui.width = node.outerWidth(),
        ui.height = node.outerHeight();

        if(nodeData.type === 'root')
        {
            this.clearCanvasArea();
            ui.left = 0 - Math.floor(ui.width / 2);
            ui.top = 0 - Math.floor(ui.height / 2);
        }
        else if(nodeData.type === 'sub')
        {
            var parentVSpan = 0;
            if(nodeData.subSide === 'left')
            {
                ui.left = parent.ui.left - options.hSpace - ui.width;
                parentVSpan = parent.ui.vLeftSpan;
            }
            else
            {
                ui.left = parent.ui.left + parent.ui.width + options.hSpace;
                parentVSpan = parent.ui.vRightSpan;
            }

            var areaHeight = parentVSpan * ui.height + (parentVSpan - 1) * options.vSpace;
            var areaX = 0 - Math.floor(areaHeight / 2);
            var nodeAreaTop = nodeData.ui.topSpan *  ui.height + (nodeData.ui.topSpan) * options.vSpace;
            var nodeAreaHeight = nodeData.ui.vSpan * ui.height + (nodeData.ui.vSpan - 1) * options.vSpace;
            ui.top = areaX + nodeAreaTop + Math.floor((nodeAreaHeight - ui.height) / 2);

        }
        else
        {
            if(nodeData.subSide === 'left')
            {
                ui.left = parent.ui.left - options.hSpace - ui.width;
            }
            else
            {
                ui.left = parent.ui.left + parent.ui.width + options.hSpace;
            }

            var areaHeight = parent.ui.vSpan * ui.height + (parent.ui.vSpan - 1) * options.vSpace;
            var areaX = parent.ui.top + Math.floor(parent.ui.height / 2) - Math.floor(areaHeight / 2);
            var nodeAreaTop = nodeData.ui.topSpan *  ui.height + (nodeData.ui.topSpan) * options.vSpace;
            var nodeAreaHeight = nodeData.ui.vSpan * ui.height + (nodeData.ui.vSpan - 1) * options.vSpace;
            
            ui.top = areaX + nodeAreaTop + Math.floor((nodeAreaHeight - ui.height) / 2);
        }

        node.css(this.computePosition({left: ui.left, top: ui.top}));

        /* draw line between nodes */
        if(parent) this.drawLineToLinkNode(nodeData, parent);

        /* load children nodes */
        if($.isArray(nodeData.children) && nodeData.children.length > 0)
        {
            for(var i in nodeData.children)
            {
                this.showNode(nodeData.children[i], nodeData);
            }
        }

        if(nodeData.type === 'root' && $.isFunction(options['afterShow']))
        {
            options['afterShow']({data: nodeData});
        }
    }

    Mindmap.prototype.clearCanvasArea = function(nodeData, parent)
    {
        this.$canvas[0].getContext("2d").clearRect(0, 0, this.width, this.height)
    }

    Mindmap.prototype.drawLineToLinkNode = function(nodeData, parent)
    {
        var isLeft = (nodeData.subSide === 'left'),
            options = this.options;
        var ctx = this.$canvas[0].getContext("2d"),
            start = 
            {
                x: parent.ui.left + (parent.type === 'root' ? (Math.floor(parent.ui.width / 2)) : (isLeft ? 0 : parent.ui.width)),
                y: parent.ui.top + Math.floor(parent.ui.height / 2)
            },
            end = 
            {
                x: nodeData.ui.left + (isLeft ? nodeData.ui.width : 0),
                y: nodeData.ui.top + Math.floor(nodeData.ui.height / 2)
            };
         var p1 =
            {
                x: start.x + (isLeft ? -1 : 1) * options.lineCurvature,
                y: start.y
            },
            p2 =
            {
                x: end.x + (isLeft ? 1 : -1) * options.lineCurvature,
                y: end.y
            };
        start = this.computePosition(start);
        end = this.computePosition(end);
        p1 = this.computePosition(p1);
        p2 = this.computePosition(p2);

        ctx.beginPath();
        ctx.strokeStyle  = this.computeColor(nodeData.colorHue);
        ctx.lineCap  = "round";
        ctx.lineWidth = (nodeData.type === 'sub') ? options.subLineWidth : options.nodeLineWidth;

        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, end.x, end.y);
        ctx.stroke();
    }

    Mindmap.prototype.bindNodeEvents = function($node)
    {
        var that = this;
        $node.on('click', function(event){that.onNodeClick(event, $node);});
        $node.find('.text').on('keyup paste blur', function(event){that.onNodeTextChanged(event, $node);});
        if($node.data('type') != 'root')
        {
            $node.droppable(
            {
                target: '#' + that.id + ' .mindmap-node',
                before: function(e)
                {
                    if(e.element.hasClass('focus'))
                    {
                        return false;
                    }
                },
                start:function(e)
                {
                    if(!e.element.hasClass('active'))
                    {
                        that.clearNodeStatus();
                        that.activeNode($node);
                    }
                },
                drag: function(e)
                {
                },
                drop: function(e)
                {
                },
                finish: function(e)
                {
                }
            });
        }

    }

    Mindmap.prototype.onNodeClick = function(event, $node)
    {
        if($node.hasClass('active'))
        {
            this.focusNode($node);
        }
        else
        {
            this.clearNodeStatus();
            this.activeNode($node);
        }

        if($.isFunction(this.options['onNodeClick']))
        {
            this.options['onNodeClick']();
        }

        event.stopPropagation();
    }

    Mindmap.prototype.onNodeTextChanged = function(event, $node)
    {
        var text = $node.find('.text').text();
        if(text != $node.data('origin-text'))
        {
            $node.data('origin-text', text);
            this.update({id: $node.data('id'), text: text});
        }
    }

    Mindmap.prototype.activeNode = function($node)
    {
        $node.addClass('active');
        this.activedNode = $node;
    }

    Mindmap.prototype.focusNode = function($node)
    {
        $node.addClass('focus').find('.text').attr('contenteditable', 'true').focus().select();
        this.isFocus = true;
    }

    Mindmap.prototype.bindEvents = function()
    {
        var $this = this.$, that = this;

        $this.resize($.proxy(this.initSize, this)).click($.proxy(this.onDesktopClick, this));
    }

    Mindmap.prototype.onDesktopClick = function()
    {
        var $desktop = this.$desktop;

        /* remove status flag from node elements */
        this.clearNodeStatus();
    }

    Mindmap.prototype.clearNodeStatus = function()
    {
        this.$desktop.children('.mindmap-node.focus').removeClass('focus').find('.text').attr('contenteditable', 'false').blur();
        this.$desktop.children('.mindmap-node.active').removeClass('active');
        this.isActive = false;
        this.activedNode = null;
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
