const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'NicoTest',
  chromeWebSecurity: false,
  retries: 0,
  video: false,
  reporterOptions: {
    mochafile: 'reports/test-results.xml',
    toConsole: true,
    outputs: true,
  },
  e2e: {
    setupNodeEvents(on, config){},
    specPattern: ['**/*.feature','cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    baseUrl: 'https://demo.testim.io',
   },
});
