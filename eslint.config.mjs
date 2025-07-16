import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    // apply to all JS/TS files…
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["**/node_modules/**"],

    // include Node globals
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // ESLint’s built-in recommended rules (via @eslint/js)
  pluginJs.configs.recommended,

  // TypeScript-ESLint recommended rules
  ...tseslint.configs.recommended,

  // Prettier integration:
  //  • disables ESLint rules that conflict with Prettier
  //  • enables eslint-plugin-prettier
  //  • sets `prettier/prettier` → “error”
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  configPrettier,

  // your custom rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];
