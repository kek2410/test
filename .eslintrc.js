module.exports = {
  root: true,
  env: {
    node: true
  },
  // parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2018,
    // parser: "babel-eslint",
    sourceType: "module"
    // allowImportExportEverywhere: false
  },
  extends: [
    // "vuetify",
    "plugin:vue/essential",
    "@vue/prettier"
    // "@vue/typescript"
    // "prettier",
    // "plugin:prettier/recommended"
    // "standard"
    // "eslint:recommended",
  ],
  plugins: ["html", "@typescript-eslint", "vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
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
