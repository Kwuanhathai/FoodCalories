module.exports = {
  ignorePatterns: [".eslintrc.js", "*.config.js"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: { "react/prop-types": "off" },
};
