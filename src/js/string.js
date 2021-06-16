/* ========================================================================
 * ZUI: string.js
 * String Polyfill.
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */

(function() {
    'use strict';

    /**
     * Format string with argument list or object
     * @param  {String}             str
     * @param  {object | arguments} args
     * @return {String}
     */
    var formatString = function(str, args) {
        if(arguments.length > 1) {
            var reg;
            if(arguments.length == 2 && typeof(args) == "object") {
                for(var key in args) {
                    if(args[key] !== undefined) {
                        reg = new RegExp("({" + key + "})", "g");
                        str = str.replace(reg, args[key]);
                    }
                }
            } else {
                for(var i = 1; i < arguments.length; i++) {
                    if(arguments[i] !== undefined) {
                        reg = new RegExp("({[" + (i - 1) + "]})", "g");
                        str = str.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return str;
    };

    /**
     * Judge the string is a integer number
     *
     * @param {String} str
     * @access public
     * @return {Boolean}
     */
    var isNum = function(str) {
        if(str !== null) {
            var r, re;
            re = /\d*/i;
            r = str.match(re);
            return(r == str) ? true : false;
        }
        return false;
    };

    var exports = {
        formatString: formatString,
        string: {
            format: formatString,
            isNum: isNum,
        }
    };

    if (window.$ && window.$.zui) {
        $.zui(exports);
    } else {
        window.stringHelper = exports.string;
    }

    if (!window.noStringPrototypeHelper) {
        /**
         * Format string with argument list or object
         * @param  {object | arguments} args
         * @return {String}
         */
        if(!String.prototype.format) {
            String.prototype.format = function() {
                var args = [].slice.call(arguments);
                args.unshift(this);
                return formatString.apply(this, args);
            };
        }

        /**
         * Judge the string is a integer number
         *
         * @access public
         * @return bool
         */
        if(!String.prototype.isNum) {
            String.prototype.isNum = function() {
                return isNum(this);
            };
        }

        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function(search, this_len) {
                if (this_len === undefined || this_len > this.length) {
                    this_len = this.length;
                }
                return this.substring(this_len - search.length, this_len) === search;
            };
        }

        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
        if (!String.prototype.startsWith) {
            Object.defineProperty(String.prototype, 'startsWith', {
                value: function(search, pos) {
                    pos = !pos || pos < 0 ? 0 : +pos;
                    return this.substring(pos, pos + search.length) === search;
                }
            });
        }

        if(!String.prototype.includes) {
            String.prototype.includes = function() {
                return String.prototype.indexOf.apply(this, arguments) !== -1;
            };
        }
    }
})();
