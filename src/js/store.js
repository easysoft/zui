/* Store */
+function(window, $)
{
    "use strict";

    var lsName = 'localStorage';
    var storage = window[lsName],
        old = window['store'],
        pageName = 'page_' + window.location.pathname;

    /* The Store object */
    var Store = function()
    {
        this.slience = true;
        this.disabled = (lsName in window) && window[lsName] && window[lsName]['setItem'];
        this.storage = storage;
        var self = this;

        this.page = this.get(pageName, {});
    };

    /* Save page data */
    Store.prototype.savePage = function()
    {
        if($.isEmptyObject(this.page))
        {
            this.remove(pageName);
        }
        else
        {
            this.set(pageName, this.page);
        }
    };

    /* Clear page data */
    Store.prototype.clearPage = function()
    {
        this.page = {};
        this.savePage();
    };

    /* Get page data */
    Store.prototype.getPage = function(key, defaultValue)
    {
        var val = this.page[key];
        return (defaultValue !== undefined && val === null) ? defaultValue : val;
    };

    /* Set page data */
    Store.prototype.setPage = function(objOrKey, val)
    {
        if($.isPlanObject(objOrKey))
        {
            $.extend(true, this.page, objOrKey);
        }
        else
        {
            this.page[this.serialize(objOrKey)] = val;
        }
        this.savePage();
    };

    /* Check disabled status */
    Store.prototype.check = function()
    {
        if(this.disabled)
        {
            if(!this.slience) throw new Error('Browser not support localStorage or disabled status been set true.');
        }
        return !this.disabled;
    };

    /* Get length */
    Store.prototype.length = function()
    {
        if(this.check())
        {
            return storage.length;
        }
    };

    /* Remove item with browser localstorage native method */
    Store.prototype.removeItem = function(key)
    {
        storage.removeItem(key);
    };

    /* Remove item with browser localstorage native method, same as removeItem */
    Store.prototype.remove = function(key)
    {
        this.removeItem(key);
    };

    /* Get item value with browser localstorage native method, and without deserialize */
    Store.prototype.getItem = function(key)
    {
        return storage.getItem(key);
    };

    /* Get item value and deserialize it, if value is null and defaultValue been given then return defaultValue */
    Store.prototype.get = function(key, defaultValue)
    {
        var val = this.deserialize(this.getItem(key));
        return (defaultValue !== undefined && val === null) ? defaultValue : val;
    };

    /* Get item value by key and deserialize it */
    Store.prototype.key = function(key)
    {
        return this.deserialize(storage.key(key));
    };

    /* Set item value with browser localstorage native method, and without serialize filter */
    Store.prototype.setItem = function(key, val)
    {
        storage.setItem(key, val);
    };

    /* Set item value, serialize it if the given value is not an string */
    Store.prototype.set = function(key, val)
    {
        if(val === undefined) return this.remove(key);
        this.setItem(key, this.serialize(val));
    };

    /* Clear all items with browser localstorage native method */
    Store.prototype.clear = function()
    {
        storage.clear(key);
    };

    /* Iterate all items with callback */
    Store.prototype.forEach = function(callback)
    {
        for(var i = 0; i < storage.length; i++)
        {
            var key = storage.key(i);
            callback(key, store.get(key));
        }
    };

    /* Get all items and set value in an object. */
    Store.prototype.getAll = function(callback)
    {
        var all = {};
        this.forEach(function(key, val)
        {
            all[key] = val;
        });

        return all;
    };

    /* Serialize value with JSON.stringify */
    Store.prototype.serialize = function(value)
    {
        if(typeof value === 'string') return value;
        return JSON.stringify(value);
    };

    /* Deserialize value, with JSON.parse if the given value is not a string */
    Store.prototype.deserialize = function(value)
    {
        if(typeof value !== 'string') return undefined;
        try
        {
            return JSON.parse(value);
        }
        catch(e)
        {
            return value || undefined;
        }
    };

    var store = new Store();

    window.store = store;

    window.store.noConflict = function()
    {
        window.store = old;
        return store;
    }
}(window, jQuery);
