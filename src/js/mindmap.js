/* Mindmap */
+function($, window, document, Math)
{
    "use strict";

    var UDF = 'undefined', newColorIndex = 0;
    var Mindmap = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);
        this.lang      = this.getLang();
        this.data      = this.options.data;
        this.dirtyData = true;
        this.init();
    };

    Mindmap.DEFAULTS = 
    {
        hotkeyEnable: true,
        hotkeys:
        {
            selectPrev: 'Up',
            selectNext: 'Down',
            selectLeft: 'left',
            selectRight: 'right',
            deleteNode: 'del backspace',
            addBorther: 'enter',
            addChild: 'tab'
        },
        lang: 'zh_cn',
        langs:
        {
            'zh_cn':
            {
                DefaultName: '灵光闪现',
                ReadonlyTip: '该节点已被设置为只读，无法进行编辑。',
                HotkeyDisabled: '快捷键不可用，需要 <a target="_blank" href="https://github.com/jeresig/jquery.hotkeys">jquery.hotkeys</a> 插件支持。'
            }
        },
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
        hSpace: 100,
        vSpace: 20,
        lineCurvature: 60,
        subLineWidth: 4,
        lineOpacity: 1,
        lineSaturation: 90,
        lineLightness: 40,
        nodeLineWidth: 2
    }; // default options

    Mindmap.prototype.check = function()
    {

    }

    Mindmap.prototype.getOptions = function (options)
    {
        Mindmap.DEFAULTS.data.text = Mindmap.DEFAULTS.langs['zh_cn'].DefaultName;
        options = $.extend({}, Mindmap.DEFAULTS, this.$.data(), options);

        var hotkeyEnable = (typeof($.hotkeys) != UDF);
        if(!hotkeyEnable && options.hotkeyEnable)
        {
            window.messager.danger(this.lang.HotkeyDisabled);
        }
        options.hotkeyEnable = options.hotkeyEnable && hotkeyEnable;

        return options;
    };

    Mindmap.prototype.getLang = function()
    {
        if(!this.options.lang)
        {
            if(typeof(window.config) != 'undefined' && window.config.clientLang)
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
        return this.options.langs[this.options.lang] || this.options.langs[Mindmap.DEFAULTS.lang];
    };

    Mindmap.prototype.init = function()
    {
        this.check();

        this.initDom();
        this.initSize();
        this.bindEvents();

        this.render();
    };

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
    };

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
    };

    /* compute position with offset */
    Mindmap.prototype.computePosition = function(pos, inverse)
    {
        var flag = inverse ? -1 : 1;
        if(typeof(pos['left']) != UDF) pos.left += this.offsetX * flag;
        if(typeof(pos['top']) != UDF) pos.top += this.offsetY * flag;
        if(typeof(pos['x']) != UDF) pos.x += this.offsetX * flag;
        if(typeof(pos['y']) != UDF) pos.y += this.offsetY * flag;
        return pos;
    };

    /* compute color with hue value in hsl format*/
    Mindmap.prototype.computeColor = function(hue, alpha)
    {
        return 'hsla({h}, {s}%, {l}%, {a})'.format(
        {
            h: hue,
            s: this.options.lineSaturation,
            l: this.options.lineLightness,
            a: alpha || this.options.lineOpacity
        });
    };

    Mindmap.prototype.getNodeData = function(id, nodeData)
    {
        if(typeof(id) === 'string')
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
        }
        return null;
    };

    Mindmap.prototype.getNode = function(idOrData)
    {
        if(typeof(idOrData) === 'string')
        {
            return this.$desktop.children('[data-id="' + idOrData + '"]');
        }
        if(typeof(idOrData['id']) != UDF)
        {
            return data.ui.element;
        }
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
                var node = change.data;
                if(!node) node = this.getNodeData(change.id);
                if(!node) return;

                var action = change.action || 'update';
                if(action === 'remove')
                {

                    forceLoad = true;
                    forceShow = true;
                    changed = true;
                }
                else if(action === 'add')
                {

                    forceLoad = true;
                    forceShow = true;
                    changed = true;
                }
                else if(action === 'move')
                {
                    if(change.newParent != node.parent)
                    {
                        var newParent = this.getNodeData(change.newParent);
                        var parent = this.getNodeData(node.parent);

                        if(parent && newParent)
                        {
                            if(newParent.type === 'root')
                            {
                                if(node.type === 'node')
                                {
                                    node.colorHue = null;
                                }

                                node.type = 'sub';
                                node.subSide = null;
                            }
                            else
                            {
                                node.type = 'node';
                                node.subSide = newParent.subSide;
                            }

                            parent.children.splice(node.ui.index, 1);
                            parent.count -= 1;
                            if(!$.isArray(newParent.children))
                            {
                                newParent.children = [node];
                            }
                            else
                            {
                                newParent.children.push(node);
                            }
                            newParent.count += 1;

                            forceLoad = true;
                            forceShow = true;
                            changed = true;
                        }
                    }
                }
                else if(action === 'sort')
                {
                    if(node.count > 1)
                    {
                        node.children.sort(change.func);
                        for(var i in node.children)
                        {
                            var child = node.children[i];
                            child.sort = i;
                        }

                        forceLoad = true;
                        forceShow = true;
                        changed = true;
                    }
                }
                else
                {
                     if(typeof(change.text) != UDF && change.text != node.text)
                     {
                        node.text = change.text;
                        // if(node.count > 0 || node.subSide === 'left')
                        // {
                        forceShow = true;
                        // }
                        changed = true;
                     }

                     if(typeof(change.subSide) != UDF && change.subSide != node.subSide)
                     {
                        node.subSide = change.subSide;
                        forceLoad = true;
                        forceShow = true;
                        changed = true;
                     }
                }
            }
        }
        
        if(forceLoad) this.loadNode();
        if(forceShow) this.showNode();

        if(changed && $.isFunction(options['onChange']))
        {
            options['onChange']({changes: changes, data: this.data});
        }
    };

    Mindmap.prototype.load = function(data)
    {
        this.data = data;
        this.render(data);
    };

    Mindmap.prototype.render = function()
    {
        this.loadNode();
        this.showNode();
        console.log(this.data);
        // console.log(JSON.stringify(this.data));
    };

    Mindmap.prototype.loadNode = function(nodeData, parent, index)
    {
        if(!nodeData)
        {
            nodeData = this.data;
        }

        var options = this.options,
            $desktop = this.$desktop,
            parentId = typeof(parent) == 'object' ? (parent.id ? parent.id : '') : '';

        if(typeof(nodeData.expand) === UDF) nodeData.expand = true;
        if(typeof(nodeData.data) === UDF) nodeData.data = {};
        if(typeof(nodeData.type) === UDF) nodeData.type = 'node';
        if(typeof(nodeData.id) === UDF) nodeData.id = $.uuid();
        if(typeof(nodeData.readonly) === UDF) nodeData.readonly = false;
        if(typeof(nodeData.ui) === UDF) nodeData.ui = {};
        nodeData.parent = parentId;

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

            nodeData.ui.element = $node;
        }

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

            if(!nodeData.colorHue)
            {
                nodeData.colorHue = Math.floor(((newColorIndex++) * 55) % 360);
            }
        }
        else
        {
            nodeData.subSide = parent.subSide;
        }

        $node.data('origin-text', nodeData.text);
        $node.toggleClass('readonly', nodeData.readonly);

        /* load children nodes */
        var vSpan = 1, topSpan = 0;
        nodeData.count = 0;
        if($.isArray(nodeData.children) && nodeData.children.length > 0)
        {
            nodeData.ui.topSpanTemp = (nodeData.type === 'root') ? {left: 0, right: 0} : 0;
            var vLeftSpan = 0, vRightSpan = 0, lastChild = null;
            vSpan = 0;

            nodeData.children.sort(function(nodeA, nodeB){return nodeA.sort - nodeB.sort});

            for(var i in nodeData.children)
            {
                var child = nodeData.children[i];
                if(typeof(child.ui) === UDF) child.ui = {};

                if(child.type != 'sub')
                {
                    child.colorHue = nodeData.colorHue;
                }

                child.ui.nextBorther = null;
                if(lastChild)
                {
                    child.ui.prevBorther = lastChild.id;
                    lastChild.ui.nextBorther = child.id;
                }
                else
                {
                    child.ui.prevBorther = null;
                }
                lastChild = child;

                this.loadNode(child, nodeData, i);

                child.ui.index = nodeData.count++;
                if(typeof(child['order']) === 'undifined')
                {
                    child.order = child.ui.index;
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
                }
                else
                {
                    child.ui.topSpan = nodeData.ui.topSpanTemp;
                    nodeData.ui.topSpanTemp += child.ui.vSpan;
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
    };

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
        else if($.isPlainObject(ui.dragPos))
        {
            ui.left = ui.dragPos.left;
            ui.top = ui.dragPos.top;
        }
        else if(nodeData.type === 'sub')
        {
            var parentVSpan = 0;
            if(nodeData.subSide === 'left')
            {
                ui.left = parent.ui.left - options.hSpace - 20 - ui.width;
                parentVSpan = parent.ui.vLeftSpan;
            }
            else
            {
                ui.left = parent.ui.left + parent.ui.width + options.hSpace + 20;
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
        // if(parent) this.drawLineToLinkNode(nodeData, parent);

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
        ctx.strokeStyle  = this.computeColor(nodeData.colorHue, nodeData.ui.canDrop ? '.25' : '1');
        ctx.lineCap  = "round";
        ctx.lineWidth = (nodeData.type === 'sub') ? options.subLineWidth : options.nodeLineWidth;

        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, end.x, end.y);
        ctx.stroke();
    }

    Mindmap.prototype.bindNodeEvents = function($node)
    {
        var that = this, data;
        $node.on('click', function(event){that.onNodeClick(event, $node);});
        $node.find('.text').on('keyup paste blur', function(event){that.onNodeTextChanged(event, $node);});
        if($node.data('type') != 'root')
        {
            $node.droppable(
            {
                target: '#' + that.id + ' .mindmap-node:not([data-id="' + $node.data('id') + '"]',
                before: function(e)
                {
                    if(e.element.hasClass('focus'))
                    {
                        return false;
                    }

                    data = that.getNodeData(e.element.data('id'));
                    if(!data) return false;
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
                    data.ui.dragPos = that.computePosition(e.pos, true);
                    data.ui.canDrop = e.isIn;
                    that.showNode();
                },
                beforeDrop: function(e)
                {
                    if(e.isIn)
                    {
                        if(e.target.data('id') == data.parent) return false;
                    }
                    else
                    {
                        var subSide = data.subSide;
                        if(data.type === 'sub')
                        {
                            if(data.ui.left < -30)
                            {
                                subSide = 'left';
                            }
                            else if(data.ui.left > 30)
                            {
                                subSide = 'right';
                            }
                        }
                        that.update([{action: 'sort', data: that.getNodeData(data.parent), func: function(a, b) {return a.ui.top - b.ui.top;}}, {data: data, subSide: subSide}]);
                    }
                },
                drop: function(e)
                {
                    that.update({action: 'move', data: data, newParent: e.target.data('id')});
                },
                finish: function(e)
                {
                    data.ui.dragPos = null;
                    data.ui.canDrop = false;
                    that.showNode();
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
        if(typeof($node) === UDF) $node = this.$desktop.children('.mindmap-node[data-type="sub"]').first();

        $node.addClass('active');
        this.activedNode = $node;
        this.isActive = true;
    }

    Mindmap.prototype.focusNode = function($node)
    {
        if($node.hasClass('readonly'))
        {
            window.messager.show(this.lang.ReadonlyTip);
            return;
        }
        if(!$node.hasClass('active')) return;

        $node.addClass('focus').find('.text').attr('contenteditable', 'true').focus().select();
        this.isFocus = true;
    }

    Mindmap.prototype.clearActiveNode = function($node)
    {
        if(typeof($node) === UDF) $node = this.$desktop.children('.mindmap-node.active');
        $node.removeClass('active');
        this.isActive = false;
        this.activedNode = null;
    }

    Mindmap.prototype.clearFocusNode = function($node)
    {
        if(typeof($node) === UDF) $node = this.$desktop.children('.mindmap-node.focus');

        $node.removeClass('focus').find('.text').attr('contenteditable', 'false').blur();
        this.isFocus = false;
    }

    Mindmap.prototype.bindEvents = function()
    {
        var $this = this.$, that = this;

        $this.resize($.proxy(this.initSize, this)).click($.proxy(this.onDesktopClick, this));

        this.bindGlobalHotkeys();
    }

    // hotkeys:
    // {
    //     selectPrev: 'Up',
    //     selectNext: 'Down',
    //     selectLeft: 'left',
    //     selectRight: 'right',
    //     deleteNode: 'del backspace',
    //     addBorther: 'enter',
    //     addChild: 'tab'
    // },
    Mindmap.prototype.bindGlobalHotkeys = function()
    {
        var options = this.options;
        if(!options.hotkeyEnable) return;

        var that = this, hotkeys = options.hotkeys;
        $(document).on('keydown', null, hotkeys.selectPrev, function()
        {
            that.selectNode('prev');
        }).on('keydown', null, hotkeys.selectNext, function()
        {
            that.selectNode('next');
        }).on('keydown', null, hotkeys.selectLeft, function()
        {
            that.selectNode('left');
        }).on('keydown', null, hotkeys.selectRight, function()
        {
            that.selectNode('right');
        });
    }

    /* select node */
    Mindmap.prototype.selectNode = function(type)
    {
        if(this.isFocus) return;
        if(!this.isActive)
        {
            this.activeNode();
            return;
        }

        var nodeData = null;

        var node = this.getNodeData(this.activedNode.data('id'));
        var selectId = null;

        if(node.type === 'root')
        {
            if(type === 'prev' || type === 'left') type = 'left';
            else type = 'right';
        }
        else if(type === 'left')
        {
            type = (node.subSide == 'left') ? 'child' : 'parent';
        }
        else if(type === 'right')
        {
            type = (node.subSide == 'right') ? 'child' : 'parent';
        }

        switch(type)
        {
            case 'prev':
                selectId = node.ui.prevBorther;
                break;
            case 'next':
                selectId = node.ui.nextBorther;
                break;
            case 'parent':
                selectId = node.parent;
                break;
            case 'child':
                if(node.count > 0) selectId = node.children[0].id;
                break;
            case 'left':
                if(node.count > 0)
                {
                    selectId = node.children[0].id;
                    for(var i in node.children)
                    {
                        var child = node.children[i];
                        if(child.subSide == 'left')
                        {
                            selectId = child.id;
                            break;
                        }
                    }
                }
                break;
            case 'right':
                if(node.count > 0)
                {
                    selectId = node.children[0].id;
                    for(var i in node.children)
                    {
                        var child = node.children[i];
                        if(child.subSide == 'right')
                        {
                            selectId = child.id;
                            break;
                        }
                    }
                }
                break;
        }

        if(selectId)
        {
            nodeData = this.getNodeData(selectId);
        }

        if(nodeData)
        {
            this.clearNodeStatus();
            this.activeNode(nodeData.ui.element);
        }
    };

    /* select next borther node */
    Mindmap.prototype.selectNext = function()
    {
        if(this.isFocus) return;
        var next = null;

        if(!this.isActive)
        {
            this.activeNode();
        }

        var node = this.getNodeData(this.activedNode.data('id'));
        if(node.ui.nextBorther != null)
        {
            next = this.getNodeData(node.ui.nextBorther);
        }

        if(next)
        {
            this.clearNodeStatus();
            this.activeNode(next.ui.element);
        }
    };

    /* select next borther node */
    Mindmap.prototype.selectLeft = function()
    {
        if(this.isFocus) return;
        var left = null;

        if(!this.isActive)
        {
            this.activeNode();
        }

        var node = this.getNodeData(this.activedNode.data('id'));
        if(node.ui.leftBorther != null)
        {
            left = this.getNodeData(node.ui.leftBorther);
        }

        if(left)
        {
            this.clearNodeStatus();
            this.activeNode(left.ui.element);
        }
    };

    Mindmap.prototype.onDesktopClick = function()
    {
        var $desktop = this.$desktop;

        /* remove status flag from node elements */
        this.clearNodeStatus();
    }

    Mindmap.prototype.clearNodeStatus = function()
    {
        this.clearActiveNode();
        this.clearFocusNode();
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
