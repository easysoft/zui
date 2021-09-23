/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 *
 * ZUI: The file has been changed in ZUI. It will not keep update with the
 * Bootsrap version in the future.
 * http://openzui.com
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+ function($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var zuiname = 'zui.dropdown';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle=dropdown]'
    var Dropdown = function(element) {
        var $el = $(element).on('click.' + zuiname, this.toggle)
    }

    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)

        if($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if(!isActive) {
            if('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we we use a backdrop because click events don't delegate
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }

            $parent.trigger(e = $.Event('show.' + zuiname))

            if(e.isDefaultPrevented()) return

            $parent
                .toggleClass('open')
                .trigger('shown.' + zuiname)

            $this.focus()
        }

        return false
    }

    Dropdown.prototype.keydown = function(e) {
        if(!/(38|40|27)/.test(e.keyCode)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        if(!isActive || (isActive && e.keyCode == 27)) {
            if(e.which == 27) $parent.find(toggle).focus()
            return $this.click()
        }

        var $items = $('[role=menu] li:not(.divider):visible a', $parent)

        if(!$items.length) return

        var index = $items.index($items.filter(':focus'))

        if(e.keyCode == 38 && index > 0) index-- // up
            if(e.keyCode == 40 && index < $items.length - 1) index++ // down
                if(!~index) index = 0

        $items.eq(index).focus()
    }

    function clearMenus(e) {
        $(backdrop).remove()
        $(toggle).each(function(e) {
            var $parent = getParent($(this))
            if(!$parent.hasClass('open')) return
            $parent.trigger(e = $.Event('hide.' + zuiname))
            if(e.isDefaultPrevented()) return
            $parent.removeClass('open').trigger('hidden.' + zuiname)
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target')

        if(!selector) {
            selector = $this.attr('href')
            selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
        }
        var $parent;
        try {
            $parent = selector && $(selector);
        } catch(e) {}
        return $parent && $parent.length ? $parent : $this.parent()
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    var old = $.fn.dropdown

    $.fn.dropdown = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('dropdown')

            if(!data) $this.data('dropdown', (data = new Dropdown(this)))
            if(typeof option == 'string') data[option].call($this)
        })
    }

    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    var apiName = zuiname + '.data-api'
    $(document)
        .on('click.' + apiName, clearMenus)
        .on('click.' + apiName, '.dropdown form,.not-clear-menu', function(e) {
            e.stopPropagation()
        })
        .on('click.' + apiName, toggle, Dropdown.prototype.toggle)
        .on('keydown.' + apiName, toggle + ', [role=menu]', Dropdown.prototype.keydown)

}(window.jQuery);
