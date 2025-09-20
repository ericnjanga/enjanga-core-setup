# enjanga-core-setup 🎯

**A unified dependency management system for the Enjanga ecosystem**

[![npm version](https://img.shields.io/npm/v/@enjanga-com/core-setup.svg)](https://www.npmjs.com/package/@enjanga-com/core-setup)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Carbon Design](https://img.shields.io/badge/Design%20System-Carbon-0062FF.svg)](https://carbondesignsystem.com/)

## 🚀 What is This?

`@enjanga-com/core-setup` is the **single source of truth** for all shared dependencies across the Enjanga ecosystem. It ensures that both:

- **`enjanga-component-library`** (your reusable UI components)
- **`enjanga-portfolio`** (your consumer application)

use **identical versions** of all critical packages, eliminating dependency conflicts and version mismatches forever.

## 🎯 Why This Exists

### The Problem ❌
Before this package, we faced:
- **Version conflicts** between component library and consumer app
- **Duplicate installations** of the same packages
- **Broken components** due to incompatible dependency versions
- **Maintenance headaches** updating versions in multiple places

### The Solution ✅
Now with `@enjanga-com/core-setup`:
- **One place** to manage all shared dependencies
- **Guaranteed compatibility** between all Enjanga projects
- **Simplified updates** - change versions in one place
- **Zero duplication** - packages installed exactly once

## 📦 What's Included

### Core Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `@carbon/react` | ^1.91.0 | IBM Carbon Design System components |
| `@carbon/styles` | ^1.90.0 | Carbon Design System styles and themes |
| `@carbon/icons-react` | ^11.67.0 | Carbon icon components |
| `@carbon/pictograms-react` | ^11.67.0 | Carbon pictogram components |

### Framework & Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.2.0 | React library |
| `react-dom` | ^18.2.0 | React DOM rendering |
| `next` | ^15.3.4 | Next.js framework |
| `clsx` | ^2.1.1 | CSS classname utility |
| `sass` | ^1.89.2 | Sass preprocessor |

### Data Management
| Package | Version | Purpose |
|---------|---------|---------|
| `@tanstack/react-query` | ^5.83.0 | Server state management |
| `@tanstack/react-query-devtools` | ^5.83.0 | React Query development tools |
| `axios` | ^1.11.0 | HTTP client for API calls |

### Content & Polyfills
| Package | Version | Purpose |
|---------|---------|---------|
| `@contentful/rich-text-types` | ^17.1.0 | Contentful rich text types |
| `smoothscroll-polyfill` | ^0.4.4 | Smooth scrolling polyfill |
| `wicg-inert` | ^3.1.3 | Accessibility inert attribute polyfill |

## 🛠️ Installation

```bash
# Install in your project
npm install @enjanga-com/core-setup
# or
yarn add @enjanga-com/core-setup
```

## 💻 Usage

### Basic Import

```typescript
// Import everything you need from one package
import {
  // Carbon components
  Button,
  Tabs,
  Theme,
  
  // Icons and pictograms
  Icons,
  Pictograms,
  
  // React Query
  QueryClient,
  useQuery,
  
  // Utilities
  clsx,
  axios,
  
  // Contentful types
  ContentfulRichText
} from '@enjanga-com/core-setup';
```

### Specific Use Cases

#### Using Carbon Components

```typescript
import { Button, Theme, Icons } from '@enjanga-com/core-setup';

function MyComponent() {
  return (
    <Theme theme="g100">
      <Button renderIcon={Icons.Add}>
        Click Me
      </Button>
    </Theme>
  );
}
```

#### Using React Query

```typescript
import { QueryClient, QueryClientProvider, useQuery } from '@enjanga-com/core-setup';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />
    </QueryClientProvider>
  );
}
```

#### Using Contentful Types

```typescript
import { ContentfulRichText } from '@enjanga-com/core-setup';

const document: ContentfulRichText.Document = {
  nodeType: ContentfulRichText.BLOCKS.DOCUMENT,
  data: {},
  content: []
};
```

## 🔧 Setup for Enjanga Projects

### For enjanga-component-library

```json
{
  "peerDependencies": {
    "@enjanga-com/core-setup": "^1.0.0"
  },
  "devDependencies": {
    "@enjanga-com/core-setup": "^1.0.0"
  }
}
```

### For enjanga-portfolio (consumer app)

```json
{
  "dependencies": {
    "@enjanga-com/core-setup": "^1.0.0",
    "enjanga-component-library": "^1.0.0"
  }
}
```

## 🚀 Migration Guide

### Before (Problematic)

```json
{
  "dependencies": {
    "@carbon/react": "^1.90.0",
    "@carbon/styles": "^1.84.0", // ← Version mismatch!
    "react": "^18.2.0"
  }
}
```

### After (Solved)

```json
{
  "dependencies": {
    "@enjanga-com/core-setup": "^1.0.0" // ← One package to rule them all!
  }
}
```

## 📊 Benefits

### For Developers
- 🎯 No more version conflicts between projects
- ⚡ Simplified imports from single package
- 🔧 Easy updates in one central location
- 🐛 Fewer bugs from incompatible versions

### For Performance
- 📦 Reduced bundle size - no duplicate packages
- 🚀 Faster installs - shared dependency tree
- 💾 Smaller node_modules - elimination of duplicates

### For Maintenance
- 🔄 Consistent ecosystem across all projects
- 📋 Clear dependency management strategy
- 🎨 Uniform design system implementation

## 🐛 Troubleshooting

**Common Issues:**
- Version Conflicts: Ensure you remove direct Carbon dependencies from your project  
- TypeScript Errors: Run `npm run build` in core-setup first  
- Missing Exports: Check that you're using the namespace exports correctly  

**Solutions:**

```bash
# Clean install if you encounter issues
rm -rf node_modules package-lock.json
npm install

# Rebuild the core package
cd packages/core-setup
npm run build
```

## 🤝 Contributing

To update dependencies:
1. Edit `packages/core-setup/package.json`
2. Update versions in the `dependencies` section
3. Run `npm run build` to rebuild
4. Publish new version of `@enjanga-com/core-setup`
5. Update both consumer projects to use the new version

## 📝 License

Apache-2.0 © Enjanga

## 🆘 Support

Having issues?
- Check the troubleshooting section  
- Open an issue on GitHub  
- Ensure all projects use the same version of `@enjanga-com/core-setup`  

---

Built with ❤️ by Enjanga - Solving dependency hell, one package at a time.
