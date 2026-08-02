# Design Token Map

Source Figma file: `Sơn bank chành`, file key `qhtjM3UbS0OJdM824OlwoR`.

Primary canvas: `21143:440` / `🎨 Design template`.

Data sources used:

- Figma MCP `get_design_context` for the original Home frame.
- Figma Console MCP Desktop Bridge for full-file inventory, components, local text styles, and variables.

## Audit Summary

- Top-level Figma frame inventory from Desktop Bridge: 18 frames on `🎨 Design template`.
- Implemented website routes: Home, Info, Photography, Photography detail, Projects, Fishmap detail, Banking domain, Banking list, Banking detail, Design system, Design system detail, UX bites, UX detail, Thinking, Thinking detail.
- Main layout pattern: fixed desktop sidebar plus rounded secondary content container; mobile swaps sidebar for horizontal top navigation.
- Repeated components: navigation section, social icon button, brand mark, hero statement, hero mascot, page header, index grid card, article section, callout, experience item.
- Figma variable collections found: `global` 74, `color` 84, `size` 32, `typography` 61, `elevation` 25, `font-theme` 7.
- Local text styles found: 17 styles from `display/large` through `body/xsmall`.
- Assets committed locally: hero star layers, smile mark, grass hills image, social icon, brand symbol parts, Info photo, Fishmap case-study images.
- Missing from Console MCP response: `figma_get_styles` and `figma_get_design_system_kit` require `FIGMA_ACCESS_TOKEN`, so style data was derived from Desktop Bridge variables/text styles plus node metadata.

## Primitive Tokens

| Figma value | CSS variable | Usage |
| --- | --- | --- |
| `#ffffff` | `--color-neutral-0` | Primary surface |
| `#f7f7f7` | `--color-neutral-50` | Secondary page surface and placeholders |
| `#efefef` | `--color-neutral-100` | Borders and hover fills |
| `#868686` | `--color-neutral-500` | Tertiary text |
| `#282828` | `--color-neutral-900` | Primary text |
| Aqua asset tone | `--color-aqua-100`, `--color-aqua-200` | Focus and subtle selected states |
| Sage grass tone | `--color-sage-100` | Card media variant |
| `16px` | `--space-4` | Shell gap, sidebar padding |
| `24px` | `--space-5` | Sidebar section gap, card gap |
| `32px` | `--space-6` | Recent thoughts padding |
| `12px` | `--radius-small` | Card container radius |
| `14px` | `--radius-medium` | Hero radius |
| `24px` | `--radius-large` | Main container radius |

## Semantic Tokens

| Figma variable/style | CSS variable | Usage |
| --- | --- | --- |
| `background/primary` | `--color-background-primary` | Body, sidebar, hero, recent section |
| `background/secondary` | `--color-background-secondary` | Main content well, article media |
| `text/primary` | `--color-text-primary` | Navigation, headings, card text |
| `text/tertiary` | `--color-text-tertiary` | Sidebar section labels |
| Divider line assets | `--color-border-default` | CSS dividers in nav and mobile pills |
| `body/large` | `--text-body-large-size`, `--text-body-large-line` | Sidebar links and headings |
| `body/xlarge` | `--text-body-xlarge-size`, `--text-body-xlarge-line` | Hero eyebrows and article titles |
| `title/large` | `--text-title-large-size`, `--text-title-large-line` | Brand mark |
| `display/medium` | `--text-display-medium-size`, `--text-display-medium-line` | Hero and recent headings |

## Responsive Mapping

| Breakpoint | Behavior |
| --- | --- |
| `> 900px` | Figma-like desktop shell with 240px sidebar |
| `<= 900px` | Sidebar collapses into a top horizontal nav |
| `<= 720px` | Hero stacks content and article cards become one column |
| `<= 420px` | Typography and padding reduce for 320px support |
