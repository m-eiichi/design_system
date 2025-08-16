module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    // JS用の重複ルールを無効化
    "no-unused-vars": "off",

    // TS用ルールにargsIgnorePatternを指定
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    "react-refresh/only-export-components": [
      "warn",

      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": 1,
  },
};
