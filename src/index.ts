/**
 * JavaScript compatibility surface for the Enjanga foundations package.
 *
 * Application concerns such as data fetching, CMS types, framework helpers,
 * and browser polyfills belong in consuming applications. This package owns
 * only shared Carbon foundations and its Sass/CSS entry points.
 */
export * from '@carbon/react';

import * as CarbonIcons from '@carbon/icons-react';
import * as CarbonThemes from '@carbon/themes';

export const Icons = CarbonIcons;
export const Themes = CarbonThemes;
export type CarbonTheme = (typeof CarbonThemes)[keyof typeof CarbonThemes];
