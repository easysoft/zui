/* Device */
+function($, window, document, Math)
{
    var desktopLg = 1200,
        desktop   = 992,
        tablet    = 768,
        cssNames  = {desktop: 'screen-desktop', desktopLg: 'screen-desktop-wide', tablet: 'screen-tablet', phone: 'screen-phone', isMobile: 'device-mobile', isDesktop: 'device-desktop'};

    var resetCssClass = function()
    {
        var width = $(window).width();
        $('html').toggleClass(cssNames.desktop, width >= desktop && width < desktopLg)
                 .toggleClass(cssNames.desktopLg, width >= desktopLg)
                 .toggleClass(cssNames.tablet, width >= tablet && width < desktop)
                 .toggleClass(cssNames.phone, width < tablet)
                 .toggleClass(cssNames.isMobile, width < desktop)
                 .toggleClass(cssNames.isDesktop, width >= desktop);
    };

    $(window).resize(resetCssClass);
    resetCssClass();
}(jQuery,window,document,Math);
