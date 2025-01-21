const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jghwbq',
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.js',
    setupNodeEvents(on, config) {
      return config;
    
    
    },
  },
});
