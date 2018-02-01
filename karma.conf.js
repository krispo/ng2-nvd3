module.exports = function (config) {
  config.set({
    basePath: '.',
    files: [
      'test/vendor.ts',
      'test/*.spec.ts'
    ],
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-coverage')

    ],
    preprocessors: {
      'test/vendor.ts': ['webpack', 'sourcemap'],
      'test/*.spec.ts': ['webpack', 'sourcemap']
    },
    logLevel: config.LOG_DEBUG,
    webpack: {
      devtool: 'source-map',
      module: {
        loaders: [
          {
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: ["", ".js", ".ts"]
      }
    },
    webpackServer: {
      noInfo: true
    },
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      },
      phantom_travis_ci: {
        base: 'PhantomJS',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['progress', 'coverage', 'karma-remap-istanbul'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    colors: true,
    exclude: [],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    port: 9876
  });

  if (process.env.TRAVIS) {
    config.browser = ['chrome_travis_ci'];
    config.singleRun = true;
    config.browserNoActivityTimeout = 90000;
  }
};
