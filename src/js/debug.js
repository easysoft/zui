$(function()
{
    $('body').append('<style>#zuiDebug{display:none; position: fixed;left: 2%;top: 30%;}#zuiDebug .icon{width: 160px;height: 160px;padding: 20px;border-radius: 100px;background-color: #333;color: #fff;transition:all 0.4s;}#zuiDebug .icon.visible-xs{background-color: #39B3D7;}#zuiDebug .icon.visible-sm{background-color: #47A447;}#zuiDebug .icon.visible-md{background-color: #ED9C28;}#zuiDebug .icon.visible-lg{background-color: #D2322D;}#zuiDebug .icon:hover{opacity: 0.5;}#zuiDebug .icon > i{display: block;font-size: 60px;}#zuiDebug .icon small{display: inline-block;height: 24px;opacity: 0.7;font-size: 12px;background-color: rgba(0,0,0,0.5);border-radius:12px; line-height: 24px;margin-top: 10px;padding: 0 10px;}</style><div id="zuiDebug"><div class="icon text-center visible-xs"><i class="icon-mobile-phone"></i><strong>Phone</strong><div class="text-center"><small>XS <span class="screen-size"></span></small></div></div><div class="icon text-center visible-sm"><i class="icon-tablet"></i><strong>Tablet</strong><div class="text-center"><small>SM <span class="screen-size"></span></small></div></div><div class="icon text-center visible-md"><i class="icon-desktop"></i><strong>Desktop</strong><div class="text-center"><small>MD <span class="screen-size"></span></small></div></div><div class="icon text-center visible-lg"><i class="icon-desktop"></i><strong>Widescreen</strong><div class="text-center"><small>LG <span class="screen-size"></span></small></div></div></div>')
    displayScreenSize();
    $('#zuiDebug').fadeIn();
    $(window).resize(displayScreenSize);
    function displayScreenSize()
    {
        $('#zuiDebug .screen-size').text($(document).width() + ' x ' + $(document).height());
    }
});
