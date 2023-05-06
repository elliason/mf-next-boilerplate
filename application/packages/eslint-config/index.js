module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "turbo",
    "./rules",
  ],
  plugins: ["@typescript-eslint", "import"],
  settings: {
    /* A map from parsers to file extension arrays. If a file extension is matched,
        the dependency parser will require and use the map key as the parser instead of the configured ESLint parser. */
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
    // A list of regex strings that, if matched by a path, will not report the matching module if no exports are found.
    "import/ignore": ["\\.(coffee|scss|css|less|hbs|svg|json)$"],
  },
  overrides: [
    {
      // Only uses Testing Library lint rules in test files
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      plugins: ["testing-library", "jest"],
      extends: ["plugin:testing-library/dom", "plugin:jest/recommended"],
    },
    {
      files: ["**/*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
