section: view
id: form
description: Used to organize form controls
icon: icon-layout
filter: biaodan bd
---

# Forms

## Basic forms

Embed [**Control → Form control**](#control/textbox) in `<div class="form-group">`to get a form control group.

Text labels `<label>` are usually included in the form control group. [**Component → Input group**](#component/inputgroup)（`.input-group`）can also be placed in a form control group.

Stack multiple form control groups in `<form>`  to get a vertically stacked form.

Button `.btn` can be added directly to a form.

<example>
  <form>
    <div class="form-group">
      <label for="exampleInputAccount1">Account</label>
      <input type="text" class="form-control" id="exampleInputAccount1" placeholder="E-mail/Phone number/Username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
    </div>
    <div class="form-group">
      <label for="exampleInputMoney1">Donation</label>
      <div class="input-group">
        <span class="input-group-addon">￥</span>
        <input type="number" class="form-control" id="exampleInputMoney1" placeholder="The minimum donation amount is ￥10.00.">
        <span class="input-group-addon">.00</span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</example>

```html
<form>
  <div class="form-group">
    <label for="exampleInputAccount1">Account</label>
    <input type="text" class="form-control" id="exampleInputAccount1" placeholder="E-mail/Phone number/Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputMoney1">Donation</label>
    <div class="input-group">
      <span class="input-group-addon">￥</span>
      <input type="number" class="form-control" id="exampleInputMoney1" placeholder="The minimum donation amount is ￥10.00.">
      <span class="input-group-addon">.00</span>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Horizontally stacked form

Add `.form-horizontal` class in `<form>` and use grid classes to get a form with horizontal layout(Label and input box are on the same line). Actually it is behaviors of the form control group `.form-group` that are changed and displayed as a row(`.row`) in the grid, so you do not need to use `.row` again in the form.

Tips:

 - Add `.col-*` in the form control group `<label>` to set the column width of the label;
 - Input box(`<input>`, `<textarea>`, and `<select>`), checkbox and radio(`.checkbox` and `.radio`), and button(`.btn`) should be placed in a separate container `<div class="col-*">` to apply the column width;
 - If the control group does not include a label, add `.col-*-offset-*` Class in `<div class="col-*">` to align on the left vertically;
 - Add multiple `.col-*` in `.form-group` to implement multiple input boxes on the same row.

<example>
  <form class="form-horizontal">
    <div class="form-group">
      <label for="exampleInputAccount4" class="col-sm-2">Account</label>
      <div class="col-md-6 col-sm-10">
        <input type="text" class="form-control" id="exampleInputAccount4" placeholder="E-mail/Phone number/Username">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword4" class="col-sm-2">Password</label>
      <div class="col-md-6 col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputAddress1" class="col-sm-2">Address</label>
      <div class="col-sm-3">
        <select class="form-control" id="exampleInputAddress1">
          <option>Beijing</option>
          <option>Shanghai</option>
        </select>
      </div>
      <div class="col-sm-3">
        <input type="text" class="form-control" id="exampleInputAddress2" placeholder="City/County">
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="exampleInputAddress3" placeholder="Address">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> remember me
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">log in</button>
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="exampleInputAccount4" class="col-sm-2">Account</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount4" placeholder="E-mail/Phone number/Username">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword4" class="col-sm-2">Password</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputAddress1" class="col-sm-2">Address</label>
    <div class="col-sm-3">
      <select class="form-control" id="exampleInputAddress1">
        <option>Beijing</option>
        <option>Shanghai</option>
      </select>
    </div>
    <div class="col-sm-3">
      <input type="text" class="form-control" id="exampleInputAddress2" placeholder="City/County">
    </div>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="exampleInputAddress3" placeholder="Address">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">log in</button>
    </div>
  </div>
</form>
```

## Inline form

Add `.form-inline` in `<form>` to make internal form controls display as `inline-block`. These form controls are arranged horizontally within the allowed width. It works only when the width of viewport >= 768px. If the width is smaller, the form controls will be vertically aligned.

<example>
  <form class="form-inline">
    <div class="form-group">
      <label for="exampleInputEmail3">Email</label>
      <input type="text" class="form-control" id="exampleInputEmail3" placeholder="you@me.com">
    </div>
    <div class="form-group">
      <label for="exampleInputInviteCode3">Invitation code</label>
      <input type="password" class="form-control" id="exampleInputInviteCode3" placeholder="XXXX-XXXX-XXXX">
    </div>
    <button type="submit" class="btn btn-primary">Activate</button>
  </form>
</example>

```html
<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputEmail3">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail3" placeholder="you@me.com">
  </div>
  <div class="form-group">
    <label for="exampleInputInviteCode3">Invitation code</label>
    <input type="password" class="form-control" id="exampleInputInviteCode3" placeholder="XXXX-XXXX-XXXX">
  </div>
  <button type="submit" class="btn btn-primary">Activate</button>
</form>
```

## Help text

Use `<div class="help-block">` To display help text and add it to the form control group.

<example>
  <div class="form-group">
    <label for="exampleInputAccount2">Username</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="Enter the username to register">
    <div class="help-block">Username can contain special characters and Chinese characters.</div>
  </div>
</example>

```html
<div class="form-group">
  <div class="form-group">
    <label for="exampleInputAccount2">Account</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="Enter the username to register">
    <div class="help-block">Username can contain special characters and Chinese characters.</div>
  </div>
</div>
```

## Checkbox and radio button

Checkbox and radio button(See [**Control →Checkbox and radio button**](#control/checkbox/)) can be stacked directly with the form control group `<form>`.

<example>
  <form>
    <div class="form-group">
      <label for="exampleInputInviteCode1">Invitation code</label>
      <input type="text" class="form-control" id="exampleInputInviteCode1" placeholder="Please enter the invitation code">
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> I have read and accept the user agreement
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="exampleRadioOption1"> Use default options
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="exampleRadioOption1"> Let me customize the options
      </label>
    </div>
    <button type="submit" class="btn">Start</button>
  </form>
</example>

```html
<form>
  ...
  <div class="checkbox">
    <label>
      <input type="checkbox"> I have read and accept the user agreement
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption1"> Use default options
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption1"> Let me customize the options
    </label>
  </div>
  ...
</form>
```

Inline checkbox and inline radio button(See [**Control →Checkbox and radio button**](#control/checkbox/1)) can be used as the content of a form control group.

<example>
  <div class="form-group">
    <label class="checkbox-inline">
      <input type="checkbox"> Checkbox 1
    </label>
    <label class="checkbox-inline">
      <input type="checkbox"> Checkbox 2
    </label>
    <label class="checkbox-inline">
      <input disabled type="checkbox"> Disabled checkbox
    </label>
  </div>
  <div class="form-group">
    <label class="radio-inline">
      <input type="radio" name="radioOptionsExample3"> Radio button 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="radioOptionsExample3"> Radio button 2
    </label>
    <label class="radio-inline">
      <input disabled type="radio" name="radioOptionsExample3"> Disabled radio button
    </label>
  </div>
</example>

```html
<div class="form-group">
  <label class="checkbox-inline">
    <input type="checkbox"> Checkbox 1
  </label>
  ...
</div>

<div class="form-group">
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample3"> Radio button 1
  </label>
  ...
</div>
```

## Validation states

Add `.has-warning`, `.has-error`, and `.has-success` to a form control group to apply the corresponding style for validation states. These styles affect `<label>`, `.form-control`, and `.help-block` in the form control group. 

Validation state classes can also be added to the checkbox(`.checkbox`) and radio button (`.radio`).

<example>
  <div class="form-group has-success">
    <label for="inputSuccess1">Input box(success)</label>
    <input type="text" class="form-control" id="inputSuccess1">
    <div class="help-block">This is the help text</div>
  </div>
  <div class="form-group has-warning">
    <label for="inputWarning1">Input box(warning)</label>
    <input type="text" class="form-control" id="inputWarning1">
  </div>
  <div class="form-group has-error">
    <label for="inputError1">Input box(error)</label>
    <input type="text" class="form-control" id="inputError1">
  </div>
  <div class="checkbox has-success">
    <label>
      <input type="checkbox" id="checkboxSuccess" value="option1">
      Checkbox(success)
    </label>
  </div>
  <div class="checkbox has-warning">
    <label>
      <input type="checkbox" id="checkboxWarning" value="option1">
      Checkbox(warning)
    </label>
  </div>
  <div class="checkbox has-error">
    <label>
      <input type="checkbox" id="checkboxError" value="option1">
      Checkbox(error)
    </label>
  </div>
</example>

```html
<div class="form-group has-success">
  <label for="inputSuccess1">Input box(success)</label>
  <input type="text" class="form-control" id="inputSuccess1">
  <div class="help-block">This is the help text.</div>
</div>
<div class="form-group has-warning">
  <label for="inputWarning1">Input box(warning)</label>
  <input type="text" class="form-control" id="inputWarning1">
</div>
<div class="form-group has-error">
  <label for="inputError1">Input box(error)</label>
  <input type="text" class="form-control" id="inputError1">
</div>
<div class="checkbox has-success">
  <label>
    <input type="checkbox" id="checkboxSuccess" value="option1">
    Checkbox(success)
  </label>
</div>
<div class="checkbox has-warning">
  <label>
    <input type="checkbox" id="checkboxWarning" value="option1">
    Checkbox(warning)
  </label>
</div>
<div class="checkbox has-error">
  <label>
    <input type="checkbox" id="checkboxError" value="option1">
    Checkbox(error)
  </label>
</div>
```

<div class="alert alert-info">
  <h4>Use JavaScript to validate</h4>
  <p>Validation states change the appearance by adding a class name, but it does not automatically apply the correct state when the form is submitted. You still need to use JavaScript to validate the form data and apply the appropriate validation state class.</p>
</div>

## Use fieldset

Use `<fieldset>` to group multiple form controls.

Use `<legend>` in `<fieldset>` to define group headers.

<example>
  <form>
    <fieldset>
      <legend>Account Information</legend>
      <div class="form-group">
        <label for="exampleInputAccount3">Account</label>
        <input type="text" class="form-control" id="exampleInputAccount3" placeholder="E-mail/Phone number/Username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword3">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword3" placeholder="">
      </div>
    </fieldset>
    <fieldset>
      <legend>Others</legend>
      <div class="form-group">
        <label for="exampleInputInviteCode2">Invitation code</label>
        <input type="text" class="form-control" id="exampleInputInviteCode2" placeholder="Please enter the invitation code">
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> Use default options
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> Let me customize the options
        </label>
      </div>
    </fieldset>
    <button type="submit" class="btn">Start</button>
  </form>
</example>

```html
<form>
  <fieldset>
    <legend>Account Information</legend>
    <div class="form-group">
      <label for="exampleInputAccount3">Account</label>
      <input type="text" class="form-control" id="exampleInputAccount3" placeholder="E-mail/Phone number/Username">
    </div>
    ...
  </fieldset>
  <fieldset>
    <legend>Other</legend>
    ...
  </fieldset>
  <button type="submit" class="btn">Start</button>
</form>
```

## Static text

If you need to place static text on the right of the label in horizontally stacked forms, add `.form-control-static` class to `<p>`.

<example>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-2">Username</label>
      <div class="col-sm-10">
        <p class="form-control-static">me@example.com</p>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword5" class="col-sm-2">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword5" placeholder="Password">
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2">Username</label>
    <div class="col-sm-10">
      <p class="form-control-static">me@example.com</p>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword5" class="col-sm-2">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword5" placeholder="Password">
    </div>
  </div>
</form>
```

## Disabled state and read-only state

Add `disabled` to form controls(`<input>`, `<select>`, and `<textarea`>) to disable a state. Controls that are disabled have different appearances and cannot interact with the user, e.g. getting focus, input, etc., and the mouse cursor is now set to `not-allowed`. The disabled state of the control can be found in [**Control →Textboxl**](#control/textbox).

<example>
  <form>
    <div class="form-group">
      <label for="exampleDisabledInput">Disabled input box</label>
      <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Disabled input box" disabled>
    </div>
  </form>
</example>

```html
<div class="form-group">
  <label for="exampleDisabledInput">Disabled input box</label>
  <input type="text" class="form-control" id="exampleDisabledInput" placeholder="Disabled input box" disabled>
</div>
```

When using `<fieldset>`, you can add `disabled` directly in `<fieldset>`. In this way, all form controls in `<fieldset>` are disabled.

<example>
  <form>
    <fieldset disabled>
      <legend>All form controls in this fieldset are disabled.</legend>
      <div class="form-group">
        <label for="exampleInputInviteCode2">Invitation code</label>
        <input type="text" class="form-control" id="exampleInputInviteCode2" placeholder="Please enter the invitation code">
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> Use default options
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> Let me customize the options
        </label>
      </div>
      <button type="submit" class="btn">Start</button>
    </fieldset>
  </form>
</example>

```html
<fieldset disabled>
  <legend>All form controls in this fieldset are disabled.</legend>
  <div class="form-group">
    <label for="exampleInputInviteCode2">Invitation code</label>
    <input type="text" class="form-control" id="exampleInputInviteCode2" placeholder="Please enter the invitation code">
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption2"> Use default options
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption2"> Let me customize the options
    </label>
  </div>
  <button type="submit" class="btn">Start</button>
</fieldset>
```

Add to `readonly` in form controls(`<input>`, `<select>`, and `<textarea`>) to set read-only for their application. A read-only control looks similar to a disabled look, and the user cannot edit content of the control. But the default mouse type is kept and can be activated.

<example>
  <form>
    <div class="form-group">
      <label for="exampleReadonlyInput">Read-only input box</label>
      <input type="text" class="form-control" id="exampleReadonlyInput" placeholder="Read-only input box" readonly>
    </div>
  </form>
</example>

```html
<div class="form-group">
  <label for="exampleReadonlyInput">Read-only input box</label>
  <input type="text" class="form-control" id="exampleReadonlyInput" placeholder="Read-only input box" readonly>
</div>
```

## Required Tags

A common way to mark required fields is to add a star to the label. <strong class="text-danger">*</strong>. Add `.required` class to the form control group `<label>`, and it will work.

<example>
  <form>
    <div class="form-group">
      <label for="exampleInputAccount8" class="required">Account</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="E-mail/Phone number/Username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="required">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</example>

```html
<form>
  <div class="form-group">
    <label for="exampleInputAccount8" class="required">Account</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="E-mail/Phone number/Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="required">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

Star can also be applied to horizontally stacked forms.

<example>
  <form class="form-horizontal">
    <div class="form-group">
      <label for="exampleInputAccount9" class="col-sm-2 required">Account</label>
      <div class="col-md-6 col-sm-10">
        <input type="text" class="form-control" id="exampleInputAccount9" placeholder="E-mail/Phone number/Username">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword9" class="col-sm-2 required">Password</label>
      <div class="col-md-6 col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword9" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> remember me
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">log in</button>
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="exampleInputAccount9" class="col-sm-2 required">Account</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount9" placeholder="E-mail/Phone number/Username">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword4" class="col-sm-2 required">Password</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">log in</button>
    </div>
  </div>
</form>
```

## More compact form

Add `.form-condensed` to a form to reduce text sizes and spacing of all controls in the form, so a more compact form view is created.

<example>
  <form class="form-condensed">
    <div class="form-group">
      <label for="exampleInputAccount6">Account</label>
      <input type="text" class="form-control" id="exampleInputAccount6" placeholder="E-mail/Phone number/Username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword6">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword6" placeholder="">
    </div>
    <div class="form-group">
      <label for="exampleInputMoney1">Donation amount</label>
      <div class="input-group">
        <span class="input-group-addon">￥</span>
        <input type="number" class="form-control" id="exampleInputMoney1" placeholder="The minimum donation amount is ￥10.00">
        <span class="input-group-addon">.00</span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</example>

```html
<form class="form-condensed">
  <div class="form-group">
    <label for="exampleInputAccount6">Account</label>
    <input type="text" class="form-control" id="exampleInputAccount6" placeholder="E-mail/Phone number/Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword6">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword6" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputMoney1">Donation amount</label>
    <div class="input-group">
      <span class="input-group-addon">￥</span>
      <input type="number" class="form-control" id="exampleInputMoney1" placeholder="The minimum donation amount is ￥10.00">
      <span class="input-group-addon">.00</span>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

`.form-condensed` can also be applied to horizontally stacked forms.

<example>
  <form class="form-horizontal form-condensed">
    <div class="form-group">
      <label for="exampleInputAccount7" class="col-sm-2">Account</label>
      <div class="col-md-6 col-sm-10">
        <input type="text" class="form-control" id="exampleInputAccount7" placeholder="E-mail/Phone number/Username">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword7" class="col-sm-2">Password</label>
      <div class="col-md-6 col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword7" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputAddress7" class="col-sm-2">URL</label>
      <div class="col-sm-3">
        <select class="form-control" id="exampleInputAddress7">
          <option>Beijing</option>
          <option>Shanghai</option>
        </select>
      </div>
      <div class="col-sm-3">
        <input type="text" class="form-control" id="exampleInputAddress8" placeholder="City/County">
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="exampleInputAddress9" placeholder="Address">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> remember me
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">log in</button>
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal form-condensed">
  <div class="form-group">
    <label for="exampleInputAccount7" class="col-sm-2">Account</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount7" placeholder="E-mail/Phone number/Username">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword7" class="col-sm-2">Password</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword7" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputAddress7" class="col-sm-2">Address</label>
    <div class="col-sm-3">
      <select class="form-control" id="exampleInputAddress7">
        <option>Beijing</option>
        <option>Shanghai</option>
      </select>
    </div>
    <div class="col-sm-3">
      <input type="text" class="form-control" id="exampleInputAddress8" placeholder="City/County">
    </div>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="exampleInputAddress9" placeholder="Address">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">log in</button>
    </div>
  </div>
</form>
```
