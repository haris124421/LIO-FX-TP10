const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 95000,
  defaultCommandTimeout:55000,
  //integrationFolder: "cypress/e2e",
  video:false,
  env: {
    BASEURL: 'http://192.168.122.191:7585',
    BUILD: '5.9.0.12',
    USERNAME: 'haris',
    PASSWORD: 'Test1'
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
