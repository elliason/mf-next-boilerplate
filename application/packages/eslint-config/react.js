module.exports = {
  root: true,
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      plugins: ["testing-library", "jest"],
      extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
    },
  ],
  rules: {
    "react/prop-types": "off",
  },
};
