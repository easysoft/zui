/*!
 * ZUI: Document - v1.7.0 - 2017-06-17
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2017 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: array.js
 * Array Polyfill.
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */

// Some polyfills copy from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

(function() {
    'use strict';

    var STR_FUNCTION = 'function';

    /**
     *  Calls a function for each element in the array.
     */
    if(!Array.prototype.forEach) {
        Array.prototype.forEach = function(fun /*, thisp*/ ) {
            var len = this.length;
            if(typeof fun != STR_FUNCTION)
                throw new TypeError();

            var thisp = arguments[1];
            for(var i = 0; i < len; i++) {
                if(i in this) {
                    fun.call(thisp, this[i], i, this);
                }
            }
        };
    }

    /**
     * Judge an object is an real array
     */
    if(!Array.isArray) {
        Array.isArray = function(obj) {
            return Object.toString.call(obj) === '[object Array]';
        };
    }

    /**
     * Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
     */
    if(!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function(elt /*, from*/ ) {
            var len = this.length;

            var from = Number(arguments[1]);
            if(isNaN(from)) {
                from = len - 1;
            } else {
                from = (from < 0) ? Math.ceil(from) : Math.floor(from);
                if(from < 0)
                    from += len;
                else if(from >= len)
                    from = len - 1;
            }

            for(; from > -1; from--) {
                if(from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    /**
     * Returns true if every element in this array satisfies the provided testing function.
     */
    if(!Array.prototype.every) {
        Array.prototype.every = function(fun /*, thisp*/ ) {
            var len = this.length;
            if(typeof fun != STR_FUNCTION)
                throw new TypeError();

            var thisp = arguments[1];
            for(var i = 0; i < len; i++) {
                if(i in this &&
                    !fun.call(thisp, this[i], i, this))
                    return false;
            }

            return true;
        };
    }

    /**
     * Creates a new array with all of the elements of this array for which the provided filtering function returns true.
     */
    if(!Array.prototype.filter) {
        Array.prototype.filter = function(fun /*, thisp*/ ) {
            var len = this.length;
            if(typeof fun != STR_FUNCTION)
                throw new TypeError();

            var res = [];
            var thisp = arguments[1];
            for(var i = 0; i < len; i++) {
                if(i in this) {
                    var val = this[i]; // in case fun mutates this
                    if(fun.call(thisp, val, i, this))
                        res.push(val);
                }
            }

            return res;
        };
    }

    /**
     * Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
     */
    if(!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/ ) {
            var len = this.length;

            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if(from < 0)
                from += len;

            for(; from < len; from++) {
                if(from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     */
    if(!Array.prototype.map) {
        Array.prototype.map = function(fun /*, thisp*/ ) {
            var len = this.length;
            if(typeof fun != STR_FUNCTION)
                throw new TypeError();

            var res = new Array(len);
            var thisp = arguments[1];
            for(var i = 0; i < len; i++) {
                if(i in this)
                    res[i] = fun.call(thisp, this[i], i, this);
            }

            return res;
        };
    }

    /**
     * Creates a new array with the results match the condistions
     * @param  {plain object or function} conditions
     * @param  {array} result
     * @return {array}
     */
    if(!Array.prototype.mawherep) {
        Array.prototype.where = function(conditions, result) {
            result = result || [];
            var cdt, ok, objVal;
            this.forEach(function(val) {
                ok = true;
                for(var key in conditions) {
                    cdt = conditions[key];
                    if(typeof cdt === STR_FUNCTION) {
                        ok = cdt(val);
                    } else {
                        objVal = val[key];
                        ok = (objVal && objVal === cdt);
                    }
                    if(!ok) break;
                }
                if(ok) result.push(val);
            });

            return result;
        };
    }

    /**
     * Return a object contains grouped result as object key
     * @param  {string} key
     * @return {Object}
     */
    if(!Array.prototype.groupBy) {
        Array.prototype.groupBy = function(key) {
            var result = {};
            this.forEach(function(val) {
                var keyName = val[key];
                if(!keyName) {
                    keyName = 'unkown';
                }

                if(!result[keyName]) {
                    result[keyName] = [];
                }
                result[keyName].push(val);
            });
            return result;
        };
    }

    /**
     * Returns true if at least one element in this array satisfies the provided testing conditions.
     * @param  {function or plain object}  conditions
     * @return {Boolean}
     */
    if(!Array.prototype.has) {
        Array.prototype.has = function(conditions) {
            var result = false,
                cdt, ok, objVal;
            this.forEach(function(val) {
                ok = true;
                for(var key in conditions) {
                    cdt = conditions[key];
                    if(typeof cdt === STR_FUNCTION) {
                        ok = cdt(val);
                    } else {
                        objVal = val[key];
                        ok = (objVal && objVal === cdt);
                    }
                    if(!ok) break;
                }
                if(ok) {
                    result = true;
                    return false;
                }
            });

            return result;
        };
    }
}());

/* ========================================================================
 * jQuery Hotkeys Plugin
 * Based upon the plugin by Tzury Bar Yochay:
 * https://github.com/tzuryby/jquery.hotkeys
 *  
 * ZUI: The file has been changed in ZUI. It will not keep update with the
 * official version in the future.
 * http://zui.sexy
 * ========================================================================
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * ======================================================================== */


/*!
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(jQuery) {

    jQuery.hotkeys = {
        version: "0.8",

        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta"
        },

        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": "\"",
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    };

    function keyHandler(handleObj) {
        // Only care when a possible input has been specified
        if(typeof handleObj.data !== "string") {
            return;
        }

        var origHandler = handleObj.handler,
            keys = handleObj.data.toLowerCase().split(" ");

        handleObj.handler = function(event) {
            // Don't fire in text-accepting inputs that we didn't directly bind to
            if(this !== event.target && (/textarea|select/i.test(event.target.nodeName) ||
                    event.target.type === "text")) {
                return;
            }

            // Keypress represents characters, not special keys
            var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
                character = String.fromCharCode(event.which).toLowerCase(),
                key, modif = "",
                possible = {};

            // check combinations (alt|ctrl|shift+anything)
            if(event.altKey && special !== "alt") {
                modif += "alt+";
            }

            if(event.ctrlKey && special !== "ctrl") {
                modif += "ctrl+";
            }

            // TODO: Need to make sure this works consistently across platforms
            if(event.metaKey && !event.ctrlKey && special !== "meta") {
                modif += "meta+";
            }

            if(event.shiftKey && special !== "shift") {
                modif += "shift+";
            }

            if(special) {
                possible[modif + special] = true;

            } else {
                possible[modif + character] = true;
                possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

                // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
                if(modif === "shift+") {
                    possible[jQuery.hotkeys.shiftNums[character]] = true;
                }
            }

            for(var i = 0, l = keys.length; i < l; i++) {
                if(possible[keys[i]]) {
                    return origHandler.apply(this, arguments);
                }
            }
        };
    }

    jQuery.each(["keydown", "keyup", "keypress"], function() {
        jQuery.event.special[this] = {
            add: keyHandler
        };
    });

})(jQuery);


/*!
 * clipboard.js v1.5.5
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Clipboard = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var matches = require('matches-selector')

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}

},{"matches-selector":2}],2:[function(require,module,exports){

/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}
},{}],3:[function(require,module,exports){
var closest = require('closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function delegate(element, selector, type, callback) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector, true);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"closest":1}],4:[function(require,module,exports){
/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.function = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};

},{}],5:[function(require,module,exports){
var is = require('./is');
var delegate = require('delegate');

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.function(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;

},{"./is":4,"delegate":3}],6:[function(require,module,exports){
function select(element) {
    var selectedText;

    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.focus();
        element.setSelectionRange(0, element.value.length);

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;

},{}],7:[function(require,module,exports){
function E () {
	// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
	on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _select = require('select');

var _select2 = _interopRequireDefault(_select);

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var ClipboardAction = (function () {
    /**
     * @param {Object} options
     */

    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */

    ClipboardAction.prototype.resolveOptions = function resolveOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this.action = options.action;
        this.emitter = options.emitter;
        this.target = options.target;
        this.text = options.text;
        this.trigger = options.trigger;

        this.selectedText = '';
    };

    /**
     * Decides which selection strategy is going to be applied based
     * on the existence of `text` and `target` properties.
     */

    ClipboardAction.prototype.initSelection = function initSelection() {
        if (this.text && this.target) {
            throw new Error('Multiple attributes declared, use either "target" or "text"');
        } else if (this.text) {
            this.selectFake();
        } else if (this.target) {
            this.selectTarget();
        } else {
            throw new Error('Missing required attributes, use either "target" or "text"');
        }
    };

    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */

    ClipboardAction.prototype.selectFake = function selectFake() {
        var _this = this;

        this.removeFake();

        this.fakeHandler = document.body.addEventListener('click', function () {
            return _this.removeFake();
        });

        this.fakeElem = document.createElement('textarea');
        this.fakeElem.style.position = 'absolute';
        this.fakeElem.style.left = '-9999px';
        this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
        this.fakeElem.setAttribute('readonly', '');
        this.fakeElem.value = this.text;

        document.body.appendChild(this.fakeElem);

        this.selectedText = _select2['default'](this.fakeElem);
        this.copyText();
    };

    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

    ClipboardAction.prototype.removeFake = function removeFake() {
        if (this.fakeHandler) {
            document.body.removeEventListener('click');
            this.fakeHandler = null;
        }

        if (this.fakeElem) {
            document.body.removeChild(this.fakeElem);
            this.fakeElem = null;
        }
    };

    /**
     * Selects the content from element passed on `target` property.
     */

    ClipboardAction.prototype.selectTarget = function selectTarget() {
        this.selectedText = _select2['default'](this.target);
        this.copyText();
    };

    /**
     * Executes the copy operation based on the current selection.
     */

    ClipboardAction.prototype.copyText = function copyText() {
        var succeeded = undefined;

        try {
            succeeded = document.execCommand(this.action);
        } catch (err) {
            succeeded = false;
        }

        this.handleResult(succeeded);
    };

    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

    ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
        if (succeeded) {
            this.emitter.emit('success', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        } else {
            this.emitter.emit('error', {
                action: this.action,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }
    };

    /**
     * Removes current selection and focus from `target` element.
     */

    ClipboardAction.prototype.clearSelection = function clearSelection() {
        if (this.target) {
            this.target.blur();
        }

        window.getSelection().removeAllRanges();
    };

    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

    /**
     * Destroy lifecycle.
     */

    ClipboardAction.prototype.destroy = function destroy() {
        this.removeFake();
    };

    _createClass(ClipboardAction, [{
        key: 'action',
        set: function set() {
            var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        },

        /**
         * Gets the `action` property.
         * @return {String}
         */
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */
    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && typeof target === 'object' && target.nodeType === 1) {
                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        },

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
})();

exports['default'] = ClipboardAction;
module.exports = exports['default'];

},{"select":6}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _clipboardAction = require('./clipboard-action');

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = require('tiny-emitter');

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = require('good-listener');

var _goodListener2 = _interopRequireDefault(_goodListener);

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */

var Clipboard = (function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */

    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        _Emitter.call(this);

        this.resolveOptions(options);
        this.listenClick(trigger);
    }

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */

    Clipboard.prototype.resolveOptions = function resolveOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
        this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
        this.text = typeof options.text === 'function' ? options.text : this.defaultText;
    };

    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

    Clipboard.prototype.listenClick = function listenClick(trigger) {
        var _this = this;

        this.listener = _goodListener2['default'](trigger, 'click', function (e) {
            return _this.onClick(e);
        });
    };

    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

    Clipboard.prototype.onClick = function onClick(e) {
        var trigger = e.delegateTarget || e.currentTarget;

        if (this.clipboardAction) {
            this.clipboardAction = null;
        }

        this.clipboardAction = new _clipboardAction2['default']({
            action: this.action(trigger),
            target: this.target(trigger),
            text: this.text(trigger),
            trigger: trigger,
            emitter: this
        });
    };

    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

    Clipboard.prototype.defaultAction = function defaultAction(trigger) {
        return getAttributeValue('action', trigger);
    };

    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

    Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {
        var selector = getAttributeValue('target', trigger);

        if (selector) {
            return document.querySelector(selector);
        }
    };

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */

    Clipboard.prototype.defaultText = function defaultText(trigger) {
        return getAttributeValue('text', trigger);
    };

    /**
     * Destroy lifecycle.
     */

    Clipboard.prototype.destroy = function destroy() {
        this.listener.destroy();

        if (this.clipboardAction) {
            this.clipboardAction.destroy();
            this.clipboardAction = null;
        }
    };

    return Clipboard;
})(_tinyEmitter2['default']);

function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

exports['default'] = Clipboard;
module.exports = exports['default'];

},{"./clipboard-action":8,"good-listener":5,"tiny-emitter":7}]},{},[9])(9)
});
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* ========================================================================
 * ZUI: doc.js
 * For document UI
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


