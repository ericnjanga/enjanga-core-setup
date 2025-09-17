// enjanga-core-setup/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true, // generates .d.ts files
  outDir: "dist",
  external: ["react", "react-dom", "@carbon/react", "clsx"],
  clean: true, // removes old build artifacts before building
});
