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
        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": ["error", {
            "singleline": 1,
            "multiline": {
                "max": 1,
                "allowFirstLine": true,
            },
        }],
        "vue/singleline-html-element-content-newline": 0,
        "@typescript-eslint/explicit-member-accessibility": [2, {
            "accessibility": "no-public",
        }],
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/explicit-function-return-type": [1, {
            "allowExpressions": true,
        }],
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-non-null-assertion": 1,
        "@typescript-eslint/no-unused-vars": [1, {
            "ignoreRestSiblings": true,
        }],
    },
};
