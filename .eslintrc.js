module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        "parser": "@typescript-eslint/parser",
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        '@vue/eslint-config-typescript',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        "eqeqeq": ["error"],
        "vue/eqeqeq": ["error"],
        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": ["error", {
            "multiline": {
                "allowFirstLine": true,
            },
        }],
        // "vue/no-deprecated-scope-attribute": ["error"],
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            "accessibility": "no-public",
        }],
        "@typescript-eslint/no-object-literal-type-assertion": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["warn", {
            "allowExpressions": true,
        }],
        "@typescript-eslint/no-explicit-any": ["warn", {
            // "fixToUnknown": true,
            "ignoreRestArgs": true,
        }],
        "@typescript-eslint/camelcase": ["off"],
        "@typescript-eslint/interface-name-prefix": ["off"],
        "@typescript-eslint/no-non-null-assertion": ["warn"],
        "@typescript-eslint/no-unused-vars": ["warn", {
            "ignoreRestSiblings": true,
        }],
    },
};
