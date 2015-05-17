/*!
 * ZUI - v1.3.0 - 2015-05-17
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
    var INDEX_JSON = '../index.json';
    var ICONS_JSON = '../icons.json';
    var PKG_JSON = '../../package.json';
    var UNDEFINED = undefined;
    var dataVersion;
    var storageEnable;
    var dataset = {
        // 'index.json': null
    };
    if(debug) window.dataset = dataset;
    var pkgLibs = {standard: null, lite: null, separate: null};

    var documentTitle = 'ZUI';
    var sectionsShowed;
    var queryGaCallback;
    var scrollBarWidth = -1;
    var bestPageWidth = 1120;
    var $body, $window, $grid, $sectionTemplate,
        $queryInput, $chapters, $chaptersCols, $pageAttrs,
        $choosedSection, $page, $pageHeader, $pageContent, $pageLoader,
        $pageContainer, $pageBody, $navbar, $search, lastQueryString,
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

    var loadData = function(url, callback) {
        var cacheData = dataset[url];
        var isHasCache = cacheData && cacheData.version;
        var isIndexJson = url === INDEX_JSON;
        if(!isHasCache && storageEnable) {
            var storedData = $.zui.store.get('//' + url, null);
            if(storedData !== null) {
                var storedVersion = $.zui.store.get('//' + url + '::V');
                if(storedVersion) {
                    cacheData = {data: storedData, version: storedVersion};
                    dataset[url] = cacheData;
                    isHasCache = true;
                    if(debug) console.log('Load', url, 'from storage:', cacheData);
                }
            }
        }

        if(isHasCache && (isIndexJson || cacheData.version === dataVersion)) {
            if(debug) console.log('Load', url, 'from cache:', cacheData);
            callback(cacheData.data);
            if(!isIndexJson && !debug) return;
        }

        var dataType = url.endsWith('.json') ? 'json' : 'html';
        $.get(url, function(data){
            if(data !== null) {
                if(isIndexJson) {
                    dataVersion = data.version;
                }
                cacheData = {data: data, version: dataVersion};
                dataset[url] = cacheData;
                $.zui.store.set('//' + url, data);
                $.zui.store.set('//' + url + '::V', dataVersion);

                if(debug) console.log('Load', url, 'from remote:', cacheData);
                callback(data);
            } else if(isHasCache && !isIndexJson) {
                if(debug) console.log('Failed load', url, 'from remote, instead load cache:', cacheData);
                callback(cacheData.data);
            }
        }, dataType).error(function(){
            if(debug) console.error("Ajax error:", url);
            if(isHasCache && !isIndexJson) {
                if(debug) console.log('Failed load', url, 'from remote with error, instead load cache:', cacheData);
                callback(cacheData.data);
            }

            if($body.hasClass('page-open')) {
                $pageBody.children('.loader').addClass('with-error');
            }
        });
    };

    var eachSection = function(callback, eachChapterCallback) {
        var docIndex = dataset[INDEX_JSON].data;
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

    var initSections = function() {
        var order = 0;
        if(eachSection(function(chapter, section, $sectionList){
            var chapterName = chapter.id;
            section.chapter = chapterName;
            section.chapterName = chapter.name;
            section.accent = chapter.accent;

            var url = section.url;
            if(typeof url === 'undefined') {
                section.url = '../part/' + section.chapter + '-' + section.id + '.html';
                section.target = 'page';
            } else if(isExternalUrl(url)) {
                section.target = 'external';
            } else if(url && url.endsWith('.md')) {
                section.target = 'page';
                section.targetType = 'markdown';
                if(url === '.md') {
                    section.url = '../part/' + section.chapter + '-' + section.id + '.md';
                }
            } else {
                section.target = '';
            }

            var id = chapterName + '-' + section.id;
            var sectionUrl = '#' + chapterName + '/' + section.id;
            if (section.topics && section.topics.length) {
                var topicId = 0;
                for (var tName in section.topics) {
                    var topic = section.topics[tName];

                    if(typeof topic.id === 'undefined') topic.id = tName;
                    var topicUrl = typeof topic.url === 'undefined' ? (sectionUrl + '/' + (topicId++)) : topic.url;
                }
            }
        })) {
            $body.children('.loader').removeClass('loading');
        } else if(debug) {
            console.error("Display sections failed.");
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
        $body.addClass('page-show page-show-in');
    };

    var handlePageLoad = function() {
        var delayMutedPageLoading = false;
        if($.isFunction(window['onPageLoad'])) {
            delayMutedPageLoading = window['onPageLoad']() === false;
        }

        $pageContent.find('img[src^="docs/"]').each(function(){
            var $img = $(this);
            $img.attr('src', $img.attr('src').replace(/docs\//g, '../'));
        });

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
        }, 1000);

        if(!delayMutedPageLoading) mutePageLoading();
    };

    var openPage = function(section, topic) {
        var pageId = section.chapter + '-' + section.id;
        if($body.hasClass('page-open') && pageId === $body.attr('data-page')) {
            if(debug) console.error('The page already showed.');
            return;
        }

        // Send ga data
        var pageUrl = '#' + section.chapter + '/' + section.id;
        if(topic) pageUrl += '/' + topic;
        window.document.title = section.chapterName + ' > ' + section.name + ' - ' + documentTitle;
        if(window['ga'] && $.isFunction(ga)) ga('send','pageview', window.location.pathname + pageUrl);

        $body.attr('data-page-accent', section.accent).attr('data-page', pageId);
        displaySectionIcon($pageHeader.find('.icon'), section);
        $pageHeader.find('.name').text(section.name).attr('href', pageUrl);
        $pageHeader.find('.desc').text(section.desc);

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

        $pageContent.html('');
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
            }
            if(lastShowDataCall) clearTimeout(lastShowDataCall);
            if($page.hasClass('openning')) {
                lastShowDataCall = setTimeout(showData, 320);
            } else {
                showData();
            }
        });
    };

    var openSection = function(section, topic) {
        if(debug) console.log('openSection', section, topic);
        section = section || $choosedSection;

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
            var docIndex = dataset[INDEX_JSON].data;
            if(docIndex && section.length > 1) {
                var sectionId = section[1];
                var sections = docIndex.chapters[section[0]].sections;
                var ok = false;
                for(var i in sections) {
                    var s = sections[i];
                    if(s.id === sectionId) {
                        if(section.length > 2) {
                            topic = section[2];
                        }
                        section = s;
                        ok = true;
                        break;
                    }
                }
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

        if(section.url === '') {
            $.zui.messager.show('该链接所指示的文档尚未完成。你可以Fork项目来完善文档。');
            return;
        }

        switch(section.target) {
            case 'external':
                window.open(section.url, '_blank');
                break;
            case 'page':
                openPage(section, topic);
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
        if(debug) console.log('Open page url', url);
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
            for(var itemName in data.lib)
            {
                var item = data.lib[itemName];
                if(item.custom) continue;

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
            }
            $table.find('tbody').remove();
            $table.append($tbody);
            $table.datatable({rowHover: false, fixedHeaderOffset: 60});
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
        $header = $('#header');
        $page = $('#page');
        $pageHeader = $('#pageHeader');
        $pageAttrs = $('#pageAttrs');
        $pageLoader = $('#pageLoader');
        $pageBody = $('#pageBody');
        $pageContent = $('#pageContent');
        $.each(chapters, function(chapterId, chapter){
            chapterId = chapterId.toLowerCase();
            chapter.id = chapterId;
        });

        // check storage
        storageEnable = $.zui.store && $.zui.store.enable;

        // Setup ajax
        $.ajaxSetup({cache: false});

        // Load index.json
        var firstLoad = true;
        loadData(INDEX_JSON, function(data){

            initSections(data);

            if(!firstLoad) {
                var hash = window.location.hash
                if(hash) {
                    openPageUrl(hash);
                }

                loadPackage();
            }

            firstLoad = false;
        });

        // Bind events
        var oldActivePreivewId;
        var cancelClickInPage;
        $(document).on('click', 'a[href^="#"]', function(){
            openPageUrl($(this).attr('href'));
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

        $pageBody.on('scroll', function(e){
            $page.toggleClass('with-shadow', $pageBody.scrollTop() > 20);
        });

        $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    };

    init();

    $.doc = {
        openSection: openSection,
        closePage: closePage,
        loadData: loadData,
        mutePageLoading: mutePageLoading,
        displayPkgLibTable: displayPkgLibTable
    };
}(window, jQuery));
