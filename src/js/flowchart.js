/* ========================================================================
 * ZUI: flowChart.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2017-2019 cnezsoft.com; Licensed MIT
 * ======================================================================== */

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return -1.
            return -1;
        }
    });
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        }
    });
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function (callback, thisArg) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

    Array.prototype.map = function (callback/*, thisArg*/) {

        var T, A, k;

        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        // 1. Let O be the result of calling ToObject passing the |this|
        //    value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal
        //    method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // 6. Let A be a new array created as if by the expression new Array(len)
        //    where Array is the standard built-in constructor with that name and
        //    len is the value of len.
        A = new Array(len);

        // 7. Let k be 0
        k = 0;

        // 8. Repeat, while k < len
        while (k < len) {

            var kValue, mappedValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal
            //    method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                //    method of O with argument Pk.
                kValue = O[k];

                // ii. Let mappedValue be the result of calling the Call internal
                //     method of callback with T as the this value and argument
                //     list containing kValue, k, and O.
                mappedValue = callback.call(T, kValue, k, O);

                // iii. Call the DefineOwnProperty internal method of A with arguments
                // Pk, Property Descriptor
                // { Value: mappedValue,
                //   Writable: true,
                //   Enumerable: true,
                //   Configurable: true },
                // and false.

                // In browsers that support Object.defineProperty, use the following:
                // Object.defineProperty(A, k, {
                //   value: mappedValue,
                //   writable: true,
                //   enumerable: true,
                //   configurable: true
                // });

                // For best browser support, use the following:
                A[k] = mappedValue;
            }
            // d. Increase k by 1.
            k++;
        }

        // 9. return A
        return A;
    };
}

