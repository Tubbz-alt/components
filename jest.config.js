const enzyme = require.resolve('./utils/enzyme')
const raf = require.resolve('./utils/raf')
const testFramework = require.resolve('./utils/testFramework')

const coverageEnabled = process.argv.indexOf('--coverage') !== -1

module.exports = {
  clearMocks: true,
  collectCoverage: coverageEnabled,
  collectCoverageFrom: [
    'src/Atoms/**/**.js',
    'src/Molecules/**/**.js',
    'src/Organims/**/**.js',
    '!src/Tools/**',
    '!src/Atoms/Icons/crypto/**',
    '!src/Atoms/Icons/custom/**',
    '!src/Atoms/Icons/fa/**',
    '!src/Atoms/Icons/withStyle.js',
    '!**/__snapshots__/**',
    '!**/**.stories.js',
    '!**/**Map.js',
    '!**/index.js',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'text-lcov', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  setupFiles: [raf, enzyme],
  setupTestFrameworkScriptFile: testFramework,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  testURL: 'http://localhost/',
  transform: { '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest' },
}
