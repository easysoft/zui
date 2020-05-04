/* ========================================================================
 * ZUI: jquery.extensions.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, window, undefined) {
    'use strict';

    /* Check jquery */
    if(typeof($) === 'undefined') throw new Error('ZUI requires jQuery');

    // ZUI shared object
    if(!$.zui) $.zui = function(obj) {
        if($.isPlainObject(obj)) {
            $.extend($.zui, obj);
        }
    };

    var MOUSE_BUTTON_CODES = {
        all: -1,
        left: 0,
        middle: 1,
        right: 2
    };

    var lastUuidAmend = 0;
    $.zui({
        uuid: function(asNumber) {
            var uuidNumber = (Date.now() - 1580890015292) * 10e7 + Math.floor(Math.random() * 10e4) * 10e2 + (lastUuidAmend++) % 10e2;
            return asNumber ? uuidNumber : uuidNumber.toString(36);
        },

        callEvent: function(func, event, proxy) {
            if($.isFunction(func)) {
                if(proxy !== undefined) {
                    func = $.proxy(func, proxy);
                }
                var result = func(event);
                if(event) event.result = result;
                return !(result !== undefined && (!result));
            }
            return 1;
        },

        strCode: function(str) {
            var code = 0;
            if(str && str.length) {
                for(var i = 0; i < str.length; ++i) {
                    code += i * str.charCodeAt(i);
                }
            }
            return code;
        },

        getMouseButtonCode: function(mouseButton) {
            if(typeof mouseButton !== 'number') {
                mouseButton = MOUSE_BUTTON_CODES[mouseButton];
            }
            if(mouseButton === undefined || mouseButton === null) mouseButton = -1;
            return mouseButton;
        },

        /**
         * default language name
         * @type {string}
         */
        defaultLang: 'en',

        /**
         * Get client language name
         * @return {string}
         */
        clientLang: function() {
            var lang;
            var config = window.config;
            if(typeof(config) != 'undefined' && config.clientLang) {
                lang = config.clientLang;
            }
            if(!lang) {
                var hl = $('html').attr('lang');
                lang = hl ? hl : (navigator.userLanguage || navigator.userLanguage || $.zui.defaultLang);
            }
            return lang.replace('-', '_').toLowerCase();
        },

        /**
         * @type {object}
         * @example
         * {
         *      'zui.pager': {
         *          'zh-cn': {
         *              prev: '上一页',
         *          }
         *      }
         * }
         */
        langDataMap: {},

        /**
         * Add lang data for components
         * @param {string} [langName]
         * @param {string} [componentName]
         * @param {object} data
         * @example
         * // Add lang data to specify language and specify component
         * $.zui.addLangData('zh-cn', 'zui.pager', {
         *      prev: '上一页',
         *      next: '下一页',
         * });
         *
         * // Add lang data to specify language and multiple components
         * $.zui.addLangData('zh-cn', {
         *      'zui.pager': {
         *          prev: '上一页',
         *          next: '下一页',
         *      },
         *      'chosen': {
         *      }
         * });
         *
         * // Add lang data to multiple languages and multiple components
         * $.zui.addLangData({
         *      'zh-cn': {
         *          'zui.pager': {
         *              prev: '上一页',
         *              next: '下一页',
         *          },
         *          'chosen': {
         *          }
         *      },
         *      'zh-tw': {
         *          'zui.pager': {
         *              prev: '上一页',
         *              next: '下一页',
         *          }
         *      }
         * });
         */
        addLangData: function(langName, componentName, data) {
            var langData = {};
            if (data && componentName && langName) {
                langData[componentName] = {};
                langData[componentName][langName] = data;
            } else if (langName && componentName && !data) {
                data = componentName;
                $.each(data, function(comName) {
                    langData[comName] = {};
                    langData[comName][langName] = data[comName];
                });
            } else if (langName && !componentName && !data) {
                $.each(data, function(theLangName) {
                    var comsData = data[theLangName];
                    $.each(comsData, function(comName) {
                        if (!langData[comName]) {
                            langData[comName] = {};
                        }
                        langData[comName][theLangName] = comsData[comName];
                    });
                });
            }
            $.extend(true, $.zui.langDataMap, langData);
        },

        /**
         * Get lang data
         * @example
         * $.zui.getLangData('zui.pager');
         *
         * $.zui.getLangData('zui.pager', 'zh-cn');
         *
         * $.zui.getLangData('zui.pager', 'zh-cn', {
         *      prev: '上一页',
         *      next: '下一页',
         * });
         */
        getLangData: function(componentName, langName, initialData) {
            if (!arguments.length) {
                return $.extend({}, $.zui.langDataMap);
            }
            if (arguments.length === 1) {
                return $.extend({}, $.zui.langDataMap[componentName]);
            }
            if (arguments.length === 2) {
                var comData = $.zui.langDataMap[componentName];
                if (comData) {
                    return langName ? comData[langName] : comData;
                }
                return {};
            }
            if (arguments.length === 3) {
                langName = langName || $.zui.clientLang();
                var comData = $.zui.langDataMap[componentName];
                var langData = comData ? comData[langName] : {};
                return $.extend(true, {}, initialData[langName] || initialData.en || initialData.zh_cn, langData);
            }
            return null;
        },

        lang: function() {
            if (arguments.length && $.isPlainObject(arguments[arguments.length - 1])) {
                return $.zui.addLangData.apply(null, arguments);
            }
            return $.zui.getLangData.apply(null, arguments);
        },
    });

    $.fn.callEvent = function(name, event, model) {
        var $this = $(this);
        var dotIndex = name.indexOf('.zui.');
        var shortName = dotIndex < 0 ? name : name.substring(0, dotIndex);
        var e = $.Event(shortName, event);

        if((model === undefined) && dotIndex > 0) {
            model = $this.data(name.substring(dotIndex + 1));
        }

        if(model && model.options) {
            var func = model.options[shortName];
            if($.isFunction(func)) {
                e.result = $.zui.callEvent(func, e, model);
            }
        }
        $this.trigger(e);
        return e;
    };

    $.fn.callComEvent = function(component, eventName, params) {
        if (params !== undefined && !$.isArray(params)) {
            params = [params];
        }
        var $this = this;
        var result;
        $this.trigger(eventName, params);

        var eventCallback = component.options[eventName];
        if (eventCallback) {
            result = eventCallback.apply(component, params);
        }
        return result;
    };
}(jQuery, window, undefined));
