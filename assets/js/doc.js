var config = {'debugdisabled': true};

$(function()
{
    $(window).resize(function(){$('#main').css('min-height', $(window).height());}).resize();

    // hljs.initHighlightingOnLoad();
    prettyPrint();
});
