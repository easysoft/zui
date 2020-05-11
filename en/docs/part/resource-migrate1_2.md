section: resource
id: migrate1_2
description: One1.2The following versions are upgraded to the latest version of the wizard
icon: 1.2
filter: cong1.2banbenshengjizhinan c1.2bbsjzn
---

# From1.2Version upgrade guide

<div class="alert alert-warning with-icon">
  <i class="icon-info-sign"></i>
  <div class="content">
    <h4>note</h4>
    <p>The fit of this article1.2And lower versions are upgraded to1.3User，Other users can ignore。</p>
  </div>
</div>

## What changes?

To avoid global variable contamination，ZUIin1.3Before being removed`window`with`jQuery`Object binding on the instance。Now all shared object methods are all bound to`$.zui`On the object。If you use the following object methods in your code，You will need to change your code.（Code）Or use a compatible plugin。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>1.2Pre-version usage</th>
      <th>1.3Version usage</th>
      <th>Related components</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`$.uuid`</td>
      <td>`$.zui.uuid`</td>
      <td>ZUIofjQueryExpansion</td>
    </tr>
    <tr>
      <td>`$.callEvent`</td>
      <td>`$.zui.callEvent`</td>
      <td>ZUIofjQueryExpansion</td>
    </tr>
    <tr>
      <td>`$.clientLang`</td>
      <td>`$.zui.clientLang`</td>
      <td>ZUIofjQueryExpansion</td>
    </tr>
    <tr>
      <td>`$.browser`</td>
      <td>`$.zui.browser`</td>
      <td>IEBrowser version judgment plugin</td>
    </tr>
    <tr>
      <td>`$.messager` `window.messager`</td>
      <td>`$.zui.messager`</td>
      <td>Floating message</td>
    </tr>
    <tr>
      <td>`$.Messager` `window.Messager`</td>
      <td>`$.zui.Messager`</td>
      <td>Floating message</td>
    </tr>
    <tr>
      <td>`$.showMessager` `window.showMessager`</td>
      <td>`$.zui.showMessager`</td>
      <td>Floating message</td>
    </tr>
    <tr>
      <td>`$.closeModal` `window.closeModal`</td>
      <td>`$.zui.closeModal`</td>
      <td>Modal box trigger</td>
    </tr>
    <tr>
      <td>`$.ajustModalPosition` `window.ajustModalPosition`</td>
      <td>`$.zui.ajustModalPosition`</td>
      <td>Modal box trigger</td>
    </tr>
    <tr>
      <td>`$.ModalTrigger` `window.ModalTrigger`</td>
      <td>`$.zui.ModalTrigger`</td>
      <td>Modal box trigger</td>
    </tr>
    <tr>
      <td>`$.modalTrigger` `window.modalTrigger`</td>
      <td>`$.zui.modalTrigger`</td>
      <td>Modal box trigger</td>
    </tr>
    <tr>
      <td>`$.store` `window.store`</td>
      <td>`$.zui.store`</td>
      <td>Local storage</td>
    </tr>
    <tr>
      <td>`window.Color`</td>
      <td>`$.zui.Color`</td>
      <td>Color assist method</td>
    </tr>
    <tr>
      <td>`window.imgReady`</td>
      <td>`$.zui.imgReady`</td>
      <td>Image loading judgment</td>
    </tr>
  </tbody>
</table>

## How to deal with

There are two ways to be compatible with previous usages.。

*   Manually change the previous wording to a new one（recommend）；
*   use1.3Compatible plugins provided in，This can be1.3Continue to use before usage，Compatible plugins are included in`dist/lib/migrate/`Under contents。
