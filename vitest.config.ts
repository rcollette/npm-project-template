import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // or true if you prefer `test()`/`expect()` globals
    environment: "node",
    include: ["tests/**/*.spec.ts"],
    setupFiles: ["vitest.setup.ts"],
    reporters: "junit",
    outputFile: {
      junit: "./reports/junit/results.xml", // Path to the JUnit report file
    },
    coverage: {
      reporter: ["text", "lcov", "cobertura"],
      reportsDirectory: "./reports/coverage",
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
    typecheck: {
      enabled: true,
      tsconfig: "./tsconfig.test.json", // Ensure this points to your tsconfig file
    },
  },
});
