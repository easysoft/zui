+function($) {
    $(document).on('mouseenter.zui.dropdown', '.dropdown-submenu', function() {
        var $menu = $(this).children('.dropdown-menu');
        var isDropUp = $menu.closest('.dropup ').length;
        $menu.css(isDropUp ? 'bottom' : 'top', 0);
        ($.zui.asap || setTimout)(function() {
            var bouding = $menu[0].getBoundingClientRect();
            if(isDropUp) {
                $menu.css('bottom', bouding.top < 0 ? bouding.top : 0);
            } else {
                var bottomSpace = $(window).height() - bouding.bottom;
                $menu.css('top', bottomSpace < 0 ? bottomSpace : 0);
            }
        }, 0);
    });
}(window.jQuery);
