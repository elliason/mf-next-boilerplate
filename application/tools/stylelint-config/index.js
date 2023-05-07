module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-tailwindcss",
    "stylelint-config-tailwindcss/scss",
  ],
  rules: {
    "at-rule-no-unknown": null,
    // "scss/at-rule-no-unknown": true,
    "selector-class-pattern": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/at-import-no-partial-leading-underscore": null,
    "property-no-vendor-prefix": null,
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        severity: "warning",
      },
    ],
    "max-nesting-depth": 3,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export"],
      },
    ],
  },
};
