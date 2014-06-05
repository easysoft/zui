var config = {'debugdisabled': true};

$(function()
{
    $(window).resize(function(){$('#main').css('min-height', $(window).height());}).resize();

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
            $nav.removeClass('collapsed').children('li:not(.nav-heading)').slideDown('fast');
        }
        else
        {
            $nav.children('li:not(.nav-heading)').slideUp('fast', function(){$nav.addClass('collapsed')});
        }
    });
});
