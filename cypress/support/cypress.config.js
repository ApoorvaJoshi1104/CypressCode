const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1b6e92f1-1d6e-4546-855f-450e4fce8f9b',
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