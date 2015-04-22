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

    var saveTraffic = false;
    var debug = 1;
    if(debug) console.error("DEBUG ENABLED.");

    var chapters = {
        learn: {col: 1}, 
        start: {col: 1}, 
        basic: {col: 1}, 
        control: {col: 2}, 
        component: {col: 2}, 
        javascript: {col: 3}, 
        view: {col: 3},
        promotion: {col: 1, row: 2}
    };
    var LAST_RELOAD_ANIMATE_ID = 'lastReloadAnimate';
    var LAST_QUERY_ID = 'LAST_QUERY_ID';
    var INDEX_JSON = 'index.json';
    var UNDEFINED = undefined;
    var PAGE_SHOW_FULL = 'page-show-full';
    var dataVersion;
    var storageEnable;
    var dataset = {
        // 'index.json': null
    };
    if(debug) window.dataset = dataset;

    var sectionsShowed;
    var queryGaCallback;
    var scrollBarWidth = -1;
    var bestPageWidth = 1120;
    var $body, $window, $grid, $sectionTemplate,
        $queryInput, $chapters, $chaptersCols,
        $choosedSection, $page, $pageHeader, $pageContent, 
        $pageContainer, $pageBody, $navbar,
        $header, $sections, $chapterHeadings; // elements

    var limitString = function(str, len) {
        if(str && str.length > len) {
            return str.substr(0, len) + '...[' + str.length + ']';
        }
        return str;
    };

    var getQueryString = function(name)
    {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
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
            var storedData = $.store.get('//' + url, null);
            if(storedData !== null) {
                var storedVersion = $.store.get('//' + url + '::V');
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
            if(!isIndexJson) return;
        }

        var dataType = url.endsWith('.json') ? 'json' : 'html';
        $.get(url, function(data){
            if(data !== null) {
                if(isIndexJson) {
                    dataVersion = data.version;
                }
                cacheData = {data: data, version: dataVersion};
                dataset[url] = cacheData;
                $.store.set('//' + url, data);
                $.store.set('//' + url + '::V', dataVersion);

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

    var displaySection = function() {
        var order = 0;
        if(eachSection(function(chapter, section, $sectionList){
            var chapterName = chapter.id;
            section.chapter = chapterName;
            var id = chapterName + '-' + section.id;
            var $tpl = $sectionTemplate.clone().attr('id', 'section-' + id).data('section', section);
            $tpl.attr({
                'data-id': section.id,
                'data-chapter': chapterName,
                'data-order': order++,
                'data-accent': chapter.accent
            });
            var $head = $tpl.children('.card-heading');
            $head.find('.name').text(section.name).attr('href', '#' + chapterName + '/' + section.id);
            $head.children('.desc').text(section.desc);
            displaySectionIcon($head.children('.icon'), section);
            var $topics = $tpl.find('.topics');
            if (section.topics && section.topics.length) {
                for (var tName in section.topics) {
                    var topic = section.topics[tName];
                    topic.id = tName;
                    $topics.append('<li data-id="' + tName + '">' + topic.name + '</li>');
                }
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
        $chaptersCols.removeClass('hide');
        $chapters.removeClass('hide');
        $sections.addClass('show');
        $chapterHeadings.addClass('show');
        $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function(){
            $sections.addClass('in');
            $chapterHeadings.addClass('in');
        }, 20));
        $body.removeClass('query-enabled');
    };

    var query = function(keyString) {
        if(!$sections) {
            if(debug) console.log('Query failed, $sections is empty. key:', keyString);
            return;
        }

        if($queryInput.data('queryString') !== keyString) {
            $queryInput.data('queryString', keyString).val(keyString);
            $grid.css('min-height', $grid.height());
        }

        if(keyString === UNDEFINED || keyString === null || !keyString.length) {
            resetQuery();
            return;
        }

        $body.addClass('query-enabled');

        // Send ga data
        if($.isFunction(ga)) {
            if(queryGaCallback) clearTimeout(queryGaCallback);
            queryGaCallback = setTimeout(function(){
                ga('send', 'pageview', window.location.pathname + '#search/' + keyString);
            }, 2000);
        }

        var keys = [];
        $.each(keyString.split(' '), function(i, key){
            key = $.trim(key).toLowerCase();
            var keyOption = {origin: key};
            if(key.startsWith('#')) {
                keyOption.type = 'id';
                keyOption.val = key.substr(1);
            } else if(key.startsWith('icon-') || key.startsWith('icon:')) {
                keyOption.type = 'icon';
                keyOption.val = key.substr(5);
            } else if(key.startsWith('i:')) {
                keyOption.type = 'icon';
                keyOption.val = key.substr(1);
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
            if(keyOption.val.length) {
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
                        chooseThisKey = section.id === 'icons';
                        if(chooseThisKey) matchType = ['section', 'id'];
                        weight = 100;
                        break;
                    default:
                        var sectionName = section.name.toLowerCase();
                        if(sectionName.includes(keyVal)) {
                            chooseThisKey = true;
                            matchType = ['section', 'name'];
                            weight = sectionName.startsWith(keyVal) ? 85 : 80;
                            break;
                        }
                        var chapterName = chapter.name.toLowerCase();
                        if(chapterName.includes(keyVal)) {
                            chooseThisKey = true;
                            matchType = ['chapter', 'name'];
                            weight = chapterName.startsWith(keyVal) ? 75 : 70;
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
            var $col;
            var showColCount = 0;
            $chaptersCols.each(function(){
                $col = $(this);
                var showCol = $col.children('.chapter:not(.hide)').length;
                $col.toggleClass('hide', !showCol);
                if(showCol) {
                    showColCount++;
                    if(!$body.hasClass('compact-mode')) {
                        var showCount = $col.find('.section:not(.hide)').length;
                        if(showCount > 2 && $window.height() < ($header.height() + showCount * 70)) {
                            $body.addClass('compact-mode');
                            setTimeout(function(){
                                $window.scrollTop(1);
                                $body.addClass('compact-mode-in');
                            }, 10);
                        }
                    }
                }
            });
            $grid.attr('data-show-col', showColCount);

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
        console.log('toggleCompactMode', toggle);
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
                    }, 500);
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
                }, 500);
            } else if(callback) {
                callback();
            }
        }
    };

    var closePage = function() {
        if($body.hasClass('page-open')) {
            var style = $page.data('trans-style');
            style['max-height'] = '';
            $page.css(style);
            $body.addClass('page-show-out').removeClass('page-open page-show-in');
            window.location.hash = '';
            setTimeout(function(){
                $body.removeClass('page-show page-show-out');
                resetScrollbar();
            }, 300);
            return true;
        }
        return false;
    };

    var openPage = function($section, section, topic) {
        var pageId = section.chapter + '-' + section.id;
        if($body.hasClass('page-open') && pageId === $body.attr('data-page')) {
            if(debug) console.error('The page already showed.');
            return;
        }
        chooseSection($section, false, true);

        // Send ga data
        var pageUrl = '#' + section.chapter + '/' + section.id;
        if(topic) pageUrl += '/' + topic;
        window.location.hash = pageUrl;
        if($.isFunction(ga)) ga('send','pageview', window.location.pathname + pageUrl);

        $body.attr('data-page-accent', $section.data('accent')).attr('data-page', pageId);
        displaySectionIcon($pageHeader.find('.icon'), section);
        $pageHeader.find('.name').text(section.name).attr('href', pageUrl);
        $pageHeader.children('.desc').text(section.desc);
        $pageContent.html('');
        var $loader = $page.addClass('loading').find('.loader').addClass('loading');

        loadData(section.url, function(data){
            $page.removeClass('loading');
            $loader.removeClass('loading');
            $pageContent.html(data);
            $queryInput.blur();
            $pageBody.scrollTop(0);
        });

        if($body.hasClass('page-open')) {
            if(debug) console.log('open section in open page', section);
            return;
        }

        $body.addClass('page-open');

        toggleCompactMode(true, function(){
            var offset = $section.offset();
            var sectionHeight = $section.outerHeight();
            var style = {
                left: offset.left - $grid.children('.container').offset().left - 6,
                top: offset.top - $window.scrollTop() - 81,
                width: $section.outerWidth(),
                height: sectionHeight,
                'max-height': sectionHeight
            };
            checkScrollbar();
            $body.addClass('page-show');
            $page.css(style).data('trans-style', style);
            $pageBody.css('width', bestPageWidth);
            
            setTimeout(function(){
                $body.addClass('page-show-in');
                if($page.hasClass('loading')) $page.addClass('openning').css('height', 380);
                $pageBody.scrollTop(0);
                setTimeout(function(){
                    $page.removeClass('openning');
                    bestPageWidth = $pageBody.css('width', '').width() + 40;
                    resizePage();
                }, 310);
            }, 10);
        });
    };

    var openSection = function(section, topic) {
        section = section || $choosedSection;

        var $section;
        if($.isArray(section)) {
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
                    console.error("Open section failed: can't find the section with id " + section.join('-'));
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

        var url = section.url;

        if(url === null) {
            if(debug) console.error("Open section stop by null url.");
            return;
        }

        if(!url) {
            url = 'part/' + section.chapter + '-' + section.id + '.html';
            section.url = url;
        }

        url = url.toLowerCase();
        if(url.startsWith('http://') || url.startsWith('https://') ) {
            window.open(url, '_blank');
        } else {
            openPage($section, section, topic);
        }
    };

    window.openS = openSection;

    var resizePage = function() {
        if($body.hasClass('page-show-out') || $page.hasClass('loading')) return;
        var height;
        if($body.hasClass(PAGE_SHOW_FULL)) {
            height = $window.height();
            $pageBody.toggleClass('with-scrollbar', $pageContent.outerHeight() > (height - 40 - $pageHeader.outerHeight()));
        } else {
            height = Math.min($pageContainer.outerHeight(), $pageHeader.outerHeight() + $pageContent.outerHeight() + 50);
        }
        $page.css('height', height);
    };

    $(function() {
        var stopPropagation = function(e) {
            e.stopPropagation();
        }

        $window = $(window);
        $body = $('body');
        $navbar = $('#navbar');
        $grid = $('#grid');
        $header = $('#header');
        $chaptersCols = $grid.find('.col');
        $page = $('#page');
        $pageHeader = $('#pageHeader');
        $pageContainer = $('#pageContainer');
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

        $body.toggleClass(PAGE_SHOW_FULL, $.store.get(PAGE_SHOW_FULL, false));

        // check storage
        storageEnable = $.store && $.store.enable;

        // Get document version
        // dataVersion = $body.data('version');

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
                    hash = hash.substr(1);
                    setTimeout(function(){
                        var params = hash.split('/');
                        var controllerName = params[0].toLowerCase();
                        if(controllerName === 'search' || controllerName === 'query') {
                            query(params[1]);
                        } else {
                            openSection(params);
                        }
                    }, 600);
                } else {
                    $queryInput.focus();
                }
            }
        });

        // Bind events
        $(document).on('click', function(e){
            if($body.hasClass('page-show')) {
                closePage();
                return;
            }
            chooseSection();
            $sections.removeClass('open');
        });
        $page.on('click', stopPropagation);
        $grid.on('click', '.card-heading', function(e) {
            var $card = $(this).closest('.card');
            if(!$card.hasClass('choosed')) {
                chooseSection($card, true);
            } else {
                $card.toggleClass('open');
            }
            stopPropagation(e);
        }).on('click', '.card', function(e){
            chooseSection($(this), true);
            stopPropagation(e);
        }).on('click', '.card-heading > h5 > .name, .card-heading > .icon', function(e){
            openSection($(this).closest('.section'));
            stopPropagation(e);
        }).on('click', '.topics > li', function(e){
            var $li = $(this);
            openSection($li.closest('.section'), $li.data('id'));
            stopPropagation(e);
        }).on('mouseenter', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').addClass('hover');
        }).on('mouseleave', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').removeClass('hover');
        });

        $pageContent.on('resize', resizePage);
        $window.resize(resizePage);

        $pageHeader.on('click', '.path-close-btn', function(){
            closePage();
        }).on('click', '.path-max-btn', function(){
            $body.toggleClass(PAGE_SHOW_FULL);
            setTimeout(resizePage, 300);
            $.store.set(PAGE_SHOW_FULL, $body.hasClass(PAGE_SHOW_FULL));
        });

        var scrollHeight = $('#navbar').outerHeight();
        var lastScrollTop;
        $window.on('scroll', function(e){
            var isScrollAnimating = $body.data('isScrollAnimating');
            console.log('scroll, isScrollAnimating',isScrollAnimating);
            if(isScrollAnimating) {
                $window.scrollTop(1);
                return;
            }
            lastScrollTop = $window.scrollTop();
            console.log('lastScrollTop', lastScrollTop);
            if(lastScrollTop > scrollHeight && !$body.hasClass('compact-mode')) {
                toggleCompactMode(true);
            } else if(!$body.hasClass('page-show') && $body.hasClass('compact-mode')) {
                if(lastScrollTop < 1) {
                    toggleCompactMode(false);
                } else {
                    $header.toggleClass('with-shadow', lastScrollTop > 20);
                }
            }
        }).on('keydown', function(e){
            var code = e.which;
            // console.log('keydown', code);
            var isPageNotShow = !$body.hasClass('page-show');
            var isInputFocus = $body.hasClass('input-query-focus');
            if(code === 13) { // Enter
                if(isPageNotShow && isChoosedSection()) {
                    openSection();
                }
            } else if(code === 27) { // Esc
                if(!closePage()) {
                    if(!isInputFocus) {
                        $queryInput.focus();
                    }
                    query();
                }
            } else if(code === 32) { // Space
                if(!isInputFocus){
                    if(closePage()) {
                    } else if(!$body.hasClass('compact-mode')) {
                        toggleCompactMode(true);
                    } else if(isChoosedSection()) {
                        openSection();
                    }
                    e.preventDefault();
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
                } else {
                    scrollToThis($pageBody);
                }
                e.preventDefault();
            }
        });

        $pageBody.on('scroll', function(e){
            $page.toggleClass('with-shadow', $pageBody.scrollTop() > 20);
        });

        $queryInput.on('change keyup paste input propertychange', function(){
            var val = $queryInput.val();
            if(val === $queryInput.data('queryString')) return;
            clearTimeout($queryInput.data(LAST_QUERY_ID));
            $queryInput.data(LAST_QUERY_ID, setTimeout(function(){
                query(val);
            }, 150));
        }).on('focus', function(){
            $body.addClass('input-query-focus');
            if($queryInput.val() && !$sections.filter('.open').length) {
                chooseSection($sections.filter('.show:first'));
            }
        }).on('blur', function(){
            $body.removeClass('input-query-focus');
        }).on('click', stopPropagation);

        $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    });
}(window, jQuery));
