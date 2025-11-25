export * from '@carbon/react';
export { usePrefix, useTheme } from '@carbon/react';
import * as CarbonPictograms from '@carbon/pictograms-react';
export { ChartLine, Cloudy } from '@carbon/pictograms-react';
import * as CarbonIcons from '@carbon/icons-react';
export { AddAlt, UserAvatar } from '@carbon/icons-react';
import * as carbonThemes from '@carbon/themes';
export { default as React } from 'react';
export { default as ReactDOM } from 'react-dom';
export { default as clsx } from 'clsx';
export { QueryClient, QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query';
export { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export { default as axios } from 'axios';
import * as richTextTypes from '@contentful/rich-text-types';
export { richTextTypes as ContentfulRichText };
export { default as smoothscrollPolyfill } from 'smoothscroll-polyfill';
export { default as inert } from 'wicg-inert';

declare const Pictograms: typeof CarbonPictograms;
declare const Icons: typeof CarbonIcons;

type CarbonTheme = typeof carbonThemes[keyof typeof carbonThemes];
declare const carbonStyles: {
    themes: typeof carbonThemes;
};

declare const bundleConfig: {
    versions: {
        react: string;
        next: string;
        carbon: string;
        reactQuery: string;
    };
    features: {
        hasReactQuery: boolean;
        hasAxios: boolean;
        hasSass: boolean;
    };
};

export { type CarbonTheme, Icons, Pictograms, bundleConfig, carbonStyles };
