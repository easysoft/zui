section: control
id: button
description: 按钮和按钮组
icon: icon-bold
filter: anniu an
---

# Buttons

Buttons are used to trigger actions and are usually used in forms, dialog boxes, menus. A nice button design can guide users efficiently.

## Types

Buttons are categorized as shown below: 

<table class="table table-responsive">
  <tbody>
    <tr>
      <th class="col-md-4">Button</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><button class="btn btn-primary">Primary</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-primary&quot; type="button"&gt;Primary&lt;/button&gt;
&lt;a class=&quot;btn btn-primary&quot; href=&quot;your/url/&quot;&gt;Primary&lt;/a&gt;</code></pre>
        <p>Instruct users to finish primary actions on the page, such as submit a form, search, select, etc. Usually only one primary button is set on a page.</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-default">Standard</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Standard&lt;/button&gt;</code></pre>
        <p>Common buttons, e.g. cancel a from, reset, etc.</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-link">Link</button></td>
      <td>
      <pre><code>&lt;button class=&quot;btn btn-link&quot; type=&quot;button&quot;&gt;Link&lt;/button&gt;</code></pre>
      <p>A link button looks like a hyperlink, except that the user triggers an action by clicking the link button, rather than being directed to an address by the hyperlink. Link buttons are used for non-primary actions on a page, e.g. cancel a form.</p></td>
    </tr>
    <tr>
      <td>
        <div class="btn-group">
          <button class="btn">Group</button>
          <button class="btn">Second</button>
          <button class="btn">Third</button>
        </div>
      </td>
      <td>
        <pre><code>&lt;div class=&quot;btn-group&quot;&gt;
  &lt;button class=&quot;btn&quot;&gt;Group&lt;/button&gt;
  &lt;button class=&quot;btn&quot;&gt;Second&lt;/button&gt;
  &lt;button class=&quot;btn&quot;&gt;Third&lt;/button&gt;
&lt;/div&gt;</code></pre>
        <p>Button groups are used to display relevant buttons side-by-side, so commonalities of buttons are demonstrated. Icons are often used to replace the text on the buttons. Refer to <a href="#component/buttongroup">Component → Button Group</a> for how to use it.</p>
      </td>
    </tr>
  </tbody>
</table>

## Sizes

<table class="table">
  <tbody>
    <tr>
      <th class="col-md-4">Example</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><button class="btn btn-lg btn-primary" type="button">Large</button>
      <button class="btn btn-lg" type="button">Large</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-lg&quot; type=&quot;button&quot;&gt;Large&lt;/button&gt;</code></pre>
        <p>large-sized button</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-primary" type="button">Default</button>
      <button class="btn btn-default" type="button">Default</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Default&lt;/button&gt;</code></pre>
        <p>button size by default </p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-sm btn-primary" type="button">Small</button>
      <button class="btn btn-sm" type="button">Small</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-sm &quot; type=&quot;button&quot;&gt;Small&lt;/button&gt;</code></pre>
        <p>small-sized button</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-mini btn-primary" type="button">Mini</button>
      <button class="btn btn-mini" type="button">Mini</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-mini &quot; type=&quot;button&quot;&gt;Mini&lt;/button&gt;</code></pre>
        <p>mini button</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-large btn-block btn-primary" type=
      "button">Block level button</button> <button class=
      "btn btn-large btn-block btn-default" type="button">Block level button</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-block &quot; type=&quot;button&quot;&gt;Block level button&lt;/button&gt;</code></pre>
        <p>A block level button spans the full width of a parent, so it fits for important actions in narrower panels.</p>
      </td>
    </tr>
  </tbody>
</table>

## States

