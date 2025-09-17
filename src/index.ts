// Carbon Design System - export everything from main package
export * from '@carbon/react';

// For other packages, explicitly import and re-export to avoid conflicts
import * as CarbonPictograms from '@carbon/pictograms-react';
import * as CarbonIcons from '@carbon/icons-react';

// Re-export with explicit names or namespaces
export const Pictograms = CarbonPictograms;
export const Icons = CarbonIcons;

// Or export specific items that don't conflict
export {
  // Export only non-conflicting members
  AddAlt,
  UserAvatar,
  // Add other non-conflicting exports
} from '@carbon/icons-react';

export {
  // Export only non-conflicting pictograms
  ChartLine,
  Cloudy,
  // Add other non-conflicting exports  
} from '@carbon/pictograms-react';

// Import specific items from @carbon/styles instead of export *
import { 
  theme, 
  tokens, 
  spacing, 
  layout, 
  type, 
  motion,
  // Add other specific exports you need
} from '@carbon/themes';

export const carbonStyles = {
  theme,
  tokens, 
  spacing,
  layout,
  type,
  motion
};

// React & Next.js - Don't re-export default imports this way
// Instead, import them normally or use named exports
import React from 'react';
import ReactDOM from 'react-dom';
export { React, ReactDOM };

// UI Utilities
import clsx from 'clsx';
export { clsx };

// Data Fetching
import { 
  QueryClient, 
  QueryClientProvider, 
  useQuery,
  useMutation 
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';

export { 
  QueryClient, 
  QueryClientProvider, 
  useQuery,
  useMutation,
  ReactQueryDevtools,
  axios 
};

// Content Management - export under namespace to avoid conflicts
import * as ContentfulRichText from '@contentful/rich-text-types';
export { ContentfulRichText };

// Polyfills & Utilities
import smoothscrollPolyfill from 'smoothscroll-polyfill';
import inert from 'wicg-inert';
export { smoothscrollPolyfill, inert };

// Legacy Support (optional) - Be careful with this one
// carbon-components might not have proper module exports
// export * from 'carbon-components';

// Configuration
export const bundleConfig = {
  versions: {
    react: '^18.2.0',
    next: '^15.3.4',
    carbon: '^1.91.0',
    reactQuery: '^5.83.0'
  },
  features: {
    hasReactQuery: true,
    hasAxios: true,
    hasSass: true
  }
};

// Re-export common Carbon utilities that are often used
export { 
  // Common Carbon utilities
  usePrefix,
  useTheme,
  // Add other utilities you frequently use
} from '@carbon/react';