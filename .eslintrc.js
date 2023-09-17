module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "prettier"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
  },
};
