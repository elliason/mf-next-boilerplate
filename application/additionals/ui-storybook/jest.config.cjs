const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    // testEnvironment: 'node',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    collectCoverage: true,
    verbose: true,
    setupFiles: ['./tests/setup.js'],
};
