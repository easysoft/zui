$(function()
{
    var version = '1.0',
        versionToNumber = function(ver)
        {
            ver = ver.split('.', 3);
            var num = '';
            for(var i = 0; i < ver.length; i++)
            {
                var v = ver[i];
                while(v.length < 4)
                {
                    v += '0';
                }
                num += v;
            }
            while(num.length < 12)
            {
                num += '0';
            }
            return parseInt(num);
        },
        isGithub = window.location.host === 'easysoft.github.io';
    var fixPath = function(path)
        {
            return isGithub ? ('/zui' + path) : path;
        };

    var resizeMainContent = function()
    {
        $('#main').css('min-height', $(window).height());
    };
    resizeMainContent();

    $(window).resize(resizeMainContent);

    /* set navbar */
    var $header = $('body > header');
    $header.load(fixPath('/docs/partial/navbar.html'), function()
    {
        if(!$('#navbar').length)
        {
            $('body').addClass('without-navbar');
            return;
        }

        var tab = $header.data('tab') || 'index',
            $navbarCollapse = $('#navbar-collapse');

        if(tab != 'index')
        {
            var $navTab = $navbarCollapse.find('[data-tab="' + tab + '"]');
            $navTab.removeClass('collapsed');
            document.title = $navTab.find('.nav-heading').text() + ' - ' + document.title;
        }

        $navbarCollapse.find('.nav > li > a').each(function()
        {
            var $this = $(this);
            var href = $this.attr('href');
            var target = href.substring(href.indexOf('#'), href.length);
            $this.attr('data-target', target).attr('href', fixPath($this.attr('href')));
        });

        $('body').addClass('with-navbar').scrollspy({target: '#navbar-collapse'});

        if(isGithub)
        {
            $('#navbar .navbar-brand').attr('href', '/zui');
        }

        // navbar collapse
        $navbarCollapse.find('.nav > .nav-heading').click(function()
        {
            var $nav = $(this).closest('.nav');
            if($nav.hasClass('collapsed'))
            {
                $('.navbar-collapsed .nav').not($nav).children('li:not(.nav-heading)').slideUp('fast', function(){
                    $(this).closest('.nav').addClass('collapsed');
                });
                if($(window).width() < 767)
                {
                }
                $nav.removeClass('collapsed').children('li:not(.nav-heading)').slideDown('fast');
            }
            else
            {
                $nav.children('li:not(.nav-heading)').slideUp('fast', function(){$nav.addClass('collapsed');});
            }
        });
    });

    /* get version */
    $.getJSON(fixPath('/package.json'), function(data)
    {
        version = data.version;

        $('.version-current').text('v' + version);


        // var typeSet = ['less', 'js', 'resource'];
        var indexOfArray = function(array, item)
        {
            if(!$.isArray(array)) return -1;
            for(var i = 0; i < array.length; i++)
            {
                if(array[i] == item) return i;
            }
            return -1;
        };

        var itemInLib = function(array, item, lib)
        {
            for(var i = 0; i < array.length; i++)
            {
                if(array[i] == item || (!lib[item].src && lib[item].dpds && indexOfArray(lib[item].dpds, array[i]) > -1)) return i;
            }
            return -1;
        };

        var getItemList  = function(lib, list, items, ignoreDpds, ignoreCombine)
        {
            items = items || [];
            var thisFn = arguments.callee;

            if($.isArray(list))
            {
                $.each(list, function(idx, name)
                {
                    thisFn(lib, name, items, ignoreDpds);
                });
            }
            else
            {
                var item = lib[list];
                if(item && indexOfArray(items, list) < 0)
                {
                    if(!ignoreDpds && item.dpds)
                    {
                        thisFn(lib, item.dpds, items, ignoreDpds);
                    }
                    if(item.src || !ignoreCombine) items.push(list);
                }
            }

            return items;
        };

        var getBuildList = function(build, lib, list)
        {
            if(!list)
            {
                list = [];
            }
            if(!$.isArray)
            {
                list = [list];
            }

            if(build.bundles)
            {
                var thisFn = arguments.callee;
                $.each(build.bundles, function(idx, val)
                {
                    if(data.builds[val])
                    {
                        thisFn(data.builds[val], lib, list);
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

        var standard = getBuildList(data.builds.standard, data.lib);
        var lite = getBuildList(data.builds.lite, data.lib);
        var separate = getBuildList(data.builds.separate, data.lib);

        $('#main').children('section').each(function()
        {
            var $section = $(this);
            var $header = $section.children('.page-header');
            var id = $section.attr('id');
            var lib = data.lib[id];
            if(lib)
            {
                if(itemInLib(standard, id, data.lib) >= 0)
                {
                    $header.children('h2').append(' <span class="label label-badge label-primary" title="此组件包含在标准版中提供">ZUI</span>');
                }

                if(itemInLib(lite, id, data.lib) >= 0)
                {
                    $header.children('h2').append(' <span class="label label-badge label-info" title="此组件也在精简版中提供">ZUI.LITE</span>');
                }

                if(itemInLib(separate, id, data.lib) >= 0)
                {
                    $header.children('h2').append(' <span class="label label-badge label-success" title="此组件在lib目录中单独提供">LIB</span>');
                }

                if(lib.ver)
                {
                    $header.children('h2').append(' <span class="label label-badge" title="最早提供版本为' + lib.ver + '">v' + lib.ver + '+</span>');
                }

                if(lib.thirdpart)
                {
                    $header.children('h2').append(' <a target="_blank" href="' + lib.website + '" class="label label-badge label-danger" title="这是一个第三方组件，点击访问网站"><i class="icon-heart"></i>' + (lib.pver ? (' v' + lib.pver) : '') + '</a>');
                }

            }
        });

        var $buildTable = $('#buildTable tbody').empty();
        if($buildTable.length)
        {
            var getChildCompsList = function(val){return data.lib[val].name;};
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

                $buildTable.append('<tr><td title="' + (item.desc || '') + '"><strong>' + item.name + '</strong> (' + itemName + ((item.pver) ? (' v' + item.pver) : '') +')</td><td class="text-center">' + (indexOfArray(standard, itemName) > -1 ? '<i class="text-success icon-ok"></i>' : '<i class="text-muted icon-remove"></i>') +'</td><td class="text-center">' + (indexOfArray(lite, itemName) > -1 ? '<i class="text-success icon-ok"></i>' : '<i class="text-muted icon-remove"></i>') +'</td><td class="text-center">' + (indexOfArray(separate, itemName) > -1 ? '<i class="text-success icon-ok"></i>' : '<i class="text-muted icon-remove"></i>') +'</td><td>' + (item.ver ? (' v' + item.ver + '+') : childComps) + '</td></tr>');
            }
        }

        $('section .page-header h2 > .label').tooltip({placement: 'top'});
    });

    /* set lite version label */
    // $('#main > section[data-lite] > .page-header > h2').append(' <small class="label label-info" title="" data-original-title="此内容也在精简版中提供">LITE</small>');

    window.prettyPrint();

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    });

    // popover demo
    $("[data-toggle=popover]").popover();

    $('#changeTheme').click(function()
    {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../dist/css/zui-theme.css';
        document.getElementsByTagName('head')[0].appendChild(link);
    });

    if($.fn.dashboard) $('#dashboard').dashboard();

    if($.fn.droppable)
    {
        $('[data-toggle="droppable"]').droppable(
        {
            start: function()
            {
                $('.droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里。');
            },
            drop: function(event)
            {
                window.messager.show('真棒！');
                $('.droppable-target').removeClass('panel-success').removeClass('panel-warning');
                if(event.target)
                {
                    event.target.addClass('panel-success').find('.panel-heading').text('成功拖到目的地。');
                }
            },
            drag: function(event)
            {

                $('.droppable-target').removeClass('panel-success').removeClass('panel-warning');
                if(event.target) event.target.addClass('panel-warning');
            }
        });
    }

    if($.fn.boards) $('.boards').boards();

    // Chosen
    if($.fn.chosen) $('.chosen-select').chosen();
    if($.fn.chosenIcons) $('#chosenIcons').chosenIcons();

    // datetime picker
    if($.fn.datetimepicker)
    {
        $('.form-datetime').datetimepicker(
        {
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            format: 'yyyy-mm-dd hh:ii'
        });
        $('.form-date').datetimepicker(
        {
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd'
        });
        $('.form-time').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 1,
            minView: 0,
            maxView: 1,
            forceParse: 0,
            format: 'hh:ii'
        });
    }

    if(window.KindEditor)
    {
        KindEditor.ready(function(K)
        {
          K.create('textarea.kindeditor',
          {
            allowFileManager : true,
            bodyClass : 'article-content',
            afterBlur: function(){$('#content').prev('.ke-container').removeClass('focus');},
            afterFocus: function(){$('#content').prev('.ke-container').addClass('focus');}
          });

          K.create('textarea.kindeditorSimple',
          {
            bodyClass : 'article-content',
            resizeType : 1,
            allowPreviewEmoticons : false,
            allowImageUpload : false,
            items : [
            'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
            'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
            'insertunorderedlist', '|', 'emoticons', 'image', 'link'],
            afterBlur: function(){$('#contentSimple').prev('.ke-container').removeClass('focus');},
              afterFocus: function(){$('#contentSimple').prev('.ke-container').addClass('focus');}
          });

          K.create('textarea.customStyle',
          {
            themeType : 'simple',
            bodyClass : 'article-content',
            afterBlur: function(){$('#contentCustom').prev('.ke-container').removeClass('focus');},
              afterFocus: function(){$('#contentCustom').prev('.ke-container').addClass('focus');}
          });
        });
    }
});
