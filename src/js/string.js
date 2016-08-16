/* ========================================================================
 * ZUI: string.js
 * String Polyfill.
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function() {
    'use strict';

    /**
     * Format string with argument list or object
     * @param  {object | arguments} args
     * @return {String}
     */
    if(!String.prototype.format) {
        String.prototype.format = function(args) {
            var result = this;
            if(arguments.length > 0) {
                var reg;
                if(arguments.length == 1 && typeof(args) == "object") {
                    for(var key in args) {
                        if(args[key] !== undefined) {
                            reg = new RegExp("({" + key + "})", "g");
                            result = result.replace(reg, args[key]);
                        }
                    }
                } else {
                    for(var i = 0; i < arguments.length; i++) {
                        if(arguments[i] !== undefined) {
                            reg = new RegExp("({[" + i + "]})", "g");
                            result = result.replace(reg, arguments[i]);
                        }
                    }
                }
            }
            return result;
        };
    }

    /**
     * Judge the string is a integer number
     *
     * @access public
     * @return bool
     */
    if(!String.prototype.isNum) {
        String.prototype.isNum = function(s) {
            if(s !== null) {
                var r, re;
                re = /\d*/i;
                r = s.match(re);
                return(r == s) ? true : false;
            }
            return false;
        };
    }

})();

