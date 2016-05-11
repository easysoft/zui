/*!
 * ZUI - v1.4.0 - 2016-05-11
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: mindmap.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window, document, Math) {
    'use strict';

    var UDF = 'undefined',
        newColorIndex = 0;

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
        this.$ = $(element);
        this.options = this.getOptions(options);
        this.lang = this.getLang();
        this.data = this.options.data;
        this.dirtyData = true;
        this.offsetX = 0;
        this.offsetY = 0;
        this.init();

        if(!this.options.hotkeyEnable) {
            $.messager.show(this.lang.hotkeyDisabled);
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
            addBorther: 'return',
            addChild: 'tab insert',
            centerCanvas: 'space'
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
            expand: true,
            theme: 'default',
            caption: '',
            id: $.zui.uuid() + ''
        },
        nodeTeamplate: "<div id='node-{id}' class='mindmap-node expand-{expand}' data-type='{type}' data-id='{id}' data-parent='{parent}'><div class='wrapper'><div class='text'>{text}</div><div class='caption'>{caption}</div></div></div>",
        hSpace: 100,
        vSpace: 10,
        canvasPadding: 20,
        removingNodeTip: null,
        lineCurvature: 60,
        subLineWidth: 4,
        lineColor: 'rainbow',
        lineOpacity: 1,
        lineSaturation: 90,
        lineLightness: 40,
        nodeLineWidth: 2
    }; // default options

    Mindmap.prototype.getOptions = function(options) {
        Mindmap.DEFAULTS.data.text = Mindmap.DEFAULTS.langs.zh_cn.defaultName;

        options = $.extend({}, Mindmap.DEFAULTS, this.$.data(), options);

        options.hotkeyEnable = options.hotkeyEnable && (typeof($.hotkeys) != UDF);

        return options;
    };

    Mindmap.prototype.getLang = function() {
        var options = this.options;
        if(!options.lang) {
            if(typeof(window.config) != 'undefined' && window.config.clientLang) {
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
    };

    Mindmap.prototype.initDom = function() {
        var $this = this.$;

        if(!$this.attr('id')) {
            $this.attr('id', 'mindmap-' + $.zui.uuid());
        }
        this.id = $this.attr('id');

        this.$container = $this.children('.mindmap-container');
        if(!this.$container.length) {
            $this.prepend("<div class='mindmap-container'></div>");
            this.$container = $this.children('.mindmap-container');
        }

        this.$canvas = this.$container.children('canvas');
        if(!this.$canvas.length) {
            this.$container.prepend("<canvas class='mindmap-bg'></canvas>".format(this.options.canvasSize));
            this.$canvas = this.$container.children('canvas');
        }

        this.$desktop = this.$container.children('.mindmap-desktop');
        if(!this.$desktop.length) {
            this.$container.append("<div class='mindmap-desktop'></div>");
            this.$desktop = this.$container.children('.mindmap-desktop');
        }
        this.$desktop.attr('unselectable', 'on');

        var $shadows = $this.children('.shadow');
        if(!$shadows.length) {
            $this.append("<div class='mindmap-shadow shadow-top'></div><div class='mindmap-shadow shadow-right'></div><div class='mindmap-shadow shadow-bottom'></div><div class='mindmap-shadow shadow-left'></div>");
        }
    };

    Mindmap.prototype.initSize = function() {
        var $this = this.$;
        this.winWidth = $this.width();
        this.winHeight = $this.height();
        this.centerX = Math.floor(this.winWidth / 2);
        this.centerY = Math.floor(this.winHeight / 2);

        // $canvas.attr('width', this.width)
        //        .attr('height', this.height);

        if(!this.dirtyData) this.display();
    };

    Mindmap.prototype.callEvent = function(name, params) {
        return $.zui.callEvent(this.options[name], params, this);
    };

    /* compute position with offset */
    Mindmap.prototype.computePosition = function(pos, inverse) {
        var flag = inverse ? -1 : 1;
        if(typeof(pos.left) != UDF) pos.left -= (this.left - this.options.canvasPadding) * flag;
        if(typeof(pos.top) != UDF) pos.top -= this.top * flag;
        if(typeof(pos.x) != UDF) pos.x -= (this.left - this.options.canvasPadding) * flag;
        if(typeof(pos.y) != UDF) pos.y -= this.top * flag;
        return pos;
    };

    /* compute color with hue value in hsl format*/
    Mindmap.prototype.computeColor = function(hue, alpha) {
        return 'hsla({h}, {s}%, {l}%, {a})'.format({
            h: hue,
            s: this.options.lineSaturation,
            l: this.options.lineLightness,
            a: alpha || this.options.lineOpacity
        });
    };

    Mindmap.prototype.getNodeData = function(id, nodeData) {
        if(typeof(id) == 'number') id = id.toString();
        if(!nodeData) {
            nodeData = this.data;
        }

        if(id == nodeData.id) {
            return nodeData;
        } else if($.isArray(nodeData.children) && nodeData.children.length > 0) {
            for(var i in nodeData.children) {
                var node = this.getNodeData(id, nodeData.children[i]);
                if(node) return node;
            }
        }
        return null;
    };

    Mindmap.prototype.createDefaultNodeData = function(parentData) {
        var data = {
            expand: true,
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
        if(typeof(idOrData.id) != UDF) {
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

    /* update nodeData changes and  decide whether to rerender mindmap */
    Mindmap.prototype.update = function(changes, forceShow, forceLoad) {
        var changed = false,
            options = this.options;

        if($.isPlainObject(changes)) {
            changes = [changes];
        }
        if($.isArray(changes)) {
            for(var i in changes) {
                var change = changes[i];
                var node = change.data;
                if(!node) node = this.getNodeData(change.id);
                if(!node) return;

                var action = change.action || 'update';
                if(action === 'remove' || action === 'delete') {
                    var parent = this.getNodeData(node.parent);
                    if(parent) {
                        parent.children.splice(node.index, 1);

                        this.removeNode(node);
                        this.clearNodeStatus();

                        if(node.changed != 'add') {
                            if(!$.isArray(parent.deletions)) {
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
                    if(!$.isArray(node.children)) {
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
                    if(change.newParent != node.parent) {
                        var newParent = this.getNodeData(change.newParent);
                        var parent = this.getNodeData(node.parent);

                        if(parent && newParent) {
                            if(newParent.type === 'root') {
                                if(node.type === 'node') {
                                    node.colorHue = null;
                                }

                                node.type = 'sub';
                                node.subSide = null;
                            } else {
                                node.type = 'node';
                                node.subSide = newParent.subSide;
                            }

                            parent.children.splice(node.index, 1);
                            parent.count -= 1;
                            if(!$.isArray(newParent.children)) {
                                newParent.children = [node];
                            } else {
                                newParent.children.push(node);
                            }
                            newParent.count += 1;
                            node.index = newParent.count;

                            forceLoad = true;
                            forceShow = true;
                            changed = true;

                            if(node.changed != 'add') node.changed = 'move';
                        }
                    }
                } else if(action === 'sort') {
                    if(node.count > 1) {
                        node.children.sort(change.func);
                        for(var i in node.children) {
                            var child = node.children[i];
                            if(child.index != i) {
                                child.index = i;
                                if(child.changed != 'add') child.changed = 'sort';
                                forceLoad = true;
                                forceShow = true;
                                changed = true;
                            }
                        }
                    }
                } else {
                    if(typeof(change.text) != UDF && change.text != node.text) {
                        node.text = change.text;
                        // if(node.count > 0 || node.subSide === 'left')
                        // {
                        forceShow = true;
                        // }
                        changed = true;
                    }

                    if(typeof(change.subSide) != UDF && change.subSide != node.subSide) {
                        node.subSide = change.subSide;
                        forceLoad = true;
                        forceShow = true;
                        changed = true;
                    }

                    if(changed) {
                        if(node.changed != 'add') node.changed = 'edit';
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
        if(typeof nodeData === UDF) {
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
        if(typeof nodeData === UDF) {
            nodeData = this.data;
        }

        if(typeof ar === UDF) {
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

        if(typeof(nodeData.expand) === UDF) nodeData.expand = true;
        if(typeof(nodeData.data) === UDF) nodeData.data = {};
        if(typeof(nodeData.type) === UDF) nodeData.type = 'node';
        if(typeof(nodeData.id) === UDF) nodeData.id = $.zui.uuid() + '';
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
        } else // create new node
        {
            $node = $(options.nodeTeamplate.format({
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

            if(typeof nodeData.colorHue === UDF) {
                nodeData.colorHue = Math.floor(((newColorIndex++) * 55) % 360);
            }
        } else {
            nodeData.subSide = parent.subSide;
        }

        $node.data('origin-text', nodeData.text);
        $node.toggleClass('readonly', nodeData.readonly);

        /* load children nodes */
        var vSpan = 1,
            topSpan = 0;
        nodeData.count = 0;
        if($.isArray(nodeData.children) && nodeData.children.length > 0) {
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
                if(typeof(child.ui) === UDF) child.ui = {};

                if(child.type != 'sub') {
                    child.colorHue = nodeData.colorHue;
                }

                child.ui.nextBorther = null;
                if(lastChild) {
                    child.ui.prevBorther = lastChild.id;
                    lastChild.ui.nextBorther = child.id;
                } else {
                    child.ui.prevBorther = null;
                }
                lastChild = child;

                this.loadNode(child, nodeData, i);

                child.index = nodeData.count++;
                if(typeof(child['order']) === 'undifined') {
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
        if(nodeData.type != 'root') {
            nodeData.ui.vSpan = vSpan;
        }

        this.dirtyData = false;

        if(nodeData.type === 'root') {
            this.callEvent('afterLoad', {
                data: nodeData
            });
            // console.log(this.data);
        }
    };

    /* show on desktop with right position */
    Mindmap.prototype.showNode = function(nodeData, parent) {
        if(!nodeData) {
            nodeData = this.data;
        }

        var css = {},
            options = this.options,
            ui = nodeData.ui,
            node = nodeData.ui.element;

        ui.width = node.outerWidth(),
            ui.height = node.outerHeight();

        if(nodeData.type === 'root') {
            ui.left = 0 - Math.floor(ui.width / 2);
            ui.top = 0 - Math.floor(ui.height / 2);

            this.left = 0 - Math.floor(Math.max(ui.width + options.canvasPadding, this.winWidth) / 4);
            this.right = 0 - this.left;
            this.top = 0 - Math.floor(Math.max(ui.height + options.canvasPadding, this.winHeight) / 4);
            this.bottom = 0 - this.top;
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
                this.left = Math.min(this.left, ui.left);
            } else {
                this.right = Math.max(this.right, ui.left + ui.width);
            }
            this.top = Math.min(this.top, ui.top);
            this.bottom = Math.max(this.bottom, ui.top + ui.height);
        }

        /* load children nodes */
        if($.isArray(nodeData.children) && nodeData.children.length > 0) {
            for(var i in nodeData.children) {
                this.showNode(nodeData.children[i], nodeData);
            }
        }

        if(nodeData.type === 'root') {
            var pd = this.options.canvasPadding;
            this.left -= pd;
            this.top -= pd;
            this.right += pd * 2;
            this.bottom += pd;
            this.width = this.right - this.left;
            this.height = this.bottom - this.top;

            this.display();
            this.draw();

            this.callEvent('afterShow', {
                data: nodeData
            })
        }
    };

    Mindmap.prototype.display = function(x, y, relative) {

        if(typeof(x) === 'number' && typeof(y) === 'number') {
            if(relative) {
                x += this.offsetX;
                y += this.offsetY;
            }
            this.offsetX = x;
            this.offsetY = y;
        }
        this.x = this.centerX + this.left + this.offsetX;
        this.y = this.centerY + this.top + this.offsetY;
        this.$container.css({
            width: this.width,
            height: this.height,
            top: this.y,
            left: this.x
        });

        var pd = this.options.canvasPadding;
        this.$.toggleClass('shadow-left', this.x < 0 - pd)
            .toggleClass('shadow-right', this.x + this.width > this.winWidth + pd)
            .toggleClass('shadow-top', this.y < 0 - pd)
            .toggleClass('shadow-bottom', this.y + this.height > this.winHeight + pd);
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

    Mindmap.prototype.clearCanvasArea = function(nodeData, parent) {
        this.$canvas[0].getContext("2d").clearRect(0, 0, this.width, this.height);
    };

    Mindmap.prototype.draw = function(nodeData, parent) {
        if(!nodeData) {
            nodeData = this.data;
        }

        if(nodeData.type === 'root') {
            this.$canvas.attr({
                width: this.width,
                height: this.height
            });
            this.clearCanvasArea();
        }

        if(parent) {
            var isLeft = (nodeData.subSide === 'left'),
                options = this.options;
            var ctx = this.$canvas[0].getContext("2d"),
                start = {
                    x: parent.ui.left + (parent.type === 'root' ? (Math.floor(parent.ui.width / 2)) : (isLeft ? 0 : parent.ui.width)),
                    y: parent.ui.top + Math.floor(parent.ui.height / 2)
                },
                end = {
                    x: nodeData.ui.left + (isLeft ? nodeData.ui.width : 0),
                    y: nodeData.ui.top + Math.floor(nodeData.ui.height / 2)
                };
            var p1 = {
                    x: start.x + (isLeft ? -1 : 1) * options.lineCurvature,
                    y: start.y
                },
                p2 = {
                    x: end.x + (isLeft ? 1 : -1) * options.lineCurvature,
                    y: end.y
                };
            start = this.computePosition(start);
            end = this.computePosition(end);
            p1 = this.computePosition(p1);
            p2 = this.computePosition(p2);

            ctx.beginPath();
            ctx.strokeStyle = this.computeColor(nodeData.colorHue, nodeData.ui.canDrop ? '.25' : '1');
            ctx.lineCap = "round";
            ctx.lineWidth = (nodeData.type === 'sub') ? options.subLineWidth : options.nodeLineWidth;

            ctx.moveTo(start.x, start.y);
            ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, end.x, end.y);
            ctx.stroke();
        }

        nodeData.ui.element.css(this.computePosition({
            left: nodeData.ui.left,
            top: nodeData.ui.top
        }));

        if($.isArray(nodeData.children) && nodeData.children.length > 0) {
            for(var i in nodeData.children) {
                this.draw(nodeData.children[i], nodeData);
            }
        }
    };

    Mindmap.prototype.bindNodeEvents = function($node) {
        var that = this,
            data;
        $node.on('click', function(event) {
                that.onNodeClick(event, $node);
            })
            .mousedown(function(event) {
                event.stopPropagation();
            });
        $node.find('.text')
            .on('keyup paste blur', function(event) {
                that.onNodeTextChanged(event, $node);
            })
            .on('keydown', function(event) {});
        if($node.data('type') != 'root') {
            $node.droppable({
                container: that.$,
                target: '#' + that.id + ' .mindmap-node:not([data-id="' + $node.data('id') + '"]',
                before: function(e) {
                    if(!that.callEvent('beforeDrag', {
                            node: $node
                        })) return false;

                    if(e.element.hasClass('focus')) {
                        return false;
                    }

                    data = that.getNodeData(e.element.data('id'));
                    if(!data) return false;
                },
                start: function(e) {
                    that.callEvent('startDrag', {
                        node: $node
                    });
                    if(!e.element.hasClass('active')) {
                        that.clearNodeStatus();
                        that.activeNode($node);
                    }
                },
                drag: function(e) {
                    e.position.left -= that.x;
                    e.position.top -= that.y;
                    data.ui.dragPos = that.computePosition(e.position, true);
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
        var text = $node.find('.text').text();
        if(text != $node.data('origin-text')) {
            if(text === '') {
                $node.find('.text').text('');
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
    };

    Mindmap.prototype.activeNode = function($node) {
        if(typeof($node) === UDF) $node = this.$desktop.children('.mindmap-node[data-type="sub"]').first();
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
        if($node.hasClass('readonly')) {
            window.messager.show(this.lang.readonlyTip);
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
        if(selectAll || typeof selectAll === UDF) selectText(text);

        this.isFocus = true;
    };

    Mindmap.prototype.clearActiveNode = function($node) {
        if(typeof($node) === UDF) $node = this.$desktop.children('.mindmap-node.active');
        $node.removeClass('active');
        this.isActive = false;
        this.activedNode = null;
    };

    Mindmap.prototype.clearFocusNode = function($node) {
        if(typeof($node) === UDF) $node = this.$desktop.children('.mindmap-node.focus');

        $node.removeClass('focus').find('.text').attr('contenteditable', 'false').blur();
        this.isFocus = false;
    };

    Mindmap.prototype.bindEvents = function() {
        var $this = this.$,
            that = this;

        $this.resize($.proxy(this.initSize, this)).click($.proxy(this.onDesktopClick, this));

        this.bindGlobalHotkeys();
        this.$container.draggable({
            before: function(e) {
                if(!that.callEvent('beforeMoveCanvas')) return false;
            },
            finish: function(e) {
                that.display(e.smallOffset.x, e.smallOffset.y, true);
            },
            drag: function(e) {
                that.display(e.smallOffset.x, e.smallOffset.y, true);
            }
        });
    };

    Mindmap.prototype.bindGlobalHotkeys = function() {
        var options = this.options;
        if(!options.hotkeyEnable) return;

        var that = this,
            hotkeys = options.hotkeys;
        $(document).on('keydown', null, hotkeys.selectPrev, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectPrev
                })) return;
            that.selectNode('prev');
        }).on('keydown', null, hotkeys.selectNext, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectNext
                })) return;
            that.selectNode('next');
        }).on('keydown', null, hotkeys.selectLeft, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectLeft
                })) return;
            that.selectNode('left');
        }).on('keydown', null, hotkeys.selectRight, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.selectRight
                })) return;
            that.selectNode('right');
        }).on('keydown', null, hotkeys.deleteNode, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.deleteNode
                })) return;
            that.deleteNode();
            if(event.keyCode == 8 && !that.isFocus) {
                event.preventDefault();
            }
        }).on('keydown', null, hotkeys.addBorther, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.addBorther
                })) return;
            that.addBortherNode();
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
        }).on('keydown', null, hotkeys.centerCanvas, function() {
            if(!that.callEvent('beforeHotkey', {
                    event: event,
                    hotkey: hotkeys.centerCanvas
                })) return;
            that.display(0, 0);
        });
    };

    Mindmap.prototype.addBortherNode = function() {
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
                if(node.count > 0) {
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
                if(node.count > 0) {
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

    /* select next borther node */
    Mindmap.prototype.selectNext = function() {
        if(this.isFocus) return;
        var next = null;

        if(!this.isActive) {
            this.activeNode();
        }

        var node = this.getNodeData(this.activedNode.data('id'));
        if(node.ui.nextBorther !== null) {
            next = this.getNodeData(node.ui.nextBorther);
        }

        if(next) {
            this.clearNodeStatus();
            this.activeNode(next.ui.element);
        }
    };

    /* select next borther node */
    Mindmap.prototype.selectLeft = function() {
        if(this.isFocus) return;
        var left = null;

        if(!this.isActive) {
            this.activeNode();
        }

        var node = this.getNodeData(this.activedNode.data('id'));
        if(node.ui.leftBorther !== null) {
            left = this.getNodeData(node.ui.leftBorther);
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
}(jQuery, window, document, Math));