+(function(window, $) {
    'use strict';

    if(window.location.protocol === 'file:') {
        $('#fileProtocolTip').removeClass('hidden');
        $('.loading.loader').removeClass('loading');
        return;
    }

    if($.zui.browser.ie && $.zui.browser.ie < 11) {
        $.zui.messager.danger('你正在使用 IE 较低版本访问，无法获得 ZUI 文档网站的完整体验，建议你更换浏览器再访问。', {time: 20000});
    }

    // Polyfill
    if(!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if(position === undefined || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    if(!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.lastIndexOf(searchString, position) === position;
        };
    }

    if(!String.prototype.includes) {
        String.prototype.includes = function() {
            return String.prototype.indexOf.apply(this, arguments) !== -1;
        };
    }

    $.fn.allAttrs = function() {
        var attrs = {};
        $.each($(this)[0].attributes, function(index, attribute) {
            attrs[attribute.name] = attribute.value;
        });
        return attrs;
    }

    var getQueryString = function(name, defaultValue) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if(r !== null) return unescape(r[2]);
        return defaultValue;
    };

    var debug = getQueryString('debug', 0);
    if(debug) {
        console.warn("DEBUG ENABLED.");
        $('#pageReloadBtn').show();
    }

    var chapters = {
        basic       : {col: 1},
        control     : {col: 2},
        component   : {col: 2},
        javascript  : {col: 3},
        view        : {col: 3},
        learn       : {col: 1},
        promotion   : {col: 1, row: 2},
        resource    : {col: 1, row: 2},
        contribution: {col: 1, row: 2}
    };
    var isTouchScreen = 'ontouchstart' in document.documentElement;
    var LAST_RELOAD_ANIMATE_ID = 'lastReloadAnimate',
        LAST_QUERY_ID = 'LAST_QUERY_ID',
        INDEX_JSON = debug ? 'docs/index.json' : 'docs/index.min.json',
        ICONS_JSON = debug ? 'docs/icons.json' : 'docs/icons.min.json',
        PKG_JSON = 'package.json',
        ZUI_JSON = debug ? 'zui.json' : 'docs/zui.min.json',
        ZUI_CUSTOM_JSON = 'zui.custom.json',
        UNDEFINED = undefined,
        isNewRelease = (new Date().getTime()) < 1504195200000, // 2017/8/1
        dataVersion,
        storageEnable,
        docIndex, iconsIndex, currentSection,
        zuiPkg,
        pkgLibs = {
            standard: null,
            lite: null,
            seperate: null
        };
    var docThemes = {
        "default": {
            variables: {
                'color-primary': '#3280fc',
                'color-secondary': '#145ccd',
                'color-pale': '#ebf2f9',
                'border-radius-base': '4px',
                'border-radius-large': '6px',
                'border-radius-small': '3px'
            }
        },
        "blue": {
            variables: {
                'color-primary': '#039BE5',
                'color-secondary': '#0288d1',
                'color-pale': '#e1f5fe',
                'border-radius-base': '4px',
                'border-radius-large': '6px',
                'border-radius-small': '2px'
            }
        },
        "red": {
            variables: {
                'color-primary': '#d9534f',
                'color-secondary': '#c74743',
                'color-pale': '#ffebee',
                'border-radius-base': '4px',
                'border-radius-large': '6px',
                'border-radius-small': '2px'
            }
        },
        "green": {
            variables: {
                'color-primary': '#4caf50',
                'color-secondary': '#43a047',
                'color-pale': '#e8f5e9',
                'border-radius-base': 0,
                'border-radius-large': 0,
                'border-radius-small': 0
            }
        },
        "purple": {
            variables: {
                'color-primary': '#8666b8',
                'color-secondary': '#673AB7',
                'color-pale': '#f5eeff',
                'border-radius-base': 0,
                'border-radius-large': 0,
                'border-radius-small': 0
            }
        },
        "brown": {
            variables: {
                'color-primary': '#8D6E63',
                'color-secondary': '#795548',
                'color-pale': '#f7ebe1',
                'border-radius-base': '15px',
                'border-radius-large': '15px',
                'border-radius-small': '15px'
            }
        },
        "yellow": {
            variables: {
                'color-primary': '#d0884d',
                'color-secondary': '#bd7b46',
                'color-pale': '#fff0d5',
                'border-radius-base': '4px',
                'border-radius-large': '6px',
                'border-radius-small': '2px'
            }
        },
        "indigo": {
            variables: {
                'color-primary': '#3F51B5',
                'color-secondary': '#3949AB',
                'color-pale': '#ECEFF1',
                'border-radius-base': 0,
                'border-radius-large': '1px',
                'border-radius-small': 0
            }
        },
        "bluegrey": {
            variables: {
                'color-primary': '#607D8B',
                'color-secondary': '#546E7A',
                'color-pale': '#ECEFF1',
                'border-radius-base': 0,
                'border-radius-large': 0,
                'border-radius-small': 0
            }
        },
        "black": {
            variables: {
                'color-primary': '#333',
                'color-secondary': '#222',
                'color-pale': '#f5f5f5',
                'border-radius-base': 0,
                'border-radius-large': 0,
                'border-radius-small': 0
            }
        }
    };

    var documentTitle = 'ZUI',
        sectionsShowed,
        queryGaCallback,
        scrollBarWidth = -1,
        bestPageWidth = 1120,
        $body, $window, $grid, $sectionTemplate,
        $queryInput, $chapters, $pageAttrs,
        firstOpenPage = true,
        $choosedSection, $page, $pageHeader, $pageContent, $pageLoader,
        $pageBody, $navbar, $search, lastQueryString,
        $header, $sections, $chapterHeadings,
        $copyCodeBtn; // elements

    var isExternalUrl = function(url) {
        if(typeof url === 'string') {
            url = url.toLowerCase();
            return url.startsWith('http://') || url.startsWith('https://');
        }
        return false;
    };

    var limitString = function(str, len) {
        if(str && str.length > len) {
            return str.substr(0, len) + '...[' + str.length + ']';
        }
        return str;
    };

    var checkScrollbar = function() {
        if(document.body.clientWidth >= window.innerWidth) return;

        if(scrollBarWidth < 0) {
            var scrollDiv = document.createElement('div');
            scrollDiv.className = 'modal-scrollbar-measure';
            $body.append(scrollDiv);
            scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            $body[0].removeChild(scrollDiv);
        }

        if(scrollBarWidth) {
            var bodyPad = parseInt(($body.css('padding-right') || 0), 10);
            $body.css('padding-right', bodyPad + scrollBarWidth);
            $navbar.css('padding-right', scrollBarWidth);
        }
    };

    var resetScrollbar = function() {
        $body.css('padding-right', '');
        $navbar.css('padding-right', '');
    };

    var loadData = function(url, callback, delayLoadRemote, waitRemote) {
        var cacheData = null;
        var isIndexJson = url === INDEX_JSON;
        var isIconsJson = url === ICONS_JSON;
        var isHasCache = false;
        if(isIndexJson && docIndex) {
            cacheData = {
                data: docIndex,
                version: docIndex.version
            };
            isHasCache = true;
        } else if(isIconsJson && iconsIndex) {
            cacheData = iconsIndex;
            isHasCache = true;
        } else if(storageEnable) {
            var storedData = $.zui.store.get('//' + url, null);
            if(storedData !== null) {
                var storedVersion = $.zui.store.get('//' + url + '::V');
                if(storedVersion) {
                    cacheData = {
                        data: storedData,
                        version: storedVersion
                    };
                    isHasCache = true;
                    if(!docIndex && isIndexJson) {
                        docIndex = storedData;
                    }
                    if(debug) console.log('Ready storage data ', url, ':', cacheData);
                }
            }
        }

        if(isHasCache && (isIndexJson || cacheData.version === dataVersion)) {
            if(debug) console.log('Load', url, 'from cache:', cacheData);
            if(!waitRemote) {
                callback(cacheData.data, 'cache');
                if(!isIndexJson && !debug) return;
            }
        }

        var dataType = url.endsWith('.json') ? 'json' : 'html';
        var loadFromRemote = function() {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: dataType,
                success: function(data) {
                    if(data !== null) {
                        if(isIndexJson) {
                            dataVersion = data.version;
                            docIndex = data;
                        } else if(isIconsJson) {
                            iconsIndex = {
                                data: data,
                                version: dataVersion
                            };
                        }
                        cacheData = {
                            data: data,
                            version: dataVersion
                        };
                        $.zui.store.set('//' + url, data);
                        $.zui.store.set('//' + url + '::V', dataVersion);

                        if(debug) console.log('Load', url, 'from remote:', cacheData);
                        callback(data, 'remote');
                    } else if(isHasCache && !isIndexJson) {
                        if(debug) console.log('Failed load', url, 'from remote, instead load cache:', cacheData);
                        callback(cacheData.data, 'cache');
                    }
                },
                error: function() {
                    if(debug) console.warn("Ajax error:", url);
                    if(isHasCache && !isIndexJson) {
                        if(debug) console.log('Failed load', url, 'from remote with error, instead load cache:', cacheData);
                        callback(cacheData.data, 'cache');
                    } else {
                        callback(null, 'error');
                    }

                    if($body.hasClass('page-open')) {
                        $pageBody.children('.loader').addClass('with-error');
                    }
                }
            });
        }

        if(delayLoadRemote !== false) {
            if(delayLoadRemote) {
                setTimeout(loadFromRemote, delayLoadRemote);
            } else {
                loadFromRemote();
            }
        }
    };

    var eachSection = function(callback, eachChapterCallback) {
        if(!docIndex) {
            console.error("Document index is empty.");
            return false;
        };

        $.each(chapters, function(chapterName, chapter) {
            if(!docIndex.chapters[chapterName]) return;
            $.extend(chapter, docIndex.chapters[chapterName]);
            var sections = chapter.sections;
            var data = null;
            if(eachChapterCallback) {
                data = eachChapterCallback(chapter, sections);
                if(data === false) return false;
            }
            $.each(sections, function(i, section) {
                if(callback(chapter, section, data) === false) return false;
            });
        });
        return true;
    };

    var displaySectionIcon = function($icon, section) {
        var icon = section.icon;
        $icon.attr('class', 'icon').text('').css('background-image', '');
        if(icon === undefined || icon === null || icon === "") {
            icon = section.name.substr(0, 1).toUpperCase();
        }
        if(icon.startsWith('icon-')) {
            $icon.addClass(icon);
        } else if(icon.endsWith('.png')) {
            $icon.css('background-image', 'url(' + icon + ')').addClass('with-img');
        } else {
            $icon.addClass('text-icon').text(icon);
        }
    };

    var displaySection = function() {
        var order = 0;
        if(eachSection(function(chapter, section, $sectionList) {
                var chapterName = chapter.id;
                section.chapter = chapterName;
                section.chapterName = chapter.name;
                var url = section.url;
                if(typeof url === 'undefined') {
                    section.url = 'docs/part/' + section.chapter + '-' + section.id + '.md';
                    section.target = 'page';
                    section.targetType = 'markdown';
                    section.oldUrl = 'docs/part/' + section.chapter + '-' + section.id + '.html';
                } else if(isExternalUrl(url)) {
                    section.target = 'external';
                    section.targetType = null;
                } else if(url && url.endsWith('.md')) {
                    section.target = 'page';
                    section.targetType = 'markdown';
                    if(url === '.md') {
                        section.url = 'docs/part/' + section.chapter + '-' + section.id + '.md';
                    }
                } else if(url && url.endsWith('.html')) {
                    section.target = 'page';
                    section.targetType = 'html';
                    if(url === '.html') {
                        section.url = 'docs/part/' + section.chapter + '-' + section.id + '.html';
                    }
                } else {
                    section.target = '';
                }

                if(section.hidden) return;

                var id = chapterName + '-' + section.id;
                var $tpl = $sectionTemplate.clone().data('section', section);
                $tpl.attr({
                    'id': 'section-' + id,
                    'data-id': section.id,
                    'data-chapter': chapterName,
                    'data-order': order++,
                    'data-accent': chapter.accent,
                    'data-target': section.target
                });
                var $head = $tpl.children('.card-heading');
                var sectionUrl = '#' + chapterName + '/' + section.id;
                $head.find('.name').text(section.name).attr('href', sectionUrl);
                $head.attr('title', section.desc);
                displaySectionIcon($head.children('.icon'), section);
                var $topics = $tpl.find('.topics');
                if(section.topics && section.topics.length) {
                    var topicId = 0;
                    $.each(section.topics, function(tName, topic) {
                        if(typeof topic.id === 'undefined') topic.id = tName;
                        var topicUrl = typeof topic.url === 'undefined' ? (sectionUrl + '/' + (topicId++)) : topic.url;

                        $topics.append('<li data-id="' + tName + '"><a href="' + topicUrl + '"' + (isExternalUrl(topicUrl) ? ' target="_blank"' : '') + '>' + topic.name + '</a></li>');
                    });
                } else {
                    $topics.remove('.card-content');
                    $tpl.addClass('without-topics');
                }
                $sectionList.append($tpl.addClass('show' + (sectionsShowed ? ' in' : '')));
            }, function(chapter, sections) {
                chapter.$.attr('data-accent', chapter.accent);
                var $sectionList = chapter.$sections;
                $sectionList.children().remove();
                return $sectionList;
            })) {
            $body.children('.loader').removeClass('loading');
            $sections = $grid.find('.section');
            if(!sectionsShowed) {
                clearTimeout($grid.data(LAST_RELOAD_ANIMATE_ID));
                $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function() {
                    $sections.addClass('in');
                    $chapterHeadings.addClass('in');
                }, 100));
                sectionsShowed = true;
            }
            $('.text-page-count').text($sections.filter('[data-target="page"]').length);
            $('.text-external-count').text($sections.filter('[data-target="external"]').length);
        } else if(debug) {
            console.error("Display sections failed.");
        }
    };

    var scrollToThis = function($container, toTop, callback) {
        if($container === UNDEFINED) $container = $body;
        if(toTop === UNDEFINED || toTop === 'down') {
            toTop = $container.scrollTop() + ($window.height() - $container.offset().top) * 0.8;
        } else if(toTop === 'up') {
            toTop = $container.scrollTop() - ($window.height() - $container.offset().top) * 0.8;
        }
        $container.animate({
            scrollTop: toTop
        }, 200, 'swing', callback);
    };

    var scrollToSection = function($section) {
        if($section) {
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var winHeight = $window.height();
            var scrollTop = $body.scrollTop();
            if(winHeight < (top + height)) {

            }
        }
    };

    var isChoosedSection = function($section) {
        if($section === UNDEFINED) {
            $section = $choosedSection;
        }
        return $section && $section.hasClass('choosed') && $section.hasClass('show');
    };

    var chooseSection = function($section, keepOtherOpen, notOpenSelf) {
        if($sections) {
            if(isChoosedSection($section || null) && !notOpenSelf) {
                $choosedSection = $section.addClass('open');
                scrollToSection($section);
                return;
            }
            $sections.find(':focus').blur();
            var isOpened = $section && $section.hasClass('open');
            $sections.removeClass(keepOtherOpen ? 'choosed' : 'choosed open');
            if($section && $section.hasClass('section')) {
                $choosedSection = $section.addClass((notOpenSelf && !isOpened) ? 'choosed' : 'choosed open');
                scrollToSection($section);
            }
        }
    };

    var choosePrevSection = function() {
        var $all = $sections.filter('.show');
        if(isChoosedSection()) {
            var order = parseInt($choosedSection.data('order'));
            var $section = $choosedSection;
            while((--order) > -1) {
                var $prev = $all.filter('[data-order="' + order + '"]');
                if($prev.length) {
                    $section = $prev;
                    break;
                }
            }
            chooseSection($section);
        } else {
            chooseSection($all.first());
        }
    };

    var chooseNextSection = function() {
        var $all = $sections.filter('.show');
        if(isChoosedSection()) {
            var order = parseInt($choosedSection.data('order'));
            var $section = $choosedSection;
            var allCount = $sections.length;
            while((order++) < allCount) {
                var $next = $all.filter('[data-order="' + order + '"]');
                if($next.length) {
                    $section = $next;
                    break;
                }
            }
            chooseSection($section);
        } else {
            chooseSection($all.first());
        }
    };

    var distanceBetweenPoint = function(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), 2);
    };

    var chooseLeftSection = function() {
        var $all = $sections.filter('.show');
        if(isChoosedSection()) {
            var offset = $choosedSection.offset();
            var left = offset.left - $grid.children('.container').offset().left - 10;
            if(left < 50) {
                choosePrevSection();
                return;
            }
            var top = offset.top;
            left = offset.left;
            var $section = $choosedSection;
            var delta = 99999;
            $all.each(function() {
                var $this = $(this);
                var offset = $this.offset();
                if((offset.left + 50) < left) {
                    var thisDelta = distanceBetweenPoint(offset.left, offset.top, left, top);
                    if(thisDelta < delta) {
                        $section = $this;
                        delta = thisDelta;
                    }
                }
            });
            chooseSection($section);
        } else {
            chooseSection($all.first());
        }
    };

    var chooseRightSection = function() {
        var $all = $sections.filter('.show');
        if(isChoosedSection()) {
            var offset = $choosedSection.offset();
            var $container = $grid.children('.container');
            var left = offset.left - $container.offset().left - 10;
            if((left + 20 + $choosedSection.outerWidth() + 50) >= $container.outerWidth()) {
                chooseNextSection();
                return;
            }
            var top = offset.top;
            left = offset.left;
            var $section = $choosedSection;
            var delta = 99999;
            $all.each(function() {
                var $this = $(this);
                var offset = $this.offset();
                if(offset.left > left) {
                    var thisDelta = distanceBetweenPoint(offset.left, offset.top, left, top);
                    if(thisDelta < delta) {
                        $section = $this;
                        delta = thisDelta;
                    }
                }
            });
            chooseSection($section);
        } else {
            chooseSection($all.first());
        }
    };

    var resetQuery = function() {
        $grid.find('.col.hide').removeClass('hide');
        $chapters.removeClass('hide');
        $sections.addClass('show');
        $chapterHeadings.addClass('show');
        $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function() {
            $sections.addClass('in');
            $chapterHeadings.addClass('in');
        }, 20));
        $body.removeClass('query-enabled').attr('data-query', '');
    };

    var chooseIcon = function($icon) {
        var $search = $('#section-control-icon');
        if(!$icon || !$icon.length) {
            $search.removeClass('section-preview-show').data('preview', null);
            return;
        }
        $search.addClass('open section-preview-show');
        var $preview = $search.children('.section-preview');
        var oldIcon = $search.data('preview');
        if(!$preview.length) {
            $preview = $('#iconPreviewTemplate').clone().attr('id', '');
            $search.children('.card-heading').after($preview);
        }
        $search.children('.section-search').find('li.active').removeClass('active');
        $icon.addClass('active');
        if(oldIcon) $preview.find('.icon').removeClass('icon-' + oldIcon);
        var icon = $icon.data('icon');
        $search.data('preview', icon.id);
        $preview.toggleClass('show-shaped-icon', !!icon.shaped);
        var id = 'icon-' + icon.id;
        var isSpinner = (icon.id.startsWith('spin') || (icon.categories && icon.categories.indexOf('Spinner Icons') > -1)) === true;
        $preview.find('.icon').addClass(id).toggleClass('icon-spin', isSpinner);
        $preview.find('.name').text(isSpinner ? ('icon-spin ' + id) : id);
        $preview.find('.unicode').text(icon.code);
        if(icon.alias && icon.alias.length) {
            $preview.find('.alias').removeClass('hide').find('.alias-values').text(icon.alias.join(','));
        } else {
            $preview.find('.alias').addClass('hide');
        }
    };

    var queryIcon = function(keys) {
        if(!$.isArray(keys) && (keys || keys.length)) {
            keys = [keys];
        }

        var $section = $('#section-control-icon');
        $body.attr('data-query', 'icons');
        var $search = $section.children('.section-search');
        if(!$search.length) {
            $search = $('<div class="section-search card-content"><div class="loader loading"><i class="icon icon-spin icon-spinner"></i> 正在拼命加载中...</div></div>');
            $section.children('.card-heading').after($search);
            $search = $section.children('.section-search');
        }

        loadData(ICONS_JSON, function(data) {
            var $list = $search.children('ul');
            if(!$list.length) {
                $list = $('<ul data-view="icons">');
                $.each(data, function(iconName, icon) {
                    var $li = $('<li id="control-icon-' + iconName + '" data-id="' + iconName + '"><a href="#control/icons/' + iconName + '"><i class="icon icon-' + iconName + '"></i> icon-' + iconName + '</a></li>');
                    icon.id = iconName;
                    $li.data('icon', icon).toggleClass('control-icon-shaped', !!icon.shaped);
                    $list.append($li);
                });
                $search.children('.loader').replaceWith($list);
            }

            if(!keys.length) {
                $list.children('.hide').removeClass('hide');
                chooseIcon($list.children().first());
                return;
            }

            keys.forEach(function(keyVal, keyIndex) {
                keys[keyIndex] = keys[keyIndex].toLowerCase();
            });

            var $bestMatch, bestMatchWeight = 0;
            $.each(data, function(iconId, icon) {
                var choosed = false;
                var weight = 0;
                iconId = iconId.toLowerCase();
                $.each(keys, function(keyIndex, key) {
                    var choosedThis = false;
                    if(iconId.includes(key)) {
                        choosedThis = true;
                        weight += iconId.startsWith(key) ? 120 : 110;
                    } else if(icon.name && icon.name.toLowerCase().includes(key)) {
                        choosedThis = true;
                        weight += icon.name.toLowerCase().startsWith(key) ? 100 : 95;
                    } else if(key.startsWith('\\') && icon.code && icon.code.toLowerCase().includes(key.substr(1))) {
                        choosedThis = true;
                        weight += 120;
                    } else {
                        var filters = [];
                        if($.isArray(icon.filter) && icon.filter.length) filters = filters.concat(icon.filter);
                        if($.isArray(icon.categories) && icon.categories.length) filters = filters.concat(icon.categories);
                        if($.isArray(icon.alias) && icon.alias.length) filters = filters.concat(icon.alias);
                        if(!filters.length) return;
                        $.each(filters, function(filterIndex, filter) {
                            filter = filter.toLowerCase();
                            if(filter.includes(key)) {
                                choosedThis = true;
                                weight += 50;
                                return false;
                            }
                        });
                    }

                    if(!choosedThis) {
                        choosed = false;
                        return choosed;
                    } else {
                        choosed = true;
                    }
                });

                var $li = $('#control-icon-' + iconId).toggleClass('hide', !choosed);
                if(choosed && bestMatchWeight < weight) {
                    bestMatchWeight = weight;
                    $bestMatch = $li;
                }
            });
            chooseIcon($bestMatch);
        });
    };

    var query = function(keyString) {
        if(!$sections) {
            if(debug) console.log('Query failed, $sections is empty. key:', keyString);
            return;
        }

        if(typeof keyString === 'undefined') keyString = null;

        if($queryInput.data('queryString') !== keyString) {
            $queryInput.data('queryString', keyString).val(keyString);
            $grid.css('min-height', $grid.height());
        }

        if(keyString === null || !keyString.length) {
            resetQuery();
            $search.removeClass('with-query-text');
            return;
        }
        $search.addClass('with-query-text');

        $body.addClass('query-enabled').attr('data-query', '');

        // Send ga data
        if(window['ga'] && $.isFunction(ga)) {
            if(queryGaCallback) clearTimeout(queryGaCallback);
            queryGaCallback = setTimeout(function() {
                ga('send', 'pageview', window.location.pathname + '#search/' + keyString);
            }, 2000);
        }

        var keys = [];
        $.each(keyString.split(' '), function(i, key) {
            key = $.trim(key).toLowerCase();
            var keyOption = {
                origin: key
            };
            if(key.startsWith('@')) {
                keyOption.type = 'id';
                keyOption.chapter = key.substr(1);
                keyOption.val = keyOption.chapter;
            } else if(key.startsWith('#')) {
                keyOption.type = 'tag';
                keyOption.val = key.substr(1);
            } else if(key.startsWith('icon-') || key.startsWith('icon:')) {
                keyOption.type = 'icon';
                keyOption.val = key.substr(5);
            } else if(key.startsWith('i:') || key.startsWith('i-')) {
                keyOption.type = 'icon';
                keyOption.val = key.substr(2);
            } else if(key.startsWith('ver:')) {
                keyOption.type = 'version';
                keyOption.val = key.substr(4);
            } else if(key.startsWith('v:')) {
                keyOption.type = 'version';
                keyOption.val = key.substr(2);
            } else if(key.startsWith('version:')) {
                keyOption.type = 'version';
                keyOption.val = key.substr(8);
            } else if(key.startsWith('gulp:') || key.startsWith('build:')) {
                keyOption.type = 'build';
                keyOption.val = key.substr(6);
            } else if(key.startsWith('g:') || key.startsWith('b:')) {
                keyOption.type = 'build';
                keyOption.val = key.substr(2);
            } else {
                $.each(chapters, function(name) {
                    if(key.startsWith(name + ':')) {
                        keyOption.type = 'id';
                        keyOption.chapter = name;
                        keyOption.val = key.substr(name.length);
                        return false;
                    }
                });
                if(!keyOption.type) {
                    keyOption.type = 'any';
                    keyOption.val = key;
                }
            }
            if(keyOption.val.length || (keyOption.type && keyOption.type !== 'any')) {
                keys.push(keyOption);
            }
        });

        if(!keys.length) {
            resetQuery();
            return;
        }

        var resultMap = {},
            chapterMap = {},
            weight, id, chooseThis, chooseThisKey, keyVal, matches, matchType;
        if(eachSection(function(chapter, section) {
                chooseThis = true;
                matches = [];
                weight = 0;
                $.each(keys, function(keyIndex, key) {
                    keyVal = key.val;
                    matchType = null;
                    chooseThisKey = false;
                    switch(key.type) {
                        case 'id':
                            chooseThisKey = (key.chapter ? chapter : section).id.includes(keyVal);
                            if(chooseThisKey) matchType = [key.chapter ? 'chapter' : 'section', 'id'];
                            weight = 100;
                            break;
                        case 'icon':
                            chooseThis = section.id === 'icon';
                            if(chooseThis) {
                                weight = 120;
                                matches.push({
                                    key: key,
                                    type: ['section', 'id']
                                });
                                var iconKeys = [];
                                if(key.val || key.val.length) {
                                    iconKeys.push(key.val);
                                }
                                keys.forEach(function(iconKey) {
                                    if(iconKey.val !== key.val && (iconKey.val || iconKey.val.length)) {
                                        iconKeys.push(iconKey.val);
                                    }
                                });
                                queryIcon(iconKeys);
                                return false;
                            }
                            break;
                        case 'version':
                            if(key.val == 'new') {
                                chooseThisKey = section.isNew;
                            } else if(key.val == 'update') {
                                chooseThisKey = section.isUpdate;
                            }  else if(!key.val) {
                                chooseThisKey = section.isUpdate || section.isNew;
                            } else {
                                chooseThisKey = section.version === key.val;
                            }
                            weight = 100;
                            break;
                        default:
                            var sectionName = section.name.toLowerCase();
                            if(sectionName.includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['section', 'name'];
                                weight = sectionName.startsWith(keyVal) ? 85 : 82;
                                break;
                            }
                            if(section.filter && section.filter.includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['section', 'filter'];
                                weight = 80;
                                break;
                            }
                            var chapterName = chapter.name.toLowerCase();
                            if(chapterName.includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['chapter', 'name'];
                                weight = chapterName.startsWith(keyVal) ? 75 : 73;
                                break;
                            }
                            if(chapter.filter && chapter.filter.includes(keyVal)) {
                                chooseThisKey = true;
                                matchType = ['chapter', 'filter'];
                                weight = 70;
                                break;
                            }
                            if(keyVal.length > 1) {
                                if(section.id.includes(keyVal)) {
                                    chooseThisKey = true;
                                    matchType = ['section', 'id'];
                                    weight = 65;
                                    break;
                                }
                                if(chapter.id.includes(keyVal)) {
                                    chooseThisKey = true;
                                    matchType = ['chapter', 'id'];
                                    weight = 60;
                                    break;
                                }
                                if($.isArray(section.topics)) {
                                    var isBreak = false;
                                    $.each(section.topics, function(topicIndex, topic) {
                                        if(topic.name && topic.name.toLowerCase().includes(keyVal)) {
                                            chooseThisKey = true;
                                            matchType = ['section', 'topic', topicIndex];
                                            isBreak = true;
                                            weight = 20;
                                            return false;
                                        }
                                    });
                                    if(isBreak) break;
                                }
                                if(section.desc && section.desc.toLowerCase().includes(keyVal)) {
                                    chooseThisKey = true;
                                    matchType = 'section.desc';
                                    weight = 30;
                                    break;
                                }
                            } else {
                                if(chapter.id.startsWith(keyVal)) {
                                    chooseThisKey = true;
                                    matchType = ['chapter', 'id'];
                                    weight = 60;
                                    break;
                                }
                                if(section.id.startsWith(keyVal)) {
                                    chooseThisKey = true;
                                    matchType = ['section', 'id'];
                                    weight = 50;
                                    break;
                                }
                            }
                    }
                    if(!chooseThisKey) {
                        chooseThis = false;
                        return false;
                    } else {
                        matches.push({
                            key: key,
                            type: matchType
                        });
                    }
                });

                id = chapter.id + '-' + section.id;
                if(chooseThis) {
                    chapterMap[chapter.id]++;
                    resultMap[id] = {
                        hidden: false,
                        matches: matches,
                        weight: weight
                    };
                } else {
                    resultMap[id] = {
                        hidden: true
                    };
                }
            }, function(chapter) {
                chapterMap[chapter.id] = 0;
            })) {
            var $hide = $(),
                $show = $(),
                $section, choosedWeight = -1,
                $choosed;
            $.each(resultMap, function(id, result) {
                $section = $('#section-' + id);
                if(result.hidden) {
                    $hide = $hide.add($section);
                } else {
                    $show = $show.add($section);
                    if(choosedWeight < result.weight) {
                        $choosed = $section;
                        choosedWeight = result.weight;
                    }
                }
                chooseSection($choosed);
            });

            var $chapter, hide, chapter;
            $.each(chapterMap, function(chapterId, resultCount) {
                chapter = chapters[chapterId];
                hide = !resultCount;
                chapter.$.toggleClass('hide', hide);
            });
            var finalShowColsCount = 0;
            $grid.find('.row').each(function() {
                var showColsCount = 0;
                var $row = $(this);
                $row.children('.col').each(function() {
                    var $col = $(this);
                    var showCol = $col.children('.chapter:not(.hide)').length;
                    $col.toggleClass('hide', !showCol);
                    if(showCol) {
                        showColsCount++;
                        if(!$body.hasClass('compact-mode')) {
                            var showCount = $col.find('.section:not(.hide)').length;
                            if(showCount > 2 && $window.height() < ($header.height() + showCount * 70)) {
                                toggleCompactMode(true);
                            }
                        }
                    }
                });
                finalShowColsCount = Math.max(finalShowColsCount, showColsCount);
            });
            $grid.attr('data-show-col', finalShowColsCount);

            if($hide.length) {
                $hide.removeClass('in');
                setTimeout(function() {
                    $hide.removeClass('show');
                }, 100);
            }
            if($show.length) {
                $show.addClass('show');
                setTimeout(function() {
                    $show.addClass('in');
                }, 20);
            }

            $window.scrollTop(1);
            if(!$('body').hasClass('view-double')) closePage();
        } else if(debug) {
            console.error("Query failed with key: ", keys);
        }
    };

    var toggleCompactMode = function(toggle, callback) {
        if(toggle === UNDEFINED) {
            toggle = !$body.hasClass('compact-mode');
        }

        var animateName = 'isScrollAnimating';
        if(toggle) {
            if(!$body.hasClass('compact-mode')) {
                $body.data(animateName, true).addClass('compact-mode')
                setTimeout(function() {
                    $body.addClass('compact-mode-in');
                    $window.scrollTop(1);
                    setTimeout(function() {
                        $body.data(animateName, false);
                        if(callback) callback();
                    }, 300);
                }, 10);
            } else if(callback) {
                callback();
            }
        } else {
            if($body.hasClass('compact-mode')) {
                $body.data(animateName, true).removeClass('compact-mode-in');
                setTimeout(function() {
                    $body.removeClass('compact-mode');
                    $body.data(animateName, false);
                    if(callback) callback();
                }, 300);
            } else if(callback) {
                callback();
            }
        }
    };

    var closePage = function(onlyEvent) {
        window['afterPageLoad'] = null;
        window['onPageLoad'] = null;
        if($.isFunction(window['onPageClose'])) {
            window['onPageClose']();
            window['onPageClose'] = null;
        }
        if(!onlyEvent && $body.hasClass('page-open')) {
            var style = $page.data('trans-style');
            if(style) {
                style['max-height'] = '';
                $page.css(style);
            }
            $body.addClass('page-show-out').removeClass('page-open page-show-in');

            if($queryInput.val() !== '') {
                $queryInput.focus();
            }

            window.document.title = documentTitle;
            window.location.hash = '#/';
            setTimeout(function() {
                $body.removeClass('page-show page-show-out');
                resetScrollbar();
            }, 300);
            return true;
        }
        return false;
    };

    var showPageTopic = function(topic) {
        $page.removeClass('page-collapsed');
        var valType = typeof topic;
        if(valType === 'undefined') return;
        if(valType === 'string') {
            var num = parseInt(topic);
            if(num !== NaN) {
                valType = 'number';
                topic = num;
            }
        }

        var expandTopic = function($section) {
            if($section && $section.length) {
                togglePageSection(false);
                togglePageSection($section.addClass('hover'), true);
            }
        };

        if(valType === 'number') {
            expandTopic($pageContent.children('section').removeClass('hover').eq(topic));
        } else if(valType === 'string' && valType.length) {
            // highlight element with the id string.
        }
    };

    var stopPageLoading = function() {
        $page.removeClass('loading');
        $pageLoader.removeClass('loading');
    };

    var handlePageLoad = function() {
        var delayMutedPageLoading = false;
        if($.isFunction(window['onPageLoad'])) {
            delayMutedPageLoading = window['onPageLoad']() === false;
        }

        setTimeout(function() {
            if($.isFunction(window['afterPageLoad'])) {
                if(window['afterPageLoad'](stopPageLoading) === true) {
                    handlePageLoad();
                }
            }

            var $codes = $pageBody.find('pre');
            if($codes.length && window.prettyPrint) {
                // pretty code
                if(window.prettyPrint) {
                    $codes.addClass('prettyprint');
                    window.prettyPrint();
                }
            }
        }, 200);

        if(zuiPkg) {
            $pageBody.find('.zui-version').text(zuiPkg.version);
        }

        if(!delayMutedPageLoading) stopPageLoading();
    };

    var loadPage = function(section, topic, waitRemote) {
        section = section || currentSection;

        if(topic !== '!refresh') $pageContent.empty();
        $page.addClass('loading');
        $pageLoader.removeClass('with-error').addClass('loading');
        var lastShowDataCall;

        loadData(section.url, function(data, dataType) {
            if(zuiPkg) data = data.format(zuiPkg, '{\\$0}');
            var showData = function() {
                if(data && window.marked && section.targetType === 'markdown') {
                    var $article = $();
                    var frontMatterIndex = data.indexOf('\n---\n');
                    if(frontMatterIndex > -1) data = data.substr(frontMatterIndex + 5);
                    var $markdown = $(window.marked(data));
                    var $lastSection, checkFirstH1 = true;
                    var hasH2 = $markdown.filter('h2').length > 0;
                    var $lastTemplate = null;
                    $markdown.each(function() {
                        var $tag = $(this);
                        var tagName = $tag.prop('tagName');
                        if(!tagName || tagName === 'STYLE' || tagName === 'SCRIPT') {
                            $article = $article.add($tag);
                            return;
                        }
                        if(tagName === 'TEMPLATE' || tagName === 'HOLDER') {
                            $lastTemplate = $tag;
                            return;
                        } else if($lastTemplate) {
                            $tag.attr($lastTemplate.allAttrs());
                            $lastTemplate = null;
                        }
                        if(tagName === 'TABLE') {
                            $tag.addClass('table');
                            $tag = $('<div class="table-responsive"/>').append($tag);
                        }
                        if(checkFirstH1) {
                            if(tagName === 'H1') {
                                $pageHeader.find('h2 > .name').text($tag.html());
                            }
                            checkFirstH1 = false;
                            return;
                        }
                        if(tagName === 'EXAMPLE') {
                            $tag = $('<div/>').attr($tag.allAttrs()).html($tag.html()).addClass('example');
                        }
                        if((hasH2 && (tagName === 'H1' || tagName === 'H2')) || (!hasH2 && tagName === 'H3')) {
                            if($lastSection) {
                                $article = $article.add($lastSection);
                            }
                            $lastSection = $('<section><header><h3>' + $tag.html() + '</h3></header><article></article></section>');
                        } else {
                            if(hasH2) {
                                if(tagName === 'H3') {
                                    $tag = $('<h4>').html($tag.html());
                                } else if(tagName === 'H4') {
                                    $tag = $('<h5>').html($tag.html());
                                } else if(tagName === 'H5') {
                                    $tag = $('<h6>').html($tag.html());
                                }
                            }
                            if(!$lastSection) {
                                $lastSection = $('<article></article>');
                            }
                            if($lastSection.prop('tagName') === 'ARTICLE') {
                                $lastSection.append($tag);
                            } else {
                                $lastSection.children('article').append($tag);
                            }
                        }
                    });
                    if($lastSection) {
                        $article = $article.add($lastSection);
                    }
                    $pageContent.empty().append($article);
                } else {
                    try {
                        $pageContent.html(data);
                    } catch (e) {
                        console.error('Page data has error: ', {content: data, error: e});
                    }
                }

                if(topic !== '!refresh') $pageBody.scrollTop(0);
                showPageTopic(topic);
                handlePageLoad();
                $pageAttrs.show();
            }
            if(lastShowDataCall) clearTimeout(lastShowDataCall);
            if($page.hasClass('openning')) {
                lastShowDataCall = setTimeout(showData, 700);
            } else {
                showData();
            }
        }, 400, waitRemote);

        if($body.hasClass('page-open')) {
            if(debug) console.log('open section in open page', section);
            return;
        }

        $body.addClass('page-open');
    };

    var openPage = function($section, section, topic) {
        var pageId = section.chapter + '-' + section.id;
        var isPageOpen = $body.hasClass('page-open');
        if(isPageOpen && pageId === $body.attr('data-page')) {
            if(debug) console.warn('The page already showed, page will be reload.');
            if(topic !== undefined) {
                showPageTopic(topic);
            } else {
                closePage(true);
                loadPage(null, '!refresh', true);
            }
            return;
        }
        if(isPageOpen) closePage(true);

        currentSection = section;
        chooseSection($section, false, true);

        // Send ga data
        var pageUrl = '#' + section.chapter + '/' + section.id;
        if(topic) pageUrl += '/' + topic;
        window.document.title = section.chapterName + ' > ' + section.name + ' - ' + documentTitle;
        window.location.hash = pageUrl;
        if(window['ga'] && $.isFunction(ga)) ga('send', 'pageview', window.location.pathname + pageUrl);

        $body.attr('data-page-accent', $section.data('accent')).attr('data-page', pageId);
        displaySectionIcon($pageHeader.find('.icon'), section);
        $pageHeader.find('.name').text(section.name).attr('href', pageUrl);
        // $pageHeader.find('.desc').text(section.desc);

        // page attributes
        $pageAttrs.hide();
        $pageAttrs.children('.badge-author').toggle(!!section.author).find('.author-name').text(section.author);
        $pageAttrs.children('.badge-source').toggle(!!section.url).attr('href', 'https://github.com/easysoft/zui/tree/master/' + section.url);
        var lib = section.lib;
        if(lib) {
            $pageAttrs.children('.badge-zui').toggle(!!lib.bundles.standard);
            $pageAttrs.children('.badge-lite').toggle(!!lib.bundles.lite);
            $pageAttrs.children('.badge-lib').toggle(!!lib.bundles.seperate);
            $pageAttrs.children('.badge-custom').toggle(!!lib.custom);
            $pageAttrs.children('.badge-bootstrap').toggle(lib.source === 'Bootstrap');
            $pageAttrs.children('.badge-version').toggle(!!lib.ver).text(lib.ver + '+');
            $pageAttrs.children('.badge-party').toggle(!!(lib.source && lib.source !== 'Bootstrap')).attr('href', lib.website || lib.project || 'javascript:;').find('.product-ver').text(lib.pver || '');

            var isShowCodeBadage = lib.srcCount > 0 || lib.bundlesCount > 0;
            var $codeDropMenu = $pageAttrs.children('.badge-code-dropdown').toggle(isShowCodeBadage);
            if(isShowCodeBadage) {
                var $badge = $codeDropMenu.find('.badge-code').attr('data-type', 'has' + (!!lib.srcCount ? '-source' : '') + (!!lib.bundlesCount ? '-bundles' : ''));
                $badge.children('.badge-code-source').toggle(!!lib.srcCount).find('.count').text(lib.srcCount);
                $badge.children('.badge-code-pkgs').toggle(!!lib.bundlesCount).find('.count').text(lib.bundlesCount);

                var $dropdown = $codeDropMenu.find('.dropdown-menu').empty();
                var srcTypes = {
                    js: "Javascript",
                    css: "CSS",
                    less: "LESS",
                    resource: "资源",
                };
                var srcPrefix = 'https://github.com/easysoft/zui/blob/' + (zuiPkg.version ? ('v' + zuiPkg.version) : 'master') + '/';
                if(lib.srcCount) {
                    $dropdown.append('<li class="dropdown-header primary-header" data-type="source"><i class="icon icon-file-code"></i>  源码 ' + lib.srcCount + '</li>');
                    $.each(lib.src, function(srcName, files) {
                        $dropdown.append('<li class="dropdown-header">' + (srcTypes[srcName] || srcName) + '</li>');
                        files.forEach(function(f) {
                            f = f.replace(/\/\//g, '/');
                            $dropdown.append('<li><a target="_blank" href="' + srcPrefix + f + '">' + f + '</a></li>');
                        });
                    });
                }
                if(lib.bundlesCount) {
                    $dropdown.append('<li class="dropdown-header primary-header" data-type="bundles"><i class="icon icon-cube"></i> 打包</li>');
                    if(lib.bundles.standard) {
                        $dropdown.append('<li class="dropdown-header">标准版</li>');
                        var files = [];
                        if(lib.src.js && lib.src.js.length) {
                            files.push('dist/js/zui.js');
                        }
                        if(lib.src.less && lib.src.less.length) {
                            files.push('dist/css/zui.css');
                        }
                        if(lib.src.resource && lib.src.resource.length) {
                            lib.src.resource.forEach(function(rf) {
                                if(rf.indexOf('//') > -1) {
                                    rf = 'dist/' + rf.substr(rf.indexOf('//') + 1);
                                } else {
                                    rf = rf.replace('src/', 'dist/').replace('assets/', 'dist/');
                                }
                                files.push(rf);
                            });
                        }
                        files.forEach(function(f) {
                            f = f.replace(/\/\//g, '/');
                            $dropdown.append('<li><a target="_blank" href="' + srcPrefix + f.replace('/**/*', '') + '">' + f + '</a></li>');
                        });
                    }
                    if(lib.bundles.lite) {
                        $dropdown.append('<li class="dropdown-header">简洁版</li>');
                        var files = [];
                        if(lib.src.js && lib.src.js.length) {
                            files.push('dist/js/zui.lite.js');
                        }
                        if(lib.src.less && lib.src.less.length) {
                            files.push('dist/css/zui.lite.css');
                        }
                        if(lib.src.resource && lib.src.resource.length) {
                            lib.src.resource.forEach(function(rf) {
                                if(rf.indexOf('//') > -1) {
                                    rf = 'dist/' + rf.substr(rf.indexOf('//') + 1);
                                } else {
                                    rf = rf.replace('src/', 'dist/').replace('assets/', 'dist/');
                                }
                                files.push(rf);
                            });
                        }
                        files.forEach(function(f) {
                            f = f.replace(/\/\//g, '/');
                            $dropdown.append('<li><a target="_blank" href="' + srcPrefix + f.replace('/**/*', '') + '">' + f + '</a></li>');
                        });
                    }
                    if(lib.bundles.seperate) {
                        $dropdown.append('<li class="dropdown-header">独立组件</li>');
                        $dropdown.append('<li><a target="_blank" href="' + srcPrefix + 'dist/lib/' + section.id + '">dist/lib/' + section.id + '/**/*</a></li>');
                    }
                    if(lib.code === 'theme') {
                        $dropdown.append('<li><a target="_blank" href="' + srcPrefix + 'dist/zui-theme.css">dist/css/zui-theme.css</a></li>');
                    }
                }
            }
        }

        loadPage(section, topic);

        toggleCompactMode(true, function() {
            checkScrollbar();
            $body.addClass('page-show');

            setTimeout(function() {
                $body.addClass('page-show-in');
                if($page.hasClass('loading')) $page.addClass('openning');
                $pageBody.scrollTop(0);
                setTimeout(function() {
                    $page.removeClass('openning');
                    if(firstOpenPage) {
                        firstOpenPage = $.zui.store.get('first_open_page', true);
                        if(firstOpenPage) {
                            firstOpenPage = false;
                            $.zui.store.set('first_open_page', false);
                            if(!isTouchScreen) {
                                setTimeout(function() {
                                    $('#pageCloseBtn').tooltip('show').addClass('active');
                                    setTimeout(function() {
                                        $('#pageCloseBtn').tooltip('hide').removeClass('active');
                                    }, 6000);
                                }, 500);
                            }
                        }
                    }
                }, 300);
            }, 10);
        });
    };

    var openSection = function(section, topic) {
        // if(debug) console.log('openSection', section, topic);
        section = section || $choosedSection;

        var $section;
        if($.isArray(section)) {
            if(typeof topic !== 'undefined') section = section.push(topic);
            if(!section[0]) {
                if(debug) console.warn("Open section failed: can't find the section with id " + section.join('-'));
                return;
            }
            if(section.length > 0 && section[0] === 'search') {
                query(section[1]);
                return;
            }
            if(docIndex && section.length > 1) {
                var sectionId = section[1];
                var sections = docIndex.chapters[section[0]].sections;
                var ok = false;
                $.each(sections, function(i, s) {
                    if(s.id === sectionId) {
                        if(section.length > 2) {
                            topic = section[2];
                        }
                        section = s;
                        ok = true;
                        return false;
                    }
                });
                if(!ok) {
                    if(debug) console.warn("Open section failed: can't find the section with id " + section.join('-'));
                    return;
                }
            } else {
                if(debug) console.warn("Open section stop by null docIndex or wrong section value.");
                return;
            }
        }
        if($.isPlainObject(section)) {
            $section = $('#section-' + section.chapter + '-' + section.id);
        } else {
            var $temp = section;
            section = $temp.data('section');
            $section = $temp;
        }

        if(section.url === '') {
            $.zui.messager.show('该链接所指示的文档尚未完成。你可以Fork项目来完善文档。');
            return;
        }

        switch(section.target) {
            case 'external':
                window.open(section.url, '_blank');
                break;
            case 'page':
                var pageViewLayout = $.zui.store.get('pageViewLayout');
                if(!pageViewLayout && $(window).width() >= 1600) {
                    $('#changeViewModal').on('hide.zui.modal', function() {
                        pageViewLayout = $.zui.store.get('pageViewLayout');
                        if(!pageViewLayout) $.zui.store.set('pageViewLayout', 'single');
                        openPage($section, section, topic);
                    }).modal('show');
                } else {
                    openPage($section, section, topic);
                }
                break;
            default:
                if(debug) console.error("Open section failed: unknown target.");
        }
    };

    var togglePageSection = function($section, toggle) {
        var valType = typeof $section;
        if(valType === 'object') {
            if(typeof toggle === 'undefined') {
                toggle = $section.hasClass('collapsed');
            }
            $section.toggleClass('collapsed', !toggle);
            var $setions = $pageContent.children('section');
            var sectionsCount = $setions.length,
                collapsedSectionCount = $setions.filter('.collapsed').length;
            if(collapsedSectionCount === 0) {
                $page.removeClass('page-collapsed');
            } else if(collapsedSectionCount === sectionsCount) {
                $page.addClass('page-collapsed');
            }
        } else {
            toggle = valType === 'boolean' ? $section : $page.hasClass('page-collapsed');
            $page.toggleClass('page-collapsed', !toggle);
            if(!toggle) {
                $pageContent.children('section').addClass('collapsed');
            } else {
                $pageContent.children('section').removeClass('collapsed');
            }
        }
    };

    var openPageUrl = function(url) {
        if(url.startsWith('#') && url.length > 1 && url.indexOf('##') !== 0) {
            url = url.substr(1);
            setTimeout(function() {
                var params = url.split('/');
                var controllerName = params[0].toLowerCase();
                if(controllerName === 'search' || controllerName === 'query') {
                    query(params[1]);
                } else {
                    openSection(params);
                }
            }, 600);
        } else if(isExternalUrl(url)) {
            window.open(url, '_blank');
        } else {
            if(debug) console.warn('Open page url failed: unknown url', url);
        }
    };

    var isInLib = function(name, libNames, lib) {
        if(libNames) {
            var len = libNames.length;
            name = name.toLowerCase();
            var names = name + 's',
                nameDot = name + '.',
                namesDot = name + 's.';
            for(var i = 0; i < len; ++i) {
                var item = libNames[i];
                if(item === name || item === names || item.startsWith(nameDot) || item.startsWith(namesDot)) {
                    return true;
                }
            }
        }
        return false;
    };

    var getBuildList = function(pkg, build, lib, list) {
        if(!list) {
            list = [];
        }
        if(!$.isArray(list)) {
            list = [list];
        }

        if(build.bundles) {
            $.each(build.bundles, function(idx, name) {
                var bundleBuild = pkg.builds[name];
                var buildLib = lib[name];
                if(!bundleBuild && buildLib) {
                    bundleBuild = {
                        title: buildLib.name,
                        dest: 'dist/lib/' + name + '/',
                        filename: (buildLib.source && buildLib.source !== 'Bootstrap') ? name : ('zui.' + name),
                        includes: [name],
                        source: buildLib.source,
                        settingDpds: (buildLib.src && buildLib.src.less && buildLib.src.less.length) ? ['setting'] : null,
                        ignoreBasic: true,
                        ignoreDpds: buildLib.ignoreDpds === undefined ? true : buildLib.ignoreDpds
                    };
                    pkg.builds[name] = bundleBuild;
                }

                getBuildList(pkg, bundleBuild, lib, list);
            });
        }

        if(build.basicDpds) list = getItemList(lib, build.basicDpds, list);
        list = getItemList(lib, build.includes, list, build.ignoreDpds);

        return list;
    };

    var getItemList = function(lib, list, items, ignoreDpds, ignoreCombine) {
        items = items || [];

        if($.isArray(list)) {
            $.each(list, function(idx, name) {
                getItemList(lib, name, items, ignoreDpds);
            });
        } else {
            var item = lib[list];
            if(item && items.indexOf(list) < 0) {
                if(!ignoreDpds && item.dpds) {
                    getItemList(lib, item.dpds, items, ignoreDpds);
                }
                if(item.src || !ignoreCombine) items.push(list);
            }
        }

        return items;
    };

    var loadPackage = function(callback) {
        loadData(PKG_JSON, function(pkg) {
            loadData(ZUI_JSON, function(zui) {
                // loadData(ZUI_CUSTOM_JSON, function(customZui) {
                    zuiPkg = $.extend(pkg, {
                        lib: $.extend({}, zui.lib/*, customZui ? customZui.lib : null*/),
                        builds: $.extend({}, zui.builds/*, customZui ? customZui.builds : null*/)
                    });
                    if($.doc) $.doc.pkg = zuiPkg;
                    callback(zuiPkg);
                // }, null, true);
            }, null, true);
        }, null, true);
    };

    var formatPkg = function(pkg) {
        pkg = pkg || zuiPkg;
        if(pkg) {
            $('.format-pkg').each(function() {
                var $e = $(this);
                var eData = $e.data();
                if(eData.fmtHref) {
                    $e.attr('href', eData.fmtHref.format(pkg));
                }
                if(eData.fmtText) {
                    $e.text(eData.fmtText.format(pkg));
                }
                if(eData.fmtHtml) {
                    $e.html(eData.fmtHtml.format(pkg));
                }
                if(eData.fmt) {
                    $.each(eData.fmt.split('|'), function(idx, fmt) {
                        var fmtAttr = fmt.substr(0, fmt.indexOf(':'));
                        var fmtValue = fmt.substr(fmtAttr.length + 1);
                        $e.attr(fmtAttr, fmtValue.format(pkg));
                    });
                }
            });
        }
    };

    var initPackage = function() {
        loadPackage(function(pkg) {
            formatPkg(pkg);
            pkgLibs.standard = getBuildList(pkg, pkg.builds.standard, pkg.lib);
            pkgLibs.lite = getBuildList(pkg, pkg.builds.lite, pkg.lib);
            pkgLibs.seperate = getBuildList(pkg, pkg.builds.seperate, pkg.lib);

            function getLibSource(lib, src, libName) {
                if(lib.src) {
                    ['less', 'js', 'resource'].forEach(function(srcTypeName) {
                        if(lib.src[srcTypeName]) {
                            lib.src[srcTypeName].forEach(function(srcName) {
                                if(srcName.startsWith('~/')) {
                                    srcName = srcName.replace('~/', srcTypeName === 'js' ? 'src/js/' : srcTypeName === 'less' ? 'src/less/' : 'src/');
                                }
                                if(!src[srcTypeName]) src[srcTypeName] = [];
                                if(src[srcTypeName].indexOf(srcName) < 0) {
                                    src[srcTypeName].push(srcName);
                                }
                            });
                        }
                    });
                }
                if(lib.dpds) {
                    lib.dpds.forEach(function(dpdsName) {
                        if(dpdsName.startsWith(libName) && pkg.lib[dpdsName] && !pkg.lib[dpdsName].thirdpart) {
                            getLibSource(pkg.lib[dpdsName], src, libName);
                        } 
                    });
                }
            };

            eachSection(function(chapter, section, $sectionList) {
                var libName = section.dpds || section.id;
                var pkgLib = pkg.lib[libName];
                if(!pkgLib) {
                    libName = libName + 's';
                    pkgLib = pkg.lib[libName];
                }
                var lib = {
                    code: libName,
                    bundles: {}
                };
                $.each(pkgLibs, function(name, libNames) {
                    if(isInLib(libName, libNames, pkgLib)) {
                        lib.bundles[name] = true;
                    }
                });

                if(pkgLib) {
                    $.extend(lib, pkgLib);

                    if(pkgLib.thirdpart) {
                        lib.thirdpart = true;
                        lib.partUrl = pkgLib.website;
                        lib.pver = pkgLib.pver;
                    }

                    if(!pkgLib.src && pkgLib.dpds) {
                        lib.custom = true;
                        if(!lib.source) {
                            $.each(pkgLib.dpds, function(_, dpdLibName) {
                                var dpdLib = pkg.lib[dpdLibName];
                                if(dpdLib && dpdLib.source) lib.source = dpdLib.source;
                            });
                        }
                    }

                    if(pkgLib.ver) {
                        lib.ver = pkgLib.ver;
                    } else if(lib.custom) {
                        for(var j = 0; j < pkgLib.dpds.length; ++j) {
                            var dpdsLibName = pkgLib.dpds[j];
                            var dpdsLib = pkg.lib[dpdsLibName] || pkg.lib[dpdsLibName + 's'];
                            if(dpdsLib && dpdsLib.ver) {
                                lib.ver = dpdsLib.ver;
                                break;
                            }
                        }
                    }

                    lib.src = {};
                    getLibSource(pkgLib, lib.src, lib.code);

                    lib.srcCount = (lib.src.js ? lib.src.js.length : 0) + (lib.src.less ? lib.src.less.length : 0) + (lib.src.source ? lib.src.source.length : 0);
                    lib.bundlesCount = 0;
                    if(!!lib.bundles.standard) lib.bundlesCount++;
                    if(!!lib.bundles.lite) lib.bundlesCount++;
                    if(!!lib.bundles.seperate) lib.bundlesCount++;
                    if(lib.code === 'theme') lib.bundlesCount++;
                }

                section.lib = lib;
                section.isNew = section.version === pkg.version;
                section.isUpdate = section.update === pkg.version;
                
                if(isNewRelease) {
                    $('#section-' + section.chapter + '-' + section.id).toggleClass('section-update', section.isUpdate).toggleClass('section-new', section.isNew);
                }
            });
        });
    };

    var displayPkgLibTable = function($table) {
        if(!$table.length) return;
        loadPackage(function(data) {
            var $tbody = $('<tbody></tbody>');

            var getChildCompsList = function(val) {
                return data.lib[val].name;
            };
            var $tr, $td, totalCount = 0;
            $.each(data.lib, function(itemName, item) {
                if(item.hidden) return;

                var childComps = '', isZUI = false;
                if(!item.src && item.dpds) {
                    var childList = getItemList(data.lib, item.dpds, null, true, true);
                    childComps = '包含：';
                    childComps += $.map(childList, getChildCompsList).join('、');
                    item.merged = true;
                } else {
                    totalCount++;
                }

                $tr = $('<tr/>');

                $td = $('<td/>');
                $td.attr('title', item.desc);
                $td.html('<strong>' + item.name + '</strong> (' + itemName + ((item.pver) ? (' v' + item.pver) : '') + ')');
                $tr.append($td);

                $.each(pkgLibs, function(idx, sLib) {
                    $td = $('<td class="text-center"/>');
                    if(sLib.indexOf(itemName) > -1) {
                        $td.addClass('success').html('<i class="text-success icon-ok"></i>');
                    } else {
                        $td.html('<i class="text-muted icon-remove"></i>');
                    }
                    $tr.append($td);
                });

                $td = $('<td/>');
                if(item.source) {
                    var $a = $('<a data-toggle="tooltip"/>').attr({
                        target: '_blank',
                        href: item.website || item.project || (item.source === 'Bootstrap' ? 'http://getbootstrap.com/' : '###')
                    }).text(item.source);
                    $td.append($a);
                } else if(item.merged) {
                    $td.append('<span class="text-muted">(合并组件)</span>');
                } else {
                    isZUI = true;
                    $td.append('<span data-toggle="tooltip" title="License: MIT">ZUI</span>');
                }
                $tr.append($td);

                $tr.append('<td>' + (item.source === 'Bootstrap' ? 'MIT' : (isZUI ? 'MIT' : (item.license || ''))) + '</td>');

                $td = $('<td/>');
                $td.html(item.ver ? (' v' + item.ver + '+') : childComps);
                $tr.append($td);

                $tbody.append($tr);
            });
            $table.find('tbody').remove();
            $table.append($tbody);
            $table.datatable({
                rowHover: false,
                fixedHeaderOffset: 200
            });
            $('.components-count').text(totalCount);
        });
    };

    var initCopyable = function() {
        if(!$.zui.browser.isIE() || $.zui.browser.ie > 8) {
            $copyCodeBtn = $('#copyCodeBtn');
            var clipboard = new window.Clipboard($copyCodeBtn.get(0));
            clipboard.on('success', function(e) {
                $('#copyCodeTip').addClass('tooltip-success');
                $copyCodeBtn.tooltip('show', '已复制 <i class="icon icon-ok"></i>');
                e.clearSelection();
            });

            clipboard.on('error', function(e) {
                $('#copyCodeTip').addClass('tooltip-warning');
                $copyCodeBtn.tooltip('show', isTouchScreen ? '你的浏览器不支持直接复制，请自行选择并复制。' : '按 <strong>Ctrl+C</strong> 完成复制');
            });

            $copyCodeBtn.on('hide.zui.tooltip', function() {
                $('#copyCodeTip').removeClass('tooltip-success tooltip-warning');
            });

            $(document).on('mouseenter', 'pre.prettyprint, .copyable', function() {
                var $copyable = $(this);
                var $copyableTarget = $copyable.children('code, .linenums, .copyable-target');
                if(!$copyableTarget.length) return;

                if(!$copyableTarget.attr('id')) {
                    $copyableTarget.attr('id', 'code-' + $.zui.uuid())
                }
                $copyable.prepend($copyCodeBtn);
                $copyCodeBtn.attr('data-clipboard-target', '#' + $copyableTarget.attr('id'));
                $copyable.one('mouseleave', function() {
                    $copyCodeBtn.detach();
                });
            });
        }
    };

    var compileThemeVariables = function(theme) {
        if(typeof theme === 'string') theme = docThemes[theme];
        if(theme.variables) {
            theme.variablesLess = '';
            $.each(theme.variables, function(vName, vValue) {
                theme.variablesLess += '@' + vName + ': ' + vValue + ';\n';
            });
        } else if(!theme.variablesLess) {
            theme.variablesLess = '';
        }
        return theme;
    };

    var compileTheme = function(theme, options, callback) {
        if(typeof theme === 'string') theme = docThemes[theme];
        if(typeof options === 'function') {
            callback = options;
            options = null;
        }

        if(!theme.variablesLess) {
            compileThemeVariables(theme);
        }
        if(!theme.imports) {
            theme.imports = ["src/less/basic/colorset.less",
                "src/less/basic/variables.less",
                "src/less/basic/mixins.less",
                "src/less/theme.less",
                "src/less/controls/icons.variables.less",
                "src/less/doc.less"];
        }
        var lessCode = $.isArray(theme.imports) ? theme.imports.map(function(i) {
            return '@import "' + i + '";'; 
        }).join('\n') : theme.imports;
        lessCode += theme.variablesLess + (theme.lessCode || '');
        window.less.render(lessCode, $.extend({
          compress: true
        }, options), function (e, style) {
            callback && callback(style, theme);
        });
    };

    var updateThemeStyle = function(cssText) {
        var styleTag = document.getElementById('themeStyle');
        if (styleTag.styleSheet){
          styleTag.styleSheet.cssText = cssText;
        } else {
          styleTag.innerHTML = cssText;
        }
    };

    var changeTheme = function(theme, callback) {
        var $body = $('body');
        var readyChangeTheme = function(css) {
            updateThemeStyle(css || '');
            callback && callback(theme);
            $body.removeClass('theme-changing');
            if(css) $.zui.store.set('doc_theme', theme);
            else $.zui.store.remove('doc_theme');
        };

        if(!theme || theme === 'default' || theme.name === 'default') {
            readyChangeTheme();
            return;
        }
        if(typeof theme === 'string') theme = docThemes[theme];
        
        if($body.hasClass('theme-changing')) return false;
        $body.addClass('theme-changing');

        if(theme.css) {
            readyChangeTheme(theme.css);
        } else {
            setTimeout(function() {
                compileTheme(theme, null, function(style) {
                    if(style) {
                        theme.css = style.css;
                    }
                    readyChangeTheme(style ? style.css : '');
                });
            }, 500);
        }

        return true;
    };

    var initTheme = function() {
        $.each(docThemes, function(tName, t) {
            if(!t.name) t.name = tName;
        });
        var savedTheme = $.zui.store.get('doc_theme');
        if(savedTheme) {
            changeTheme(savedTheme)
        }
    };

    var initChangeView = function() {
        var changePageView = function(pageViewLayout, notSave) {
            if(pageViewLayout) {
                if(!notSave) $.zui.store.set('pageViewLayout', pageViewLayout);
            } else {
                pageViewLayout = $.zui.store.get('pageViewLayout');
            }
            var isDoubleView = pageViewLayout === 'double' && $(window).width() >= 1200;
            $('body').toggleClass('view-double', isDoubleView);
        };

        var $modal = $('#changeViewModal');
        var hoverEnable = false, isDoubleView;
        $modal.on('show.zui.modal', function() {
            isDoubleView = $('body').hasClass('view-double');
            hoverEnable = true;
            $modal.find('.view-option.active').removeClass('active');
            $modal.find('.view-option-' + (isDoubleView ? 'double' : 'single')).addClass('active');
        }).on('click', '.view-option', function() {
            hoverEnable = false;
            changePageView($(this).hasClass('view-option-double') ? 'double' : 'single');
            $modal.modal('hide');
        }).on('mouseenter', '.view-option', function() {
            if(hoverEnable) {
               changePageView($(this).hasClass('view-option-double') ? 'double' : 'single');
            }
        }).on('mouseleave', '.view-option', function() {
            if(hoverEnable) {
               changePageView(isDoubleView ? 'double' : 'single');
            }
        });

        changePageView();
    };

    var init = function() {
        documentTitle = window.document.title;

        var stopPropagation = function(e) {
            e.stopPropagation();
        }

        $window = $(window);
        $body = $('body');
        $navbar = $('#navbar');
        $grid = $('#grid');
        $header = $('#header');
        $page = $('#page');
        $pageHeader = $('#pageHeader');
        $pageAttrs = $('#pageAttrs');
        $pageLoader = $('#pageLoader');
        $pageContent = $('#pageContent');
        $chapters = $grid.find('.chapter');
        $queryInput = $('#searchInput');
        $chapterHeadings = $grid.find('.chapter-heading');
        $sectionTemplate = $('#sectionTemplate').attr('id', null);
        $pageBody = $('#pageBody');
        $.each(chapters, function(chapterId, chapter) {
            chapterId = chapterId.toLowerCase();
            chapter.$ = $('#chapter-' + chapterId);
            chapter.id = chapterId;
            chapter.$sections = $('#sections-' + chapterId);
        });

        bestPageWidth = $grid.children('.container').outerWidth();

        // check storage
        storageEnable = $.zui.store && $.zui.store.enable;

        // Setup ajax
        $.ajaxSetup({
            cache: false
        });

        // Load index.json
        loadData(INDEX_JSON, function(data, type) {
            var firstLoad = !sectionsShowed;

            displaySection(data);

            if(firstLoad) {
                var q = getQueryString('q');
                if(q) {
                    setTimeout(function() {
                        query(q);
                    }, 300);
                }

                var hash = window.location.hash
                if(hash) {
                    openPageUrl(hash);
                } else {
                    $queryInput.focus();
                }

                initPackage();
            }

            $('.doc-version').text(data.version);
        });

        // Bind events
        var oldActivePreivewId;
        var cancelClickInPage;
        $(document).on('click', function(e) {
            if(cancelClickInPage) {
                cancelClickInPage = false;
                return;
            }
            if(!$body.attr('data-query')) {
                chooseSection();
            }
        }).on('click', 'a[href^="#"]', function() {
            openPageUrl($(this).attr('href'));
        });
        $page.on('click', function(e) {
            cancelClickInPage = true;
        });
        $grid.on('click', '.card-heading', function(e) {
            var $card = $(this).closest('.card');
            if(!$card.hasClass('choosed')) {
                chooseSection($card, true);
            } else {
                $card.toggleClass('open');
            }
            stopPropagation(e);
        }).on('click', '.chapter-heading > h4 > .name', function() {
            $queryInput.focus().val('@' + $(this).closest('.chapter').data('id')).change();
        }).on('click', '.card', function(e) {
            chooseSection($(this), true);
            stopPropagation(e);
        }).on('click', '.card-heading > h5 > .name, .card-heading > .icon', function(e) {
            openSection($(this).closest('.section'));
            stopPropagation(e);
        }).on('click', '.topics > li > a', function(e) {
            var $a = $(this);
            openPageUrl($a.attr('href'));
            e.preventDefault();
            stopPropagation(e);
        }).on('mouseenter', '.card-heading > h5 > .name, .card-heading > .icon', function() {
            $(this).closest('.card-heading').addClass('hover');
        }).on('mouseleave', '.card-heading > h5 > .name, .card-heading > .icon', function() {
            $(this).closest('.card-heading').removeClass('hover');
        }).on('mouseenter', '#section-control-icon .section-search > ul > li > a', function() {
            oldActivePreivewId = $('#section-control-icon').data('preview');
            chooseIcon($(this).closest('li'));
        }).on('mouseleave', '#section-control-icon .section-search > ul > li > a', function() {
            if(oldActivePreivewId) {
                chooseIcon($('#control-icon-' + oldActivePreivewId));
            }
        }).on('click', '#section-control-icon .section-search > ul > li > a', function() {
            oldActivePreivewId = $(this).closest('li').data('id');
        });

        $pageContent.on('click', 'section > header > h3', function() {
            togglePageSection($(this).closest('section'));
        }).on('mouseenter', 'section > header > h3', function() {
            $(this).closest('section').addClass('hover');
        }).on('mouseleave', 'section > header > h3', function() {
            $(this).closest('section').removeClass('hover');
        });
        $page.on('click', '#pageTogger', function() {
            togglePageSection();
        });

        $pageHeader.on('click', '.path-close-btn', function() {
            closePage();
        });

        var scrollHeight = $('#navbar').outerHeight();
        var lastScrollTop;
        $window.on('scroll', function(e) {
            if($body.hasClass('layout-classic')) return;
            var isScrollAnimating = $body.data('isScrollAnimating');
            if(isScrollAnimating) {
                $window.scrollTop(0);
                return;
            }
            lastScrollTop = $window.scrollTop();
            if(lastScrollTop > scrollHeight && !$body.hasClass('compact-mode')) {
                toggleCompactMode(true);
            }/* else if(!$body.hasClass('page-show')) {
                $header.toggleClass('with-shadow', lastScrollTop > 20);
            }*/
        }).on('keydown', function(e) {
            var code = e.which;
            var isPageNotShow = !$body.hasClass('page-show');
            var isDoubleView = $body.hasClass('view-double');
            var isInputFocus = $body.hasClass('input-query-focus');
            if(code === 9) { // Tab
                if(!$body.hasClass('input-query-focus')) {
                    $queryInput.focus();
                    e.preventDefault();
                }
            } else if(code === 13) { // Enter
                if((isDoubleView || isPageNotShow) && isChoosedSection()) {
                    openSection();
                }
            } else if(code === 27) { // Esc
                if($('body>.modal-backdrop').length) return;
                if(!isDoubleView && !closePage()) {
                    if(!isInputFocus) {
                        $queryInput.focus();
                    }
                    lastQueryString = '';
                    query();
                }
            } else if(code === 37) { // Left
                if(!isDoubleView){
                    chooseLeftSection();
                    e.preventDefault();
                }
            } else if(code === 39) { // Right
                if(!isDoubleView){
                    chooseRightSection();
                    e.preventDefault();
                }
            } else if(code === 38) { // Up
                if(isPageNotShow || isDoubleView) {
                    choosePrevSection();
                    e.preventDefault();
                } else {
                    scrollToThis($pageBody, 'up');
                }
            } else if(code === 40) { // Down
                if(isPageNotShow || isDoubleView) {
                    chooseNextSection();
                    e.preventDefault();
                }
            }
        });

        // $pageBody.on('scroll', function(e) {
        //     $page.toggleClass('with-shadow', $pageBody.scrollTop() > 20);
        // });

        $search = $('#search');

        $queryInput.focus().on('change keyup paste input propertychange', function() {
            var val = $queryInput.val();
            if(val === lastQueryString) return;
            lastQueryString = val;
            $search.toggleClass('with-query-text', val.length > 0);
            clearTimeout($queryInput.data(LAST_QUERY_ID));
            $queryInput.data(LAST_QUERY_ID, setTimeout(function() {
                if(lastQueryString === $queryInput.data('queryString')) return;
                query(lastQueryString);
            }, 150));
        }).on('focus', function() {
            $body.addClass('input-query-focus');
            if($queryInput.val() && !$sections.filter('.open').length) {
                chooseSection($sections.filter('.show:first'));
            }
        }).on('blur', function() {
            $body.removeClass('input-query-focus');
        }).on('click', stopPropagation);

        $('#searchHelpBtn').on('click', function(e) {
            if($search.hasClass('with-query-text')) {
                lastQueryString = '';
                query();
                $queryInput.focus();
                $search.removeClass('with-query-text');
            } else {
                // query('#help');
                openSection(['resource', 'help']);
                $(this).blur();
            }
            stopPropagation(e);
        });

        $('#navbar .navbar-brand').on('click', function(e) {
            if($body.hasClass('page-show')) {
                closePage();
                stopPropagation(e);
                e.preventDefault();
            } else if($body.hasClass('compact-mode-in')) {
                $window.scrollTop(0);
                toggleCompactMode(false);
                stopPropagation(e);
                e.preventDefault();
            }
        });

        if(debug) {
            $('#pageReloadBtn').on('click', function() {
                loadPage(null, '!refresh', true);
            });
        }

        initChangeView();

        // init code copy function
        initCopyable();

        // init theme
        initTheme();

        if(!isTouchScreen) {
            // init tooltip
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }
    };

    init();

    $.doc = {
        query: query,
        themes: docThemes,
        changeTheme: changeTheme,
        compileTheme: compileTheme,
        compileThemeVariables: compileThemeVariables,
        openSection: openSection,
        closePage: closePage,
        loadData: loadData,
        stopPageLoading: stopPageLoading,
        displayPkgLibTable: displayPkgLibTable,
        pkg: zuiPkg
    };
}(window, jQuery));

