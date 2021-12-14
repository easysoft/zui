(function() {
    'use strict';
    var useRaf = typeof window.requestAnimationFrame === 'function';

    function asap(callback, delayTime) {
        if (useRaf && !delayTime) {
            return requestAnimationFrame(callback);
        }
        return setTimeout(callback, delayTime || 0);
    }

    function clearAsap(id) {
        if (useRaf) {
            return cancelAnimationFrame(id);
        }
        clearTimeout(id);
    }

    $.zui({asap: asap, clearAsap: clearAsap});
}());