<table class="table">
  <tbody>
    <tr>
      <th class="col-md-4">Example</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><button class="btn btn-default"><i class="icon icon-star"></i> With Icons</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn &quot; type=&quot;button&quot;&gt;&lt;i class=&quot;icon icon-star&quot;&gt;&lt;/i&gt; With Icons&lt;/button&gt;</code></pre>
        Using an icon on a button can be a finishing touch.
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-primary active" data-toggle=
      "button">Toggle States</button></td>
      <td>
        <pre><code>&lt;button data-toggle=&quot;button&quot; class=&quot;btn &quot; type=&quot;button&quot;&gt;Toggle States&lt;/button&gt;</code></pre>
        <p>Toggle buttons work like checkboxes. Once clicked, change to the selected states (add <code>.active</code>). Click it again to unselect.</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="btn-group" data-toggle="buttons">
          <label class="btn active">
            <input type="checkbox" checked> Checkbox 1
          </label>
          <label class="btn">
            <input type="checkbox"> Checkbox 2
          </label>
          <label class="btn">
            <input type="checkbox"> Checkbox 3
          </label>
        </div>
      </td>
      <td>
        <pre><code>&lt;div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;&gt;
  &lt;label class=&quot;btn active&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked&gt; Checkbox 1
  &lt;/label&gt;
  &lt;label class=&quot;btn&quot;&gt;
    &lt;input type=&quot;checkbox&quot;&gt; Checkbox 2
  &lt;/label&gt;
  &lt;label class=&quot;btn&quot;&gt;
    &lt;input type=&quot;checkbox&quot;&gt; Checkbox 3
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
        <p>Use <code>&lt;label&gt;</code> for each button of a button group and include a checkbox form control to enable a checkbox. It is like a multi-select control(checkbox). Refer to <a href="#component/buttongroup">Component →Button Group</a> for how to use a button group.</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-primary active">
            <input type="radio" name="options" id="option1" checked> Option 1
          </label>
          <label class="btn btn-primary">
            <input type="radio" name="options" id="option2"> Option 2
          </label>
          <label class="btn btn-primary">
            <input type="radio" name="options" id="option3"> Option 3
          </label>
        </div>
      </td>
      <td>
        <pre><code>&lt;div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;&gt;
  &lt;label class=&quot;btn btn-primary active&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;options&quot; id=&quot;option1&quot; checked&gt; Option 1
  &lt;/label&gt;
  &lt;label class=&quot;btn btn-primary&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;options&quot; id=&quot;option2&quot;&gt; Option 2
  &lt;/label&gt;
  &lt;label class=&quot;btn btn-primary&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;options&quot; id=&quot;option3&quot;&gt; Option 3
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
        <p>Use <code>&lt;label&gt;</code> or each button of a button group and include a radio form control to en    able an option. It is like a radio control. Refer to <a href="#component/buttongroup">Component →Button Group</a> for how to use a button group.</p>
    </tr>
    <tr>
      <td><button id="loadingBtnExample" type="button" class="btn btn-primary" data-loading-text="Loading...">Loading States</button></td>
      <td>
        <pre><code>&lt;button id=&quot;loadingBtnExample&quot; type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-loading-text=&quot;Loading...&quot;&gt;Loading States&lt;/button&gt;</code></pre>
        <pre><code>$('#loadingBtnExample').on('click', function() {
var $btn = $(this);
$btn.button('loading');

// Use setTimeout simulate complex function logic
setTimeout(function() {
    $btn.button('reset');
}, 2000);
});</code></pre>
        <p>It takes while for an action to work, so you can set a loading button to be triggered by the user and change the text of the button to &quot;Loading&quot; till it is done.</p>
        <p>You need to enable the loading state for the button.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a disabled href="#" class="btn btn-primary disabled">Disabled Action</a> <a disabled href="#" class="btn disabled">Disabled Action</a>
      </td>
      <td>
        <pre><code>&lt;a disabled href=&quot;your/url/&quot; class=&quot;btn disabled&quot;&gt;Disabled Action&lt;/a&gt;</code></pre>
        <p>If an action is not available in some scenarios, its button should be in a disabled state, which indicates the user that the button is not clickable.</p>
        <p>Add `.disabled` to a button, so the button will be disabled You can also add attributes of `disabled` to disable actions like clicking.</p>
      </td>
    </tr>
  </tbody>
</table>

## Colors

Colors of a button can indicate its function. For example, primary buttons and standard buttons are in different colors, so their importance can be distinguished. Use more colors to make the purposes clearer and consistent with user expectations.

<table class="table">
  <tbody>
    <tr>
      <th class="col-md-4">Example</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><button type="button" class="btn">Default</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn &quot; type=&quot;button&quot;&gt;Default&lt;/button&gt;</code></pre>
        <p>default appearance</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-primary">Primary</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-primary &quot; type=&quot;button&quot;&gt;Primary&lt;/button&gt;</code></pre>
        <p>distinguish primary buttons from others</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-info">Info</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-info &quot; type=&quot;button&quot;&gt;Info&lt;/button&gt;</code></pre>
        <p>substitute style for the default style</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-success">Success</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-success &quot; type=&quot;button&quot;&gt;Success&lt;/button&gt;</code></pre>
        <p>successful and positive actions</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-warning">Warning</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-warning &quot; type=&quot;button&quot;&gt;Warning&lt;/button&gt;</code></pre>
        <p>warn users to be careful of this action</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-danger">Danger</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-danger &quot; type=&quot;button&quot;&gt;Danger&lt;/button&gt;</code></pre>
        <p>warn users that this action is dangerous</p>
      </td>
    </tr>
  </tbody>
</table>

<script>
function afterPageLoad() {
    $('#loadingBtnExample').on('click', function() {
        var $btn = $(this);
        $btn.button('loading');

        // Use setTimeout simulating complex function logic
        setTimeout(function() {
            $btn.button('reset');
        }, 2000);
    });
}
</script>
