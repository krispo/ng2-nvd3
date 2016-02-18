module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'build/*.spec.js'
    ],
    frameworks: ['jasmine'],
    autoWatch: true,
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    exclude: [],
    port: 9876
  });
}