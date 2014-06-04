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

    $("[data-toggle=popover]")
      .popover();
});
