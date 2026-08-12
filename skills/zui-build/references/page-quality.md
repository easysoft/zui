# Page construction quality

## Turn the brief into a page

Before editing, identify the page's audience, primary task, required information, main action, secondary actions, and delivery constraints. Make reasonable content and layout assumptions when the brief is incomplete, but do not invent business facts. Replace all starter copy and delete irrelevant starter sections before delivery.

Build an information hierarchy before decorating it:

1. Establish one clear page purpose and one primary heading.
2. Put the main action where users first need it.
3. Group supporting information by task, not by component type.
4. Make empty, loading, error, disabled, and success feedback explicit when the page behavior needs them.
5. Keep a coherent path through the page on both wide and narrow screens.

## Use ZUI deliberately

- Start with semantic HTML and verified ZUI classes for controls, forms, navigation, panels, tables, labels, and other matching primitives.
- Prefer `zui-create`, `zui-toggle`, and `zui-on-*` for supported behavior; read `declarative-zui.md` before adding evaluated attributes.
- Add page-specific CSS after `zui.css`. Namespace custom classes by page or feature when collision risk exists.
- Reuse ZUI variables such as `--color-*`, `--radius-*`, `--shadow-*`, and `--space` instead of duplicating a second theme system.
- Verify unfamiliar classes, component names, options, events, and methods in version-matched documentation or the bundled release. Never infer an API from its name.
- Do not recreate a ZUI control in custom CSS/JS when an appropriate public component already meets the interaction and accessibility needs.

Custom CSS is appropriate for product identity, content layout, illustration, and relationships that are specific to the requested page. ZUI is the interface foundation, not a reason to make every page look like a component catalog.

## Make the visual direction intentional

Choose a small type scale, spacing rhythm, surface system, and accent palette that fit the user's domain. Create contrast through hierarchy before adding decoration. Avoid defaulting every section to a floating card, every heading to a gradient, or every interaction to animation. Use the starter's visual treatment only when it suits the brief.

Keep content realistic and concise. Use meaningful labels, plausible data supplied by the user, and action-oriented button text. Do not ship lorem ipsum, unexplained sample metrics, fake testimonials, or starter instructions as final content.

## Build responsive, accessible behavior

- Check at approximately 320px, 768px, and 1440px widths, plus any user-specified target.
- Avoid horizontal page scrolling; constrain only genuinely wide data such as tables.
- Keep controls large enough to operate by touch and avoid hover-only essential actions.
- Use landmarks, one `h1`, ordered headings, associated form labels, explicit button types, meaningful link text, and alt text appropriate to each image.
- Preserve keyboard access, visible focus, logical focus order, overlay dismissal, readable contrast, reduced-motion preferences, and zoom up to 200%.
- Treat color as reinforcement, not the only carrier of status.

## Validate before delivery

Run the bundled validator first:

```sh
node <skill-root>/scripts/validate-zui-page.mjs --root <page-root>
```

Then serve or open the page in a real browser. Confirm:

- no missing CSS, JS, icon font, image, or other network resource;
- no console errors during initial load and primary interactions;
- every declared component initializes and dynamic content is reinitialized when needed;
- navigation, forms, menus, messages, dialogs, and other primary flows work with mouse and keyboard;
- layout, content, theme, focus, and overflow hold at narrow and wide sizes.

The validator catches structural and resource mistakes; it does not replace visual, behavioral, security, or accessibility review.
