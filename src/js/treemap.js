/* ========================================================================
 * ZUI: treemap.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


// Tree map data format
// {
//      text: main text,
//      html: main text as html format
//      style: node style,
//      textColor: text color,
//      color: background color
//      border: border style,
//      cableWidth: 2,
//      cableColor: '#808080'
//      cableStyle: 'solid'
// }


(function($, window, document, Math, undefined) {
    'use strict';

    var NAME = 'zui.treemap',
        DEFAULTS = {
            data: [],
            moveable: true,
            direction: 'bottom', // or 'top', 'left', 'right'
            cableWidth: 1,
            cableColor: '#808080',
            cableStyle: 'solid',
            height: 'auto',
            scale: 1,
            position: 'center',
            rowSpace: 30,
            nodeSpace: 20,
            nodeTemplate: '<div class="treemap-node"><a class="treemap-node-wrapper"></a></div>',
            // sort: false, // Boolean or function
            // tooltip: null,
            // nodeStyle: null,
        },
        DEFAULT_NODE = {
            // id: uuid(),           // uuid
            // text: '',             // main text,
            // html: '',             // main text as html format
            // style: null,          // node element style
            // textColor: '',        // text color
            // color: '',            // background color
            // border: '',           // border style,
            // cableWidth: 2,        // cabel width, use options
            // cableColor: '#808080' // cable color, use options
            // caption: ''           // node caption
            // attrs: null           // attrs
            // title: ''             // node title
            // tooltip: ''           // node tooltip
        };

    var getDataFromUlList = function($list) {
        return $list.children('li,.treemap-data-item').map(function() {
            var $item = $(this),
                item = $item.data(),
                $text = $item.children('.text'),
                $html = $item.children('.content'),
                $children = $item.children('ul,.treemap-data-list');
            if($text.length) item.text = $text.text();
            if($html.length) item.html = $html.html();
            if($children.length) {
                item.children = getDataFromUlList($children);
            }
            if(!item.text && !item.html) {
                var $content = $item.children(':not(ul,.treemap-data-list)');
                if(!$content.length) {
                    var $itemClone = $item.clone();
                    $itemClone.find('ul,.treemap-data-list').remove();
                    item.text = $itemClone.text();
                } else item.html = $content.html();
            }
            if(!item.id) item.id = $.zui.uuid();
            return item;
        }).get();
    };

    var Treemap = function(element, options) {
        var $element = $(element);
        options = $.extend({}, DEFAULTS, $element.data(), options);
        
        var data = options.data || [];
        if(!data.length) {
            var $dataList = $element.children('.treemap-data');
            if($dataList.length) {
                data = getDataFromUlList($dataList.hide());
            }
        }

        var $nodes = $element.children('.treemap-nodes');
        if(!$nodes.length) {
            $nodes = $('<div class="treemap-nodes" unselectable="on"/>').appendTo($element);
        }

        var that     = this;
        that.$       = $element;
        that.$nodes  = $nodes;
        that.data    = data;
        that.options = options;
        that.offsetX = 0;
        that.offsetY = 0;
        that.scale   = options.scale || 1;

        // Bind events
        
        that.render();
    };

    Treemap.prototype.render = function(data) {
        var that       = this,
            options    = that.options,
            $nodes     = that.$nodes,
            rowSpace   = options.rowSpace;
        data = data || that.data;

        var cableStyle = {};
        if(options.cableWidth) cableStyle.borderWidth = options.cableWidth;
        if(options.cableStyle) cableStyle.borderStyle = options.cableStyle;
        if(options.cableColor) cableStyle.borderColor = options.cableColor;
        var rowSpaceHalf = Math.floor(rowSpace/2);

        var createNodes = function(nodes, parent, callback) {
            if(options.sort) {
                nodes.sort($.isFunction(options.sort) ? options.sort : function(nodeX, nodeY) {
                    return (nodeX.order || 0) - (nodeY.order);
                });
            }
            var lastNode = null;
            $.each(nodes, function(idx, node) {
                // Create node element
                var $node = $.isFunction(options.nodeTemplate) ? options.nodeTemplate(node, that) : $(options.nodeTemplate);

                // Create node wrapper element
                var $wrapper = $node.find('.treemap-node-wrapper');
                if(!$wrapper.length) {
                    $wrapper = $('<div class="treemap-node-wrapper"/>').appendTo($node);
                }

                // Set node data attributes
                node.idx    = idx;
                $node.toggleClass('treemap-node-has-child', !!(node.children && node.children.length))
                     .toggleClass('treemap-node-has-parent', !!parent)
                     .attr('data-id', node.id).data('node', node);
                var row = parent ? (parent.row + 1) : 0;
                node.row = row;
                $node.toggleClass('treemap-node-root', !row);

                // Set node element attributes and sytle
                var style = $.extend({}, node.style);
                if(node.textColor) style.color = node.textColor;
                if(node.color) style.backgroundColor = node.color;
                if(node.border) style.border = node.border;
                var attrs = $.extend({}, node.attrs, {
                    title: node.title
                });
                if(node.tooltip) {
                    attrs['data-toggle'] = 'tooltip';
                    attrs.title = node.tooltip;
                }
                $wrapper.attr(attrs).css(style);
                if(lastNode) {
                    $node.css('padding-left', options.nodeSpace);
                }
                if(node.html) $wrapper.append(node.html);
                else if(node.text) $wrapper.text(node.text);
                

                // append node element to ducument
                $node.appendTo(parent ? parent.$children : $nodes);

                // Save sizes
                node.bounds = {
                    width  : $wrapper.outerWidth(),
                    height : $wrapper.outerHeight()
                };

                if(lastNode) {
                    lastNode.next = node;
                }
                node.prev     = lastNode;
                node.parent   = parent;
                node.$        = $node;
                node.$wrapper = $wrapper;

                // Create children
                var children = node.children;
                if(children && children.length) {
                    var $children = $node.find('.treemap-node-children');
                    if(!$children.length) {
                        $children = $('<div class="treemap-node-children"/>').appendTo($node);
                    }
                    $children.css('margin-top', rowSpace);
                    node.$children = $children;
                    createNodes(children, node);
                }

                lastNode    = node;
                callback && callback($node, node);
            });
        };

        var createLines = function(nodes, parent) {
            var nodesOffsetLeft = $nodes.offset().left;
            $.each(nodes, function(idx, node) {
                var $wrapper = node.$wrapper;
                var nodeCableStyle = $.extend({
                    height: rowSpaceHalf,
                    top: -rowSpaceHalf-1,
                    left: Math.floor((node.bounds.width - cableStyle.borderWidth)/2)
                }, cableStyle);
                if(parent) {
                    var $topLine = $wrapper.find('.treemap-line-top');
                    if(!$topLine.length) {
                        $topLine = $('<div class="treemap-line-top"/>').appendTo($wrapper);
                    }
                    $topLine.css(nodeCableStyle);
                }
                var children = node.children;
                if(children && children.length) {
                    nodeCableStyle.top = node.bounds.height - 1;
                    var $bottomLine = $wrapper.find('.treemap-line-bottom');
                    if(!$bottomLine.length) {
                        $bottomLine = $('<div class="treemap-line-bottom"/>').appendTo($wrapper);
                    }
                    $bottomLine.css(nodeCableStyle);
                    createLines(children, node);
                    if(children.length > 1) {
                        var firstChild = children[0],
                            lastChild = children[children.length - 1];

                        var $centerLine = node.$.children('.treemap-line');
                        if(!$centerLine.length) {
                            $centerLine = $('<div class="treemap-line"/>').insertAfter($wrapper);
                        }
                        var lineLeft = Math.floor(firstChild.$wrapper.offset().left - nodesOffsetLeft + firstChild.bounds.width/2);
                        $centerLine.css($.extend({
                            marginTop: rowSpaceHalf,
                            left: lineLeft,
                            width: lastChild.$wrapper.offset().left - nodesOffsetLeft -lineLeft + lastChild.bounds.width/2
                        }, cableStyle));
                    }
                }
            });
        };

        // Create nodes
        $nodes.empty();
        createNodes(data);
        createLines(data);

        // Init tooltip
        $nodes.find('[data-toggle="tooltip"]').tooltip(options.tooltip);

        that.callEvent('afterRender');
    };

    // Call event helper
    Treemap.prototype.callEvent = function(name, params) {
        var that = this;
        if(!$.isArray(params)) params = [params];
        that.$.trigger(name, params);
        if($.isFunction(that.options[name])) {
            return that.options[name].apply(that, params);
        }
    };

    Treemap.DEFAULTS = DEFAULTS;

    $.fn.treemap = function(option, params) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Treemap(this, options)));

            if(typeof option == 'string') data[option](params);
        });
    };

    $.fn.treemap.Constructor = Treemap;
}(jQuery, window, document, Math, undefined));

