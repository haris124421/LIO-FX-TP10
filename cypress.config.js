const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 55000,
  defaultCommandTimeout:20000,
  env: {
    BaseURLWeb: 'http://192.168.122.191:7585/Apps/Common/Views/Login.html',
    BaseURLApi: 'http://192.168.122.191:7585',
    AppVersion: 'Automation 5.9.0.9',
    Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MmY5ZTRiNS1hZWJiLTRiYzgtOTk5MC1kNjU4MmQ5M2JlYzUiLCJ1c2VySWQiOiIyMzAyMDIxMjAwNTE5MTAiLCJ1c2VyTmFtZSI6ImhhcmlzIiwiZXhwIjoxNjc1ODQxMjE0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODMifQ.9ToOdej_rzo0cKk-gqYxnl6gVfMJpDXOqqxIwXcfe1Y',
    UserName: 'haris',
    UserId: '230202120051910'
    // stopLoop: 'false'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
