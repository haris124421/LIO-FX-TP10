const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 95000,
  defaultCommandTimeout:55000,
  video:false,
  env: {
    BaseURL: 'http://192.168.122.191:7585',
    AppVersion: 'Automation 5.9.0.11',
    USERNAME: 'haris',
    PASSWORD: 'Ab123'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml'
  },
  },
});
