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
