// enjanga-core-setup/global.d.ts

// Skip type-checking next imports. I'm just re-exporting helpers, and consumers will handle actual types.
declare module 'next/link';
declare module 'next/image';
declare module 'next/navigation';
