section: basic
id: about
description: Definition and naming rules
icon: icon-book
filter: yueding yd
---

# Agreement 

## UI Elements and Definitions

ZUI contains a variety of interface elements (or controls), such as buttons, lists, tables, etc., and even elements used in some specific scenarios are designed in ZUI, such as comments. In order to better demonstrate ZUI design concept, elements are classified into the four categories below:

*   **Component**: used to build basic units on the interface of web applications, such as buttons, text labels, text boxes, etc.
*   **Component**: a more complex interface unit composed of more than one control. Such as forms, menus, tables, etc.
*   **JS Component**: JavaScript is used in such components. Some JavaScript components need to be manually invoked to enable. 
*   **View**: a combination of controls and components to display the general content, such as comment list view and article preview list view.

Most interface elements in ZUI have different subtypes, states, and parameters. The definitions of types, states and values are as follows:

*   **Type**: different types of one interface unit, e.g. buttons (primary buttons, secondary buttons and danger buttons, etc.), and the navigation (general navigation and fixed navigation, etc.) One type should only be specified for one interface element. The default type does not need to be specified.
*   **Status**: one interface unit can be switched in different states, e.g. buttons can be normal and unavailable, pull-down menus can be expanded and collapsed, and menu items can be selected and unselected. It is allowed to stack multiple states in one interface element.
*   **Value**: used as the basis for how to display the interface units, e.g. whether the color of rows changes in a table, whether hovering is enabled, etc. Multiple values can be set for one unit.

## States and Values

States and values have the same usage and meaning in different controls or components. In ZUI, these general status and values have fixed names (CSS class names).

Status includes:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 80px">Status</th>
      <th>Description</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.active`</td>
      <td>Control or its child item is active.</td>
      <td>Buttons can be activated in navigation items, dropdown items, menu lists, button groups.</td>
    </tr>
    <tr>
      <td>`.hover`</td>
      <td>Mouse hovering status. Equivalent to a `:hover` selector.</td>
      <td>Some require Javascript controls.</td>
    </tr>
    <tr>
      <td>`.focus`</td>
      <td>Control is in focus. Equivalent to a `:focus` selector.</td>
      <td>Some require Javascript controls.</td>
    </tr>
    <tr>
      <td>`.disabled`</td>
      <td>The control is disabled. It usually work with `disabled="disabled"` of DOM.</td>
      <td>Buttons, menu items, hyperlinks and form elements.</td>
    </tr>
    <tr>
      <td>`.in`</td>
      <td>It controls the in and out of animations. When it is displayed, it means the control finishes CSS animation and displayed it. When it disappears, it means the control is ready to make the animation disappear. If working with `.collapse`, it is completely collapsed.</td>
      <td>Tag page, dropdown etc.</td>
    </tr>
    <tr>
      <td>`.open`</td>
      <td>Hidden content is displayed.</td>
      <td>Dropdown, etc.</td>
    </tr>
    <tr>
      <td>`.collapse`</td>
      <td>The component can be fold or collapsed. If working with `.in`, it means the components is collaped. Otherwise, it is folded.</td>
      <td>Responsive navigation, collapse menu, etc.</td>
    </tr>
    <tr>
      <td>`.collapsing`</td>
      <td>The control is collapsing or folding.</td>
      <td>Responsive navigation, collapse menu, etc.</td>
    </tr>
  </tbody>
</table>

Values include:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 80px">Value</th>
      <th>Description</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.bordered`</td>
      <td>Add borders to the component.</td>
      <td>Forms, etc.</td>
    </tr>
    <tr>
      <td>`.borderless`</td>
      <td>Remove the border of a component.</td>
      <td>Forms, etc.</td>
    </tr>
    <tr>
      <td>`.inverse`</td>
      <td>The component will use the inversed style of the default theme.</td>
      <td>Navigation, etc.</td>
    </tr>
    <tr>
      <td>`.fixed`</td>
      <td>The component is fixed to a position and not affected by the interface.</td>
      <td></td>
    </tr>
    <tr>
      <td>`.with-icon`</td>
      <td>The component can be displayed with an icon.</td>
      <td>Alerts, etc.</td>
    </tr>
    <tr>
      <td>`.with-padding`</td>
      <td>The component is displayed with paddings.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Naming Elements

### Naming rules

*   All controls, components, views, modules and behaviors should be named with the most common names to accurately describe the function of interface elements. For example, a menu should be named menu, not navigation.
*   The names of types, states and values are element names and type prefix(or status and value names), separated by hyphens, e.g. a fixed menu is `.menu-fixed`. or general state or parameter, prefix can be omitted, e.g. an active menu can be named as `.active` not `.menu-active`.
*   All controls, components, views, modules, and actions are named without prefixes or extra names irrelevant to the function of the element, e.g. `.nav` for a navigation menu, without `.ui.nav` or `.zui.nav`.
