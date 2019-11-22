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

    /**
     * Get distance of two points
     * @param {{left: number, top: number}} point1
     * @param {{left: number, top: number}} point2
     * @return {number}
     */
    var distanceOfTwoPoints = function(point1, point2) {
        var left = point1.left - point2.left;
        var top = point1.top - point2.top;
        return Math.sqrt(left * left + top * top);
    };

    /**
     * Add two points
     * @param {{left: number, top: number}} point1
     * @param {{left: number, top: number}} point2
     * @return {number}
     */
    var addTwoPoints = function(point1, point2) {
        return {
            left: point1.left + point2.left,
            top: point1.top + point2.top,
        };
    };

    var ifUndefinedThen = function(value, thenValue1, thenValue2, thenValue3) {
        if (value !== undefined) {
            return value;
        }
        if (thenValue1 !== undefined) {
            return thenValue1;
        }
        if (thenValue2 !== undefined) {
            return thenValue2;
        }
        return thenValue3;
    };

    var ifUndefinedOrNullThen = function(value, thenValue1, thenValue2, thenValue3) {
        if (value !== undefined && value !== null) {
            return value;
        }
        if (thenValue1 !== undefined && thenValue1 !== null) {
            return thenValue1;
        }
        if (thenValue2 !== undefined && thenValue2 !== null) {
            return thenValue2;
        }
        return thenValue3;
    };

    var convertCssToSvgStyle = function(style) {
        var svgStyle = $.extend({}, style);
        if (svgStyle.background) {
            svgStyle.fill = svgStyle.background;
            delete svgStyle.background;
        }
        if (svgStyle.backgroundColor) {
            svgStyle.fill = svgStyle.backgroundColor;
            delete svgStyle.backgroundColor;
        }
        if (svgStyle.borderWidth) {
            svgStyle['stroke-width'] = svgStyle.borderWidth;
            delete svgStyle.borderWidth;
        }
        if (svgStyle.borderColor) {
            svgStyle.stroke = svgStyle.borderColor;
            delete svgStyle.borderColor;
        }
        return svgStyle;
    };

    var createSVGElement = function(type, attrs) {
        if (typeof type === 'object') {
            attrs = type;
            type = 'svg';
        } else if (!type) {
            type = 'svg';
        }
        var svg = document.createElementNS('http://www.w3.org/2000/svg', type);
        if (attrs) {
            $.each(attrs, function(attrName, attrValue) {
                if (attrValue !== undefined && attrValue !== null) {
                    svg.setAttribute(attrName, attrValue);
                }
            });
        }
        return svg;
    };

    var updateSVGElement = function(svg, attrs) {
        $.each(attrs, function(attrName, attrValue) {
            if (attrValue !== undefined && attrValue !== null) {
                svg.setAttribute(attrName, attrValue);
            } else {
                svg.removeAttribute(attrName);
            }
        });
    };

    // model name
    var NAME = 'zui.flowChart';
    var idSeed = 1;
    var SIDES = {top: 'top', right: 'right', bottom: 'bottom', left: 'left'};

    var basicElementProps = {
        id: function(value, elementType, elementData) {
            if (value !== undefined) {
                if (value.indexOf(':') > -1) {
                    throw new Error('Do not allow ":" in element id "' + value + '".');
                }
                if (value.indexOf('.') > -1) {
                    throw new Error('Do not allow "." in element id "' + value + '".');
                }
                return value;
            }
            return $.zui.uuid();
        },
        type: function(_, elementType) {return elementType.name},
        text: function(value, elementType, elementData) {
            if (value === null) {
                value = typeof elementType.text === 'function' ? elementType.text(elementType, elementData) : elementType.text;
            }
            return value === undefined || value === null ? '' : String(value);
        },
        order: function(value, elementType) {
            if (value === undefined) {
                return (elementType.isRelation ? 10000 : 0) + idSeed++;
            }
            return value;
        },
        data: function(value, elementType, elementData) {
            var data = $.extend({}, value);
            $.each(elementData, function(propName, propVal) {
                if (!elementType.props[propName]) {
                    data[propName] = propVal;
                }
            });
            return data;
        },

        style: 'object',
        textStyle: 'object',
        className: 'string',
        visible: false,
        $ele: false,
        $text: false,
        bounds: false,
        elementType: false,
        isRelation: false,
        isNode: false,
        flowChart: false,
    };

    var basicRelationProps = $.extend({
        lineStyle: 'string',
        lineWidth: 'int',
        lineColor: 'string',
        lineShape: 'string',
        arrowSize: 'int',
        hideArrow: function(value, _, elementData) {
            if (value === undefined) {
                value = !elementData.arrowSize;
            }
            return !!value;
        },
        from: function(value) {
            if (value) {
                value = value.split('.')[0];
            }
            return value;
        },
        to: function(value) {
            if (value) {
                value = value.split('.')[0];
            }
            return value;
        },
        fromPort: function(value, _, elementData) {
            if ((value === undefined || value === null || !value.length) && elementData.from) {
                value = elementData.from.split('.')[1];
            }
            return value;
        },
        toPort: function(value, _, elementData) {
            if ((value === undefined || value === null || !value.length) && elementData.to) {
                value = elementData.to.split('.')[1];
            }
            return value;
        },
        fromIndex: false,
        toIndex: false,
        fromNode: false,
        toNode: false,
        beginSideRels: false,
        endSideRels: false,
    }, basicElementProps);
    var basicNodeProps = $.extend({
        borderStyle: 'string',
        borderWidth: 'int',
        borderColor: 'string',
        shapeStyle: 'object',
        position: function(value) {
            if (typeof value === 'object' && ((typeof value.left === 'number' && typeof value.top === 'number') || (typeof value.centerLeft === 'number' && typeof value.centerTop === 'number') || (SIDES[value.direction] && typeof value.from === 'string'))) {
                return $.extend({custom: true}, value)
            }
            return {};
        },
        hideArrowToSelf: 'bool',
        width: 'int',
        height: 'int',
        maxWidth: 'int',
        minWidth: 'int',
        siblingsIndex: false,
        fromRels: false,
        toRels: false,
        children: false,
        parents: false,
    }, basicElementProps);

    var onePortEachSide = {
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
    };

    var threePortsEachSide = {
        top: 3,
        bottom: 3,
        left: 1,
        right: 1,
    };

    // 基础元素类型
    var basicElementTypes = {
        relation: {
            props: basicRelationProps,
        },
        rectangle: {
            shape: 'rectangle',
            style: {borderRadius: '2px', borderStyle: 'solid', borderWidth: 1, borderColor: '#333'},
            textStyle: {lineHeight: '20px', minHeight: 38, padding: '9px 10px'},
            props: basicNodeProps,
            ports: threePortsEachSide
        },
        box: {
            shape: 'box',
            style: {borderRadius: '20px', borderStyle: 'solid', borderWidth: 1, borderColor: '#333'},
            textStyle: {lineHeight: '20px', minHeight: 38, padding: '9px 10px'},
            props: basicNodeProps,
            ports: threePortsEachSide
        },
        diamond: {
            shape: 'diamond',
            style: {borderWidth: 0},
            textStyle: {lineHeight: '20px', minHeight: 38, padding: '9px 20px'},
            shapeStyle: {fill: '#fff', strokeWidth: 1, stroke: '#333'},
            props: basicNodeProps,
            ports: onePortEachSide,
        },
        circle: {
            shape: 'circle',
            minWidth: 40,
            textStyle: {lineHeight: '20px', minHeight: 38, padding: '9px 10px'},
            style: {borderRadius: '50%', borderStyle: 'solid', borderWidth: 1, borderColor: '#333', minWidth: 40},
            props: basicNodeProps,
            ports: onePortEachSide,
        },
        connection: {
            minWidth: 0,
            style: {padding: 2},
            textStyle: {lineHeight: 1, minHeight: 12},
            shape: 'connection',
            hideArrowToSelf: true,
            props: basicNodeProps,
            quickAdd: false,
            ports: onePortEachSide,
        },
        dot: {
            shape: 'dot',
            width: 16,
            height: 16,
            shapeStyle: {borderRadius: '50%', borderStyle: 'solid', borderWidth: 1, borderColor: '#333', minWidth: 0, minHeight: 0, maxWidth: 'none', maxHeight: 'none', overflow: 'visible'},
            props: $.extend({
                textPosition: 'string'
            }, basicNodeProps),
            ports: onePortEachSide,
        }
    };

    var supportElementTypes = {
        relation: true,
        action: {type: 'rectangle'},
        start: {type: 'box'},
        stop: {type: 'box'},
        judge: {type: 'diamond'},
        result: {type: 'circle'},
        connection: true,
        point: {type: 'dot'},
    };

    /**
     * Create a FlowChartElementPort
     * @param {Object|string|number} portData
     * @param {string} side
     * @param {number} index
     */
    var FlowChartElementPort = function(portData, side, index) {
        if (typeof portData === 'number') {
            portData = {name: '', space: portData};
        } else if (typeof portData === 'string') {
            portData = {name: portData};
        }

        $.extend(this, portData);

        side = side || portData.side;

        /**
         * Side type: 'left', 'top', 'right', 'bottom'
         * @type {string}
         */
        this.side = SIDES[side] ? side : 'right';

        /**
         * @type {string}
         */
        this.name = portData.name;

        /**
         * @type {string}
         */
        this.displayName;

        /**
         * @type {boolean}
         */
        this.empty = typeof this.name !== 'string' || !this.name.length;

        /**
         * Direction type: 'in', 'out', 'in-out'
         * @type {string}
         */
        this.direction = portData.direction === 'out' ? 'out' : portData.direction === 'in' ? 'in' : 'in-out';

        this.space = this.space === undefined ? 1 : this.space;

        /**
         * @type {number}
         */
        this.spaceBegin = portData.spaceBegin || 0;

        /**
         * @type {number}
         */
        this.spaceEnd = portData.spaceEnd || 0;

        /**
         * @type {string}
         */
        this.lineColor;

        /**
         * @type {number}
         */
        this.lineWidth;

        /**
         * @type {string}
         */
        this.lineStyle;

        /**
         * @type {string}
         */
        this.lineLength;

        /**
         * @type {number}
         */
        this.index = index;

        /**
         * @type {boolean}
         */
        this.free = this.free !== false;

        /**
         * @type {number}
         */
        this.maxLinkCount = this.maxLinkCount ? Math.max(1, this.maxLinkCount) : 1;
    };

    /**
     * Create ports map
     * @param {{left: Record<string, any>[], right: Record<string, any>[], top: Record<string, any>[], bottom: Record<string, any>[]}} initData
     * @return {left: FlowChartElementPort[], right: FlowChartElementPort[], top: FlowChartElementPort[], bottom: FlowChartElementPort[]}
     */
    FlowChartElementPort.createPortsMap = function(initData) {
        if (!initData) {
            return null;
        }
        var map = {$all: {}, $free: []};
        var hasPort;
        $.each(SIDES, function(side) {
            var portsData = initData[side];
            if (typeof portsData === 'number') {
                var portsDataConverted = [];
                for (var i = 1; i <= portsData; ++i) {
                    portsDataConverted.push(side + i);
                }
                portsData = portsDataConverted;
            }
            if (portsData && !$.isArray(portsData)) {
                portsData = [portsData];
            }
            if (portsData && portsData.length) {
                hasPort = true;
                map[side] = portsData.map(function(portData, index) {
                    var port = new FlowChartElementPort(portData, side, index);
                    if (!port.empty) {
                        map.$all[port.name] = port;
                        if (port.free) {
                            map.$free.push(port);
                        }
                    }
                    return port;
                });
            }
        });
        return hasPort ? map : null;
    };

    /**
     * FlowChartElement
     * @param {Record<string, any>} initData
     * @param {FlowChartElementType} elementType
     */
    var FlowChartElement = function(initData, elementType) {
        $.extend(this, elementType.getElementData(initData));

        /**
         * @type {string}
         */
        this.id;

        /**
         * @type {string}
         */
        this.type;

        /**
         * @type {string}
         */
        this.basicType;

        /**
         * @type {string}
         */
        this.text;

        /**
         * @type {number}
         */
        this.order;

        /**
         * @type {Record<string, any>}
         */
        this.data;

        /**
         * @type {Record<string, any>}
         */
        this.style;

        /**
         * @type {Record<string, any>}
         */
        this.textStyle;

        /**
         * @type {string}
         */
        this.className;

        /**
         * @type {boolean}
         */
        this.visible;

        /**
         * @type {string}
         */

        /**
         * @type {boolean}
         */
        this.isRelation;

        /**
         * @type {boolean}
         */
        this.isNode;

        /**
         * @type {FlowChart}
         */
        this.flowChart;

        /**
         * @type {FlowChartElementType}
         */
        this.elementType;

        /**
         * @type {{top: number, left: number, width: number, height: number}}
         */
        this.bounds = this.position ? {left: this.position.left, top: this.position.top} : {};

        /**
         * @type {{left: number, top: number, custom?: number, from?: string, side?: string}}
         */
        this.position;

        /**
         * @type {JQuery}
         */
        this.$ele;

        /**
         * @type {JQuery}
         */
        this.$text;

        /**
         * @type {Record<string, any>}
         */
        this.lineStyle;

        /**
         * @type {number}
         */
        this.lineWidth;

        /**
         * @type {string}
         */
        this.lineColor;

        /**
         * @type {boolean}
         */
        this.showTextOnSide;

        /**
         * @type {number}
         */
        this.arrowSize;

        /**
         * @type {boolean}
         */
        this.hideArrow;

        /**
         * @type {string}
         */
        this.from;

        /**
         * @type {string}
         */
        this.to;

        /**
         * @type {number}
         */
        this.fromIndex;

        /**
         * @type {number}
         */
        this.toIndex;

        /**
         * @type {FlowChartElement}
         */
        this.fromNode;

        /**
         * @type {FlowChartElement}
         */
        this.toNode;

        /**
         * @type {FlowChartElement[]}
         */
        this.beginSideRels;

        /**
         * @type {FlowChartElement[]}
         */
        this.endSideRels;

        /**
         * @type {Record<string, any>}
         */
        this.shapeStyle;

        /**
         * @type {boolean}
         */
        this.hideArrowToSelf;

        /**
         * @type {Record<string, any>}
         */
        this.borderStyle;

        /**
         * @type {number}
         */
        this.borderWidth;

        /**
         * @type {string}
         */
        this.borderColor;

        /**
        @type {number} */
        this.width;

        /**
        @type {number} */
        this.maxWidth;

        /**
        @type {number} */
        this.minWidth;

        /**
        @type {number} */
        this.height;

        /**
        @type {number} */
        this.siblingsIndex;

        /**
        @type {FlowChartElement[]} */
        this.fromRels;

        /**
        @type {FlowChartElement[]} */
        this.toRels;

        /**
        @type {FlowChartElement[]} */
        this.children;

        /**
        @type {FlowChartElement[]} */
        this.parents;
    };

    /**
     * Sort FlowChartElement list
     * @param {FlowChartElement[]} elementsList
     * @return {FlowChartElement[]}
     */
    FlowChartElement.sort = function(elementsList) {
        return elementsList.sort(function(e1, e2) {
            return e1.order - e2.order;
        });
    };

    /**
     * Export data
     * @return {Record<string, any>}
     */
    FlowChartElement.prototype.exportData = function() {
        var data = {};
        var that = this;
        $.each(that.elementType.props, function(propName, prop) {
            if (prop) {
                if (propName === 'position') {
                    if (that.position.custom) {
                        data[propName] = that.getPosition();
                    }
                } else {
                    data[propName] = that[propName];
                }
            }
        });
        return data;
    };

    /**
     * Get bounds
     * @return {{top: number, left: number, width: number, height: number, right: number, bottom: number, centerLeft: number, centerTop: number}}
     */
    FlowChartElement.prototype.getBounds = function() {
        if (this._boundsCache) {
            return this._boundsCache;
        }
        var bounds = this.bounds;
        var hasPosition = typeof bounds.left === 'number' && typeof bounds.top === 'number';
        var boundsCache = $.extend({hasPosition: hasPosition}, bounds);
        if (hasPosition) {
            boundsCache.right = bounds.left + bounds.width;
            boundsCache.bottom = bounds.top + bounds.height;
            boundsCache.centerLeft = bounds.left + bounds.width / 2;
            boundsCache.centerTop = bounds.top + bounds.height / 2;
        }
        this._boundsCache = boundsCache;
        return boundsCache;
    };

    /**
     * Change element type
     */
    FlowChartElement.prototype.changeType = function(newType) {
        var that = this;
        if (typeof newType === 'string') {
            newType = that.flowChart.types[newType];
        }
        that.type = newType.name;
        that.basicType = newType.type;
        that.isRelation = newType.isRelation;
        that.isNode = newType.isNode;
        that.elementType = newType;
    };

    /**
     * Set bounds
     * @param {{top: number, left: number, width: number, height: number, right: number, bottom: number, centerLeft: number, centerTop: number}} bounds
     */
    FlowChartElement.prototype.setBounds = function(newBounds) {
        var that = this;
        var hasSetPosition = 0;
        var hasSetSize = 0;
        var bounds = that.bounds;
        if (typeof newBounds.top === 'number') {
            bounds.top = newBounds.top;
            hasSetPosition += 1;
        }
        if (typeof newBounds.left === 'number') {
            bounds.left = newBounds.left;
            hasSetPosition += 2;
        }
        if (typeof newBounds.width === 'number' && newBounds.width >= 0) {
            bounds.width = newBounds.width;
            hasSetSize += 1;
        }
        if (typeof newBounds.height === 'number' && newBounds.height >= 0) {
            bounds.height = newBounds.height;
            hasSetSize += 2;
        }
        if (that.isNode && hasSetPosition && that.position.custom === undefined) {
            that.position.custom = true;
        }
        if (hasSetPosition === 3 && hasSetSize === 3) {
            var flowChartBounds = that.flowChart.bounds;
            flowChartBounds.left   = Math.min(flowChartBounds.left, bounds.left);
            flowChartBounds.top    = Math.min(flowChartBounds.top, bounds.top);
            flowChartBounds.width  = Math.max(flowChartBounds.width, bounds.left + bounds.width);
            flowChartBounds.height = Math.max(flowChartBounds.height, bounds.top + bounds.height);
        }
        if (hasSetPosition || hasSetSize) {
            that._boundsCache = null;
        }
    };

    /**
     * Check current node is intersect with ohter one
     * @return {FlowChartElement} otherNode
     * @return {boolean}
     */
    FlowChartElement.prototype.isIntersectWith = function(otherNode) {
        if (!this.isNode || !otherNode.isNode) {
            return false;
        }
        var node1Bounds = this.getBounds();
        var node2Bounds = otherNode.getBounds();
        return !((node2Bounds.right < node1Bounds.left)
            || (node2Bounds.left > node1Bounds.right)
            || (node2Bounds.bottom < node1Bounds.top)
            || (node2Bounds.top > node1Bounds.bottom));
    };

    /**
     * Init element before render
     */
    FlowChartElement.prototype.initBeforeRender = function() {
        var that = this;
        if (that.isNode) {
            delete that.siblingsIndex;
            that.fromRels = [];
            that.toRels   = [];
            that.children = [];
            that.parents  = [];
        }
    };

    FlowChartElement.prototype.getFromNodeOfRelation = function() {
        var that = this;
        if (!that.fromNode && that.from) {
            that.fromNode = that.flowChart.getElement(that.from);
        }
        return that.fromNode;
    };

    FlowChartElement.prototype.getToNodeOfRelation = function() {
        var that = this;
        if (!that.toNode && that.to) {
            that.toNode = that.flowChart.getElement(that.to);
        }

        return that.toNode;
    };

    /**
     * @return {{fromPort: FlowChartElementPort, toPort: FlowChartElementPort}}
     */
    FlowChartElement.prototype.getPortsInfoOfRelation = function() {
        var that = this;
        if (that._relationPortsInfo === undefined) {
            var fromNode = that.getFromNodeOfRelation();
            var toNode   = that.getToNodeOfRelation();
            if (!fromNode || !toNode) {
                that._relationPortsInfo = null;
            } else {
                var fromPort, toPort;
                if (that.fromPort) {
                    fromPort = fromNode.elementType.getPortByName(that.fromPort);
                }
                if (that.toPort) {
                    toPort = toNode.elementType.getPortByName(that.toPort);
                }
                if (!that.fromPort || !that.toPort) {
                    var fromBounds = fromNode.getBounds();
                    var toBounds = toNode.getBounds();
                    var centerPoint = {
                        left: (fromBounds.centerLeft + toBounds.centerLeft) / 2,
                        top: (fromBounds.centerTop + toBounds.centerTop) / 2,
                    };

                    var getNearestPort = function(node) {
                        var $ports = node.$ports.find('.flowchart-port-free');
                        var minDistance = Number.MAX_VALUE;
                        var minPortName;
                        if ($ports.length) {
                            $ports.each(function() {
                                var $port = $(this);
                                var $dot = $port.find('.flowchart-port-dot');
                                var portPosition = that.flowChart.getPositionOf($dot, true);
                                var distance = distanceOfTwoPoints(portPosition, centerPoint);
                                if (distance < minDistance) {
                                    minDistance = distance;
                                    minPortName = $port.data('name');
                                }
                            });
                        }

                        if (minPortName) {
                            return node.elementType.getPortByName(minPortName);
                        }
                    };

                    if (!that.fromPort) {
                        fromPort = getNearestPort(fromNode);
                    }
                    if (!that.toPort) {
                        toPort = getNearestPort(toNode);
                    }
                }
                if (fromPort && toPort) {
                    that._relationPortsInfo = {fromPort: fromPort, toPort: toPort};
                }
            }
        }
        return that._relationPortsInfo;
    };

    /**
     * Init relation nodes before render
     */
    FlowChartElement.prototype.initRelationBeforeRender = function() {
        var that = this;
        if (that.isRelation) {
            var fromNode = that.flowChart.getElement(that.from);
            var toNode = that.flowChart.getElement(that.to);
            that.visible = !!(fromNode && toNode);
            if (that.visible) {
                that.fromIndex = fromNode.fromRels.length;
                that.toIndex   = fromNode.toRels.length;
                that.fromNode  = fromNode;
                that.toNode    = toNode;

                fromNode.fromRels.push(that);
                toNode.toRels.push(that);
                fromNode.children.push(toNode);
                toNode.parents.push(fromNode);
            }
        }
    };

    /**
     * Get dom element ID
     * @param {boolean} [excludeCssPrefix]
     * @return {string}
     */
    FlowChartElement.prototype.getDomID = function(excludeCssPrefix) {
        return this.flowChart.getDomID(this, excludeCssPrefix);
    };

    /**
     * Get dom element of current
     * @param {string} [selector]
     * @return {JQuery}
     */
    FlowChartElement.prototype.$get = function(selector) {
        var $element = this.flowChart.$findElement(this.id);
        return selector ? $element.find(selector) : $element;
    };

    FlowChartElement.prototype.active = function() {
        if (this.isRelation) {
            this.renderRelation();
        } else {
            this.$ele.addClass('flowchart-active');
        }
    };

    FlowChartElement.prototype.unactive = function() {
        this.blurText();
        if (this.isRelation) {
            this.renderRelation();
        } else {
            this.$ele.removeClass('flowchart-active');
        }
    };

    FlowChartElement.prototype.focusText = function() {
        selectText(this.$text.attr('contenteditable', true));
        this.$ele.addClass('flowchart-element-focused');
        this.$text.focus();
    };

    FlowChartElement.prototype.blurText = function() {
        this.$text.attr('contenteditable', false);
        this.$ele.removeClass('flowchart-element-focused');
    };

    FlowChartElement.prototype.setText = function(text) {
        this.text = text;
    };

    FlowChartElement.prototype.isActive = function() {
        return this.flowChart.isElementActive(this.id);
    };

    /**
     * @return {boolean}
     */
    FlowChartElement.prototype.isVisible = function() {
        var that = this;
        var fromNode = that.fromNode;
        var toNode = that.toNode;
        return !!(fromNode && toNode && that.getPortsInfoOfRelation());
    };

    /**
     * Render relation
     */
    FlowChartElement.prototype.renderRelation = function() {
        var that    = this;
        var flowChart = that.flowChart;
        var options = flowChart.options;

        delete that._relationPortsInfo;

        var $relation = that.$get();
        if ($relation.length && $relation.data('type') !== that.type) {
            $relation.remove();
            if (that.relationLineID) {
                $('#' + that.relationLineID).remove();
            }
            $relation = null;
        }
        var visible = that.isVisible();
        if (visible && (!$relation || !$relation.length)) {
            var template = ifUndefinedOrNullThen(that.elementType.template, options.relationTemplate);
            if (typeof template === 'function') {
                template = template(that);
            } else {
                template = template.format($.extend({
                    domID: that.getDomID(true),
                }, that));
            }
            $relation = $(template).appendTo(flowChart.$canvas);
        }
        if ($relation && !visible) {
            $relation.remove();
            if (that.relationLineID) {
                $('#' + that.relationLineID).remove();
            }
            return;
        }
        that.$ele = $relation;

        // update node data properties to dom element
        $relation.data(that.data);

        // Update attributes on dom element
        $relation.addClass(that.className).toggleClass('flowchart-active', that.isActive());

        // Update text
        var textStyle = $.extend({}, options.relationTextStyle, that.elementType.textStyle, that.textStyle);
        var $text = $relation.find('.flowchart-text');
        $text.css(textStyle).text(that.getText());
        that.$text = $text;

        var fromNode          = that.getFromNodeOfRelation();
        var toNode            = that.getToNodeOfRelation();
        var isActive          = that.isActive();
        var lineStyle         = ifUndefinedThen(that.lineStyle, that.elementType.lineStyle, options.relationLineStyle);
        var lineShape         = ifUndefinedThen(that.lineShape, that.elementType.lineShape, options.relationLineShape);
        var lineColor         = isActive ? options.activeColor : ifUndefinedThen(that.lineColor, that.elementType.lineColor, options.relationLineColor);
        var lineSize          = ifUndefinedThen(that.lineWidth, that.elementType.lineWidth, options.relationLineWidth);
        var showArrow         = ifUndefinedThen(that.showArrow, that.elementType.showArrow);
        if (showArrow === undefined) {
            if (options.hideArrowToResult && toNode.type === 'result') {
                showArrow = false;
            } else {
                showArrow = true;
            }
        }
        var arrowSize     = ifUndefinedThen(that.arrowSize, that.elementType.arrowSize, options.relationArrowSize);
        var beginArrow    = (showArrow === 'begin' || showArrow === 'both') ? arrowSize : 0;
        var endArrow      = (showArrow === true || showArrow === 'end' || showArrow === 'both') ? arrowSize : 0;

        if (that.elementType.render) {
            var shapeStyle = $.extend({}, that.elementType.shapeStyle, that.shapeStyle);
            var style = $.extend({}, options.relationStyle, that.elementType.style, that.style);
            return that.elementType.render.call(that, $relation, {
                style: style,
                shapeStyle: shapeStyle,
                portsInfo: that.getPortsInfoOfRelation(),
                textStyle: textStyle,
                lineStyle: lineStyle,
                lineSize: lineSize,
                lineColor: lineColor,
                beginArrow: beginArrow,
                endArrow: endArrow
            });
        }

        var portsInfo        = that.getPortsInfoOfRelation();
        var $fromPort        = fromNode.$get('.flowchart-port[data-name="' + portsInfo.fromPort.name + '"]');
        var $toPort          = toNode.$get('.flowchart-port[data-name="' + portsInfo.toPort.name + '"]');
        var fromPortPos      = flowChart.getPositionOf($fromPort);
        var toPortPos        = flowChart.getPositionOf($toPort);
        var fromCenterOffset = $fromPort.data('centerOffset');
        var toCenterOffset   = $toPort.data('centerOffset');

        fromPortPos = addTwoPoints(fromPortPos, fromCenterOffset);
        toPortPos = addTwoPoints(toPortPos, toCenterOffset);
        fromPortPos.top = Math.floor(fromPortPos.top);
        fromPortPos.left = Math.floor(fromPortPos.left);
        toPortPos.top = Math.floor(toPortPos.top);
        toPortPos.left = Math.floor(toPortPos.left);

        var bounds = {
            left: Math.min(fromPortPos.left, toPortPos.left),
            top: Math.min(fromPortPos.top, toPortPos.top),
            width: Math.max(lineSize, Math.abs(fromPortPos.left - toPortPos.left)),
            height: Math.max(lineSize, Math.abs(fromPortPos.top - toPortPos.top)),
        };
        var fromPoint = {
            left: fromPortPos.left,
            top: fromPortPos.top,
            offsetLeft: fromPortPos.left - bounds.left,
            offsetTop: fromPortPos.top - bounds.top,
            arrow: beginArrow,
            side: portsInfo.fromPort.side
        };
        var toPoint = {
            left: toPortPos.left,
            top: toPortPos.top,
            offsetLeft: toPortPos.left - bounds.left,
            offsetTop: toPortPos.top - bounds.top,
            arrow: endArrow,
            side: portsInfo.toPort.side
        };

        var $lines = that.$get('.flowchart-relation-lines').empty();
        that.relationLineID = 'flowchart-' + flowChart.id + '-line-' + that.id;
        flowChart.drawRelationLine(that.relationLineID, fromPoint, toPoint, {
            style: lineStyle,
            width: lineSize,
            color: lineColor,
            shape: lineShape,
        }, $lines, $text);

        $relation.css(bounds);
        that.setBounds(bounds);
        return;

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
        that.direction = direction;
        that.isReverse = isReverse;
        that.fromSide  = fromSide;
        that.toSide    = toSide;

        var beginNode       = isReverse ? toNode : fromNode;
        var endNode         = isReverse ? fromNode : toNode;
        var beginBounds     = beginNode.getBounds();
        var endBounds       = endNode.getBounds();
        var beginSide       = isReverse ? toSide : fromSide;
        var endSide         = isReverse ? fromSide : toSide;
        var relationLineGap = options.relationLineGap;
        var beginSideRels   = relationLineGap && beginNode.sideRels[beginSide];
        var endSideRels     = relationLineGap && endNode.sideRels[endSide];

        if (relationLineGap) {
            var findRelById = function(rel) {
                return rel.id === that.id;
            };
            if (!beginSideRels.length || !beginSideRels.find(findRelById)) {
                beginSideRels.push(that);
                if (beginSideRels.length > 1) {
                    beginSideRels.forEach(function(rel) {
                        if (rel.id !== that.id) {
                            rel.renderRelation();
                        }
                    });
                }
            }
            if (!endSideRels.length || !endSideRels.find(findRelById)) {
                endSideRels.push(that);
                if (endSideRels.length > 1) {
                    endSideRels.forEach(function(rel) {
                        if (rel.id !== that.id) {
                            rel.renderRelation();
                        }
                    });
                }
            }

            var sortRels;
            if (direction.startsWith('bottom') || direction.startsWith('top')) {
                sortRels = function(rel1, rel2) {
                    var centerLeft1 = (rel1 && rel1.toNode && rel1.toNode.bounds) ? rel1.toNode.bounds.centerLeft : -1;
                    var centerLeft2 = (rel2 && rel2.toNode && rel2.toNode.bounds) ? rel2.toNode.bounds.centerLeft : -1;
                    return centerLeft1 - centerLeft2;
                };
            } else {
                sortRels = function(rel1, rel2) {
                    var centerTop1 = (rel1 && rel1.toNode && rel1.toNode.bounds) ? rel1.toNode.bounds.centerTop : -1;
                    var centerTop2 = (rel2 && rel2.toNode && rel2.toNode.bounds) ? rel2.toNode.bounds.centerTop : -1;
                    return centerTop1 - centerTop2;
                };
            }
            if (beginSideRels && beginSideRels.length) {
                beginSideRels.sort(sortRels);
            }
            if (endSideRels && endSideRels.length) {
                endSideRels.sort(sortRels);
            }
        }
        var beginSideRelIndex  = relationLineGap && beginSideRels.findIndex(findRelById);
        var endSideRelIndex    = relationLineGap && endSideRels.findIndex(findRelById);
        var beginSideRelsCount = relationLineGap ? beginSideRels.length : 0;
        var endSideRelsCount   = relationLineGap ? endSideRels.length : 0;

        that.beginSideRels = beginSideRels;
        that.endSideRels = endSideRels;
        that.beginSideRelIndex = beginSideRelIndex;
        that.endSideRelIndex = endSideRelIndex;
        that.beginSideRelsCount = beginSideRelsCount;
        that.endSideRelsCount = endSideRelsCount;


        var beginLineStyle    = {};
        var endLineStyle      = {};
        var centerLineStyle   = {
            alignItems: 'center',
            justifyContent: 'center',
        };
        var arrowStyle        = !showArrow ? {display: 'none'} : {
            display: 'block',
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
        var beginLineOffset = relationLineGap ? (1 - beginSideRelsCount + 2 * beginSideRelIndex) * relationLineGap : 0;
        var endLineOffset = relationLineGap ? (1 - endSideRelsCount + 2 * endSideRelIndex) * relationLineGap : 0;
        that.beginLineOffset = beginLineOffset;
        that.endLineOffset = endLineOffset;

        var bounds = {};
        if (direction === 'bottom-left' || direction === 'top-right') {
            // Relation link as ┘
            bounds.left   = beginBounds.right;
            bounds.top    = endBounds.bottom;
            bounds.width  = endBounds.right - bounds.left;
            bounds.height = beginBounds.bottom - bounds.top;

            beginLineStyle.left   = isReverse ? arrowSize : 0;
            beginLineStyle.top    = Math.floor(beginBounds.centerTop - bounds.top - lineSize / 2) + beginLineOffset;
            beginLineStyle.width  = Math.floor(bounds.width - lineSize - endBounds.width / 2) - beginLineStyle.left + endLineOffset;
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

            if (showArrow) {
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
            }
        } else if (direction === 'top-left' || direction === 'bottom-right') {
            // Relation link as └
            bounds.left   = beginBounds.left;
            bounds.top    = beginBounds.bottom;
            bounds.width  = endBounds.left - bounds.left;
            bounds.height = beginBounds.bottom - bounds.top;

            beginLineStyle.left   = Math.floor(beginBounds.width / 2 - lineSize) + beginLineOffset;
            beginLineStyle.top    = isReverse ? arrowSize : 0;
            beginLineStyle.width  = lineSize;
            beginLineStyle.height = Math.floor(endBounds.centerTop - bounds.top - lineSize / 2) - beginLineStyle.top + endLineOffset;

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

            if (showArrow) {
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
            }
        } else if (direction === 'left' || direction === 'right') {
            bounds.left   = beginBounds.right;
            bounds.top    = Math.min(beginBounds.top, endBounds.top);
            bounds.width  = endBounds.left - bounds.left;
            bounds.height = Math.max(beginBounds.bottom, endBounds.bottom) - bounds.top;

            beginLineStyle.left   = isReverse ? arrowSize : 0;
            beginLineStyle.top    = Math.floor(beginBounds.centerTop - bounds.top - lineSize / 2) + beginLineOffset;
            beginLineStyle.width  = bounds.width / 2 - beginLineStyle.left;
            beginLineStyle.height = lineSize;

            endLineStyle.left   = beginLineStyle.left + beginLineStyle.width;
            endLineStyle.top    = Math.floor(endBounds.centerTop - bounds.top - lineSize / 2) + endLineOffset;
            endLineStyle.width  = bounds.width / 2 - (isReverse ? 0 : arrowSize);
            endLineStyle.height = lineSize;

            centerLineStyle.left = Math.floor(bounds.width / 2 - lineSize / 2);
            centerLineStyle.top = Math.floor(Math.min(beginLineStyle.top, endLineStyle.top));
            centerLineStyle.height = Math.floor(Math.abs(beginLineStyle.top - endLineStyle.top) + lineSize);
            centerLineStyle.width = lineSize;

            if (options.showRelationTextOnSide) {
                if (centerLineStyle.height <= 10) {
                    centerLineStyle.alignItems = 'flex-end';
                } else {
                    centerLineStyle.justifyContent = 'flex-start';
                    centerLineStyle.textIndent = '4px';
                }
            }

            if (showArrow) {
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
            }
        } else if (direction === 'top' || direction === 'bottom') {
            bounds.left   = Math.min(beginBounds.left, endBounds.left);
            bounds.top    = beginBounds.bottom;
            bounds.width  = Math.max(beginBounds.right, endBounds.right) - bounds.left;
            bounds.height = endBounds.top - bounds.top;

            beginLineStyle.top    = isReverse ? arrowSize : 0;
            beginLineStyle.left   = Math.floor(beginBounds.centerLeft - bounds.left - lineSize / 2) + beginLineOffset;
            beginLineStyle.height = bounds.height / 2 - beginLineStyle.top;
            beginLineStyle.width  = lineSize;

            endLineStyle.top    = bounds.height / 2;
            endLineStyle.left   = Math.floor(endBounds.centerLeft - bounds.left - lineSize / 2) + endLineOffset;
            endLineStyle.height = bounds.height / 2 - (isReverse ? 0 : arrowSize);
            endLineStyle.width  = lineSize;

            centerLineStyle.top    = Math.floor(bounds.height / 2 - lineSize / 2);
            centerLineStyle.left   = Math.floor(Math.min(beginLineStyle.left, endLineStyle.left));
            centerLineStyle.width  = Math.floor(Math.abs(beginLineStyle.left - endLineStyle.left) + lineSize);
            centerLineStyle.height = lineSize;

            if (options.showRelationTextOnSide) {
                if (centerLineStyle.width <= 10) {
                    centerLineStyle.justifyContent = 'flex-start';
                    centerLineStyle.textIndent = '4px';
                } else {
                    centerLineStyle.alignItems = 'flex-end';
                }
            }

            if (showArrow) {
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
        }
        $relation.find('.flowchart-rel-arrow').css(arrowStyle);
        $relation.find('.flowchart-rel-begin-line').css($.extend(beginLineStyle, baseLineStyle));
        $relation.find('.flowchart-rel-end-line').css($.extend(endLineStyle, baseLineStyle));
        var $centerLine  = $relation.find('.flowchart-rel-center-line').css($.extend(centerLineStyle, baseLineStyle));
        var showTextOnSide = ifUndefinedThen(that.showtextOnSide, options.showRelationTextOnSide);
        if (showTextOnSide) {
            $text.appendTo($centerLine);
        }

        that.setBounds(bounds);
        $relation.css(bounds);
    };

    /**
     * Get text
     * @return {string}
     */
    FlowChartElement.prototype.getText = function() {
        var text = this.text;
        if (text === undefined) {
            text = this.elementType.text;
        }
        return (text === undefined || text === null) ? '' : String(text);
    };

    /**
     * Render ports
     */
    FlowChartElement.prototype.renderPorts = function() {
        var that = this;
        var elementType = that.elementType;
        var ports = elementType.ports;
        if (!ports) {
            return;
        }
        var options = that.flowChart.options;
        var $node = that.$ele;
        var $ports = $node.find('.flowchart-ports');
        if (!$ports.length) {
            $ports = $([
                '<div class="flowchart-ports" style="position:absolute;top:0;right:0;bottom:0;left:0">',
                    '<div class="flowchart-ports-side flowchart-ports-top" style="position:absolute;top:0;left:50%"></div>',
                    '<div class="flowchart-ports-side flowchart-ports-bottom" style="position:absolute;bottom:0;left:50%"></div>',
                    '<div class="flowchart-ports-side flowchart-ports-left" style="position:absolute;top:50%;left:0"></div>',
                    '<div class="flowchart-ports-side flowchart-ports-right" style="position:absolute;top:50%;right:0"></div>',
                '</div>'
            ].join('')).appendTo($node);
        }
        that.$ports = $ports;
        var sideSizes = {left: 0, right: 0, top: 0, bottom: 0};
        var portSize = options.portSpaceSize || 20;
        $.each(sideSizes, function(side) {
            var $side = $ports.find('.flowchart-ports-' + side).empty();
            var sidePorts = ports[side];
            if (!sidePorts || !sidePorts.length) {
                return;
            }
            sidePorts.forEach(function(port) {
                var spaceSize = Math.floor(port.space * portSize);
                var spaceBegin = Math.floor(port.spaceBegin * portSize);
                var spaceEnd = Math.floor(port.spaceEnd * portSize);
                var sideOffset = sideSizes[side];
                sideSizes[side] += spaceBegin + spaceSize + spaceEnd;
                if (port.empty) {
                    return;
                }

                var lineLength = ifUndefinedThen(port.lineLength, elementType.portLineLength, options.portLineLength);
                var lineWidth = Math.max(1, ifUndefinedThen(port.lineWidth, elementType.portLineWidth, options.portLineWidth));
                var lineStyle = ifUndefinedThen(port.lineStyle, elementType.portLineStyle, options.portLineStyle);
                var lineColor = ifUndefinedThen(port.lineColor, elementType.portLineColor, options.portLineColor);
                var portStyle = {};
                var portLineStyle = lineLength && {};
                var portDotStyle = {
                    width: lineWidth + 8,
                    height: lineWidth + 8,
                };
                var portCenterOffset = {};
                if (side === 'left' || side === 'right') {
                    portStyle.top = sideOffset + spaceBegin;
                    portStyle.width = lineLength + 2 * portDotStyle.width;
                    portStyle.left = side === 'left' ? (0 - portStyle.width) : 0;
                    portStyle.height = spaceSize;
                    if (lineLength) {
                        portLineStyle.top = Math.floor((spaceSize - lineWidth) / 2);
                        portLineStyle[side === 'left' ? 'right' : 'left'] = 0;
                        portLineStyle.width = lineLength;
                        portLineStyle.borderBottomStyle = lineStyle;
                        portLineStyle.borderBottomWidth = lineWidth;
                        portLineStyle.borderBottomColor = lineColor;
                    }
                    portDotStyle.top = Math.floor((spaceSize - portDotStyle.height) / 2);
                    portDotStyle[side] = portStyle.width - lineLength - portDotStyle.width;

                    portCenterOffset.top = spaceSize / 2;
                    portCenterOffset.left = side === 'left' ? (portStyle.width - portLineStyle.width) : portLineStyle.width;
                } else {
                    portStyle.left = sideOffset + spaceBegin;
                    portStyle.height = lineLength + 2 * portDotStyle.width;
                    portStyle.top = side === 'top' ? (0 - portStyle.height) : 0;
                    portStyle.width = spaceSize;
                    if (lineLength) {
                        portLineStyle.left = Math.floor((spaceSize - lineWidth) / 2);
                        portLineStyle[side === 'top' ? 'bottom' : 'top'] = 0;
                        portLineStyle.height = lineLength;
                        portLineStyle.borderRightStyle = lineStyle;
                        portLineStyle.borderRightWidth = lineWidth;
                        portLineStyle.borderRightColor = lineColor;
                    }
                    portDotStyle.left = Math.floor((spaceSize - portDotStyle.width) / 2);
                    portDotStyle[side] = portStyle.height - lineLength - portDotStyle.height;

                    portCenterOffset.top = side === 'top' ? (portStyle.height - portLineStyle.height) : portLineStyle.height;
                    portCenterOffset.left = spaceSize / 2;
                }
                var $port = $('<div class="flowchart-port" data-id="' + that.id + '-' + port.name + '" data-side="' + port.side + '" data-name="' + port.name + '" style="position:absolute;z-index:2"></div>').css(portStyle);
                if (lineLength) {
                    $('<div class="flowchart-port-line" style="position:absolute"></div>').css(portLineStyle).appendTo($port);
                }
                $port.addClass('flowchart-port-' + side).data('centerOffset', portCenterOffset).toggleClass('flowchart-port-free', port.free).append($('<div class="flowchart-port-dot" style="position:absolute"></div>').css(portDotStyle));
                $side.append($port);
            });
            $side.css(side === 'left' || side === 'right' ? 'margin-top' : 'margin-left', 0 - Math.floor(sideSizes[side] / 2));
        });
        $node.css({
            minWidth: Math.max(sideSizes.top, sideSizes.bottom),
            minHeight: Math.max(sideSizes.left, sideSizes.right),
        });
    };

    /**
     * Render node
     * @param {boolean} [skipLayout]
     */
    FlowChartElement.prototype.renderNode = function(skipLayout) {
        var that = this;
        var flowChart = that.flowChart;
        var options = flowChart.options;
        var elementType = that.elementType;

        // Get or create node dom element
        var $node = that.$get();
        if ($node.length && $node.data('type') !== that.type) {
            $node.remove();
            $node = null;
        }
        if (!$node || !$node.length) {
            var template = ifUndefinedOrNullThen(elementType.template, options.nodeTemplate);
            if (typeof template === 'function') {
                template = template(that);
            } else {
                template = template.format($.extend({
                    domID: that.getDomID(true),
                    cursor: (flowChart.draggableEnable && options.draggable && options.readonly !== true) ? 'move' : 'default'
                }, that));
            }

            $node = $(template).appendTo(flowChart.$canvas);
        }
        that.$ele = $node;

        // update node data properties to dom element
        $node.data(that.data);

        // Update attributes on dom element
        $node.addClass(that.className)
            .toggleClass('flowchart-has-ports', elementType.hasPorts())
            .toggleClass('flowchart-active', that.isActive());

        // Update text
        var textStyle = $.extend({}, options.nodeTextStyle, elementType.textStyle, that.textStyle);
        var $text = $node.find('.flowchart-text');
        var nodeText = that.getText();
        $text.css(textStyle).text(nodeText || ' ');
        that.$text = $text;

        // Update basic style
        $node.css({
            maxHeight: ifUndefinedThen(that.height, elementType.height, options.nodeHeight),
            maxWidth: ifUndefinedThen(that.maxWidth, elementType.maxWidth, options.nodeMaxWidth),
            minWidth: ifUndefinedThen(that.minWidth, elementType.minWidth, options.nodeMinWidth),
            width: ifUndefinedThen(that.width, elementType.width),
            height: ifUndefinedThen(that.height, elementType.height),
        });

        // Get merged style
        var style = $.extend({}, options.nodeStyle, elementType.style, that.style);
        var shapeStyle = $.extend({
            background: options.nodeBackground
        }, elementType.shapeStyle, that.shapeStyle, {
            borderStyle: that.borderStyle,
            borderWidth: that.borderWidth,
            borderColor: that.borderColor,
        });

        // Render content
        if (elementType.render) {
            elementType.render.call(that, $node, elementType, {style: style, shapeStyle: shapeStyle, textStyle: textStyle, text: nodeText});
        } else {
            if (elementType.hasPorts()) {
                that.renderPorts({style: style, shapeStyle: shapeStyle, textStyle: textStyle, text: nodeText});
            }
            if (elementType.shape === 'diamond') {
                $node.css(style);
                var size = {
                    width:  $node.outerWidth(),
                    height: $node.outerHeight(),
                };
                var $shape = $node.children('.flowchart-shape');
                if (!$shape.length) {
                    $shape = $('<svg class="flowchart-shape" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"><polygon /></svg>').appendTo($node);
                }
                var $polygon = $shape.children('polygon');
                $polygon.css(convertCssToSvgStyle(shapeStyle));
                var points = [[0, size.height / 2], [size.width / 2, 0], [size.width, size.height / 2], [size.width / 2, size.height]];
                var pointsStr = [];
                points.forEach(function(point) {
                    pointsStr.push($.isArray(point) ? point.join(',') : point);
                });
                $polygon.attr('points', pointsStr.join(' '));
                $shape.css(size).show();
            } else if (elementType.shape === 'dot') {
                $node.css($.extend(style, shapeStyle));
                var newTextStyle = {position: 'absolute'};
                if (that.textPosition === 'top') {
                    newTextStyle.bottom = '100%';
                } else {
                    newTextStyle.top = '100%';
                }
                $text.css(newTextStyle);
            } else if (elementType.shape === 'connection') {
                if (!nodeText) {
                    shapeStyle.padding = 0;
                    $text.css('position', 'absolute');
                } else {
                    $text.css('position', 'relative');
                }
                $node.css($.extend(style, shapeStyle));
            }  else {
                $node.css($.extend(style, shapeStyle));
            }
        }

        flowChart.callCallback('onRenderNode', [$node, that]);

        // Set size to bounds
        that.setBounds({
            width:  $node.outerWidth(),
            height: $node.outerHeight(),
        });

        // TODO: Check order
        if (!skipLayout) {
            that.layoutNode();
        }

        if (options.relationLineGap) {
            that.sideRels = {
                top:    [],
                right:  [],
                bottom: [],
                left:   [],
            };
        }
    };

    /**
     * Get real size
     * @return {{width: number, height: number}}
     */
    FlowChartElement.prototype.getSize = function() {
        return {
            height: this.bounds.height,
            width: this.bounds.width,
        };
    };

    /**
     * Get real position
     * @return {{top: number, left: number}}
     */
    FlowChartElement.prototype.getPosition = function() {
        return {
            left: this.bounds.left,
            top: this.bounds.top,
        };
    };

    /**
     * Check whether has set position
     * @return {boolean}
     */
    FlowChartElement.prototype.hasPosition = function() {
        return this.getBounds().hasPosition;
    };

    /**
     * Caculate node position and change layout of it
     * @param {boolean} [skipPosition]
     */
    FlowChartElement.prototype.layoutNode = function(skipPosition) {
        var that = this;
        var flowChart = that.flowChart;
        var options = flowChart.options;
        var position = that.position;
        var bounds = that.getBounds();

        if (!bounds.hasPosition || !position.custom) {
            var newPosition = {};
            if (typeof position.centerLeft === 'number' && typeof position.centerTop === 'number') {
                newPosition.left = position.centerLeft - Math.floor(bounds.width / 2);
                newPosition.top = position.centerTop - Math.floor(bounds.height / 2);
            } else {
                var parents = that.parents;
                var direction = position.direction;
                var directionFrom = position.from;
                if (typeof directionFrom === 'string') {
                    directionFrom = flowChart.getElement(directionFrom);
                }

                if (direction && SIDES[direction] && directionFrom) {
                    var fromBounds = directionFrom.getBounds();
                    if (direction === 'top') {
                        newPosition.left = Math.floor(fromBounds.centerLeft - (bounds.width / 2));
                        newPosition.top = fromBounds.top - options.vertSpace - bounds.height;
                    } else if (direction === 'left') {
                        newPosition.left = fromBounds.left - options.horzSpace - bounds.width;
                        newPosition.top = Math.floor(fromBounds.centerTop - (bounds.height / 2));
                    } else if (direction === 'bottom') {
                        newPosition.left = Math.floor(fromBounds.centerLeft - (bounds.width / 2));
                        newPosition.top = fromBounds.bottom + options.vertSpace;
                    } else if (direction === 'right') {
                        newPosition.left = fromBounds.right + options.horzSpace;
                        newPosition.top = Math.floor(fromBounds.centerTop - (bounds.height / 2));
                    }
                    delete position.direction;
                    delete position.from;
                    position.custom = 'auto';
                } else if (parents.length) {
                    var parentsBounds;
                    var siblingsIndex = 0;
                    parents.forEach(function(parentNode) {
                        if (!parentNode.hasPosition()) {
                            return;
                        }
                        var parentPosition = parentNode.getPosition();
                        var parentSize = parentNode.getSize();
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

                        if (that.siblingsIndex === undefined) {
                            var parentChildren = parentNode.children;
                            if (parentChildren.length) {
                                parentChildren.forEach(function(childNode) {
                                    if (childNode.siblingsIndex === undefined) {
                                        childNode.siblingsIndex = siblingsIndex++;
                                    }
                                });
                            }
                        }
                    });
                    newPosition.left = parentsBounds.right + options.horzSpace;
                    newPosition.top  = parentsBounds.top + that.siblingsIndex * (options.nodeHeight + options.vertSpace);
                } else {
                    var canvasBounds = flowChart.bounds;
                    newPosition.left = canvasBounds.left;
                    newPosition.top  = canvasBounds.top + canvasBounds.height + (canvasBounds.height <= options.padding ? 0: (options.vertSpace - options.padding));
                }
            }
            that.setBounds(newPosition);
            if (options.disableAutoPosition) {
                position.custom = true;
            }
        }

        if (!skipPosition) {
            var adsorptionGrid = options.adsorptionGrid;
            if (adsorptionGrid) {
                that.setBounds({
                    left: Math.round(bounds.left / adsorptionGrid) * adsorptionGrid,
                    top: Math.round(bounds.top / adsorptionGrid) * adsorptionGrid
                });
            }
            that.$ele.css(that.getPosition());
        }
    };

    FlowChartElement.prototype.render = function(skipLayout) {
        return this.isRelation ? this.renderRelation() : this.renderNode(skipLayout);
    };

    FlowChartElement.prototype.layout = function(skipPosition) {
        if (this.isNode) {
            this.layoutNode(skipPosition);
        }
    };

    var FlowChartElementType = function(elementTypes) {
        if ($.isArray(elementTypes)) {
            elementTypes.unshift(true, this);
        } else {
            elementTypes = [true, this, elementTypes];
        }
        $.extend.apply(null, elementTypes);

        /**
         * @type {boolean}
         */
        this.isRelation = this.type === 'relation';

        /**
         * @type {boolean}
         */
        this.isNode = !this.isRelation;

        /**
         * @type {Record<string, Function|boolean|string>}
         */
        this.props;

        /**
         * @type {Record<string, string>}
         */
        this.style;

        /**
         * @type {Record<string, string>}
         */
        this.textStyle;

        /**
         * @type {string}
         */
        this.shape;

        /**
         * @type {Record<string, string>}
         */
        this.shapeStyle;

        /**
         * @type {boolean}
         */
        this.hideArrowToSelf;

        /**
         * @type {number}
         */
        this.height;

        /**
         * @type {number}
         */
        this.maxWidth;

        /**
         * @type {number}
         */
        this.minWidth;

        /**
         * @type {Function}
         */
        this.render;

        /**
         * @type {Function|string}
         */
        this.template;

        /**
         * @type {string}
         */
        this.text;

        /**
         * @type {boolean|Function}
         */
        this.edit;

        /**
         * @type {boolean}
         */
        this.quickAdd;

        /**
         * @type {{left: FlowChartElementPort[], right: FlowChartElementPort[], top: FlowChartElementPort[], bottom: FlowChartElementPort[]}}
         */
        this.ports = FlowChartElementPort.createPortsMap(this.ports);
    };

    FlowChartElementType.prototype.getPortByName = function(name) {
        var that = this;
        var ports = that.ports;
        if (ports) {
            return ports.$all[name];
        }
        return null;
    };

    FlowChartElementType.prototype.hasPorts = function() {
        return !!this.ports;
    };

    FlowChartElementType.prototype.getElementData = function(initData) {
        var data = {};
        var that = this;
        $.each(that.props, function(propName, prop) {
            if (prop) {
                data[propName] = typeof prop === 'function' ? prop(initData[propName], that, initData) : initData[propName];
            }
        });
        data.type = that.name;
        data.basicType = that.type;
        data.isRelation = that.isRelation;
        data.isNode = that.isNode;
        data.elementType = that;
        return data;
    };

    FlowChartElementType.prototype.createElement = function(initData, flowChart) {
        var element = new FlowChartElement(initData, this);
        element.flowChart = flowChart;
        return element;
    };

    /**
     * The flowChart model class
     * @class
     */
    var FlowChart = function(element, initOptions) {
        var that = this;
        that.name = NAME;

        // Get container
        var $container = that.$container = $(element).addClass('scrollbar-hover')
            .css('overflow', 'auto');

        /**
         * @type {string}
         */
        that.id = $container.attr('id') || 'flowchart_' + $.zui.uuid();
        if (!$container.attr('id')) {
            $container.attr('id', that.id);
        }

        // Get options
        var options = $.extend(
            {},
            FlowChart.DEFAULTS,
            $container.data(),
            initOptions
        );
        if (options.plugins) {
            if (typeof options.plugins === 'string') {
                options.plugins = options.plugins.split(',');
            }
            var pluginsMap = {};
            var plugins = [];
            var addPlugin = function(pluginName) {
                var plugin = FlowChart.plugins[pluginName];
                if (!pluginsMap[pluginName] && plugin) {
                    if (plugin.plugins) {
                        plugin.plugins.forEach(addPlugin);
                    }
                    pluginsMap[pluginName] = 1;
                    plugins.push(pluginName);
                    if (plugin.defaultOptions) {
                        $.extend(true, options, typeof plugin.defaultOptions === 'function' ? plugin.defaultOptions.call(that, options) : plugin.defaultOptions);
                    }
                }
            };
            options.plugins.forEach(addPlugin);
            $.extend(true, options, $container.data(), initOptions);
            that.plugins = plugins;
        }
        that.options = options;

        var allLangs = $.extend({}, FlowChart.LANGS, options.langs);
        var userLang = options.lang || ($.zui && $.zui.clientLang ? $.zui.clientLang() : 'en');
        that.lang = allLangs[userLang.replace('_', '-')] || allLangs.en;

        // Init element types 初始化元素类型定义
        var types = {};
        $.each(basicElementTypes, function(name, typeData) {
            types[name] = new FlowChartElementType([{type: name, internal: name !== 'relation', name: name, displayName: that.lang['type.' + name]}, typeData]);
        });
        $.each($.extend(true, {}, supportElementTypes, options.elementTypes), function(name, typeData) {
            if (name === 'relation') return;
            if (types[name]) {
                var basicType = types[name];
                types[name] = new FlowChartElementType([basicType, {internal: false}, typeof typeData === 'object' ? typeData : null]);
            } else {
                var basicType = types[typeData.type];
                types[name] = new FlowChartElementType([basicType, {internal: false, name: name, displayName: that.lang['type.' + name]}, typeData]);
            }
        });

        /**
         * @type {Record<string, FlowChartElementType>}
         */
        this.types = types;

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

        // Init quick add
        // if (!options.readonly && options.quickAdd) {
        //     $canvas.on('mouseenter', '.flowchart-node:not(.flowchart-has-ports)', function() {
        //         that.showQuickAdd($(this).data('id'));
        //     }).on('mouseleave', '.flowchart-node', function() {
        //         if (!that.isPreventDragNode) {
        //             that.hideQuickAdd();
        //         }
        //     }).on('click', '.flowchart-quick-mark', function () {
        //         var $mark = $(this);
        //         that.quickAddNode($mark.closest('.flowchart-node').data('id'), $mark.data('direction'));
        //     });

        //     $canvas.droppable({
        //         container: '#' + canvasID,
        //         target: '.flowchart-node',
        //         selector: '.flowchart-quick-link-mark',
        //         mouseButton: 'left',
        //         before: function() {
        //             that.isPreventDragNode = true;
        //         },
        //         start: function(e) {
        //             var $node = $(e.element).closest('.flowchart-node');
        //             that.dragSourceNode = $node.data('id');
        //             that.focusElement(that.dragSourceNode);
        //             $(e.shadowElement).css('zIndex', 20);
        //             that.showQuickAdd(that.dragSourceNode, true);
        //         },
        //         drag: function(e) {
        //             var newDragNode = e.isIn && e.target && $(e.target).data('id');
        //             var lastDragNode = that.lastDragNode;
        //             if (lastDragNode && (!newDragNode || newDragNode !== lastDragNode)) {
        //                 that.blurElement(lastDragNode);
        //                 that.lastDragNode = null;
        //             }
        //             if (newDragNode && newDragNode !== lastDragNode) {
        //                 that.lastDragNode = newDragNode;
        //                 that.focusElement(newDragNode);
        //             }
        //             var $line = $canvas.find('.flowchart-link-line');
        //             var sourceNode = that.getElement(that.dragSourceNode);
        //             if (!$line.length) {
        //                 $line = $('<svg class="flowchart-link-line" style="position: absolute; z-index: 30; top: 0; left: 0; right: 0; bottom: 0"><line x1="50" y1="50" x2="350" y2="350" stroke="' + options.activeColor + '" stroke-width="2" /></svg>').appendTo($canvas);
        //             }
        //             var sourcePoint = {
        //                 left: sourceNode.bounds.right,
        //                 top: sourceNode.bounds.bottom,
        //             };
        //             var targetPoint = {
        //                 left: e.position.left + 8,
        //                 top: e.position.top + 8,
        //             };

        //             $line.show().attr({
        //                 width: $canvas.width(),
        //                 height: $canvas.height(),
        //             }).find('line').attr({
        //                 x1: sourcePoint.left,
        //                 y1: sourcePoint.top,
        //                 x2: targetPoint.left,
        //                 y2: targetPoint.top,
        //             });
        //         },
        //         drop: function(e) {
        //             var toNode = e.isIn && e.target && $(e.target).data('id');
        //             that.addRelation(that.dragSourceNode, toNode);
        //         },
        //         always: function(e) {
        //             that.isPreventDragNode = false;
        //             if (that.dragSourceNode) {
        //                 that.blurElement(that.dragSourceNode);
        //                 that.dragSourceNode = null;
        //             }

        //             if (that.lastDragNode) {
        //                 that.blurElement(that.lastDragNode);
        //                 that.lastDragNode = null;
        //             }
        //             $canvas.find('.flowchart-link-line').hide();
        //             that.hideQuickAdd();
        //         }
        //     });
        // }

        // Init draggable event
        that.draggableEnable = !!$.fn.draggable;
        if (that.draggableEnable) {
            if (options.draggable && options.readonly !== true) {
                $canvas.draggable({
                    container: '#' + canvasID,
                    selector: '.flowchart-node',
                    stopPropagation: true,
                    drag: function(e) {
                        that.setNodePosition($(e.element).data('id'), e.pos);
                    },
                    finish: function(e) {
                        $(e.element).addClass('flowchart-dragged');
                        that.setNodePosition($(e.element).data('id'), e.pos);
                    },
                    mouseButton: 'left',
                    before: function(e) {
                        var canDrag = !that.isPreventDragNode;
                        if (canDrag) {
                            if ($(e.event.target).closest('.flowchart-ports-side').length) {
                                return false;
                            }
                        }
                        return canDrag;
                    }
                });
            }

            if (!options.readonly) {
                var nodeID = null, $port, $node, $targetPort, $targetNode, sourcePoint, $line, $svgLine, hasDropped;
                $canvas.droppable({
                    container: '#' + canvasID,
                    target: '.flowchart-node,.flowchart-port',
                    selector: '.flowchart-port-dot',
                    mouseButton: 'left',
                    before: function() {
                        that.isPreventDragNode = true;
                    },
                    start: function(e) {
                        console.log('start', e);
                        $port = $(e.element).closest('.flowchart-port').addClass('flowchart-drag-active');
                        $node = $port.closest('.flowchart-node').addClass('flowchart-drag-active');
                        sourcePoint = addTwoPoints(that.getPositionOf($port), $port.data('centerOffset'));
                        nodeID = $node.data('id');

                        $line = $canvas.find('.flowchart-link-line');
                        if (!$line.length) {
                            $line = $('<svg class="flowchart-link-line" style="position: absolute; z-index: 30; top: 0; left: 0; right: 0; bottom: 0"><line x1="50" y1="50" x2="350" y2="350" stroke="' + options.activeColor + '" stroke-width="2"/></svg>').appendTo($canvas);
                        }
                        $svgLine = $line.show().attr({
                            width: $canvas.width(),
                            height: $canvas.height(),
                        }).find('line');
                        hasDropped = false;
                    },
                    drag: function(e) {
                        $targetPort && $targetPort.removeClass('flowchart-drop-active');
                        $targetNode && $targetNode.removeClass('flowchart-drop-active');
                        $targetNode = null;
                        $targetPort = null;
                        if (e.isIn && e.target) {
                            var $target = $(e.target);
                            var $thisPort = $target.closest('.flowchart-port');
                            var $thisNode = ($thisPort.length ? $thisPort : $target).closest('.flowchart-node');
                            if ($thisNode.data('id') !== nodeID) {
                                $targetNode = $thisNode.addClass('flowchart-drop-active');
                                $targetPort = $thisPort.addClass('flowchart-drop-active');
                            }
                        }

                        var targetPoint = {
                            left: e.position.left + 8,
                            top: e.position.top + 8,
                        };
                        $svgLine.attr({
                            x1: sourcePoint.left,
                            y1: sourcePoint.top,
                            x2: targetPoint.left,
                            y2: targetPoint.top,
                        });
                    },
                    drop: function(e) {
                        // var toNode = e.isIn && e.target && $(e.target).data('id');
                        // that.addRelation(that.dragSourceNode, toNode);
                        if (e.isIn && e.target) {
                            var $target = $(e.target);
                            var $thisPort = $target.closest('.flowchart-port');
                            var $thisNode = ($thisPort.length ? $thisPort : $target).closest('.flowchart-node');
                            if ($thisNode.length) {
                                var toNode = $thisNode.data('id');
                                var toPort = $thisPort.data('name');
                                that.addRelation(nodeID, $port.data('name'), toNode, toPort);
                                hasDropped = true;
                            }
                        }
                    },
                    always: function(e) {
                        that.isPreventDragNode = false;
                        $port && $port.removeClass('flowchart-drag-active');
                        $node && $node.removeClass('flowchart-drag-active');
                        $targetPort && $targetPort.removeClass('flowchart-drop-active');
                        $targetNode && $targetNode.removeClass('flowchart-drop-active');
                        $line && $line.hide();
                        if (!hasDropped && (e.cancel || distanceOfTwoPoints(e.position, sourcePoint) < 20)) {
                            var $target = $(e.event.target);
                            var $thisPort = $target.closest('.flowchart-port');
                            var $thisNode = ($thisPort.length ? $thisPort : $target).closest('.flowchart-node');
                            that.addNode(options.defaultNodeType || 'action', $thisNode.data('id'), $thisPort.data('name'), null, $thisPort.data('side'));
                        }
                        nodeID = null;
                        $node = null;
                        $port = null;
                    }
                });
            }
        }

        // Init drag and drop event
        if (!options.readonly && options.addFromDrop) {
            if (typeof options.addFromDrop === 'string') {
                var $dragElements = $(options.addFromDrop);
                var handDragStart = function(e) {
                    var type = $(e.target).data('type');
                    if (type) {
                        e.originalEvent.dataTransfer.setData('newElement', JSON.stringify({
                            type: type,
                        }));
                        $container.addClass('flowchart-drag-start');
                    }
                };
                var handleDragEnd = function(e) {
                    $container.removeClass('flowchart-drag-start').removeClass('flowchart-drag-over');
                };
                if ($dragElements.is('[draggable="true"]')) {
                    $dragElements.on('dragstart', handDragStart).on('dragend', handleDragEnd);
                } else {
                    $dragElements.on('dragstart', '[draggable="true"]', handDragStart).on('dragend', '[draggable="true"]', handleDragEnd);
                }
            }
            var handDragOver = function(e) {
                $container.toggleClass('flowchart-drag-over', !!$(e.target).closest('.flowchart-canvas').length);
                e.originalEvent.dataTransfer.effectAllowed = 'copy';
                e.preventDefault();
            };
            $canvas.on('dragenter', handDragOver).on('dragover', handDragOver).on('dragleave', function(e) {
                $container.toggleClass('flowchart-drag-over', !$(e.target).closest('.flowchart-canvas').length);
            }).on('drop', function(e) {
                var newElementData = $.parseJSON(e.originalEvent.dataTransfer.getData('newElement'));
                if (newElementData) {
                    var canvasOffset = $canvas.offset();
                    that.addElement($.extend({
                        position: {
                            centerLeft: e.clientX - canvasOffset.left,
                            centerTop: e.clientY - canvasOffset.top,
                        },
                        text: null,
                    }, newElementData));
                }
                e.preventDefault();
            });
        }

        // Init edit event
        if (!options.readonly) {
            if (options.doubleClickToEdit) {
                $canvas.on('dblclick', '.flowchart-element', function(e) {
                    var $ele = $(this);
                    that.focusElementText($ele.data('id'));
                    e.preventDefault();
                });
            }

            $canvas.on('input', '.flowchart-text[contenteditable=true]', function(e) {
                var $text = $(this);
                var $ele = $text.closest('.flowchart-element');
                that.setElementText($ele.data('id'), $text.text(), true);
            });
        }

        // Init contextmenu
        if (options.showContextMenu && $.zui.ContextMenu) {
            $canvas.on('mousedown', '.flowchart-element', function(e) {
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

        if (options.onClickElement || options.activeOnClick) {
            $canvas.on('click', function(e) {
                var $element = $(e.target).closest('.flowchart-element');
                console.log('click', $element);
                if ($element.length) {
                    if ($element.hasClass('flowchart-dragged')) {
                        $element.removeClass('flowchart-dragged');
                        return;
                    }
                    var element = that.getElement($element.data('id'));
                    options.onClickElement && options.onClickElement(element, $element);
                    options.activeOnClick && that.activeElement(element);
                } else {
                    that.unactiveElements();
                }
            });
        }

        that.updateStyle();

        /**
         * @type {Record<string, FlowChartElement>}
         */
        that.elements = {};

        /**
         * @type {Record<string, FlowChartElement>}
         */
        this.activedElements = {};

        // Init svg
        var $svg = $container.find('.flowchart-svg-canvas');
        if (!$svg.length) {
            $svg = $('<svg class="flowchart-svg-canvas" style="position: absolute; left: 0; top: 0"><defs></defs></svg>').prependTo($canvas);
        }
        that.$svg = $svg;
        that.$svgMarkers = $svg.find('defs');

        // Update and render init elements
        that.update(options.data, false, true);

        that.callCallback('afterCreate');
    };

    FlowChart.prototype.callCallback = function(callbackName, params) {
        var that = this;
        if (that.plugins) {
            that.plugins.forEach(function(pluginName) {
                var plugin = FlowChart.plugins[pluginName];
                if (plugin && plugin[callbackName]) {
                    plugin[callbackName].apply(that, params);
                }
            });
        }
        if (that.options[callbackName]) {
            that.options[callbackName].apply(that, params);
        }
    };

    /**
     * Get position of element
     * @param {FlowChartElement|HTMLElement|JQuery}
     */
    FlowChart.prototype.getPositionOf = function(element, returnCenter) {
        var canvasOffset = this.$canvas.offset();
        if (!element) {
            return canvasOffset;
        }
        var $element;
        if (element instanceof FlowChartElement) {
            $element = element.$get();
        } else {
            $element = $(element);
        }
        var offset = $element.offset();
        var position = {left: offset.left - canvasOffset.left, top: offset.top - canvasOffset.top};
        if (returnCenter) {
            position.left += $element.width() / 2;
            position.top += $element.height() / 2;
        }
        return position;
    };

    FlowChart.prototype.updateStyle = function() {
        var that = this;
        var id = that.id;

        var css = [
            '#{id} {background: #fff; transition: box-shadow .2s;}',
            '#{id}.flowchart-drag-start {box-shadow: 0 0 3px {activeColor}!important}',
            '#{id}.flowchart-drag-over {box-shadow: 0 0 0 2px {activeColor}!important}',
            '#{id} .flowchart-port-dot {opacity: 0; background: {activeColor}; border-radius: 50%; transition: .2s opacity, .2s transform; cursor: pointer;}',
            '#{id} .flowchart-element:hover .flowchart-port-dot {opacity: 0.7}',
            '#{id} .flowchart-element.flowchart-drop-active .flowchart-port-dot {opacity: 0.5; transform: scale(2); background: #333}',
            '#{id} .flowchart-element.flowchart-drop-active .flowchart-drop-active > .flowchart-port-dot {background: {activeColor}}',
            '#{id} .flowchart-element .flowchart-port-dot:hover, #{id} .flowchart-element .flowchart-drag-active > .flowchart-port-dot, #{id} .flowchart-element .flowchart-drop-active > .flowchart-port-dot {opacity: 1; transform: scale(2)}',
            '#{id} .flowchart-node.flowchart-active, #{id} .flowchart-node.flowchart-drag-active, #{id} .flowchart-node.flowchart-drop-active {border-color: {activeColor}!important; box-shadow: 0 0 0 2px {activeColor}!important}',
        ];

        if (that.plugins) {
            that.plugins.forEach(function(pluginName) {
                var plugin = FlowChart.plugins[pluginName];
                if (plugin && plugin.style) {
                    css.push(typeof plugin.style === 'function' ? plugin.style.call(that) : plugin.style);
                }
            });
        }

        css = css.join('\n').format({
            id: id,
            activeColor: that.options.activeColor,
        });

        var style = document.getElementById('flowchartstyle-' + id);
        if (!style) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            head.appendChild(style);
            style.type = 'text/css';
            style.id = 'flowchartstyle-' + id;
        }
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    };

    /**
     * Create relation element
     * @param {Record<string, any>} relationData
     * @return {FlowChartElement}
     */
    FlowChart.prototype.createRelation = function(relationData) {
        var elementType = this.types[relationData.type] || this.types[this.options.defaultRelationType];
        return elementType.createElement(relationData, this);
    };

    /**
     * Create elements
     * @param {Record<string, any>} elementData
     * @return {FlowChartElement[]}
     */
    FlowChart.prototype.createElements = function(elementData) {
        var that = this;
        var types = that.types;
        if (elementData instanceof FlowChartElement) {
            return [elementData];
        }
        var elementType = types[elementData.type] || types[that.options.defaultNodeType];
        var element = elementType.createElement(elementData, that);
        var elements = [element];
        if (element.isNode) {
            if (elementData.from) {
                var froms = $.isArray(elementData.from) ? elementData.from : [elementData.from];
                froms.forEach(function(from) {
                    var fromInfo = from.split(':');
                    elements.push(that.createRelation({
                        from: fromInfo[0],
                        to: froms.length > 2 ? (element.id + '.' + fromInfo[1]) : element.id,
                        text: fromInfo[froms.length > 2 ? 2 : 1],
                    }));
                });
            }
            if (elementData.to) {
                var tos = $.isArray(elementData.to) ? elementData.to : [elementData.to];
                $.each(tos, function(_, to) {
                    var toInfo = to.split(':');
                    elements.push(that.createRelation({
                        to: toInfo[0],
                        text: toInfo[froms.length > 2 ? 2 : 1],
                        from: froms.length > 2 ? (element.id + '.' + fromInfo[1]) : element.id,
                    }));
                });
            }
        }
        return elements;
    };

    /**
     * Active element
     * @param {FlowChartElement|string} element
     * @param {boolean} [multiple=false]
     */
    FlowChart.prototype.activeElement = function(element, multiple) {
        var that = this;
        if (typeof element === 'string') {
            element = that.getElement(element);
        }
        if (!multiple) {
            that.unactiveElements();
        }
        if (element) {
            element.active()
            that.activedElements[element.id] = element;
        }
    };

    /**
     * Unactive element
     * @param {FlowChartElement|string} [element]
     */
    FlowChart.prototype.unactiveElement = function(element) {
        var that = this;
        if (typeof element === 'string') {
            element = that.getElement(element);
        }
        if (element) {
            element.unactive();
            delete this.activedElements[element.id];
        }
    };

    /**
     * Unactive elements
     */
    FlowChart.prototype.unactiveElements = function() {
        var that = this;
        console.log('unactiveElements', that._focusedElement, that.activedElements);
        $.each(that.activedElements, function(_, element) {
            that.unactiveElement(element);
        });
        that.blurElementText();
    };

    FlowChart.prototype.blurElementText = function() {
        var that = this;
        if (that._focusedElement) {
            var focusedElement = that.getElement(that._focusedElement);
            if (focusedElement) {
                focusedElement.blurText();
            }
            that._focusedElement = null;
        }
    };

    FlowChart.prototype.focusElementText = function(element) {
        var that = this;
        if (typeof element === 'string') {
            element = that.getElement(element);
        }
        if (!element) {
            return;
        }

        that.blurElementText();
        that.activeElement(element);
        element.focusText();
        that._focusedElement = element.id;
    };

    /**
     * Check whether the given element is actived
     */
    FlowChart.prototype.isElementActive = function(elementID) {
        if (typeof elementID === 'object') {
            elementID = elementID.id;
        }
        return !!this.activedElements[elementID];
    };

    // Show quick add marks
    // FlowChart.prototype.showQuickAdd = function(node, onlyLinkMark) {
    //     var that = this;

    //     if (typeof node === 'string') {
    //         node = that.getElement(node);
    //     }
    //     if (!node || node.elementType.quickAdd === false) {
    //         return;
    //     }

    //     var $marks = node.$ele.find('.flowchart-quick-marks');
    //     if (!$marks.length) {
    //         var activeColor = that.options.activeColor;
    //         $marks = $([
    //             '<div class="flowchart-quick-marks" style="position:absolute;left:-16px;top:-16px;right:-16px;bottom:-16px;z-index:10">',
    //                 '<div class="flowchart-quick-mark" data-direction="top" style="position:absolute;pointer-events:auto;width:16px;height:16px;top:0;left:50%;margin-left:-8px;line-height:17px;text-align:center;cursor:pointer;border-radius:50%;background:#fff;background:rgba(255,255,255,.9);color:' + activeColor + '"><i class="icon icon-circle-arrow-up"></i></div>',
    //                 '<div class="flowchart-quick-mark" data-direction="right" style="position:absolute;pointer-events:auto;width:16px;height:16px;right:0;top:50%;margin-top:-8px;line-height:17px;text-align:center;cursor:pointer;border-radius:50%;background:#fff;background:rgba(255,255,255,.9);color:' + activeColor + '"><i class="icon icon-circle-arrow-right"></i></div>',
    //                 '<div class="flowchart-quick-mark" data-direction="bottom" style="position:absolute;pointer-events:auto;width:16px;height:16px;bottom:0;left:50%;margin-left:-8px;line-height:17px;text-align:center;cursor:pointer;border-radius:50%;background:#fff;background:rgba(255,255,255,.9);color:' + activeColor + '"><i class="icon icon-circle-arrow-down"></i></div>',
    //                 '<div class="flowchart-quick-mark" data-direction="left" style="position:absolute;pointer-events:auto;width:16px;height:16px;left:0;top:50%;margin-top:-8px;line-height:17px;text-align:center;cursor:pointer;border-radius:50%;background:#fff;background:rgba(255,255,255,.9);color:' + activeColor + '"><i class="icon icon-circle-arrow-left"></i></div>',
    //                 '<div class="flowchart-quick-link-mark" style="position:absolute;pointer-events:auto;width:16px;height:16px;right:1px;bottom:1px;line-height:17px;text-align:center;cursor:pointer;border-radius:50%;background:#fff;background:rgba(255,255,255,.9);color:' + activeColor + ';border-radius:50%;cursor:move"><i class="icon icon-dot-circle"></i></div>',
    //             '</div>'
    //         ].join('')).appendTo(node.$ele);
    //     }
    //     var $children = $marks.show().children().show();
    //     if (onlyLinkMark) {
    //         $children.not('.flowchart-quick-link-mark').hide();
    //     }
    //     var options = that.options;
    //     if (node.bounds.left < (options.padding + 80 + options.horzSpace)) {
    //         $marks.find('[data-direction="left"]').hide();
    //     }
    //     if (node.bounds.top < (options.padding + options.nodeHeight + options.vertSpace)) {
    //         $marks.find('[data-direction="top"]').hide();
    //     }

    //     that._currentQuickAddNode = node;
    // };

    // Hide quick add marks
    // FlowChart.prototype.hideQuickAdd = function() {
    //     var that = this;
    //     var node  = that._currentQuickAddNode;
    //     if (!node) {
    //         return;
    //     }
    //     node.$ele.find('.flowchart-quick-marks').hide();
    //     that._currentQuickAddNode = null;
    // };

    // Show contextmenu
    FlowChart.prototype.showContextMenu = function(ele, event) {
        var that = this;
        if (typeof ele === 'string') {
            ele = that.getElement(ele);
        }
        if (!ele) {
            return;
        }
        var items = [];
        if (!that.options.readonly) {
            if (ele.isNode) {
                var typeButtonsHTML = [];
                $.each(that.types, function(name, typeInfo) {
                    if (typeInfo.isNode && !typeInfo.internal) {
                        typeButtonsHTML.push('<div class="col-xs-4" style="padding: 2px"><a class="btn btn-mini' + (ele.type === name ? ' btn-success' : '') + '" data-type="'+ name + '" style="display: block;">' + (typeInfo.displayName || typeInfo.name) + '</a></div>');
                    }
                });
                items.push({
                    id: 'type',
                    html: [
                        '<div style="padding: 3px 20px; white-space: nowrap;">',
                            '<span class="btn btn-mini disabled" style="background: none; border: none;padding: 0">' + that.lang.type + '</span>',
                            '<div class="row">',
                            typeButtonsHTML.join(''),
                            '</div>',
                        '</div>'
                    ].join(''),
                    onClick: function(e) {
                        var $btn = $(e.target).closest('.btn');
                        var type = $btn.data('type');
                        if (type !== ele.type) {
                            ele.changeType(type);
                            that.render(ele);
                        }
                    }
                }, '-');
            }
            items.push({
                id: 'edit',
                label: that.lang.edit,
                onClick: function() {
                    that.focusElementText(ele);
                },
            }, {
                id: 'delete',
                label: that.lang.delete,
                onClick: function() {
                    if (!that.options.deleteConfirm || confirm(that.lang.confirmToDelete.format(ele.text || ele.id))) {
                        that.delete(ele.id);
                    }
                }
            });
        }
        if (typeof that.options.showContextMenu === 'function') {
            items = that.options.showContextMenu(ele, items, event);
        }
        if (items && items.length) {
            that.activeElement(ele);
            $.zui.ContextMenu.show(items, {event: event, className: 'flowchart-contextmenu'});
            return true;
        }
    };

    /**
     * Call function for each element
     * @param {Function} [callback]
     */
    FlowChart.prototype._forEachElement = function(callback) {
        $.each(this.elements, function(id, element) {
            callback(element, id);
        });
    };

    /**
     * Get partial render map
     * @param {{string[]|string}} [partialIDList]
     */
    FlowChart.prototype._getPartialRenderMap = function(partialIDList) {
        if (partialIDList && !$.isArray(partialIDList)) {
            partialIDList = [partialIDList];
        }
        var enabled = partialIDList && partialIDList.length;
        var map = null;
        var that = this;
        if (enabled) {
            map = {};
            partialIDList.forEach(function(elementID) {
                if (typeof elementID === 'object') {
                    elementID = elementID.id;
                }
                var element = that.getElement(elementID);
                if (element) {
                    map[elementID] = element;
                    if (element.isNode) {
                        var addRelToPartialMap = function(rel) {
                            map[rel.id] = rel;
                        };
                        var addRel = function(rel) {
                            addRelToPartialMap(rel);
                            if (that.options.relationLineGap) {
                                if (rel.beginSideRels) {
                                    rel.beginSideRels.forEach(addRelToPartialMap);
                                }
                                if (rel.endSideRels) {
                                    rel.endSideRels.forEach(addRelToPartialMap);
                                }
                            }
                        };
                        if (element.fromRels.length) {
                            element.fromRels.forEach(addRel);
                        }
                        if (element.toRels.length) {
                            element.toRels.forEach(addRel);
                        }
                    }
                }
            });
        }
        return {
            /**
             * @type {boolean}
             */
            enabled: enabled,
            /**
             * @param {string} elementID
             * @return {boolean}
             */
            canSkip: function(elementID) {
                return enabled && !map[elementID];
            }
        };
    };

    FlowChart.prototype.initArrowMarker = function(arrowSize, arrowColor, inverse) {
        var $svgMarkers = this.$svgMarkers;
        var arrowID = 'flowchart-arrow-marker-' + arrowSize + '_' + $.zui.strCode(arrowColor) + (inverse ? '_inverse' : '');
        var $arrowMarker = $svgMarkers.find('#' + arrowID);
        if (!$arrowMarker.length) {
            var pathCode, refX, refY;
            if (inverse) {
                pathCode = 'M0,' + (arrowSize / 2) + ' L0,' + arrowSize + ' L' + arrowSize + ',' + arrowSize + ' z';
                refX = 0;
                refY = arrowSize / 2;
                ref = ' refx="' + arrowSize + '" refY="' + (arrowSize / 2) + '"';
            } else {
                pathCode = 'M0,0 L0,' + arrowSize + ' L' + arrowSize + ',' + (arrowSize / 2) + ' z';
                refX = arrowSize;
                refY = arrowSize / 2;
            }
            var marker = createSVGElement('marker', {
                id: arrowID,
                orient: 'auto',
                markerUnits: 'strokeWidth',
                refX: refX,
                refY: refY,
                markerWidth: arrowSize,
                markerHeight: arrowSize,
            });
            marker.appendChild(createSVGElement('path', {
                d: pathCode,
                fill: arrowColor
            }));
            $svgMarkers.append(marker);
        }
        return arrowID;
    };

    /**
     * Render elements and relations
     * @param {string[]|string} [partialIDList]
     */
    FlowChart.prototype.render = function(partialIDList) {
        var that         = this;
        var options      = that.options;

        /**
         * @type {FlowChartElement[]}
         */
        var nodeList     = [];

        /**
         * @type {FlowChartElement[]}
         */
        var relationList = [];

        that._forEachElement(function(element) {
            element.initBeforeRender();
            (element.isRelation ? relationList : nodeList).push(element);
        });

        this.nodeList = FlowChartElement.sort(nodeList);
        this.relationList = FlowChartElement.sort(relationList);

        relationList.forEach(function(relation) {
            relation.initRelationBeforeRender();
        });

        var partialRenderMap = that._getPartialRenderMap(partialIDList);
        if (!partialRenderMap.enabled) {
            that.bounds = {left: options.padding, top: options.padding, width: 0, height: 0};
        }

        nodeList.forEach(function(node) {
            if (partialRenderMap.canSkip(node.id)) {
                return;
            }
            node.renderNode(true);
        });
        nodeList.forEach(function(node) {
            if (partialRenderMap.canSkip(node.id)) {
                return;
            }
            node.layoutNode(!partialRenderMap.enabled);
        });

        // Handle overlay
        if (!partialRenderMap.enabled) {
            var needCheckOverlay = true;
            while(needCheckOverlay) {
                needCheckOverlay = false;
                for (var i = nodeList.length - 1; i >= 0; --i) {
                    var nodeA = nodeList[i];
                    if (nodeA.position.custom !== true) {
                        continue;
                    }
                    for (var j = nodeList.length - 1; j >= 0; --j) {
                        if (i <= j) {
                            continue;
                        }
                        var nodeB = nodeList[j];
                        if (nodeA.isIntersectWith(nodeB)) {
                            needCheckOverlay = true;
                            nodeA.setBounds({
                                top: nodeA.getPosition().top + options.vertSpace + nodeA.getSize().height
                            })
                        }
                    }
                }
            };
            nodeList.forEach(function(node) {
                node.layoutNode();
            });
        }

        relationList.forEach(function(relation) {
            if (partialRenderMap.canSkip(relation.id)) {
                return;
            }
            relation.renderRelation();
        });

        var width = Math.max(that.$container.width(), that.bounds.width + options.padding);
        var height = Math.max(that.$container.height(), that.bounds.height + options.padding);
        that.$canvas.css({
            minWidth: width,
            minHeight: height,
        });
        that.$svg.attr({
            width: width,
            height: height,
        });
    };

    /**
     * Draw relation line between two points
     * @param {JQuery} $ele
     * @param {{left: number, top: number, side: 'top'|'right'|'bottom'|'left', arrow: boolean}} beginPoint
     * @param {{left: number, top: number, side: 'top'|'right'|'bottom'|'left', arrow: boolean}} endPoint
     * @param {{style: 'solid'|'dashed'|'dotted', width: number, color: string, shape: 'polyline'|'straight'|'curve'|'bessel', canvasWidth: number, cavasHeight: number}} style
     * @param {JQuery} [$text]
     */
    FlowChart.prototype.drawRelationLine = function(lineID, beginPoint, endPoint, style, $ele, $text) {
        var that = this;
        // console.log('drawRelationLine', {$ele, beginPoint, endPoint, style, $text});
        if (style.shape === 'polyline') {

        } else if (style.shape === 'straight') {
            // if (beginPoint.top === endPoint.top) {
            //     $('<div></div>').css({
            //         position: 'absolute',
            //         top: beginPoint.top - 1,
            //         left: Math.min(beginPoint.left, endPoint.left),
            //         width: Math.abs(beginPoint.left - endPoint.left),
            //         borderTopStyle: style.style,
            //         borderTopColor: style.color,
            //         borderTopWidth: style.width,
            //     }).appendTo($ele);
            // } else if (beginPoint.left === endPoint.left) {
            //     $('<div></div>').css({
            //         position: 'absolute',
            //         left: beginPoint.left - 1,
            //         top: Math.min(beginPoint.top, endPoint.top),
            //         height: Math.abs(beginPoint.top - endPoint.top),
            //         borderLeftStyle: style.style,
            //         borderLeftColor: style.color,
            //         borderLeftWidth: style.width,
            //     }).appendTo($ele);
            // } else {
            var lineWidth = style.width;
            var strokeDasharray;
            if (style.style === 'dashed') {
                strokeDasharray = (lineWidth * 3) + ' ' + (lineWidth * 2);
            } else if (style.style === 'dotted') {
                strokeDasharray = lineWidth + ' ' + lineWidth;
            } else {
                strokeDasharray = '';
            }
            var lineAttrs = {
                id: lineID,
                x1: beginPoint.left,
                y1: beginPoint.top,
                x2: endPoint.left,
                y2: endPoint.top,
                'stroke-width': lineWidth,
                stroke: style.color,
                'stroke-dasharray': null,
                'marker-start': null,
                'marker-end': null,
            };
            if (strokeDasharray) {
                lineAttrs['stroke-dasharray'] = strokeDasharray;
            }
            if (beginPoint.arrow) {
                lineAttrs['marker-start'] = 'url(#' + that.initArrowMarker(beginPoint.arrow, style.color, true) + ')';
            }
            if (endPoint.arrow) {
                lineAttrs['marker-end'] = 'url(#' + that.initArrowMarker(endPoint.arrow, style.color, false) + ')';
            }
            var $line = that.$svg.find('#' + lineID);
            if ($line.length) {
                updateSVGElement($line[0], lineAttrs);
            } else {
                var line = createSVGElement('line', lineAttrs);
                that.$svg.append(line);
            }

            if ($text) {
                var centerLeft = (beginPoint.offsetLeft + endPoint.offsetLeft) / 2;
                var centerTop = (beginPoint.offsetTop + endPoint.offsetTop) / 2;
                $text.css({
                    left: Math.floor(centerLeft - $text.outerWidth() / 2),
                    top: Math.floor(centerTop - $text.outerHeight() / 2),
                });
            }
        } else if (style.shape === 'bessel') {
            var besselCurvature = that.options.besselCurvature;
        }
    };

    /**
     * Set node position
     * @param {string} nodeID
     * @param {{left: number, top: number, custom?: boolean}} position
     */
    FlowChart.prototype.setNodePosition = function(nodeID, position) {
        var that = this;
        var node = that.getElement(nodeID);
        if (!node) {
            return;
        }
        node.setBounds(position);
        that.render(node);
    };

    FlowChart.prototype.addElement = function(elementData) {
        var newElements = this.update(elementData);
        if (newElements && newElements.length) {
            this.focusElementText(newElements[0].id);
        }
        return newElements;
    };

    FlowChart.prototype.addNode = function(type, fromNode, fromPort, text, direction) {
        if (typeof fromNode === 'string') {
            fromNode = this.getElement(fromNode);
        }
        if (!fromNode) {
            return;
        }
        var from = fromNode.id;
        if (typeof fromPort === 'string' && fromPort.length) {
            from += '.' + fromPort;
        }
        var position;
        if (direction) {
            position = {
                direction: direction,
                from: fromNode.id
            };
        }
        return this.addElement({
            type: type,
            from: from,
            text: text === undefined ? null : text,
            position: position,
        });
    };

    // Add relation between two nodes
    FlowChart.prototype.addRelation = function(fromNode, fromPort, toNode, toPort, text) {
        var that = this;

        if (typeof fromNode === 'string') {
            fromNode = that.getElement(fromNode);
        }
        if (typeof toNode === 'string') {
            toNode = that.getElement(toNode);
        }
        if (!fromNode || !toNode) {
            return;
        }

        return that.addElement({
            type: 'relation',
            text: text === undefined ? null : text,
            from: fromNode.id,
            fromPort: fromPort,
            to: toNode.id,
            toPort: toPort,
        });
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

    // Get element by id
    FlowChart.prototype.getElement = function(elementID) {
        if (!elementID) {
            return null;
        }
        if (typeof elementID !== 'string') {
            elementID = elementID.id;
        }
        return this.elements[elementID];
    };

    FlowChart.prototype.setElementText = function(element, text, skipRender) {
        var that = this;
        if (typeof element === 'string') {
            element = that.getElement(element);
        }
        if (!element) {
            return;
        }

        element.setText(text);
        if (!skipRender) {
            this.render(node);
        }
    };

    // Reset data
    FlowChart.prototype.resetData = function(data) {
        if (!data) {
            data = [{
                type: 'start',
            }];
        }
        var that = this;
        var oldElements = [];
        $.each(that.elements, function(_, ele) {
            oldElements.push(ele);
        });
        that.delete(oldElements, true);
        that.update(data, false, true);
    };

    // Update elements data
    FlowChart.prototype.update = function(elementsData, skipRender, silence) {
        if (typeof elementsData === 'object' && !$.isArray(elementsData)) {
            elementsData = [elementsData];
        }
        var that = this;
        var elementsToUpdate = [];
        if (elementsData && elementsData.length) {
            var elements = that.elements;
            $.each(elementsData, function(_, element) {
                var newElements = that.createElements(element);
                newElements.forEach(function(newElement) {
                    var oldElement = elements[newElement.id];
                    if (oldElement) {
                        newElement.order = oldElement.order;
                        if (!newElement.hasPosition()) {
                            newElement.setPosition(oldElement.getPosition());
                        }
                    } else {
                        newElement.isNew = true;
                    }
                    elementsToUpdate.push(newElement);
                });
            });

            var onUpdateElement = that.options.onUpdateElement;
            if (onUpdateElement && !silence) {
                var result = onUpdateElement(elementsToUpdate);
                if (result === false) {
                    return;
                }
                if ($.isArray(result)) {
                    elementsToUpdate = result;
                }
            }
            elementsToUpdate.forEach(function(newElement) {
                delete newElement.isNew;
                elements[newElement.id] = newElement;
            });
        }

        if (!skipRender) {
            that.render();
        }

        return elementsToUpdate;
    };

    // Replace element with a new one
    FlowChart.prototype.replace = function(oldElementID, newElement, skipRender) {
        if (typeof oldElementID !== 'string') {
            oldElementID = oldElementID.id;
        }
        var that = this;

        var newElements = that.createElements(newElement);
        newElement = newElements[0];
        var oldElement = that.getElement(oldElementID);
        if (oldElement) {
            that.delete(oldElementID, true);
        }
        $.each(that.elements, function(_, element) {
            if (element.isRelation) {
                if (element.from === oldElementID) {
                    element.from = newElement.id;
                } else if (element.to === oldElementID) {
                    element.to = newElement.id;
                }
            }
        });
        if (!skipRender) {
            that.render();
        }
    };

    /**
     * Get dom id of given element
     * @param {FlowChartElement|string} element
     * @param {boolean} [excludeCssPrefix]
     * @return {string}
     */
    FlowChart.prototype.getDomID = function(element, excludeCssPrefix) {
        if (typeof element === 'string') {
            return (excludeCssPrefix ? '' : '#') + this.id + '-' + element;
        }
        return (excludeCssPrefix ? '' : '#') + this.id + '-' + element.id;
    };

    /**
     * Find element and return jquery object
     * @param {string} elementID
     * @return {JQuery}
     */
    FlowChart.prototype.$findElement = function(elementID) {
        return this.$canvas.find(this.getDomID(elementID));
    };

    // Delete elements and relations
    FlowChart.prototype.delete = function(idList, skipRender) {
        var that = this;
        if (!$.isArray(idList)) {
            idList = [idList];
        }

        $.each(idList, function(idx, id) {
            if (typeof id === 'object') {
                id = id.id;
            }
            var $element = that.$findElement(id);
            if ($element) {
                $element.remove();
            }
            var element = that.getElement(id);
            if (element) {
                if (element.isNode) {
                    // Delete relations
                    element.fromRels && element.fromRels.forEach(function(relation) {
                        that.delete(relation.id, true);
                    });
                    element.toRels && element.toRels.forEach(function(relation) {
                        that.delete(relation.id, true);
                    });
                } else {
                    if (element.relationLineID) {
                        $('#' + element.relationLineID).remove();
                    }
                }
                delete that.elements[id];
                if (that._focusedElement === id) {
                    that._focusedElement = null;
                }
                if (that.activedElements[id]) {
                    delete that.activedElements[id];
                }
            }
        });

        if (!skipRender) {
            that.render();
        }
    };

    // Export chart data as elements list
    FlowChart.prototype.exportData = function() {
        var that = this;
        var exportDataToSelf = that.options.exportDataToSelf;
        var dataList = [];
        $.each(that.elements, function(_, element) {
            var itemData = element.exportData();
            if (exportDataToSelf && itemData.data) {
                $.extend(itemData, itemData.data);
                delete itemData.data;
            }
            dataList.push(itemData);
        });
        dataList.sort(function(e1, e2) {
            return e1.order - e2.order;
        });
        $.each(dataList, function(_, dataItem) {
            delete dataItem.order;
        });
        return dataList;
    };

    // Change options
    FlowChart.prototype.setOptions = function(newOptions, skipRender) {
        $.extend(this.options, newOptions);
        if (!skipRender) {
            this.render();
        }
    };

    FlowChart.plugins = {};

    /**
     * Add plugin to flowchart
     * @param {string} pluginName
     * @param {{defaultOptions: Record<string, any>, plugins: string|string[]}}
     */
    FlowChart.addPlugin = function(pluginName, pluginConfig) {
        if (FlowChart.plugins[pluginName]) {
            throw new Error('Add flowchart plugin failed, because there is already a plugin named "' + pluginName + '".');
        }
        pluginConfig = $.extend(true, {}, pluginConfig);
        if (pluginConfig.plugins && typeof pluginConfig.plugins === 'string') {
            pluginConfig.plugins = pluginConfig.plugins.splite(',');
        }
        FlowChart.plugins[pluginName] = pluginConfig;
    };

    FlowChart.LANGS = {
        'zh-cn': {
            confirmToDelete: "确定删除【{0}】？",
            edit: '编辑',
            'delete': '删除',
            'type': '类型',
            'type.rectangle': '矩形',
            'type.box': '方框',
            'type.circle': '圆形',
            'type.diamond': '菱形',
            'type.dot': '点',
            'type.link': '连接线',
            'type.action': '动作',
            'type.start': '开始',
            'type.stop': '结束',
            'type.result': '结果',
            'type.relation': '关系',
            'type.judge': '判断',
            'type.connection': '连接',
            'type.point': '节点',
        },
        'zh-tw': {
            confirmToDelete: "確定刪除【{0}】？",
            edit: '編輯',
            'delete': '刪除',
            'type': '類型',
            'type.rectangle': '矩形',
            'type.box': '方框',
            'type.circle': '圓形',
            'type.diamond': '菱形',
            'type.dot': '點',
            'type.link': '連接線',
            'type.action': '動作',
            'type.start': '開始',
            'type.stop': '結束',
            'type.result': '結果',
            'type.relation': '關係',
            'type.judge': '判斷',
            'type.connection': '連接',
            'type.point': '節點',
        },
        en: {
            confirmToDelete: "Confirm to delete \"{0}\"?",
            edit: 'Edit',
            'delete': 'Delete',
            'type': 'Type',
            'type.rectangle': 'Rectangle',
            'type.box': 'Box',
            'type.circle': 'Circle',
            'type.diamond': 'Diamond',
            'type.dot': 'Dot',
            'type.link': 'Link',
            'type.action': 'Action',
            'type.start': 'Start',
            'type.stop': 'Stop',
            'type.result': 'Result',
            'type.relation': 'Relation',
            'type.judge': 'Judge',
            'type.connection': 'Connection',
            'type.point': 'Point',
        },
    },

    // default options
    FlowChart.DEFAULTS = {
        // 当前语言，如果指定为 `null`，则自动设置语言
        lang: null,

        // 添加新的语言选项
        langs: null,

        // 激活状态颜色
        activeColor: '#3280fc',

        // 是否移动时自动吸附网格
        // 如果设置为 true，则设置网格为 5，如果为数值则为指定的网格大小
        adsorptionGrid: 5,

        // 是否启用双击编辑功能
        doubleClickToEdit: true,

        // 是否启用只读模式, false, true, can-drag
        readonly: false,

        // 是否显示节点上下文菜单（右键菜单）
        // 此选项可以设置为一个函数动态返回自定义菜单项
        showContextMenu: true,

        // 是否禁用自动位置排列
        disableAutoPosition: true,

        // 通过拖放添加节点
        addFromDrop: true,

        // 是否启用快速添加功能，显示浮动的按钮快捷的向四个方向添加新的节点
        quickAdd: true,

        // 默认的节点类型
        defaultNodeType: 'action',

        // 默认的关系类型
        defaultRelationType: 'relation',

        // 删除节点前是否确认
        deleteConfirm: true,

        // 是否启用拖放移动功能
        draggable: true,

        // 是否将节点自定义数据导出为节点自身属性
        exportDataToSelf: true,

        // 画布宽度，如果设置为 `auto` 则宽度与外部容器元素宽度一致
        width: 'auto',

        // 画布高度
        height: 500,

        // 画布内边距
        padding: 20,

        // 节点背景色
        nodeBackground: '#fff',

        // 动作节点高度
        nodeHeight: 40,

        // 最小宽度
        nodeMinWidth: 70,

        // 最大宽度
        nodeMaxWidth: 200,

        // 节点间的默认水平距离
        horzSpace: 80,

        // 节点间的默认垂直距离
        vertSpace: 60,

        // 连接线箭头大小
        relationArrowSize: 8,

        // 连接线宽度
        relationLineWidth: 1,

        // 连接线样式
        relationLineStyle: 'solid',

        // 连接线颜色
        relationLineColor: '#333',

        // 连接线形状
        relationLineShape: 'straight',

        besselCurvature: 0.5,

        portLineLength: 0,

        // 端口所占空间大小
        portSpaceSize: 20,

        // 端口线宽度，如果设置为 0 则不显示
        portLineWidth: 1,

        // 端口线样式
        portLineStyle: 'solid',

        // 端口线颜色
        portLineColor: '#333',

        // 连接线间距，如果设置为 0 则会合并同一方向上的连接线，否则会使用给定的值作为间距
        // relationLineGap: 2,

        // 关系连接线文本样式
        relationTextStyle: {
        },

        // 隐藏指向结果节点的关系箭头
        hideArrowToResult: true,

        // 节点基本样式
        nodeStyle: {
        },

        // 节点上的文本样式
        nodeTextStyle: {
        },

        // 是否将关系上的文本显示在连接线旁边而不是覆盖在连接线上
        // showRelationTextOnSide: false,

        activeOnClick: true,

        // 当点击元素时的回调函数 function(element, $element)
        onClickElement: null,

        nodeTemplate: '<div id="{domID}" data-basic-type="{basicType}" data-type="{type}" style="position: absolute; z-index: 1; display: flex; justify-content: center; align-items: center; cursor: {cursor}" class="flowchart-element flowchart-element-{type} flowchart-node" data-id="{id}"><div class="flowchart-text flowchart-node-text" style="position: relative; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; z-index: 5; outline: none; min-width: 10px; min-height: 20px; text-align: center"></div></div>',

        relationTemplate: '<div id="{domID}" data-basic-type="{basicType}" data-type="{type}" class="flowchart-element flowchart-element-{type} flowchart-relation" data-id="{id}" data-type="relation" style="position: absolute; z-index: 0;"><div class="flowchart-relation-lines" style="position:absolute;top:0;right:0;bottom:0;left:0;"></div><div class="flowchart-text flowchart-relation-text" style="background: rgba(255,255,255,.95); position: absolute; z-index: 5; line-height: 1; outline: none; pointer-events: auto; white-space:nowrap; text-align: center"></div></div>',

        // 自定义元素类型
        elementTypes: {},

        // 初始数据
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
    FlowChart.supportElementTypes = supportElementTypes;
    FlowChart.convertCssToSvgStyle = convertCssToSvgStyle;
    FlowChart.createSVGElement = createSVGElement;
    FlowChart.addTwoPoints = addTwoPoints;


    $.fn.flowChart.Constructor = FlowChart;

    $.zui({
        FlowChart: FlowChart,
        FlowChartElement: FlowChartElement
    });
}(jQuery));
