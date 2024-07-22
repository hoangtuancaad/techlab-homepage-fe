import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

import path from "node:path";
import js from "@eslint/js";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...tseslint.configs.recommended,
    ...fixupConfigRules(compat.extends("eslint:recommended", "plugin:react/recommended")),

    {
        files: ["src/**/*.{js,jsx,mjs,cjs,ts,tsx}"],

        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },

            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            react: fixupPluginRules(react),
        },

        rules: {
            indent: ["off", 4],
            quotes: ["warn", "double"],
            semi: ["warn", "always"],

            "react/display-name": "off",
            // Resolved no-unescaped-entities React such as <div>`'`</div>
            "react/no-unescaped-entities": "off",
            "react/no-unknown-property": [
                2,
                {
                    ignore: ["jsx", "global"],
                },
            ],

            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/ban-types": [
                "error",
                {
                    extendDefaults: true,

                    types: {
                        "{}": false,
                    },
                },
            ],
        },
    },

    {
        ignores: ["**/node_modules/**", "**/dist/**", "**/public/**", "**/**/*.scss"],
    },
];
