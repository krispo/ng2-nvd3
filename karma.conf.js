module.exports = function (config) {
  config.set({
    basePath: '.',
    files: [
      'test/vendor.ts',
      'test/*.spec.ts'
    ],
    preprocessors: {
      'test/vendor.ts': ['webpack', 'sourcemap'],
      'test/*.spec.ts': ['webpack', 'sourcemap']
    },
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
    frameworks: ['jasmine'],
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    exclude: [],
    port: 9876
  });

  if (process.env.TRAVIS) {
    config.browsers = ['chrome_travis_ci'];
    config.singleRun = true;
  }
};
