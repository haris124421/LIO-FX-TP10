const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 95000,
  defaultCommandTimeout:55000,
  env: {
    BaseURLWeb: 'http://192.168.122.191:7585/Apps/Common/Views/LaunchPad.html',
    BaseURLApi: 'http://192.168.122.191:7585',
    AppVersion: 'Automation 5.9.0.9',
    Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNTk1ZjIzYS05MDM4LTQ2YjMtOTc1YS1iY2NjZjYzZTBhOTYiLCJ1c2VySWQiOiIyMzAyMDIxMjAwNTE5MTAiLCJ1c2VyTmFtZSI6ImhhcmlzIiwiZXhwIjoxNjc2MjE2MTY2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODMifQ.r6M0nNovVFkRNs75iwK9DlB9CL7ukKDXUXPX2nFaCZA',
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
  },
});
