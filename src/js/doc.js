(function(window, $)
{
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

    var saveTraffic = false;
    var debug = 1;
    if(debug) console.error("DEBUG ENABLED.");

    var chapters = {
        start: {}, 
        basic: {}, 
        control: {}, 
        component: {}, 
        javascript: {}, 
        view: {}
    };
    var LAST_RELOAD_ANIMATE_ID = 'lastReloadAnimate';
    var INDEX_JSON = 'index.json';
    var dataset = {
        'index.json': null
    };
    if(debug) window.dataset = dataset;

    var $body, $window, $grid, $sectionTemplate, $header; // elements

    var loadData = function(url, callback, forceLoad) {
        var data = dataset[url];
        var isFirstLoad = data === null;
        if(isFirstLoad) {
            data = $.store.get(url, null);
            if(data !== null) {
                callback(data);
            }
        }

        if(data === null || forceLoad || isFirstLoad || (!saveTraffic)) {
            var dataType = url.endsWith('.json') ? 'json' : 'html';
            $.get(url, function(remoteData){
                if(!debug && data !== null) {
                    if(dataType === 'json' && $.isPlainObject(remoteData) && data.version && remoteData.version && remoteData.version === data.version) return;
                    if(dataType === 'html' && data === remoteData) return;
                }
                dataset[url] = remoteData;
                callback(remoteData);
                $.store.set(url, remoteData);
            }, dataType);
        }
    }

    var displaySection = function(docIndex) {
        docIndex = docIndex || dataset[INDEX_JSON];
        if (!docIndex) return;
        console.log("Display Section: ", docIndex);
        $.each(chapters, function(chapterName, chapter){
            if(!docIndex.chapters[chapterName]) return;

            var sections = docIndex.chapters[chapterName].sections;
            var $sectionList = chapter.$sections;
            $sectionList.children().remove();
            $.each(sections, function(i, section){
                var $tpl = $sectionTemplate.clone().attr('id', 'section-' + section.id);
                $tpl.attr('data-id', section.id);
                var $head = $tpl.children('.card-heading');
                $head.find('.name').text(section.name);
                $head.children('.desc').text(section.desc);
                var $icon = $head.children('.icon');
                if (section.icon === undefined || section.icon === null || section.icon === "") {
                    section.icon = section.name.substr(0, 1).toUpperCase();
                }
                if (section.icon.indexOf('icon-') === 0) {
                    $icon.addClass(section.icon);
                } else {
                    $icon.addClass('text-icon').text(section.icon);
                }
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
                $sectionList.append($tpl.addClass('show'));
            });
        });
        clearTimeout($grid.data(LAST_RELOAD_ANIMATE_ID));
        $grid.data(LAST_RELOAD_ANIMATE_ID, setTimeout(function(){
            $grid.find('.section, .chapter-heading').addClass('in');
        }, 200));
    }

    $(function() {
        $window = $(window);
        $body = $('body');
        $grid = $('#grid');
        $header = $('#header');
        $sectionTemplate = $('#sectionTemplate').attr('id', null);
        for (var chapterName in chapters) {
            chapters[chapterName].$sections = $('#sections-' + chapterName);
        }

        loadData(INDEX_JSON, displaySection)

        // Bind events
        $grid.on('click', '.card-heading', function() {
            var $card = $(this).closest('.card');
            if($card.hasClass('without-topics')) {
                $card.find('.btn-toggle').trigger('click');
            } else {
                $card.toggleClass('open');
            }
            return false;
        }).on('mouseenter', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').addClass('hover');
        }).on('mouseleave', '.card-heading > h5 > .name, .card-heading > .icon', function(){
            $(this).closest('.card-heading').removeClass('hover');
        });

        var scrollHeight = $('#navbar').outerHeight();
        var isScrollAnimating = false;
        var lastScrollTop;
        $window.on('scroll', function(e){
            if(isScrollAnimating) {
                $window.scrollTop(lastScrollTop);
            }
            lastScrollTop = $window.scrollTop();
            console.log(lastScrollTop);
            if(lastScrollTop > scrollHeight && !$body.hasClass('compact-mode')) {
                isScrollAnimating = true;
                $body.addClass('compact-mode')
                setTimeout(function(){
                    $window.scrollTop(1);
                    $body.addClass('compact-mode-in');
                    isScrollAnimating = false;
                }, 10);
            } else if($body.hasClass('compact-mode')) {
                if(lastScrollTop < 1) {
                    isScrollAnimating = true;
                    $body.removeClass('compact-mode-in');
                    setTimeout(function(){
                        $body.removeClass('compact-mode');
                        isScrollAnimating = false;
                    }, 500);
                } else {
                    $header.toggleClass('with-shadow', lastScrollTop > 20);
                }
            }
        });
    });
}(window, jQuery));
