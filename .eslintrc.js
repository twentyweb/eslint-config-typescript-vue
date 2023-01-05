module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
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
        'eqeqeq': ['off'],
        'vue/eqeqeq': ['off'],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: 1,
        }],
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'beside',
        }],
        'vue/multi-word-component-names': ['off'],
        '@typescript-eslint/explicit-member-accessibility': ['error', {
            accessibility: 'no-public',
        }],
        '@typescript-eslint/consistent-type-assertions': ['error', {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
        }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-exports': ['error', {
            fixMixedExportsWithInlineTypeSpecifier: false,
        }],
        '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports',
        }],
        '@typescript-eslint/explicit-function-return-type': ['warn', {
            allowExpressions: true,
        }],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-inferrable-types': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['warn'],
        '@typescript-eslint/no-unused-vars': ['warn', {
            ignoreRestSiblings: true,
        }],
        '@typescript-eslint/ban-ts-comment': ['warn'],
    },
};
