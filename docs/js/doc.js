/*!
 * ZUI - v1.3.0 - 2015-05-18
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2015 cnezsoft.com; Licensed MIT
 */

(function(window, $)
{
    'use strict';

    // Polyfill
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if (position === undefined || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.lastIndexOf(searchString, position) === position;
        };
    }

    if (!String.prototype.includes) {
        String.prototype.includes = function() {
            return String.prototype.indexOf.apply(this, arguments) !== -1;
        };
    }

    var getQueryString = function(name, defaultValue)
    {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) return unescape(r[2]); return defaultValue;
    };

    var debug = getQueryString('debug', 0);
    if(debug) console.error("DEBUG ENABLED.");

    var chapters = {
        learn: {col: 1},
        start: {col: 1},
        basic: {col: 1},
        control: {col: 2},
        component: {col: 2},
        javascript: {col: 3},
        view: {col: 3},
        promotion: {col: 1, row: 2},
        resource: {col: 1, row: 2},
        contribution: {col: 1, row: 2}
    };
    var LAST_RELOAD_ANIMATE_ID = 'lastReloadAnimate';
    var LAST_QUERY_ID = 'LAST_QUERY_ID';
    var INDEX_JSON = 'docs/index.json';
    var ICONS_JSON = 'docs/icons.json';
    var PKG_JSON = 'package.json';
    var UNDEFINED = undefined;
    var dataVersion;
    var storageEnable;
    var docIndex, iconsIndex;
    var pkgLibs = {standard: null, lite: null, separate: null};

    var documentTitle = 'ZUI';
    var sectionsShowed;
    var queryGaCallback;
    var scrollBarWidth = -1;
    var bestPageWidth = 1120;
    var openInNewWindow = true;
    var $body, $window, $grid, $sectionTemplate,
        $queryInput, $chapters, $pageAttrs,
        $choosedSection, $page, $pageHeader, $pageContent, $pageLoader,
        $pageBody, $navbar, $search, lastQueryString,
        $header, $sections, $chapterHeadings; // elements

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

    var checkScrollbar = function()
    {
        if (document.body.clientWidth >= window.innerWidth) return;

        if(scrollBarWidth < 0) {
            var scrollDiv = document.createElement('div');
            scrollDiv.className = 'modal-scrollbar-measure';
            $body.append(scrollDiv);
            scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            $body[0].removeChild(scrollDiv);
        }

        if (scrollBarWidth) {
            var bodyPad = parseInt(($body.css('padding-right') || 0), 10);
            $body.css('padding-right', bodyPad + scrollBarWidth);
            $navbar.css('padding-right', scrollBarWidth);
        }
    };

    var resetScrollbar = function()
    {
        $body.css('padding-right', '');
        $navbar.css('padding-right', '');
    };

    var loadData = function(url, callback, delayLoadRemote) {
        var cacheData = null;
        var isIndexJson = url === INDEX_JSON;
        var isIconsJson = url === ICONS_JSON;
        var isHasCache = false;
        if(isIndexJson && docIndex) {
            cacheData = {data: docIndex, version: docIndex.version};
            isHasCache = true;
        } else if(isIconsJson && iconsIndex) {
            cacheData = iconsIndex;
            isHasCache = true;
        } else if(storageEnable) {
            var storedData = $.zui.store.get('//' + url, null);
            if(storedData !== null) {
                var storedVersion = $.zui.store.get('//' + url + '::V');
                if(storedVersion) {
                    cacheData = {data: storedData, version: storedVersion};
                    isHasCache = true;
                    if(!docIndex && isIndexJson) {
                        docIndex = storedData;
                    }
                    if(debug) console.log('Load', url, 'from storage:', cacheData);
                }
            }
        }

        if(isHasCache && (isIndexJson || cacheData.version === dataVersion)) {
            if(debug) console.log('Load', url, 'from cache:', cacheData);
            callback(cacheData.data, 'cache');
            if(!isIndexJson && !debug) return;
        }

        var dataType = url.endsWith('.json') ? 'json' : 'html';
        var loadFromRemote = function(){
            $.get(url, function(data){
                if(data !== null) {
                    if(isIndexJson) {
                        dataVersion = data.version;
                        docIndex = data;
                    } else if(isIconsJson) {
                        iconsIndex = {data: data, version: dataVersion};
                    }
                    cacheData = {data: data, version: dataVersion};
                    $.zui.store.set('//' + url, data);
                    $.zui.store.set('//' + url + '::V', dataVersion);

                    if(debug) console.log('Load', url, 'from remote:', cacheData);
                    callback(data, 'remote');
                } else if(isHasCache && !isIndexJson) {
                    if(debug) console.log('Failed load', url, 'from remote, instead load cache:', cacheData);
                    callback(cacheData.data, 'cache');
                }
            }, dataType).error(function(){
                if(debug) console.error("Ajax error:", url);
                if(isHasCache && !isIndexJson) {
                    if(debug) console.log('Failed load', url, 'from remote with error, instead load cache:', cacheData);
                    callback(cacheData.data, 'cache');
                }

                if($body.hasClass('page-open')) {
                    $pageBody.children('.loader').addClass('with-error');
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
        if (!docIndex) {
            console.error("Document index is empty.");
            return false;
        };

        $.each(chapters, function(chapterName, chapter){
            if(!docIndex.chapters[chapterName]) return;
            $.extend(chapter, docIndex.chapters[chapterName]);
            var sections = chapter.sections;
            var data = null;
            if(eachChapterCallback) {
                data = eachChapterCallback(chapter, sections);
                if(data === false) return false;
            }
            $.each(sections, function(i, section){
                if(callback(chapter, section, data) === false) return false;
            });
        });
        return true;
    };

    var displaySectionIcon = function($icon, section) {
        var icon = section.icon;
        $icon.attr('class', 'icon').text('').css('background-image', '');
        if (icon === undefined || icon === null || icon === "") {
            icon = section.name.substr(0, 1).toUpperCase();
        }
        if (icon.startsWith('icon-')) {
            $icon.addClass(icon);
        } else if(icon.endsWith('.png')) {
            $icon.css('background-image', 'url(' + icon + ')').addClass('with-img');
        } else {
            $icon.addClass('text-icon').text(icon);
        }
    };

    var displaySection = function() {
        var order = 0;
        if(eachSection(function(chapter, section, $sectionList){
            var chapterName = chapter.id;
            section.chapter = chapterName;
            section.chapterName = chapter.name;

            var url = section.url;
            if(typeof url === 'undefined') {
                section.url = 'docs/part/' + section.chapter + '-' + section.id + '.html';
                section.target = 'page';
            } else if(isExternalUrl(url)) {
                section.target = 'external';
            } else if(url && url.endsWith('.md')) {
                section.target = 'page';
                section.targetType = 'markdown';
                if(url === '.md') {
                    section.url = 'docs/part/' + section.chapter + '-' + section.id + '.md';
                }
            } else {
                section.target = '';
            }

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
            // $head.children('.desc').text(section.desc);
            displaySectionIcon($head.children('.icon'), section);
            var $topics = $tpl.find('.topics');
            if (section.topics && section.topics.length) {
                var topicId = 0;
                $.each(section.topics, function(tName, topic){
                    if(typeof topic.id === 'undefined') topic.id = tName;
                    var topicUrl = typeof topic.url === 'undefined' ? (sectionUrl + '/' + (topicId++)) : topic.url;

                    $topics.append('<li data-id="' + tName + '"><a href="' + topicUrl + '"' + (isExternalUrl(topicUrl) ? ' target="_blank"' : '') + '>' + topic.name + '</a></li>');
                });
            } else {
                $topics.remove('.card-content');
                $tpl.addClass('without-topics');
            }
            $sectionList.append($tpl.addClass('show' + (sectionsShowed ? ' in' : '')));
        }, function(chapter, sections){
            chapter.$.attr('data-accent', chapter.accent);
            var $sectionList = chapter.$sections;
            $sectionList.children().remove();
            return $sectionList;
        })) {
            $body.children('.loader').removeClass('loading');
            $sections = $grid.find('.section');
            if(!sectionsShowed) {
                clearTimeout($grid.data(LAST_RELOAD_ANIMATE_ID));
                $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function(){
                    $sections.addClass('in');
                    $chapterHeadings.addClass('in');
                }, 100));
                sectionsShowed = true;
            }
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
        $container.animate({scrollTop: toTop}, 200, 'swing', callback);
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
            $all.each(function(){
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
            $all.each(function(){
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
        $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function(){
            $sections.addClass('in');
            $chapterHeadings.addClass('in');
        }, 20));
        $body.removeClass('query-enabled').attr('data-query', '');
    };

    var chooseIcon = function($icon){
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
        var id = 'icon-' + icon.id;
        $preview.find('.icon').addClass(id);
        $preview.find('.name').text(id);
        $preview.find('.unicode').text(icon.code);
        if(icon.alias && icon.alias.length) {
            $preview.find('.alias').removeClass('hide').find('.alias-values').text(icon.alias.join(','));
        } else {
            $preview.find('.alias').addClass('hide');
        }
    };

    var queryIcon = function(keys) {
        if(!$.isArray(keys) && (keys || keys.length) ) {
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

        loadData(ICONS_JSON, function(data){
            var $list = $search.children('ul');
            if(!$list.length) {
                $list = $('<ul data-view="icons">');
                $.each(data, function(iconName, icon){
                    var $li = $('<li id="control-icon-' + iconName + '" data-id="' + iconName + '"><a href="#control/icons/' + iconName + '"><i class="icon icon-' + iconName + '"></i> icon-' + iconName + '</a></li>');
                    icon.id = iconName;
                    $li.data('icon', icon);
                    $list.append($li);
                });
                $search.children('.loader').replaceWith($list);
            }

            if(!keys.length) {
                $list.children('.hide').removeClass('hide');
                chooseIcon($list.children().first());
                return;
            }

            keys.forEach(function(keyVal, keyIndex){
                keys[keyIndex] = keys[keyIndex].toLowerCase();
            });

            var $bestMatch, bestMatchWeight = 0;
            $.each(data, function(iconId, icon){
                var choosed = false;
                var weight = 0;
                iconId = iconId.toLowerCase();
                $.each(keys, function(keyIndex, key){
                    var choosedThis = false;
                    if(iconId.includes(key)) {
                        choosedThis = true;
                        weight += iconId.startsWith(key) ? 120: 110;
                    } else if(icon.name && icon.name.toLowerCase().includes(key)) {
                        choosedThis = true;
                        weight += icon.name.toLowerCase().startsWith(key) ? 100: 95;
                    } else if(key.startsWith('\\') && icon.code && icon.code.toLowerCase().includes(key.substr(1))) {
                        choosedThis = true;
                        weight += 120;
                    } else {
                        var filters = [];
                        if($.isArray(icon.filter) && icon.filter.length) filters = filters.concat(icon.filter);
                        if($.isArray(icon.categories) && icon.categories.length) filters = filters.concat(icon.categories);
                        if($.isArray(icon.alias) && icon.alias.length) filters = filters.concat(icon.alias);
                        if(!filters.length) return;
                        $.each(filters, function(filterIndex, filter){
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
            queryGaCallback = setTimeout(function(){
                ga('send', 'pageview', window.location.pathname + '#search/' + keyString);
            }, 2000);
        }

        var keys = [];
        $.each(keyString.split(' '), function(i, key){
            key = $.trim(key).toLowerCase();
            var keyOption = {origin: key};
            if(key.startsWith('@')) {
                keyOption.type = 'id';
                keyOption.chapter = key.substr(1);
                keyOption.val = keyOption.chapter;
            } else if(key.startsWith('#')) {
                keyOption.type = 'id';
                keyOption.val = key.substr(2);
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
            } else if(key.startsWith('grunt:') || key.startsWith('build:')) {
                keyOption.type = 'build';
                keyOption.val = key.substr(6);
            } else if(key.startsWith('g:') || key.startsWith('b:')) {
                keyOption.type = 'build';
                keyOption.val = key.substr(2);
            } else {
                $.each(chapters, function(name){
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

        var resultMap = {}, chapterMap = {}, weight, id, chooseThis, chooseThisKey, keyVal, matches, matchType;
        if(eachSection(function(chapter, section){
            chooseThis = true;
            matches = [];
            weight = 0;
            $.each(keys, function(keyIndex, key){
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
                            matches.push({key: key, type: ['section', 'id']});
                            var iconKeys = [];
                            if(key.val || key.val.length) {
                                iconKeys.push(key.val);
                            }
                            keys.forEach(function(iconKey){
                                if(iconKey.val !== key.val && (iconKey.val || iconKey.val.length)) {
                                    iconKeys.push(iconKey.val);
                                }
                            });
                            queryIcon(iconKeys);
                            return false;
                        }
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
                                $.each(section.topics, function(topicIndex, topic){
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
                            if(section.desc.toLowerCase().includes(keyVal)) {
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
                    matches.push({key: key, type: matchType});
                }
            });

            id = chapter.id + '-' + section.id;
            if(chooseThis) {
                chapterMap[chapter.id]++;
                resultMap[id] = {hidden: false, matches: matches, weight: weight};
            } else {
                resultMap[id] = {hidden: true};
            }
        }, function(chapter){
            chapterMap[chapter.id] = 0;
        })) {
            var $hide = $(), $show = $(), $section, choosedWeight = -1, $choosed;
            $.each(resultMap, function(id, result){
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
            $.each(chapterMap, function(chapterId, resultCount){
                chapter = chapters[chapterId];
                hide = !resultCount;
                chapter.$.toggleClass('hide', hide);
            });
            var finalShowColsCount = 0;
            $grid.find('.row').each(function(){
                var showColsCount = 0;
                var $row = $(this);
                $row.children('.col').each(function(){
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
                setTimeout(function(){$hide.removeClass('show');}, 100);
            }
            if($show.length) {
                $show.addClass('show');
                setTimeout(function(){$show.addClass('in');}, 20);
            }

            $window.scrollTop(1);
            closePage();
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
                setTimeout(function(){
                    $body.addClass('compact-mode-in');
                    $window.scrollTop(1);
                    setTimeout(function(){
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
                setTimeout(function(){
                    $body.removeClass('compact-mode');
                    $body.data(animateName, false);
                    if(callback) callback();
                }, 300);
            } else if(callback) {
                callback();
            }
        }
    };

    var closePage = function() {
        window['afterPageLoad'] = null;
        window['onPageLoad'] = null;
        if($.isFunction(window['onPageClose'])) {
            window['onPageClose']();
            window['onPageClose'] = null;
        }
        if($body.hasClass('page-open')) {
            var style = $page.data('trans-style');
            if(style){
                style['max-height'] = '';
                $page.css(style);
            }
            $body.addClass('page-show-out').removeClass('page-open page-show-in');

            if($queryInput.val() !== '') {
                $queryInput.focus();
            }

            window.document.title = documentTitle;
            window.location.hash = '#/';
            setTimeout(function(){
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
            expandTopic($pageContent.children('section').eq(topic));
        } else if(valType === 'string' && valType.length) {
            // highlight element with the id string.
        }
    };

    var mutePageLoading = function() {
        $page.removeClass('loading');
        $pageLoader.removeClass('loading');
    };

    var handlePageLoad = function() {
        var delayMutedPageLoading = false;
        if($.isFunction(window['onPageLoad'])) {
            delayMutedPageLoading = window['onPageLoad']() === false;
        }

        setTimeout(function(){
            if($.isFunction(window['afterPageLoad'])) {
                if(window['afterPageLoad'](mutePageLoading) === true) {
                    handlePageLoad();
                }
            }

            // pretty code
            var $codes = $pageBody.find('pre');
            if($codes.length && window['prettyPrint']) {
                $codes.addClass('prettyprint');
                window['prettyPrint']();
            }
        }, 200);

        if(!delayMutedPageLoading) mutePageLoading();
    };

    var openPage = function($section, section, topic) {
        var pageId = section.chapter + '-' + section.id;
        if($body.hasClass('page-open') && pageId === $body.attr('data-page')) {
            if(debug) console.error('The page already showed.');
            return;
        }
        chooseSection($section, false, true);

        if(openInNewWindow && openInNewWindow !== '0' && openInNewWindow !== 'false') {
            var url = 'docs/page/#' + section.chapter + '/' + section.id + '/' + (topic || '');
            window.open(url, '_blank');
            return;
        }

        // Send ga data
        var pageUrl = '#' + section.chapter + '/' + section.id;
        if(topic) pageUrl += '/' + topic;
        window.document.title = section.chapterName + ' > ' + section.name + ' - ' + documentTitle;
        window.location.hash = pageUrl;
        if(window['ga'] && $.isFunction(ga)) ga('send','pageview', window.location.pathname + pageUrl);

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
            $pageAttrs.children('.badge-lib').toggle(!!lib.bundles.separate);
            $pageAttrs.children('.badge-custom').toggle(!!lib.custom);

            $pageAttrs.children('.badge-version').toggle(!!lib.ver).text(lib.ver + '+');
            $pageAttrs.children('.badge-party').toggle(!!lib.thirdpart).attr('href', lib.partUrl || 'javascript:;').find('.product-ver').text(lib.pver);
        }

        $pageContent.empty();
        $page.addClass('loading');
        $pageLoader.removeClass('with-error').addClass('loading');
        var lastShowDataCall;

        loadData(section.url, function(data){
            var showData = function(){
                if(marked && section.targetType === 'markdown') {
                    var $article = $();
                    var $markdown = $(marked(data));
                    var $lastSection, checkFirstH1 = true;
                    var hasH2 = $markdown.filter('h2').length > 0;
                    $markdown.each(function(){
                        var $tag = $(this);
                        var tagName = $tag.prop('tagName');
                        if(tagName === 'STYLE' || tagName === 'SCRIPT') {
                            $article = $article.add($tag);
                            return;
                        }
                        if(checkFirstH1) {
                            if(tagName === 'H1') {
                                $pageHeader.find('h2 > .name').text($tag.html());
                            }
                            checkFirstH1 = false;
                            return;
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
                    $pageContent.html(data);
                }
                $pageBody.scrollTop(0);
                showPageTopic(topic);
                handlePageLoad();
                $pageAttrs.show();
                if(debug) console.log('show data', data);
            }
            if(lastShowDataCall) clearTimeout(lastShowDataCall);
            if($page.hasClass('openning')) {
                lastShowDataCall = setTimeout(showData, 700);
            } else {
                showData();
            }
        }, 400);

        if($body.hasClass('page-open')) {
            if(debug) console.log('open section in open page', section);
            return;
        }

        $body.addClass('page-open');

        toggleCompactMode(true, function(){
            checkScrollbar();
            $body.addClass('page-show');

            setTimeout(function(){
                $body.addClass('page-show-in');
                if($page.hasClass('loading')) $page.addClass('openning');
                $pageBody.scrollTop(0);
                setTimeout(function(){
                    $page.removeClass('openning');
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
                if(debug) console.error("Open section failed: can't find the section with id " + section.join('-'));
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
                $.each(sections, function(i, s){
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
                    if(debug) console.error("Open section failed: can't find the section with id " + section.join('-'));
                    return;
                }
            } else {
                if(debug) {
                    console.error("Open section stop by null docIndex or wrong section value.");
                }
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
                openPage($section, section, topic);
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
            var sectionsCount = $setions.length, collapsedSectionCount = $setions.filter('.collapsed').length;
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
        if(url.startsWith('#')) {
            url = url.substr(1);
            setTimeout(function(){
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
            if(debug) console.error('Open page url failed: unknown url', url);
        }
    };

    var isInLib = function(name, libNames, lib) {
        if(libNames) {
            var len = libNames.length;
            name = name.toLowerCase();
            var names = name + 's', nameDot = name + '.', namesDot = name + 's.';
            for(var i = 0; i < len; ++i) {
                var item = libNames[i];
                if(item === name || item === names || (lib && !lib.src && isInLib(name, lib.dpds))) {
                    return true;
                }
            }
        }
        return false;
    };

    var getBuildList = function(pkg, build, lib, list)
    {
        if(!list)
        {
            list = [];
        }
        if(!$.isArray(list))
        {
            list = [list];
        }

        if(build.bundles)
        {
            $.each(build.bundles, function(idx, val)
            {
                if(pkg.builds[val])
                {
                    getBuildList(pkg, pkg.builds[val], lib, list);
                }
                else
                {
                    list = getItemList(lib, [val], list);
                }
            });
        }

        if(build.basicDpds) list = getItemList(lib, build.basicDpds, list);
        list = getItemList(lib, build.includes, list, build.ignoreDpds);

        return list;
    };

    var getItemList  = function(lib, list, items, ignoreDpds, ignoreCombine)
    {
        items = items || [];

        if($.isArray(list))
        {
            $.each(list, function(idx, name)
            {
                getItemList(lib, name, items, ignoreDpds);
            });
        }
        else
        {
            var item = lib[list];
            if(item && items.indexOf(list) < 0)
            {
                if(!ignoreDpds && item.dpds)
                {
                    getItemList(lib, item.dpds, items, ignoreDpds);
                }
                if(item.src || !ignoreCombine) items.push(list);
            }
        }

        return items;
    };

    var loadPackage = function (){
        loadData(PKG_JSON, function(pkg) {
            $('.zui-version').text('v' + pkg.version);
            pkgLibs.standard = getBuildList(pkg, pkg.builds.standard, pkg.lib);
            pkgLibs.lite = getBuildList(pkg, pkg.builds.lite, pkg.lib);
            pkgLibs.separate = getBuildList(pkg, pkg.builds.separate, pkg.lib);

            eachSection(function(chapter, section, $sectionList){
                var pkgLib = pkg.lib[section.id] || pkg.lib[section.id + 's'];
                var lib = {bundles: {}};
                $.each(pkgLibs, function(name, libNames){
                    if(isInLib(section.id, libNames, pkgLib)) {
                        lib.bundles[name] = true;
                    }
                });

                if(pkgLib) {
                    if(pkgLib.thirdpart) {
                        lib.thirdpart = true;
                        lib.partUrl = pkgLib.website;
                        lib.pver = pkgLib.pver;
                    }

                    if(!pkgLib.src && pkgLib.dpds) {
                        lib.custom = true;
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
                }

                section.lib = lib;
            });
        });
    };

    var displayPkgLibTable = function($table) {
        if(!$table.length) return;
        loadData(PKG_JSON, function(data){
            var $tbody = $('<tbody></tbody>');

            var getChildCompsList = function(val){return data.lib[val].name;};
            var $tr, $td;
            $.each(data.lib, function(itemName, item){
                if(item.custom) return;

                var childComps = '';
                if(!item.src && item.dpds)
                {
                    var childList = getItemList(data.lib, item.dpds, null, true, true);
                    childComps = '合并组件包含：';
                    childComps += $.map(childList, getChildCompsList).join('、');
                }

                $tr = $('<tr/>');

                $td = $('<td/>');
                $td.attr('title', item.desc);
                $td.html('<strong>' + item.name + '</strong> (' + itemName + ((item.pver) ? (' v' + item.pver) : '') +')');
                $tr.append($td);

                $.each(pkgLibs, function(idx, sLib)
                {
                    $td = $('<td class="text-center"/>');
                    if(sLib.indexOf(itemName) > -1)
                    {
                        $td.addClass('success').html('<i class="text-success icon-ok"></i>');
                    }
                    else
                    {
                        $td.html('<i class="text-muted icon-remove"></i>');
                    }
                    $tr.append($td);
                });

                $td = $('<td/>');
                $td.html(item.ver ? (' v' + item.ver + '+') : childComps);
                $tr.append($td);

                $tbody.append($tr);
            });
            $table.find('tbody').remove();
            $table.append($tbody);
            $table.datatable({rowHover: false, fixedHeaderOffset: 200});
        });
    };

    var init = function(){
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
        $.each(chapters, function(chapterId, chapter){
            chapterId = chapterId.toLowerCase();
            chapter.$ = $('#chapter-' + chapterId);
            chapter.id = chapterId;
            chapter.$sections = $('#sections-' + chapterId);
        });

        bestPageWidth = $grid.children('.container').outerWidth();


        // check storage
        storageEnable = $.zui.store && $.zui.store.enable;

        openInNewWindow = getQueryString('newwindow', null);
        if(openInNewWindow === null) {
            openInNewWindow = $.zui.store.get('open_page_in_new_window', false)
        } else {
            $.zui.store.set('open_page_in_new_window', openInNewWindow);
        }

        // Setup ajax
        $.ajaxSetup({cache: false});

        // Load index.json
        loadData(INDEX_JSON, function(data){
            var firstLoad = !sectionsShowed;

            displaySection(data);

            if(!firstLoad) {
                var q = getQueryString('q');
                if(q) {
                    setTimeout(function(){
                        query(q);
                    }, 300);
                }

                var hash = window.location.hash
                if(hash) {
                    openPageUrl(hash);
                } else {
                    $queryInput.focus();
                }

                loadPackage();
            }
        });

        // Bind events
        var oldActivePreivewId;
        var cancelClickInPage;
        $(document).on('click', function(e){
            if(cancelClickInPage) {
                cancelClickInPage = false;
                return;
            }
            if(!$body.attr('data-query')) {
                chooseSection();
            }
        }).on('click', 'a[href^="#"]', function(){
            openPageUrl($(this).attr('href'));
        });
        $page.on('click', function(e){
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
        }).on('click', '.chapter-heading > h4 > .name', function(){
            $queryInput.focus().val('@' + $(this).closest('.chapter').data('id')).change();
        }).on('click', '.card', function(e){
            chooseSection($(this), true);
            stopPropagation(e);
        }).on('click', '.card-heading > h5 > .name, .card-heading > .icon', function(e){
            openSection($(this).closest('.section'));
            stopPropagation(e);
        }).on('click', '.topics > li > a', function(e){
            var $a = $(this);
            openPageUrl($a.attr('href'));
            e.preventDefault();
            stopPropagation(e);
        }).on('mouseenter', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').addClass('hover');
        }).on('mouseleave', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').removeClass('hover');
        }).on('mouseenter', '#section-control-icon .section-search > ul > li > a', function(){
            oldActivePreivewId = $('#section-control-icon').data('preview');
            chooseIcon($(this).closest('li'));
        }).on('mouseleave', '#section-control-icon .section-search > ul > li > a', function(){
            if(oldActivePreivewId) {
                chooseIcon($('#control-icon-' + oldActivePreivewId));
            }
        }).on('click', '#section-control-icon .section-search > ul > li > a', function(){
            oldActivePreivewId = $(this).closest('li').data('id');
        });

        $pageContent.on('click', 'section > header > h3', function(){
            togglePageSection($(this).closest('section'));
        }).on('mouseenter', 'section > header > h3', function(){
            $(this).closest('section').addClass('hover');
        }).on('mouseleave', 'section > header > h3', function(){
            $(this).closest('section').removeClass('hover');
        });
        $page.on('click', '#pageTogger', function(){
            togglePageSection();
        });

        $pageHeader.on('click', '.path-close-btn', function(){
            closePage();
        });

        var scrollHeight = $('#navbar').outerHeight();
        var lastScrollTop;
        $window.on('scroll', function(e){
            if($body.hasClass('layout-classic')) return;
            var isScrollAnimating = $body.data('isScrollAnimating');
            if(isScrollAnimating) {
                $window.scrollTop(0);
                return;
            }
            lastScrollTop = $window.scrollTop();
            if(lastScrollTop > scrollHeight && !$body.hasClass('compact-mode')) {
                toggleCompactMode(true);
            } else if(!$body.hasClass('page-show')) {
                $header.toggleClass('with-shadow', lastScrollTop > 20);
            }
        }).on('keydown', function(e){
            var code = e.which;
            var isPageNotShow = !$body.hasClass('page-show');
            var isInputFocus = $body.hasClass('input-query-focus');
            if(code === 9) { // Tab
                if(!$body.hasClass('input-query-focus')) {
                    $queryInput.focus();
                    e.preventDefault();
                }
            } else if(code === 13) { // Enter
                if(isPageNotShow && isChoosedSection()) {
                    openSection();
                }
            } else if(code === 27) { // Esc
                if(!closePage()) {
                    if(!isInputFocus) {
                        $queryInput.focus();
                    }
                    lastQueryString = '';
                    query();
                }
            } else if(code === 37) { // Left
                // if(!$body.hasClass('input-query-focus')){
                    chooseLeftSection();
                    e.preventDefault();
                // }
            } else if(code === 39) { // Right
                // if(!$body.hasClass('input-query-focus')){
                    chooseRightSection();
                    e.preventDefault();
                // }
            } else if(code === 38) { // Top
                if(isPageNotShow) {
                    choosePrevSection();
                    e.preventDefault();
                } else {
                    scrollToThis($pageBody, 'up');
                }
            } else if(code === 40) { // Down
                if(isPageNotShow) {
                    chooseNextSection();
                    e.preventDefault();
                }
            }
        });

        $pageBody.on('scroll', function(e){
            $page.toggleClass('with-shadow', $pageBody.scrollTop() > 20);
        });

        $search = $('#search');

        $queryInput.focus().on('change keyup paste input propertychange', function(){
            var val = $queryInput.val();
            if(val === lastQueryString) return;
            lastQueryString = val;
            $search.toggleClass('with-query-text', val.length > 0);
            clearTimeout($queryInput.data(LAST_QUERY_ID));
            $queryInput.data(LAST_QUERY_ID, setTimeout(function(){
                if(lastQueryString === $queryInput.data('queryString')) return;
                query(lastQueryString);
            }, 150));
        }).on('focus', function(){
            $body.addClass('input-query-focus');
            if($queryInput.val() && !$sections.filter('.open').length) {
                chooseSection($sections.filter('.show:first'));
            }
        }).on('blur', function(){
            $body.removeClass('input-query-focus');
        }).on('click', stopPropagation);

        $('#searchHelpBtn').on('click', function(e){
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

        $('#navbar .navbar-brand').on('click', function(e){
            if($body.hasClass('page-show')) {
                closePage();
                stopPropagation(e);
                e.preventDefault();
                console.log('close page')
            } else if($body.hasClass('compact-mode-in')) {
                $window.scrollTop(0);
                toggleCompactMode(false);
                stopPropagation(e);
                e.preventDefault();
            }
        });

        $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    };

    init();

    $.doc = {
        query: query,
        openSection: openSection,
        closePage: closePage,
        loadData: loadData,
        mutePageLoading: mutePageLoading,
        displayPkgLibTable: displayPkgLibTable
    };
}(window, jQuery));
