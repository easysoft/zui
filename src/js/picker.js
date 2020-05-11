/* ========================================================================
 * ZUI: picker.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2020 cnezsoft.com; Licensed MIT
 * ======================================================================== */

/**
 * TODO:
 *  * Option: sortMultiValuesByDnd
 *  * 优化展开时滚动到选中项体验
 */

(function($, window, document) {
    'use strict';

    var NAME = 'zui.picker'; // model name
    var SHOWS = {};

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
        showMultiSelectedOptions: false,
        autoSelectFirst: false,
        optionItemFormatter: null, // function($item, picker);
        maxSelectedCount: 0, // 0 = Infinity
        maxListCount: 50, // 0 = Infinity
        hideEmptyTextOption: true,
        searchValueKey: true,
        emptyResultHint: null,
        hideOnWindowScroll: true,
        inheritFormItemClasses: false,
        emptySearchResultHint: null,
        accurateSearchHint: null,
        remoteErrorHint: null,
        deleteByBackspace: true,
        disableScrollOnShow: true,
        // placeholder: undefined,
        maxDropHeight: 250,
        dropDirection: 'auto',
        dropWidth: '100%', // 'auto', '100%', '500px',
        maxAutoDropWidth: 450,
        multiValueSplitter: ',',
        searchDelay: 200,
        fixLabelFor: true,
        hotkey: true,
        // sortMultiValuesByDnd: false,
        // defaultValue: null,
        onSelect: null, // function({value, picker}),
        onDeselect: null, // function({value, picker}),
        beforeChange: null, // function(newValue, oldValue),
        onChange: null, // function(newValue, oldValue),
        onReady: null, // function(picker),
        onNoResults: null, // function(search),
        onShowingDrop: null, // function
        onHidingDrop: null, // function
        onShowedDrop: null, // function
        onHiddenDrop: null, // function
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
        if (options.inheritFormItemClasses) {
            $container.addClass($formItem.attr('class'));
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
            that.updateFromSelect();
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
        $container.toggleClass('picker-input-empty', !$search.val().length).append($selections);
        that.$container = $container;
        that.$selections = $selections;
        that.$search = $search;
        that.search = '';

        // Init placeholder
        var placeholder = options.placeholder;
        if (placeholder === undefined) {
            placeholder = $formItem.attr('placeholder');
        }
        if (typeof placeholder === 'string' && placeholder.length) {
            $selections.append($('<div class="picker-placeholder" />').text(placeholder));
        }
        options.placeholder = placeholder;

        // Fix label for attribute
        if (options.fixLabelFor) {
            var formItemID = $formItem.attr('id');
            if (formItemID) {
                $('label[for="' + formItemID + '"]').attr('for', searchID);
            }
        }

        // Init values and sync default value
        var defaultValue = options.defaultValue !== undefined ? options.defaultValue : $formItem.val();
        that.setValue(defaultValue, true);

        // Bind events
        $search.on('focus', function() {
            $container.addClass('picker-focus');
            that.showDropList();
        }).on('blur', function() {
            $container.removeClass('picker-focus');
        }).on('input change', function() {
            var searchValue = $search.val();
            if (multi) {
                $search.width(searchValue.length * 14);
            }
            $container.toggleClass('picker-input-empty', !searchValue.length);
            that.tryUpdateList(searchValue);
        });

        if (options.hotkey) {
            $search.on('keydown', function(e) {
                var key = e.key || e.which;
                if (!that.dropListShowed) {
                    return;
                }
                var activeValue = that.activeValue;
                var hasActiveValue = typeof activeValue === 'string';
                if (key === 'Enter' || key === 13) {
                    if (hasActiveValue) {
                        that.select(activeValue);
                        if (!that.multi) {
                            $search.blur();
                        }
                        e.preventDefault();
                    }
                } else if (key === 'ArrowDown' || key === 40) {
                    var $activeOption = that.$activeOption;
                    var $nextOption;
                    if ($activeOption) {
                        $nextOption = $activeOption.next('.picker-option');
                        if (that.multi) {
                            while ($nextOption.length && $nextOption.hasClass('picker-option-selected')) {
                                $nextOption = $nextOption.next('.picker-option');
                            }
                        }
                    }
                    if (!$nextOption || !$nextOption.length) {
                        $nextOption = that.$optionsList.children(that.multi ? '.picker-option:not(.picker-option-selected)' : '.picker-option').first();
                    }
                    if ($nextOption.length) {
                        that.activeOption($nextOption);
                    }
                    e.preventDefault();
                } else if (key === 'ArrowUp' || key === 30) {
                    var $activeOption = that.$activeOption;
                    var $prevOption;
                    if ($activeOption) {
                        $prevOption = $activeOption.prev('.picker-option');
                        if (that.multi) {
                            while ($prevOption.length && $prevOption.hasClass('picker-option-selected')) {
                                $prevOption = $prevOption.prev('.picker-option');
                            }
                        }
                    }
                    if (!$prevOption || !$prevOption.length) {
                        $prevOption = that.$optionsList.children(that.multi ? '.picker-option:not(.picker-option-selected)' : '.picker-option').last();
                    }
                    if ($prevOption.length) {
                        that.activeOption($prevOption);
                    }
                    e.preventDefault();
                } else if (options.deleteByBackspace && that.multi && (key === 'Backspace' || key === 8) && that.value && that.value.length) {
                    that.deselect(that.value[that.value.length - 1]);
                }
            });
        }

        if (multi) {
            $selections.on('mousedown', function(e) {
                if (that.dropListShowed) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
            }).on('mouseup', function(e) {
                if (!$(e.target).closest('.picker-selection-remove').length && !that.dropListShowed) {
                    that.focus();
                }
            });
        }
        $selections.on('click', '.picker-selection-remove', function(e) {
            if (that.multi) {
                var $selection = $(this).closest('.picker-selection');
                that.deselect($selection.data('value'));
            } else {
                that.deselect();
            }
            e.stopPropagation();
        });

        // Compatible with Chosen
        $formItem.on('chosen:updated', function() {
            that.updateFromSelect();
            that.setValue($formItem.val());
            that.updateList();
        })
            .on('chosen:activate', that.focus)
            .on('chosen:open', that.showDropList)
            .on('chosen:close', that.hideDropList);

        $container.addClass('picker-ready');

        setTimeout(function() {
            that.triggerEvent('ready', {picker: that}, '', 'chosen:ready');
        }, 0);
    };

    Picker.prototype.focus = function() {
        this.$search.focus();
    };

    Picker.prototype.select = function(value) {
        var that = this;
        if (!that.isSelectedValue(value)) {
            if (that.triggerEvent('select', {value: value, picker: that}) === false) {
                return;
            }
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
            if (that.triggerEvent('deselect', {value: value, picker: that}) === false) {
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
        that.hasMessage = hasMessage;
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
        var options = that.options;
        var remoteOptions;
        var remoteParams = {
            search: that.search,
            limit: options.maxListCount
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
            dataFilter: options.remoteConverter,
            data: remoteParams
        }, remoteOptions)).done(function(data, textStatus, jqXHR) {
            var hasResult = false;
            if (data) {
                if ($.isPlainObject(data)) {
                    if ((data.result === 'success' || data.result === 'ok') && $.isArray(data.data)) {
                        data = data.data;
                    } else if (data.result === 'fail') {
                        that.updateMessage(data.message || JSON.stringify(data), 'danger');
                    } else {
                        var dataList = [];
                        $.each(data, function(value, text) {
                            var item = {};
                            item[options.valueKey] = value;
                            if (typeof text === 'object') {
                                $.extend(item, text);
                            } else {
                                item[options.textKey] = text;
                            }
                            dataList.push(item);
                        });
                        data = dataList;
                    }
                }
                if ($.isArray(data)) {
                    hasResult = data.length;
                    that.setList(data, options.remoteOnly);
                }
            }
            if (callback) {
                callback(hasResult);
            }
        }).fail(function(xhr, textStatus) {
            var errorMessage;
            var onRemoteError = options.onRemoteError;
            if (typeof onRemoteError === 'function') {
                errorMessage = onRemoteError(xhr, textStatus);
            } else if (typeof onRemoteError === 'string') {
                errorMessage = onRemoteError;
            } else {
                errorMessage = (options.remoteErrorHint || that.lang.remoteErrorHint).format(textStatus || '');
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

    Picker.prototype.layoutDropList = function(fast, resetDirection, callback) {
        var that = this;
        if (!that.$dropMenu) {
            return;
        }

        var options = that.options;
        var maxDropHeight = options.maxDropHeight || Number.MAX_VALUE;
        var $dropMenu = that.$dropMenu;
        var $optionsList = that.$optionsList;
        if (!fast) {
            $dropMenu.css({opacity: 0, width: 'auto', 'max-width': 'none'});
        }
        $optionsList.css({'max-height': maxDropHeight});
        setTimeout(function() {
            var bounds = that.$selections[0].getBoundingClientRect();
            var dropDirection = resetDirection ? options.dropDirection : (that.dropDirection || options.dropDirection);
            if (typeof dropDirection === 'function') {
                dropDirection = dropDirection(bounds, that);
            }
            var maxAutoDropWidth = options.maxAutoDropWidth;
            var $win = $(window);
            var winHeight = $win.height();
            var dropHeight = $dropMenu.height();
            var dropWidth = options.dropWidth || 'auto';
            var dropStyle = {left: bounds.left, opacity: 1};
            if (dropDirection === 'auto') {
                dropDirection = ((bounds.top + bounds.height + dropHeight) > winHeight && bounds.top > (winHeight - bounds.top - bounds.height)) ? 'top' : 'bottom';
            }
            that.dropDirection = dropDirection;
            var dropMaxHeight = Math.min(maxDropHeight, dropDirection === 'bottom' ? (winHeight - bounds.top - bounds.height) : bounds.top);
            dropHeight = Math.min(dropHeight, dropMaxHeight);
            dropStyle.top = dropDirection === 'bottom' ? (bounds.top + bounds.height) : (bounds.top - dropHeight);
            if (dropWidth === '100%') {
                dropStyle.width = bounds.width;
            } else if (dropWidth === 'auto') {
                dropStyle.width = 'auto';
                dropStyle.maxWidth = maxAutoDropWidth === 'auto' ? bounds.width : maxAutoDropWidth;
                if (that.multi) {
                    var searchBounds = that.$search[0].getBoundingClientRect();
                    dropStyle.left = searchBounds.left;
                }
            } else {
                dropStyle.width = dropWidth;
            }
            var messageHeight = that.hasMessage ? that.$message.outerHeight() : 0;
            $optionsList.css('max-height', dropHeight - messageHeight);
            $dropMenu.css(dropStyle);
            if (callback) {
                callback();
            }
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
        var options = that.options;
        var search = that.search;
        var hasSearch = typeof search === 'string' && search.length;
        if (optionsList.length) {
            var maxListCount = options.maxListCount;
            var valueKey = options.valueKey;
            var textKey = options.textKey;
            var showMultiSelectedOptions = options.showMultiSelectedOptions;
            var maxLoopLength = Math.min(optionsList.length, maxListCount);
            var searchLowerCase = search.toLowerCase();
            var $options = $optionsList.children('.picker-option').addClass('picker-expired');
            var singleSelectedOption;
            var firstOption;
            var activeOption;
            var activeValue = that.activeValue;
            var hasActiveValue = activeValue !== undefined && activeValue !== null;

            for (var i = 0; i < maxLoopLength; ++i) {
                var item = optionsList[i];
                var value = item[valueKey];
                var selected = that.isSelectedValue(value);
                if (!showMultiSelectedOptions && selected && that.multi) {
                    continue;
                }
                var text = item[textKey];
                if (!value.length || (options.hideEmptyTextOption && !text.length)) {
                    continue;
                }

                var optionID = that.getItemID(item, 'option');
                var $option = $options.find('#' + optionID);
                if (!$option.length) {
                    $option = $('<a class="picker-option" id="' + optionID + '" data-value="' + value + '"><span class="picker-option-text"></span><span class="picker-option-keys"></span></a>');
                } else {
                    $option.removeClass('picker-expired');
                }

                $option.attr('title', text).removeClass('.picker-option-active').toggleClass('picker-option-selected', selected);

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

                if (that.multi) {
                    if (!selected && !firstOption) {
                        firstOption = item;
                    }
                } else {
                    if (!activeOption && hasActiveValue && value === activeValue) {
                        activeOption = item;
                    } else if (selected) {
                        singleSelectedOption = item;
                    } else if (!firstOption) {
                        firstOption = item;
                    }
                }
            }
            $options.filter('.picker-expired').remove();
            if (!skipShowMessage && maxLoopLength < optionsList.length) {
                message = options.accurateSearchHint || that.lang.accurateSearchHint;
            }

            // Active item
            // if (!that.listRendered) {
                that.activeOption(activeOption || singleSelectedOption || firstOption);
            // }
        } else {
            $optionsList.empty();
            if (!skipShowMessage) {
                message = hasSearch ? (options.emptySearchResultHint || that.lang.emptySearchResultHint).format(search) : (options.emptyResultHint || that.lang.emptyResultHint);
                if (hasSearch) {
                    that.triggerEvent('noResults', {search: search, picker: that}, '', 'chosen:no_results');
                }
            }
        }

        if (!skipShowMessage) {
            that.updateMessage(message, 'info');
        }
        that.$dropMenu.toggleClass('picker-no-options', !optionsList.length);
        that.layoutDropList(that.listRendered);
        that.listRendered = true;
    };

    Picker.prototype.activeOption = function(activeValue, skipScroll) {
        var that = this;
        if (activeValue) {
            if (activeValue instanceof $) {
                activeValue = activeValue.attr('data-value');
            } else if (typeof activeValue === 'object') {
                activeValue = activeValue[that.options.valueKey];
            }
        }
        // if (activeValue !== that.activeValue) {
            var item = that.getListItem(activeValue);
            if (item) {
                that.activeValue = activeValue;
            } else {
                activeValue = that.activeValue;
            }
            var $activeOption = that.$activeOption;
            if ($activeOption) {
                $activeOption.removeClass('picker-option-active');
            }
            $activeOption = that.$optionsList.find('[data-value="' + activeValue + '"]');
            if ($activeOption.length) {
                $activeOption.addClass('picker-option-active');
                if (!skipScroll) {
                    var optionEle = $activeOption[0];
                    if (optionEle.scrollIntoViewIfNeeded) {
                        optionEle.scrollIntoViewIfNeeded();
                    } else if (optionEle.scrollIntoView) {
                        optionEle.scrollIntoView();
                    } else {
                        // TODO: scroll to active item
                    }
                }
                that.$activeOption = $activeOption;
            } else {
                that.$activeOption = null;
            }
        // }
    };

    Picker.prototype.updateList = function(search, skipRemote, callback) {
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
            that.renderOptionsList(optionsList, false, callback);
        }
        if (!skipRemote) {
            that.getRemoteList(function(hasResult) {
                if (remoteOnly) {
                    that.renderOptionsList(that.list, false, callback);
                } else {
                    that.updateList(search, true);
                }
            }, remoteOnly ? function() {
                that.renderOptionsList([], true, callback);
            } : null);
        }
    };

    Picker.prototype.showDropList = function() {
        var that = this;

        if (that.triggerEvent('showingDrop', {picker: that}) === false) {
            return;
        }

        that.dropListShowed = true;
        that.dropDirection = null;
        that.listRendered = false;
        that.activeValue = null;
        SHOWS[that.id] = that;

        if(that.options.disableScrollOnShow) {
            $.zui.fixBodyScrollbar();
        }

        if (!that.$dropMenu) {
            var $dropMenu = $('<div class="picker-drop-menu" id="pickerDropMenu-' + that.id + '"></div>');
            var $optionsList = $('<div class="picker-option-list"></div>').appendTo($dropMenu);
            $dropMenu.data(NAME, that)
                .toggleClass('picker-multi', that.multi)
                .toggleClass('picker-single', !that.multi)
                .appendTo('body');

            if (that.options.chosenMode) {
                $dropMenu.addClass('chosen-up');
            }

            $optionsList.on('click', '.picker-option', function() {
                that.select($(this).attr('data-value'));
            }).on('mouseenter', '.picker-option', function() {
                that.activeOption($(this), true);
            });

            var $message = $('<div class="picker-message"></div>').appendTo($dropMenu);

            that.$dropMenu = $dropMenu;
            that.$message = $message;
            that.$optionsList = $optionsList;
        }

        that.updateList(that.search, false, function() {
            that.triggerEvent('showedDrop', {picker: that}, '', 'chosen:showing_dropdown')
        });

        that.$dropMenu.addClass('picker-drop-show');
    };

    Picker.prototype.hideDropList = function() {
        var that = this;

        if (that.triggerEvent('hidingDrop', {picker: that}) === false) {
            return;
        }

        that.dropListShowed = false;
        that.$activeOption = null;
        that.activeValue = null;
        that.$search.val('');
        that.search = '';
        delete SHOWS[that.id];

        if (that.$dropMenu) {
            that.$dropMenu.removeClass('picker-drop-show');
        }

        if(that.options.disableScrollOnShow) {
            $.zui.resetBodyScrollbar();
        }

        that.triggerEvent('hiddenDrop', {picker: that}, '', 'chosen:hiding_dropdown')
    };

    Picker.prototype.updateFromSelect = function(reset) {
        var that = this;
        var options = that.options;
        var list = [];
        if (reset === undefined) {
            reset = true;
        }
        that.$formItem.children('option').each(function() {
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
        that.setList(list, reset);
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

    Picker.prototype.triggerEvent = function(name, params, callbackName, chosenEventName) {
        var that = this;
        if(!$.isArray(params)) params = [params];
        that.$.trigger(name, params);
        if (that.options.chosenMode && chosenEventName) {
            that.$.trigger(chosenEventName, params);
        }
        callbackName = callbackName === true ? name : (callbackName || ('on' + name[0].toUpperCase() + name.substr(1)));
        if($.isFunction(that.options[callbackName])) {
            return that.options[callbackName].apply(that, params);
        }
    };

    Picker.prototype.setValue = function(value, silent) {
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

        if (that.value !== value) {
            if (!silent) {
                if (that.triggerEvent('beforeChange', {
                    value: value,
                    oldValue: that.value
                }, true) === false) {
                    return;
                }
            }
            that.value = value;

            if (options.onChange) {
                options.onChange(value);
            }
            if (!silent) {
                that.triggerEvent('change', {picker: that});
            }
        }

        if (that.multi) {
            that.valueSet = null;
        }

        // Update form item
        var $formItem = that.$formItem;
        if (that.formType === 'select') {
            var chosenMode = options.chosenMode;
            if (!chosenMode) {
                $formItem.empty();
            }
            if (that.multi) {
                $.each(value, function(_index, val) {
                    if (chosenMode && $formItem.find('option[value="' + val + '"]').length) {
                        return;
                    }
                    $formItem.append('<option value="' + val + '">');
                });
            } else if(!chosenMode || !$formItem.find('option[value="' + value + '"]').length) {
                $formItem.append('<option value="' + value + '">');
            }

        }
        $formItem.val(value);

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
                    $select = $('<div class="picker-selection" id="' + itemID + '"><span class="picker-selection-text"></span><span class="picker-selection-remove"></span></div>').data('value', val);
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

    Picker.prototype.handleWindowScroll = function() {
        var that = this;
        if (that.options.disableScrollOnShow) return;
        if (that.options.hideOnWindowScroll) {
            if (that.scrollEventTimer) {
                clearTimeout(that.scrollEventTimer);
            }
            that.$dropMenu.css('opacity', 0);
            that.scrollEventTimer = setTimeout(function() {
                that.scrollEventTimer = null;
                if (that.dropListShowed) {
                    that.layoutDropList(true, true);
                }
            }, 500);
        } else {
            that.layoutDropList(true, true);
        }
    };

    // default options
    Picker.DEFAULTS = DEFAULTS;
    Picker.NAME = NAME;
    Picker.SHOWS = SHOWS;

    Picker.convertChosenOptions = function(options) {
        var converted = false;
        $.each({
            allow_single_deselect: 'allowSingleDeselect',
            inherit_select_classes: 'inheritFormItemClasses',
            max_selected_options: 'maxSelectedCount',
            no_results_text: 'emptySearchResultHint',
            placeholder_text: 'placeholder',
            placeholder_text_multiple: 'placeholder',
            placeholder_text_single: 'placeholder',
            single_backstroke_delete: 'deleteByBackspace',
            display_selected_options: 'showMultiSelectedOptions',
            drop_direction: 'dropDirection',
            drop_width: 'dropWidth',
            max_drop_width: 'maxAutoDropWidth',
            highlight_selected: 'autoSelectFirst',
            sort_value_splitter: 'multiValueSplitter',
        }, function(chosenOptionName, pickerOptionName) {
            var optionValue = options[chosenOptionName];
            if (optionValue !== undefined) {
                options[pickerOptionName] = optionValue;
                delete options[chosenOptionName];
                converted = true;
            }
        });
        if (converted) {
            options.chosenMode = true;
        }
        return options;
    };

    // Extends jquery element
    $.fn.picker = function(option, params) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) {
                if (Picker.enabledChosenMode || (options && options.chosenMode)) {
                    options = Picker.convertChosenOptions($.extend({}, $this.data(), options));
                }
                $this.data(NAME, (data = new Picker(this, options)));
            } else {
                if(typeof option == 'string') data[option](params);
            }
        });
    };

    $.fn.picker.Constructor = Picker;
    $.Picker = $.zui.Picker = Picker;

    // Compatible with Chosen
    Picker.enableChosen = function() {
        if (Picker.enabledChosenMode) {
            return;
        }
        $.fn.chosen = function(option, params) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data(NAME);
                if (!data) {
                    var options = $.extend({}, $this.data(), typeof option === 'object' ? option : null);
                    // convert chosen options to picker options

                    data = new Picker(this, Picker.convertChosenOptions(options));
                    $this.data(NAME, data);
                    return;
                } else if (typeof option === 'string') {
                    data[option](params);
                }
            })
        };
        $.fn._chosen = $.fn.chosen;
        Picker.enabledChosenMode = true;
    };

    // Fix $.zui.fixBodyScrollbar not work
    if($.zui.fixBodyScrollbar) {
        $.zui({
            _scrollbarWidth: 0,
            checkBodyScrollbar: function() {
                if(document.body.clientWidth >= window.innerWidth) return 0;
                if(!$.zui._scrollbarWidth) {
                    var scrollDiv = document.createElement('div');
                    scrollDiv.className = 'modal-scrollbar-measure scrollbar-measure';
                    document.body.appendChild(scrollDiv);
                    $.zui._scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                    document.body.removeChild(scrollDiv);
                }
                return $.zui._scrollbarWidth;
            },
            fixBodyScrollbar: function() {
                if($.zui.checkBodyScrollbar()) {
                    var $body = $('body');
                    var bodyPad = parseInt(($body.css('padding-right') || 0), 10);
                    if($.zui._scrollbarWidth) {
                        $body.css({paddingRight: bodyPad + $.zui._scrollbarWidth, overflowY: 'hidden'});
                    }
                    return true;
                }
            },
            resetBodyScrollbar: function() {
                $('body').css({paddingRight: '', overflowY: ''});
            },
        });
    }

    // Auto call picker after document load complete
    $(function() {
        $('[data-toggle="picker"]').picker();

        // Bind global event to hide picker drop menu
        $(document).on('mousedown', function(e) {
            var $checkSelf = $(e.target).closest('.picker,.picker-drop-menu');
            var checkSelfLength = $checkSelf.length;
            $.each(SHOWS, function(id, picker) {
                if (!checkSelfLength || (!$checkSelf.is(picker.$container) && (!picker.$dropMenu || !$checkSelf.is(picker.$dropMenu)))) {
                    picker.hideDropList();
                }
            });
        });

        // Bind global event to handle window scroll event
        $(window).on('scroll', function(e) {
            $.each(SHOWS, function(id, picker) {
                picker.handleWindowScroll(e);
            });
        });
    });
}(jQuery, window, document));