(function($) {
    'use strict';

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

    var NAME = 'zui.flowChart'; // model name

    // var supportElementTypes = {
    //     relation: 'relation',
    //     action: 'action',
    //     start: 'start',
    //     end: 'end',
    // };

    // var idSeed = 1;

    // var FlowChartElement = function(props) {
    //     props = $.extend({}, props);
    //     var that = this;
    //     that.type = supportElementTypes[props.type] || supportElementTypes.action;
    //     that.isRelation = that.type === 'relation';
    //     that.isNode = !that.isRelation;
    //     that.text = props.text;
    //     that.order = props.order || idSeed++;
    //     var id = props.id;
    //     if (that.isRelation) {
    //         that.from = props.from;
    //         that.to = props.to;
    //         that.id = id || (that.from + '-' + that.to);
    //     } else {
    //         that.id = id || $.zui.uuid();
    //     }
    //     if (props.position && typeof props.position.left === 'number' && typeof props.position.top === 'number') {
    //         that.position = {
    //             left: props.position.left,
    //             top: props.position.top,
    //         };
    //         that.customPos = true;
    //     }
    // };

    // FlowChartElement.create = function() {

    // };

    var FlowChartNode = function() {

    };

    // The flowChart model class
    var FlowChart = function(element, options) {
        var that = this;
        that.name = NAME;
        that.idSeed = 0;

        // Get container
        var $container = that.$container = $(element).addClass('scrollbar-hover')
            .css('overflow', 'auto');

        that.id = $container.attr('id') || 'flowchart_' + $.zui.uuid();

        // Get options
        options = that.options = $.extend(
            {},
            FlowChart.DEFAULTS,
            $container.data(),
            options
        );
        var allLangs = $.extend({}, FlowChart.LANGS, options.langs);
        var userLang = options.lang || ($.zui && $.zui.clientLang ? $.zui.clientLang() : 'en');
        that.lang = allLangs[userLang.replace('_', '-')] || allLangs.en;

        // Create canvas
        var $canvas = $container.children('.flowchart-canvas');
        if (!$canvas.length) {
            $canvas = $('<div class="flowchart-canvas" style="position: relative; user-select: none"></div>')
                .appendTo($container);
        }
        var canvasID = 'flowchart-canvas-' + that.id;
        $canvas.attr('id', canvasID);
        that.$canvas = $canvas;

        // Reset containers size
        if (options.width !== undefined) {
            $container.css('width', options.width);
        }
        if (options.height !== undefined) {
            $container.css('height', options.height);
        }

        // Init draggable event
        that.draggableEnable = options.draggable && $.fn.draggable;
        if (that.draggableEnable) {
            var handleDrag = function(e) {
                that.setNodePosition($(e.element).data('id'), e.pos);
            };
            $canvas.draggable({
                container: '#' + canvasID,
                selector: '.flowchart-node',
                stopPropagation: true,
                drag: handleDrag,
                finish: handleDrag,
                mouseButton: 'left',
            });
        }

        // Render
        that.elements = {};
        that.update(options.data);

        // Init edit event
        if (options.doubleClickToEdit) {
            $canvas.on('dblclick', '.flowchart-node,.flowchart-relation-text', function(e) {
                var $node = $(this).closest('.flowchart-node,.flowchart-relation');
                that.enterEditMode($node.data('id'));
                e.preventDefault();
            });
        }

        // Init contextmenu
        if (options.showContextMenu && $.zui.ContextMenu) {
            $canvas.on('mousedown', '.flowchart-node,.flowchart-relation', function(e) {
                if (e.button === 2) {
                    if (that.showContextMenu($(this).data('id'), e)) {
                    }
                }
                e.preventDefault();
                e.returnValue = false;
            }).on('contextmenu', function(e) {
                e.preventDefault();
                e.returnValue = false;
                return false;
            });
        }

        // Init quick add
        if (options.quickAdd) {
            $canvas.on('mouseenter', '.flowchart-node', function() {
                that.showQuickAdd($(this).data('id'));
            }).on('mouseleave', '.flowchart-node', function() {
                that.hideQuickAdd();
            }).on('click', '.flowchart-quick-mark', function () {
                var $mark = $(this);
                that.quickAddNode($mark.closest('.flowchart-node').data('id'), $mark.data('direction'));
            });
        }
    };

    // Show quick add marks
    FlowChart.prototype.showQuickAdd = function(node) {
        var that = this;

        if (typeof node === 'string') {
            node = that.elements[node];
        }
        if (!node) {
            return;
        }

        var $marks = node.$ele.find('.flowchart-quick-marks');
        if (!$marks.length) {
            $marks = $([
                '<div class="flowchart-quick-marks" style="position: absolute; left: -15px; top: -15px; right: -15px; bottom: -15px; pointer-events: none; z-index: 10">',
                    '<div class="flowchart-quick-mark" data-direction="top" style="position: absolute; pointer-events: auto; width: 20px; height: 20px; top: 0; left: 50%; margin-left: -10px; line-height: 20px; text-align: center; cursor: pointer; border-radius: 50%; background: #fff; background: rgba(255,255,255,.9)"><i class="icon icon-circle-arrow-up text-primary"></i></div>',
                    '<div class="flowchart-quick-mark" data-direction="right" style="position: absolute; pointer-events: auto; width: 20px; height: 20px; right: 0; top: 50%; margin-top: -10px; line-height: 20px; text-align: center; cursor: pointer; border-radius: 50%; background: #fff; background: rgba(255,255,255,.9)"><i class="icon icon-circle-arrow-right text-primary"></i></div>',
                    '<div class="flowchart-quick-mark" data-direction="bottom" style="position: absolute; pointer-events: auto; width: 20px; height: 20px; bottom: 0; left: 50%; margin-left: -10px; line-height: 20px; text-align: center; cursor: pointer; border-radius: 50%; background: #fff; background: rgba(255,255,255,.9)"><i class="icon icon-circle-arrow-down text-primary"></i></div>',
                    '<div class="flowchart-quick-mark" data-direction="left" style="position: absolute; pointer-events: auto; width: 20px; height: 20px; left: 0; top: 50%; margin-top: -10px; line-height: 20px; text-align: center; cursor: pointer; border-radius: 50%; background: #fff; background: rgba(255,255,255,.9)"><i class="icon icon-circle-arrow-left text-primary"></i></div>',
                '</div>'
            ].join('')).appendTo(node.$ele);
        }
        $marks.show().children().show();
        var options = that.options;
        if (node.bounds.left < (options.padding + 80 + options.horzSpace)) {
            $marks.find('[data-direction="left"]').hide();
        }
        if (node.bounds.top < (options.padding + options.nodeHeight + options.vertSpace)) {
            $marks.find('[data-direction="top"]').hide();
        }

        that._currentQuickAddNode = node;
    };

    // Hide quick add marks
    FlowChart.prototype.hideQuickAdd = function() {
        var that = this;
        var node  = that._currentQuickAddNode;
        if (!node) {
            return;
        }
        node.$ele.find('.flowchart-quick-marks').hide();
        that._currentQuickAddNode = null;
    };

    // Quick add node
    FlowChart.prototype.quickAddNode = function(fromNode, direction) {
        var that = this;

        if (typeof fromNode === 'string') {
            fromNode = that.elements[fromNode];
        }
        if (!fromNode) {
            return;
        }

        var nodeID = $.zui.uuid();
        that.update({
            id: nodeID,
            text: '',
            direction: direction,
            directionFrom: fromNode,
            from: fromNode.id,
        });
        that.enterEditMode(nodeID);
    };

    // Show contextmenu
    FlowChart.prototype.showContextMenu = function(ele, event) {
        var that = this;
        if (typeof ele === 'string') {
            ele = that.elements[ele];
        }
        if (!ele) {
            return;
        }

        var items = null;
        if (typeof that.options.showContextMenu === 'function') {
            items = that.options.showContextMenu(ele, event);
        } else {
            items = [{
                label: that.lang.edit,
                onClick: function() {
                    that.enterEditMode(ele);
                },
            }, {
                label: that.lang.delete,
                onClick: function() {
                    if (!that.options.deleteConfirm || confirm(that.lang.confirmToDelete.format(ele.text || ele.id))) {
                        that.delete(ele.id);
                    }
                }
            }]
        }
        if (items && items.length) {
            $.zui.ContextMenu.show(items, {event: event});
            return true;
        }
    };

    // Render node
    FlowChart.prototype.renderNode = function(node, skipLayout) {
        var that    = this;
        var options = that.options;

        var $node = $(that._getDomID(node));
        if (!$node.length) {
            $node = $('<div id="' + that._getDomID(node, 1) + '" style="z-index: 1" class="flowchart-node" data-id="' + node.id + '" data-type="' + node.type + '"><div class="text" style="outline: none; min-width: 10px; min-height: 20px;"></div></div>').appendTo(that.$canvas);
            if (that.draggableEnable) {
                $node.css('cursor', 'move');
            }
        }
        $node.addClass(node.className);
        var $text = $node.find('.text');
        $text.css(options.nodeTextStyle).text((node.text === undefined || node.text === null) ? '' : node.text);
        node.$ele = $node;

        if (node.position && !node.customPos) {
            node.position = null;
        }

        var style = $.extend({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: options.nodeHeight,
            minWidth: 0,
        }, options.nodeStyle, options[node.type + 'NodeStyle'], node.style, node.position, {
            position: 'absolute',
            visibility: node.position ? 'visible' : 'hidden',
        });
        $node.css(style);

        var size = {
            width:  $node.outerWidth(),
            height: $node.outerHeight(),
        };

        var adsorptionGrid = that.options.adsorptionGrid;
        if (adsorptionGrid === true) {
            adsorptionGrid = 5;
        }
        size.width = Math.ceil(size.width / (adsorptionGrid * 2)) * adsorptionGrid * 2;
        node.size = size;

        if (!skipLayout) {
            this._layoutNode(node);
        }

        if (!options.mergeSideLines) {
            node.sideRels = {
                top:    [],
                right:  [],
                bottom: [],
                left:   [],
            };
        }
    };

    // Caculate node position and change layout of it.
    FlowChart.prototype._layoutNode = function(node, skipPosition) {
        var that     = this;
        var size     = node.size;
        var position = node.position;

        if (!position || !node.customPos) {
            var options = that.options;
            var parents = node.parents;
            var direction = node.direction;
            var directionFrom = node.directionFrom;

            position = {};
            var supportDirections = {top: 1, left: 1, bottom: 1, right: 1};
            if (direction && supportDirections[direction] && directionFrom) {
                var fromBounds = directionFrom.bounds;
                if (direction === 'top') {
                    position.left = Math.floor(fromBounds.centerLeft - (size.width / 2));
                    position.top = fromBounds.top - options.vertSpace - size.height;
                } else if (direction === 'left') {
                    position.left = fromBounds.left - options.horzSpace - size.width;
                    position.top = Math.floor(fromBounds.centerTop - (size.height / 2));
                } else if (direction === 'bottom') {
                    position.left = Math.floor(fromBounds.centerLeft - (size.width / 2));
                    position.top = fromBounds.bottom + options.vertSpace;
                } else if (direction === 'right') {
                    position.left = fromBounds.right + options.horzSpace;
                    position.top = Math.floor(fromBounds.centerTop - (size.height / 2));
                }
                if (node.direction) delete node.direction;
                if (node.directionFrom) delete node.directionFrom;
            } else if (parents.length) {
                var parentsBounds;
                var siblingsIndex = 0;
                $.each(parents, function(idx, parentNode) {
                    if (!parentNode.position) {
                        return;
                    }
                    var parentPosition = parentNode.position;
                    var parentSize = parentNode.size;
                    if (parentsBounds) {
                        parentsBounds.left   = Math.min(parentsBounds.left, parentPosition.left);
                        parentsBounds.top    = Math.min(parentsBounds.top, parentPosition.top);
                        parentsBounds.right  = Math.max(parentsBounds.right, parentSize.width + parentPosition.left);
                        parentsBounds.bottom = Math.max(parentsBounds.bottom, parentSize.height + parentPosition.top);
                    } else {
                        parentsBounds = {
                            left:   parentPosition.left,
                            top:    parentPosition.top,
                            right:  parentSize.width + parentPosition.left,
                            bottom: parentSize.height + parentPosition.top
                        };
                    }

                    if (node.siblingsIndex === undefined) {
                        var parentChildren = parentNode.children;
                        if (parentChildren.length) {
                            $.each(parentChildren, function(_1, childNode) {
                                if (childNode.siblingsIndex === undefined) {
                                    childNode.siblingsIndex = siblingsIndex++;
                                }
                            });
                        }
                    }
                });
                node.parentsBounds = parentsBounds;
                position.left = parentsBounds.right + options.horzSpace;
                position.top  = parentsBounds.top + node.siblingsIndex * (options.nodeHeight + options.vertSpace);
            } else {
                var bounds   = that.bounds;
                position.left = bounds.left;
                position.top  = bounds.top + bounds.height + (bounds.height <= options.padding ? 0: (options.vertSpace - options.padding));
            }
            node.position = position;
            if (options.disableAutoPosition) {
                node.customPos = true;
            }
        }

        if (!skipPosition) {
            var adsorptionGrid = that.options.adsorptionGrid;
            if (adsorptionGrid) {
                position.left = Math.round(position.left / adsorptionGrid) * adsorptionGrid;
                position.top  = Math.round(position.top / adsorptionGrid) * adsorptionGrid;
            }
            node.$ele.css({
                visibility: 'visible',
                left: position.left,
                top: position.top,
                minWidth: size.width,
            });
        }

        that.calcNodeBounds(node);
    };

    FlowChart.prototype.calcNodeBounds = function(node) {
        var bounds         = this.bounds;
        var position       = node.position;
        var size           = node.size;
        var centerLeft     = position.left + size.width / 2;
        var centerTop      = position.top + size.height / 2;
        var centerDistance = Math.sqrt(centerLeft * centerLeft + centerTop * centerTop);

        bounds.left   = Math.min(bounds.left, position.left);
        bounds.top    = Math.min(bounds.top, position.top);
        bounds.width  = Math.max(bounds.width, position.left + size.width);
        bounds.height = Math.max(bounds.height, position.top + size.height);

        node.bounds = {
            left: position.left,
            top: position.top,
            width: size.width,
            height: size.height,
            right: position.left + size.width,
            bottom: position.top + size.height,
            centerLeft: centerLeft,
            centerTop: centerTop,
            centerDistance: centerDistance,
        };
        return node.bounds;
    };

    // Render relation
    FlowChart.prototype.renderRelation = function(relation) {
        var that    = this;
        var options = that.options;

        var $relation = $(that._getDomID(relation));
        if (!$relation.length && relation.visible) {
            $relation = $('<div id="' + that._getDomID(relation, 1) + '" class="flowchart-relation" data-id="' + relation.id + '" data-type="relation" style="z-index: 0; pointer-events: none"><div style="position: absolute; pointer-events: auto" class="flowchart-rel-line flowchart-rel-begin-line"></div><div class="flowchart-rel-line flowchart-rel-center-line" style="position: absolute; pointer-events: auto; display: flex; align-items: center; justify-content: center; white-space: nowrap;"><span class="text flowchart-relation-text" style="background: #fff; background: rgba(255,255,255,.95); position: relative; z-index: 5; line-height: 1; outline: none; pointer-events: auto"></span></div><div style="position: absolute; pointer-events: auto; pointer-events: auto" class="flowchart-rel-line flowchart-rel-end-line"></div><div style="position: absolute; pointer-events: auto" class="flowchart-rel-arrow"></div></div>').appendTo(that.$canvas);
        }
        if (!relation.visible) {
            $relation.remove();
            return;
        }
        $relation.addClass(relation.className);
        relation.$ele = $relation;

        // Caculate relatin bounds
        var fromNode       = relation.fromNode;
        var toNode         = relation.toNode;
        var fromNodeBounds = fromNode.bounds;
        var toNodeBounds   = toNode.bounds;

        // Calculate vert space
        var vertCenterDistance = fromNodeBounds.centerTop - toNodeBounds.centerTop;
        var horzCenterDistance = fromNodeBounds.centerLeft - toNodeBounds.centerLeft;
        var vertDistance = Math.abs(vertCenterDistance) - (fromNodeBounds.height + toNodeBounds.height) / 2;
        var horzDistance = Math.abs(horzCenterDistance) - (fromNodeBounds.width + toNodeBounds.width) / 2;
        var direction, isReverse, fromSide, toSide;
        if (vertDistance >= 0) {
            if (horzDistance >= 0) { // Four corners
                if (vertCenterDistance > 0) { // Top
                    if (horzCenterDistance > 0) { // Left
                        direction = 'top-left';
                        isReverse = true;
                        fromSide  = 'left';
                        toSide    = 'bottom';
                    } else { // Right
                        direction = 'top-right';
                        isReverse = false;
                        fromSide  = 'right';
                        toSide    = 'top';
                    }
                } else { // Bottom
                    if (horzCenterDistance > 0) { // Left
                        direction = 'bottom-left';
                        isReverse = true;
                        fromSide  = 'bottom';
                        toSide    = 'right';
                    } else { // Right
                        direction = 'bottom-right';
                        isReverse = false;
                        fromSide  = 'bottom';
                        toSide    = 'left';
                    }
                }
            } else {
                isReverse = vertCenterDistance > 0;
                direction = isReverse ? 'top' : 'bottom';
                fromSide  = direction;
                toSide    = isReverse ? 'bottom' : 'top';
            }
        } else {
            isReverse = horzCenterDistance > 0;
            direction = isReverse ? 'left' : 'right';
            fromSide  = direction;
            toSide    = isReverse ? 'right' : 'left';
        }
        relation.direction = direction;
        relation.isReverse = isReverse;
        relation.fromSide  = fromSide;
        relation.toSide    = toSide;

        var beginNode     = isReverse ? toNode : fromNode;
        var endNode       = isReverse ? fromNode : toNode;
        var beginBounds   = beginNode.bounds;
        var endBounds     = endNode.bounds;
        var beginSide     = isReverse ? toSide : fromSide;
        var endSide       = isReverse ? fromSide : toSide;
        var betterLines   = !options.mergeSideLines;
        var beginSideRels = betterLines && beginNode.sideRels[beginSide];
        var endSideRels   = betterLines && endNode.sideRels[endSide];

        if (betterLines) {
            var findRelById   = function(rel) {
                return rel.id === relation.id;
            };
            if (!beginSideRels.length || !beginSideRels.find(findRelById)) {
                beginSideRels.push(relation);
                if (beginSideRels.length > 1) {
                    beginSideRels.forEach(function(rel) {
                        if (rel.id !== relation.id) {
                            that.renderRelation(rel);
                        }
                    });
                }
            }
            if (!endSideRels.length || !endSideRels.find(findRelById)) {
                endSideRels.push(relation);
                if (endSideRels.length > 1) {
                    endSideRels.forEach(function(rel) {
                        if (rel.id !== relation.id) {
                            that.renderRelation(rel);
                        }
                    });
                }
            }
        }
        var beginSideRelIndex  = betterLines && beginSideRels.findIndex(findRelById);
        var endSideRelIndex    = betterLines && endSideRels.findIndex(findRelById);
        var beginSideRelsCount = betterLines ? beginSideRels.length : 0;
        var endSideRelsCount   = betterLines ? endSideRels.length : 0;

        var bounds            = {};
        var beginLineStyle    = {};
        var centerLineStyle   = {
            alignItems: 'center',
            justifyContent: 'center',
        };
        var endLineStyle      = {};
        var lineColor         = options.relationLineColor;
        var lineSize          = options.relationLineWidth;
        var arrowSize         = options.relatinArrowSize;
        var arrowStyle        = {
            position: 'absolute',
            width: 0,
            height: 0,
            borderTopWidth: arrowSize / 2,
            borderRightWidth: arrowSize / 2,
            borderBottomWidth: arrowSize / 2,
            borderLeftWidth: arrowSize / 2,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            borderStyle: 'solid',
        };
        var baseLineStyle = {
            background: lineColor,
            position: 'absolute',
        };
        if (direction === 'bottom-left' || direction === 'top-right') {
            // Relation link as ┘
            bounds.left   = beginBounds.right;
            bounds.top    = endBounds.bottom;
            bounds.width  = endBounds.right - bounds.left;
            bounds.height = beginBounds.bottom - bounds.top;

            beginLineStyle.left   = isReverse ? arrowSize : 0;
            beginLineStyle.top    = Math.floor(beginBounds.centerTop - bounds.top - lineSize / 2);
            beginLineStyle.width  = Math.floor(bounds.width - lineSize - endBounds.width / 2) - beginLineStyle.left;
            beginLineStyle.height = lineSize;

            endLineStyle.left   = beginLineStyle.width + beginLineStyle.left;
            endLineStyle.top    = isReverse ? 0 : arrowSize;
            endLineStyle.width  = lineSize;
            endLineStyle.height = beginLineStyle.top - endLineStyle.top;

            centerLineStyle.left   = endLineStyle.left;
            centerLineStyle.top    = beginLineStyle.top;
            centerLineStyle.height = lineSize;
            centerLineStyle.width  = lineSize;

            if (options.showRelationTextOnSide) {
                centerLineStyle.justifyContent = 'flex-start';
                centerLineStyle.textIndent     = '4px';
            }

            if (isReverse) {
                // render left arrow
                arrowStyle.borderRightWidth = arrowSize;
                arrowStyle.borderLeftWidth  = 0;
                arrowStyle.borderRightColor = lineColor;
                arrowStyle.left = 0;
                arrowStyle.top  = Math.floor(beginLineStyle.top + lineSize / 2 - arrowSize / 2);
            } else {
                // render top arrow
                arrowStyle.borderBottomWidth = arrowSize;
                arrowStyle.borderTopWidth    = 0;
                arrowStyle.borderBottomColor = lineColor;
                arrowStyle.top  = 0;
                arrowStyle.left = Math.floor(endLineStyle.left + lineSize / 2 - arrowSize / 2);
            }
        } else if (direction === 'top-left' || direction === 'bottom-right') {
            // Relation link as └
            bounds.left   = beginBounds.left;
            bounds.top    = beginBounds.bottom;
            bounds.width  = endBounds.left - bounds.left;
            bounds.height = beginBounds.bottom - bounds.top;

            beginLineStyle.left   = Math.floor(beginBounds.width / 2 - lineSize);
            beginLineStyle.top    = isReverse ? arrowSize : 0;
            beginLineStyle.width  = lineSize;
            beginLineStyle.height = Math.floor(endBounds.centerTop - bounds.top - lineSize / 2) - beginLineStyle.top;

            endLineStyle.left   = beginLineStyle.left + lineSize;
            endLineStyle.top    = beginLineStyle.top + beginLineStyle.height;
            endLineStyle.width  = Math.floor(bounds.width - lineSize - beginLineStyle.left) - (isReverse ? 0 : arrowSize);
            endLineStyle.height = lineSize;

            centerLineStyle.top    = endLineStyle.top;
            centerLineStyle.left   = beginLineStyle.left;
            centerLineStyle.height = lineSize;
            centerLineStyle.width  = lineSize;

            if (options.showRelationTextOnSide) {
                centerLineStyle.justifyContent = 'flex-end';
            }

            if (isReverse) {
                // render top arrow
                arrowStyle.borderBottomWidth = arrowSize;
                arrowStyle.borderTopWidth    = 0;
                arrowStyle.borderBottomColor = lineColor;
                arrowStyle.top  = 0;
                arrowStyle.left = Math.floor(beginLineStyle.left + lineSize / 2 - arrowSize / 2);
            } else {
                // render right arrow
                arrowStyle.borderLeftWidth  = arrowSize;
                arrowStyle.borderRightWidth = 0;
                arrowStyle.borderLeftColor  = lineColor;
                arrowStyle.left = endLineStyle.left + endLineStyle.width;
                arrowStyle.top  = Math.floor(endLineStyle.top + lineSize / 2 - arrowSize / 2);
            }
        } else if (direction === 'left' || direction === 'right') {
            bounds.left   = beginBounds.right;
            bounds.top    = Math.min(beginBounds.top, endBounds.top);
            bounds.width  = endBounds.left - bounds.left;
            bounds.height = Math.max(beginBounds.bottom, endBounds.bottom) - bounds.top;

            beginLineStyle.left   = isReverse ? arrowSize : 0;
            beginLineStyle.top    = Math.floor(beginBounds.centerTop - bounds.top - lineSize / 2);
            beginLineStyle.width  = bounds.width / 2 - beginLineStyle.left;
            beginLineStyle.height = lineSize;

            endLineStyle.left   = bounds.width / 2;
            endLineStyle.top    = Math.floor(endBounds.centerTop - bounds.top - lineSize / 2);
            endLineStyle.width  = bounds.width / 2 - (isReverse ? 0 : arrowSize);
            endLineStyle.height = lineSize;

            centerLineStyle.left = Math.floor(bounds.width / 2 - lineSize / 2);
            centerLineStyle.top = Math.floor(Math.min(endBounds.centerTop, beginBounds.centerTop) - bounds.top - lineSize / 2);
            centerLineStyle.height = Math.floor(Math.abs(endBounds.centerTop - beginBounds.centerTop) + lineSize);
            centerLineStyle.width = lineSize;

            if (options.showRelationTextOnSide) {
                if (centerLineStyle.height <= 10) {
                    centerLineStyle.alignItems = 'flex-end';
                } else {
                    centerLineStyle.justifyContent = 'flex-start';
                    centerLineStyle.textIndent = '4px';
                }
            }

            if (isReverse) {
                // render left arrow
                arrowStyle.borderRightWidth = arrowSize;
                arrowStyle.borderLeftWidth = 0;
                arrowStyle.borderRightColor = lineColor;
                arrowStyle.left = 0;
                arrowStyle.top = Math.floor(beginLineStyle.top + lineSize / 2 - arrowSize / 2);
            } else {
                // render right arrow
                arrowStyle.borderLeftWidth = arrowSize;
                arrowStyle.borderRightWidth = 0;
                arrowStyle.borderLeftColor = lineColor;
                arrowStyle.left = endLineStyle.left + endLineStyle.width;
                arrowStyle.top = Math.floor(endLineStyle.top + lineSize / 2 - arrowSize / 2);
            }
        } else if (direction === 'top' || direction === 'bottom') {
            bounds.left   = Math.min(beginBounds.left, endBounds.left);
            bounds.top    = beginBounds.bottom;
            bounds.width  = Math.max(beginBounds.right, endBounds.right) - bounds.left;
            bounds.height = endBounds.top - bounds.top;

            beginLineStyle.top    = isReverse ? arrowSize : 0;
            beginLineStyle.left   = Math.floor(beginBounds.centerLeft - bounds.left - lineSize / 2);
            beginLineStyle.height = bounds.height / 2 - beginLineStyle.top;
            beginLineStyle.width  = lineSize;

            endLineStyle.top    = bounds.height / 2;
            endLineStyle.left   = Math.floor(endBounds.centerLeft - bounds.left - lineSize / 2);
            endLineStyle.height = bounds.height / 2 - (isReverse ? 0 : arrowSize);
            endLineStyle.width  = lineSize;

            centerLineStyle.top    = Math.floor(bounds.height / 2 - lineSize / 2);
            centerLineStyle.left   = Math.floor(Math.min(endBounds.centerLeft, beginBounds.centerLeft) - bounds.left - lineSize / 2);
            centerLineStyle.width  = Math.floor(Math.abs(endBounds.centerLeft - beginBounds.centerLeft) + lineSize);
            centerLineStyle.height = lineSize;

            if (options.showRelationTextOnSide) {
                if (centerLineStyle.width <= 10) {
                    centerLineStyle.justifyContent = 'flex-start';
                    centerLineStyle.textIndent = '4px';
                } else {
                    centerLineStyle.alignItems = 'flex-end';
                }
            }

            if (isReverse) {
                // render top arrow
                arrowStyle.borderBottomWidth = arrowSize;
                arrowStyle.borderTopWidth    = 0;
                arrowStyle.borderBottomColor = lineColor;
                arrowStyle.top  = 0;
                arrowStyle.left = Math.floor(beginLineStyle.left + lineSize / 2 - arrowSize / 2);
            } else {
                // render bottom arrow
                arrowStyle.borderTopWidth    = arrowSize;
                arrowStyle.borderBottomWidth = 0;
                arrowStyle.borderTopColor    = lineColor;
                arrowStyle.top  = endLineStyle.top + endLineStyle.height;
                arrowStyle.left = Math.floor(endLineStyle.left + lineSize / 2 - arrowSize / 2);
            }
        }
        $relation.find('.flowchart-rel-arrow').css(arrowStyle);
        $relation.find('.flowchart-rel-begin-line').css($.extend(beginLineStyle, baseLineStyle));
        $relation.find('.flowchart-rel-end-line').css($.extend(endLineStyle, baseLineStyle));``
        var $centerLine  = $relation.find('.flowchart-rel-center-line').css($.extend(centerLineStyle, baseLineStyle));
        var relationText = (relation.text === undefined || relation.text === null) ? '' : relation.text;
        if (options.showRelationTextOnSide) {
            $centerLine.text(relationText);
        } else {
            $centerLine.find('.text').css($.extend({}, options.relationTextStyle)).text(relationText);
        }

        $relation.css($.extend({position: 'absolute'}, bounds));
    };

    FlowChart.prototype._isNodeIntersect = function(node1, node2)
    {
        var node1Bounds = node1.bounds;
        var node2Bounds = node2.bounds;
        return !((node2Bounds.right < node1Bounds.left)
            || (node2Bounds.left > node1Bounds.right)
            || (node2Bounds.bottom < node1Bounds.top)
            || (node2Bounds.top > node1Bounds.bottom));
    };

    // Render elements and relations
    FlowChart.prototype.render = function(partials) {
        var that         = this;
        var options      = that.options;
        var elements     = that.elements;
        var nodeList     = [];
        var relationList = [];

        $.each(elements, function(_, element) {
            if (element.type === 'relation') {
                relationList.push(element);
            } else {
                delete element.siblingsIndex;
                element.fromRels = [];
                element.toRels   = [];
                element.children = [];
                element.parents  = [];
                nodeList.push(element);
            }
        });

        var elementsSorter = function(e1, e2) {
            return e1.order - e2.order;
        };
        nodeList.sort(elementsSorter);
        relationList.sort(elementsSorter);

        $.each(relationList, function(_, relation) {
            var fromNode = elements[relation.from];
            var toNode = elements[relation.to];
            relation.visible = fromNode && toNode;
            if (relation.visible) {
                relation.fromIndex = fromNode.fromRels.length;
                relation.toIndex   = fromNode.toRels.length;
                relation.fromNode  = fromNode;
                relation.toNode    = toNode;

                fromNode.fromRels.push(relation);
                toNode.toRels.push(relation);
                fromNode.children.push(toNode);
                toNode.parents.push(fromNode);
            }
        });
        var partialsMap = partials ? {} : null;
        if (partials) {
            if (!$.isArray(partials)) {
                partials = [partials];
            }
            $.each(partials, function(_, elementId) {
                if (typeof elementId === 'object') {
                    elementId = elementId.id;
                }
                var element = elements[elementId];
                if (element) {
                    partialsMap[elementId] = element;
                    if (element.type !== 'relation') {
                        if (element.fromRels.length) {
                            $.each(element.fromRels, function(_1, rel) {
                                partialsMap[rel.id] = rel;
                            });
                        }
                        if (element.toRels.length) {
                            $.each(element.toRels, function(_1, rel) {
                                partialsMap[rel.id] = rel;
                            });
                        }
                    }
                }

            });
        } else {
            that.bounds = {left: options.padding, top: options.padding, width: 0, height: 0};
        }

        $.each(nodeList, function(_, node) {
            if (partialsMap && !partialsMap[node.id]) {
                return;
            }
            that.renderNode(node, true);
        });
        $.each(nodeList, function(_, node) {
            if (partialsMap && !partialsMap[node.id]) {
                return;
            }
            that._layoutNode(node, !partials);
        });

        // Handle overlay
        if (!partials) {
            var needCheckOverlay = true;
            while(needCheckOverlay) {
                needCheckOverlay = false;
                for (var i = nodeList.length - 1; i >= 0; --i) {
                    var nodeA = nodeList[i];
                    for (var j = nodeList.length - 1; j >= 0; --j) {
                        if (i === j) {
                            continue;
                        }
                        var nodeB = nodeList[j];
                        if (that._isNodeIntersect(nodeA, nodeB)) {
                            needCheckOverlay = true;
                            nodeA.position.top += options.vertSpace + nodeA.size.height;
                            that.calcNodeBounds(nodeA);
                        }
                    }
                }
            };
            nodeList.forEach(function(node) {
                if (partialsMap && !partialsMap[node.id]) {
                    return;
                }
                that._layoutNode(node);
            });
        }

        $.each(relationList, function(_, relation) {
            if (partialsMap && !partialsMap[relation.id]) {
                return;
            }
            that.renderRelation(relation);
        });

        that.$canvas.css({
            minWidth: that.bounds.width + options.padding,
            minHeight: that.bounds.height + options.padding,
        });
    };

    // Set node position
    FlowChart.prototype.setNodePosition = function(nodeID, position) {
        var that = this;
        var node = that.elements[nodeID];
        if (node) {
            node.position = {
                left: typeof position.left === 'number' ? position.left : node.position.left,
                top: typeof position.top === 'number' ? position.top : node.position.top,
            };
            node.customPos = true;
            that.render(node);
        }
    };

    // Reset all custom positions
    FlowChart.prototype.resetPosition = function() {
        $.each(this.elements, function(_, element) {
            if (element.type !== 'relation' && element.customPos) {
                delete element.customPos;
            }
        });
        this.render();
    };

    // Enter edit mode
    FlowChart.prototype.enterEditMode = function(ele) {
        var that = this;

        if (typeof ele === 'string') {
            ele = that.elements[ele];
        }
        if (!ele) {
            return;
        }

        that.exitEditMode();

        var $ele = ele.$ele;
        var $inputBox = ele.isRelation ? $ele.find('.flowchart-relation-text') : $ele;
        ele.styleBeforeEdit = {
            zIndex: $inputBox.css('zIndex'),
            borderColor: $inputBox.css('borderColor'),
            boxShadow: $inputBox.css('boxShadow'),
            paddingLeft: $inputBox.css('paddingLeft'),
            paddingRight: $inputBox.css('paddingRight'),
        };
        $inputBox.css({
            zIndex: 10,
            borderColor: '#3280fc',
            boxShadow: '0 0 2px #3280fc, 0 0 0 2px rgba(50,128,252,.2)',
            paddingLeft: 4,
            paddingRight: 4,
        });

        var $text = ele.isRelation ? $inputBox : $ele.find('.text');
        $text.attr('contenteditable', 'true').focus().one('blur.' + that.id, function() {
            that.exitEditMode();
        });
        selectText($text);
        that._currentEditEle = ele;
    };

    // Exit edit mode
    FlowChart.prototype.exitEditMode = function() {
        var that = this;
        var ele  = that._currentEditEle;
        if (!ele) {
            return;
        }
        var $ele      = ele.$ele;
        var $inputBox = ele.isRelation ? $ele.find('.flowchart-relation-text') : $ele;
        var $text     = ele.isRelation ? $inputBox : $ele;

        $inputBox.css(ele.styleBeforeEdit);
        $text.attr('contenteditable', ' ').off('.' + that.id);
        that._currentEditEle = null;
        that.editNodeText(ele, $text.text());
    };

    // Edit node text
    FlowChart.prototype.editNodeText = function(node, text, skipRender) {
        if (typeof node === 'string') {
            node = this.elements[node];
        }
        if (!node) {
            return;
        }
        if (node.text !== undefined && node.originText === undefined) {
            node.originText = node.text;
        }
        node.text = text;

        if (!skipRender) {
            this.render(node);
        }
    };

    // Reset data
    FlowChart.prototype.resetData = function(data) {
        if (!data) {
            data = [{
                id: 'start',
                type: 'start',
                text: 'Start',
                // className: 'text-red',
                // style: {color: 'red'}
            }];
        }
        var that = this;
        var oldElements = [];
        $.each(that.elements, function(_, ele) {
            oldElements.push(ele);
        });
        that.delete(oldElements, true);
        that.update(data);
    };

    // Update elements data
    FlowChart.prototype.update = function(elementsData, skipRender) {
        if (typeof elementsData === 'object' && !$.isArray(elementsData)) {
            elementsData = [elementsData];
        }
        if (!elementsData || !elementsData.length) return;

        var that = this;
        var elements = that.elements;
        $.each(elementsData, function(_, element) {
            var elementID = element.id;
            element.isRelation = element.type === 'relation';
            element.isNode = !element.isRelation;
            if (elementID === undefined) {
                elementID = element.isRelation ? (element.from + '-' + element.to) : $.zui.uuid();
                element.id = elementID;
            }
            if (!element.type) {
                element.type = 'action';
            }
            if (element.position) {
                element.customPos = true;
            }
            if (element.isNode) {
                var relations = [];
                if (element.from) {
                    var froms = $.isArray(element.from) ? element.from : [element.from];
                    $.each(froms, function(_, from) {
                        var fromInfo = from.split(':');
                        relations.push({
                            type: 'relation',
                            from: fromInfo[0],
                            to: elementID,
                            text: fromInfo[1],
                            id: fromInfo[0] + '-' + elementID
                        });
                    });
                    delete element.from;
                }
                if (element.to) {
                    var tos = $.isArray(element.to) ? element.to : [element.to];
                    $.each(tos, function(_, to) {
                        var toInfo = to.split(':');
                        relations.push({
                            type: 'relation',
                            to: toInfo[0],
                            text: toInfo[1],
                            from: elementID,
                            id: elementID + '-' + toInfo[0]
                        });
                    });
                    delete element.to;
                }
                if (relations.length) {
                    that.update(relations, true);
                }
            }
            var oldElement = elements[elementID];
            if (oldElement) {
                element.order = oldElement.order;
                if (!element.position) {
                    element.position = oldElement.position;
                }
            } else {
                element.order = that.idSeed++;
                if (element.isRelation) {
                    element.order += 1000000;
                }
            }
            elements[elementID] = element;
        });

        if (!skipRender) {
            that.render();
        }
    };

    // Get dom id of given element
    FlowChart.prototype._getDomID = function(element, excludeCssPrefix) {
        return (excludeCssPrefix ? '' : '#') + this.id + '-' + (typeof element === 'string' ? element : element.id);
    };

    // Delete elements and relations
    FlowChart.prototype.delete = function(idList, skipRender) {
        var that = this;
        if (typeof idList === 'string') {
            idList = [idList];
        }

        $.each(idList, function(idx, id) {
            if (typeof id === 'object') {
                id = id.id;
            }
            var $element = that.$canvas.find(that._getDomID(id));
            $element.remove();
            delete that.elements[id];
        });

        if (!skipRender) {
            that.render();
        }
    };

    // Export chart data as elements list
    FlowChart.prototype.exportData = function() {
        var data = [];
        $.each(this.elements, function(_, element) {
            var dataItem = {
                id: element.id,
                type: element.type,
                order: element.order,
            };
            if (element.type === 'relation') {
                dataItem.from = element.from;
                dataItem.to = element.to;
            } else if (element.customPos) {
                dataItem.position = element.position;
            }
            if (element.text !== undefined) {
                dataItem.text = element.text;
            }
            if (element.className !== undefined) {
                dataItem.className = element.className;
            }
            if (element.style !== undefined) {
                dataItem.style = element.style;
            }
            data.push(dataItem);
        });
        data.sort(function(e1, e2) {
            return e1.order - e2.order;
        });
        $.each(data, function(_, dataItem) {
            delete dataItem.order;
        });
        return data;
    };

    // Change options
    FlowChart.prototype.setOptions = function(newOptions, skipRender) {
        $.extend(this.options, newOptions);
        if (!skipRender) {
            this.render();
        }
    };

    FlowChart.LANGS = {
        'zh-cn': {
            confirmToDelete: "确定删除【{0}】？",
            edit: '编辑',
            'delete': '删除',
        },
        'zh-tw': {
            confirmToDelete: "確定刪除【{0}】？",
            edit: '編輯',
            'delete': '刪除',
        },
        en: {
            confirmToDelete: "Confirm to delete \"{0}\"?",
            edit: 'Edit',
            'delete': 'Delete',
        },
    },

    // default options
    FlowChart.DEFAULTS = {
        mergeSideLines: false,
        adsorptionGrid: 5,
        doubleClickToEdit: true,
        showContextMenu: true,
        disableAutoPosition: true,
        quickAdd: true,
        deleteConfirm: true,

        width: 'auto',
        height: 500,
        padding: 20,
        nodeHeight: 40,
        horzSpace: 80,
        vertSpace: 60,
        relatinArrowSize: 8,
        relationLineWidth: 1,
        relationLineColor: '#333',
        nodeStyle: {
            border: '1px solid #333',
            maxWidth: 200,
            minWidth: 70,
            background: 'white',
            padding: "9px 10px",
        },
        actionNodeStyle: {
            borderRadius: '2px',
        },
        startNodeStyle: {
            borderRadius: '20px',
        },
        stopNodeStyle: {
            borderRadius: '20px',
        },
        nodeTextStyle: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
        relationTextStyle: {
        },
        showRelationTextOnSide: false,
        data: [{
            id: 'start',
            type: 'start',
            text: 'Start',
            // className: 'text-red',
            // style: {color: 'red'}
        }, /*{
            id: 'action-example-1',
            type: 'action',
            text: '渲染图形'
        }, {
            id: 'action-example-2',
            type: 'action',
            text: '显示画面'
        }, {
            id: 'action-example-3',
            type: 'action',
            text: '额外运算'
        }, {
            id: 'action-example-4',
            type: 'stop',
            text: '完成'
        }, {
            type: 'relation',
            id: 'relation-1',
            from: 'start',
            to: 'action-example-1',
            text: '工作'
        }, {
            type: 'relation',
            id: 'relation-2',
            from: 'action-example-1',
            to: 'action-example-2',
        }, {
            type: 'relation',
            id: 'relation-3',
            from: 'action-example-2',
            to: 'action-example-4',
            text: '休息了'
        }, {
            type: 'relation',
            id: 'relation-4',
            from: 'action-example-1',
            to: 'action-example-3',
            text: '关系',
        }, {
            type: 'relation',
            id: 'relation-5',
            from: 'action-example-3',
            to: 'action-example-4',
            text: 'test',
        }, {
            type: 'relation',
            id: 'relation-6',
            from: 'action-example-2',
            to: 'action-example-3',
            text: 'test2'
        }*/],
        draggable: true,
    };

    // Extense jquery element
    $.fn.flowChart = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new FlowChart(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    FlowChart.NAME = NAME;

    $.fn.flowChart.Constructor = FlowChart;

    // Auto call flowChart after document load complete
    $(function() {
        $('[data-ride="flowChart"]').flowChart();
    });
}(jQuery));
