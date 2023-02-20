const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 95000,
  defaultCommandTimeout:55000,
  video:false,
  env: {
    BaseURLWeb: 'http://192.168.122.191:7585/Apps/Common/Views/LaunchPad.html',
    BaseURLApi: 'http://192.168.122.191:7585',
    AppVersion: 'Automation 5.9.0.11',
    UserName: 'haris',
    UserId: '230202120051910',
    "db": {
      "host": "192.168.122.191",
      "user": "sa",
      "password": "Trapeze1",
      "database": "db_name"
    }
    // stopLoop: 'false'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml'
  },
  },
});
