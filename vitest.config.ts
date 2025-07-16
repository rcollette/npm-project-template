import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // or true if you prefer `test()`/`expect()` globals
    environment: "node",
    include: ["tests/**/*.test.ts"],
    setupFiles: ["vitest.setup.ts"],
    coverage: {
      reporter: ["text", "lcov", "html"],
      reportsDirectory: "./reports/coverage",
    },
    typecheck: {
      enabled: true,
      tsconfig: "./tsconfig.test.json", // Ensure this points to your tsconfig file
    },
  },
});
