# Figma Design System Rules (PAV V1.0)

Source: `-PAV- Design System V1.0_2026` (file key `6bhHT8PnScxyDrS23e3DLx`)

## 1) Token-First Rule
- Always use tokens, never hardcode visual values.
- Priority order for implementation:
  1. `Color` (semantic)
  2. `Size` (space/radius/depth/blur/icon)
  3. `Typography`
  4. State-specific tokens (`on-dark`, `solid`, `subtle`, `disabled`, etc.)

## 2) Color System Rule
- Use semantic tokens by intent:
  - `background/*`
  - `text/*`
  - `icon/*`
  - `border/*`
- Use state variants explicitly:
  - `primary`, `secondary`, `tertiary`, `solid`, `subtle`, `disabled`, `on-dark`
- Brand channels available:
  - `brand-blue`, `brand-green`, `brand-secondary`
- Feedback channels available:
  - `positive`, `warning`, `danger`, `info`

## 3) Typography Rule
- Use defined text styles by purpose:
  - `Display 1..4`
  - `Title 1..5`
  - `Body 1..3`
  - `Label 1..3`
  - `Caption 1..2`
  - `Button Tiny/SM/MD/LG`
- Each style must map all of:
  - `font-family`
  - `font-size`
  - `line-height`
  - `font-weight`

## 4) Spacing/Radius/Icon Rule
- Spacing must come from `space/*` only:
  - includes `0`, `050`, `100...4000`, and negative variants.
- Radius must come from `radius/*`:
  - `100`, `200`, `300`, `400`, `Full`, and `button-radius` modes.
- Icon sizes must come from `icon/*`:
  - `24`, `32`, `40`, `48`, `64`.

## 5) Theming Rule
- Respect token modes:
  - `Color`: `Light`, `Dark`
  - `Button radius`: `Pill`, `12`, `16`
- Do not fork components per theme if a mode/token switch can solve it.

## 6) Component Build Rule
For each new component:
1. Define semantic role (surface, text, icon, border).
2. Bind role to semantic tokens.
3. Add state tokens (`hover/active/disabled/focus`).
4. Apply typography style token (not ad-hoc text CSS).
5. Apply size tokens for spacing/radius/icon.
6. Verify dark/on-dark paths.

## 7) Naming Rule
- Keep naming in design-token form:
  - `domain/category/state`
  - examples: `text/neutral/primary`, `background/brand-blue/solid`.
- Avoid local one-off names in code unless mapped to token aliases.
