const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'NicoTest',
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  retries: 0,
  video: false,
  reporterOptions: {
    mochafile: 'reports/test-results.xml',
    toConsole: true,
    outputs: true,
    reportDir: 'reports',
    charts: true,
    reportPageTitle: 'Reporte de Tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config)
    { 
       require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: ['**/*.feature','cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    baseUrl: 'https://demo.testim.io',
   },
});
