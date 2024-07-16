module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", "eslintrc.config.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            { allowTypedFunctionExpressions: false },
        ],
    },
};