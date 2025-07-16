// vite.config.ts
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      // your library’s entry
      entry: "src/index.ts", // global variable name for UMD/IIFE builds
      name: "MyLibrary", // customize the output file names
      fileName: (format) => `index.${format}.js`, // which module formats to emit
      formats: ["es"],
    },
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      treeshake: true,
    },
  },
  plugins: [
    // generates .d.ts declarations alongside your build
    dts({
      insertTypesEntry: true, // only pick up files in src/
      include: ["src/**/*"], // explicitly skip config & test files
      exclude: ["**/vite.config.*", "**/vitest.*.ts", "**/tests/**"], // treat src/ as the root for your entry files
      entryRoot: "src", // drop any declarations outside your outDir
      strictOutput: true,
    }),
  ],
});
