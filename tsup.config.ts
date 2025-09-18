// enjanga-core-setup/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,              // generate .d.ts
  outDir: "dist",
  clean: true,            // clean dist before building
  external: [
    "react",
    "react-dom",
    "next",
    "next/link",
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
