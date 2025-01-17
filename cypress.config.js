const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jghwbq',
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    
    },
  },
});
