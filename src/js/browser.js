/* ========================================================================
 * ZUI: browser.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function(window, $)
{
    'use strict';
    var browseHappyTip = {
        'zh_cn': '您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
        'zh_tw': '您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
        'en': 'Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href="http://browsehappy.com/" target="_blank" class="alert-link">Learn more...</a>'
    };

    // The browser modal class
    var Browser = function()
    {
        var isIE = this.isIE;
        var ie = isIE();
        if (ie)
        {
            for (var i = 10; i > 5; i--)
            {
                if (isIE(i))
                {
                    ie = i;
                    break;
                }
            }
        }

        this.ie = ie;

        this.cssHelper();
    };

    // Append CSS class to html tag
    Browser.prototype.cssHelper = function()
    {
        var ie = this.ie,
            $html = $('html');
        $html.toggleClass('ie', ie)
            .removeClass('ie-6 ie-7 ie-8 ie-9 ie-10');
        if (ie)
        {
            $html.addClass('ie-' + ie)
                .toggleClass('gt-ie-7 gte-ie-8 support-ie', ie >= 8)
                .toggleClass('lte-ie-7 lt-ie-8 outdated-ie', ie < 8)
                .toggleClass('gt-ie-8 gte-ie-9', ie >= 9)
                .toggleClass('lte-ie-8 lt-ie-9', ie < 9)
                .toggleClass('gt-ie-9 gte-ie-10', ie >= 10)
                .toggleClass('lte-ie-9 lt-ie-10', ie < 10);
        }
    };

    // Show browse happy tip
    Browser.prototype.tip = function()
    {
        if (this.ie && this.ie < 8)
        {
            var $browseHappy = $('#browseHappyTip');
            if (!$browseHappy.length)
            {
                $browseHappy = $('<div id="browseHappyTip" class="alert alert-dismissable alert-danger alert-block" style="position: relative; z-index: 99999"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><div class="container"><div class="content text-center"></div></div></div>');
                $browseHappy.prependTo('body');
            }

            $browseHappy.find('.content').html(this.browseHappyTip || browseHappyTip[$.clientLang() || 'zh_cn']);
        }
    };

    // Detect it is IE, can given a version
    Browser.prototype.isIE = function(version)
    {
        // var ie = /*@cc_on !@*/false;
        var b = document.createElement('b');
        b.innerHTML = '<!--[if IE ' + (version || '') + ']><i></i><![endif]-->';
        return b.getElementsByTagName('i').length === 1;
    };

    // Detect ie 10 with hack
    Browser.prototype.isIE10 = function()
    {
        return ( /*@cc_on!@*/ false);
    };

    window.browser = new Browser();

    $(function()
    {
        if (!$('body').hasClass('disabled-browser-tip'))
        {
            window.browser.tip();
        }
    });
}(window, jQuery));
