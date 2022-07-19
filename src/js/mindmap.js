/* ========================================================================
 * ZUI: mindmap.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */

(function($, window, document, Math, undefined) {
    'use strict';

    var newColorIndex = 0;

    var selectText = function($e) {
        var doc = document;
        var element = $e[0],
            range;
        if(doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if(window.getSelection) {
            var selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    var Mindmap = function(element, options) {
        var that = this;
        that.$ = $(element);
        that.options = that.getOptions(options);
        that.lang = that.getLang();
        that.data = that.options.data;
        that.dirtyData = true;
        that.offsetX = 0;
        that.offsetY = 0;
        that.init();

        if(!that.options.hotkeyEnable) {
            $.zui.messager.show(that.lang.hotkeyDisabled);
        }
    };

    Mindmap.DEFAULTS = {
        hotkeyEnable: true,
        hotkeys: {
            selectPrev: 'Up',
            selectNext: 'Down',
            selectLeft: 'left',
            selectRight: 'right',
            deleteNode: 'del backspace',
            addBrother: 'return',
            addChild: 'tab insert',
            centerCanvas: 'space ctrl+1',
            toggleNode: '+ -',
            zoomIn: 'ctrl+=',
            zoomOut: 'ctrl+-',
            zoomReset: 'ctrl+0',
        },
        lang: 'zh_cn',
        langs: {
            'zh_cn': {
                defaultName: '灵光闪现',
                defaultSubName: '灵光',
                defaultNodeName: '闪现',
                readonlyTip: '该节点已被设置为只读，无法进行编辑。',
                hotkeyDisabled: '快捷键不可用，需要 <a target="_blank" href="https://github.com/jeresig/jquery.hotkeys">jquery.hotkeys</a> 插件支持。'
            }
        },
        data: {
            text: 'New Project',
            type: 'root',
            collapesed: false,
            theme: 'default',
            caption: '',
            id: $.zui.uuid() + ''
        },
        nodeTeamplate: "<div id='node-{id}' class='mindmap-node' data-type='{type}' data-id='{id}' data-parent='{parent}'><div class='wrapper'><div class='text'>{text}</div><div class='caption'>{caption}</div><div class='btn-toggle'></div></div></div>",
        hSpace: 100,
        vSpace: 10,
        canvasPadding: 20,
        removingNodeTip: null,
        lineCurvature: 60,
        subLineWidth: 4,
        lineColor: '',
        lineOpacity: 1,
        lineSaturation: 90,
        lineLightness: 40,
        nodeLineWidth: 2,
        showToggleButton: false,
        readonly: false,
        minimap: false,
        toolbar: true,
        zoom: 1,
        zoomMax: 4,
        zoomMin: 0.2,
        minimapHeight: 100,
    }; // default options

    Mindmap.prototype.getOptions = function(options) {
        Mindmap.DEFAULTS.data.text = Mindmap.DEFAULTS.langs.zh_cn.defaultName;

        options = $.extend({}, Mindmap.DEFAULTS, this.$.data(), options);

        options.hotkeyEnable = options.hotkeyEnable && ($.hotkeys !== undefined);

        return options;
    };

    Mindmap.prototype.getLang = function() {
        var options = this.options;
        if(!options.lang) {
            if(window.config !== undefined && window.config.clientLang) {
                options.lang = config.clientLang;
            } else {
                var hl = $('html').attr('lang');
                options.lang = hl ? hl : 'en';
            }
            options.lang = options.lang.replace(/-/, '_').toLowerCase();
        }
        var lang = options.langs[options.lang] || options.langs[Mindmap.DEFAULTS.lang];

        if(options.defaultSubName) lang.defaultSubName = options.defaultSubName;
        if(options.defaultNodeName) lang.defaultNodeName = options.defaultNodeName;

        return lang;
    };

    Mindmap.prototype.init = function() {
        this.initDom();
        this.initSize();
        this.bindEvents();
        this.render();
        this.setZoom(this.options.zoom || 1);
    };

    Mindmap.prototype.initDom = function() {
        var that = this;
        var options = that.options;
        var $this = that.$;

        if(!$this.attr('id')) {
            $this.attr('id', 'mindmap-' + $.zui.uuid());
        }
        that.id = $this.attr('id');

        that.$container = $this.children('.mindmap-container');
        if(!that.$container.length) {
            $this.prepend("<div class='mindmap-container'></div>");
            that.$container = $this.children('.mindmap-container');
        }

        that.$canvas = that.$container.children('canvas');
        if(!that.$canvas.length) {
            that.$container.prepend("<canvas class='mindmap-bg'></canvas>".format(options.canvasSize));
            that.$canvas = that.$container.children('canvas');
        }

        that.$desktop = that.$container.children('.mindmap-desktop');
        if(!that.$desktop.length) {
            that.$container.append("<div class='mindmap-desktop'></div>");
            that.$desktop = that.$container.children('.mindmap-desktop');
        }
        that.$desktop.attr('unselectable', 'on').toggleClass('mindmap-show-toggle-btn', !!options.showToggleButton);
        // var $shadows = $this.children('.shadow');
        // if(!$shadows.length) {
        //     $this.append("<div class='mindmap-shadow shadow-top'></div><div class='mindmap-shadow shadow-right'></div><div class='mindmap-shadow shadow-bottom'></div><div class='mindmap-shadow shadow-left'></div>");
        // }

        if (options.toolbar) {
            that.$toolbar = $this.children('.mindmap-toolbar');
            if(!that.$toolbar.length) {
                $this.append([
                    '<div class="mindmap-toolbar">',
                        '<a class="mindmap-action-btn" data-action="zoomIn"><i class="icon icon-' + (options.zoomInIcon || 'plus-sign') + '"></i></a>',
                        '<div class="mindmap-zoom-bar"><a class="mindmap-zoom-bar-btn"></a></div>',
                        '<a class="mindmap-action-btn" data-action="zoomOut"><i class="icon icon-' + (options.zoomOutIcon || 'minus-sign') + '"></i></a>',
                        '<a class="mindmap-action-btn" data-action="zoomReset"><i class="icon icon-' + (options.zoomResetIcon || 'expand-full') + '"></i></a>',
                        '<a class="mindmap-action-btn" data-action="moveCenter"><i class="icon icon-' + (options.centerIcon || 'dot-circle') + '"></i></a>',
                    '</div>'
                ].join(''));
                that.$toolbar = $this.children('.mindmap-toolbar');
            }
            that.$toolbar.on('click', '.mindmap-action-btn', function() {
                var action = $(this).data('action');
                if (action === 'moveCenter') {
                    that.display(0, 0);
                } else if (action === 'zoomReset') {
                    that.setZoom(1);
                } else if (action === 'zoomIn') {
                    that.zoomIn();
                } else if (action === 'zoomOut') {
                    that.zoomOut();
                }
            });
            var $zoomBar = that.$toolbar.find('.mindmap-zoom-bar');
            var zoomOnClickBar = function(event) {
                var rect = $zoomBar[0].getBoundingClientRect();
                var half = rect.height / 2;
                var y = event.pageY - rect.top;
                var zoom = that.zoom;
                if (y >= half) {
                    zoom = 1- (((y - half) / half) * (1 - options.zoomMin));
                } else {
                    zoom = 1 + (((half - y) / half) * (options.zoomMax - 1));
                }
                that.setZoom(Math.round(zoom * 10) / 10);
            };
            $zoomBar.on('click', zoomOnClickBar).find('.mindmap-zoom-bar-btn').draggable({
                stopPropagation: true,
                move: false,
                finish: function(e) {
                    zoomOnClickBar(e.event);
                },
                drag: function(e) {
                    zoomOnClickBar(e.event);
                }
            });
        }
        if (options.minimap) {
            that.$minimap = $this.children('.mindmap-minimap');
            if(!that.$minimap.length) {
                $this.append([
                    '<div class="mindmap-minimap">',
                        '<canvas class="mindmap-minimap-canvas" />',
                        '<div class="mindmap-minimap-viewport"></div>',
                    '</div>'
                ].join(''));
                that.$minimap = $this.children('.mindmap-minimap');
            }
            that.$minimap.height(options.minimapHeight || 100);
            that.$minimapCanvas = that.$minimap.children('.mindmap-minimap-canvas');
            that.$minimapView = that.$minimap.find('.mindmap-minimap-viewport').draggable({
                container: that.$minimap,
                stopPropagation: true,
                move: function(dragPos, $ele) {
                    var $minimap = that.$minimap;
                    var width = $minimap.width();
                    var height = $minimap.height();
                    var minimapDragStart = that.minimapDragStart;
                    var minimapRect = that.minimapRect;
                    var newPosition = {left: Math.max(0, Math.min(width - minimapRect.width, dragPos.left)), top: Math.max(0, Math.min(height - minimapRect.height, dragPos.top))};
                    $ele.css(newPosition);
                    var displayX = minimapDragStart.x - (newPosition.left - minimapDragStart.pos.left) / that.minimapScale;
                    var displayY = minimapDragStart.y - (newPosition.top - minimapDragStart.pos.top) / that.minimapScale;
                    if (that.x !== displayX || that.y !== displayY) {
                        that.display(displayX, displayY, 'absolute');
                    }
                },
                before: function(e) {
                    that.minimapDragStart = {x: that.x, y: that.y, pos: that.$minimapView.position()};
                }
            });
        }
    };

    Mindmap.prototype.initSize = function() {
        var $this = this.$;
        this.winWidth = $this.width();
        this.winHeight = $this.height();
        this.centerX = Math.floor(this.winWidth / 2);
        this.centerY = Math.floor(this.winHeight / 2);

        if(!this.dirtyData) this.display();
    };

    Mindmap.prototype.callEvent = function(name, params) {
        return $.zui.callEvent(this.options[name], params, this);
    };

    /* compute position with offset */
    Mindmap.prototype.computePosition = function(pos, inverse) {
        var flag = inverse ? -1 : 1;
        if(pos.left !== undefined) pos.left -= (this.left - this.options.canvasPadding) * flag;
        if(pos.top !== undefined) pos.top -= this.top * flag;
        if(pos.x !== undefined) pos.x -= (this.left - this.options.canvasPadding) * flag;
        if(pos.y !== undefined) pos.y -= this.top * flag;
        return pos;
    };

    /* compute color with hue value in hsl format*/
    Mindmap.prototype.computeColor = function(color, alpha) {
        if (!(color instanceof $.zui.Color)) {
            color = new $.zui.Color(color);
        }
        if (typeof alpha === 'number') {
            color.fade(alpha);
        }
        return color.toCssStr();
    };

    Mindmap.prototype.getNodeData = function(id, nodeData) {
        if(typeof(id) == 'number') id = id.toString();
        if(!nodeData) {
            nodeData = this.data;
        }

        if(id == nodeData.id) {
            return nodeData;
        } else if(Array.isArray(nodeData.children) && nodeData.children.length > 0) {
            for(var i in nodeData.children) {
                var node = this.getNodeData(id, nodeData.children[i]);
                if(node) return node;
            }
        }
        return null;
    };

    Mindmap.prototype.createDefaultNodeData = function(parentData) {
        var data = {
            collapesed: false,
            id: $.zui.uuid() + '',
            parent: parentData.id
        };
        if(parentData.type === 'root') {
            data.type = 'sub';
            data.text = this.lang.defaultSubName;
        } else {
            data.type = 'node';
            data.text = this.lang.defaultNodeName;
        }
        return data;
    };

    Mindmap.prototype.getNode = function(idOrData) {
        if(typeof(idOrData) === 'string') {
            return this.$desktop.children('[data-id="' + idOrData + '"]');
        }
        if(idOrData.id !== undefined) {
            return idOrData.ui.element;
        }
    };

    Mindmap.prototype.removeNode = function(nodeData) {
        this.getNode(nodeData).remove();
        if(nodeData.count > 0) {
            for(var i in nodeData.children) {
                this.removeNode(nodeData.children[i]);
            }
        }
    };

    Mindmap.prototype.toggleNode = function(idOrData, collapesed) {
        var that = this;
        if (idOrData === 'focused') {
            idOrData = that.activeNode.id;
        }
        var nodeData = typeof idOrData === 'string' ? that.getNodeData(idOrData) : idOrData;
        if (nodeData && nodeData.type !== 'root') {
            if (collapesed === undefined) {
                collapesed = !nodeData.collapesed;
            }
            that.update({data: nodeData, action: 'update', collapesed: collapesed});
            if (collapesed && nodeData.children && nodeData.children.length) {
                var deleteChildren = function(children) {
                    for (var i = 0; i < children.length; ++i) {
                        var child = children[i];
                        that.getNode(child).remove();
                        if (child.children && child.children.length) {
                            deleteChildren(child.children);
                        }
                    }
                };
                deleteChildren(nodeData.children);
            }
            return collapesed;
        }
    };

    Mindmap.prototype.zoomIn = function() {
        this.setZoom(this.zoom + (this.zoom <= 1 ? 0.2 : 0.5));
    };

    Mindmap.prototype.zoomOut = function() {
        this.setZoom(this.zoom - (this.zoom <= 1 ? 0.2 : 0.5));
    };

    Mindmap.prototype.setZoom = function(zoom) {
        var that = this;
        var options = that.options;
        zoom = Math.min(Math.max(zoom, options.zoomMin), options.zoomMax);
        if (zoom !== that.zoom) {
            that.zoom = zoom;
            that.$container.css('transform', 'scale(' + zoom + ')');
            var $zoomBar = that.$toolbar.find('.mindmap-zoom-bar').attr('title', Math.round(zoom * 100) + '%');
            var zoomBarHalfHeight = $zoomBar.height() / 2;
            var zoomBarBtnTop = 0;
            if (zoom >= 1) {
                zoomBarBtnTop = (options.zoomMax - zoom) / (options.zoomMax - 1) * zoomBarHalfHeight;
            } else {
                zoomBarBtnTop = zoomBarHalfHeight + ((1 - zoom) / (1 - options.zoomMin) * zoomBarHalfHeight);
            }
            $zoomBar.find('.mindmap-zoom-bar-btn').css('top', zoomBarBtnTop);
            that.draw();
            that.updateMinimapViewport();
        }
    };

    /* update nodeData changes and  decide whether to rerender mindmap */
    Mindmap.prototype.update = function(changes, forceShow, forceLoad) {
        var changed = false,
            options = this.options;

        if($.isPlainObject(changes)) {
            changes = [changes];
        }
        if(Array.isArray(changes)) {
            for(var i in changes) {
                var change = changes[i];
                var node = change.data;
                if(!node) node = this.getNodeData(change.id);
                if(!node || node.readonly) return;

                var action = change.action || 'update';
                if(action === 'remove' || action === 'delete') {
                    var parent = this.getNodeData(node.parent);
                    if(parent) {
                        parent.children.splice(node.index, 1);

                        this.removeNode(node);
                        this.clearNodeStatus();

                        if(node.changed !== 'add') {
                            if(!Array.isArray(parent.deletions)) {
                                parent.deletions = [node];
                            } else {
                                parent.deletions.push(node);
                            }
                            node.changed = 'delete';
                            parent.changed = 'delete children';
                        }

                        forceLoad = true;
                        forceShow = true;
                        changed = true;
                    }
                } else if(action === 'add') {
                    if(!Array.isArray(node.children)) {
                        node.children = [change.newData];
                    } else {
                        node.children.push(change.newData);
                    }
                    node.count += 1;
                    change.newData.index = node.count;
                    change.newData.changed = 'add';

                    forceLoad = true;
                    forceShow = true;
                    changed = true;
                } else if(action === 'move') {
                    if(change.newParent !== node.parent) {
                        var newParent = this.getNodeData(change.newParent);
                        var parent = this.getNodeData(node.parent);

                        if(parent && newParent) {
                            if(newParent.type === 'root') {
                                if(node.type === 'node') {
                                    node.color = null;
                                }

                                node.type = 'sub';
                                node.subSide = null;
                            } else {
                                node.type = 'node';
                                node.subSide = newParent.subSide;
                            }

                            parent.children.splice(node.index, 1);
                            parent.count -= 1;
                            if(!Array.isArray(newParent.children)) {
                                newParent.children = [node];
                            } else {
                                newParent.children.push(node);
                            }
                            newParent.count += 1;
                            node.index = newParent.count;

                            forceLoad = true;
                            forceShow = true;
                            changed = true;

                            if(node.changed !== 'add') node.changed = 'move';
                        }
                    }
                } else if(action === 'sort') {
                    if(node.count > 1) {
                        node.children.sort(change.func);
                        for(var i in node.children) {
                            var child = node.children[i];
                            if(child.index !== i) {
                                child.index = i;
                                if(child.changed !== 'add') child.changed = 'sort';
                                forceLoad = true;
                                forceShow = true;
                                changed = true;
                            }
                        }
                    }
                } else {
                    if(change.text !== undefined && change.text !== node.text) {
                        node.text = change.text;
                        // if(node.count > 0 || node.subSide === 'left')
                        // {
                        forceShow = true;
                        // }
                        changed = true;
                    }

                    if(change.collapesed !== undefined && change.collapesed !== node.collapesed) {
                        node.collapesed = change.collapesed;
                        forceLoad = true;
                        forceShow = true;
                        changed = true;
                    }

                    if(change.subSide !== undefined && change.subSide !== node.subSide) {
                        node.subSide = change.subSide;
                        forceLoad = true;
                        forceShow = true;
                        changed = true;
                    }

                    if(changed) {
                        if(node.changed !== 'add') node.changed = 'edit';
                    }
                }
            }
        }

        if(forceLoad) this.loadNode();
        if(forceShow) this.showNode();

        if(changed) {
            this.callEvent('onChange', {
                changes: changes,
                data: this.data
            });
        }
    };


    Mindmap.prototype.clearChangeFlag = function(nodeData) {
        if(nodeData === undefined) {
            nodeData = this.data;
        }

        if(nodeData.changed) nodeData.changed = null;

        if(nodeData.children) {
            for(var i in nodeData.children) {
                this.clearChangeFlag(nodeData.children[i]);
            }
        }
    };

    Mindmap.prototype.exportData = function() {
        var data = $.extend({}, this.data);
        this.fixExport(data);
        return data;
    };

    Mindmap.prototype.exportJSON = function() {
        return JSON.stringify(this.exportData());
    };

    Mindmap.prototype.exportArray = function(nodeData, ar) {
        if(nodeData === undefined) {
            nodeData = this.data;
        }

        if(ar === undefined) {
            ar = [];
        }

        var data = $.extend({}, nodeData);
        delete data.ui;
        delete data.children;
        delete data.subSide;

        ar.push(data);

        if(nodeData.children) {
            for(var i in nodeData.children) {
                this.exportArray(nodeData.children[i], ar);
            }
        }

        return ar;
    };

    Mindmap.prototype.fixExport = function(data) {
        delete data.ui;
        if(data.children) {
            for(var i in data.children) {
                this.fixExport(data.children[i]);
            }
        }
    };

    Mindmap.prototype.load = function(data) {
        this.data = data;
        this.render(data);
    };

    Mindmap.prototype.render = function() {
        this.loadNode();
        this.showNode();
        // console.log(this.data);
        // console.log(JSON.stringify(this.data));
    };

    Mindmap.prototype.loadNode = function(nodeData, parent, index) {
        if(!nodeData) {
            nodeData = this.data;
        }

        var options = this.options,
            $desktop = this.$desktop,
            parentId = typeof(parent) == 'object' ? (parent.id ? parent.id : '') : '';

        if(nodeData.collapesed === undefined) nodeData.collapesed = false;
        if(nodeData.data === undefined) nodeData.data = {};
        if(nodeData.type === undefined) nodeData.type = 'node';
        if(nodeData.id === undefined) nodeData.id = $.zui.uuid() + '';
        if(nodeData.readonly === undefined) nodeData.readonly = false;
        if(nodeData.ui === undefined) nodeData.ui = {};
        nodeData.parent = parentId;

        var $node = $desktop.children('.mindmap-node[data-id="' + nodeData.id + '"]');
        if($node.length) // updated node existed
        {
            $node.toggleClass('mindmap-collapesed', !!nodeData.collapesed)
                .toggleClass('mindmap-expanded', !nodeData.collapesed)
                .toggleClass('mindmap-has-child', !!(nodeData.children && nodeData.children.length))
                .attr('data-type', nodeData.type)
                .attr('data-parent', parentId || 'root');
            $node.children('.text').html(nodeData.text);
            $node.children('.caption').html(nodeData.caption);
        } else // create new node
        {
            $node = $(options.nodeTeamplate.format({
                type: nodeData.type || 'node',
                collapesed: nodeData.collapesed,
                caption: nodeData.caption || '',
                id: nodeData.id,
                parent: parentId || 'root',
                text: nodeData.text
            })).toggleClass('mindmap-collapesed', !!nodeData.collapesed)
               .toggleClass('mindmap-expanded', !nodeData.collapesed).appendTo($desktop)
               .toggleClass('mindmap-has-child', !!(nodeData.children && nodeData.children.length));

            this.bindNodeEvents($node);

            nodeData.ui.element = $node;
        }

        if(nodeData.type === 'root') {
            nodeData.ui.subLeftSide = 0;
            nodeData.ui.subRightSide = 0;
            nodeData.ui.vLeftSpan = 0;
            nodeData.ui.vRightSpan = 0;
        } else if(nodeData.type === 'sub') {
            var subSide = nodeData.subSide;
            if(!subSide) {
                if(parent.ui.subRightSide > parent.ui.subLeftSide) {
                    subSide = 'left';
                } else {
                    subSide = 'right';
                }
            }
            if(subSide === 'left') {
                parent.ui.subLeftSide++;
            } else {
                parent.ui.subRightSide++;
            }
            nodeData.subSide = subSide;

            if(nodeData.color === undefined) {
                nodeData.color = options.lineColor || {
                    h: Math.floor(((newColorIndex++) * 43) % 360),
                    s: options.lineSaturation / 100,
                    l: options.lineLightness / 100,
                    a: options.lineOpacity
                };
            }
        } else {
            nodeData.subSide = parent.subSide;
        }

        $node.data('origin-text', nodeData.text)
            .data('node', nodeData)
            .toggleClass('readonly', nodeData.readonly)
            .toggleClass('mindmap-side-left', nodeData.subSide === 'left')
            .toggleClass('mindmap-side-right', nodeData.subSide === 'right');
        if(nodeData.className) $node.addClass(nodeData.className);

        /* load children nodes */
        var vSpan = 1
        nodeData.count = 0;
        if(!nodeData.collapesed && nodeData.children && nodeData.children.length > 0) {
            nodeData.ui.topSpanTemp = (nodeData.type === 'root') ? {
                left: 0,
                right: 0
            } : 0;
            var vLeftSpan = 0,
                vRightSpan = 0,
                lastChild = null;
            vSpan = 0;

            nodeData.children.sort(function(nodeA, nodeB) {
                return nodeA.index - nodeB.index;
            });

            for(var i in nodeData.children) {
                var child = nodeData.children[i];
                if(child.ui === undefined) child.ui = {};

                if(child.type !== 'sub' && child.color === undefined) {
                    child.color = nodeData.color;
                }

                child.ui.nextBrother = null;
                if(lastChild) {
                    child.ui.prevBrother = lastChild.id;
                    lastChild.ui.nextBrother = child.id;
                } else {
                    child.ui.prevBrother = null;
                }
                lastChild = child;

                this.loadNode(child, nodeData, i);

                child.index = nodeData.count++;
                if(child.order === undefined) {
                    child.order = child.index;
                }

                vSpan += child.ui.vSpan;
                if(child.type === 'sub') {
                    if(child.subSide === 'left') {
                        vLeftSpan += child.ui.vSpan;
                        child.ui.topSpan = nodeData.ui.topSpanTemp.left;
                        nodeData.ui.topSpanTemp.left += child.ui.vSpan;
                    } else {
                        vRightSpan += child.ui.vSpan;
                        child.ui.topSpan = nodeData.ui.topSpanTemp.right;
                        nodeData.ui.topSpanTemp.right += child.ui.vSpan;
                    }
                } else {
                    child.ui.topSpan = nodeData.ui.topSpanTemp;
                    nodeData.ui.topSpanTemp += child.ui.vSpan;
                }
            }

            if(nodeData.type === 'root') {
                nodeData.ui.vLeftSpan = vLeftSpan;
                nodeData.ui.vRightSpan = vRightSpan;
            }
        }
        if(nodeData.type !== 'root') {
            nodeData.ui.vSpan = vSpan;
        }

        this.dirtyData = false;

        if(nodeData.type === 'root') {
            this.callEvent('afterLoad', {
                data: nodeData,
                $node: $node
            });
        }
    };

    /* show on desktop with right position */
    Mindmap.prototype.showNode = function(nodeData, parent, hide) {
        var that = this;
        if(!nodeData) {
            nodeData = that.data;
        }

        var options = that.options,
            ui = nodeData.ui,
            node = nodeData.ui.element;

        ui.width = node.outerWidth();
        ui.height = node.outerHeight();

        if(nodeData.type === 'root') {
            ui.left = 0 - Math.floor(ui.width / 2);
            ui.top = 0 - Math.floor(ui.height / 2);

            that.left = 0 - Math.floor(Math.max(ui.width + options.canvasPadding, that.winWidth) / 4);
            that.right = 0 - that.left;
            that.top = 0 - Math.floor(Math.max(ui.height + options.canvasPadding, that.winHeight) / 4);
            that.bottom = 0 - that.top;
        } else if($.isPlainObject(ui.dragPos)) {
            ui.left = ui.dragPos.left;
            ui.top = ui.dragPos.top;
        } else {
            if(nodeData.type === 'sub') {
                var parentVSpan = 0;
                if(nodeData.subSide === 'left') {
                    ui.left = parent.ui.left - options.hSpace - 20 - ui.width;
                    parentVSpan = parent.ui.vLeftSpan;
                } else {
                    ui.left = parent.ui.left + parent.ui.width + options.hSpace + 20;
                    parentVSpan = parent.ui.vRightSpan;
                }

                var areaHeight = parentVSpan * ui.height + (parentVSpan - 1) * options.vSpace;
                var areaX = 0 - Math.floor(areaHeight / 2);
                var nodeAreaTop = ui.topSpan * (ui.height) + (ui.topSpan) * options.vSpace;
                var nodeAreaHeight = ui.vSpan * ui.height + (ui.vSpan - 1) * options.vSpace;
                ui.top = areaX + nodeAreaTop + Math.floor((nodeAreaHeight - ui.height) / 2);
            } else {
                if(nodeData.subSide === 'left') {
                    ui.left = parent.ui.left - options.hSpace - ui.width;
                } else {
                    ui.left = parent.ui.left + parent.ui.width + options.hSpace;
                }

                var areaHeight = parent.ui.vSpan * ui.height + (parent.ui.vSpan - 1) * options.vSpace;
                var areaX = parent.ui.top + Math.floor(parent.ui.height / 2) - Math.floor(areaHeight / 2);
                var nodeAreaTop = ui.topSpan * ui.height + (ui.topSpan) * options.vSpace;
                var nodeAreaHeight = ui.vSpan * ui.height + (ui.vSpan - 1) * options.vSpace;

                ui.top = areaX + nodeAreaTop + Math.floor((nodeAreaHeight - ui.height) / 2);
            }

            if(nodeData.subSide === 'left') {
                that.left = Math.min(that.left, ui.left);
            } else {
                that.right = Math.max(that.right, ui.left + ui.width);
            }
            that.top = Math.min(that.top, ui.top);
            that.bottom = Math.max(that.bottom, ui.top + ui.height);
        }

        /* load children nodes */
        if(!nodeData.collapesed && nodeData.children && nodeData.children.length > 0) {
            for(var i in nodeData.children) {
                that.showNode(nodeData.children[i], nodeData, hide || nodeData.collapesed);
            }
        }

        if(nodeData.type === 'root') {
            var pd = that.options.canvasPadding;
            that.left -= pd;
            that.top -= pd;
            that.right += pd * 2;
            that.bottom += pd;
            that.width = that.right - that.left;
            that.height = that.bottom - that.top;

            that.display();
            that.draw();
            that.renderMinimap();

            that.callEvent('afterShow', {
                data: nodeData
            });
        }
    };

    Mindmap.prototype.display = function(x, y, relative) {
        var that = this;
        var isAbsolute = relative === 'absolute';
        if(typeof x === 'number' && typeof y === 'number') {
            x = Math.round(x);
            y = Math.round(y);
            if(relative && !isAbsolute) {
                x += that.offsetX;
                y += that.offsetY;
            }
            that.offsetX = x - (isAbsolute ? (that.left + that.centerX) : 0);
            that.offsetY = y - (isAbsolute ? (that.top + that.centerY) : 0);
        }
        that.x = that.centerX + that.left + that.offsetX;
        that.y = that.centerY + that.top + that.offsetY;
        that.$container.css({
            width: that.width,
            height: that.height,
            top: that.y,
            left: that.x,
            transformOrigin: ((that.width / 2) - that.offsetX) + 'px ' + ((that.height / 2) - that.offsetY) + 'px'
        });

        var pd = that.options.canvasPadding;
        that.$.toggleClass('shadow-left', that.x < 0 - pd)
            .toggleClass('shadow-right', that.x + that.width > that.winWidth + pd)
            .toggleClass('shadow-top', that.y < 0 - pd)
            .toggleClass('shadow-bottom', that.y + that.height > that.winHeight + pd);

        that.updateMinimapViewport();
    };

    Mindmap.prototype.makeNodeVisble = function($node) {
        var node = this.getNodeData($node.data('id'));
        if(!node) return;

        var realX = node.ui.left - this.left + this.x,
            realY = node.ui.top - this.top + this.y,
            pd = this.options.canvasPadding;

        if(realX < 0) {
            this.offsetX += 0 - realX;
        } else {
            var delta = realX + node.ui.width - (this.winWidth + pd);
            if(delta > 0) this.offsetX += 0 - delta - 80;
        }

        if(realY < 0) {
            this.offsetY += 0 - realY;
        } else {
            var delta = realY + node.ui.height - (this.winWidth + pd);
            if(delta > 0) this.offsetY += 0 - delta - 80;
        }

        this.display();
    };

    Mindmap.prototype.draw = function(nodeData, parent, hide) {
        var that = this;
        if(!nodeData) {
            nodeData = that.data;
        }

        that.canvasScale = (that.zoom || 1) * (window.devicePixelRatio || 1);
        that.canvasWidth = that.width * that.canvasScale;
        that.canvasHeight = that.height * that.canvasScale;
        if(nodeData.type === 'root') {
            that.$canvas.attr({
                width: that.canvasWidth,
                height: that.canvasHeight
            }).css({width: that.width, height: that.height});
            var ctx = that.$canvas[0].getContext("2d");
            ctx.scale(that.canvasScale, that.canvasScale);
            ctx.clearRect(0, 0, that.width, that.height);
        }

        if(parent) {
            if (hide) {
                return;
            }
            var isLeft = (nodeData.subSide === 'left');
            var options = that.options;
            var ctx = that.$canvas[0].getContext("2d");
            var start = {
                x: parent.ui.left + (parent.type === 'root' ? (Math.floor(parent.ui.width / 2)) : (isLeft ? 0 : parent.ui.width)),
                y: parent.ui.top + Math.floor(parent.ui.height / 2)
            };
            var end = {
                x: nodeData.ui.left + (isLeft ? nodeData.ui.width : 0),
                y: nodeData.ui.top + Math.floor(nodeData.ui.height / 2)
            };
            var p1 = {
                x: start.x + (isLeft ? -1 : 1) * options.lineCurvature,
                y: start.y
            };
            var p2 = {
                x: end.x + (isLeft ? 1 : -1) * options.lineCurvature,
                y: end.y
            };
            start = that.computePosition(start);
            end = that.computePosition(end);
            p1 = that.computePosition(p1);
            p2 = that.computePosition(p2);

            ctx.beginPath();
            ctx.strokeStyle = that.computeColor(nodeData.color, nodeData.ui.canDrop ? 25 : 100);
            ctx.lineCap = "round";
            ctx.lineWidth = (nodeData.type === 'sub') ? options.subLineWidth : options.nodeLineWidth;

            ctx.moveTo(start.x, start.y);
            ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, end.x, end.y);
            ctx.stroke();
        }

        nodeData.ui.element.css(that.computePosition({
            left: nodeData.ui.left,
            top: nodeData.ui.top
        }));

        if(!nodeData.collapesed && nodeData.children && nodeData.children.length > 0) {
            for(var i in nodeData.children) {
                that.draw(nodeData.children[i], nodeData, hide || nodeData.collapesed);
            }
        }
    };

    Mindmap.prototype.renderMinimap = function(noDelay) {
        var that = this;
        if (!that.options.minimap) return;
        if (!noDelay) {
            if (that.minimapTimer) {
                clearTimeout(that.minimapTimer);
            }
            that.minimapTimer = setTimeout(function() {
                that.minimapTimer = null;
                that.renderMinimap(true);
            }, 110);
            return;
        }

        var $minimap = that.$minimap;
        var $canvas = that.$minimapCanvas;
        var scale = window.devicePixelRatio || 1;
        var height = $minimap.height();
        var width = Math.round(that.width * height / that.height);
        $minimap.width(width);
        $canvas.attr({width: width * scale, height: height * scale}).css({width: width, height: height});
        var zoom = width / that.width;
        /** @type {CanvasRenderingContext2D} */
        var ctx = $canvas[0].getContext('2d');
        ctx.scale(scale, scale);
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(that.$canvas[0], 0, 0, width, height);
        ctx.drawImage(that.$canvas[0], -0.5, 0.5, width, height);
        ctx.drawImage(that.$canvas[0], 0.5, -0.5, width, height);
        ctx.drawImage(that.$canvas[0], -0.5, -0.5, width, height);
        ctx.drawImage(that.$canvas[0], 0.5, 0.5, width, height);
        that.$desktop.children('.mindmap-node').each(function() {
            var $node = $(this);
            var nodeData = $node.data('node');
            var position = $node.position();
            ctx.fillStyle = (nodeData.type === 'root' || $node.hasClass('active')) ? '#508dee' : that.computeColor(nodeData.color, nodeData.ui.canDrop ? 25 : 80);
            ctx.fillRect(position.left * zoom / that.zoom, position.top * zoom / that.zoom, $node.width() * zoom, $node.height() * zoom);
        });
        that.updateMinimapViewport(true);
    };

    Mindmap.prototype.updateMinimapViewport = function(noDelay) {
        var that = this;
        if (!that.options.minimap) return;
        if (!noDelay) {
            if (that.viewportTimer) {
                clearTimeout(that.viewportTimer);
            }
            that.viewportTimer = setTimeout(function() {
                that.viewportTimer = null;
                that.renderMinimap(true);
            }, 120);
            return;
        }

        var $minimap = that.$minimap;
        var minimapWidth = $minimap.width();
        var bounding = that.$desktop[0].getBoundingClientRect();
        var mindmapBounding = that.$[0].getBoundingClientRect();
        var minimapScale = minimapWidth / bounding.width;
        var left = bounding.left - mindmapBounding.left;
        var top  = bounding.top - mindmapBounding.top;
        var right = mindmapBounding.right - bounding.right;
        var bottom = mindmapBounding.bottom - bounding.bottom;
        that.minimapScale = minimapScale;
        that.minimapRect = {
            left: Math.max(0,  -left) * minimapScale,
            top: Math.max(0,  -top) * minimapScale,
            width: (bounding.width + Math.min(0, right) + Math.min(0, left)) * minimapScale,
            height: (bounding.height + Math.min(0, bottom) + Math.min(0, top)) * minimapScale,
        };
        that.$minimap.find('.mindmap-minimap-viewport').css(that.minimapRect);
    };

    Mindmap.prototype.bindNodeEvents = function($node) {
        var that = this,
            data;
        $node.on('click', function(event) {
                var $target = $(event.target);
                if ($target.hasClass('btn-toggle')) {
                    return that.toggleNode($node.data('id'));
                }
                that.onNodeClick(event, $node);
            })
            .mousedown(function(event) {
                event.stopPropagation();
            });

        if (!that.options.readonly) {
            $node.find('.text')
                .on('keyup paste blur', function(event) {
                    that.onNodeTextChanged(event, $node);
                })
                // .on('keydown', function(event) {});
            if($node.data('type') !== 'root') {
                $node.droppable({
                    container: that.$container,
                    target: '#' + that.id + ' .mindmap-node:not([data-id="' + $node.data('id') + '"])',
                    noShadow: true,
                    before: function(e) {
                        if(!that.callEvent('beforeDrag', {
                                $node: $node
                            })) return false;

                        if(e.element.hasClass('focus')) {
                            return false;
                        }

                        data = that.getNodeData(e.element.data('id'));
                        if(!data) return false;
                    },
                    start: function(e) {
                        that.callEvent('startDrag', {
                            $node: $node
                        });
                        if(!e.element.hasClass('active')) {
                            that.clearNodeStatus();
                            that.activeNode($node);
                        }
                    },
                    drag: function(e) {
                        var position = {
                            left: e.position.left / that.zoom,
                            top: e.position.top / that.zoom,
                        };
                        data.ui.dragPos = that.computePosition(position, true);
                        data.ui.canDrop = e.isIn;
                        that.showNode();
                    },
                    beforeDrop: function(e) {
                        if(e.isIn) {
                            if(e.target.data('id') == data.parent) return false;
                        } else {
                            if(!that.callEvent('beforeSort', {
                                    node: $node,
                                    event: e
                                })) return;

                            var subSide = data.subSide;
                            if(data.type === 'sub') {
                                if(data.ui.left < -30) {
                                    subSide = 'left';
                                } else if(data.ui.left > 30) {
                                    subSide = 'right';
                                }
                            }
                            that.update([{
                                action: 'sort',
                                data: that.getNodeData(data.parent),
                                func: function(a, b) {
                                    return a.ui.top - b.ui.top;
                                }
                            }, {
                                data: data,
                                subSide: subSide
                            }]);

                            that.callEvent('afterSort', {
                                node: $node,
                                event: e
                            });
                        }
                    },
                    drop: function(e) {
                        if(!that.callEvent('beforeMove', {
                                node: data,
                                event: e
                            })) return;

                        that.update({
                            action: 'move',
                            data: data,
                            newParent: e.target.data('id')
                        });

                        that.callEvent('afterMove', {
                            node: data,
                            event: e
                        });
                    },
                    finish: function(e) {
                        data.ui.dragPos = null;
                        data.ui.canDrop = false;
                        that.showNode();
                    }
                });
            }
        }

        this.callEvent('onBindEvents', {
            node: $node
        });
    }

    Mindmap.prototype.onNodeClick = function(event, $node) {
        if($node.hasClass('active')) {
            this.focusNode($node);
        } else {
            this.clearNodeStatus();
            this.activeNode($node);
        }

        this.callEvent('onNodeClick', {
            node: $node
        });

        event.stopPropagation();
    };

    Mindmap.prototype.onNodeTextChanged = function(event, $node) {
        var $text = $node.find('.text');
        var text = $text.text();
        if(text !== $node.data('origin-text')) {
            if(text === '') {
                $text.text('');
            }
            $node.data('origin-text', text);
            this.update({
                id: $node.data('id'),
                text: text
            });

            this.callEvent('onTextChanged', {
                node: $node,
                text: text
            });
        }
        if(event.type === 'blur') {
            $text.text(text);
        }
    };

    Mindmap.prototype.activeNode = function($node) {
        if($node === undefined) $node = this.$desktop.children('.mindmap-node[data-type="sub"]').first();
        if(!$node.length) $node = this.$desktop.children('.mindmap-node').first();

        if(!this.callEvent('beforeNodeActive', {
                node: $node
            })) return;

        $node.addClass('active');
        this.makeNodeVisble($node);

        this.activedNode = $node;
        this.isActive = true;

        this.callEvent('onNodeActive', {
            node: $node
        });
    };

    Mindmap.prototype.focusNode = function($node, selectAll) {
        if(this.options.readonly) return;
        if($node.hasClass('readonly')) {
            $.zui.messager.show(this.lang.readonlyTip);
            return;
        }
        if(!$node.hasClass('active')) return;

        if(!this.callEvent('beforeNodeFocus', {
                node: $node
            })) return;

        var text = $node.addClass('focus').find('.text');
        text.attr('contenteditable', 'true');
        this.makeNodeVisble($node);
        text.focus();
        if(selectAll || selectAll === undefined) selectText(text);

        this.isFocus = true;
    };

    Mindmap.prototype.clearActiveNode = function($node) {
        if($node === undefined) $node = this.$desktop.children('.mindmap-node.active');
        $node.removeClass('active');
        this.isActive = false;
        this.activedNode = null;
    };

    Mindmap.prototype.clearFocusNode = function($node) {
        if($node === undefined) $node = this.$desktop.children('.mindmap-node.focus');

        $node.removeClass('focus').find('.text').attr('contenteditable', 'false').blur();
        this.isFocus = false;
    };

    Mindmap.prototype.bindEvents = function() {
        var $this = this.$,
            that = this;

        $this.resize(this.initSize.bind(this)).click(this.onDesktopClick.bind(this));

        this.bindGlobalHotkeys();
        this.$container.draggable({
            before: function(e) {
                if(!that.callEvent('beforeMoveCanvas', {event: e})) return false;
            },
            finish: function(e) {
                that.display(e.smallOffset.x / that.zoom, e.smallOffset.y / that.zoom, true);
            },
            drag: function(e) {
                that.display(e.smallOffset.x / that.zoom, e.smallOffset.y / that.zoom, true);
            }
        });
    };

    Mindmap.prototype.bindGlobalHotkeys = function() {
        var options = this.options;
        if(!options.hotkeyEnable) return;

        var that = this,
            hotkeys = options.hotkeys;
        $(document).on('keydown', null, hotkeys.selectPrev, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectPrev
                })) return;
            that.selectNode('prev');
        }).on('keydown', null, hotkeys.selectNext, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectNext
                })) return;
            that.selectNode('next');
        }).on('keydown', null, hotkeys.selectLeft, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectLeft
                })) return;
            that.selectNode('left');
        }).on('keydown', null, hotkeys.selectRight, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectRight
                })) return;
            that.selectNode('right');
        }).on('keydown', null, hotkeys.toggleNode, function(event) {
            if(!that.callEvent('beforeHotkey', {
                event: event,
                hotkey: hotkeys.toggleNode
            })) return;
            that.toggleNode('focused');
        }).on('keydown', null, hotkeys.centerCanvas, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.centerCanvas
                })) return;
            that.display(0, 0);
        }).on('keydown', null, hotkeys.zoomIn, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.zoomIn
                })) return;
            that.zoomIn();
        }).on('keydown', null, hotkeys.zoomOut, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.zoomOut
                })) return;
            that.zoomOut();
        }).on('keydown', null, hotkeys.zoomReset, function(event) {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.zoomReset
                })) return;
            that.setZoom(1);
        });

        if(!that.options.readonly) {
            $(document).on('keydown', null, hotkeys.deleteNode, function() {
                if(!that.callEvent('beforeHotkey', {
                        event: event,
                        hotkey: hotkeys.deleteNode
                    })) return;
                that.deleteNode();
                if(event.keyCode == 8 && !that.isFocus) {
                    event.preventDefault();
                }
            }).on('keydown', null, hotkeys.addBrother, function() {
                if(!that.callEvent('beforeHotkey', {
                        event: event,
                        hotkey: hotkeys.addBrother
                    })) return;
                that.addBrotherNode();
            }).on('keydown', null, hotkeys.addChild, function(event) {
                if(!that.callEvent('beforeHotkey', {
                        event: event,
                        hotkey: hotkeys.addChild
                    })) return;
                that.addChildNode();
                if(event.keyCode == 9) {
                    event.preventDefault();
                }
            }).on('keydown', function() {
                if(!that.callEvent('beforeHotkey', {
                        event: event,
                        type: 'keydown'
                    })) return;
                if(event.keyCode >= 48 && event.keyCode <= 111 && that.isActive && (!that.isFocus)) {
                    var node = that.activedNode;
                    if(node) {
                        node.find('.text').text('');
                        that.focusNode(node);
                    }
                }
            });
        }
    };

    Mindmap.prototype.addBrotherNode = function() {
        if(this.isActive) {
            var node = this.getNodeData(this.activedNode.data('id'));
            if(node) {
                var parent = node.type === 'root' ? node : this.getNodeData(node.parent);
                var newNode = this.createDefaultNodeData(parent);

                if(!this.callEvent('beforeAdd', {
                        node: parent,
                        newNode: newNode
                    })) return;

                this.update({
                    action: 'add',
                    data: parent,
                    newData: newNode
                });

                this.clearNodeStatus();
                var $newNode = this.getNode(newNode.id);
                this.activeNode($newNode);
                this.focusNode($newNode, true);

                this.callEvent('afterAdd', {
                    node: parent,
                    newNode: newNode
                });
            }
        }
    };

    Mindmap.prototype.addChildNode = function() {
        if(this.isActive) {
            var node = this.getNodeData(this.activedNode.data('id'));
            if(node) {
                var newNode = this.createDefaultNodeData(node);

                if(!this.callEvent('beforeAdd', {
                        node: node,
                        newNode: newNode
                    })) return;

                this.update({
                    action: 'add',
                    data: node,
                    newData: newNode
                });

                this.clearNodeStatus();
                var $newNode = this.getNode(newNode.id);
                this.activeNode($newNode);
                this.focusNode($newNode, true);

                this.callEvent('afterAdd', {
                    node: node,
                    newNode: newNode
                });
            }
        }
    };

    Mindmap.prototype.deleteNode = function() {
        if(this.isFocus) return;
        if(this.isActive) {
            var node = this.getNodeData(this.activedNode.data('id'));
            if(node) {
                if(!this.callEvent('beforeDelete', {
                        node: node
                    })) return;

                this.update({
                    action: 'remove',
                    data: node
                });

                this.callEvent('afterDelete', {
                    node: node
                });
            }
        }
    };

    /* select node */
    Mindmap.prototype.selectNode = function(type) {
        if(this.isFocus) return;
        if(!this.isActive) {
            this.activeNode();
            return;
        }

        var nodeData = null;

        var node = this.getNodeData(this.activedNode.data('id'));
        var selectId = null;

        if(node.type === 'root') {
            if(type === 'prev' || type === 'left') type = 'left';
            else type = 'right';
        } else if(type === 'left') {
            type = (node.subSide == 'left') ? 'child' : 'parent';
        } else if(type === 'right') {
            type = (node.subSide == 'right') ? 'child' : 'parent';
        }

        switch(type) {
            case 'prev':
                selectId = node.ui.prevBrother;
                break;
            case 'next':
                selectId = node.ui.nextBrother;
                break;
            case 'parent':
                selectId = node.parent;
                break;
            case 'child':
                if(node.count > 0 && !node.collapesed) selectId = node.children[0].id;
                break;
            case 'left':
                if(node.count > 0 && !node.collapesed) {
                    selectId = node.children[0].id;
                    for(var i in node.children) {
                        var child = node.children[i];
                        if(child.subSide == 'left') {
                            selectId = child.id;
                            break;
                        }
                    }
                }
                break;
            case 'right':
                if(node.count > 0 && !node.collapesed) {
                    selectId = node.children[0].id;
                    for(var i in node.children) {
                        var child = node.children[i];
                        if(child.subSide == 'right') {
                            selectId = child.id;
                            break;
                        }
                    }
                }
                break;
        }

        if(selectId) {
            nodeData = this.getNodeData(selectId);
        }

        if(nodeData) {
            this.clearNodeStatus();
            this.activeNode(nodeData.ui.element);
        }
    };

    /* select next brother node */
    Mindmap.prototype.selectNext = function() {
        if(this.isFocus) return;
        var next = null;

        if(!this.isActive) {
            this.activeNode();
        }

        var node = this.getNodeData(this.activedNode.data('id'));
        if(node.ui.nextBrother !== null) {
            next = this.getNodeData(node.ui.nextBrother);
        }

        if(next) {
            this.clearNodeStatus();
            this.activeNode(next.ui.element);
        }
    };

    /* select next brother node */
    Mindmap.prototype.selectLeft = function() {
        if(this.isFocus) return;
        var left = null;

        if(!this.isActive) {
            this.activeNode();
        }

        var node = this.getNodeData(this.activedNode.data('id'));
        if(node.ui.leftBrother !== null) {
            left = this.getNodeData(node.ui.leftBrother);
        }

        if(left) {
            this.clearNodeStatus();
            this.activeNode(left.ui.element);
        }
    };

    Mindmap.prototype.onDesktopClick = function() {
        var $desktop = this.$desktop;

        /* remove status flag from node elements */
        this.clearNodeStatus();
    };

    Mindmap.prototype.clearNodeStatus = function() {
        this.clearActiveNode();
        this.clearFocusNode();
    };

    $.fn.mindmap = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('zui.mindmap');
            var options = typeof option == 'object' && option;

            if(!data) $this.data('zui.mindmap', (data = new Mindmap(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.mindmap.Constructor = Mindmap;
}(jQuery, window, document, Math, undefined));
