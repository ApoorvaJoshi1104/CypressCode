const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jghwbq',
  e2e: {
    setupNodeEvents(on, config) {
      require('/Users/apoorvajoshi/node_modules/cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
