# enjanga-core-setup

Shared Carbon foundations for Enjanga interfaces. This package provides the
Carbon React surface, icon and theme namespaces, and reusable Sass/CSS entry
points. Application concerns such as data fetching, CMS models, polyfills, and
Next.js APIs stay in the applications that use them.

## Requirements

- Node.js 22 or newer
- npm 9 or newer
- React 18 or 19

## Install

```bash
npm install enjanga-core-setup
```

## JavaScript and TypeScript

```tsx
import { Button, Icons, Theme, Themes } from 'enjanga-core-setup';

export function Example() {
  return (
    <Theme theme={Themes.g100}>
      <Button renderIcon={Icons.Add}>Continue</Button>
    </Theme>
  );
}
```

Import Next.js APIs directly from `next/*`. The `enjanga-core-setup/next`
entry remains temporarily available for compatibility and is deprecated.

## Styles

Use the source Sass entry when your application owns Sass compilation:

```scss
@use 'enjanga-core-setup/styles';
```

Precompiled alternatives are also exported:

```ts
import 'enjanga-core-setup/carbon-css-no-fonts';
// or: import 'enjanga-core-setup/carbon-css-with-fonts';
```

Load the Enjanga typeface and typography token once at an application root:

```ts
import 'enjanga-core-setup/typography.css';
```

Applications that load Mona Sans themselves can import only the shared custom
property:

```ts
import 'enjanga-core-setup/typography-tokens.css';
```

Both entries define `--enj-font-family-sans`; the full entry also ships and
registers the Mona Sans variable font.

Shared component color and state tokens are available separately:

```ts
import 'enjanga-core-setup/design-tokens.css';
```

This entry includes light and dark Navbar tokens. Set `data-theme="dark"` on
the document root to activate the dark values.

## Development

```bash
npm install
npm run type-check
npm run lint
npm run build
```

Generated output lives in `dist/` and is created during packaging; it is not
source-controlled.

## Package boundary

This package intentionally does not re-export React, React DOM, Next.js,
TanStack Query, Axios, Contentful types, utility libraries, browser polyfills,
or the Enjanga component library. Keeping those dependencies at their natural
ownership layer prevents circular dependencies and hidden version coupling.

## Responsive headings and case study cards

Import `enjanga-core-setup/typography.css` for Mona Sans and shared h1–h4 presets.
Presets apply to semantic headings and `.enj-h1` through `.enj-h4`. Each level owns
font size, line height, and bottom margin through `--enj-hN-*` tokens. The scale is
mobile first, with tablet (672px) and desktop (1056px) overrides. Font weight and
letter spacing are shared. The h2 preset matches the verified Figma case study title: 33/38px on mobile,
36/44px on tablet, and 40/48px on desktop, with bottom margins of 17/21/25px.
CaseStudyCard always uses that h2 preset.

`src/styles/typography-tokens.scss` owns the heading scale;
`src/styles/_headings.scss` applies it. `styles-responsive` exports the core Sass
breakpoint mixins. `design-tokens.css` supplies card and button visual tokens.
Run `npm run build-typography` after changing these sources. Component packages
must consume these tokens rather than duplicate their values.
