$(function() {
    var debug = 1;
    if(debug) console.error("DEBUG ENABLED.");
    var $grid = $('#grid');
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

    var $sectionTemplate = $('#sectionTemplate').attr('id', null);
    var docIndexStoreName = "docIndex";
    var docIndex = $.store ? $.store.get(docIndexStoreName) : null;
    var chapters = ['start', 'basic', 'control', 'component', 'javascript', 'view'];
    var $sections = {};
    for (var i in chapters) {
        var name = chapters[i];
        $sections[name] = $('#' + name + 'Sections');
    }

    var reloadSection = function(json) {
        if (json) docIndex = json;
        if (!docIndex) return;
        console.log("reloadSection", docIndex);
        for (var chapter in $sections) {
            if ($sections.hasOwnProperty(chapter) && docIndex.chapters[chapter]) {
                var sections = docIndex.chapters[chapter].sections;
                var $sectionList = $sections[chapter];
                $sectionList.children().remove();
                for (var i in sections) {
                    var section = sections[i];
                    var $tpl = $sectionTemplate.clone();
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
                    if (section.topics && section.topics.length) {
                        var $topics = $tpl.find('.topics');
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
                }
            }
            clearTimeout($grid.data('lastReloadAnimate'));
            $grid.data('lastReloadAnimate', setTimeout(function(){
                $grid.find('.section, .chapter-heading').addClass('in');
            }, 200));
        }
    }

    reloadSection();
    $.getJSON('index.json', function(json, textStatus) {
        if(!debug && docIndex && json && json.version === docIndex.version) return;
        reloadSection(json);
        if ($.store) {
            $.store.set(docIndexStoreName, json);
        }
    });
});
