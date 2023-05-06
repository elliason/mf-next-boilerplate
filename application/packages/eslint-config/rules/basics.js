module.exports = {
  rules: {
    yoda: ["error", "never", { onlyEquality: true }], // apply yoda condition only to equality operators
    eqeqeq: ["error", "always"], // do not use type-unsafe equality operators
  },
};
