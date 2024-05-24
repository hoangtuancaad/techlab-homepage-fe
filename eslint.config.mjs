import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
    {
        files: ["src/**/*.{js,jsx,mjs,cjs,ts,tsx}"],

        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: globals.browser,
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",

            semi: ["error", "always"],
            quotes: ["error", "double"],
        },

        ignores: ["**/node_modules/**", "**/dist/**", "**/public/**", "**/**/*.scss"],
    },

    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
];
