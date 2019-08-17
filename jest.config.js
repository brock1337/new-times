export default {
  automock: false,
  bail: 0,
  browser: false,
  clearMocks: false,
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/*.{js, jsx}'
  ],
  coverageDirectory: '',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: -10
    },
    // Controller Coverage
    './src/controllers/': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  dependencyExtractor: '',
  displayName: '',
  errorOnDeprecated: false,
  extraGlobals: [''],
  forceCoverageMatch: [''],
  globals: {
    __DEV__: true
  },
  globalSetup: '',
  globalTeardown: '',
  maxConcurrency: 5,
  moduleDirectories: ['node_modules'],
  modulefileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  notify: false,
  notifyMode: 'failure-change',
  resetMocks: false,
  resetModules: false,
  restoreMocks: false,
  rootDir: '',
  runner: 'jest-runner',
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  timers: 'real',
  transformIgnorePatterns: ['/node_modules/'],
  verbose: false,
  watchIgnorePatterns: [],
  watchPlugins: []
}
