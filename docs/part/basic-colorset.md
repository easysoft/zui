section: basic
id: colorset
description: 默认配色方案
icon: icon-dashboard
filter: peise ps
---

# 配色

<style>
.colorset > div.copyable:after {display: none}
.colorset > div.copyable .copyable-target {position: absolute; right: 5px; top: 4px; font-size: 12px; opacity: 0.6; transition: opacity .2s;}
.colorset > div.copyable:hover .copyable-target {opacity: 1}
.colorset > div > .btn-copy-code {border: none; display: block; width: 158px; height: 158px; position: absolute; top: 0; left: 0; background: transparent;}
.colorset > div > .btn-copy-code > .icon {opacity: 0; display: block; width: 40px; height: 40px; border-radius: 20px; background: rgba(0,0,0,.15); color: #fff; line-height: 40px; margin: 0 auto; text-shadow: none; transform: scale(0.2); transition: transform .5s cubic-bezier(.175,.885,.32,1), opacity .5s cubic-bezier(.175,.885,.32,1);}
.colorset > div > .btn-copy-code:hover > .icon {transform: scale(1); opacity: 1;}
</style>

ZUI的配色表包含三部分：主要颜色，灰度颜色及额外颜色。

## 主要颜色

包含3～5种颜色，决定了ZUI界面整体色调。主要颜色会用在菜单、导航、链接、高亮选项等。

在ZUI的默认配色方案中，包含以下主要颜色：

<div class="colorset">
  <div class="color-primary" data-color="primary"></div>
  <div class="color-secondary" data-color="secondary"></div>
  <div class="color-pale" data-color="pale"></div>
  <div class="color-fore" data-color="fore"></div>
  <div class="color-back" data-color="back"></div>
</div>

## 灰度颜色

灰度颜色强制使用同一色调不同亮度的一组颜色。在无特别需求的情况下，一般使用黑色灰度。灰度颜色会用在块的背景，边框，次要的文本上。灰度颜色为界面创建了层次感，加深了内容与内容间的边界，更易于体现内容的重要程度。

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

## 额外颜色

额外的颜色为特殊控件提供的更多的色彩选择。例如各种级别的消息框，特殊作用的按钮，特殊文本等。

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

## 在JS中使用配色表

你可以在Javascript代码中获取和使用这些配色。具体用法参考章节[配色表](#javascript/color)。

## 配色设计要点

*   主张使用较明亮的颜色，前景和背景对比鲜明，易于区别。
*   配色表中的每种颜色都可以在亮度上上下浮动10%左右来生成一个相近但又有些许不同的颜色作为边框及悬停渐变使用。
*   在界面中运用的所有配色尽量使用配色表中已列明的颜色；
*   优先使用主要颜色和灰度颜色，仅在特殊的按钮或消息时才使用额外颜色。

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
