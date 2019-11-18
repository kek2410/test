module.exports = {
  root: true,
  env: {
    node: true
  },
  // parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    // "prettier",
    // "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint",
    // "plugin:prettier/recommended",
    // "plugin:vue/recommended"
    // "@vue/prettier",
    // "@vue/typescript",
    "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint",
    "plugin:vue/essential"
  ],
  // plugins: ["html", "vue", "@typescript-eslint"],
  // plugins: ["html", "@typescript-eslint"],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off"
    // "vue/attribute-hyphenation": "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
