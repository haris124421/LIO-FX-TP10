const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 95000,
  defaultCommandTimeout:55000,
  //integrationFolder: "cypress/e2e",
  video:false,

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
