// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-diff-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("karma-mocha-reporter"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "../coverage/appv7"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true
    },
    jasmineDiffReporter: {
      color: {
        expectedBg: "bgRedBright",
        expectedWhitespaceBg: "bgRedBright",
        expectedFg: "white",
        actualBg: "bgGreenBright",
        actualWhitespaceBg: "bgGreenBright",
        actualFg: "white"
      },
      legacy: true
    },
    reporters: ["jasmine-diff", "mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    restartOnFileChange: true
  });
};
