section: basic
id: grid
description: Responsive layout, grid
icon: icon-th
filter: zhagexitong zgxt
---

# Grid System 

It is based on the grid system in Bootstrap3. Refer to [Bootstrap grid system](http://getbootstrap.com/css/#grid).

## Grid 

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th></th>
      <th>extra small screen <small>cellphone (&lt;768px)</small></th>
      <th>small screen <small>tablet (≥768px)</small></th>
      <th>medium screen <small>desktop screen (≥992px)</small></th>
      <th>large screen <small>large desktop screen (≥1200px)</small></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap">grid system behavior</th>
      <td>horizontal</td>
      <td colspan="3">first stacked and then horizontal if >=768px</td>
    </tr>
    <tr>
      <th class="text-nowrap"><code>.container</code> max width</th>
      <td>None (auto)</td>
      <td>750px</td>
      <td>970px</td>
      <td>1170px</td>
    </tr>
    <tr>
      <th class="text-nowrap">prefix</th>
      <td>`.col-xs-`</td>
      <td>`.col-sm-`</td>
      <td>`.col-md-`</td>
      <td>`.col-lg-`</td>
    </tr>
    <tr>
      <th class="text-nowrap">column</th>
      <td colspan="4">12</td>
    </tr>
    <tr>
      <th class="text-nowrap">max column width</th>
      <td class="text-muted">auto</td>
      <td>~62px</td>
      <td>~81px</td>
      <td>~97px</td>
    </tr>
    <tr>
      <th class="text-nowrap">gutter</th>
      <td colspan="4">30px (15px for each column)</td>
    </tr>
    <tr>
      <th class="text-nowrap">nested</th>
      <td colspan="4">yes</td>
    </tr>
    <tr>
      <th class="text-nowrap">offsets</th>
      <td colspan="4">yes</td>
    </tr>
    <tr>
      <th class="text-nowrap">column sort</th>
      <td colspan="4">yes</td>
    </tr>
  </tbody>
</table>

## Non-responsive Grid

ZUI also provides the grid width for helper classes and shortcuts, and it is not subjected to the responsive rules. These classes are `.col-1`, `.col-2` ~ `.col-12`.
