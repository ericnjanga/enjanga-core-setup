// enjanga-core-setup/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/next.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  clean: true,
  external: [
    "react",
    "react-dom",
    "next",
    "next/link",
    "next/navigation",
    "next/image",
    "@carbon/react",
    "@carbon/icons-react",
    "@carbon/styles",
    "@carbon/pictograms-react",
    "carbon-components",
    "clsx",
    "axios",
    "@tanstack/react-query",
    "@tanstack/react-query-devtools",
    "@contentful/rich-text-types",
    "smoothscroll-polyfill",
    "wicg-inert"
  ]
});

