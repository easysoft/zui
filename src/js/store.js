/* ========================================================================
 * ZUI: storeb.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function(window, $) {
    'use strict';

    var lsName = 'localStorage';
    var storage = window[lsName],
        old = window.store,
        pageName = 'page_' + window.location.pathname + window.location.search;

    /* The Store object */
    var Store = function() {
        this.slience = true;
        this.enable = (lsName in window) && window[lsName] && window[lsName].setItem;
        this.storage = storage;

        this.page = this.get(pageName, {});
    };

    /* Save page data */
    Store.prototype.pageSave = function() {
        if($.isEmptyObject(this.page)) {
            this.remove(pageName);
        } else {
            var forDeletes = [],
                i;
            for(i in this.page) {
                var val = this.page[i];
                if(val === null)
                    forDeletes.push(i);
            }
            for(i = forDeletes.length - 1; i >= 0; i--) {
                delete this.page[forDeletes[i]];
            }
            this.set(pageName, this.page);
        }
    };

    /* Remove page data item */
    Store.prototype.pageRemove = function(key) {
        if(typeof this.page[key] != 'undefined') {
            this.page[key] = null;
            this.pageSave();
        }
    };

    /* Clear page data */
    Store.prototype.pageClear = function() {
        this.page = {};
        this.pageSave();
    };

    /* Get page data */
    Store.prototype.pageGet = function(key, defaultValue) {
        var val = this.page[key];
        return(defaultValue !== undefined && (val === null || val === undefined)) ? defaultValue : val;
    };

    /* Set page data */
    Store.prototype.pageSet = function(objOrKey, val) {
        if($.isPlainObject(objOrKey)) {
            $.extend(true, this.page, objOrKey);
        } else {
            this.page[this.serialize(objOrKey)] = val;
        }
        this.pageSave();
    };

    /* Check enable status */
    Store.prototype.check = function() {
        if(!this.enable) {
            if(!this.slience) throw new Error('Browser not support localStorage or enable status been set true.');
        }
        return this.enable;
    };

    /* Get length */
    Store.prototype.length = function() {
        if(this.check()) {
            return storage.getLength ? storage.getLength() : storage.length;
        }
        return 0;
    };

    /* Remove item with browser localstorage native method */
    Store.prototype.removeItem = function(key) {
        storage.removeItem(key);
        return this;
    };

    /* Remove item with browser localstorage native method, same as removeItem */
    Store.prototype.remove = function(key) {
        return this.removeItem(key);
    };

    /* Get item value with browser localstorage native method, and without deserialize */
    Store.prototype.getItem = function(key) {
        return storage.getItem(key);
    };

    /* Get item value and deserialize it, if value is null and defaultValue been given then return defaultValue */
    Store.prototype.get = function(key, defaultValue) {
        var val = this.deserialize(this.getItem(key));
        if(typeof val === 'undefined' || val === null) {
            if(typeof defaultValue !== 'undefined') {
                return defaultValue;
            }
        }
        return val;
    };

    /* Get item key by index and deserialize it */
    Store.prototype.key = function(index) {
        return storage.key(index);
    };

    /* Set item value with browser localstorage native method, and without serialize filter */
    Store.prototype.setItem = function(key, val) {
        storage.setItem(key, val);
        return this;
    };

    /* Set item value, serialize it if the given value is not an string */
    Store.prototype.set = function(key, val) {
        if(val === undefined) return this.remove(key);
        this.setItem(key, this.serialize(val));
        return this;
    };

    /* Clear all items with browser localstorage native method */
    Store.prototype.clear = function() {
        storage.clear();
        return this;
    };

    /* Iterate all items with callback */
    Store.prototype.forEach = function(callback) {
        for(var i = storage.length - 1; i >= 0; i--) {
            var key = storage.key(i);
            callback(key, this.get(key));
        }
        return this;
    };

    /* Get all items and set value in an object. */
    Store.prototype.getAll = function() {
        var all = {};
        this.forEach(function(key, val) {
            all[key] = val;
        });

        return all;
    };

    /* Serialize value with JSON.stringify */
    Store.prototype.serialize = function(value) {
        if(typeof value === 'string') return value;
        return JSON.stringify(value);
    };

    /* Deserialize value, with JSON.parse if the given value is not a string */
    Store.prototype.deserialize = function(value) {
        if(typeof value !== 'string') return undefined;
        try {
            return JSON.parse(value);
        } catch(e) {
            return value || undefined;
        }
    };

    $.zui({
        store: new Store()
    });
}(window, jQuery));

