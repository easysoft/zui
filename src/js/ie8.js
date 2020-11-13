/*
    * Function.prototype.bind() polyfill for ie8
    * see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    */
if (!Function.prototype.bind) (function(){
    var ArrayPrototypeSlice = Array.prototype.slice;
    Function.prototype.bind = function(otherThis) {
    if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
            baseArgs.length = baseArgsLength; // reset to default base arguments
            baseArgs.push.apply(baseArgs, arguments);
            return fToBind.apply(
                fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
            );
        };

    if (this.prototype) {
        // Function.prototype doesn't have a prototype property
        fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
    };
})();

/**
 *  Array polyfill for ie8: Calls a function for each element in the array.
 */
if(!Array.prototype.forEach) {
    Array.prototype.forEach = function(fun /*, thisp*/ ) {
        var len = this.length;
        if(typeof fun != 'function')
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
 * Array polyfill for ie8: Judge an object is an real array
 */
if(!Array.isArray) {
    Array.isArray = function(obj) {
        return Object.toString.call(obj) === '[object Array]';
    };
}
