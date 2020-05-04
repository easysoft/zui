/* ========================================================================
 * ZUI: picker.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2020 cnezsoft.com; Licensed MIT
 * ======================================================================== */

/**
 * TODO:
 *  * 实现快捷键选择
 *  * 实现兼容 Chosen 模式
 *  * 实现更加友好的搜索关键字提示
 *  * 实现滚动页面自动调整位置功能
 *  * 实现显示下拉菜单后自动滚动到选中项位置的功能
 *  * 允许对多选结果拖拽排序
 *  * 实现加载远程结果
 *  * 实现更友好的状态提示功能
 */

(function($, window, document) {
    'use strict';

    var NAME = 'zui.picker'; // model name

    var DEFAULTS = {
        lang: null,
        remote: null, // {url: '/picker/fetch?search={search}', method: 'GET'} or '/picker/fetch?search={search}&limit={limit}' or function({search, limit}, callback),
        remoteConverter: null, // function(responseData, textStatus, jqXHR, picker)
        remoteOnly: false,
        onRemoteError: null, // function()
        textKey: 'text',
        valueKey: 'value',
        keysKey: 'keys',
        multi: 'auto', // true, false, 'auto'
        formItem: 'auto',
        list: null, // [{text: 'Apple', value: 'apple', keys: 'fruit foods'}, {text: 'Banana', value: 'banana', keys: 'fruit foods'}] or 'Apple,Banana' or [['Apple', 'apple', 'fruit foods'], ['Banana', 'banana', 'fruit foods']] or function({search, limit})
        allowSingleDeselect: null,
        hideMultiSelectedOption: false,
        autoSelectFirst: false,
        optionItemFormatter: null, // function($item, picker);
        maxSelectedCount: 0, // 0 = Infinity
        maxListCount: 50, // 0 = Infinity
        searchValueKey: true,
        emptyResultHint: null,
        emptySearchResultHint: null,
        accurateSearchHint: null,
        remoteErrorHint: null,
        placeholder: null,
        maxDropHeight: 250,
        dropDirection: 'auto',
        dropWidth: '100%', // 'auto', '100%', '500px',
        maxAutoDropWidth: 450,
        multiValueSplitter: ',',
        searchDelay: 200,
        fixLabelFor: true,
        // defaultValue: null,
        onSelect: null, // function(selectedId, selectedItem)
    };

    var LANG = {
        zh_cn: {
            emptyResultHint: '没有可选项',
            emptySearchResultHint: '没有找到 “{0}”',
            accurateSearchHint: '请提供更多关键词缩小匹配范围',
            remoteErrorHint: '无法从服务器获取结果 - {0}',
        },
        zh_tw: {
            emptyResultHint: '沒有可選項',
            emptySearchResultHint: '沒有找到 “{0}”',
            accurateSearchHint: '請提供更多關鍵詞縮小匹配範圍',
            remoteErrorHint: '無法從服務器獲取結果 - {0}',
        },
        en: {
            emptyResultHint: 'No options',
            emptySearchResultHint: 'Cannot found "{0}"',
            accurateSearchHint: 'Suggest to provide more keywords',
            remoteErrorHint: 'Unable to get result from server: {0}',
        }
    };

    // The picker model class
    var Picker = function(element, options) {
        var that = this;
        that.name = NAME;
        that.id = 'pk_' + $.zui.uuid();
        that.$ = $(element);

        // Options
        options = that.options = $.extend({}, Picker.DEFAULTS, this.$.data(), options);

        // Lang
        var defaultLang = $.zui.clientLang ? $.zui.clientLang() : 'en';
        var lang  = options.lang || defaultLang;
        that.lang = $.zui.getLangData ? $.zui.getLangData(NAME, lang, LANG) : (LANG[lang] || LANG[defaultLang]);

        // Form
        var $formItem;
        var formItem = options.formItem;
        var formType;
        var supportFormItems = '.form-item,input[type="hidden"],select,input[type="text"]';
        if (formItem === 'self') {
            $formItem = that.$;
        } else if (formItem === 'auto' || !formItem) {
            if(that.$.is(supportFormItems)) {
                $formItem = that.$;
            } else {
                $formItem = that.$.find(supportFormItems).first();
            }
        } else {
            $formItem = that.$.find(formItem);
        }
        if (!$formItem.length) {
            return console.error && console.error('Cannot found form item for picker.');
        }
        if ($formItem.is('input[type="hidden"]')) formType = 'hidden';
        else if ($formItem.is('select')) formType = 'select';
        else if ($formItem.is('input[type="text"]')) formType = 'text';
        else {
            return console.error && console.error('Unknown form type for picker.');
        }
        that.formType = formType;
        that.$formItem = $formItem.removeClass('picker').hide();
        that.selfFormItem = $formItem.is(that.$);

        // Multi or single
        var multi = options.multi;
        if(!multi || multi === 'auto') {
            multi = formType === 'select' && $formItem.attr('multiple') === 'multiple';
        }
        multi = !!multi;
        that.multi = multi;

        // Init list
        var list = options.list;
        if (list) {
            that.setList(typeof list === 'function' ? list({search: that.search, limit: options.maxListCount}) : list, true);
        } else if (formType === 'select') {
            list = [];
            $formItem.children('option').each(function() {
                var $option = $(this);
                var text = $option.text();
                var val = $option.val();
                if (text.length || val.length) {
                    var item = {};
                    item[options.valueKey] = val;
                    item[options.textKey] = text;
                    item[options.keysKey] = $option.data(options.keysKey);
                    list.push(item);
                }
                if ((options.allowSingleDeselect === null || options.allowSingleDeselect === undefined) && !val.length) {
                    options.allowSingleDeselect = true;
                }
            });
            that.setList(list, true);
        } else {
            that.setList([], true);
        }

        // Create dom elements
        var $container;
        if (!that.selfFormItem && that.$.hasClass('picker')) {
            $container = that.$;
        } else {
            $container = $('<div class="picker" />').insertAfter(that.$);
        }
        $container.addClass('picker').toggleClass('picker-multi', multi).toggleClass('picker-single', !multi);
        var $selections = $container.children('.picker-selections');
        if ($selections.length) {
            $selections.empty();
        } else {
            $selections = $('<div class="picker-selections" />');
        }
        var searchID = that.id + '-search';
        var $search = $('<input id="' + searchID + '" type="text" class="picker-search">').appendTo($selections);
        if (!multi) {
            var $singleSelection = $('<div class="picker-selection picker-selection-single"><span class="picker-selection-text"></span></div>');
            if (options.allowSingleDeselect) {
                $singleSelection.append('<span class="picker-selection-remove"></span>');
            }
            $singleSelection.appendTo($selections);
            that.$singleSelection = $singleSelection;
        }
        $container.append($selections);
        that.$container = $container;
        that.$selections = $selections;
        that.$search = $search;
        that.search = '';

        // Fix label for attribute
        if (options.fixLabelFor) {
            var formItemID = $formItem.attr('id');
            if (formItemID) {
                $('label[for="' + formItemID + '"]').attr('for', searchID);
            }
        }

        // Init values and sync default value
        var defaultValue = options.defaultValue !== undefined ? options.defaultValue : $formItem.val();
        that.setValue(defaultValue);

        // Bind events
        $search.on('focus', function() {
            $container.addClass('picker-focus');
            that.showDropList();
        }).on('blur', function() {
            $container.removeClass('picker-focus');
            // that.hideDropList();
        }).on('input change', function() {
            var searchValue = $search.val();
            if (multi) {
                $search.width(searchValue.length * 14);
            }
            that.tryUpdateList(searchValue);
        });
        if (multi) {
            $selections.on('mousedown', function(e) {
                if (that.dropListShowed) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
            }).on('mouseup', function(e) {
                if (!$(e.target).closest('.picker-selection-remove').length && !that.dropListShowed) {
                    $search.focus();
                }
            });
        }
        $selections.on('click', '.picker-selection-remove', function(e) {
            if (that.multi) {
                var $selection = $(this).closest('.picker-selection');
                that.deselect($selection.attr('data-value'));
            } else {
                that.deselect();
            }
            e.stopPropagation();
        });

        // Bind global event to hide picker drop menu
        $(document).on('mousedown', function(e) {
            var $checkSelf = $(e.target).closest('.picker,.picker-drop-menu');
            if (!$checkSelf.length || (!$checkSelf.is(that.$container) && (!that.$dropMenu || !$checkSelf.is(that.$dropMenu)))) {
                that.hideDropList();
            }
        });

        // Debug
        // console.log('Picker', that);
    };

    Picker.prototype.select = function(value) {
        var that = this;
        if (!that.isSelectedValue(value)) {
            if (that.multi) {
                var values = that.value;
                if (!values) {
                    values = [];
                }
                values.push(value);
                that.setValue(values);
            } else {
                that.setValue(value);
            }
        }
        that.hideDropList();
    };

    Picker.prototype.deselect = function(value) {
        var that = this;
        if (that.multi) {
            if (!that.isSelectedValue(value)) {
                return;
            }
            var values = that.value;
            if (values && values.length) {
                for (var i = 0; i < values.length; ++i) {
                    if (values[i] === value) {
                        values.splice(i, 1);
                        that.setValue(values);
                        break;
                    }
                }
            }
        } else {
            that.setValue('');
        }
    };

    Picker.prototype.updateMessage = function(message, type, skipLayout) {
        var that = this;
        var $message = that.$message;
        var hasMessage = typeof message === 'string' && message.length;
        message = hasMessage ? message : '';
        $message.attr('title', message).text(message).attr('data-type', type);
        that.$dropMenu.toggleClass('picker-has-message', !!hasMessage);
        if (!skipLayout && that.dropDirection === 'top') {
            that.layoutDropList();
        }
    };

    Picker.prototype.getRemoteList = function(callback, failCallback) {
        var that = this;
        var remote = that.options.remote;
        if (!remote) {
            return;
        }
        var remoteOptions;
        var remoteParams = {
            search: that.search,
            limit: that.options.maxListCount
        };
        if (typeof remote === 'string') {
            remoteOptions = {url: remote};
        } else if (typeof remote === 'function') {
            remoteOptions = remote(remoteParams, that);
        } else {
            remoteOptions = remote;
        }
        if (!remoteOptions.url) {
            console.warn('Remote url must provide to get remote list in picker.')
            return;
        }
        remoteOptions.url = remoteOptions.url.format(remoteParams);
        that.updateMessage('');
        that.$container.addClass('picker-loading');
        if (that.remoteXhr) {
            that.remoteXhr.abort();
        }
        that.remoteXhr = $.ajax($.extend({
            dataType: 'json',
            dataFilter: that.options.remoteConverter,
            data: remoteParams
        }, remoteOptions)).done(function(data, textStatus, jqXHR) {
            var hasResult = false;
            if (data) {
                if ($.isPlainObject(data)) {
                    if ((data.result === 'success' || data.result === 'ok') && $.isArray(data.data)) {
                        data = data.data;
                    } else {
                        that.updateMessage(data.message || JSON.stringify(data), 'danger');
                    }
                }
                if ($.isArray(data)) {
                    hasResult = data.length;
                    that.setList(data, that.options.remoteOnly);
                }
            }
            if (callback) {
                callback(hasResult);
            }
        }).fail(function(xhr, textStatus) {
            var errorMessage;
            var onRemoteError = that.options.onRemoteError;
            if (typeof onRemoteError === 'function') {
                errorMessage = onRemoteError(xhr, textStatus);
            } else if (typeof onRemoteError === 'string') {
                errorMessage = onRemoteError;
            } else {
                errorMessage = (that.options.remoteErrorHint || that.lang.remoteErrorHint).format(textStatus || '');
            }
            that.updateMessage(errorMessage, 'danger');
            if (failCallback) {
                failCallback();
            }
        }).always(function() {
            that.remoteXhr = null;
            that.$container.removeClass('picker-loading');
        });
    };

    Picker.prototype.layoutDropList = function() {
        var that = this;
        if (!that.$dropMenu) {
            return;
        }

        var options = that.options;
        var maxDropHeight = options.maxDropHeight || Number.MAX_VALUE;
        var $dropMenu = that.$dropMenu.css({opacity: 0, 'max-height': maxDropHeight, width: 'auto', 'max-width': 'none'});
        setTimeout(function() {
            var dropDirection = that.dropDirection || options.dropDirection;
            var maxAutoDropWidth = options.maxAutoDropWidth;
            var $win = $(window);
            var bounds = that.$selections[0].getBoundingClientRect();
            var dropHeight = $dropMenu.height();
            var dropWidth = options.dropWidth || 'auto';
            var winHeight = $win.height();
            var position = {left: bounds.left, opacity: 1};
            if (dropDirection === 'auto') {
                dropDirection = ((bounds.top + bounds.height + dropHeight) > winHeight && bounds.top > (winHeight - bounds.top - bounds.height)) ? 'top' : 'bottom';
            }
            that.dropDirection = dropDirection;
            position.maxHeight = Math.min(maxDropHeight, dropDirection === 'bottom' ? (winHeight - bounds.top - bounds.height) : bounds.top);
            dropHeight = Math.min(dropHeight, position.maxHeight);
            position.top = dropDirection === 'bottom' ? (bounds.top + bounds.height) : (bounds.top - dropHeight);
            if (dropWidth === '100%') {
                position.width = bounds.width;
            } else if (dropWidth === 'auto') {
                position.width = 'auto';
                position.maxWidth = maxAutoDropWidth === 'auto' ? bounds.width : maxAutoDropWidth;
            } else {
                position.width = dropWidth;
            }
            $dropMenu.css(position);
        }, 0);
    };

    Picker.prototype.tryUpdateList = function(search) {
        var that = this;
        if (that.search !== search) {
            that.search = search;
            if (that.updateListTimer) {
                clearTimeout(that.updateListTimer);
            }
            that.updateListTimer = setTimeout(function() {
                that.updateListTimer = null;
                that.updateList();
            }, that.options.searchDelay);
        }
    };

    Picker.prototype.renderOptionsList = function(optionsList, skipShowMessage) {
        var that = this;
        var $optionsList = that.$optionsList;
        if (optionsList === undefined) {
            optionsList = that.optionsList;
        } else {
            that.optionsList = optionsList;
        }
        if (!$optionsList) {
            return;
        }

        var message = '';
        var messageType = '';
        var options = that.options;
        var search = that.search;
        var hasSearch = typeof search === 'string' && search.length;
        if (optionsList.length) {
            var maxListCount = options.maxListCount;
            var valueKey = options.valueKey;
            var textKey = options.textKey;
            var hideMultiSelectedOption = options.hideMultiSelectedOption;
            var maxLoopLength = Math.min(optionsList.length, maxListCount);
            var searchLowerCase = search.toLowerCase();
            var $options = $optionsList.children('.picker-option').addClass('picker-expired');

            for (var i = 0; i < maxLoopLength; ++i) {
                var item = optionsList[i];
                var value = item[valueKey];
                var selected = that.isSelectedValue(value);
                if (hideMultiSelectedOption && selected && that.multi) {
                    continue;
                }
                var text = item[textKey];
                var optionID = that.getItemID(item, 'option');
                var $option = $options.find('#' + optionID);
                if (!$option.length) {
                    $option = $('<a class="picker-option" id="' + optionID + '" data-value="' + value + '"><span class="picker-option-text"></span><span class="picker-option-keys"></span></a>');
                } else {
                    $option.removeClass('picker-expired');
                }

                $option.attr('title', text).toggleClass('picker-option-selected', selected);

                var $text = $option.find('.picker-option-text');
                if (hasSearch) {
                    var textLowerCase = text.toLowerCase();
                    var textSpans = textLowerCase.split(searchLowerCase);
                    if (textSpans.length > 1) {
                        $text.empty();
                        var spanIndex = 0;
                        var spanLength = textSpans[0].length;
                        if (spanLength) {
                            $text.append($('<span>').text(text.substr(spanIndex, spanLength)));
                            spanIndex += spanLength;
                        }
                        for (var j = 1; j < textSpans.length; ++j) {
                            $text.append($('<span class="picker-option-text-matched">').text(text.substr(spanIndex, search.length)));
                            spanIndex += search.length;
                            spanLength = textSpans[j].length;
                            if (spanLength) {
                                $text.append($('<span>').text(text.substr(spanIndex, spanLength)));
                                spanIndex += spanLength;
                            }
                        }
                    } else {
                        $text.text(text);
                    }
                } else {
                    $text.text(text);
                }

                $option.appendTo($optionsList);
            }
            $options.filter('.picker-expired').remove();
            if (!skipShowMessage && maxLoopLength < optionsList.length) {
                message = options.accurateSearchHint || that.lang.accurateSearchHint;
            }
        } else {
            $optionsList.empty();
            if (!skipShowMessage) {
                message = hasSearch ? (options.emptySearchResultHint || that.lang.emptySearchResultHint).format(search) : (options.emptyResultHint || that.lang.emptyResultHint);
                messageType = 'danger';
            }
        }

        if (!skipShowMessage) {
            that.updateMessage(message, messageType);
        }
        that.$dropMenu.toggleClass('picker-no-options', !optionsList.length);
        that.layoutDropList();
    };

    Picker.prototype.updateList = function(search, skipRemote) {
        var that = this;

        if (search !== undefined) {
            that.search = search;
        } else {
            search = that.search;
        }

        var remoteOnly = that.options.remoteOnly;
        if (!remoteOnly) {
            var optionsList = [];
            if (search === null || search === undefined || (typeof search === 'string' && !search.length)) {
                optionsList = that.list || [];
            } else if (typeof that.options.list === 'function') {
                optionsList = that.options.list({search: search, limit: that.options.maxListCount});
            } else if (that.list && that.list.length) {
                var maxListCount = that.options.maxListCount;
                var keysKey = that.options.keysKey;
                var textKey = that.options.textKey;
                var valueKey = that.options.valueKey;
                var searchValueKey = that.options.searchValueKey;
                var matchScoreMap = {};
                search = search.toLowerCase();
                for (var i = 0; i < that.list.length; ++i) {
                    var item = that.list[i];
                    var itemValue = item[valueKey];
                    if (that.multi && that.isSelectedValue(itemValue)) {
                        continue;
                    }
                    var score = 0;
                    var itemText = item[textKey];
                    if (itemText !== null && itemText !== undefined && itemText !== '') {
                        itemText = itemText.toLowerCase();
                        var indexOfText = itemText.indexOf(search);
                        if (indexOfText > -1) {
                            score += indexOfText === 0 ? 20 : 10;
                        }
                    }

                    if (!score) {
                        var itemKeys = item[keysKey];
                        if (itemKeys !== null && itemKeys !== undefined && itemKeys !== '') {
                            itemKeys = itemKeys.toLowerCase();
                            var indexOfText = itemKeys.indexOf(search);
                            if (indexOfText > -1) {
                                score += indexOfText === 0 ? 8 : 4;
                            }
                        }
                    }

                    if (!score && searchValueKey) {
                        if (itemValue !== null && itemValue !== undefined && itemValue !== '') {
                            itemValue = itemValue.toLowerCase();
                            var indexOfText = itemValue.indexOf(search);
                            if (indexOfText > -1) {
                                score += indexOfText === 0 ? 3 : 1;
                            }
                        }
                    }

                    if (score) {
                        matchScoreMap[itemValue] = score + ((that.list.length - i) / that.list.length);
                        optionsList.push(item);
                    }

                    if (maxListCount && optionsList.length >= maxListCount) {
                        break;
                    }
                }

                if (optionsList.length) {
                    optionsList = optionsList.sort(function(item1, item2) {
                        return matchScoreMap[item2[valueKey]] - matchScoreMap[item1[valueKey]];
                    });
                }
            }
            that.renderOptionsList(optionsList);
        }
        if (!skipRemote) {
            that.getRemoteList(function(hasResult) {
                if (remoteOnly) {
                    that.renderOptionsList(that.list);
                } else {
                    that.updateList(search, true);
                }
            }, remoteOnly ? function() {
                that.renderOptionsList([], true);
            } : null);
        }
    };

    Picker.prototype.showDropList = function() {
        var that = this;
        that.dropListShowed = true;
        that.dropDirection = null;

        if (!that.$dropMenu) {
            var $dropMenu = $('<div class="picker-drop-menu" id="pickerDropMenu-' + that.id + '"></div>');
            var $optionsList = $('<div class="picker-option-list"></div>').appendTo($dropMenu);
            $dropMenu.data(NAME, that)
                .toggleClass('picker-multi', that.multi)
                .toggleClass('picker-single', !that.multi)
                .appendTo('body');

            $optionsList.on('click', '.picker-option', function() {
                that.select($(this).attr('data-value'));
            });

            var $message = $('<div class="picker-message"></div>').appendTo($dropMenu);

            that.$dropMenu = $dropMenu;
            that.$message = $message;
            that.$optionsList = $optionsList;
        }

        that.updateList();

        that.$dropMenu.addClass('picker-drop-show');
    };

    Picker.prototype.hideDropList = function() {
        var that = this;
        that.dropListShowed = false;
        that.$search.val('');
        that.search = '';

        if (that.$dropMenu) {
            that.$dropMenu.removeClass('picker-drop-show');
        }
    };

    Picker.prototype.setList = function(newList, reset) {
        var that = this;
        var options = that.options;
        var list = reset ? [] : (that.list || []);
        var listMap = reset ? {} : (that.listMap || {});
        if (typeof newList === 'string') {
            newList = newList.split(',');
        }

        for (var i = 0; i < newList.length; ++i) {
            var item = newList[i];
            if (typeof item === 'string') {
                var temp = {};
                temp[options.textKey] = item;
                temp[options.valueKey] = String(i);
                item = temp;
            } else if ($.isArray(item)) {
                var temp = {};
                temp[options.textKey] = item[0];
                temp[options.valueKey] = item[1];
                temp[options.keysKey] = item[2];
                item = temp;
            }
            var itemValue = item[options.valueKey];
            // if (itemValue.indexOf('"') > -1) {
            //     console.warn('Cannot use \'"\' as value of list item.');
            //     itemValue = itemValue.replace(/"/g, '\'');
            //     item[options.valueKey] = itemValue;
            // }
            var oldItem = listMap[itemValue];
            if (oldItem) {
                item.index = oldItem.$_index;
                list[oldItem.$_index] = item;
                listMap[itemValue] = item;
            } else {
                item.$_index = list.length;
                listMap[itemValue] = item;
                list.push(item);
            }
        }

        this.list = list;
        this.listMap = listMap;
    };

    Picker.prototype.getItemID = function(item, suffix) {
        var id = this.id + '-item-' + item[this.options.valueKey];
        if (suffix !== undefined) {
            return id + '-' + suffix;
        }
        return id;
    };

    Picker.prototype.isSelectedValue = function(value) {
        var that = this;
        if (that.value === undefined || that.value === null) {
            return false;
        }
        if (typeof value !== 'string') {
            value = String(value);
        }
        if (that.multi) {
            if (!that.valueSet) {
                if (typeof Set !== undefined) {
                    that.valueSet = new Set(that.value);
                } else {
                    that.valueSet = {};
                    for (var i = 0; i < that.value.length; ++i) {
                        that.valueSet[that.value[i]] = true;
                    }
                }
            }
            if ($.isPlainObject(that.valueSet)) {
                return !!that.valueSet[value];
            }
            return that.valueSet.has(value);
        }
        return value === that.value;
    };

    Picker.prototype.getListItem = function(value) {
        return this.listMap[value];
    };

    Picker.prototype.setValue = function(value) {
        // console.log('setValue', value);
        var that = this;
        var options = that.options;

        // Format value
        if (value === undefined) {
            value = that.$formItem.val();
        }
        if (that.multi && typeof value === 'string') {
            value = value.split(options.multiValueSplitter);
        } else if (!that.multi && typeof value !== 'string') {
            value = String(value);
        }
        that.value = value;
        if (that.multi) {
            that.valueSet = null;
        }

        // Update form item
        if (that.formType === 'select') {
            that.$formItem.empty();
            if (that.multi) {
                $.each(value, function(_index, val) {
                    that.$formItem.append('<option value="' + val + '">');
                });
            } else {
                that.$formItem.append('<option value="' + value + '">');
            }

        }
        that.$formItem.val(value);

        // Update container
        var hasValue = false;
        if (that.multi) {
            var $selections = that.$selections;
            var $selects = $selections.children('.picker-selection').addClass('picker-expired');
            $.each(value, function(_index, val) {
                if (val === undefined || val === null) {
                    val = '';
                } else if (typeof val !== 'string') {
                    val = String(val);
                }
                var item = that.getListItem(val);
                if (!item) {
                    return;
                }
                hasValue = true;
                var text = item[options.textKey];
                var itemID = that.getItemID(item, 'selection');
                var $select = $selects.find('#' + itemID);
                if (!$select.length) {
                    $select = $('<div class="picker-selection" id="' + itemID + '" data-value="' + val + '"><span class="picker-selection-text"></span><span class="picker-selection-remove"></span></div>');
                } else {
                    $select.removeClass('picker-expired');
                }
                $select.find('.picker-selection-text').text(text);
                $select.attr('title', text).insertBefore(that.$search);
            });
            $selects.filter('.picker-expired').remove();
        } else {
            var item = that.getListItem(value);
            hasValue = !!item;
            that.$singleSelection.find('.picker-selection-text').text(hasValue ? item[options.textKey] : '');
        }
        that.$container.toggleClass('picker-no-value', !hasValue).toggleClass('picker-has-value', hasValue);

        if (that.dropListShowed) {
            that.renderOptionsList();
        }
    };

    // default options
    Picker.DEFAULTS = DEFAULTS;

    // Extends jquery element
    $.fn.picker = function(option, params) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Picker(this, options)));

            if(typeof option == 'string') data[option](params);
        });
    };

    Picker.NAME = NAME;

    $.fn.picker.Constructor = Picker;

    // Auto call picker after document load complete
    $(function() {
        $('[data-toggle="picker"]').picker();
    });
}(jQuery, window, document));
