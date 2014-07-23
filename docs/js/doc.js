var config = {'debugdisabled': true};

$(function()
{
    $(window).resize(function(){$('#main').css('min-height', $(window).height());}).resize();

    $('.navbar-collapse > .nav:not(.collapsed) .nav-heading').attr('data-target', '#main');
    $('.navbar-collapse > .nav > li > a').each(function()
    {
        var $this = $(this);
        var href = $this.attr('href');
        var target = href.substring(href.indexOf('#'), href.length);
        $this.attr('data-target', target);
    });
    $('body').scrollspy({target: '#navbar-collapse'});

    // hljs.initHighlightingOnLoad();
    prettyPrint();

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })

    // popover demo
    $("[data-toggle=popover]").popover();

    // navbar collapse
    $('.navbar-collapsed .nav > .nav-heading').click(function(event)
    {
        var $nav = $(this).closest('.nav');
        if($nav.hasClass('collapsed'))
        {
            if($(window).width() < 767)
            {
                $('.navbar-collapsed .nav').not($nav).children('li:not(.nav-heading)').slideUp('fast', function(){
                    $(this).closest('.nav').addClass('collapsed');
                });
            }
            $nav.removeClass('collapsed').children('li:not(.nav-heading)').slideDown('fast');
        }
        else
        {
            $nav.children('li:not(.nav-heading)').slideUp('fast', function(){$nav.addClass('collapsed')});
        }
    });

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
                messager.show('真棒！');
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
            cssPath: 'dist/css/zui.css',
            afterBlur: function(){$('#content').prev('.ke-container').removeClass('focus');},
              afterFocus: function(){$('#content').prev('.ke-container').addClass('focus');}
          });

          K.create('textarea.kindeditorSimple',
          {
            bodyClass : 'article-content',
            cssPath: 'dist/css/zui.css',
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
            cssPath: 'dist/css/zui.css',
            afterBlur: function(){$('#contentCustom').prev('.ke-container').removeClass('focus');},
              afterFocus: function(){$('#contentCustom').prev('.ke-container').addClass('focus');}
          });
        });
    }
});
