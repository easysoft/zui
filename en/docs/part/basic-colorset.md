section: basic
id: colorset
description: 默认配色方案
icon: icon-dashboard
filter: peise ps
---

# Color Set

<style>
.colorset > div.copyable:after {display: none}
.colorset > div.copyable .copyable-target {position: absolute; right: 5px; top: 4px; font-size: 12px; opacity: 0.6; transition: opacity .2s;}
.colorset > div.copyable:hover .copyable-target {opacity: 1}
.colorset > div > .btn-copy-code {border: none; display: block; width: 158px; height: 158px; position: absolute; top: 0; left: 0; background: transparent;}
.colorset > div > .btn-copy-code > .icon {opacity: 0; display: block; width: 40px; height: 40px; border-radius: 20px; background: rgba(0,0,0,.15); color: #fff; line-height: 40px; margin: 0 auto; text-shadow: none; transform: scale(0.2); transition: transform .5s cubic-bezier(.175,.885,.32,1), opacity .5s cubic-bezier(.175,.885,.32,1);}
.colorset > div > .btn-copy-code:hover > .icon {transform: scale(1); opacity: 1;}
</style>

Color set in ZUI includes primary, grayscaled and extra colors.

## Primary

Primary colors are used in menus, navbars, links, highlighted options, which work as the overall tone of ZUI interfaces.

Primary colors in ZUI are:

<div class="colorset">
  <div class="color-primary" data-color="primary"></div>
  <div class="color-secondary" data-color="secondary"></div>
  <div class="color-pale" data-color="pale"></div>
  <div class="color-fore" data-color="fore"></div>
  <div class="color-back" data-color="back"></div>
</div>

## Grayscaled

Grayscaled colors mandidate using colors in various tones varying from bright to dark. Black is generally used if no color is specified. Grayscaled colors are used on the background, borders, and unimportant text, and they create layers for the interface, define the boundaries of contents, and make it easier to distinguish the importance of contents.

<div class="colorset">
  <div class="color-gray-darker" data-color="grayDarker"></div>
  <div class="color-gray-dark" data-color="grayDark"></div>
  <div class="color-gray" data-color="gray"></div>
  <div class="color-gray-light" data-color="grayLight"></div>
  <div class="color-gray-lighter" data-color="grayLighter"></div>
  <div class="color-gray-pale" data-color="grayPale"></div>
</div>

<div class="colorset">
  <div class="color-white" data-color="white"></div>
  <div class="color-black" data-color="black"></div>
</div>

<div class="colorset">
  <div class="color-light" data-color="light"></div>
  <div class="color-dark" data-color="dark"></div>
</div>

## Extra

Extra colors are options for special controls. For example, it is used on message boxes with various levels, buttons for special purposes, special texts, etc.

<div class="colorset">
  <div class="color-red" data-color="red"></div>
  <div class="color-yellow" data-color="yellow"></div>
  <div class="color-green" data-color="green"></div>
  <div class="color-blue" data-color="blue"></div>
  <div class="color-brown" data-color="brown"></div>
  <div class="color-purple" data-color="purple"></div>
</div>

<div class="colorset">
  <div class="color-danger" data-color="danger"></div>
  <div class="color-warning" data-color="warning"></div>
  <div class="color-success" data-color="success"></div>
  <div class="color-info" data-color="info"></div>
  <div class="color-important" data-color="important"></div>
  <div class="color-special" data-color="special"></div>
</div>

<div class="colorset">
  <div class="color-danger-pale" data-color="dangerPale"></div>
  <div class="color-warning-pale" data-color="warningPale"></div>
  <div class="color-success-pale" data-color="successPale"></div>
  <div class="color-info-pale" data-color="infoPale"></div>
  <div class="color-important-pale" data-color="importantPale"></div>
  <div class="color-special-pale" data-color="specialPale"></div>
</div>

## JS Color Set

You can get the colors used in JavaScript. Refer to [Color](#javascript/color)。

## Tips for setting colors

*   Choose brighter colors which makes easy to distinguish foregrounds from backgrounds.
*   Each color can be set as +/-10% in brightness to create similar but slightly different color for borders and hovering.
*   Colors used on the interface should be ones that are listed in the color set.
*   Primary and grayscaled colors should be your first choice. Use extra colors for special buttons and messages.

<script>
function afterPageLoad() {
    if(!$.zui.colorset) return;

    $('.colorset > div').each(function() {
        var $color = $(this).addClass('copyable');
        var color = $.zui.colorset[$color.data('color')].toUpperCase();
        var inverseColor = new $.zui.Color(color).contrast('#333', '#fff').toCssStr();
        $color.append('<div class="copyable-target" style="color: ' + inverseColor + '">' + $.zui.colorset[$color.data('color')].toUpperCase() + '</div>');
    });
}
</script>
